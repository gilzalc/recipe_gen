import React, {useRef, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import s from "./Avatars/Body.png"
import s1 from "./Avatars/Body1.png"
import s2 from "./Avatars/Body2.png"
import s3 from "./Avatars/Body3.png"
import s4 from "./Avatars/Body4.png"
import s5 from "./Avatars/Body5.png"
import {Col, Radio, Row} from 'antd';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {useAuth} from "../contexts/AuthContext";
import Member from "./Member";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {Alert, Form} from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";



export const icons = [s, s1, s2, s3, s4, s5,"https://firebasestorage.googleapis.com/v0/b/grandma-cooked-oatmeal.appspot.com/o/project%20files%2FAvatars%2FHaim.png?alt=media&token=d006c402-0b01-4e9d-94ee-29b40c1c985b",
    "https://firebasestorage.googleapis.com/v0/b/grandma-cooked-oatmeal.appspot.com/o/project%20files%2FAvatars%2FJess.png?alt=media&token=8da3130b-bbb4-4cb8-99a2-c201445baed8",
    "https://firebasestorage.googleapis.com/v0/b/grandma-cooked-oatmeal.appspot.com/o/project%20files%2FAvatars%2FGinger.png?alt=media&token=0222ce3a-7ace-4304-beb9-c9801aba3e08"];

const useStyles = makeStyles(theme => ({
    font: {
        // color: 'rgba(80,13,9,0.9)',
    },
    backgroundImg: {
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/grandma-cooked-oatmeal.appspot.com/o/project%20files%2Ffour%20spoons%20new%20user%20red%20on%20the%20right.jpg?alt=media&token=b4304d94-1558-4782-b679-7b4145444bb2)`,
        minHeight: "86vh",
        height: "auto",
        // position: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        backgroundAttachment: "fixed"
    }, layout: {
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
    title: {
        marginTop: "80px",
    },
    membersClass: {
        Width: 70,
        height: 200,
        // border: 0
    },
    margin: {
        margin: theme.spacing(1),
        width: "100px",
        height: "100px"
    },
    marginDialog: {
        margin: theme.spacing(1),
        width: "150px",
        height: "150px"
    },
    addIcon: {
        width: "100px",
        height: "100px",
        // marginTop:"30px"
    },
    ChosenMembersClassDialog: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        // -moz-box-shadow:    "inset 0 0 10px #000000",
        // -webkit-box-shadow:" inset 0 0 10px #000000",
        boxShadow: "inset 0 0 4px #000000",
        border: "1px solid #555",
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    membersClassDialog: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    input: {
        display: "none",
    }
}))


export default function ChooseUser() {
    const history = useHistory();
    let {members} = useAuth();
    const getAllMembers = () => {
        const membersArr = []
        for (const member of {members}.members) {
            let element = {
                name: member.name,
                avatar: member.avatar,
                recipesNum: member.recipesNum,
                key: member.key,
            }
            membersArr.push(element);
        }
        return membersArr;
    }
    const classes = useStyles();
    const {setMember} = useAuth()

    function FormDialog() {
        const [selectedAvatar, setSelectedAvatar] = useState([0]);
        const {addMember, members} = useAuth();
        const [open, setOpen] = useState(false);
        const [error, setError] = useState("");
        const [avatarImg, setAvatarImg] = useState("");
        const memberNameRef = useRef();


        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setError("")
            setOpen(false);
        };

        async function handleSave(e) {
            e.preventDefault();
            let name = memberNameRef.current.value;
            if (name === '') {
                return setError("Please enter your Name!");
            }
            try {
                members.forEach(function (arrayItem) {
                    if (arrayItem.getName() === name) {
                        throw new Error();
                    }
                })
            } catch (e) {
                return setError("Please choose another Name!");
            }
            //create new member
            let toAdd = new Member(name, selectedAvatar[0])
            addMember(toAdd);
            setMember(toAdd);
            setStorageMemberKey(toAdd.getMemberKey());
            history.push("/");
            setOpen(false);
        }

        return (
            <div>
                <Fab onClick={handleClickOpen} color="secondary" aria-label="add"
                     className={classes.marginDialog}>
                    <AddIcon className={classes.addIcon}/>
                </Fab>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle style={{textAlign: "center"}} id="form-dialog-title"><h2>
                         New Chef</h2>
                    </DialogTitle>

                    <DialogContent>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <DialogContentText>
                            <b> Whats your Name? </b>
                        </DialogContentText>
                        <Form.Control
                            ref={memberNameRef}
                            required
                        />
                        <br/> <br/>

                        <DialogContentText>
                            Choose your Avatar
                        </DialogContentText>

                        <Row style={{marginTop: "30px"}} gutter={[2, 2]}>
                            <Radio.Group name="radiogroup" defaultValue={0}>
                                {icons.map((icon, index) => (
                                    <Radio onClick={() => {
                                        setSelectedAvatar([index])
                                    }} value={index}>
                                        <br/>
                                        <Avatar
                                            className={selectedAvatar[0] === index ? classes.ChosenMembersClassDialog : classes.membersClassDialog}
                                            src={icon} alt={index}/>
                                    </Radio>
                                ))}
                                {/*<Button>*/}
                                {/*<input accept="image/*" className={classes.input} id="add-avatar-img" type="file"*/}
                                {/*       onChange={() => {*/}

                                {/*       }}*/}
                                {/*/>*/}
                                {/*<label htmlFor="add-avatar-img">*/}
                                {/*    {<img*/}
                                {/*        src={"https://static.thenounproject.com/png/348334-200.png"}*/}
                                {/*        width="75"*/}
                                {/*        height="75"/>}*/}
                                {/*</label>*/}
                                {/*</Button>*/}
                            </Radio.Group>
                        </Row>
                    </DialogContent>

                    <DialogActions style={{marginRight: "30px"}}>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        &nbsp;
                        <Button onClick={handleSave} color="primary">
                           <b> Join now</b>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    function ShowMembers(member, index) {
        return (<Col style={{display: "table-column"}} lg={8} md={12} sm={24}>
            <Button>
                <img onClick={() => {
                    setMember(member);
                    setStorageMemberKey(member.getMemberKey());
                    history.push("/");
                }} className={classes.membersClass}
                     src={icons[member.avatar]} alt={index}/>
            </Button>
            <br/> <br/>
            <h5><b>{member.name}</b></h5>
        </Col>);
    }

    const renderMembers = () =>
        members.map((member, index) => (
            <Col style={{display: "table-column"}} lg={8} md={12} sm={24}>
                <Button>
                    <img onClick={() => {
                        setMember(member);
                        setStorageMemberKey(member.getMemberKey());
                        history.push("/");
                    }} className={classes.membersClass}
                         src={icons[member.avatar]} alt={index}/>
                </Button>
                <br/> <br/>
                <h5><b>{member.name}</b></h5>
            </Col>))
    return (
        <div className={classes.backgroundImg}>
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <div className={classes.title}>
                        <h1 style={{fontSize: "55px"}}>Who's cooking? </h1>
                    </div>
                    <div>
                        <Row style={{marginTop: "30px"}} gutter={[35, 35]}>
                            <Col lg={8} md={12} sm={24}>
                                <FormDialog/>
                                <h5 style={{marginTop: "30px"}}><b>Add Chef</b></h5>
                            </Col>
                            {members && members.map((member, index) => (ShowMembers(member, index)))}
                        </Row>
                    </div>
                </main>
            </React.Fragment>
        </div>
    )
}

export function setStorageMemberKey(key) {
    window.sessionStorage.setItem("curMemberKey", key);
}

export function getStorageMemberKey() {
    return window.sessionStorage.getItem("curMemberKey")
}

