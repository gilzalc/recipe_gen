import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const FIRST_DISH = "Salads"
const SECOND_DISH = "Pies"
const THIRD_DISH = "Fish"
const FOURTH_DISH = "Holidays"
const FIFTH_DISH = "Deserts"
const SIXTH_DISH = "Vegan"
const SEVENTH_DISH = "Soup"

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        maxWidth: 360,
        minWidth: 150,
        backgroundColor: "transparent",
        boxShadow: "1px  1px 6px grey",
        marginLeft:"25px"
    }
}));

function Item(props) {
    // const classes = useStyles();
    return (
        <ListItem button>
            <ListItemIcon>
                            <span className="badge badge-primary badge-pill"
                                  style={{
                                          background: "#269026",
                                      fontSize: "15px"
                                  }}>{props.num}</span>
            </ListItemIcon>
            <ListItemText   primary={props.text}/>
        </ListItem>
    )
}

export default function SimpleList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav"
                  aria-label="main mailbox folders">
                <Item text={FIRST_DISH} num={8}/>
                <Divider/>
                <Item text={SECOND_DISH} num={12}/>
                <Divider/>
                <Item text={THIRD_DISH} num={23}/>
                <Divider/>
                <Item text={FOURTH_DISH} num={7}/>
                <Divider/>
                <Item text={FIFTH_DISH} num={22}/>
                <Divider/>
                <Item text={SIXTH_DISH} num={14}/>
                <Divider/>
                <Item text={SEVENTH_DISH} num={19}/>
            </List>
        </div>
    );
}
