import { useState, useEffect } from 'react';

const useFrontContent = (): string => {
  const [front, setFront] = useState<string>("");

  useEffect(() => {
    const frontContents: string[] = ["React app", "Flask API", "ML pipelines", "DL models"];
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setFront(frontContents[currentIndex]);
      currentIndex = (currentIndex + 1) % frontContents.length;
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return front;
};

export default useFrontContent;
