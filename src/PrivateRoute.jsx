import React from "react"
import {Route, Redirect} from "react-router-dom"
import {useAuth} from "./contexts/AuthContext";

export default function PrivateRoute({component: Component, ...rest}) {
    const {currentUser} = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props}/> : <Redirect to="/"/>
            }}>

        </Route>
    )
}

// export function PrivateRouteForAddRecipe({component: Component, ...rest}) {
//     const {currentUser} = useAuth();
//     let editMode = rest.editMode
//     console.log(rest.editMode, "rest")
//     return (
//         <Route
//             {...rest}
//             render={props => {
//                 return currentUser ? <Component editMode ={editMode} /> : <Redirect to="/"/>
//             }}>
//
//         </Route>
//     )
// }

