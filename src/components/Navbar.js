import React from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Shop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose} />
    </>
  );
};

export default NavBarComponent;
