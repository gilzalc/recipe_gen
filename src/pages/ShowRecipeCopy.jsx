import React from "react";
import {
    Form,
    Button,
    Card,
    Container,
    Collapse,
    Row,
    Col, Alert
} from "react-bootstrap";
import CardDeck from "react-bootstrap/CardDeck";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import "../styles/ShowRecipeCopy.css";
import {useAuth} from "../contexts/AuthContext";


export default function ShowRecipe(props) {
    const [open, setOpen] = React.useState(false);
    const {recipes} = useAuth();
    const [btnMessage, setBtnMessage] = React.useState("Show Full Recipe");
    let recipeName = "Grandma Shoshana's Challah";
    const author = "Noah"
    const prepTime = "1 hour"
    const serving = "4 medium Challah's"
    const storyline1 = "THis is a story we're telling. it's a beautiful story and we love telling it, so we're doing that now";
    const allIngredients = [
        "Poppy or sesame seeds for sprinkling",
    ];
    const lessIngredients = allIngredients.slice(0, 0);
    const restOfIngredients = allIngredients.slice(0);
    const directions = [
        "Bake in middle of oven for 35 to 40 minutes, or until golden. Cool loaves on a rack."
    ];

    function toggle() {
        setOpen(!open);
        if (open) {
            setBtnMessage("Show Recipe");
        } else {
            setBtnMessage("Show Story");
        }
    }
    //  usage:
    //  arrayname.map(message => (<Item key={message} message={item}/>))
    function Item(props) {
        return <li>{props.message}</li>;
    }

    return (
        <div className="recipe_and_story_display_outer_div">

            <div className={"ShowRecipeHeader"}>
                Name of recipe
            </div>
            <div className={"ShowRecipeStoryPart-Text"}>
                <t1 className='storyText'>{storyline1}</t1>
            </div>
            <div className={"ShowRecipeInstructionsPart"}>
                <div className={"recipe-general-details"}>
                    <Col>
                        <Row>
                            <h1>{recipeName}</h1>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Uploaded by: {author} </h3>
                            </Col>
                            <Col>
                                <h3> Servings: {serving} </h3>
                            </Col>
                            <Col>
                                <h3>Preparation Time: {prepTime}</h3>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <h4>Ingredients:</h4>
                <ul className="show_ingredients">
                    {lessIngredients.map(message => (
                        <Item key={message} message={message}/>
                    ))}
                    {restOfIngredients.map(message => (
                        <Item key={message} message={message}/>
                    ))}
                </ul>
            </div>
        </div>

    );
}