import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #c3cfd9;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 34px;
    line-height: 40px;
    color: #e8833a;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    ion-icon {
        position: absolute;
        top: calc(67px - 36px) / 2;
        left: 30px;
        font-size: 36px;
        cursor: pointer;
    }

    h1 {
        cursor: pointer;
    }
`;
