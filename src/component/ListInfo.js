import * as React from "react";
import { styled } from "@mui/material/styles";

const Text = styled("p")`
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 30%;
  padding: 10px;
`;
const Container = styled("div")`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
  :hover {
    background-color: whitesmoke;
  }
`;

export default function LisktInfo(props) {
  return (
    <Container onClick={props.onClick}>
      <Text sx={{ color: `${props.color}` }}>{props.name}</Text>
      <Text sx={{ color: `${props.color}` }}>{props.description}</Text>
    </Container>
  );
}
