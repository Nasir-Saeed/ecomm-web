"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductCardUI from "@/components/ProductCardUI";
import classes from "./ProductDetails.module.css";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            const url = `https://dummyjson.com/products/${id}`;
            setLoading("get-data");
            const response = await fetch(url);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        } catch (error) {
            console.log("Error: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) getData();
    }, [id]);

    return (
        <div>
            {loading === "get-data" ? (
                <h2>Loading...!</h2>
            ) : (
                <div className={classes.product_card_container}>
                    {product && <ProductCardUI data={product} />}
                </div>
            )}
        </div>
    );
}
