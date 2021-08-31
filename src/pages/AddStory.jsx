// import React from "react";
// import {
//     Form,
//     Button,
//     Card,
//     Container,
//     Collapse,
//     Row,
//     Col
// } from "react-bootstrap";
// import "../styles/AddStory.css";
// import {useHistory} from "react-router-dom";
//
//
// export default function AddStory() {
//     const [open, setOpen] = React.useState(false);
//     const [btnMessage, setBtnMessage] = React.useState("Show Full Recipe");
//     const recipeName = "Grandma Shoshana's Indian Curry Recipe";
//     const allIngredients = ['2 pounds skinless, boneless chicken breast halves',
//         '2 teaspoons salt', '½ cup cooking oil',
//         "1 ½ cups chopped onion", "1 tablespoon minced garlic",
//         "1 ½ teaspoons minced fresh ginger root",
//         "1 tablespoon curry powder",
//         "1 teaspoon ground cumin",
//         "1 teaspoon ground turmeric",
//         "1 teaspoon ground coriander",
//         "1 teaspoon cayenne pepper",
//         "1 tablespoon water",
//         "1 (15 ounce) can crushed tomatoes",
//         "1 cup plain yogurt",
//         "1 tablespoon chopped fresh cilantro",
//         "1 teaspoon salt",
//         "½ cup water",
//         "1 teaspoon garam masala",
//         "1 tablespoon fresh lemon juice"];
//     const lessIngredients = allIngredients.slice(0, 3);
//     const restOfIngredients = allIngredients.slice(3);
//     const directions = ["Sprinkle the chicken breasts with 2 teaspoons salt.",
//         "Heat the oil in a large skillet over high heat; partially cook the chicken in the hot oil in batches until completely browned. Transfer the browned chicken breasts to a plate and set aside.",
//         "Reduce the heat under the skillet to medium-high; add the onion, garlic, and ginger to the oil remaining in the skillet and cook and stir until the onion turns translucent, about 8 minutes. \
//          Stir the curry powder, cumin, turmeric, coriander, cayenne, and 1 tablespoon of water into the onion mixture; allow to heat together for about 1 minute while stirring. Mix the tomatoes, yogurt,\
//          1 tablespoon chopped cilantro, and 1 teaspoon salt into the mixture. Return the chicken breast to the skillet along with any juices on the plate. Pour 1/2 cup water into the mixture; bring to a \
//          boil, turning the chicken to coat with the sauce. Sprinkle the garam masala and 1 tablespoon cilantro over the chicken.",
//         "Cover the skillet and simmer until the chicken breasts are no longer pink in the center and the juices run clear, about 20 minutes. An instant-read thermometer inserted into the center should \
//          read at least 165 degrees F (74 degrees C). Sprinkle with lemon juice to serve."];
//     const history = useHistory();
//
//
//     function toggle() {
//         setOpen(!open);
//         if (open) {
//             setBtnMessage("Show Full Recipe");
//         } else {
//             setBtnMessage("Hide Recipe");
//         }
//     }
//
//     function Item(props) {
//         return <li>{props.message}</li>;
//     }
//
//     return (
//         <div className="addstory">
//             <Card className="background">
//                 <Container>
//                     <Row>
//                         <Col>
//                             <div className="showrecipe">
//                                 <Card className="recipecard">
//                                     <Card.Img
//                                         className="darken"
//                                         variant="top"
//                                         fluid="true"
//                                         src="https://cdn.glitch.com/0b57df91-f600-46a4-956b-70a322817e9a%2Fcurry-with-chicken-onions-indian-food-asian-cuisine.jpg?v=1618751636189"
//                                     />
//                                     <Card.ImgOverlay>
//                                         <Card.Title className="text-white headline">
//                                             {recipeName}
//                                         </Card.Title>
//                                     </Card.ImgOverlay>
//                                     <Card.Body>
//
//                                         <h5>Ingredients:</h5>
//                                         <ul>
//                                             {lessIngredients.map((message) => <Item key={message} message={message} />)}
//                                             <Collapse in={open}>
//                                                 <div id="example-collapse-text">
//                                                     {restOfIngredients.map((message) => <Item key={message} message={message} />)}
//                                                 </div>
//                                             </Collapse>
//                                         </ul>
//                                         <Collapse in={open}>
//                                             <div id="example-collapse-text">
//                                                 Instructions:
//                                                 <ol>
//                                                     {directions.map((message) => <Item key={message} message={message} />)}
//                                                 </ol>
//                                             </div>
//                                         </Collapse>
//
//                                         <Container>
//                                             <Row>
//                                                 <Col className="d-flex align-items-center justify-content-center ">
//                                                     <Button
//                                                         variant="outline-success"
//                                                         onClick={toggle}
//                                                         aria-controls="example-collapse-text"
//                                                         aria-expanded={open}
//                                                     >
//                                                         {btnMessage}
//                                                     </Button>
//                                                 </Col>
//                                                 <Col className="d-flex align-items-center justify-content-center">
//                                                     <Button variant="outline-success">Edit Recipe</Button>
//                                                 </Col>
//                                             </Row>
//                                         </Container>
//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         </Col>
//                         <Col id="rightcol">
//                             <Card.Body>
//                                 <h2>Add a Story</h2>
//                                 <Form>
//                                     <Form.Group id="story" >
//                                         <Form.Label>Tell the story behind this recipe:</Form.Label>
//                                         <Form.Control
//                                             as="textarea"
//                                             rows={3}
//                                             placeholder="What do you remember about this recipe? When did you first try it? Who taught you how to make it? Why do you love it?"
//                                         />
//                                     </Form.Group>
//                                     <Form.Group id="photo">
//                                         <Form.Label>Add Photo</Form.Label>
//                                         <Form.File id="exampleFormControlFile1" />
//                                     </Form.Group>
//                                 </Form>
//                                 <Container>
//                                     <Row>
//                                         <Col className="d-flex align-items-center justify-content-center">
//                                             <Button
//                                                 variant="success"
//                                                 type="submit"
//                                                 style={{ margin: "10px" }}
//                                             >
//                                                 Save As Draft
//                                             </Button>
//                                         </Col>
//                                         <Col>
//                                             <Button
//                                                 variant="success"
//                                                 type="submit"
//                                                 style={{ margin: "10px" }}
//                                                 onClick={()=>history.push("/main")}
//                                             >
//                                                 Publish
//                                             </Button>
//                                         </Col>
//                                     </Row>
//                                 </Container>
//                             </Card.Body>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Card>
//         </div>
//     );
// }
