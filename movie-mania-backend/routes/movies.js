const router = require('express').Router();

router.get('/', (req, res) => {
    const movies = [
        {
            id: 0,
            name: "Movie One",
            genre: "Comedy",
            description: "This is the description of Movie One",
            pictureSource: "",
        },
        {
            id: 1,
            name: "Movie Two",
            genre: "Action",
            description: "This is the description of Movie Two",
            pictureSource: "",
        },
    ];
    console.log(movies);
    res.send(movies);
})

module.exports = router;