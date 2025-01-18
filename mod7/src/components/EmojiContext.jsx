import React, {createContext, useState, useContext} from "react";

const EmojiContext = createContext();
export function EmojiProvider({ children }) {
    const [emoji, setEmoji] = useState('😍');
    const changeMood = () => {
        const emojis = ['😛', '😐', '😠'];
        const randomEmoji = emoji[Math.floor (Math.random() * emoji.length)];
        setEmoji(randomEmoji);
    };
    return (
        <EmojiContext.Provider value = {{emoji, changeMood}}>
            {children}
        </EmojiContext.Provider>
    );
}
export function useEmoji(){
    return useContext(EmojiContext);
}