import React, {createRef, forwardRef, useImperativeHandle, useRef, useState} from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import {Form} from "react-bootstrap";
import StoryDropImage from "./StoryDropImage";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useAuth} from "../contexts/AuthContext";
import {InputAdornment, Select} from "@material-ui/core";


import FaceIcon from '@material-ui/icons/Face';
import TitleIcon from '@material-ui/icons/Title';

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
        textAlign: 'center'

    },

}));
const AddStoryRecipe = forwardRef((props, ref) => {
    const classes = useStyles();
    const tempRecipe = props.tempRecipe;
    const formHtmlRef = createRef();
    const submitRef = createRef();
    const {members} = useAuth();
    const [submitFLag, setSubmitFlag] = useState(false);
    const recipeNameRef = useRef("");
    // const authorRef = useRef(tempRecipe.author || "");
    const [authorRef, setAuthorRef] = useState(tempRecipe.author || "");

    useImperativeHandle(ref, () => ({
                ValidBeforeNext(text) {
                    if (text === "test") return true
                    if (!formHtmlRef.current.checkValidity()) submitRef.current.click();
                    if (!formHtmlRef || !formHtmlRef.current) return false;
                    setSubmitFlag(true);
                    if (!formHtmlRef.current.checkValidity()) {
                        return false
                    }
                    if (tempRecipe.story.content === "") {
                        return (window.confirm("are you sure you dont want to add story to your recipe?"))
                    }
                    return true;
                }
            }
        )
    )
    let ref1 = useRef(null);
// const mySet1 = new Set()
// let s;
// let c = 0
// for(let e of list){
//     s = e
//     for(let i of (e.ingredients)){
//         if (mySet1.size <1000){
//             mySet1.add(i);
//             console.log(i)
//         }
//     }
// }
    const [value, setValue] = useState(tempRecipe.getStoryContent() || "");
    return (
        <form ref={formHtmlRef} onSubmit={(e) => {
            e.preventDefault()
        }
        }><input type="submit" value="" hidden={true} ref={submitRef} onSubmit={(e) => {
            e.preventDefault()
        }}/>


            <React.Fragment>
                <b><Typography className={classes.textField} variant="h4" gutterBottom>
                    Make a Memory
                    <h5>Tell the story behind this recipe</h5>
                    <Form>
                        <Form.Group id="story">

                            <Form.Control
                                onChange={(e => {
                                    setValue(e.target.value)
                                    tempRecipe.setStoryContent(e.target.value)
                                })}
                                defaultValue={value}
                                as="textarea"
                                rows={4}
                                style={{border: "1px solid #ced4da", margin: "20px 0 20px", backgroundColor: "#fafaf8"}}
                                placeholder="What do you remember about this recipe? When did you first try it? Who taught you how to make it? Why do you love it?"
                            />
                        </Form.Group>
                    </Form>
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={submitFLag && recipeNameRef.current.value === ""}
                                className={classes.textField}
                                required
                                color="secondary"
                                id="recipeName"
                                name="RecipeName"
                                label="Recipe title"
                                variant="outlined"

                                defaultValue={tempRecipe.name || ""}
                                inputRef={recipeNameRef}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <TitleIcon/>
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => {
                                    tempRecipe.setName(recipeNameRef.current.value);
                                }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                id="free-solo"
                                freeSolo
                                defaultValue={tempRecipe.author}
                                inputRef={authorRef}
                                onChange={(e, value) => {
                                    console.log(value, "test")
                                    setAuthorRef(value)
                                    tempRecipe.setAuthor(value);

                                }}
                                options={members.map((member) => member.name)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        required
                                        id="author"
                                        color="secondary"
                                        variant="outlined"
                                        name="author"
                                        label="Who's the chef?"
                                        fullWidth
                                        defaultValue={tempRecipe.author}
                                        InputProps={{
                                            ...params.InputProps,
                                            startAdornment: (
                                                <>
                                                    <InputAdornment position="start">
                                                        <FaceIcon/>
                                                    </InputAdornment>
                                                    {params.InputProps.startAdornment}
                                                </>
                                            ),
                                        }}
                                        onChange={(e, v) => {
                                            console.log(e.target.value, "test")
                                            setAuthorRef(e.target.value)
                                            tempRecipe.setAuthor(e.target.value);
                                        }}/>

                                )}
                            />
                        </Grid>
                    </Grid>

                </Typography></b>
                <Form.Group id="photo">
                    {/*<Form.Label>Add Photo/s</Form.Label>*/}
                    <StoryDropImage ref={ref1} tempRecipe={tempRecipe}/>
                </Form.Group>
            </React.Fragment>
        </form>
    )
})

export default AddStoryRecipe;