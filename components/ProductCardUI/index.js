"use client"
import Image from 'next/image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import classes from "./ProductCardUI.module.css";
import { useRouter } from 'next/navigation';
export default function ProductCardUI({ data }) {
    const router = useRouter();
    return (
        <>
            <style>
                {
                    `
                .card {
                    background-color: #000000;
                    color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }

                .card-body a{
                    text-decoration: none;
                    color: #ffffff;
                }

                .card-body h3 {
                    font-family: var(--font-poppins);
                    font-weight: 600;
                    font-size: 20px;
                    color: #ffffff;
                }
                .card-body p {
                    font-family: var(--font-poppins);
                    font-weight: 400;
                    font-size: 15px;
                    color: #ffffff;
                }
                `
                }
            </style>

            <div className={classes.product_card_container} onClick={() => router.push(`/products/${data?.id}`)}>
                <Card style={{ width: '100%' }}>
                    <div className={classes.product_card_image}>
                        <Image src={data?.thumbnail} fill alt={data?.title} />
                    </div>
                    <Card.Body>
                        <h3>{data?.title}</h3>
                        <p> {data?.description?.split(" ").slice(0, 12).join(" ")}... </p>
                    </Card.Body >
                </Card >
            </div>

        </>

    );
}

