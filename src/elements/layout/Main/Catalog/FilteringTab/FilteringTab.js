import { useState } from "react";
import { Container, Row, Form, Col } from "react-bootstrap";
import ApplyBtn from "./ApplyBtn/ApplyBtn";


import RangeInput from "../../../../components/FormColumn/RangeInput/RangeInput";
import SearchInput from "../../../../components/FormColumn/SearchInput/SearchInput";
import SelectInput from "../../../../components/FormColumn/SelectInput/SelectInput";

import './FilteringTab.scss';

const options = ["Popular", "More expensive", "Cheeper", "Length"];

function FilteringTab({ getDefaultProducts, setProducts }) {
    const [priceRange, changePriceRange] = useState({ from: undefined, to: undefined });
    const [lengthRange, changeLengthRange] = useState({ from: undefined, to: undefined });
    const [sorting, changeSorting] = useState(0);
    const [search, setSearch] = useState("");

    const callback = () => {
        console.log(priceRange);
        console.log(lengthRange);
        console.log(sorting);
        let products = getDefaultProducts();
        if (priceRange.from !== undefined) products = products.filter((val) => val.price > priceRange.from);
        if (priceRange.to !== undefined) products = products.filter((val) => val.price < priceRange.to);
        if (lengthRange.from !== undefined) products = products.filter((val) => val.length > lengthRange.from);
        if (lengthRange.to !== undefined) products = products.filter((val) => val.length < lengthRange.to);

        switch (Number(sorting)) {
            case 0:
                products = products.sort((a, b) => a.id - b.id);
                break;
            case 1:
                products = products.sort((b, a) => a.price - b.price);
                break;
            case 2:
                products = products.sort((b, a) => b.price - a.price);
                break;
            case 3:
                products = products.sort((b, a) => a.length - b.length);
                break;
        }

        products = products.filter((val) => val.name.toLowerCase().indexOf(search.trim().toLowerCase()) != -1);

        console.log(products);

        setProducts(products);

    };
    return (
        <Container fluid as="form" className="border-bottom border-dark">
            <Row className="px-5">
                <RangeInput label="Price" state={[priceRange, changePriceRange]} />
                <RangeInput label="Length" state={[lengthRange, changeLengthRange]} />
                <SelectInput label="Sort by" options={options} state={[sorting, changeSorting]} />
                <SearchInput label="Search" state={[search, setSearch]}/>
                <Col className="flex-grow-1" />
                <ApplyBtn onClick={callback} />
            </Row>
        </Container>
    );
}

export default FilteringTab;