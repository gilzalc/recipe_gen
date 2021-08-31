// import React from "react";
// import {
//     // Form,
//     // Button,
//     Card,
//     // Container,
//     // Collapse,
//     Row,
//     // Col
// } from "react-bootstrap";
// import CardDeck from "react-bootstrap/CardDeck";
// import Nav from "react-bootstrap/Nav";
// // import Tabs from "react-bootstrap/Tabs";
// import "../styles/ShowRecipe.css";
//
//
// export default function ShowRecipe() {
//     const [open, setOpen] = React.useState(false);
//     const [btnMessage, setBtnMessage] = React.useState("Show Full Recipe");
//     const recipeName = "Grandma Shoshana's Challah";
//     const storyline1 = "Grandma Shoshana used to make this Challah every Shabbat. It's a recipe that passes in the family. " +
//         "The word challah originally meant only the small portion of dough that was put in the oven when baking bread as a reminder of the destruction of the Temple in Jerusalem. " +
//         " It has evolved into the twisted, sweet, almost brioche-like bread that was brought to America by immigrants from Central and Eastern Europe. " +
//         " Although straight loaves of braided challah are eaten throughout the year, round Challahs," +
//         "often studded with raisins, are served for Rosh Hashana, and also for Yom Kippur and Sukkot, the holidays celebrating the New Year and the fall harvest. " +
//         " Throughout the years, I have picked up tips from challah bakers throughout this country and in Europe and Israel. " +
//         " For example: Several risings make a better loaf, and if you want an especially brioche-like texture, let the dough rise slowly in the refrigerator for one of the three risings. " +
//         " The secret to a glossy loaf is to brush with an egg wash twice, once just after braiding and then again just before baking.";
//     const Pictures = [
//         "https://cdn.glitch.com/0b57df91-f600-46a4-956b-70a322817e9a%2Fannie-spratt-Ar9j8V6oMzo-unsplash.jpg?v=1619471229273",
//         "https://cdn.glitch.com/0b57df91-f600-46a4-956b-70a322817e9a%2Flaura-fuhrman-73OJLcahQHg-unsplash.jpg?v=1619471222651",
//         "https://cdn.glitch.com/0b57df91-f600-46a4-956b-70a322817e9a%2Fnathon-oski-KxqXpxxodfI-unsplash.jpg?v=1619471199809",
//         "https://cdn.glitch.com/0b57df91-f600-46a4-956b-70a322817e9a%2Fchristian-bowen-TOKVE7PNwAc-unsplash.jpg?v=1619471234104",
//         "https://cdn.glitch.com/0b57df91-f600-46a4-956b-70a322817e9a%2Felement5-digital-h5rgWo1_F_U-unsplash.jpg?v=1619471222651",
//     ];
//     const Picture_Titles = [
//         "Grandma Shoshana as a little kid",
//         "Grandma Shoshana's Family Album",
//         "Use a knife to carve the Shape",
//         "Grandma Shoshana and little Hannah making a Challah together",
//     ];
//     const Picture_description = [
//         "Standing from right to left: Bobby, Abby, Shoshana,Carl, Danny, Emma, Flora ,George, Hannah, Iris, Jhon.",
//         "On the left: Abby and Shoshana.",
//     ];
//
//     function toggle() {
//         setOpen(!open);
//         if (open) {
//             setBtnMessage("Show Recipe");
//         } else {
//             setBtnMessage("Show Story");
//         }
//     }
//
//     // function Item(props) {
//     //     return <li>{props.message}</li>;
//     // }
//
//     return (
//         <div className="outer_div">
//             <Card className="colored-background">
//                 <div className="showrecipe">
//                     {/*<h3 style={{ padding: "10px" }}>
//             Grandma Shoshana's Indian Curry Recipe
//           </h3>*/}
//                     <Card className="storycard">
//                         <Card.Header>
//                             <Nav variant="tabs" defaultActiveKey="/ShowStory">
//                                 <Nav.Item>
//                                     <Nav.Link href="/ShowStory">Story</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link href="/showrecipe">Recipe</Nav.Link>
//                                 </Nav.Item>
//                             </Nav>
//                         </Card.Header>
//                         <h1>{recipeName}</h1>
//                         <Card.Img
//                             className="Head_Picture_Story"
//                             variant="top"
//                             fluid="true"
//                             src="https://cdn.glitch.com/0b57df91-f600-46a4-956b-70a322817e9a%2Frebecca-matthews-yjWNJRwt8mc-unsplash.jpg?v=1619471178279"
//                         />
//                         <Card.Body>
//                             <Row>
//                                 <t1 className= 'storyText'>{storyline1}</t1>
//                             </Row>
//                             <Row>
//                                 <CardDeck>
//                                     <Card>
//                                         <Card.Img
//                                             className="small_pic"
//                                             variant="top"
//                                             src={Pictures[0]}
//                                         />
//                                         <Card.Body>
//                                             <Card.Title>{Picture_Titles[0]}</Card.Title>
//                                             <Card.Text>
//                                                 {Picture_description[0]}
//                                             </Card.Text>
//                                         </Card.Body>
//                                     </Card>
//                                     <Card>
//                                         <Card.Img
//                                             className="small_pic"
//                                             variant="top"
//                                             src={Pictures[1]}
//                                         />
//                                         <Card.Body>
//                                             <Card.Title>{Picture_Titles[1]}</Card.Title>
//                                             <Card.Text>
//                                                 {Picture_description[1]}
//                                             </Card.Text>
//                                         </Card.Body>
//                                     </Card>
//                                     <Card>
//                                         <Card.Img
//                                             className="small_pic"
//                                             variant="top"
//                                             src={Pictures[2]}
//                                         />
//                                         <Card.Body>
//                                             <Card.Title>{Picture_Titles[2]}</Card.Title>
//                                         </Card.Body>
//                                     </Card>
//                                     <Card>
//                                         <Card.Img
//                                             className="small_pic"
//                                             variant="top"
//                                             src={Pictures[3]}
//                                         />
//                                         <Card.Body>
//                                             <Card.Title>{Picture_Titles[3]}</Card.Title>
//                                         </Card.Body>
//                                     </Card>
//                                     <Card>
//                                         <Card.Img
//                                             className="small_pic"
//                                             variant="top"
//                                             src={Pictures[4]}
//                                         />
//                                     </Card>
//                                 </CardDeck>
//                             </Row>
//                         </Card.Body>
//                     </Card>
//                     {/*<Card>
//                         <h5>Comments</h5>
//                         <Row>
//                             <Col className= 'commenter'>
//                                 <t1>Tal</t1>
//                             </Col>
//                             <Col className='comment'>
//                                 <t1>I love this recipe!</t1>
//                             </Col>
//                         </Row>
//                     </Card>*/}
//                 </div>
//             </Card>
//         </div>
//     );
// }