import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {Image} from "react-bootstrap";
import {Grid} from "@material-ui/core";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Fab from "@material-ui/core/Fab";
import WhatsAppShare from "./WhatsAppShare";
import FaceBookShare from "./FaceBookShare";
import {useAuth} from "../contexts/AuthContext";
import CopyShareLink from "./CopyShareLink";


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function StoryDialog(props) {
    const [open, setOpen] = React.useState(false);
    const {groupcode} = useAuth();
    const recipeShareLink = "https://grandma-cooked-oatmeal.web.app/shared-recipe/" + groupcode + "/" + props.id;

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <ShareOutlinedIcon style={{fill:"#3b9ce5"}} fill={"green"} onClick={handleClickOpen}/>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Share the recipe
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container xs={12} spacing={30}>
                        <Grid item xs={4}>
                            <Typography gutterBottom style={{fontSize: "2em"}}>
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}/>
                        <Grid item xs={4}>
                            <Image className="img-thumbnail"
                                   style={{maxHeight: "250px", alignContent: "center"}}
                                   src={props.img}
                                   alt="family's img"/>
                        </Grid>

                    </Grid>
                    {/*<Typography style={{padding: "12px"}} gutterBottom>*/}
                    {/*    {props.author || "no author"}*/}
                    {/*</Typography>*/}
                    <br/><br/>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        {/*<WhatsAppIcon/>*/}
                        <WhatsAppShare shareValue={recipeShareLink} message="Check out my recipe! "/>
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        {/*<FacebookIcon/>*/}
                        <FaceBookShare shareValue={recipeShareLink} message="Check out my recipe! "/>
                    </IconButton>

                    <CopyShareLink shareValue={recipeShareLink}/>
                    <br/>

                </DialogContent>
                {/*<DialogActions>*/}
                {/*    /!*<Button autoFocus onClick={handleClose} color="primary">*!/*/}
                {/*    /!*    Back*!/*/}
                {/*    /!*</Button>*!/*/}
                {/*</DialogActions>*/}
            </Dialog>
        </div>
    );
}
