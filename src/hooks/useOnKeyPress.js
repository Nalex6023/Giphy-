import { useEffect } from "react";
export const useOnKeyPress = (callback, targetkey) => {
  useEffect(() => {
    const keyPressHandler = (ev) => {
      if (ev.key === targetkey) {
        callback();
      }
    };
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [callback, targetkey]);
};
