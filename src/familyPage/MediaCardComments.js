import Avatar from "@material-ui/core/Avatar";
import {icons} from "../userSelect/ChooseUser";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useAuth} from "../contexts/AuthContext";
import {Image} from "antd";

const FONT = "'Trebuchet MS', sans-serif";
const COMMENTS_NUM = 2;
const NO_COMMENTS_MSG = "No comments yet for the recipe"
const NO_COMMENTS_MSG_2 = "start the conversation!"

const useStyles = makeStyles({
    MainComments: {
        // maxWidth: ,
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
        marginRight: "1em",
        marginTop: "5px",
        justifySelf: "left",
        verticalAlign: "middle",

    },
    inputCommentsContainer: {
        display: "flex",
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
});
export default function MediaCardComments(props) {
    const {findMemberInArr} = useAuth();
    const {members} = useAuth();


    return (
        <div>
            {props.comments &&
            <Comments comments={props.comments}/>
            }
        </div>
    )

    function Comments({comments}) {
        const classes = useStyles();
        if (!comments || comments.length === 0) {
            return (
                <div className={classes.MainComments}>
                    <h6>{NO_COMMENTS_MSG}</h6>
                    <br/>
                    <h5>&nbsp;&nbsp;&nbsp;{NO_COMMENTS_MSG_2}</h5>
                </div>)
        }
        let shortComments = [];
        let i = comments.length
        if (i - COMMENTS_NUM >= 0) {
            i -= COMMENTS_NUM;
        }
        else if (i - 1 >= 0) {
            i -= 1;
        }
        for (i; i <= comments.length - 1; i++) {
            shortComments.push(comments[i])
        }

        return (
            <div className={classes.MainComments}>
                <div className={classes.commentsItems}>
                    {shortComments.map((comment) => (
                        <Comment comment={comment}/>
                    ))}
                </div>
            </div>
        );
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
                    <b><span className={classes.commentAuthor}>
                    {Commentmember.name}</span></b>}

                    <span>{comment.date}</span>
                    <p style={{fontFamily:FONT,fontSize:"120%"}}>{comment.content}</p>
                    {comment.imgUrl &&
                    <Image src={comment.imgUrl}
                           height={130} width={160}
                           alt=""/>}
                </div>

            </div>
        );
    }
}