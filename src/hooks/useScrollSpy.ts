import { useEffect, useState } from "react";

export default function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      ids.forEach((id) => {
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.getBoundingClientRect().top - offset;
          if (top <= 0) current = id;
        }
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}