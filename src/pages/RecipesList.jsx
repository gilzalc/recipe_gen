
// To use this:
//    <RecipeList recipes={<somelistofrecipes>} />
// To get a filtered version of the list:
//    <RecipeList recipes={<somelistofrecipes>.filter((recipe) => recipe.<somekey> == <thevaluewewanttofilterby>)} />

// const RecipeList = (props) => {
//     const recipes = props.recipes;
//     return (
//         <div className="recipe-list">
//             {recipes.map((recipe) => (
//                 <div className="recipe-preview" key={recipe.id}>
//                     <h2> {recipe.title}</h2>
//
//                 </div>
//             ))}
//
//         </div>
//     );
// }
//
// export default RecipeList;