import React, {useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    font: {
        color: 'rgba(80,13,9,0.9)',
    },
    buttons: {
        color: "white",
        padding: "0 30px",
    },
    button: {
        background:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1)
    },
    inputRoot: {
        fontSize: 25,
        height: 100,

    },
    labelRoot: {
        fontSize: 25,
        "&$labelFocused": {}
    },
    labelFocused: {},
}));


function StepLists(props) {
    const tempRecipe = props.tempRecipe;
    const [inputList, setInputList] = useState(tempRecipe.getInstruction());
    // handle input change
    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        tempRecipe.setInstruction(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
        tempRecipe.setInstruction(list);

    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, {step: " "}]);
    };


    useEffect(() => {
        const listener = event => {
            if ((event.code === "Enter" || event.code === "NumpadEnter")) {
                handleAddClick();
            }
        };
        console.log("1z", tempRecipe.story)
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [inputList]);


    const classes = useStyles();


    return (
        <div className="App">
            {inputList.map((x, i) => {
                const step = "Step " +(i+1)+ "                                                                                                                                                                                                                  details:"
                return (
                    <div className="box">
                        <TextField
                            required
                            InputProps={{classes: {root: classes.inputRoot}}}
                            InputLabelProps={{
                                shrink: true,
                                classes: {
                                    root: classes.labelRoot,
                                    focused: classes.labelFocused
                                }
                            }}
                            fullWidth
                            name="step"
                            multiline
                            color="secondary"
                            label={step}
                            value={x["step"]}
                            onChange={e => handleInputChange(e, i)}
                        />
                        <div className={classes.buttons}>
                            {inputList.length !== 1 &&
                            <Button
                                className={classes.button}
                                onClick={() => handleRemoveClick(i)}>Remove</Button>}
                            {inputList.length - 1 === i &&
                            <Button className={classes.button} onClick={handleAddClick}>Add Step {i + 2}</Button>}
                        </div>
                    </div>
                );
            })}
            {/*debug*/}
            {/*<div style={{marginTop: 20}}>{JSON.stringify(inputList)}</div>*/}
                </div>
                );
                }

                export default StepLists;