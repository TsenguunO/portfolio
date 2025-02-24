import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Welcome to my porfolio!";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            
            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 500);
                // onComplete(); // Call onComplete when the text animation is done
            } 
        }, 100);
 
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}<span className="animate-pulse">|</span>
            </div> {/* ✅ Closing tag added here */}
    
            <div className="w-[300px] h-[7px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-full h-full bg-blue-800 shadow-[0_0_5px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
}