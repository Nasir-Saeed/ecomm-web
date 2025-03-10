"use client"
import ProductCardUI from "@/components/ProductCardUI";
import { useEffect, useState } from "react";
import classes from "./Product.module.css";
import { Container } from "react-bootstrap";
import LoadingUI from "@/components/LoadingUI";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading("get-data");
        const response = await fetch("https://dummyjson.com/products?limit=8");
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Container>
                {
                    loading === "get-data" ? (
                        <LoadingUI />
                    ) : (
                        <div className={classes.product_card_container}>
                            {products?.map((product) => (
                                <ProductCardUI data={product} key={product.id} isLoading={loading} />
                            ))}
                        </div>
                    )
                }
            </Container>
        </>
    )
}
