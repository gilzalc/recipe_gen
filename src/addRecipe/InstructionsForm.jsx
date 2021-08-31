import React, {createRef, forwardRef, useImperativeHandle} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import StepLists from "./StepLists";
import SlideBar from "./SlideBar";
import {Form} from "react-bootstrap";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '60vh',
    },
    textField: {
        marginBottom: "10px",
        textAlign: 'center'

    },
}));

const InstructionsForm = forwardRef((props, ref) => {
    const formHtmlRef = createRef();
    const submitRef = createRef();
    const tempRecipe = props.tempRecipe;

    useImperativeHandle(ref, () => ({

            ValidBeforeNext(test) {
                if (test === "test") return true;
                if (!formHtmlRef.current.checkValidity()) submitRef.current.click();
                console.log("valid? ", formHtmlRef.current.checkValidity())
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
                    Instructions
                </Typography></b>
                <SlideBar tempRecipe={tempRecipe}/>
                <div>
                <StepLists tempRecipe={tempRecipe}/>
                </div>
            </React.Fragment>
        </form>
    );
})
export default InstructionsForm;