import React, { useState } from 'react';
import juliusomo from '../../src/assets/image-juliusomo.webp';
import './AddComent.css';

const AddComent = ({ addnewpost }) => {
    const [inputValue, setInputValue] = useState("Add a comment...");

    const handleOnClick = () => {
        addnewpost(inputValue);
        setInputValue("Add a comment...");
    };

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div id='newpost'>
            <img id='picmob' className='pic' src={juliusomo} alt="user pic"/>
            <input id='writehere' 
                value={inputValue} 
                onChange={handleOnChange} />
            <button id='supmit' onClick={handleOnClick}>send</button>
        </div>
    );
};

export default AddComent;
