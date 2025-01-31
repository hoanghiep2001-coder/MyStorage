import React, { useEffect } from "react";
import DefaultLayout from "./Components/DefaultLayout/DefaultLayout";
import icon from "../src/Assets/favicon/spotify.png";

function changeFavicon(src: string): void {
  const link: HTMLLinkElement =
    document.querySelector("link[rel='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "icon";
  link.href = src;
  document.getElementsByTagName("head")[0].appendChild(link);
}

const App: React.FC = () => {
  useEffect(() => {
    document.title = "D8 || Dương Hiệp Startup Web";
    changeFavicon(icon);
  }, []);

  return (
    <div className="App">
      <DefaultLayout />
    </div>
  );
};

export default App;
