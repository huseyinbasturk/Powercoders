const recipeCard = {
    title : 'Soup',
    serving : '2',
    ingredients :['cinnamon','cumin','cocoa']
    };


//console.log(recipeCard);

console.log(recipeCard.title);
console.log(Object.keys(recipeCard)[1] + ": " + recipeCard[Object.keys(recipeCard)[1]]);
console.log(Object.keys(recipeCard)[2] + ": " + recipeCard[Object.keys(recipeCard)[2]]);

//console.log("Serves: " + recipeCard.serving);

function recipeCreator(title, serving, ingredients) {
    this.title = title;
    this.serving = serving;
    this.ingredients = ingredients;
    
}

let recipe1 = new recipeCreator('Cake','4',['Sugar', 'Milk','Chocolate']);
printRecipeCard(recipe1);
function printRecipeCard(recipe) {
    console.log(recipe.title);
    console.log(Object.keys(recipe)[1] + ": " + recipe[Object.keys(recipe)[1]]);
    console.log(Object.keys(recipe)[2] + ": " + recipe[Object.keys(recipe)[2]]);
}
