import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 4px solid #9d9d9d;
  width: 100%;
  max-width: 25vw;
  // max-height: 700px;
  background: #111;
`;