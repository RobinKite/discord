import { useState, useRef, useEffect } from "react";
import throttle from "lodash/throttle";

export const useBbox = () => {
  const ref = useRef();
  const [bbox, setBbox] = useState({});

  const throttledSetBbox = throttle(() => {
    setBbox(ref && ref.current ? ref.current.getBoundingClientRect() : {});
  }, 1000);

  useEffect(() => {
    throttledSetBbox();
    window.addEventListener("resize", throttledSetBbox);
    return () => window.removeEventListener("resize", throttledSetBbox);
  }, []);

  return [bbox, ref];
};
