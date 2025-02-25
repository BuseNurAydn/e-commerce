
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

function App() {

  return (
    <>
      <CssBaseline /> {/*margini sıfırlamak için */}
      <Header />
      <Container>
        <Outlet/> {/*Paketlerin içeriği değişecek duruma göre */}
      </Container>
     
    </>
  )
}

export default App;
