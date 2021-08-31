import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import './FamilyImg.css'
import Button from "@material-ui/core/Button";
import {useAuth} from "../contexts/AuthContext";
import firebase from "firebase";

const useStyles = makeStyles({
    input: {
        display: 'none',
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

})


export default function FamilyImg() {
    const {changeFamilyImg, familyImgUrl} = useAuth()

    const [imageUrl, setImageUrl] = useState(familyImgUrl)
    const [file, setFile] = useState()
    const classes = useStyles();


    useEffect(() => {
        changeFamilyImg(imageUrl);
    }, [imageUrl])

    const uploadFamilyImg = async (e) => {
        console.log(imageUrl)
        let target = e.target.files[0];
        if (!target) return;
        const storageRef = await firebase.storage().ref("images");
        let fileName = target.name;
        const fileRef = await storageRef.child(fileName)
        // const response = await fetch(uri)
        // const blob = await response.blob()
        await fileRef.put(target).on(
            "state_changed",
            (snapshot) => {
            },
            error => {
                console.log(error);
            },
            () => {
                storageRef.child(fileName)
                    .getDownloadURL()
                    .then(async (url) => {
                        setImageUrl(url);
                    });
            }
        );
    };


    return (
        <div className='image-div'>
            <Button >

                <input accept="image/*" className={classes.input} id="family-img" type="file" onChange={uploadFamilyImg}
                />
                <label htmlFor="family-img">

                    {<img style={{cursor:"pointer"}} className={classes.FamImgStyle}
                          src={imageUrl || "https://images.unsplash.com/photo-1606787842514-a7998e6bee38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhbWlseXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}/>}
                    {/*<img className="hidden_img" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698394-icon-130-cloud-upload-512.png" width="50" height="50"/>*/}
                    {/*<img className="hidden_img" src="https://www.vhv.rs/dpng/d/213-2133730_add-image-icon-png-camera-transparent-png.png" width="75" height="75"/>*/}
                    {/*<img className="hidden_img" src="https://cdn1.iconfinder.com/data/icons/strokeicon-volume-3/512/0-2-30-512.png" width="75" height="75"/>*/}
                    <img  style={{cursor:"pointer"}} className="hidden_img" src="https://static.thenounproject.com/png/586527-200.png" width="75"
                         height="75" />


                    {/*<Image*/}
                    {/*    onClick={()=>{*/}
                    {/*        console.log("blbalba")}*/}
                    {/*    }*/}
                    {/*    className={classes.FamImgStyle}*/}
                    {/*    src={"https://images.unsplash.com/photo-1606787842514-a7998e6bee38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhbWlseXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}*/}
                    {/*    alt="family's img"*/}
                    {/*    />*/}
                </label>
            </Button>

        </div>


    )
}
