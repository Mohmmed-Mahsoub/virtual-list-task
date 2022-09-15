import { useEffect, useRef } from "react";

// select the prev state or the initial state
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
