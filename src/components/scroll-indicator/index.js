import { useEffect, useState } from "react";
import "./styles.scss";

export function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setProgress(progress);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator">
      <h1>Scroll Indicator</h1>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ "--progress": `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
