const dishes = [
    {
        id: 1,
        name: 'Greek salad',
        price: 12.99,
        getImageSrc: () => require("./images/greeksalad.jpg"),
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
        id: 2,
        name: 'Bruschetta',
        price: 5.99,
        getImageSrc: () => require("./images/bruschetta.jpg"),
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt, olive oil and topped with fresh tomatoes and basil.  ",
    },
    {
        id: 3,
        name: 'Lemon dessert',
        price: 4.99,
        getImageSrc: () => require("./images/dessert.jpg"),
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. ",
    },
];

export default dishes;