import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Redirect, useHistory, useParams} from "react-router";
import "./styles/app.css";
import GroupCode from "./pages/group-code";
import SignUp from "./pages/SignUp";
// import AddStory from "./pages/AddStory";
import NavBar from "./pages/NavBar";
// import ShowRecipe from "./pages/ShowRecipe";
// import ShowStory from "./pages/ShowStory"
import {useAuth, AuthProvider} from "./contexts/AuthContext";
// import SandBox2 from "./ShowRecipeDir/ShowRecipeCopy"
import ShowRecipe from "./ShowRecipeDir/ShowRecipeCopy"
import ChooseUser from "./userSelect/ChooseUser";

//
// import TestAddRecipeToFB from "./addRecipe/TestAddRecipeToFB";
// import uploadImage from "./addRecipe/UploadImage";
import PrivateRoute from "./PrivateRoute";

import {Alert} from "react-bootstrap";
import ViewOnlyRecipe from "./ShowRecipeDir/ViewOnlyRecipe";
import FamilyPage from "./familyPage/FamilyPage";
import AddRecipeMain from "./addRecipe/addRecipeMain";
import NewStoryDropImg from "./addRecipe/NewStoryDropImg";
import {render} from "@testing-library/react";
import ForgotGroupcode from "./pages/ForgotGroupcode";


function App() {
    const [showSignUp, setShowSignUp] = React.useState(false);
    const [forgotCode, setForgotCode] = React.useState(false);
    const history = useHistory();

    function StartPage() {
        const {currentUser, member} = useAuth();
        const history = useHistory();
        if (currentUser) {
            if (member) {
                return <FamilyPage/>;
            }
            history.push("/changeuser");
            return null;
            // return <ChooseUser/>;
        } else if (showSignUp) {
            return <SignUp setShowSignUp={setShowSignUp}/>;
        } else if (!forgotCode) {
            return <GroupCode setShowSignUp={setShowSignUp} setForgotCode={setForgotCode}/>;
        } else {
            return <ForgotGroupcode setForgotCode={setForgotCode}/>;
        }
    }

    function ShowRecipeFunc() {
        let {id} = useParams();
        return <ShowRecipe id={id}/>;
    }

    function EditRecipe() {
        let {id} = useParams();
        let {recipes, findRecipeInArr} = useAuth();
        return (<AddRecipeMain recipe={findRecipeInArr(recipes, id)}/>)
    }

    function ViewOnly() {
        let {group, key} = useParams();
        const {getSingleRecipe} = useAuth();
        const [message, setMessage] = useState("Loading");
        const history = useHistory();
        const renderGetPage = async () => {
            return getSingleRecipe(group, key);
        }

        renderGetPage().then(()=> {
            history.push("/view-recipe/"+ group + key);
        }).catch(err => {
            setMessage(err.message);
        });
        return <h1>{message}</h1>;
    }

    function LoginFromLink() {
        let {id} = useParams();
        const {login, currentUser, logout} = useAuth();
        const history = useHistory();
        const [message, setMessage] = useState("Logging in with Group Code: " + id);

        const tryLogin = async () => {
            if (currentUser) {
                logout().then(() => {
                    return login(id);
                })
            } else {
                return login(id);
            }
        }
        tryLogin().then(() => {history.push("/")}).catch(err => {
            setMessage(err.message);
        });
        return <h1>{message}</h1>;
        // } catch (err) {
        //     return <Alert variant="danger">Invalid Group Code: {err.message}</Alert>
        // }
        // if (currentUser) {
        //     logout().then(() => {
        //         login(id).then(() => {
        //             // return <Redirect to="/" />
        //             history.push("/");
        //         }).catch(err => {
        //             return <Alert variant="danger">Invalid Group Code: {err.message}</Alert>
        //         })
        //     })
        // } else {
        //     login(id).then(() => {
        //         // return <Redirect to="/" />
        //         history.push("/");
        //     }).catch(err => {
        //         return <Alert variant="danger">Invalid Group Code: {err.message}</Alert>
        //     })
        // }

    }


    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <NavBar/>
                    <div className="content">

                        <Switch>
                            <Route exact path="/">
                                <div className="fix">
                                    <StartPage/>
                                </div>
                            </Route>
                            <Route path="/family/:id" children={<LoginFromLink/>}/>
                            <Route path="/shared-recipe/:group/:key" children={<ViewOnly/>}/>
                            <Route path="/view-recipe/:path" children={<ViewOnlyRecipe/>}/>
                            <PrivateRoute path="/recipe/:id" children={<ShowRecipeFunc/>}/>
                            <PrivateRoute path="/edit/:id" children={<EditRecipe/>}/>
                            {/*<PrivateRoute path="/addstory" component={AddStory} />*/}
                            {/*<PrivateRoute path="/main" component={FamilyPage} />*/}
                            <PrivateRoute path="/addrecipe" component={AddRecipeMain} />
                            {/*<PrivateRoute path="/showrecipe" component={SandBox2}/>*/}
                            {/*<PrivateRoute path="/showstory" component={ShowStory}/>*/}
                            {/*<PrivateRoute path="/main" component={FamilyPage}/>*/}
                            {/*<PrivateRoute path="/sandbox2" component={SandBox2}/>*/}
                            {/*<PrivateRoute path="/chooseuser" component={ChooseUser}/>*/}
                            <PrivateRoute path="/changeuser" component={ChooseUser}/>
                            <PrivateRoute path="/test" component={NewStoryDropImg}/>
                        </Switch>

                    </div>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
