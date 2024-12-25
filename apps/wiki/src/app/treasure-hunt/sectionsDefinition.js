const layoutTreasureHunt = {
    page: "treasure-hunt",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: "/treasure-hunt/intro/icon_ath_attempt.webp",
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "encounters",
            name: "Encounters",
            img: "https://i.ibb.co/FDghJ4Y/Treasure-Hunt-Icon.png",
            show: false,
            dynamicSegments: [],
        },
        {
            id: 3,
            url: "checkpoints",
            name: "Checkpoints",
            img: "/treasure-hunt/checkpoints/icon_mystery_chest_gold.webp",
            show: true,
            dynamicSegments: [],
        },
        {
            id: 4,
            url: "customizations",
            name: "Customizations",
            img: "/events/customizations/icon_selection_kit_customizations_generic.webp",
            show: true,
            dynamicSegments: [],
        },
    ]
}

export default layoutTreasureHunt;