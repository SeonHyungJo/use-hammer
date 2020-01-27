import { useState, useEffect, useCallback } from "react";

interface Props {
  onHammer: Function;
  second?: number;
}

const useHammer = ({ onHammer, second = 700 }: Props) => {
  const [isMouseDown, setMouseDown] = useState(false);
  const [isLongPress, setLongPress] = useState(false);

  const handleDown = useCallback(() => {
    setMouseDown(true);
  }, [isMouseDown]);

  const handleUp = useCallback(() => {
    setMouseDown(false);
    setLongPress(false);
  }, [isMouseDown]);

  useEffect(() => {
    if (isMouseDown) {
      const timer = setTimeout(() => {
        setLongPress(true);
      }, second);

      return () => {
        clearTimeout(timer);
      };
    }

    return;
  }, [isMouseDown]);

  useEffect(() => {
    if (isLongPress) {
      onHammer();
    }
  }, [isLongPress]);

  return [handleDown, handleUp];
};

export default useHammer;
