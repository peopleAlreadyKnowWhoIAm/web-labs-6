import DataContext from "data/Context";
import { useContext } from "react";
import FilteringTab from "./FilteringTab/FilteringTab";
import Products from "./Products/Products";

import 'App.scss';
function Catalog() {

    const { loadMainByFilter } = useContext(DataContext);



    return (
        <>
            <FilteringTab setParams={loadMainByFilter} />
            <Products/>
        </>
    );
}


export default Catalog;