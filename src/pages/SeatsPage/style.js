import styled from "styled-components";

const seatColor = {
    GREEN: { background: "#1AAE9E", border: "#0E7D71" },
    GREY: { background: "#C3CFD9", border: "#808F9D" },
    YELLOW: { background: "#FBE192", border: "#F7C52B" },
};

export const StyledSeatsPage = styled.main`
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
    margin-bottom: 147px;

    h2 {
        margin: 45px 0 38px;

        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
    }
`;

export const SessionMap = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-left: 8px;
    max-width: 340px;
`;

export const Seat = styled.li`
    height: 26px;
    width: 26px;
    background: ${({ color }) => seatColor[color].background};
    border: 1px solid ${({ color }) => seatColor[color].border};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    margin-bottom: 18px;
    cursor: ${({ disabled }) => (!disabled ? "pointer" : "default")};

    p {
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.04em;
        color: #000;
    }
`;

export const SeatsLabel = styled.ul`
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

export const BookingForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 225px;
        height: 42px;
        margin-top: 43px;
    }
`;

export const StyledInput = styled.div`
    margin: 0 auto 14px;

    label {
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
        font-size: 18px;

        &::placeholder {
            font-style: italic;
            font-size: 18px;
            line-height: 21px;
            color: #afafaf;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &[type="number"] {
            -moz-appearance: textfield;
        }
    }
`;
