


const handleIronSourcePlaySound = (callback: Function) => {
    if (IronSource.isPlayBgSound) {
        return;
    }

    if (IronSource.SoundState) {
        callback;
        // SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bgSound);
    }

    IronSource.isPlayBgSound = true;
}


const handleMuteSoundIronSource = (): number => {
    IronSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

    if (IronSource.State) {
        if (IronSource.State === 1 && !IronSource.SoundState && !IronSource.isEndGame) {
            IronSource.SoundState = true;
            return 1;
            // SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bgSound);
        }

        if (IronSource.State === 2 && IronSource.SoundState) {
            IronSource.SoundState = false;
            return 2;
            // SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bgSound);
        }
    }
}


export class IronSource {
    static SoundState: boolean = true;
    static isEndGame: boolean = false;
    static isPlayBgSound: boolean = false;
    static State: number = 1;

    static handleIronSourcePlaySound = handleIronSourcePlaySound;

    static handleMuteSoundIronSource = handleMuteSoundIronSource;
}


