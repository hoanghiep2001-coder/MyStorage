import { createContext, useState, ReactNode, useEffect } from "react";

interface ContextType {
    accessToken: string;
    webResponsiveStyle: string;
}

const defaultValue: ContextType = {
    accessToken: "",
    webResponsiveStyle: "",
};
const context = createContext<ContextType>(defaultValue);

interface ProviderProps {
    children: ReactNode;
}

const CLIENT_ID: string = "d6c9ec83fa3c42bda1d8020b9b094003";
const CLIENT_SECRET: string = "098c5ea67e9849ce93fc40ee6102ce9d";

const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [accessToken, setAccessToken] = useState(defaultValue.accessToken);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
    const [webResponsiveStyle, setWebResponsiveStyle] = useState(defaultValue.webResponsiveStyle);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };


    // get AccessToken
    useEffect(() => {
        var authParameters = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
        }

        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token));
    }, []);
    // ------------------------

    // get changes of resize
    useEffect(() => {
        if(windowWidth <= 576) {
            setWebResponsiveStyle("is-phone");
          } else if(windowWidth >= 740 && windowWidth <= 1113) {
            setWebResponsiveStyle("is-tablet");
          } else {
            setWebResponsiveStyle("is-pc");
          }
      
          return () => {
            window.removeEventListener("resize", handleResize);
          };
    }, [windowWidth]);
    // ------------------------

    const value = {
        accessToken,
        webResponsiveStyle,
    }

    return (<context.Provider value={value}>{children}</context.Provider>);
}

export { Provider, context };