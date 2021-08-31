export default class TestRecipe{
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
};

export const recipeConverter = {
    toFirestore: function (recipe) {
        return {
            name: recipe.name,
            author: recipe.author
        };

    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options)
        return new TestRecipe(data.name, data.author);
    }

};

