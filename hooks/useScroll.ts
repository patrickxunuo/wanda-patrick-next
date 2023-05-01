import { useEffect, useState } from "react";
import { useEventListener } from "./useEventListener";

type ScrollObj = {
  scrollX: number;
  scrollY: number;
};

export default function useScroll(): ScrollObj {
  if (typeof document === "undefined") {
    return {
      scrollX: 0,
      scrollY: 0,
    };
  }
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );

  const scrollX = -bodyOffset.left;
  const scrollY = -bodyOffset.top;

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect());
  };

  useEventListener("scroll", listener);

  return {
    scrollY,
    scrollX,
  };
}
