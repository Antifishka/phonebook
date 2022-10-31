import React from "react";
import { BoxFilter, InputFilter } from "./Filter.styled";
import PropTypes from 'prop-types';

export const Filter = ({filter, onChange}) =>
    <BoxFilter htmlFor="">Find contacts by name
        <InputFilter
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
        />
    </BoxFilter>
    ;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};    