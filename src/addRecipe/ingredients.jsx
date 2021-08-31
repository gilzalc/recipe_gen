import React, {createRef, forwardRef, useImperativeHandle} from 'react';
import Typography from '@material-ui/core/Typography';

import List from "./List";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    body: {
        padding: theme.spacing(2),
        minHeight: "47vh",
    },
    textField: {
        marginBottom: "10px",
        textAlign: 'center'

    },
}));
const Ingredients = forwardRef((props, ref) => {
    const tempRecipe = props.tempRecipe;
    const formHtmlRef = createRef();
    const submitRef = createRef();


    useImperativeHandle(ref, () => ({

            ValidBeforeNext(test) {
                if (test === "test") return true;
                if (!formHtmlRef.current.checkValidity()) submitRef.current.click();
                console.log("valid? ", formHtmlRef.current.checkValidity());

                return formHtmlRef.current.checkValidity();

            }
        }
    ))


    const classes = useStyles();
    return (
        <form ref={formHtmlRef}>
            <React.Fragment>
                <input type="submit" value="" hidden={true} ref={submitRef} onSubmit={(e) => {
                    e.preventDefault()
                }}/>
                <b><Typography className={classes.textField} variant="h4" gutterBottom background="#007F80">
                   The Ingredients
            </Typography></b>
                <div className={classes.body}>
                    <List tempRecipe={tempRecipe}> </List>
                </div>
            </React.Fragment>
        </form>

    );
})

export default Ingredients;