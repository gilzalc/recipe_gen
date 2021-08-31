import IconButton from "@material-ui/core/IconButton";

function CopyShareLink(props) {
    return (<span>
            <IconButton color="primary" aria-label="upload picture"
                        component="span" onClick={()=> {navigator.clipboard.writeText(props.shareValue)}}>
                Copy Link
            </IconButton>

        </span>
    )
}

export default CopyShareLink