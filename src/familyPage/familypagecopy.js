// import {Image} from 'react-bootstrap';
// import {Container, Grid} from '@material-ui/core';
// import {makeStyles} from "@material-ui/core/styles";
// import TitleBarGridList from "./TitleBarGridList";
// import WhatsAppShare from "./WhatsAppShare";
// import ListItemLink from "./ListItemLink";
// import {useAuth} from "../contexts/AuthContext";
// import {useState} from "react";
//
//
// // styles
// const useStyles = makeStyles({
//     shareButton: {
//         borderRadius: "12px",
//         color: "white", padding: '0 30px',
//         background: 'green', fontSize: "23px"
//     },
//     addRecipeButton: {
//         borderRadius: "30px",
//         color: "white", padding: '0 30px',
//         background: 'green', fontSize: "20px", boxShadow: "6px"
//     },
//     backgroundImg: {
//         backgroundImage: 'url("https://cdn.glitch.com/0b57df91-f600-46a4-956b-70a322817e9a%2Frm32-chim-32-m-marble_0raw_pixel.jpg?v=1619517213009")',
//         height: "auto",
//         backgroundSize: "contain",
//         backgroundPosition: "top right",
//         textAlign: "center"
//     },
//     TitleStyle: {
//         color: "#000",
//         fontSize: '55px',
//         border: "white",
//         textAlign: "center",
//         marginTop: "30px",
//         marginLeft: "10px"
//     },
//     FamImgStyle: {
//         width: "250px",
//         minWidth: "150px",
//         height: "160px",
//         padding: "1px",
//         margin: "30px 0 0 45px ",
//         borderRadius: "10%",
//         boxShadow: "0 0 1px 1px "
//     }
// })
//
//
// function Header(props) {
//     const classes = useStyles();
//     const {groupcode }= useAuth();
//     // let GroupCode = ({
//     //     codeUrl: "http://localhost:3000/#main"
//     // })
//     return (
//         <Grid container>
//             <Grid item xs={3} sm={2}>
//                 <br/>
//                 <div>
//                     <Image className="img-thumbnail" class={classes.FamImgStyle}
//                            src={"https://images.unsplash.com/photo-1606787842514-a7998e6bee38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhbWlseXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}
//                            alt="family's img"/>
//                 </div>
//             </Grid>
//             <Grid item sm={7}>
//                 <br/><br/><br/>
//                 <h1 className={classes.TitleStyle}> &emsp;&nbsp;&nbsp;{props.name}'s
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
//     const classes = useStyles();
//     return (
//         <div>
//             <Container maxWidth={"xl"} className={classes.backgroundImg}>
//                 <Grid item container xs={12} spacing={2}>
//                     <Grid item xs={12}>
//                         <Header name="Kaufman"/>
//                     </Grid>
//                     <Grid item container xs={12}>
//                         <Grid item xs={5}/>
//                         <Grid item xs={1}>
//                             <h3>
//                                 <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salads:</b>
//                             </h3>
//                         </Grid>
//                         <Grid item xs={4}/>
//                         <br/>
//                         <br/>
//                     </Grid>
//                 </Grid>
//                 <br/>
//                 <Grid item container xs={12} spacing={3}>
//                     <Grid item xs={1} md={2}>
//                         <br/>
//                         <ListItemLink/>
//                     </Grid>
//                     <Grid item xs={11} md={8}>
//                         <TitleBarGridList/>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </div>
//     )
// }
//
// export default FamilyPage;
