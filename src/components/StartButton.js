import React from "react";
import { StyledStartButton } from "./styles/StyleStartButton";

const StartButton = ({ callBack}) => (
    <StyledStartButton noClick={callBack}> Start Game </StyledStartButton>
)

export default StartButton;