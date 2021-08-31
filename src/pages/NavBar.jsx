import React, {useState} from "react";
import {
    Navbar,
    Nav,
    Button,
    Alert
} from "react-bootstrap";
import {useAuth} from "../contexts/AuthContext";
import {useHistory} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import {icons} from "../userSelect/ChooseUser";
import Member from "../userSelect/Member";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        height: "50px",
    }
    ,
    textCenter: {
        textAlign: "center",
        marginRight:"3px"
    }
    ,
    memberAvatar: {
        width: theme.spacing(5),
        height:
            theme.spacing(5),
        // -moz-box-shadow:    "inset 0 0 10px #000000",
        // -webkit-box-shadow:" inset 0 0 10px #000000",
        boxShadow: "inset 0 0 2px #000000",
        border: "1px solid #555",
        display: 'flex',
        '& > *':
            {
                margin: theme.spacing(1),
            }
    },
    stickyTop: {
        backgroundColor: "#fafaf8",
    //    can change here to any color! currently used spoons background color
    },
}))


export default function NavBar() {
    const {familyName, member} = useAuth()
    const {currentUser, logout, ForceFetchData, setLoading} = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();
    const classes = useStyles();


    async function handleLogout() {
        setError("");
        setLoading(true);
        try {

            logout().then(()=> {history.push("/");}).catch(err=> {
                setError("Failed to Logout, " + err.message);
            })
            // history.push("/");
        } catch (err) {
            setError("Failed to Logout, " + err.message);
        }
    }

    function HandleLogoClick() {
        ForceFetchData();
        history.push("/");
    }

    return (
        <>
            <Navbar variant="light" expand="lg" className={classes.stickyTop}>
                <Navbar.Brand onClick={HandleLogoClick}>
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/grandma-cooked-oatmeal.appspot.com/o/images%2FLogo1.png?alt=media&token=bc78965c-aad2-4121-81f9-6feb9ccf5301"
                            width="150" height="45" alt="">
                        </img></a> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/*             <Nav.Link href="#home">Add Recipe</Nav.Link>
            <Nav.Link href="#link">Invite Family User</Nav.Link> */}
                    </Nav>
                    {currentUser && member &&
                    <a href className={classes.textCenter}><Avatar className={classes.memberAvatar}
                        onClick={() => history.push("/changeuser")} src={icons[member.avatar]}
                        alt={3}/>{member.name}</a>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    {currentUser &&
                    <>
                        <Button variant="secondary" className="ml-sm-2"
                                onClick={handleLogout}>Logout</Button></>
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
