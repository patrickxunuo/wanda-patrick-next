import { useEffect, useState } from "react";
import { useEventListener } from "./useEventListener";

type WindowSize = {
  width: number;
  height: number;
};

export default function useWindowSize(): WindowSize {
  if (typeof document === "undefined") {
    return {
      width: 0,
      height: 0,
    };
  }
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return windowSize;
}
