import { Col, Form } from 'react-bootstrap';
import FilteringColumn from '../FilteringColumn';


function RangeInput({ name }) {
    return (
        <FilteringColumn label={name}>
            <Form.Control className="width-form d-inline-block me-2" placeholder="From" />

            <Form.Control className="width-form d-inline-block" placeholder="To" />
        </FilteringColumn>
    );
}


export default RangeInput;