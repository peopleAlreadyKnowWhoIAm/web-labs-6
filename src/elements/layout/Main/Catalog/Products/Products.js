import DataContext from "data/Context";
import { useContext } from "react";
import ProductCard from "./ProductCard/ProductCard";

function Products({products}){

    return (
        <section className="d-flex flex-wrap p-5">
                {products.map(val => <ProductCard key={val.id} data={val}/>)}
        </section>
    );
}


export default Products;