
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import Paper from "@material-ui/core/Paper";
// import React, {useState} from "react";
// import {makeStyles} from "@material-ui/core/styles";
// import clsx from "clsx";
// import PropTypes from "prop-types";
// import {withStyles} from "@material-ui/core";
// import StepConnector from "@material-ui/core/StepConnector";
// const useStyles = makeStyles(theme => ({
//
//     stepper: {
//         background: "transparent",
//
//         borderStyle: "none"
//     },
// }));
//
// function ColorlibStepIcon(props) {
//     const classes = useColorlibStepIconStyles();
//     const {active, completed} = props;
//
//     const icons = {
//         1: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
//             <path d="M0 0h24v24H0V0z" fill="none"/>
//             <path
//                 d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/>
//         </svg>
//         ,
//         2: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-egg"
//                 viewBox="0 0 16 16">
//             <path
//                 d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1c.428 0 .956.206 1.554.716.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5zm0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6z"/>
//         </svg>
//         ,
//         3: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                 className="bi bi-egg-fried" viewBox="0 0 16 16">
//             <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
//             <path
//                 d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
//         </svg>
//     };
//
//
//     return (
//         <div
//             className={clsx(classes.root, {
//                 [classes.active]: active,
//                 [classes.completed]: completed
//             })}
//         >
//             {icons[String(props.icon)]}
//         </div>
//     );
// }
//
// ColorlibStepIcon.propTypes = {
//     /**
//      * Whether this step is active.
//      */
//     active: PropTypes.bool,
//     /**
//      * Mark the step as completed. Is passed to child components.
//      */
//     completed: PropTypes.bool,
//     /**
//      * The label displayed in the step icon.
//      */
//     icon: PropTypes.node
// };
//
//
// const ColorlibConnector = withStyles({
//     alternativeLabel: {
//         top: 22
//     },
//     active: {
//         "& $line": {
//             backgroundImage:
//                 "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
//         }
//     },
//     completed: {
//         "& $line": {
//             backgroundImage:
//                 "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
//         }
//     },
//     line: {
//         height: 3,
//         border: 0,
//         backgroundColor: "#ccc",
//         borderRadius: 1
//     }
// })(StepConnector);
//
//
// export default function StepperComp(){
//     const steps = ["Recipe's details", "Ingredients", " Instructions"];
//     const [activeStep, setActiveStep] = useState(0);
//
//     const classes = useStyles();
//     return(
//
//
//         <Stepper
//             className={classes.stepper}
//             alternativeLabel
//             activeStep={activeStep}
//             connector={<ColorlibConnector/>}
//         >
//             {steps.map(label => (
//                 <Step key={label}>
//                     <StepLabel StepIconComponent={ColorlibStepIcon}>
//                         {label}
//                     </StepLabel>
//                 </Step>
//             ))}
//         </Stepper>
//     );
// }