import React, {useState, useRef} from "react";
import {Button, Alert} from "react-bootstrap";
import Collapsible from "./collapse"
// import CardDeck from "
// react-bootstrap/CardDeck";
// import Nav from "react-bootstrap/Nav";
import "./ShowRecipeCopy.css";
import {useAuth} from "../contexts/AuthContext";
import {makeStyles} from "@material-ui/core/styles";
import {TextareaAutosize, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import Member from "../userSelect/Member";
import FaceBookShare from "../familyPage/FaceBookShare";
import WhatsAppShare from "../familyPage/WhatsAppShare";
import Avatar from "@material-ui/core/Avatar";
import {icons} from "../userSelect/ChooseUser";
import {element} from "prop-types";
import {Image} from "antd";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import {PhotoCamera} from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import firebase from "firebase";
import {green} from "@material-ui/core/colors";

const FONT = "'Trebuchet MS', sans-serif";
export const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        fontSize: "initial",
    },
    media: {
        height: 250,
        width: 500,
    },
    outer_div: {
        background: "url(https://firebasestorage.googleapis.com/v0/b/grandma-cooked-oatmeal.appspot.com/o/project%20files%2FGreen%20and%20salt%20new%20size2.jpg?alt=media&token=f4f3d883-738c-4762-9371-089958d1efdd) no-repeat center center fixed",
        backgroundPosition: "top",
        backgroundSize: "cover",
        minHeight: "85hv",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "800px",
        margin: "0 auto",
    },
    header: {
        "& img": {
            width: "100%",
            height: "200px",
            objectFit: "cover",
        },
        "& h1": {
            textAlign: "center",
            fontFamily: FONT,
            fontSize: "4em",
            // flex: "1",

        },
        "& div": {
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            "& h1": {
                gridColumn: 2
            },
            "& span": {
                gridColumn: 3,
                justifySelf: 'end',
                alignSelf: "center",
            }
        },
        "& p": {
            textAlign: "center",
            fontSize: "initial",
        },
    },
    story: {
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        columnGap: "20px",
        fontSize: "120%"
    },
    storyImages: {
        display: "grid",
        gridGap: "20px",
        "& img": {width: "100%"},
    },
    recipe: {
        paddingTop: "30px",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "15px",

    },
    notesAndButtons: {
        gridColumn: "1/-1",
        display: "grid",
        gridTemplateColumns: "1fr auto"
    },
    notes: {
        gridRow: "1/-1",
        gridColumn: "1",
    },
    recipeInfo: {
        display: "flex",
        justifyContent: "space-between",
        gridColumn: "1 / -1",
        fontSize: "20px",
    },
    editButton: {
        gridColumn: "2",
        // width: "",
        justifySelf: "end",
        background: '#f50057',
        marginLeft: "15px",
    },
    recipeIngredients: {
        fontSize: "large",
        "& h2": {
            fontFamily: FONT,
            marginLeft: "15px",
            marginBottom: "20px"
        },
        "& li": {
            margin: "0 0 10px 0",
            listStyleType: "square"

        },
    },
    li: {
        margin: "0 0 10px 0"
        // paddingBottom: "1rem",
    },
    recipeInstructions: {
        fontSize: "large",
        "& h2": {
            fontFamily: FONT,
            textAlign: "center"

        },
    },

    tags: {
        gridColumn: "1 / -1",
        marginBottom: "0.9em"
    },

    comments: {
        marginBottom: "40px",
        "& h2": {
            fontFamily: FONT,
            marginLeft: "15px",
            marginBottom: "20px"
        }
    },
    comment: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
    },
    commentAuthor: {
        marginRight: "20px"
    },
    commentsItems: {
        display: "grid",
        gap: "20px",
    },
    commentInfo: {
        // borderRight: "outset",
        marginRight: "1em",
        marginTop: "5px"
    },
    inputCommentsContainer: {
        display: "flex",
        // borderTop: "outset",
        "& button": {
            height: "40px",
            minWidth: "70px",
            margin: "auto",
            background: '#f50057',
            marginTop: '40px'
        }
    },
    inputCommentsAuthor: {
        marginLeft: "5%",
        width: "75%",
        background: "white",
        opacity: "80%",
        marginTop: "auto",
        // borderRadius: "",
    },
    inputCommentsContent: {},
    ImgInput: {
        display: 'none',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
});

export function Header({recipe, recipeShareLink}) {
    const history = useHistory();
    const classes = useStyles();
    const scrollToRecipe = () => {
        document.getElementById("recipeDetails").scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className={classes.header}>
            <img src={recipe.images[0]}/>
            <div>

                {recipeShareLink &&
                <IconButton onClick={() => {
                    history.push("/")
                }}
                            style={{gridColumn: 1, justifySelf: 'start', alignSelf: "center"}}
                            color="primary" aria-label="add to shopping cart">
                    <ArrowBackTwoToneIcon size={40} round/>
                </IconButton> }
                <h1>{recipe.name}</h1>
                {recipeShareLink &&
                <span>
                        <WhatsAppShare shareValue={recipeShareLink} message="Check out my recipe! "/>
                        <FaceBookShare shareValue={recipeShareLink} message="Check out my recipe! "/>
                        </span>
                }
            </div>
            <p>
                {recipe.uploadedBy === recipe.author ?
                    <span> By <b>{recipe.uploadedBy}</b> </span> :
                    <span> Uploaded by <b>{recipe.uploadedBy}</b>, recipe by <b>{recipe.author}</b> </span>}
            </p>
        </div>
    );
}

export function Story({recipe}) {
    const classes = useStyles();

    return (
        <div className={classes.story}>
            <div>{recipe.story.content}</div>
            <div className={classes.storyImages}>
                {recipe.story.images && recipe.story.images.map((image, index) => (
                    <div id={index}>
                        <Image src={image}/></div>
                ))}
            </div>
        </div>
    );
}


export function Recipe({recipe, member, EditRecipeClick, DeleteRecipeClick}) {
    const classes = useStyles();
    const colors = ["grey", "black", "goldenrod"];

    function Item(props) {
        return <li>{props.message} </li>;
    }

    return (
        <div className={classes.recipe} id="recipeDetails">
            <div className={classes.recipeInfo}>
                {recipe.serving && <span> <LocalDiningIcon
                    fontSize={"medium"}/>&emsp;&emsp;
                    <b>Servings:</b> {recipe.serving}</span>}
                {recipe.prepTime && <span>&emsp; &emsp;&emsp;&emsp;<AccessTimeIcon
                    fontSize={"medium"}/>&nbsp; &nbsp;{recipe.prepTime}</span>}
                {recipe.getOvenHeatShowRecipe() !== "None" ?
                    <span>Oven Temperature: {recipe.ovenHeat}C </span> :
                    <span> </span>}
            </div>
            {/*{props.recipe.}*/}
            <div className={classes.notesAndButtons}>
                {(member && recipe && recipe.getUploadedBy() && recipe.getUploadedBy() === member.name) && (
                    <Button className={classes.editButton}
                            onClick={() => EditRecipeClick(recipe.key)}
                            variant="danger"><EditOutlinedIcon color="success"/> Edit
                        Recipe</Button>
                )}
                {(member && recipe.getUploadedBy() === member.name) &&
                <Button className={classes.editButton}
                        onClick={() => DeleteRecipeClick(recipe.key)}
                        variant="danger">Delete Recipe</Button>
                }
                <p className={classes.notes}>{recipe.notes}</p>
            </div>
            <div className={classes.recipeIngredients}>
                <h2>Ingredients</h2>
                <div className="show_ingredients">
                    {recipe.getIngredientsListMap().map(message => {
                        return (<>
                            <Checkbox type="checkbox"/>
                            <span>{message}</span>
                            <br/>
                        </>)
                        // return <Item key={message} message={message}/>;

                    })}
                </div>
            </div>
            <div className={classes.recipeInstructions}>
                <h2>Instructions</h2>
                <ul className="show_instruction">
                    {recipe.getStepsListMap().map((recipeStep, index) => {
                        let c = colors[index % 3];
                        return (<> <CheckCircleTwoToneIcon style={{fill: c}}
                                                           fontSize={"large"}/> &nbsp;&nbsp;<span
                                style={{fontFamily: FONT}}>Step <b> {index + 1}: </b> </span>
                                <br/>
                                {recipeStep}
                                <br/><br/>
                            </>
                        )
                    })}
                </ul>
            </div>
            <div className={classes.tags}>
                Tags: #{recipe.category} {recipe.tags}
            </div>
        </div>
    )
}

export default function ShowRecipe(props) {
    const {groupcode, recipes, deleteRecipe, findMemberInArr} = useAuth();
    const history = useHistory();
    const [recipeDetails, setRecipeDetails] = useState(null);
    const commentRef = useRef();
    const {addComment, member, members} = useAuth();
    const classes = useStyles();
    const recipeShareLink = "https://grandma-cooked-oatmeal.web.app/shared-recipe/" + groupcode + "/" + props.id;

    const [file, setFile] = useState()
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [commentImgUrl, setCommentImgUrl] = useState("");
    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });


    function EditRecipeClick(id) {
        console.log("be")
        history.push("/edit/" + id)
    }

    function DeleteRecipeClick(id) {
        if (!window.confirm("Are you sure you want to delete this recipe?")) return;
        deleteRecipe(id)
        history.push("/")
    }

    function UploadImgFront() {
        return (
            <div>
                <input accept="image/*" className={classes.ImgInput} id="icon-button-add-image-1" type="file"
                       onChange={uploadCommentImg}/>
                <label htmlFor="icon-button-add-image-1">
                    <div className={classes.wrapper}>
                        <Fab
                            component="span"
                            aria-label="upload"
                            color="primary"
                            className={buttonClassname}>
                            {success ? <CheckIcon/> : <PhotoCamera/>}
                        </Fab>
                        {loading && <CircularProgress
                            size={36} className={classes.fabProgress}/>
                        }

                        {!loading && file != null &&
                        "     " + file.name}
                    </div>
                </label>
            </div>)
    }


    async function uploadCommentImg(e) {
        let target = e.target.files[0];
        if (!target) return;
        await setFile(target);
        const storageRef = await firebase.storage().ref("images");
        let fileName = target.name;
        const fileRef = await storageRef.child(fileName)

        // const response = await fetch(uri)
        // const blob = await response.blob()
        setLoading(true);
        await fileRef.put(target).on(
            "state_changed",
            (snapshot) => {
                setLoading(true);
            },
            error => {
                console.log(error);
            },
            () => {
                storageRef.child(fileName)
                    .getDownloadURL()
                    .then(url => {
                        setCommentImgUrl(url);
                        setLoading(false);
                        setSuccess(true);
                    });
            }
        );
    };


    function HandleCommentAdd() {
        const date = new Date();
        let imgUrl = (!commentImgUrl) ? "" : commentImgUrl;


        // console.log("key " + recipeDetails.key, member.key, date.getDate() + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear()),
        //     commentRef.current.value, commentImgUrl)
        addComment(recipeDetails.key, member.key, date.getDate() + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear()),
            commentRef.current.value, imgUrl);
    }

    function GetRecipe() {

        if (props.id && recipes) {
            // eslint-disable-next-line eqeqeq
            for (const recipe of recipes) {
                if (recipe.key == props.id) {
                    setRecipeDetails(recipe);
                    break;
                }
            }
            // setRecipeDetails(recipes.find(recipe => recipe.key == props.id));
        }
        if (recipeDetails) {

            return (
                <div className={classes.container}>
                    <Header recipe={recipeDetails} recipeShareLink={recipeShareLink}/>
                    <Collapsible title="Story">
                    <Story recipe={recipeDetails}/>
                    </Collapsible>
                    <Collapsible title="Recipe">
                    <Recipe recipe={recipeDetails} member={member} EditRecipeClick={EditRecipeClick}
                            DeleteRecipeClick={DeleteRecipeClick}/>
                    </Collapsible>
                    <Collapsible title="Comments" isInitiallyOpen={true}>
                    <Comments comments={recipeDetails.comments}/>
                    </Collapsible>
                </div>);
        } else {
            return (<Alert variant="danger">Error: recipe does not exist!</Alert>);
        }

    }

    function Comment({comment}) {
        const classes = useStyles()
        let Commentmember;
        try {
            Commentmember = findMemberInArr(members, comment.author)
        } catch {
            Commentmember = {
                name: "test",
                avatar: 0
            }
        }

        return (
            <div className={classes.comment}>
                {/*<img alt="avatar"*/}
                {/*        src={icons[Commentmember.avatar]}/>*/}
                <div className={classes.commentInfo}>
                    {(Commentmember) && <Avatar src={icons[Commentmember.avatar]}/>}

                </div>
                <div className={classes.commentInfo}>
                    {(Commentmember) &&
                    <b> <span className={classes.commentAuthor}>
                    {Commentmember.name}</span></b>}
                    <span>{comment.date}</span>
                    <p style={{fontFamily:FONT,fontSize:"125%"}}> {comment.content}</p>
                    {comment.imgUrl &&
                    <Image src={comment.imgUrl}
                           height={130} width={160}
                           alt=""/>}
                </div>
            </div>
        );
    }

    function Comments({comments}) {
        const classes = useStyles();
        return (
            <div className={classes.comments}>
                <div className={classes.commentsItems}>
                    {comments.map((comment) => (
                        <Comment comment={comment}/>
                    ))}
                </div>
                <br/>
                <div className={classes.inputCommentsContainer}>
                    <div>
                        {member && member.name}
                        {member && <Avatar src={icons[member.avatar]}
                                           alt={3}/>} {/*set margin to this div and set position to center in the bigger div*/}
                    </div>
                    <TextareaAutosize className={classes.inputCommentsAuthor}
                                      ref={commentRef}
                                      aria-label="empty textarea" rowsMin={2.5}
                                      placeholder=" add a comment or memory - add to the story "/>

                    <UploadImgFront/>
                    <Button
                        onClick={() => HandleCommentAdd()}
                        size="sm"
                        variant="danger">
                        Publish
                    </Button>
                </div>

            </div>
        );
    }


    return (
        <div className={classes.outer_div}>
            <GetRecipe/>
        </div>
    );
}



