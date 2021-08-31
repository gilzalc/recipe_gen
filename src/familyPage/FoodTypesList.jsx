// const FIRST_DISH = "Salads"
// const SECOND_DISH = "Pies"
// const THIRD_DISH = "Fish"
// const FOURTH_DISH = "Holidays"
// const FIFTH_DISH = "Deserts"
// const SIXTH_DISH = "Vegan"
// const SEVENTH_DISH = "Soup"
//
// function FoodTypesList() {
//     return (
//         <ul className="list-group" style={{marginLeft: "1px"}}>
//             {/*Item lists*/}
//             {/*current for now- add events*/}
//             <CurFoodType title={FIRST_DISH} num={14}/>
//             <FoodType title={SECOND_DISH} num={3}/>
//             <FoodType title={THIRD_DISH} num={4}/>
//             <FoodType title={FOURTH_DISH} num={7}/>
//             <FoodType title={FIFTH_DISH} num={2}/>
//             <FoodType title={SIXTH_DISH} num={8}/>
//             <FoodType title={SEVENTH_DISH} num={12}/>
//         </ul>
//     )
// }
//
// export default FoodTypesList;
//
//
// function FoodType(props) {
//     return (
//         <li className="list-group-item d-flex justify-content-between align-items-center"
//             style={{border: "1px solid black"}}>
//             {props.title}&nbsp;&nbsp;&nbsp;
//             <span className="badge badge-primary badge-pill"
//                   style={{background: "#269026"}}>{props.num}</span>
//         </li>
//     )
// }
//
// // same with bold
// function CurFoodType(props) {
//     return (
//         <li className="list-group-item d-flex justify-content-between align-items-center"
//             style={{border: "2.4px solid black"}}>
//             <em><b>{props.title}&nbsp;&nbsp;&nbsp;</b></em>
//             <span className="badge badge-primary badge-pill"
//                   style={{background: "#269026"}}>{props.num}</span>
//         </li>
//     )
// }
