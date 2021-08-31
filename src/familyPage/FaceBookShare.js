import {FacebookIcon, FacebookShareButton} from "react-share";

function FaceBookShare(props) {
    return (<span>
            <FacebookShareButton title={props.message}
                                 url={props.shareValue}
                                 quote="Check out my recipe!"
            >

                <FacebookIcon size={40} round/>
            </FacebookShareButton>
        </span>
    )
}

export default FaceBookShare
