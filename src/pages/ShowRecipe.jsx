// import React from "react";
// import {
//     Button,
//     Card,
//     Row,
//     Col, Alert
// } from "react-bootstrap";
// import CardDeck from "react-bootstrap/CardDeck";
// import Nav from "react-bootstrap/Nav";
// import "../styles/ShowRecipe.css";
// import {useAuth} from "../contexts/AuthContext";
// import {makeStyles} from "@material-ui/core/styles";
// import CardMedia from "@material-ui/core/CardMedia";
//
//
// export default function ShowRecipe(props) {
//     const [open, setOpen] = React.useState(false);
//     const {recipes} = useAuth();
//     const [btnMessage, setBtnMessage] = React.useState("Show Full Recipe");
//     let recipeName = "Grandma Shoshana's Challah";
//     const author = "Noah"
//     const prepTime = "1 hour"
//     const serving = "4 medium Challah's"
//     const storyline1 = "Grandma Shoshana used to make this Challah every Shabbat. It's a recipe that passes in the family. " +
//         "The word challah originally meant only the small portion of dough that was put in the oven when baking bread as a reminder of the destruction of the Temple in Jerusalem. " +
//         " It has evolved into the twisted, sweet, almost brioche-like bread that was brought to America by immigrants from Central and Eastern Europe. " +
//         " Although straight loaves of braided challah are eaten throughout the year, round Challahs," +
//         "often studded with raisins, are served for Rosh Hashana, and also for Yom Kippur and Sukkot, the holidays celebrating the New Year and the fall harvest. " +
//         " Throughout the years, I have picked up tips from challah bakers throughout this country and in Europe and Israel. " +
//         " For example: Several risings make a better loaf, and if you want an especially brioche-like texture, let the dough rise slowly in the refrigerator for one of the three risings. " +
//         " The secret to a glossy loaf is to brush with an egg wash twice, once just after braiding and then again just before baking.";
//     const allIngredients = [
//         "1 ½ packages active dry yeast (about 3 1/2 teaspoons)",
//         "1 tablespoon plus 1/2 cup sugar",
//         "½ cup vegetable oil, more for greasing bowl",
//         "5 large eggs",
//         "1 tablespoon salt",
//         "8 to 8 ½ cups all-purpose flour",
//         "Poppy or sesame seeds for sprinkling",
//     ];
//     const lessIngredients = allIngredients.slice(0, 3);
//     const restOfIngredients = allIngredients.slice(3);
//     const directions = [
//         "In a large bowl, dissolve yeast and 1 tablespoon sugar in 1 3/4 cups lukewarm water.",
//         "Whisk oil into yeast, then beat in 4 eggs, one at a time, with remaining sugar and salt. Gradually add flour. " +
//         "When dough holds together, it is ready for kneading. (You can also use a mixer with a dough hook for both mixing and kneading.)",
//         "Turn dough onto a floured surface and knead until smooth. Clean out bowl and grease it, then return dough to bowl." +
//         " Cover with plastic wrap, and let rise in a warm place for 1 hour, until almost doubled in size. " +
//         "Dough may also rise in an oven that has been warmed to 150 degrees then turned off. " +
//         "Punch down dough, cover and let rise again in a warm place for another half-hour.",
//         "To make a 6 braid challah, either straight or circular, take half the dough and form it into 6 balls." +
//         " With your hands, roll each ball into a strand about 12 inches long and 1 1/2 inches wide." +
//         " Place the 6 in a row, parallel to one another. Pinch the tops of the strands together. Move the outside right strand over 2 strands." +
//         " Then take the second strand from the left and move it to the far right. Take the outside left strand and move it over 2." +
//         " Move second strand from the right over to the far left. Start over with the outside right strand." +
//         " Continue this until all strands are braided. For a straight loaf, tuck ends underneath. For a circular loaf, twist into a circle, pinching ends together." +
//         " Make a second loaf the same way. Place braided loaves on a greased cookie sheet with at least 2 inches in between.\n",
//         "Beat remaining egg and brush it on loaves. Either freeze breads or let rise another hour.",
//         "If baking immediately, preheat oven to 375 degrees and brush loaves again. If freezing, remove from freezer 5 hours before baking." +
//         " Then dip your index finger in the egg wash, then into poppy or sesame seeds and then onto a mound of bread. Continue until bread is decorated with seeds.",
//         "Bake in middle of oven for 35 to 40 minutes, or until golden. Cool loaves on a rack."
//     ];
//
//     // function toggle() {
//     //     setOpen(!open);
//     //     if (open) {
//     //         setBtnMessage("Show Recipe");
//     //     } else {
//     //         setBtnMessage("Show Story");
//     //     }
//     // }
//
//     //  usage:
//     //  arrayname.map(message => (<Item key={message} message={item}/>))
//
//     const useStyles = makeStyles({
//         root: {
//             maxWidth: 345,
//         },
//         media: {
//             height: 250,
//             width:500
//         },
//     });
//
//     function Item(props) {
//         return <li>{props.message}</li>;
//     }
//
//     function DefaultRecipe() {
//         const recipe = props.location.recipe
//         const classes = useStyles();
//
//         return (
//             <Card className="colored-background">
//                 <div className="showrecipe">
//                     {/*<h3 style={{ padding: "10px" }}>
//             Grandma Shoshana's Indian Curry Recipe
//           </h3>*/}
//                     <Card className="recipecard">
//                         <Card.Header>
//                             <Nav variant="tabs" defaultActiveKey="/showrecipe">
//                                 <Nav.Item>
//                                     <Nav.Link href="/showstory">Story</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link href="/showrecipe">Recipe</Nav.Link>
//                                 </Nav.Item>
//                             </Nav>
//                         </Card.Header>
//                         <Card>
//                             <Col>
//                                 <Row>
//                                     <h1>{recipe.name || recipeName}</h1>
//                                 </Row>
//                                 <Row>
//                                     <Col>
//                                         <h3>By: {recipe.author || author} </h3>
//                                     </Col>
//                                     <Col>
//                                         <h3> Servings: {recipe.serving || serving} </h3>
//                                     </Col>
//                                     <Col>
//                                         <h3>Preparation Time: {recipe.prepTime || prepTime}</h3>
//                                     </Col>
//                                 </Row>
//                             </Col>
//                         </Card>
//                         <CardDeck>
//                             <Card>
//                                 <Card.Body>
//                                     <h4>Ingredients:</h4>
//                                     <ul className="show_ingredients">
//                                         {recipe.IngredientsList.map(message => (
//                                             <Item key={message} message={message}/>
//                                         ))}
//                                         {/*{restOfIngredients.map(message => (*/}
//                                         {/*    <Item key={message} message={message}/>*/}
//                                         {/*))}*/}
//                                     </ul>
//                                 </Card.Body>
//                                 {/*<CardMedia*/}
//                                 {/*    className={classes.media}*/}
//                                 {/*    image={recipe.getMainImage() || "https://cdn.glitch.com/0b57df91-f600-46a4-956b-70a322817e9a%2Frebecca-matthews-yjWNJRwt8mc-unsplash.jpg?v=1619471178279"}*/}
//                                 {/*    title="Contemplative Reptile"*/}
//                                 {/*/>*/}
//                                 <Card.Img
//                                 className="Head_Picture_Story"
//                                     variant="top"
//                                     fluid="false"
//                                     src={recipe.getMainImage() || "https://cdn.glitch.com/0b57df91-f600-46a4-956b-70a322817e9a%2Frebecca-matthews-yjWNJRwt8mc-unsplash.jpg?v=1619471178279"}
//                                 />
//                             </Card>
//                             <Card>
//                                 <h5>Instructions:</h5>
//                                 <ol className="show_instruction">
//                                     {recipe.instructionDetails.map(message => (
//                                         <Item key={message} message={message}/>
//                                     ))}
//                                 </ol>
//                                 <Card.Body>
//                                     <Button variant="outline-success">Edit Recipe</Button>
//                                 </Card.Body>
//                             </Card>
//                         </CardDeck>
//                         <CardDeck className="Tags">
//                             <Card.Header>
//                                 Tags:
//                             </Card.Header>
//                             <Card>
//                                 <t1>Bread</t1>
//                             </Card>
//                             <Card>
//                                 <t1>Shabbat</t1>
//                             </Card>
//                             <Card>
//                                 <t1>with eggs</t1>
//                             </Card>
//                         </CardDeck>
//                     </Card>
//                 </div>
//             </Card>
//         )
//     }
//
//
//     return (
//         <div className="outer_div">
//             {!props.id && <DefaultRecipe/>}
//             {props.id && recipes && recipes.length <= props.id &&
//             <Alert variant="danger">Error: recipe does not exist!</Alert>}
//             {props.id && recipes.length > props.id &&
//             <Card className="colored-background">
//                 <div className="showrecipe">
//                     <Card className="recipecard">
//                         <Card.Header>
//                             <Nav variant="tabs" defaultActiveKey="/showrecipe">
//                                 <Nav.Item>
//                                     <Nav.Link href="/showstory">Story</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link href="/showrecipe">Recipe</Nav.Link>
//                                 </Nav.Item>
//                             </Nav>
//                         </Card.Header>
//                         <Card>
//                             <Col>
//                                 <Row>
//                                     <h1>{recipes[props.id].name}</h1>
//                                 </Row>
//                                 <Row>
//                                     <Col>
//                                         <h3>By: {recipes[props.id].author} </h3>
//                                     </Col>
//                                     <Col>
//                                         <h3> Servings: {recipes[props.id].serving} </h3>
//                                     </Col>
//                                     <Col>
//                                         <h3>Preparation Time: {recipes[props.id].prepTime}</h3>
//                                     </Col>
//                                 </Row>
//                             </Col>
//                         </Card>
//                         <CardDeck>
//                             <Card>
//                                 <Card.Body>
//                                     <h4>Ingredients:</h4>
//                                     <ul className="show_ingredients">
//                                         {recipes.IngredientsList.map(message => (
//                                             <Item key={message} message={message}/>
//                                             ))
//                                         // ||
//                                         //     [props.id].IngredientsList.map(message => (
//                                         //     <Item key={message} message={message}/>
//                                         // ))
//                                         }
//                                     </ul>
//                                 </Card.Body>
//                                 <Card.Img
//                                     className="Head_Picture_Story"
//                                     variant="top"
//                                     fluid="false"
//                                     src="https://cdn.glitch.com/0b57df91-f600-46a4-956b-70a322817e9a%2Frebecca-matthews-yjWNJRwt8mc-unsplash.jpg?v=1619471178279"
//                                 />
//                             </Card>
//                             <Card>
//                                 <h5>Instructions:</h5>
//                                 <ol className="show_instruction">
//                                     {recipes[props.id].instructionDetails.map(message => (
//                                         <Item key={message} message={message}/>
//                                     ))}
//                                 </ol>
//                                 <Card.Body>
//                                     <Button variant="outline-success">Edit Recipe</Button>
//                                 </Card.Body>
//                             </Card>
//                         </CardDeck>
//                         <CardDeck className="Tags">
//                             <Card.Header>
//                                 Tags:
//                             </Card.Header>
//                             <Card>
//                                 <t1>Bread</t1>
//                             </Card>
//                             <Card>
//                                 <t1>Shabbat</t1>
//                             </Card>
//                             <Card>
//                                 <t1>with eggs</t1>
//                             </Card>
//                         </CardDeck>
//                     </Card>
//                 </div>
//             </Card>
//             }
//         </div>
//     );
// }