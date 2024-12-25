const chests = [
    {
        id: "chest_color_crests_red_common_enhanced_superior", 
        name: "Chest with Red Crests", 
        img: "/shared/chests/icon_chest_teslacrests_3_red.webp",
        items: [
            {
                resource: "red_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "red_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "red_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_color_crests_blue_common_enhanced_superior", 
        name: "Chest with Blue Crests", 
        img: "/shared/chests/icon_chest_teslacrests_3_blue.webp",
        items: [
            {
                resource: "blue_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "blue_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "blue_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_color_crests_yellow_common_enhanced_superior", 
        name: "Chest with Yellow Crests", 
        img: "/shared/chests/icon_chest_teslacrests_3_yellow.webp",
        items: [
            {
                resource: "yellow_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "yellow_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "yellow_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_color_crests_purple_common_enhanced_superior", 
        name: "Chest with Purple Crests", 
        img: "/shared/chests/icon_chest_teslacrests_3_purple.webp",
        items: [
            {
                resource: "purple_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "purple_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "purple_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_color_crests_green_common_enhanced_superior", 
        name: "Chest with Green Crests", 
        img: "/shared/chests/icon_chest_teslacrests_3_green.webp",
        items: [
            {
                resource: "green_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "green_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "green_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_ascension", //these ascension chests are not used currently. In the future, I should replace the static values in specific customizations by these chests
        name: "Chest with Uncommon Ascension Materials", 
        img: "/shared/chests/icon_chest_ascension.webp",
        items: [
            {
                resource: "shadow_dial",
                amount: 1,
            },
            {
                resource: "fragrant_potpourri",
                amount: 1,
            },
            {
                resource: "war_horn",
                amount: 1,
            },
        ]
    },
    {
        id: "chest_ascension_2", 
        name: "Chest with Rare Ascension Materials", 
        img: "/shared/chests/icon_chest_ascension_2.webp",
        items: [
            {
                resource: "charta_terrestre",
                amount: 1,
            },
            {
                resource: "crested_guidon",
                amount: 1,
            },
            {
                resource: "herbal_poultice",
                amount: 1,
            },
        ],
    },
    {
        id: "chest_ascension_3", 
        name: "Chest with Legendary Ascension Materials", 
        img: "/shared/chests/icon_chest_ascension_3.webp",
        items: [
            {
                resource: "travelers_compass",
                amount: 1,
            },
            {
                resource: "hortus_sanitatis",
                amount: 1,
            },
            {
                resource: "gilded_pennant",
                amount: 1,
            },
        ]
    },
    {
        id: "chest_teslacrests_common", 
        name: "Chest with Common Tesla Crests", 
        img: "/shared/chests/icon_chest_teslacrests_common.webp",
        items: [
            {
                resource: "green_crest_common",
                amount: 1,
                percentage: 20
            },
            {
                resource: "yellow_crest_common",
                amount: 1,
                percentage: 20
            },
            {
                resource: "red_crest_common",
                amount: 1,
                percentage: 20
            },
            {
                resource: "purple_crest_common",
                amount: 1,
                percentage: 20
            },
            {
                resource: "blue_crest_common",
                amount: 1,
                percentage: 20
            },
        ]
    },
    {
        id: "chest_teslacrests_enhanced", 
        name: "Chest with Enhanced Tesla Crests", 
        img: "/shared/chests/icon_chest_teslacrests_enhanced.webp",
        items: [
            {
                resource: "green_crest_enhanced",
                amount: 1,
                percentage: 20
            },
            {
                resource: "yellow_crest_enhanced",
                amount: 1,
                percentage: 20
            },
            {
                resource: "red_crest_enhanced",
                amount: 1,
                percentage: 20
            },
            {
                resource: "purple_crest_enhanced",
                amount: 1,
                percentage: 20
            },
            {
                resource: "blue_crest_enhanced",
                amount: 1,
                percentage: 20
            },
        ]
    },
    {
        id: "chest_teslacrests_superior", 
        name: "Chest with Superior Tesla Crests", 
        img: "/shared/chests/icon_chest_teslacrests_superior.webp",
        items: [
            {
                resource: "green_crest_superior",
                amount: 1,
                percentage: 20
            },
            {
                resource: "yellow_crest_superior",
                amount: 1,
                percentage: 20
            },
            {
                resource: "red_crest_superior",
                amount: 1,
                percentage: 20
            },
            {
                resource: "purple_crest_superior",
                amount: 1,
                percentage: 20
            },
            {
                resource: "blue_crest_superior",
                amount: 1,
                percentage: 20
            },
        ]
    },
]

export default chests;