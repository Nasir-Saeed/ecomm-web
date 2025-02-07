"use client"
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from "./ProductCardUI.module.css"
export default function ProductCardUI({ data }) {

    return (
        <Card style={{ width: '19rem' }}>
            <div className={classes.product_card_image}>
                <Image src={data?.thumbnail} fill alt={data?.title} />
            </div>
            <Card.Body>
                <h3>{data?.title}</h3>
                <p> {data?.description?.split(" ").slice(0, 15).join(" ")}</p>
            </Card.Body>
        </Card>
    );
}

