// import {Image} from 'react-bootstrap';
// import { Grid} from '@material-ui/core';
// import {makeStyles} from "@material-ui/core/styles";
// import WhatsAppShare from "./WhatsAppShare";
// import DishesView from "./DishesView";
// import {useAuth} from "../contexts/AuthContext";
// import "./familyPage.css";
// import SelectedListItem from "./SelectedListItem";
// import TitleBarGridList from "./TitleBarGridListCopy";
//
//
// // styles
//
// function Header(props) {
//     const {groupcode }= useAuth();
//     // let GroupCode = ({
//     //     codeUrl: "http://localhost:3000/#main"
//     // })
//     return (
//         <Grid container>
//             <Grid item xs={3} sm={2}>
//                 <br/>
//                 <div>
//                     <Image className="img-thumbnail"
//                            src={"https://images.unsplash.com/photo-1606787842514-a7998e6bee38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhbWlseXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}
//                            alt="family's img"/>
//                 </div>
//             </Grid>
//             <Grid item sm={7}>
//                 <br/><br/><br/>
//                 <h1 className="headerTitle"> &emsp;&nbsp;&nbsp;{props.name}'s
//                     family
//                     CookBook
//                 </h1>
//             </Grid>
//             <Grid item xs={3} direction="column">
//                 <div>
//                     <br/><br/>
//                     <h5> Group code : <strong>{groupcode}</strong></h5>
//                     <div>
//                         {WhatsAppShare(groupcode)}
//                     </div>
//                 </div>
//             </Grid>
//         </Grid>
//     )
// }
//
// function FamilyPage() {
//     return (
//         <div className="main_body_items_and_filter">
//             <span> sdfgsfdg </span>
//             <div className="filters_and_recipes">
//             dsfghfjgkl
//             </div>
//             {/*<div className="filters">*/}
//             {/*    sdjflkdjslfgj*/}
//             {/*</div>*/}
//             <div className="filters">
//                 <SelectedListItem/>
//             </div>
//         </div>
//     )
// }
//
// export default FamilyPage;
//
