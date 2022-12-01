import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import { BoxFilter, InputFilter } from "./Filter.styled";

export const Filter = ({ onChange }) => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const changeFilter = e => {
        dispatch(setFilter(e.currentTarget.value));
    };

    return (
        <BoxFilter htmlFor="">Find contacts by name
            <InputFilter
                type="text"
                value={filter}
                onChange={changeFilter}
            />
        </BoxFilter>
    );
};   