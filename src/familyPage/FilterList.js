import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CheckboxListSecondary from "./CheckBox";
import {AllFiltersOption} from "../../../../../../WebstormProjects/untitled3/src/addRecipe/Recipe"
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(3),
    },
}));


export default function FilterList(props) {
    const classes = useStyles();
    const change = props.clickChange
    const handleFilter = props.handleFilter;


    function DropDown(props) {
        const [open, setOpen] = React.useState(true);
        const handleClick = () => {
            setOpen(!open);
        };
        return (
            <>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary={props.text}/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <CheckboxListSecondary
                            stateNum={props.stateNum} values={props.values} clickChange={change}
                            handlefilter={handleFilter}
                        />
                    </List>
                </Collapse>
            </>
        )
    }


    //DishesView => FilterList => DropDown => checkBox
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}>
            <DropDown text={"Categories"} stateNum={1} values={props.foodValues}/>
            <DropDown text={"Diets"} stateNum={2} values={props.dietValues}/>
            {/*<DropDown text={"Users"} stateNum={2} values={users} clickChange={props.clickChange}/>*/}
        </List>
    );
}
