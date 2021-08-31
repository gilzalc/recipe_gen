import React, {useEffect, useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InstructionsForm from "./InstructionsForm";
import Ingredients from "./ingredients";
import clsx from "clsx";
import PropTypes from "prop-types";
import StepConnector from '@material-ui/core/StepConnector';
import {StepButton, withStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {useAuth} from "../contexts/AuthContext";
import RecipeDetails from "./RecipeDetails";
import AddStoryRecipe from "./AddStoryRecipe";
import tempRecipeObj, {tempRecipe} from "./tempRecipeObj"
import {DefaultPictures} from "./DefaultPictures";
import UploadFiles from "./UploadFiles";
import firebase from "firebase";

const useStyles = makeStyles(theme => ({
    backgroundImg: {
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/grandma-cooked-oatmeal.appspot.com/o/project%20files%2Fspoons%20with%20green%20and%20black%20spices.jpg?alt=media&token=fdbcc64b-4a64-4590-ad6f-8e5cf7ee27a8)`,
        height: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        minHeight: "100vh",
        backgroundAttachment: "fixed"
    },
    layout: {
        pa: "3px",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 800,
            height: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        minHeight: "5vh",
        textAlign: "justify",
        textJustify: "inter-word",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
            background: "none"
            // background: 'rgba(233,64,87,0.1)',
        }
    },
    stepper: {
        background: "transparent",

        borderStyle: "none"
    },
    buttons: {
        color: "white",
        padding: "0 30px",
        display: "flex",
        justifyContent: "flex-end"
    },
    button: {
        background:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1)
    },
    finalPage: {
        minHeight: "51vh",
        textAlign: "center",

    },
    emptyDiv: {
        height: "30px"
    }
}));


const steps = ["Memories", "General Info", "Ingredients", " Instructions"];

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: "#ccc",
        zIndex: 1,
        color: "#fff",
        width: 60,
        height: 60,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    active: {
        backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
    },
    completed: {
        backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
    }
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const {active, completed} = props;
    const icons = {
        1: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                fill="#FFFFFF">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path
                d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/>
        </svg>

        ,
        2: <MenuBookIcon/>,

        3: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-egg"
                viewBox="0 0 16 16">
            <path
                d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1c.428 0 .956.206 1.554.716.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5zm0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6z"/>
        </svg>
        ,
        4: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-egg-fried" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path
                d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
        </svg>,
    };


    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node
};


const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22
    },
    active: {
        "& $line": {
            backgroundImage:
                "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
        }
    },
    completed: {
        "& $line": {
            backgroundImage:
                "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
        }
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: "#ccc",
        borderRadius: 1
    }
})(StepConnector);


export default function AddRecipeMain(props) {

    const editMode = !!(props.recipe);
    tempRecipeObj(editMode, props.recipe) // init tempRecipe
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const history = useHistory();
    const [urlArr, setUrlArr] = useState(tempRecipe.story.images)
    const {ForceFetchData, member} = useAuth();
    const {addRecipe, editRecipe} = useAuth();
    let formRef = useRef(null);


    // useEffect(() => {
    //     window.scrollTo(0, 15);
    //     const listener = event => {
    //         if ((event.code === "Enter" || event.code === "NumpadEnter") && (activeStep < steps.length)
    //         && activeStep<2) {
    //             handleNext();
    //         }
    //     };
    //     console.log("1z", tempRecipe.story)
    //     document.addEventListener("keydown", listener);
    //     return () => {
    //         document.removeEventListener("keydown", listener);
    //     };
    // }, [activeStep]);

    function getStepContent(step) {
        switch (step) {

            case 0:
                return (
                    <AddStoryRecipe ref={formRef} tempRecipe={tempRecipe}/>
                )
            case 1:
                return (
                    <RecipeDetails ref={formRef} editMode={editMode} tempRecipe={tempRecipe}/>
                );
            case 2:
                return (
                    <Ingredients ref={formRef} tempRecipe={tempRecipe}/>
                );

            case 3:
                return (
                    <InstructionsForm ref={formRef} tempRecipe={tempRecipe}/>
                );

            default:
                throw new Error("unknown step")
        }
    }


    const UploadFiles = async () => {
        const files = tempRecipe.tempStoryImages
        console.log("FILES,", files)
        if (!files || files.length === 0) return tempRecipe;
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let fileName = file.name;
            const storageRef = await firebase.storage().ref("images");
            const fileRef = await storageRef.child(fileName)
            await fileRef.put(file).on(
                "state_changed",
                (snapshot) => {
                },
                error => {
                    console.log(error);
                },
                () => {
                    storageRef.child(fileName).getDownloadURL().then(url => {
                        console.log("FILE GET URL", url)
                        tempRecipe.story.images = ([...urlArr, url])
                        setUrlArr([...urlArr, url]);
                        return tempRecipe
                    });
                }
            );
        }
    }

    const handleUploadTempRecipe = async (tempRecipe, editMode) => {
        formRef = null;
        if (!tempRecipe.recipeHasImage()) {
            let defImageUrl = DefaultPictures[tempRecipe.getCategory()];
            tempRecipe.setMainImage([defImageUrl])
        }
        tempRecipe.setUploadedBy(member.name || "Guest")
        // const files = tempRecipe.tempStoryImages
        // let tempUrlArr = []
        // let flag = false;
        // if (files || files.length > 0) {
        //     for (let i = 0; i < files.length; i++) {
        //         let file = files[i];
        //         let fileName = file.name;
        //         const storageRef = await firebase.storage().ref("images");
        //         const fileRef = await storageRef.child(fileName)
        //         fileRef.put(file).on(
        //             "state_changed",
        //             (snapshot) => {
        //             },
        //             error => {
        //                 console.log(error);
        //             },
        //             () => {
        //                 storageRef.child(fileName).getDownloadURL().then(url => {
        //                     tempUrlArr.push(url);
        //                     tempRecipe.story.images = tempUrlArr;
        //                     flag = (tempRecipe.story.images !== null)
        //
        //                 });
        //             })
        //         tempRecipe.story.images = tempUrlArr;
        //
        //     }
        // }
        // else{
        //     flag=true
        // }
        if (editMode) editRecipe(tempRecipe)
        if (!editMode) addRecipe(tempRecipe);
    }
    const handleNext = async () => {
        if (activeStep < steps.length) {
            if (formRef.current.ValidBeforeNext()) {
                if (activeStep === steps.length - 1) {
                    await handleUploadTempRecipe(tempRecipe, editMode);
                    setActiveStep(activeStep + 1)
                } else {
                    setActiveStep(activeStep + 1)
                    // window.scrollTo(0, 0)

                }
            }
        }

    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const handleStep = (step) => () => {
        if (activeStep === steps.length) return
        setActiveStep(step);
    };


    function handleBackHome() {
        ForceFetchData();
        history.push('/');

    }

    return (
        <div className={classes.backgroundImg}>
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        {/*<Typography component="h1" variant="h1" align="center">*/}
                        {/*    <p className={classes.font}> Add Recipe </p>*/}
                        {/*</Typography>*/}
                        {/*{resetRecipe}*/}
                        <Stepper
                            className={classes.stepper}
                            alternativeLabel
                            activeStep={activeStep}
                            connector={<ColorlibConnector/>}
                        >
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepButton onClick={handleStep(index)}
                                        // completed={completed[index]}
                                    >

                                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                                            {label}
                                        </StepLabel>
                                    </StepButton>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {(activeStep === steps.length) ? (
                                    //final page
                                    <React.Fragment>
                                        <Typography variant="h5" gutterBottom align="center">
                                            {editMode ? "Thanks for the update!" : "Thanks for adding to the collection!"}
                                        </Typography>
                                        <div className={classes.finalPage}>
                                            <Typography variant="subtitle1">
                                                <h3>The greatest legacy we can leave our children<br/>
                                                    is happy memories and full bellies</h3>
                                                <div className={classes.buttons}>
                                                    {
                                                        <Button onClick={handleBackHome}
                                                                className={classes.button}>
                                                            Back Home
                                                        </Button>}
                                                </div>
                                            </Typography>
                                        </div>
                                    </React.Fragment>
                                )
                                : (
                                    <React.Fragment>
                                        {getStepContent(activeStep)}
                                        <div className={classes.buttons}>
                                            {activeStep !== 0 && (
                                                <Button
                                                    pading="5"
                                                    onClick={handleBack}
                                                    className={classes.button}
                                                >Back
                                                </Button>
                                            )}
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1 ? "Add to the collection" : "Next"}
                                            </Button>
                                        </div>
                                    </React.Fragment>
                                )}
                        </React.Fragment>
                    </Paper>
                    {/*<Copyright/>*/}
                </main>
            </React.Fragment>
        </div>
    );
}
