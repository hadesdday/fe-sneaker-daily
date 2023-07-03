import React from 'react';
import { useSearchParams } from 'react-router-dom';

function ProductList(props) {
    let [searchParams, setSearchParams] = useSearchParams();
    const params = {
        gender: searchParams.get("gender"),
        category: searchParams.get("category"),
        attribute: searchParams.get("attribute"),
    }
    return (
        <div>
            product list
            {JSON.stringify(params)}
        </div>
    );
}

export default ProductList;