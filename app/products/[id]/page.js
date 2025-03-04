"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import classes from "./ProductDetails.module.css";
import Image from "next/image";
import { Table } from "react-bootstrap";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const getData = async () => {
        try {
            const url = `https://dummyjson.com/products/${id}`;
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        } catch (error) {
            console.log("Error: ", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) getData();
    }, [id]);

    console.log(product);

    return (
        <>
            <style>
                {
                    `
                table tbody tr td{
                    background: transparent !important;
                    color: #fff !important;
                }
                `
                }
            </style>

            <div className={classes.productDetail_main_container}>
                <div className={classes.productDetail_container}>
                    <div className={classes.productDetail_images}>
                        <div className={classes.productDetail_image}>
                            <Image src={product?.images[0]} fill alt={product?.title} />
                        </div>
                    </div>
                    <div className={classes.productDetails_content}>
                        <h2>{product?.title}</h2>
                        <h4>SKU: {product?.sku}</h4>
                        <h4>${product?.price}</h4>
                        <p>{product?.description}</p>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>Brands</td>
                                    <td>{product?.brand}</td>
                                </tr>
                                <tr>
                                    <td>Category</td>
                                    <td>{product?.category}</td>
                                </tr>
                                <tr>
                                    <td>Tags</td>
                                    <td>{product?.tags?.map((item, index) => (
                                        <span key={index}>
                                            {item}
                                            {index < product?.tags?.length - 1 && ", "}
                                        </span>
                                    ))}</td>
                                </tr>
                                <tr>
                                    <td>Stocks</td>
                                    <td>{product?.stock}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </div>
                <div></div>
            </div>
        </>

    );
}
