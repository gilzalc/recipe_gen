// import React, {useState, useRef, Component} from "react";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import "./TestCSS.css";
// import {db} from "../firebase"
// import  {recipe} from "./Recipe"
//
// export default function TestAddRecipeToFB () {
//     const authorRef = useRef();
//     const nameRef = useRef();
//
//     const handleClick = (ev) => {
//         ev.preventDefault();
//
//         recipe.name = nameRef.current.value;
//         recipe.author = authorRef.current.value;
//         db.collection('Recipes').add({
//            "name": recipe.name,
//             "author": recipe.author,
//         })
//         console.log(nameRef.current.value);
//         console.log(authorRef.current.value);
//         console.log("2");
//     };
//
//         return (
//             <div>
//                 <TextField
//                     inputRef={nameRef}
//                 />
//                 <TextField
//                     inputRef={authorRef}
//                 />
//                 <Button onClick={handleClick}>update FB</Button>
//             </div>
//         );
//
// }