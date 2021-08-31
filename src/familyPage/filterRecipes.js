// import React from 'react';
// import {makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import CheckboxListSecondary from "./checkBox";
//
// const categories=['BreakFast','Lunch','Dinner'];
// //TODO: get users list from firebase
// const users=['Shay','Grandma','Jack'];
// const holidays=['passover','Rosh Hashana','Shavuot'];
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         maxWidth: 360,
//         backgroundColor: theme.palette.background.paper,
//     },
//     nested: {
//         paddingLeft: theme.spacing(3),
//     },
// }));
//
// function DropDown(props) {
//     const [open, setOpen] = React.useState(true);
//     const handleClick = () => {
//         setOpen(!open);
//     };
//     return (
//         <>
//             <ListItem button onClick={handleClick}>
//                 <ListItemText primary={props.text}/>
//                 {open ? <ExpandLess/> : <ExpandMore/>}
//             </ListItem>
//             <Collapse in={open} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                     <CheckboxListSecondary values={props.values} clickChange={props.clickChange}/>
//                 </List>
//             </Collapse>
//         </>
//     )
// }
//
// export default function NestedList(props) {
//     const classes = useStyles();
//
//
//     return (
//         <List
//             component="nav"
//             aria-labelledby="nested-list-subheader"
//             className={classes.root}
//         >
//            <DropDown text={"Categories"} values={categories} clickChange={props.clickChange}/>
//             <DropDown text={"Holidays"} values={holidays}/>
//             <DropDown text={"Users"} values={users} />
//         </List>
//     );
// }
