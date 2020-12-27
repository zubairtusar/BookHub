import React from 'react';
import Dropdown from 'react-bootstrap/dropdown';

const DropDown = (props) => {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">A-Z</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Z-A</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Newest</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Oldest</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default DropDown;