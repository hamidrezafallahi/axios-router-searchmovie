import React from 'react'
import {useParams} from "react-router-dom"
function Product() {
const params = useParams();
        return (
            <div style={{background:"lime"}}>
                <h1>product name</h1>
                <h3>product id :{params.id}</h3>
            </div>
        )

}
export default Product;