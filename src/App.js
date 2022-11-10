import {RouterProvider} from 'react-router-dom';

import DataContext from "data/Context";

import routesMap from "elements/routes/Routes";
import { loadMainByFilter, loadAllById } from "data/dataReceive";
import { useState } from "react";

import './App.scss';

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