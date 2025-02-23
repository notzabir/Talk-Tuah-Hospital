import { useEffect } from 'react';

declare global {
  interface Window {
    chatWidgetScriptLoaded?: boolean;
    ChatWidgetConfig?: {
      projectId: string;
    };
  }
}

const ChatWidget = () => {
  useEffect(() => {
    if (window.chatWidgetScriptLoaded) return;

    window.ChatWidgetConfig = {
      projectId: "67b00d7b01fef400cf6e78ee", 
    };

    const chatWidgetScript = document.createElement("script");
    chatWidgetScript.type = 'text/javascript';
    chatWidgetScript.src = "https://storage.googleapis.com/cdwidget/dist/assets/js/main.js";
    document.body.appendChild(chatWidgetScript);

    chatWidgetScript.onload = () => {
      window.chatWidgetScriptLoaded = true;
    };

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(chatWidgetScript);
    };
  }, []);

  return <div id="cd-widget"></div>;
};

export default ChatWidget;