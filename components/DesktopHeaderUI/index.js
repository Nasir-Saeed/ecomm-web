"use client"
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from "./DesktopHeaderUI.module.css";

export default function DesktopHeaderUI() {

    return (
        <Navbar expand="lg" className="bg-body-dark bg-dark">
            <Container>
                <div className={classes.header_logo}>
                    <Image src={"/img/logo-whitee.png"} fill alt="logo" />
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <div className={classes.header_links}>
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/products">Products</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <div className={classes.cart_btn}>
                    <Link href="/login">Login</Link>
                </div>
            </Container>
        </Navbar>
    );
}

