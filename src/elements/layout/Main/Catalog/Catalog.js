import DataContext from "data/Context";
import { useContext, useState } from "react";
import FilteringTab from "./FilteringTab/FilteringTab";
import Products from "./Products/Products";

function Catalog() {
    let defaultProducts = useContext(DataContext).value;

    const [products, setProducts] = useState(Object.assign(defaultProducts));

    function getDefault() {
        return Object.assign(defaultProducts);
    }

    return(
    <main>
        <FilteringTab getDefaultProducts={getDefault} setProducts={setProducts}/>
        <Products products={products}/>
    </main>
);
}


export default Catalog;