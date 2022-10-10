import styled from "styled-components";

export const StyledSeatsLabel = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    max-width: 340px;
`;

export const LabelDescription = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    p {
        margin-top: -9px;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4e5a65;
    }
`;
