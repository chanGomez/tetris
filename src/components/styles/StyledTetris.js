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
    right: 10px;
    top: 30px;
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
  margin: 0 auto;
}

.icons p{
  font-size: 14px;
  margin: 0 auto;
  text-align: center;
}

#folder-bio{
  width: 3.5rem;
  padding: 10px;
  cursor: pointer;
}

#game-icon{
  width: 8rem;
  margin: 0 auto;
  cursor: pointer;
}

.game p {
  margin: -20px;
  color: white;
}


.tetris-window{
  position : relative;
  left: 15rem;;
  top: 1rem;
  z-index: 10; 
  width: 700px
}

#windows-98{
  width: 4rem;
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto 0;
  padding-top: 16px;
  cursor: pointer;
}

.windows-98-icon{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}


a{
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

active{
  width: 400px;
  z-index: 100;
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
    // rgb(0, 0, 255) 0%,
    // rgb(155, 30, 0),
    // rgb(60, 179, 113),
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
background-size: 2rem 2rem;

aside{
    width: 100%;
    max-width: 200px;
    display: block;
}

`