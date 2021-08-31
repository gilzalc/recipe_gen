import {FormControl, InputAdornment, InputLabel, MenuItem, Select} from "@material-ui/core";
import React, {useRef} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 360,
    },

}));
export default function PrepTime(props) {
    const prepTimeRef = useRef();
    const classes = useStyles();
    const tempRecipe = props.tempRecipe
    return (
        <div>
            {/*<FormControl className={classes.formControl}>*/}
            {/*    <InputLabel id="demo-simple-select-label"*/}
            {/*    >Prep time:*/}
            {/*    </InputLabel>*/}
            {/*    <Select*/}
            {/*        defaultValue={tempRecipe.prepTime}*/}
            {/*        onChange={(e) => {*/}
            {/*            tempRecipe.setPrepTime(e.target.value)*/}
            {/*        }}*/}
            {/*        labelId="demo-simple-select-label"*/}
            {/*        id="demo-simple-select"*/}
            {/*        fullWidth>*/}
            {/*        <MenuItem value={"30 min or less"}>30 min or less</MenuItem>*/}
            {/*        <MenuItem value={"1h"}>1h</MenuItem>*/}
            {/*        <MenuItem value={"2h"}>2h</MenuItem>*/}
            {/*        <MenuItem value={"3h"}>3h or more</MenuItem>*/}
            {/*    </Select>*/}
            {/*</FormControl>*/}
            <TextField
                id="prepTime"
                variant="outlined"
                // className={classes.textField}
                color="secondary"
                name="prepTime"
                label="Prep. Time"
                fullWidth
                defaultValue={tempRecipe.prepTime}
                inputRef={prepTimeRef}
                onChange={(e) => {
                    tempRecipe.setPrepTime(prepTimeRef.current.value);
                }}
                InputProps={{
                    startAdornment: (
                        <>
                            <InputAdornment position="start">
                                <AccessTimeIcon/>
                            </InputAdornment>
                        </>
                    ),
                }}

            />
        </div>
    );
}