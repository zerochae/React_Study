import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.js";

function App() {
  let [shoes, changeShoe] = useState(data);

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* 대문  시작*/}
      <div className="jumbotron">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit
          blanditiis fugiat inventore consectetur cupiditate maxime explicabo
          voluptatibus saepe, dolores fugit, veniam aliquid, eligendi accusamus
          commodi temporibus nobis debitis aut.{" "}
        </p>
        <p>
          {" "}
          <Button variant="primary"> read more </Button>{" "}
        </p>
      </div>
      {/* 대문 끝 */}
      <div className="container">
        <div className="row">
          {shoes.map((shoe, i) => {
            return <Item shoe={shoe} i={i} key={i}/>;
          })}
        </div>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <div className="col-md-4">
      <img
        src={ `https://codingapple1.github.io/shop/shoes${props.i+1}.jpg` }
        alt={`shoe${props.i+1}`}
        width="100%"
      />
      <h4> {props.shoe.title} </h4>
      <p>
        {" "}
        {props.shoe.content} & {props.shoe.price}{" "}
      </p>
    </div>
  );
}

export default App;
