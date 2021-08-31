import React, {createRef, forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";
// import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import UploadImage from "./UploadImage";
import Category from "./Category";
import PrepTime from "./PrepTime";
import FilterSelect from "./FilterSelect";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import {InputAdornment} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    body: {
        minHeight: "50vh"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 360,
    },
    textField: {
        marginBottom: "10px",
        textAlign: 'center',
        fontFamily: "'Trebuchet MS', sans-serif"

    },

}));

const RecipeDetails = forwardRef((props, ref) => {
    const classes = useStyles();
    const [submitFLag, setSubmitFlag] = useState(false);
    const [servingFlag, setServingFlag] = useState(true);
    const recipeNameRef = useRef("");
    const servingsRef = useRef(0);
    const notesRef = useRef("");
    const tagsRef = useRef("");
    const authorRef = useRef("");
    const formHtmlRef = createRef();
    const submitRef = createRef();
    const tempRecipe = props.tempRecipe;
    const editMode = props.editMode;
    // const [prepTime, setPrepTime] = useState("");
    useImperativeHandle(ref, () => ({
            ValidBeforeNext(test) {
                if (test === "test") return true;
                if (!formHtmlRef.current.checkValidity()) submitRef.current.click();
                console.log("valid? ", formHtmlRef.current.checkValidity());
                setSubmitFlag(true);
                if (!formHtmlRef || !formHtmlRef.current) return false;
                else return (formHtmlRef.current.checkValidity());
            }
        }
    ))


    return (
        <form ref={formHtmlRef} onSubmit={(e) => {
            e.preventDefault()
        }
        }>
            <React.Fragment>
                <input type="submit" value="" hidden={true} ref={submitRef} onSubmit={(e) => {
                    e.preventDefault()
                }}/>
                <div className={classes.body}>
                    <b><Typography className={classes.textField} variant="h4" gutterBottom>
                        {editMode ? "Edit your Recipe" : "The Recipe"}
                    </Typography></b>
                    <div>
                        <br/>
                        <Grid container spacing={3}>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="servings"
                                    name="serv"
                                    type="number"
                                    inputProps={{min: 0, step: 0.5}}
                                    label="Servings"
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"

                                    defaultValue={tempRecipe.getServing() || ""}
                                    inputRef={servingsRef}
                                    onChange={(e) => {
                                        tempRecipe.setServing(servingsRef.current.value);
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">
                                                    <LocalDiningIcon/>
                                                </InputAdornment>
                                            </>
                                        ),
                                    }}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <PrepTime tempRecipe={tempRecipe}/>
                            </Grid>

                            <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Category tempRecipe={tempRecipe}/>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FilterSelect tempRecipe={tempRecipe}/>
                            </Grid>

                            </Grid>
                            <Grid item xs={12} sm={6}>

                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    color="secondary"
                                    id="notes"
                                    name="Notes"
                                    variant="outlined"
                                    label="Anything we need to know about making this recipe?"
                                    fullWidth
                                    defaultValue={tempRecipe.notes || ""}
                                    inputRef={notesRef}
                                    onChange={(e) => {
                                        tempRecipe.setNotes(notesRef.current.value);
                                    }}
                                />
                            </Grid>


                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="tags"
                                    variant="outlined"
                                    color="secondary"
                                    name="tags"
                                    label="Add tag, separated by commas"
                                    fullWidth
                                    defaultValue={tempRecipe.tags}
                                    inputRef={tagsRef}
                                    onChange={(e) => {
                                        tempRecipe.setTags(tagsRef.current.value);
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                         fill="currentColor" className="bi bi-hash" viewBox="0 0 20 20">
                                                        <path
                                                            d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
                                                    </svg>
                                                </InputAdornment>
                                            </>
                                        ),
                                    }}

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <UploadImage tempRecipe={tempRecipe} editMode={editMode}/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </React.Fragment>

        </form>
    );
})
export default RecipeDetails;