import { useEffect, useState } from "react";

export default function useMouse() {
  const [cursorPosition, setCursorPosition] = useState([200, 100]);
  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      setCursorPosition([event.clientX, event.clientY]);
    });
  }, []);
  return cursorPosition;
}
