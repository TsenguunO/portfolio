import { useEffect, useState } from 'react';
import { BoxesLoader } from 'react-awesome-loaders';

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome to my portfolio";

  // Text animation effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 800);
      } 
    }, 75);
 
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-40 bg-black text-gray-100 flex flex-col items-center justify-center">
      {/* BoxesLoader from react-awesome-loaders */}
      <BoxesLoader
        boxColor={"#3d5a81"}
        shadowColor={"#85C1E9"}
        style={{ marginBottom: "10px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />

      {/* Animated loading text */}
      <div className="mb-30 text-4xl font-mono font-bold">
        {text}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
};
