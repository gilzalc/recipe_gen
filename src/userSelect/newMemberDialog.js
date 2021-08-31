// import React, {useRef, useState} from 'react';
// import AddIcon from "@material-ui/icons/Add";
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Fab from "@material-ui/core/Fab";
// import {makeStyles} from "@material-ui/core/styles";
// import {icons} from "./ChooseUser";
// import {Form, Row} from "react-bootstrap";
// import Avatar from "@material-ui/core/Avatar";
// import Member from "./Member";
// import {useAuth} from "../../../../../../WebstormProjects/untitled3/src/contexts/AuthContext";
// import {Radio} from "antd";
// import {logDOM} from "@testing-library/react";
//
// const useStyles = makeStyles(theme => ({
//     marginDialog: {
//         margin: theme.spacing(1),
//         width: "150px",
//         height: "150px"
//     },
//     addIcon: {
//         width: "100px",
//         height: "100px"
//     },
//     // membersClassDialog: {
//     //     Width: 30,
//     //     height: 85.7,
//     //     border: "3px solid #555"
//     // }
// }))
// // export let tempMember = new Member();
//
//
// export default function FormDialog() {
//     const [selectedAvatar, SetSelectedAvatar] = useState([0]);
//     const {addMember} = useAuth();
//     const classes = useStyles()
//     const [open, setOpen] = useState(false);
//     const memberNameRef = useRef();
//
//
//     const handleClickOpen = () => {
//         setOpen(true);
//     };
//
//     const handleClose = () => {
//         setOpen(false);
//     };
//
//     const handleSave = () => {
//         let toAdd = new Member(memberNameRef.current.value, selectedAvatar[0])
//         addMember(toAdd);
//         setOpen(false);
//     };
//
//     return (
//         <div>
//             <Fab onClick={handleClickOpen} color="secondary" aria-label="add"
//                  className={classes.marginDialog}>
//                 <AddIcon className={classes.addIcon}/>
//             </Fab>
//
//             <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//                 <DialogTitle style={{textAlign: "center"}} id="form-dialog-title">Add a chef
//                 </DialogTitle>
//
//                 <DialogContent>
//                     <DialogContentText>
//                         <b> Insert your name </b>
//                     </DialogContentText>
//                     <Form.Control
//                         ref={memberNameRef}
//                         required
//                     />
//                     <br/> <br/>
//
//                     <DialogContentText>
//                         Choose your avatar
//                     </DialogContentText>
//
//                     <Row style={{marginTop: "30px"}} gutter={[3, 3]}>
//                         <Radio.Group name="radiogroup" defaultValue={0}>
//                             {icons.map((icon, index) => (
//                                 //TODO: try Bootstrap Radio
//                                 <Radio onClick={() => {
//                                     SetSelectedAvatar([index])
//                                 }} value={index}>
//                                     <br/> <Avatar
//                                     // className={classes.membersClassDialog}
//
//                                     src={icon} alt={index}/> </Radio>
//                             ))}
//                         </Radio.Group>
//                     </Row>
//                 </DialogContent>
//
//                 <DialogActions>
//                     <Button onClick={handleClose} color="primary">
//                         Cancel
//                     </Button>
//                     <Button onClick={handleSave} color="primary">
//                         Save
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }
