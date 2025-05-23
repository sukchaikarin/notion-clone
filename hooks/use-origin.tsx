import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }

  return origin;
};
