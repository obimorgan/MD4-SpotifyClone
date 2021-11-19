/** @format */

import "./App.css";
// import { BrowserRouter, Routes,} from "react-router-dom";
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
<Container fluid>
    <Row >
      <Col className="d-flex">
        <NavBar/>
        <Home/>
      </Col>
    </Row>
</Container>
  );
}

export default App;
