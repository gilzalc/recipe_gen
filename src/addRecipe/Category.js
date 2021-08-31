import {FormControl, InputLabel, ListItemIcon, MenuItem, Select} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {getOnlyNameCategoryOption} from "./Recipe";
import ClassIcon from '@material-ui/icons/Class';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 360,
    },

}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



export default function Category(props) {
    let category_option =  getOnlyNameCategoryOption();

    const classes = useStyles();
    const tempRecipe = props.tempRecipe;
    return (
        <div>
            <FormControl required className={classes.formControl}>

                <InputLabel>Category</InputLabel>
                <Select
                    // IconComponent={ClassIcon}
                    defaultValue={tempRecipe.category}
                    onChange={(e) => {
                        tempRecipe.setCategory(e.target.value)
                    }}
                    MenuProps={MenuProps}
                >


                    {category_option.map((categoryName) => (
                        <MenuItem key={categoryName} value={categoryName}>

                            {categoryName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>)
}
