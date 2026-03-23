import { useEffect, useState } from "react";

export default function DataInTableFormat() {
    const URL = "https://fakestoreapi.com/products";

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error("Failed to fetch the data from the Online API");
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error(`Error fetching data: ${err}`);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <h3 style={{ textAlign: "center" }}>
            Loading...
        </h3>
    };

    if (error) {
        return <h3 style={{ textAlign: "center", color: "red" }}>
            {error}
        </h3>
    };

    return (
        <>
            <h1 style={{ marginLeft: "7px" }}>Fetch Data from the URL & Dislpay in Table Format</h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <table border={1} cellPadding={7} width={"80%"} cellSpacing={7}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price ($)</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Rating & Count</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <img src={product.image} alt={product.title} width={50} />
                                    </td>
                                    <td>{product.rating?.rate} ⭐ {product.rating?.count}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}