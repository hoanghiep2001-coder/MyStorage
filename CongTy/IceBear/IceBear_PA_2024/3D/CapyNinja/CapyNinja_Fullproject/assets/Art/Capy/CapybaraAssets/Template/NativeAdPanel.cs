using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;
using Color = UnityEngine.Color;

namespace IBToolKit
{
    public class NativeAdPanel : MonoBehaviour
    {
        public string AdsPosition;

        [Header("Components")]
        public GameObject ContainerObj;

        public RawImage ContentImage;
        public RawImage IconLogoImage;
        public RawImage IconAdChoicesImage;
        public Text HeadLineText;
        public Text CallToActionText;
        public Text AdvertiserText;
        public Text RatingText;
        public GameObject StoreGoogleObj;
        public GameObject StoreAppleObj;

        private string constCTAText;

        public Animator animator;

        public List<string> ListAnim;

        private NativeAdData currentData;

        private void Awake()
        {
            constCTAText = CallToActionText.text;
        }

        void Start()
        {
            Advertisements.Instance.OnAdShow += (adType) =>
            {
                Hide();
            };

            Advertisements.Instance.OnAdHide += (adType) =>
            {
                OnShow();
            };
        }


        void HandleNativeAdLoaded(AdEventData adEventData)
        {
            if (currentData == null)
            {
                NativeAdData nativeAd = Advertisements.Instance.GetNativeData(AdsPosition);

                if (nativeAd != null) currentData = nativeAd;

                Init();
            }
        }
        private void OnEnable()
        {
            Hide();

            if(!Advertisements.Instance.CanShowAds() && Advertisements.Instance.removeNativeAdsWhenRemoveAds) return;

            NativeAdData nativeAd = Advertisements.Instance.GetNativeData(AdsPosition);

            if (nativeAd != null)
            {
                currentData = nativeAd;

                Init();
            }
            else
            {
                if (currentData != null) Init();
            }

            Advertisements.Instance.OnNativeLoaded += HandleNativeAdLoaded;

            if (Advertisements.Instance.removeNativeAdsWhenRemoveAds) Advertisements.Instance.OnRemoveAdsSuccess += Hide;
        }

        private void OnDisable()
        {
            OnHide();

            Advertisements.Instance.OnNativeLoaded -= HandleNativeAdLoaded;

            if(Advertisements.Instance.removeNativeAdsWhenRemoveAds) Advertisements.Instance.OnRemoveAdsSuccess -= Hide;
        }

        public void OnHide()
        {
            Hide();
        }

        void Hide()
        {
            try
            {
                if (ContainerObj != null) ContainerObj.SetActive(false);
            }
            catch { }
        }

        void PlayAnim()
        {
            try
            {
                if (animator == null) return;

                string randomAnim = ListAnim[UnityEngine.Random.Range(0, ListAnim.Count)];

                animator.Play(randomAnim);
            }
            catch { }
        }

        void OnShow()
        {
            try
            {
                if (ContainerObj != null && currentData != null) ContainerObj.SetActive(true);
            }
            catch { }
        }

        void Init()
        {
            if (currentData == null) return;

            try
            {
                PlayAnim();

                if (currentData.ImageTextures.Count > 0)
                {
                    if (ContentImage != null)
                    {
                        ContentImage.texture = currentData.ImageTextures.FirstOrDefault();

                        ContentImage.color = Color.white;
                    }
                }

                if(currentData.IconTexture != null)
                {
                    if (IconLogoImage != null)
                    {
                        IconLogoImage.gameObject.SetActive(true);
                        IconLogoImage.texture = currentData.IconTexture;
                        IconLogoImage.color = Color.white;
                    }
                }
                else
                {
                    if (IconLogoImage != null) IconLogoImage.gameObject.SetActive(false);
                }

                if (currentData.IconAdChoicesTexture != null)
                {
                    if (IconAdChoicesImage != null)
                    {
                        IconAdChoicesImage.gameObject.SetActive(true);
                        IconAdChoicesImage.texture = currentData.IconAdChoicesTexture;
                        IconAdChoicesImage.color = Color.white;
                    }
                }
                else
                {
                    if (IconAdChoicesImage != null) IconAdChoicesImage.gameObject.SetActive(false);
                }

                if (HeadLineText != null) HeadLineText.text = currentData.HeadlineText;

                if (AdvertiserText != null) AdvertiserText.text = currentData.AdvertiserText;

                if (RatingText != null)
                {
                    if (!string.IsNullOrEmpty(currentData.StarRating.ToString("F1")))
                    {
                        if (currentData.StarRating < 1)
                        {
                            RatingText.transform.parent.gameObject.SetActive(false);
                        }
                        else
                        {
                            RatingText.text = currentData.StarRating.ToString("F1");
                        }
                    }
                    else
                    {
                        RatingText.transform.parent.gameObject.SetActive(false);
                    }
                }

                if (CallToActionText != null) CallToActionText.text = string.IsNullOrEmpty(currentData.CallToActionText) ? "INSTALL" : currentData.CallToActionText;

                Advertisements.Instance.NativeAdRegisterGameObject(ContainerObj);

                OnShow();
            }
            catch
            {              

            }

        }
    }
}
