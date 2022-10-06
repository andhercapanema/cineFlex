import styled from "styled-components";

export const StyledSessionsPage = styled.main`
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    padding: 0 25px;

    h2 {
        margin: 45px auto 38px;

        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
    }
`;

export const SessionDay = styled.div`
    h3 {
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
    }

    button {
        width: 83px;
        height: 43px;
        background: #e8833a;
        border-radius: 3px;
        border: none;
        margin: 22px 8px 22px 0;
        cursor: pointer;

        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.02em;
        color: #fff;
    }
`;
