// import firebase from "firebase";
// import {useEffect, useState} from "react";
//
// function resolveAfter2Seconds() {
//
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }
//
//
// const UploadFiles = async (props) => {
//
//     const tempRecipe = props.tempRecipe
//     const files = tempRecipe.tempStoryImages;
//     const [urlArr, setUrlArr] = useState(tempRecipe.story.images)
//     useEffect(() => {
//         tempRecipe.story.images = urlArr
//         console.log("urlArr", urlArr)
//     }, [urlArr])
//
//
//     if (!files) return;
//     for (let i = 0; i < files.length; i++) {
//         let file = files[i];
//         let fileName = file.name;
//         const storageRef = await firebase.storage().ref("images");
//         const fileRef = await storageRef.child(fileName)
//         await fileRef.put(file).on(
//             "state_changed",
//             (snapshot) => {
//             },
//             error => {
//                 console.log(error);
//             },
//             () => {
//                 storageRef.child(fileName).getDownloadURL().then(url => {
//                     setUrlArr([...urlArr, url]);
//                 });
//             }
//         );
//     }
//
// }
// export default UploadFiles()