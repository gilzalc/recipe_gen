import React, {useState} from 'react'
import Collapse from '@material-ui/core/Collapse';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import {useAuth} from "../contexts/AuthContext";
import {Image} from "antd";
import {Button} from "react-bootstrap";
import Fab from "@material-ui/core/Fab";
// import noGluten from "../assets/GlutenFree.png"

const useStyles = makeStyles((theme) => ({
    checkBoxText: {
        fontSize: "100%",
    },
    margin: {
        marginTop: "30px",

    },
}));


export default function CheckBox(props) {

    let {members} = useAuth();
    const memberNames = [];
    const membersArr = [];
    for (const member of {members}.members) {
        memberNames.push(member.getName());
        membersArr.push(member)
    }

    const getNameByKey = (key) => {
        return memberNames[key];
    }
    const classes = useStyles();
    const [Checked, setChecked] = useState([])
    const [CheckedDiet, setCheckedDiet] = useState([])
    const [CheckedMembers, setCheckedMembers] = useState([])
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);


    const handleToggle = (value, type) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        props.handleFilters(newChecked, type)
        //update this checked information into Parent Component
    }

    const handleToggle2 = (value, type) => {

        const currentIndex = CheckedDiet.indexOf(value);
        const newCheckedDiet = [...CheckedDiet];

        if (currentIndex === -1) {
            newCheckedDiet.push(value)
        } else {
            newCheckedDiet.splice(currentIndex, 1)
        }
        setCheckedDiet(newCheckedDiet)
        props.handleFilters(newCheckedDiet, type)
        //update this checked information into Parent Component
    }
    const handleToggle3 = (value, type) => {

        const currentIndex = CheckedMembers.indexOf(value);
        const newCurMembers = [...CheckedMembers];
        if (currentIndex === -1) {
            newCurMembers.push(value)
        } else {
            newCurMembers.splice(currentIndex, 1)
        }
        setCheckedMembers(newCurMembers)
        console.log("new", newCurMembers)
        props.handleFilters(newCurMembers, type)
        //update this checked information into Parent Component
    }

    const renderCheckboxLists = (type) => props.FoodTypeCatList && props.FoodTypeCatList.map((value, index) => (
        <div>
            <React.Fragment key={index}>
                <Checkbox
                    onChange={() => handleToggle(value._id, type)}
                    type="checkbox"
                    checked={Checked.indexOf(value._id) !== -1}
                />&nbsp;&nbsp;

                <span
                    className={classes.checkBoxText}>{value.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </React.Fragment>
        </div>
    ))
    const renderCheckboxLists2 = (type) => props.DietList && props.DietList.map((value, index) => (
        <div>
            <React.Fragment key={index}>
                <Checkbox
                    onChange={() => handleToggle2(value._id, type)}
                    type="checkbox"
                    checked={CheckedDiet.indexOf(value._id) !== -1}
                />&nbsp;&nbsp;
                <span
                    className={classes.checkBoxText}>{value.name}<img
                    style={{height: 25, width: 25, float: "right", marginTop: "5px"}}
                    src={value.icon}/></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </React.Fragment>
        </div>
        // <img style={{height:"20px",width:"20px"}} alt={"ff"} src = {noGluten} />
    ))

    const renderCheckboxLists3 = (type) => membersArr.map((value, index) => (
        <div>
            <React.Fragment key={index}>
                <Checkbox
                    onChange={() => handleToggle3(value.key, type)}
                    type="checkbox"
                    checked={CheckedMembers.indexOf(value.key) !== -1}
                />&nbsp;&nbsp;
                <span
                    className={classes.checkBoxText}>{value.name}</span>
            </React.Fragment>
        </div>
    ))

    const clearChoice = () => {
        setCheckedDiet([]);
        setChecked([]);
        setCheckedMembers([]);
        props.handleFilters("clearChoice")
    }

// TODO: Style Filtering
    return (
        <div className={"filterHeader"}>

            {/*<Collapse defaultActiveKey={['0']} >*/}
            {/*<Panel header="Food Type" key="1"/>*/}
            {/*style={{boxShadow: "0px 4px 2px #888888"}}*/}
            <ListItem button onClick={() => {
                setOpen(!open);
            }}>
                <ListItemText primary={"Dish Type"}/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {renderCheckboxLists("FoodCategoryFilter")}
                </List>
            </Collapse>
            <ListItem button onClick={() => {
                setOpen2(!open2);
            }}>
                <ListItemText primary={"Restrictions"}/>
                {open2 ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <List>
                    {/*component="div" disablePadding*/}
                    {renderCheckboxLists2("DietFilter")}
                </List>
            </Collapse>

            <ListItem button onClick={() => {
                setOpen3(!open3);
            }}>
                <ListItemText primary={"Uploaded by"}/>
                {open3 ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
                <List>
                    {/*component="div" disablePadding*/}
                    {renderCheckboxLists3("curMembers")}
                </List>
            </Collapse>
            <Fab
                variant="extended"
                size="large"
                color="black"
                aria-label="add"
                className={classes.margin}
                onClick={() => {
                    clearChoice()
                }} style={{marginLeft:"15px"}}
            >
                Clear
            </Fab>
        </div>
    )
}


