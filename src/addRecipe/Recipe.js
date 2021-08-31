// Diet icon imports
import GlutenFreeIcon from "../assets/GlutenFree.png"
import kosherIcon from "../assets/kosher.png"
import NoFatIcon from "../assets/no-fat.png"
import SugarFreeIcon from "../assets/sugar-free.png"
import VeganIcon from "../assets/vegan (1).png"
import VegetarianIcon from "../assets/vegetarian.png"

export const filterOptions = [
    'Vegan',
    'Kosher',
    'GlutenFree',
    'Sugar Free',
    'Low Calories',
    'Vegetarian'];

export const categoryOption = [

    {
        "_id": 0,
        "name": "Dinner"
    },
    {
        "_id": 1,
        "name": "Deserts"
    },
    {
        "_id": 2,
        "name": "Drinks"
    },
    {
        "_id": 3,
        "name": "Fish"
    },
    {
        "_id": 4,
        "name": "Meat"
    },
    {
        "_id": 5,
        "name": "Pastry"
    },
    {
        "_id": 6,
        "name": "Pies"
    },
    {
        "_id": 7,
        "name": "Salads"
    },
    {
        "_id": 8,
        "name": "Side dish"
    },
    {
        "_id": 9,
        "name": "Soups"
    },
    {
        "_id": 10,
        "name": "Other"
    },

];

export const dietOption = [
    {
        "_id": 100,
        "name": "Gluten Free",
        "icon": VeganIcon
    },
    {
        "_id": 101,
        "name": "Kosher",
        "icon": kosherIcon
    },
    {
        "_id": 102,
        "name": "Low Calories",
        "icon": GlutenFreeIcon
    },
    {
        "_id": 103,
        "name": "Sugar Free",
        "icon": SugarFreeIcon
    },
    {
        "_id": 104,
        "name": "Vegan",
        "icon": NoFatIcon
    },
    {
        "_id": 105,
        "name": "Vegetarian",
        "icon": VegetarianIcon
    },
];

export const holidayOption = [
    'Passover',
    'Purim',
    'Rosh Hashana',
    'Shavuot'
];
export const AllFiltersOption = {
    filterOptions: [
        'Vegan',
        'Kosher',
        'GlutenFree',
        'Sugar Free',
        'Low Calories',
        'Vegetarian'],

    categoryOption: [
        'Salads',
        'Pies',
        'Fish',
        'Deserts',
        'Soup',
        'Other',
        'Meat',
        'Side dish',
        'Pastry',
        'Dinner',
        'Drinks'
    ],

    holidayOption: [
        'Passover',
        'Purim',
        'Rosh Hashana',
        'Shavuot'
    ],
}
export const getDietFilters = () => {
    return dietOption;
}
export const getFoodTypes = () => {
    return categoryOption;
}
export const getOnlyNameFiltersOption = () => {
    const dietOptionsArr = []
    dietOption.forEach(option => dietOptionsArr.push(option.name))
    return dietOptionsArr
}


export const getOnlyNameCategoryOption = () => {
    const categoryOptions = []
    categoryOption.forEach(option => categoryOptions.push(option.name))
    return categoryOptions
}

// }
const generateUniqueKey = () => {
    return "" + new Date().getTime()
}

export default class Recipe {

    constructor(name = "", author = "", serving = "", images = [], notes = "", tags = "",
                prepTime = "",
                ingredientsList = [{ingredient: "", amount: "", typeAmount: ""}], ovenHeat = "None",
                instructionDetails = [{step: ""}], storyContent = "",
                storyImages = [], category = "Other", filtersList = [], ingredientNameForFilter = [], uploadedBy = "",
                key = 0, comments = [], storyBrief = "",
    ) {
        this.name = name;
        this.author = author;
        this.serving = serving;
        this.images = images;
        this.notes = notes;
        this.tags = tags;
        this.prepTime = prepTime;
        this.IngredientsList = ingredientsList;
        this.ovenHeat = ovenHeat;
        this.instructionDetails = instructionDetails;
        this.category = category;
        this.filtersList = filtersList;
        this.ingredientNameForFilter = ingredientNameForFilter
        this.storyBrief = storyBrief;
        this.key = key;
        this.comments = comments;
        this.uploadedBy = uploadedBy;
        this.story = {
            content: storyContent,
            images: storyImages,
        };
        this.uniqueId = generateUniqueKey()
        this.tempStoryImages = [];

    }

    getServing() {
        let n = parseFloat(this.serving);
        n.toFixed(1);
        return n
    }

    setUniqueId() {
        this.uniqueId = generateUniqueKey()
    }

    setUploadedBy(userName) {
        this.uploadedBy = userName
    }

    getUploadedBy() {
        return this.uploadedBy
    }

    setStoryContent(text) {
        this.story.content = text;
    }

    getStoryContent() {
        return this.story.content;
    }

    setName(name) {
        this.name = name;
    }


    setAuthor(author) {
        this.author = author
    }

    setServing(serving) {
        this.serving = serving.toString();

    }

    setNotes(notes) {
        this.notes = notes;
    }

    setTags(tags) {
        this.tags = tags;
    }

    setIngredientsList(IngredientsList) {
        this.IngredientsList = IngredientsList;
    }

    setInstruction(stepsList) {
        this.instructionDetails = stepsList;
    }

    getInstruction() {
        return this.instructionDetails;
    }

    setOvenHeat(ovenHeat) {
        console.log("recipe", ovenHeat)
        this.ovenHeat = ovenHeat
    }

    getOvenHeat() {
        return this.ovenHeat
    }

    setPrepTime(prepTime) {
        this.prepTime = prepTime.toLowerCase();
    }


    setStoryImages(imagesArr) {
        this.story.images = imagesArr;
    }

    setMainImage(image) {
        this.images = image;
    }

    setCategory(category) {
        this.category = category;
    }

    setFilterList(filterArr) {
        this.filteresList = filterArr
    }


    setAnotherFilter(filterList) {
        this.filtersList = filterList;
        console.log("filterList: ", this.filtersList)
    }

    getFilters() {
        return this.filtersList;
    }


    getName() {
        return this.name;
    }

    getCategory() {
        return this.category;
    }

    getAuthor() {
        return this.author;
    }

    getMainImage() {
        return this.images[0];
    }

    recipeHasImage() {
        if (!this.images || this.images.length === 0) {
            return false
        }
        return true
    }

    getOvenHeatShowRecipe() {
        if (this.ovenHeat === "" || this.ovenHeat <= 100) {
            return "None"
        }
        return this.ovenHeat;
    }

    getFilterOption() {
        return filterOptions;
    }

    getCategoryOption() {
        return categoryOption;
    }


    getHoliday() {
        return this.holiday;
    }


    setHoliday(value) {
        this.holiday = value;
    };

    getIngredientsList() {
        return this.IngredientsList
    }

    setKey(key) {
        this.key = key;
    }

    addComment(author, date, content, imgUrl="") {
        this.comments.push({author: author, date: date, content: content, imgUrl: imgUrl});
        //TODO chang name of author to key
    }

    getIngredientsListMap() {
        const ingredient = [];
        for (const item of this.IngredientsList) {
            ingredient.push(item.amount + " " + item.typeAmount + " " + item.ingredient);
        }
        return ingredient
    }

    getStepsListMap() {
        const steps = []
        for (const step of this.instructionDetails) {
            steps.push(step.step);
        }
        return steps
    }

    setStoryBrief(storyBrief) {
        this.storyBrief = storyBrief;
    }
}


export const recipeConverter = {
    toFirestore: function (Recipe) {
        // console.log("recipePrint",Recipe)
        return {
            name: Recipe.name,
            author: Recipe.author,
            serving: Recipe.serving,
            notes: Recipe.notes,
            tags: Recipe.tags,
            prepTime: Recipe.prepTime,
            IngredientsList: Recipe.IngredientsList,
            OvenHeat: Recipe.ovenHeat,
            instructionDetails: Recipe.instructionDetails,
            images: Recipe.images,
            category: Recipe.category,
            filtersList: Recipe.filtersList,
            key: Recipe.key,
            comments: Recipe.comments,
            storyContent: Recipe.story.content,
            storyImages: Recipe.story.images,
            uploadedBy: Recipe.uploadedBy,
            storyBrief: Recipe.storyBrief,
        };
    },


    fromFirestore: function (recipe) {
        const ingredientNameForFilter = []
        for (const item of recipe.IngredientsList) {
            ingredientNameForFilter.push(item.name);
        }

        return new Recipe(recipe.name, recipe.author, recipe.serving, recipe.images, recipe.notes, recipe.tags,
            recipe.prepTime, recipe.IngredientsList, recipe.OvenHeat, recipe.instructionDetails,
            recipe.storyContent, recipe.storyImages, recipe.category,
            recipe.filtersList, ingredientNameForFilter, recipe.uploadedBy, recipe.key, recipe.comments, recipe.storyBrief);
    }

};

//
// this.name = recipe.name;
// this.author = recipe.author;
// this.serving = recipe.serving;
// this.images = recipe.images;
// this.notes = recipe.notes;
// this.tags = recipe.tags;
// this.prepTime = recipe.prepTime;
// this.IngredientsList = recipe.IngredientsList;
// this.OvenHeat = recipe.OvenHeat;
// this.StepDetails = recipe.StepDetails;
// this.story = {
//     content: "",
//     images: [],
// };
//
// const RecipesFilter = () => {
//     //food Type Filter
//     let tempList = AllRecipes;
//     let foodTypeList = getSelectedFoodType()
//     if (foodTypeList.length > 0) {
//         tempList = (tempList.filter((recipe) => {
//             foodTypeList.includes(recipe.getCategory())
//         }));
//     }
//
//     let dietFilter = getSelectedDietFilter()
// // no battery
//     if (dietFilter.length > 0) {
//         tempList.filter((recipe) => {
//             filterRecipeByDiet(recipe)
//         });
//     }
//
//     setCurRecipes(tempList);
// }