const { v4: uuidv4 } = require('uuid');

// Get API Key
const getKey = (req, res) => {
    console.log("Request received for API Key...");
    res.json({
        key: uuidv4(),
        message: "success"
    });
};

// Get Animals
const getAnimals = (req, res) => {
    const animals = [
        {
            name: "WEF",
            diet: "diet",
            image: "https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/master/w_1920,c_limit/shouts-animals-watch-baby-hemingway.jpg",
            lifespan: "lifespan",
            location: "Ethiopia",
            speed: { imperial: "imperial", metric: "high" },
            taxonomy: { family: "bird", kingdom: "sky", order: "first" }
        },
        {
            name: "MIDAKUA",
            diet: "diet",
            image: "https://cdn.britannica.com/94/494-004-BAA096C7/Fallow-deer.jpg",
            lifespan: "lifespan",
            location: "Ethiopia",
            speed: { imperial: "imperial", metric: "high" },
            taxonomy: { family: "bird", kingdom: "sky", order: "first" }
        }
    ];
    res.json(animals);
};
module.exports = { getKey, getAnimals };