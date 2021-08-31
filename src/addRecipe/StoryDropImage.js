import {DropzoneArea} from "material-ui-dropzone";
import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import Button from "@material-ui/core/Button";
import {CircularProgress, createMuiTheme, makeStyles, MuiThemeProvider} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import clsx from "clsx";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import firebase from "firebase";
import {tempRecipe} from "./addRecipeMain";
import {Image} from "antd";
import DeleteIcon from "@material-ui/icons/Delete";
import NewStoryDropImg from "./NewStoryDropImg";
import {Upload, message} from "antd";
import {InboxOutlined} from "@ant-design/icons";

const {Dragger} = Upload;
const useStyles = makeStyles(theme => ({
        input: {
            display: 'none',
        },
        imgCenter: {
            alignItems: 'center',
            justifyContent: "centre",
            textAlign: 'center',
            margin: 'auto'
        },
        wrapper: {
            alignItems: 'center',
            justifyContent: "centre",
            textAlign: 'center',
            margin: theme.spacing(1),
            position: 'relative',
        },

        buttonSuccess: {
            backgroundColor: green[500],
            '&:hover': {
                backgroundColor: green[700],
            },
        },
        fabProgress: {
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,

        },
        buttonProgress: {
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
        },
        button: {
            background:
                "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1)
        },


    }
));

const StoryDropImage = forwardRef((props, ref) => {
    const tempRecipe = props.tempRecipe;
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(tempRecipe.story.images && tempRecipe.story.images.length > 0);
    const [filesArr, setFilesArr] = useState()
    const [urlArr, setUrlArr] = useState(tempRecipe.story.images)
    const [deleted, setDeleted] = useState(false)

    const classes = useStyles();

    useEffect(() => {
    }, [urlArr, deleted])

    useImperativeHandle(ref, () => ({
            validFilesSave() {
                tempRecipe.setStoryImages(urlArr);
                if (filesArr && filesArr.length > 0 && !success) {
                    return window.confirm("You didnt upload your images, are you sure?");
                }
                return true;
            }
        }
    ))


    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
        [classes.button]: !success
    });

    function resolveAfter2Seconds() {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }


    const uploadFile = async (files) => {
        if (tempRecipe.images.length > 3) {
            return window.confirm("You cant upload more then 3" +
                " Images do you want do resat your Story photos?") ?
                [] : tempRecipe.story.images;
        }
        if (!files) return [];
        const storageRef = await firebase.storage().ref("images");
        for (const file of files) {
            let fileName = file.name;
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
                        let tempUrl = urlArr;
                        tempUrl.push(url)
                        setUrlArr(tempUrl);
                    });
                }
            );
            await resolveAfter2Seconds()
        }
    }

    const theme = createMuiTheme({
        overrides: {
            MuiDropzoneArea: {
                root: {
                    backgroundColor: "rgba(173,176,179,0.46)",
                    color: "#000"
                },
                // successAlert: {
                //     backgroundColor: "#FAA",
                //     color: "#000"
                // },
            }
        }
    });


    function handleDelete() {
        tempRecipe.setStoryImages([])
        setUrlArr([])
        setFilesArr(null)
        setDeleted(true)
        setSuccess(false)
    }

    return (<div>

        <div className={classes.wrapper}>
            <div className="UploadDiv">
                <h2 className="header1">Every Picture Tells a Story...</h2>
                <div className="parent1">
                    <br/>
                </div>
                <MuiThemeProvider theme={theme}>
                    <DropzoneArea
                        initialFiles={tempRecipe.tempStoryImages}
                        acceptedFiles={['image/*']}
                        dropzoneText={"Drag and drop an image or click here \n "}
                        onChange={(files) => {
                            setFilesArr(files);
                            setSuccess(false)
                            tempRecipe.tempStoryImages = files
                        }
                        }
                    />
                </MuiThemeProvider>
                <Fab
                    onClick={async () => {
                        if (!filesArr) {
                            return;
                        }
                        tempRecipe.story.images = [];
                        setLoading(true);
                        setSuccess(false)
                        const urlArrAwait = await uploadFile(filesArr).then(async () => {
                            await resolveAfter2Seconds()
                            setLoading(false);
                            setSuccess(true)
                            const tempUrl = [...tempRecipe.story.images, ...urlArr]
                            tempRecipe.setStoryImages(urlArr);
                            setFilesArr([])
                            setDeleted(false)
                        })
                        // console.log("urlArrAwait   ", urlArrAwait)
                        // console.log("images", tempRecipe.story.images)
                    }}
                    // component="span"
                    aria-label="upload"
                    color="primary"
                    variant="extended"
                    className={buttonClassname}>
                    {success ? <CheckIcon/> : <CloudUploadIcon/>}
                    {loading && <CircularProgress
                        size={90} className={classes.fabProgress}/>
                    }
                    Upload Images
                </Fab>
            </div>
            <br/>
            {/*    {urlArr.length > 0 && (!deleted) && !loading &&*/}
            {/*    (<div>*/}
            {/*        <br/> <b> Current Save Photos </b> <br/>*/}
            {/*        {urlArr.map((url) => <Image height={80} width={100}*/}
            {/*                                                     alt="Recipe Photo" src={url}/>)}</div>)}*/}

            {/*    {urlArr.length > 0 && (!deleted) && !loading &&*/}
            {/*        (<Button*/}
            {/*        variant="contained"*/}
            {/*        color="secondary"*/}
            {/*        className={classes.button}*/}
            {/*        startIcon={<DeleteIcon/>}*/}
            {/*        onClick={handleDelete}*/}
            {/*    >*/}
            {/*        Delete*/}
            {/*    </Button>*/}
            {/*    )}*/}
        </div>
        {/*}*/}

        {/*<NewStoryDropImg tempRecipe={tempRecipe} handleDelete={handleDelete}/>*/}
    </div>)

})
export default StoryDropImage;