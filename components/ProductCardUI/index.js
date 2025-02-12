"use client"
import Image from 'next/image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import classes from "./ProductCardUI.module.css";
export default function ProductCardUI({ data }) {

    return (
        <Card style={{ width: '19rem' }}>
            <div className={classes.product_card_image}>
                <Image src={data?.thumbnail} fill alt={data?.title} />
            </div>
            <Card.Body>
                <Link href={`/products/${data?.id}`}><h3>{data?.title}</h3></Link>
                <p> {data?.description?.split(" ").slice(0, 15).join(" ")}</p>
            </Card.Body>
        </Card>
    );
}

