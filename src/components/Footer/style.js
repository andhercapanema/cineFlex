import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: #dfe6ed;
    height: 117px;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    border-top: 1px solid #9eadba;
    display: flex;
    padding: 14px 10px;
`;

export const ImgCard = styled.div`
    height: 89px;
    width: 64px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 8px;
    background-color: #fff;

    img {
        height: 73px;
        width: 48px;
    }
`;

export const ChosenMovieInfo = styled.div`
    height: 89px;
    margin-left: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        font-size: 26px;
        line-height: 30px;
    }
`;
