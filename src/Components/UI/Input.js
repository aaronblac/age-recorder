import React from 'react';
import { useState } from 'react';
import '../Styles/index';

const Input = (props) => {

    const [inputInfo, setInputInfo] = useState("");

  const handleChange = (e) =>{
    const {value} = e.target;
    setInputInfo(value);
  }
  
    return(
        <div>
            <label htmlFor={props.labelId}>{props.labelValue}</label>
            <input  onChange={handleChange}  id={props.labelId} placeholder={props.placeholder} value={inputInfo}></input>
        </div>
    )
}

export default Input;