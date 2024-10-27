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
            name: "Chilada baboon",
            diet: "diet",
            image: "https://www.oliberte.com/pages/wp-content/uploads/2017/04/Gelada-Pavian-1024x768.jpg",
            lifespan: "lifespan",
            location: "Ethiopia",
            speed: { imperial: "imperial", metric: "high" },
            taxonomy: { family: "mamals", kingdom: "mountains", order: "second" }
        },
        ,
        {
            name: "Chilada baboon",
            diet: "diet",
            image: "https://www.oliberte.com/pages/wp-content/uploads/2017/04/Gelada-Pavian-1024x768.jpg",
            lifespan: "lifespan",
            location: "Ethiopia",
            speed: { imperial: "imperial", metric: "high" },
            taxonomy: { family: "mamals", kingdom: "mountains", order: "second" }
        },
        {
            name: "Red Wolf",
            diet: "diet",
            image: "https://www.amazingethiopia.com/media/k2/items/cache/47e29f9fe96a1771642fb05ac8a8fd00_XL.jpg",
            lifespan: "lifespan",
            location: "Ethiopia",
            speed: { imperial: "imperial", metric: "high" },
            taxonomy: { family: "bird", kingdom: "sky", order: "first" }
        }
    ];
    res.json(animals);
};
module.exports = { getKey, getAnimals };