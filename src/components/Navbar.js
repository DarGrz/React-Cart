import React, { useState, useContext } from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

const NavBarComponent = () => {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Shop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart {productsCount} Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ShoppingCart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                  key={idx}
                >
                  {}
                </CartProduct>
              ))}
              <h1>{cart.getTotalCost().toFixed(2)}</h1>
            </>
          ) : (
            <h1>There are no items in your cart</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavBarComponent;
