import { RouterProvider } from 'react-router-dom';

import DataContext from "data/DataContext";

import { loadMainByFilter, loadAllById } from "data/dataReceive";
import { useState } from "react";

import './App.scss';
import Router from 'elements/routes/Router';
import AuthProvider from 'elements/routes/Auth';

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
        }}><AuthProvider>
                <Router />

            </AuthProvider>
        </DataContext.Provider>
    </>
    );
}

export default App;