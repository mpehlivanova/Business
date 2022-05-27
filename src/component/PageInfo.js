import * as React from "react";
import { styled } from "@mui/material/styles";
import LisktInfo from "./ListInfo";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 50px;
  background-color: whitesmoke;
`;
const Img = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ContainerInfo = styled("div")`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 100px;
  box-sizing: border-box;
`;
const InfoAddress = styled("div")`
  width: 25%;
  height: 50%;
  box-sizing: border-box;
  padding: 50px;
  margin: auto;
`;
const InfoAddressNearBy = styled("div")`
  width: 50%;
  height: 50%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Close = styled("div")`
  display: flex;
  justify-content: right;
  box-sizing: border-box;
`;
const Text = styled("h3")`
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 30%;
  padding: 10px;
`;

export default function PageInfo(props) {
  return (
    <Container>
      <Close>
        <CloseIcon onClick={props.onClick}></CloseIcon>
      </Close>
      <Text>{props.name}</Text>

      <Img src={props.src} alt="img"></Img>
      <ContainerInfo>
        <InfoAddress>
          <h3>Address</h3>
          <p>
            {props.number}, {props.city}, {props.street} Street
          </p>
          <p>
            {props.country}, {props.zip}
          </p>
        </InfoAddress>
        <InfoAddress>
          <h3>Contact</h3>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </InfoAddress>
        <>
          <InfoAddressNearBy>
            <h3>Companies in the city</h3>
            {props.data.map((el) => {
              return (
                <LisktInfo
                  key={el.id}
                  color="black"
                  name={el.name}
                  description={el.address.city}
                ></LisktInfo>
              );
            })}
          </InfoAddressNearBy>
        </>
      </ContainerInfo>
    </Container>
  );
}
