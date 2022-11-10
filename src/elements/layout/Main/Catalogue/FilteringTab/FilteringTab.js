import { Container, Row, Form, Col } from "react-bootstrap";
import ApplyBtn from "./ApplyBtn/ApplyBtn";


import RangeInput from "./FilterColumn/RangeInput/RangeInput";
import SelectInput from "./FilterColumn/SelectInput/SelectInput";

import './FilteringTab.scss';

function FilteringTab() {
    return (
        <Container fluid as="form" className="border-bottom border-dark">
            <Row className="px-5">
                <RangeInput name="Price"/>
                <RangeInput name="Length"/>
                <SelectInput label="Sort by" options={["More expensive", "Cheeper", "Length"]}/>
                <Col className="flex-grow-1"/>
                <ApplyBtn/>
            </Row>
        </Container>
    );
}

export default FilteringTab;