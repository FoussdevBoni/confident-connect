const onboarding = [
    {
        id: "1",
        title: "Conversations Réelles",
        description:
            
            `Améliorez vos compétences en communication quotidienne grâce à des simulations interactives. 
            `,
        image: require("../assets/images/onboarding/Chatcuate.png"),
    },
    {
        id: "2",
        title: "Rencontres et Relations Amoureuses  ",
        description:
             `  Pratiquez des scénarios de rencontre et  de relation pour gagner en confiance et en aisance émotionnelle.
             `,
        image: require("../assets/images/onboarding/Chatpana.png"),
    },
    {
        id: "3",
        title: "Situations Professionnelles ",
        description:
            `Entraînez-vous pour des entretiens d'embauche, des négociations et des présentations en public.   
            `,
        image: require("../assets/images/onboarding/Conferencerafiki.png"),
    },
     {
        id: "4",
        title: "Développement Personne",
        description:
            ` Participez à des ateliers de développement personnel pour renforcer votre confiance  en vous et vos compétences. .   
            `,
        image: require("../assets/images/onboarding/Stresspana.png"),
    },
    {
        id: "5",
        title: "Gestion de la Dépression et du Burnout",
        description:
            `  Utilisez des outils et des programmes spécifiques pour gérer dépression et le burnout
            `,
        image: require("../assets/images/onboarding/Voicechatbro.png"),
    },
];

const tabs = [
    {
        id: "1",
        screen: "Acceuil",
        icon: require("../assets/icons/home.png"),
    },
    {
        id: "2",
        screen: "Historique",
        icon: require("../assets/icons/bag.png"),
    },
    {
        id: "3",
        screen: "Progession",
        icon: require("../assets/icons/heart.png"),
    },
    {
        id: "4",
        screen: "Profil",
        icon: require("../assets/icons/user.png"),
    },
];

const category = [
    {
        id: "1",
        name: "cake",
        image: require("../assets/icons/cake.png"),
    },
    {
        id: "2",
        name: "food",
        image: require("../assets/icons/food.png"),
    },
    {
        id: "3",
        name: "drinks",
        image: require("../assets/icons/drinks.png"),
    },
    {
        id: "4",
        name: "snacks",
        image: require("../assets/icons/snacks.png"),
    },
    {
        id: "5",
        name: "cake",
        image: require("../assets/icons/cake.png"),
    },
    {
        id: "6",
        name: "food",
        image: require("../assets/icons/food.png"),
    },
];

const history = [
    {
        id: "1",
        name: "Filada Family bar",
        image: require("../assets/images/restaurant.png"),
        date: "24 Jun, 12:30",
        quantity: "3",
        price: "15.30",
        cancel: true,
        upcoming: true,
        completed: true,
    },
    {
        id: "2",
        name: "National rest",
        image: require("../assets/images/restaurant.png"),
        date: "24 Jun, 12:30",
        quantity: "3",
        price: "29.30",
        cancel: true,
        upcoming: true,
        completed: false,
    },
    {
        id: "3",
        name: "Rolls & rolls",
        image: require("../assets/images/restaurant.png"),
        date: "24 Jun, 12:30",
        quantity: "3",
        price: "45.30",
        cancel: true,
        upcoming: false,
        completed: false,
    },
    {
        id: "4",
        name: "Chiken taste",
        image: require("../assets/images/restaurant.png"),
        date: "24 Jun, 12:30",
        quantity: "3",
        price: "18.30",
        cancel: true,
        upcoming: false,
        completed: true,
    },
    {
        id: "5",
        name: "Croissant cafe",
        image: require("../assets/images/restaurant.png"),
        date: "24 Jun, 12:30",
        quantity: "3",
        price: "22.30",
        cancel: true,
        upcoming: false,
        completed: false,
    },
];

const favorite = [
    {
        id: "1",
        name: "Sea Food With Cury",
        description:
            "Add the remaining ingredients and toss to coat. Serve. Notes. Note: Kani Salad is best served fresh. Due to the water content from cucumbers",
        image: require("../assets/images/favorite/favorite-01.png"),
        rating: 4.9,
        recommended: true,
        ingredients: "Sells food, either fresh, specie, chili",
        price: "20.00",
    },
    {
        id: "2",
        name: "Sea Food With Cury",
        description:
            "Add the remaining ingredients and toss to coat. Serve. Notes. Note: Kani Salad is best served fresh. Due to the water content from cucumbers",
        image: require("../assets/images/favorite/favorite-02.png"),
        rating: 4.9,
        recommended: true,
        ingredients: "Sells food, either fresh, specie, chili",
        price: "20.00",
    },
    {
        id: "3",
        name: "Sea Food With Cury",
        description:
            "Add the remaining ingredients and toss to coat. Serve. Notes. Note: Kani Salad is best served fresh. Due to the water content from cucumbers",
        image: require("../assets/images/favorite/favorite-03.png"),
        rating: 4.9,
        recommended: true,
        ingredients: "Sells food, either fresh, specie, chili",
        price: "20.00",
    },
];

const promocodes = [
    {
        id: "1",
        image: require("../assets/images/promocodes/promocode-01.png"),
        name: "Mcdonalds",
        discount: "50% off",
        validDate: "Valid until June 30, 2021",
    },
    {
        id: "2",
        image: require("../assets/images/promocodes/promocode-02.png"),
        name: "Burger King",
        discount: "30% off",
        validDate: "Valid until June 30, 2021",
    },
    {
        id: "3",
        image: require("../assets/images/promocodes/promocode-03.png"),
        name: "Domino’s Pizza",
        discount: "50% off",
        validDate: "Valid until June 30, 2021",
    },
    {
        id: "4",
        image: require("../assets/images/promocodes/promocode-04.png"),
        name: "KFC",
        discount: "25% off",
        validDate: "Valid until June 30, 2019",
    },
];

export { onboarding, tabs, category, history, favorite, promocodes };
