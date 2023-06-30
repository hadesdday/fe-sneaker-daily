import React from 'react';
import { useSearchParams } from 'react-router-dom';

function ProductList(props) {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log("params gender", searchParams.get("gender"));
    console.log("params category", searchParams.get("category"));
    return (
        <div>
            product list
        </div>
    );
}

export default ProductList;