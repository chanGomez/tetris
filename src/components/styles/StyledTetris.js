import styled from "styled-components";
import bgImage from "../../img/Windows98.jpg"


export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: 100vw 100vh;
  overflow: hidden;

.icons{
    width: auto;
    position : fixed;
    right: 50px;
    top: 30px;
    // margin-top: -500px;
    display: flex;
    flex-direction: column;
    z-index: 0; 
    display: flex;
    justify-content: center;
}
.folder{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.icons p{
  font-size: 14px;
  margin: 0 auto;
  text-align: center;
}

#folder-bio{
  width: 3rem;
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto 0;
  padding: 10px;
  cursor: pointer;
}

#game-icon{
  width: 6rem;
  margin: 0 auto;
  cursor: pointer;
}

p{

}

.game p {
  margin: -15px;
  color: white;
}


.tetris-window{
  // width: 900px;
  position : absolute;
  left: 15rem;;
  top: 1rem;
  z-index: 10; 
}
`;

export const StyledTetris = styled.div`
display: flex;
justify-content: space-evenly;
padding: 40px;
margin: 0 auto;
max-width: 900px;
gap: 30px;
background-color: black;
/* Add your background pattern here */
background: repeating-conic-gradient(
    rgba(195, 195, 197, 0.1) 0%,
    rgb(7, 7, 7) 0%,
    rgba(195, 195, 197, 0.3) 20%
  ),
  radial-gradient(rgba(7, 112, 94, 0.3), rgba(61, 26, 189, 0.3)),
  linear-gradient(rgba(251, 14, 140), rgba(63, 13, 117, 4.2)),
  radial-gradient(
    circle,
    rgb(255, 252, 252),
    rgb(10, 10, 10) 30%,
    rgba(84, 84, 88, 0.562) 0%
  );
background-size: 20px 20px;


aside{
    width: 100%;
    max-width: 200px;
    display: block;
}

`