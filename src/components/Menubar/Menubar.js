// import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./Menubar.css";

const Menubar = () => {
  // const { user } = useFirebase();
  const { user, handleLogout } = useFirebase();
  return (
    <div>
     <Navbar bg="light"  expand="lg">
  <Container fluid>
    <Navbar.Brand as={Link} to="/home">KH Tour</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to="/myOrder">MyOders</Nav.Link>
        {/* <Nav.Link as={Link} to="/services">ManegeServices</Nav.Link> */}
        <Nav.Link as={Link} to="/adminDashBoard">Admin</Nav.Link>
      
        {user?.email ?
                            <Button onClick={handleLogout} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
       
       
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Menubar;


{/* <div className="menubar-container">
<div className="menubar container">
  <div className="row">
    <div className="col-md-2 col-sm-12">
      <div className="logo-img">
        <img
          className="p-2 w-100"
          src="https://i.ibb.co/bHgM6b9/png-transparent-logo-contracting-photography-logo-symbol-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
    <div className="col-md-10 col-sm-12">
      <div className="menu-items text-center">
        <ul className="d-flex align-items-end justify-content-end me-5">
          <li className="items p-2">
            <Link className="items p-2" to="/home">
              Home
            </Link>
          </li>

          <li className="items p-2">
            <Link className="items p-2" to="/services">
              Services
            </Link>
          </li>
          <li className="items p-2">
            <Link className="items p-2" to="/myOrder">
              MyOrders
            </Link>
          </li>

          <Link to="/adminDashboard">
            <button className="items btn btn-danger p-1 ">Admin</button>
          </Link>
          <Link to="/admin">
            <button
              onClick={handleLogout}
              className="items btn btn-info p-1 "
            >
              Logout
            </button>
          </Link>

          <Link className="items" to="/admin">
            <li>{user?.email}</li>
          </Link>
        </ul>
      </div>
    </div>
  </div>
</div>
</div> */}



//
{/* <Link to="/admin">
            <button
              onClick={handleLogout}
              className="items btn btn-outline-dark p-1 "
            >
              Logout
            </button>
          </Link>

          <Link className="items" to="/admin">
            <li>{user?.email}</li>
            </Link> */}
//----

            // {user.email ? (
            //   <button className="btn btn-primary" onClick={logOut}>
            //     {" "}
            //     Sign Out
            //   </button>
            // ) : (
            //   <Nav.Link>
            //     <NavLink
            //       className="nav-link"
            //       to="/login"
            //       activeStyle={{
            //         fontWeight: "bold",
            //         color: "White",
            //       }}
            //     >
            //       Login
            //     </NavLink>            