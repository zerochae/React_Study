/* eslint-disable */
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import React ,{ useState , useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from "./Detail.js";
import Cart from "./Cart.js"
import axios from 'axios';
import data from "./data.js";
import { Link, Route, Switch ,useHistory } from "react-router-dom";

let 재고context = React.createContext();
function App() {

  let [shoes, changeShoe] = useState(data);

  let [재고, 재고변경] = useState([10,11,12]);


  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/detail/0">
                Detail
              </Nav.Link>
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
      <Route exact path="/">
        <div>
          {" "}
          {/* 대문  시작*/}
          <div className="jumbotron">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit
              blanditiis fugiat inventore consectetur cupiditate maxime
              explicabo voluptatibus saepe, dolores fugit, veniam aliquid,
              eligendi accusamus commodi temporibus nobis debitis aut.{" "}
            </p>
            <p>
              {" "}
              <Button variant="primary"> read more </Button>{" "}
            </p>
          </div>
          {/* 대문 끝 */}
        </div>
      </Route>
      <재고context.Provider value={재고}>
      <Route path="/detail/:id" >
        <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
      </Route> 
        </재고context.Provider>
      <Route path="/">
        {/* 신발 카드 시작 */}
        <div className="container">
          <div className="row">
            {/* <Route path="/detail/:id">
              <Item shoes={shoes} />;
              </Route> */}
              {shoes.map( (shoe, i) => {
                return <Item shoe={shoe} i={i} key={i} />;
              })}
          </div>
          <button className="btn btn-primary" onClick={()=>{

            axios
            .get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              changeShoe([...shoes,...result.data])
             })
            .catch(()=>{});

          }}> 더보기 </button>
        </div>
        {/* 신발 카드 끝*/}
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>
    </div>
  );
}

function Item(props) {

  let history = useHistory();

  return (
    <div className="col-md-4" onClick={()=>{ history.push(`/datail/${props.i}`) }}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        alt={`shoe${props.i + 1}`}
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
