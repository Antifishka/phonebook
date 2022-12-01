import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import { WrapperFilter, FieldFilter, InputFilter } from "./Filter.styled";

export const Filter = ({ onChange }) => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const changeFilter = e => {
        dispatch(setFilter(e.currentTarget.value));
    };

    return (
        <WrapperFilter>
            <FieldFilter htmlFor="">Find contacts by name
                <InputFilter
                    type="text"
                    value={filter}
                    placeholder="Ivan Petrov"
                    onChange={changeFilter}
                />
            </FieldFilter>
        </WrapperFilter>
    );
};   