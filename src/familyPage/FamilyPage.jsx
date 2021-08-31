import {Button, Image} from 'react-bootstrap';
import {makeStyles} from "@material-ui/core/styles";
import WhatsAppShare from "./WhatsAppShare";
import DishesView from "./DishesView";
import {useAuth} from "../contexts/AuthContext";
import {useHistory} from "react-router-dom";
import FamilyImg from "./FamilyImg";
import {useEffect} from "react";
import tempRecipeObj from "../addRecipe/tempRecipeObj";

function Header(props) {
// TODO: DEAL WITH SMALL SIZED DISPLAYS
// styles
    const useStyles = makeStyles({
        mainHeaderBase: {
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            alignItems: "center",
        },
        TitleStyle: {
            color: "#000",
            fontSize: '55px',
            border: "white",
            textAlign: "center",
            fontFamily: "'Trebuchet MS', sans-serif"
        },
        FamImgStyle: {
            width: "300px",
            minWidth: "150px",
            height: "200px",
            padding: "1px",
            borderRadius: "15%",
            justifySelf: "center",
            verticalAlign: "middle",
            // boxShadow: "0 0 1px 1px "
        },
        groupCodeShareMain: {
            textAlign: "center",
            borderLeft: "outset",
            paddingLeft: "15px",
            // alignSelf: "auto"
        },
        whatappIconShare: {
            // display:"flex"
        }
    })
    const classes = useStyles();
    const {groupcode} = useAuth();
    const webSiteFamilyUrl = "https://grandma-cooked-oatmeal.web.app/family/";

    return (
        <div className={classes.mainHeaderBase}>
            <FamilyImg/>
            <h1 className={classes.TitleStyle}> {props.name}'s
                Collection of Recipes
            </h1>
            <div className={classes.groupCodeShareMain}>
                <h5> Family Code: <strong> {groupcode} </strong></h5>
                <WhatsAppShare className={classes.whatappIconShare}
                               shareValue={webSiteFamilyUrl + {groupcode}.groupcode} message="Join me on Recipe Generation! "/>
            </div>
        </div>
    )
}

function FamilyPage(props) {

    const history = useHistory();
    function handleClickAddRecipe() {
        tempRecipeObj(false,null,"init")
        // addFavourite(1,22);
        history.push("/addrecipe")
    }
    const {familyName,} = useAuth();

    return (

        <div className="main_body_items_and_filter">
            <div className={"header"}>
                {familyName && <Header name={familyName}/>}
                {!familyName && <Header name="Kaufman"/>}
                {/*TODO: send image to header from firebase*/}
            </div>
            <DishesView handleClickBtn={handleClickAddRecipe}/>
        </div>
    )
}

export default FamilyPage;

