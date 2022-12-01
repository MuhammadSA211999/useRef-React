import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Form = () => {
    const inputRef = useRef(null)
    useEffect(() => {
        // inputRef.current = input field ti 
        inputRef.current.focus()
    }, [])

    return (
        <div> <p>
            <input ref={inputRef} type="text" placeholder='write something' />
        </p>

        </div>
    );
};

export default Form;