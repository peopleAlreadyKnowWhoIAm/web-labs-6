import {RouterProvider} from 'react-router-dom';

import DataContext from "data/Context";

import { loadMainByFilter, loadAllById } from "data/dataReceive";
import { useState } from "react";

import './App.scss';
import Router from 'elements/routes/Router';

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
            <Router/>
        </DataContext.Provider>
    </>
    );
}

export default App;