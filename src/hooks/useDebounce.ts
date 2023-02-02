import { useEffect, useState } from "react";

/**
 * The debounce uses an internal timer (or can be passed as a 2nd parameter) to execute the callback function and return a value
 *
 * @defaultDelay 500ms
 *
 */

export function useDebounce<Value = undefined>(value: Value, delay?: number) {
  const [debouncedValue, setDebouncedValue] = useState<Value>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
