import styled from "styled-components";

export const StyledInput = styled.div`
    margin: 0 auto 14px;

    p {
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 2px;
    }

    input {
        width: calc(100vw - 32px);
        max-width: 348px;
        height: 51px;
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        padding-left: 18px;

        &::placeholder {
            font-style: italic;
            font-size: 18px;
            line-height: 21px;
            color: #afafaf;
        }
    }
`;
