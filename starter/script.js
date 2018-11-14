// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([ 523, 883, 432, 974 ]);
//     }, 1500);
// });

// const getRecipe = (recID) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             (ID) => {
//                 const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
//                 resolve(`${ID}: ${recipe.title}`);
//             },
//             1500,
//             recID
//         );
//     });
// };

// const getRelated = (publisher) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             (pub) => {
//                 const recipe = { title: 'Italian Pizza', publisher: 'Jonas' };
//                 resolve(`${pub}: ${recipe.title}`);
//             },
//             1500,
//             publisher
//         );
//     });
// };

// getIDs
//     .then((IDs) => {
//         console.log(IDs);
//         return getRecipe(IDs[2]);
//     })
//     .then((recipe) => {
//         console.log(recipe);
//         return getRelated('Jonas');
//     })
//     .then((recipe) => {
//         console.log(recipe);
//     })
//     .catch((error) => {
//         console.log('Error!!!');
//     });

// async function getRecipesAW () {
//     const IDs = await getIDs;
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);
//     const related = await getRelated('Jonas');
//     console.log(related);

//     return recipe;
// }
// getRecipesAW().then((recipe) => console.log(`${recipe} is the best ever`));
function getWeather (woeid) {
    window
        // .fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
        .fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then((result) => {
            // console.log(result);
            return result.json();
        })
        .then((data) => {
            // console.log(data);
            const today = data.consolidated_weather[0];
            console.log(
                `Temperatures today in ${data.title} will stay between ${today.min_temp} and ${today.max_temp}`
            );
        })
        .catch((error) => console.log(error));
}
// getWeather(2487956);
// getWeather(44418);

async function getWeatherAW (woeid) {
    try {
        const result = await window.fetch(
            `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
        );
        const data = await result.json();
        // console.log(data);
        const tomorrow = data.consolidated_weather[1];
        console.log(
            `Temperature tomorrow in ${data.title} will stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`
        );
        return data;
    } catch (error) {
        window.alert(error);
    }
}
getWeatherAW(2487956);
let dataLondon;
getWeatherAW(44418).then((data) => {
    dataLondon = data;
    console.log(dataLondon);
});
