import React from "react";
import * as S from "./style";
import { Seat } from "../../pages/SeatsPage/style";

function SeatsLabel() {
    return (
        <S.StyledSeatsLabel>
            <S.LabelDescription>
                <Seat
                    color={"GREEN"}
                    disabled={true}
                    data-identifier="seat-selected-subtitle"
                ></Seat>
                <p>Selecionado</p>
            </S.LabelDescription>
            <S.LabelDescription>
                <Seat
                    color={"GREY"}
                    disabled={true}
                    data-identifier="seat-available-subtitle"
                ></Seat>
                <p>Disponível</p>
            </S.LabelDescription>
            <S.LabelDescription>
                <Seat
                    color={"YELLOW"}
                    disabled={true}
                    data-identifier="seat-unavailable-subtitle"
                ></Seat>
                <p>Indisponível</p>
            </S.LabelDescription>
        </S.StyledSeatsLabel>
    );
}

export default SeatsLabel;
