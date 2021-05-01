import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.bckColor};
  width: 100%;
  height: auto;
  padding: var(--page-padding);
`;
export const Frame = styled.div`
  background-color: ${({ bckColor = "white" }) => `${bckColor}`};
  width: 100%;
  height: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: ${({ gapRow = 0, gapColum = 0 }) => `${gapRow}px ${gapColum}px`};
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
`;

export const GridItem = styled.div`
  width: 100%;
  height: auto;
  grid-column: ${({ start = "auto", end = "auto" }) => `${start}/${end}`};
`;
