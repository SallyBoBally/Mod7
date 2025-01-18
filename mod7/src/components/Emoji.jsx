import React from "react";
import {useEmoji} from './EmojiContext';

function Emoji() {
    const { emoji, changeMood } = useEmoji();
  
    return (
      <div className="Emoji componentBox">
        <h1>Current Mood</h1>
        <p style={{ fontSize: '2rem' }}>{emoji}</p>
        <button onClick={changeMood}>Change Mood</button>
      </div>
    );
  }
  
  export default Emoji;