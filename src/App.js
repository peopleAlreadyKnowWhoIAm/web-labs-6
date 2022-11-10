
import './App.scss';
import Catalog from "elements/layout/Main/Catalog/Catalog";
import Footer from "./elements/layout/Footer/Footer";
import Main from "./elements/layout/Main/Home/Home";
import Navigation from "./elements/layout/Navigation/Navigation";

import { BrowserRouter as Router, Route, RouterProvider, Routes, } from 'react-router-dom';

import DataContext from "data/Context";

import routesMap from "elements/routes/Routes";
import { loadMainByFilter, loadAllById } from "data/dataReceive";
import { useState } from "react";


function App() {
    // receiveImage(1).then((val)=> console.log(val));
    //receiveFiltered({"price-from": "24", "sort": "More expensive"});
    const [product, setProducts] = useState([]);

    return (<>

        <DataContext.Provider value={{
            value: product, loadMainByFilter: (async (params) => {
                const res = await loadMainByFilter(params);
                setProducts(res);
                return res;
            }), loadAllById
        }}>
            <RouterProvider router={routesMap()} />
        </DataContext.Provider>
    </>
    );
}

export default App;