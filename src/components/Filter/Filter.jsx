import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "redux/filter/filter-selectors";
import { setFilter } from "redux/filter/filter-slice";
import { FieldFilter, InputFilter, IconForm } from "./Filter.styled";
import { Box } from "components/Box/Box";
import { theme } from "theme";
import { Button } from "components/Button/Button";
import { BsPersonPlus } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';

export const Filter = ({onClick}) => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const changeFilter = e => {
        dispatch(setFilter(e.currentTarget.value));
    };

    return (
        <Box display="flex" alignItems="center" justifyContaent="center" gridGap={[2, 2, 3]}
            maxWidth={theme.sizes.mediumWidth}
            mb={3}
            mx="auto"
            p={3}
            textAlign="left"
            borderRadius={theme.radii.box}
            boxShadow={theme.shadows.box}
            backgroundColor={theme.colors.white}>
            <FieldFilter htmlFor="">
                <IconForm><FcSearch size={17} /></IconForm>
                <InputFilter
                    type="text"
                    value={filter}
                    placeholder="Search by name"
                    onChange={changeFilter}
                />
            </FieldFilter>
            
            <Button onClick={onClick} aria-label="Add contact">
                <BsPersonPlus size={18}/>
            </Button>
        </Box>
    );
}; 

Filter.propsType = {
  onClick: PropTypes.func.isRequired,
}