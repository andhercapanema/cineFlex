import React from "react";
import { StyledInput } from "./style";

function Input({ description, placeholder }) {
    return (
        <StyledInput>
            <p>{description}:</p>
            <input type="text" placeholder={placeholder}></input>
        </StyledInput>
    );
}

export default Input;
