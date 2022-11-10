
import Catalogue from "elements/layout/Main/Catalogue/Catalogue";
import Footer from "./elements/layout/Footer/Footer";
import Main from "./elements/layout/Main/Home/Home";
import Navigation from "./elements/layout/Navigation/Navigation";

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import './App.scss';

function App() {
    return (<div>
        <Router>

            <Navigation />
            <Routes>
                <Route path="/" element={<Main/>}>

                </Route>
                <Route path="/catalog" element={<Catalogue/>}>

                </Route>
            </Routes>
        </Router>
        <Footer />
    </div>
    );
}

export default App;