import { useEffect, useCallback } from "react";

export const useOnClickOutside = (ref, handler) => {
  const handleClick = useCallback(
    (event) => {
      const el = ref?.current;
      if (!el || el.contains(event.target)) {
        return;
      }

      event && event.preventDefault();
      event && event.stopPropagation();

      handler && handler(event);
    },
    [ref, handler]
  );

  const onAdd = useCallback(() => {
    document.addEventListener("click", handleClick);
  }, [handleClick]);

  const onRemove = useCallback(() => {
    document.removeEventListener("click", handleClick);
  }, [handleClick]);

  useEffect(() => {
    onAdd();

    return () => {
      onRemove();
    };
  }, [onAdd, onRemove]);
};
