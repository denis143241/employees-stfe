import styled from "styled-components";

export const BoardContainer = styled('div')`
  margin: 0 5%;
  height: 100%;
`

export const BoardGrid = styled('section')`
  height: 100%;
  display: grid;
  grid-template: 1fr / repeat(auto-fill, minmax(250px, 300px));
  grid-auto-columns: minmax(300px, 350px);
  gap: 5%;
  overflow-x: auto;
`

export const BoardColumn = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-column: ${({ column }) => column };
`

export const BoardHeader = styled('h2')`
  padding: 0;
  margin: 12px 0;
  font-size: 24px;
  text-align: center;
`

export const BoardTasks = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`