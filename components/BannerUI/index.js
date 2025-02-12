"use client";

import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import classes from './BannerUI.module.css'

export default function BannerUI() {
    return (
        <div className={classes.banner_container}>
            <div className={classes.banner_image} >
                <Image
                    src={'/img/banner/nn.webp'}
                    alt="Artistic Hands"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                />
                <div
                    className="position-absolute w-100 h-100"
                    style={{ background: "rgba(0, 0, 0, 0.6)", top: 0, left: 0 }}
                ></div>
            </div>

            <Container className={classes.content_container} >
                <span className={`px-3 py-1 ${classes.tag_line}`}>Everything You Need, One Cart Away!</span>
                <h1 className={classes.banner_heading}> Elevate Your Shopping Experience </h1>
                <p className={classes.banner_paragraph}>
                    Shop the latest trends, unbeatable deals, and exclusive collections—all in one place. Fast delivery, secure payments, and premium quality guaranteed.
                </p>
                <Button variant="secondary" className={classes.banner_button}>Start Shopping</Button>
            </Container>
        </div >
    );
}
