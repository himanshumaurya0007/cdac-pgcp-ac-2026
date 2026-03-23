import { useState } from "react";

export default function ShopStockTable() {
    const [stockData, setStockData] = useState([]);

    // Add loading mechanism state variable
    const [loading, setLoading] = useState(false);

    async function loadShopStockData() {
        // Setting it to true as if data is being fetch
        setLoading(true);

        try {
            const response = await fetch("/data/shopstock.json");
            const data = await response.json();
            setStockData(data);
        } catch (error) {
            console.error(`Error loading data: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1>Shop Stock</h1>
            <button onClick={loadShopStockData}>
                {loading ? "Loading..." : "Load Shop Stock Data"}
            </button>
            <br />
            <br />

            {/* Implicit return */}
            {stockData.length > 0 && (
                <table border={"1"} cellPadding={"7"}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Item Name</th>
                            <th>Unit cost (Rupees)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {stockData.map((item, id) => {
                            // Explicit return
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.item_name}</td>
                                    <td>{item.unit_cost}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </>
    )
}