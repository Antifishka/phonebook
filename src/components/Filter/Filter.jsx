import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "redux/filter/filter-selectors";
import { setFilter } from "redux/contacts/contacts-slice";
import { FieldFilter, InputFilter } from "./Filter.styled";
import { Box } from "components/Box/Box";
import { theme } from "theme";
import { Button } from "components/Button/Button";
import { BsFillPersonPlusFill } from 'react-icons/bs';

export const Filter = ({ onChange }) => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const changeFilter = e => {
        dispatch(setFilter(e.currentTarget.value));
    };

    return (
        <Box minWidth={theme.sizes.minWidth}
            mb={4}
            textAlign="left"
            maxWidth={theme.sizes.maxWidth}
            display="flex"
            alignItems="center"
            justifyContaent="center"
            gridGap={[2, 2, 3]}
            mx="auto">
            <FieldFilter htmlFor="">
                <InputFilter
                    type="text"
                    value={filter}
                    placeholder="Ivan Petrov"
                    onChange={changeFilter}
                />
            </FieldFilter>
            <Button>
                <BsFillPersonPlusFill />
            </Button>
        </Box>
    );
};   