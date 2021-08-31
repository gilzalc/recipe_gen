// import React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import CheckboxListSecondary from "./checkBox";
//
//
// const FIRST_DISH = "salads"
// const SECOND_DISH = "Soup"
// const THIRD_DISH = "Fish"
// const FOURTH_DISH = "Holidays"
// const FIFTH_DISH = "Deserts"
// const SIXTH_DISH = "Vegan"
// const SEVENTH_DISH = "Pies"
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: 'auto',
//         maxWidth: 360,
//         minWidth: 150,
//         backgroundColor: "transparent",
//         boxShadow: "1px  1px 6px grey",
//         marginLeft: "25px"
//     }
// }));
//
// const SelectedListItem = (props) => {
//     const classes = useStyles();
//     const [filtered, setFiltered] = React.useState([]);
//     const change = props.clickChange;
//     const handleListItemClick = (event, index, text) => {
//         setFiltered(toAdd=>filtered.concat(toAdd));
//         change(text);
//     };
//
//     return (<>
//             <div className={classes.root}>
//                 <List component="nav" aria-label="main mailbox folders">
//
//                     <ListItem
//                         button
//                         selected={selectedIndex === 0}
//                         onClick={(event) => handleListItemClick(event, 0, FIRST_DISH)}>
//                         <ListItemIcon>
//                             <span className="badge badge-primary badge-pill"
//                                   style={{
//                                       background: "#269026",
//                                       fontSize: "15px"
//                                   }}>{15}</span>
//                         </ListItemIcon>
//                         <ListItemText primary={FIRST_DISH}/>
//                     </ListItem>
//                     <Divider/>
//                     <ListItem
//                         button
//                         selected={selectedIndex === 1}
//                         onClick={(event) => handleListItemClick(event, 1, SECOND_DISH)}
//                     >
//                         <ListItemIcon>
//                             <span className="badge badge-primary badge-pill"
//                                   style={{
//                                       background: "#269026",
//                                       fontSize: "15px"
//                                   }}>{0}</span>
//                         </ListItemIcon>
//                         <ListItemText primary={SECOND_DISH}/>
//                     </ListItem>
//                     <Divider/>
//                     <ListItem
//                         button
//                         selected={selectedIndex === 2}
//                         onClick={(event) => handleListItemClick(event, 2, THIRD_DISH)}>
//                         <ListItemIcon>
//                             <span className="badge badge-primary badge-pill"
//                                   style={{
//                                       background: "#269026",
//                                       fontSize: "15px"
//                                   }}>{4}</span>
//                         </ListItemIcon>
//                         <ListItemText primary={THIRD_DISH}/>
//                     </ListItem>
//                     <Divider/>
//                     <ListItem
//                         button
//                         selected={selectedIndex === 3}
//                         onClick={(event) => handleListItemClick(event, 3, FOURTH_DISH)}
//                     >
//                         <ListItemIcon>
//                             <span className="badge badge-primary badge-pill"
//                                   style={{
//                                       background: "#269026",
//                                       fontSize: "15px"
//                                   }}>{14}</span>
//                         </ListItemIcon>
//                         <ListItemText primary={FOURTH_DISH}/>
//                     </ListItem>
//                     <Divider/>
//                     <ListItem
//                         button
//                         selected={selectedIndex === 4}
//                         onClick={(event) => handleListItemClick(event, 4, FIFTH_DISH)}>
//                         <ListItemIcon>
//                             <span className="badge badge-primary badge-pill"
//                                   style={{
//                                       background: "#269026",
//                                       fontSize: "15px"
//                                   }}>{9}</span>
//                         </ListItemIcon>
//                         <ListItemText primary={FIFTH_DISH}/>
//                     </ListItem>
//                     <Divider/>
//                     <ListItem
//                         button
//                         selected={selectedIndex === 5}
//                         onClick={(event) => handleListItemClick(event, 5, SIXTH_DISH)}
//                     >
//                         <ListItemIcon>
//                             <span className="badge badge-primary badge-pill"
//                                   style={{
//                                       background: "#269026",
//                                       fontSize: "15px"
//                                   }}>{5}</span>
//                         </ListItemIcon>
//                         <ListItemText primary={SIXTH_DISH}/>
//                     </ListItem>
//                     <Divider/>
//                     <ListItem
//                         button
//                         selected={selectedIndex === 6}
//                         onClick={(event) => handleListItemClick(event, 6, SEVENTH_DISH)}
//                     >
//                         <ListItemIcon>
//                             <span className="badge badge-primary badge-pill"
//                                   style={{
//                                       background: "#269026",
//                                       fontSize: "15px"
//                                   }}>{5}</span>
//                         </ListItemIcon>
//                         <ListItemText primary={SEVENTH_DISH}/>
//                     </ListItem>
//                     <ListItem>
//                         <CheckboxListSecondary/>
//                     </ListItem>
//                 </List>
//             </div>
//         </>
//     );
// }
// export default SelectedListItem;
