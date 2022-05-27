import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import "./App.css";
import LisktInfo from "./component/ListInfo";
import SignalCellularOffIcon from "@mui/icons-material/SignalCellularOff";
import { pink } from "@mui/material/colors";
import PageInfo from "./component/PageInfo";
import Dialog from "@mui/material/Dialog";

const Header = styled("div")`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const AppContainer = styled("div")`
  background-color: whitesmoke;
`;
const ContainerList = styled("div")`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding: 5px 100px 100px 100px;
`;

export default function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filterStreet, setFilterStreet] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fechfunction = () => {
    fetch(
      "https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f"
    )
      .then((response) => response.json())
      .then((res) => {
        if (res) {
          setData(res);
        }
      });
  };
  useEffect(() => {
    fechfunction();
  }, []);

  const handleFilter = (id) => {
    setFilter(data.filter((el) => el.id === id));
  };
  const handleFilterStreet = (city) => {
    setFilterStreet(data.filter((el) => el.address.city === city));
  };

  console.log(filterStreet);
  return (
    <AppContainer>
      <Header>
        <SignalCellularOffIcon
          sx={{ color: pink[500] }}
        ></SignalCellularOffIcon>
        <p>LOGO</p>
      </Header>

      <ContainerList>
        <LisktInfo
          color={pink[500]}
          name="NAME"
          description="DESCRIPTION"
        ></LisktInfo>
        {data.map((el) => {
          return (
            <LisktInfo
              onClick={() => {
                handleClickOpen();
                handleFilter(el.id);
                handleFilterStreet(el.address.city);
              }}
              color="black"
              key={el.id}
              name={el.name}
              description={el.description}
            ></LisktInfo>
          );
        })}
      </ContainerList>

      <Dialog fullScreen open={open} onClose={handleClose}>
        {filter.map((el, i) => {
          return (
            <PageInfo
              name={el.name}
              data={filterStreet}
              onClick={() => {
                handleClose();
              }}
              key={i}
              src={el.image}
              phone={el.phone}
              email={el.email}
              number={el.address.number}
              city={el.address.city}
              zip={el.address.zip}
              country={el.address.country}
              street={el.address.street}
            ></PageInfo>
          );
        })}
      </Dialog>
    </AppContainer>
  );
}
