
import React, { useEffect, useState } from "react";
import Myproduct from "../components/auth/myProducts"; // <-- Import the Product component

import Nav from "../components/auth/nav";
import axios from "axios";

export default function MyProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const email = "Pranav@gmail.com";

    useEffect(() => {
        let response=axios.get(`http://localhost:8000/api/v2/product/my-products?email=${email}`)
        
            .then((res) => {
                console.log("Response from server:", res);
                if (!res.data) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                };
                console.log("Response data:", res.data.products);
                
                setProducts(res.data.products);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [email]);

    if (loading) {
        return <div className="text-center text-white mt-10">Loading products...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
    }

    return (
        <>
            <Nav />
            <div className="w-full min-h-screen bg-neutral-800">
                <h1 className="text-3xl text-center text-white py-6">My products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                    {products.map((product) => (
                        <Myproduct key={product._id} {...product} />
                    ))}
                </div>
            </div>
        </>
    );
}
