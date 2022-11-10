import { Form } from "react-bootstrap";

const { default: FilteringColumn } = require("../FilteringColumn");

function SelectInput({options, label}) {

    options = options.map((val) =>(<option>{val}</option>));
    return (
        <FilteringColumn label={label}>
            <Form.Select className="width-form">
                {options}
            </Form.Select>
        </FilteringColumn>
    );
}

export default SelectInput;