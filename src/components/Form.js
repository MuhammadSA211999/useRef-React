import React from 'react';
import { useEffect, useRef } from 'react';
import Input from './Input'
import { Time } from './Time';

const Form = () => {
    const inputRef = useRef(null)
    useEffect(() => {
        // inputRef.current = input field ti 
        inputRef.current.focus()
    }, [])

    return (
        <div> <p>
            <Input ref={inputRef} type="text" placeholder='write something' />
        </p>
            <p>
                <Time></Time>
            </p>

        </div>
    );
};

export default Form;