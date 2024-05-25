import React from "react";
import { ModalMainDiv, ModalDiv } from "./modal.styled";
import InputField from "../InputField";

const Modal = () => {
    return (
        <ModalMainDiv>
            <ModalDiv>
                <h3>Enter Countdown Details</h3>
                <InputField />
            </ModalDiv>
        </ModalMainDiv>
    )
};

export default Modal;