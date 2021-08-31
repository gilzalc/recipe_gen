import React, {useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {IconButton, InputAdornment, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {tempRecipe} from "./addRecipeMain";
import Autocomplete from '@material-ui/lab/Autocomplete';
import IngredientsDataSet from "../data/IngredientsDataSet";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles(theme => ({
        margin: {
            margin: theme.spacing(1),
        },


        font: {
            color: 'rgba(213,195,38,0.9)',
        },
        buttons: {
            color: "white",
            padding: "0 30px",
        },
        button: {
            background:
                "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(1)
        },
        input: {
            "&:invalid": {
                border: "red solid 2px"
            }

        },
        layout: {
            display: "flex",
            flexDirection: "column",
        },
        root: {
            flexGrow: 1,
        },
        inputRoot: {
            fontSize: 22
        },
        labelRoot: {
            fontSize: 22,
            "&$labelFocused": {}
        },
        labelFocused: {}


    }
));

function List(props) {
    const tempRecipe = props.tempRecipe;
    const [inputList, setInputList] = useState(tempRecipe.getIngredientsList());
    // handle click event of the Add button
    const ing = IngredientsDataSet();
    const handleAddClick = () => {
        setInputList([...inputList, {ingredient: "", amount: "", typeAmount: ""}]);
    };
    const TempingLst = [
        "baking powder",
        "eggs",
        "all-purpose flour",
        "raisins",
        "milk",
        "egg yolks",
        "corn starch",
        "bananas",
        "vanilla extract",
        "toasted pecans",
        "light rum",
        "sausage links",
        "olive oil",
        "peppers",
        "onions",
        "meat cuts",
        "file powder",
        "smoked sausage",
        "shrimp",
        "water",
        "paprika",
        "hot sauce",
        "garlic cloves",
        "browning",
        "lump crab meat",
        "vegetable oil",
        "all-purpose flour",
        "freshly ground pepper",
        "flat leaf parsley",
        "boneless chicken skinless thigh",
        "dried thyme",
        "white rice",
        "yellow onion",
        "ham",
        "ground black pepper",
        "salt",
        "sausage casings",
        "leeks",
        "parmigiano reggiano cheese",
        "cornmeal",
        "water",
        "extra-virgin olive oil",
        "baking powder",
        "all-purpose flour",
        "peach slices",
        "corn starch",
        "heavy cream",
        "lemon juice",
        "unsalted butter",
        "salt",
        "grape juice",
        "orange",
        "white zinfandel",
        "ground ginger",
        "white pepper",
        "green onions",
        "orange juice",
        "sugar",
        "Sriracha",
        "vegetable oil",
        "orange zest",
        "chicken broth",
        "sesame seeds",
        "boneless skinless chicken breasts",
        "corn starch",
        "white vinegar",
        "soy sauce",
        "garlic",
        "diced onions",
        "all-purpose flour",
        "chopped cilantro fresh",
        "ground cumin",
        "ground cinnamon",
        "vegetable oil",
        "bittersweet chocolate",
        "chopped garlic",
        "water",
        "hot chili powder",
        "boneless skinless chicken breast halves",
        "chicken broth",
        "cream cheese",
        "dried oregano",
        "eggs",
        "cherries",
        "pasta",
        "olive oil",
        "crushed red pepper",
        "cherry tomatoes",
        "basil",
        "mozzarella cheese",
        "zucchini",
        "salt",
        "yellow squash",
        "garlic",
        "water",
        "butter",
        "ground sumac",
        "ground lamb",
        "ground cinnamon",
        "grated parmesan cheese",
        "all-purpose flour",
        "onions",
        "tomato paste",
        "milk",
        "red wine",
        "feta cheese crumbles",
        "penne",
        "dried mint flakes",
        "cayenne pepper",
        "dried oregano",
        "pasta",
        "marinara sauce",
        "dried basil",
        "chicken fingers",
        "mozzarella cheese",
        "salt",
        "parmesan cheese",
        "cucumbers",
        "tapioca",
        "tomatoes",
        "carrots",
        "bread crumbs",
        "apples",
        "gin",
        "bacon",
        "challah",
        "eggplant",
        "tahini",
        "mushroom",
        "salmon fillet",
        "tuna",
        "cooking spray",
        "balsamic vinegar",
        "thyme leaves",
        "margarine",
        "mayonnaise",
        "mustard",
        "ketchup",
        "olives",
        "white wine",
        "whipping cream",
        "brown sugar",
        "oil",
        "baking soda",
        "powdered sugar"
        , "ground nutmeg"
        , "ground cloves"]

    const ingLst = [...new Set(TempingLst)];

    const typeList = ["gram", "cup", "ml", "tbsp", "tsp", "Spoon",
        "Pinch",
        "Cloves",
        "Cans",
        "To taste", "pieces", "slices"]

    const [inputValue, setInputValue] = React.useState('')

    // useEffect(() => {
    //     // window.scrollTo(0, 15);
    //     const listener = event => {
    //         if ((event.code === "Enter" || event.code === "NumpadEnter")) {
    //             handleAddClick();
    //         }
    //     };
    //     console.log("1z", tempRecipe.story)
    //     document.addEventListener("keydown", listener);
    //     return () => {
    //         document.removeEventListener("keydown", listener);
    //     };
    // }, [inputList]);

    // handle input change
    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        console.log(name, value)
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        tempRecipe.setIngredientsList(list);
    };
    const handleInputChangeAC = (e, v, index) => {
        const {name} = e.target;
        console.log(name)
        console.log(e.target, v)
        const list = [...inputList];
        console.log("list", list)
        list[index][name] = v;
        setInputList(list);
        tempRecipe.setIngredientsList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
        tempRecipe.setIngredientsList(list);

    };


    const classes = useStyles();


    return (
        <div className={classes.root}>
            {inputList.map((x, i) => {
                return (
                    <div>
                        <Grid container spacing={3} id={i + "grid"}>
                            <Grid item xs={5} sm={4}>
                                <Autocomplete
                                    id="ingFreeSolo"
                                    onChange={(e, v) => handleInputChangeAC(e, v, i)}
                                    freeSolo
                                    inputValue={x["ingredient"]}
                                    // value={x["ingredient"]}
                                    options={ingLst.map((t) => "" + t)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            required
                                            InputProps={{
                                                ...params.InputProps,
                                                classes: {root: classes.inputRoot}
                                            }}

                                            InputLabelProps={{
                                                shrink: true,
                                                // classes: {
                                                //     root: classes.labelRoot,
                                                //     focused: classes.labelFocused
                                                // }

                                            }}
                                            fullWidth
                                            name="ingredient"
                                            color="secondary"
                                            label="Ingredient"
                                            value={x["ingredient"]}
                                            onChange={e => handleInputChange(e, i)}
                                        />
                                    )}
                                />

                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <TextField
                                    id="ingFreeSolo"
                                    freeSolo
                                    color="secondary"
                                    fullWidth
                                    name="amount"
                                    inputProps={{min: 0, step: (1 / 10)}}
                                    InputProps={{classes: {root: classes.inputRoot}}}
                                    InputLabelProps={{
                                        shrink: true,
                                        classes: {
                                            root: classes.labelRoot,
                                            focused: classes.labelFocused
                                        }
                                    }}
                                    label="Amount"
                                    value={x.amount}
                                    onChange={e => {
                                        const regex = /^[0-9]+[/. ]?[0-9]*[/. ]?[0-9]*$/
                                        if (e.target.value === '' || regex.test(e.target.value)) {
                                            handleInputChange(e, i)
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={5} sm={2}>
                                <Autocomplete
                                    id="typeFreeSolo"
                                    freeSolo
                                    inputValue={x.typeAmount}
                                    onChange={(e, v) => handleInputChangeAC(e, v, i)}
                                    options={typeList.map((t) => "" + t)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            color="secondary"
                                            fullWidth
                                            name="typeAmount"
                                            InputProps={{
                                                ...params.InputProps,
                                                classes: {root: classes.inputRoot}
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                                // classes: {
                                                //     root: classes.labelRoot,
                                                //     focused: classes.labelFocused
                                                // }
                                            }}
                                            label="Unit"
                                            value={x.typeAmount}
                                            onChange={e => handleInputChange(e, i)}
                                        />)}
                                />
                            </Grid>
                            <div className={classes.buttons}>
                                {inputList.length - 1 === i &&
                                <Button className={classes.button}
                                        startIcon={<AddCircleIcon/>}
                                        onClick={handleAddClick}> </Button>}
                                {inputList.length !== 1 &&
                                <Button
                                    startIcon={<DeleteIcon/>}
                                    className={classes.button}
                                    onClick={() => handleRemoveClick(i)}>
                                </Button>}

                            </div>

                        </Grid>


                    </div>
                );
            })}
            {/*<IconButton aria-label="delete" className={classes.margin}>*/}
            {/*    <DeleteIcon />*/}
            {/*</IconButton>
            {/*<div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>*/}
        </div>
    );
}

export default List;
