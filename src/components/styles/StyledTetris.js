import styled from "styled-components";
import bgImage from "../../img/Windows98.jpg"


export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: 100vw 100vh;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
display: flex;
justify-content: space-evenly;
align-item: flex-start;
padding: 40px;
margin: 0 auto;
max-width: 900px;
gap: 30px;
background-color: black;

aside{
    width: 100%;
    max-width: 200px;
    display: block;
}
`