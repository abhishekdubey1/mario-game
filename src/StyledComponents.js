import styled from "styled-components";

export const Maze = styled.div`
  display: grid;
  grid-template-columns: ${({ num }) => `repeat(${num}, auto)`};
  grid-template-rows: repeat(5, auto);
  width: max-content;
`;
