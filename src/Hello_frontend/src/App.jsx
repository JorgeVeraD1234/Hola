import { useState } from 'react';
import{Navbar, Container} from "react-bootstrap"
import TALION from "./images/TALION.jpg"
function App() {
 return(
  <>
  <Navbar>
    <Container>
<Navbar.Brand>
  <img src={TALION} alt="Ta" />
</Navbar.Brand>

    </Container>
  </Navbar>
  </>
 )
}

export default App;
