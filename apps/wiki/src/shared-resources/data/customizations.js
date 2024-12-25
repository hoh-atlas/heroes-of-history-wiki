const customizations = [
    {
        id: "customization_ath_voodoo_head", 
        name: "Voodoo Head", 
        img: "/shared/customizations/ath_voodoo_head.webp", 
        production: {
            resource: "coins",
            time: "1d",
        },
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Little Culture Site"
    },
    {
        id: "customization_ath_sugarcane_distillery", 
        name: "Sugarcane Distillery", 
        img: "/shared/customizations/ath_sugarcane_distillery.webp", 
        production: {
            resource: "food",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Rural Farm"
    },
    {
        id: "customization_ath_pirate_den", 
        name: "Pirate Den", 
        img: "/shared/customizations/ath_pirate_den.webp", 
        production: {
            resource: "coins",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Small Home"
    },
    {
        id: "customization_ath_belltower_cottage", 
        name: "Belltower Cottage", 
        img: "/shared/customizations/ath_belltower_cottage.webp", 
        production: {
            resource: "goods",
            time: "1d",
            amount: 150
        },
        duration: "7d",
        applyTo: "Medium Home"
    },
    {
        id: "customization_ath_the_scallywags_shanty", 
        name: "The Scallywag's Shanty", 
        img: "/shared/customizations/ath_the_scallywags_shanty.webp", 
        production: {
            resource: "food",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Domestic Farm"
    },
    {
        id: "customization_ath_coconut_tree", 
        name: "Coconut Tree", 
        img: "/shared/customizations/ath_coconut_tree.webp", 
        production: {
            resource: "food",
            time: "1d",
        },
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Little Culture Site"
    },
    {
        id: "customization_ath_hammock_trees", 
        name: "Hammock Trees", 
        img: "/shared/customizations/ath_hammock_trees.webp",
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Compact Culture Site"
    },
    {
        id: "customization_ath_robber_crab", 
        name: "Robber Crab", 
        img: "/shared/customizations/ath_robber_crab.webp",
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Moderate Culture Site"
    },
    {
        id: "customization_ath_skull_home", 
        name: "Skull Home", 
        img: "/shared/customizations/ath_skull_home.webp", 
        production: {
            resource: "coins",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Small Home"
    },
    {
        id: "customization_ath_tropical_fruit_farm", 
        name: "Tropical Fruit Farm", 
        img: "/shared/customizations/ath_tropical_fruit_farm.webp", 
        production: {
            resource: "research_point",
            time: "1d",
            amount: 1
        },
        duration: "7d",
        applyTo: "Rural Farm"
    },
    {
        id: "customization_ath_crows_inn", 
        name: "Crow's Inn", 
        img: "/shared/customizations/ath_crows_inn.webp",
        boost: {
            type: "food_bonus",
            amount: "5%"
        },
        duration: "7d",
        applyTo: "Domestic Farm"
    },
    {
        id: "customization_ath_jolly_roger", 
        name: "Jolly Roger", 
        img: "/shared/customizations/ath_jolly_roger.webp", 
        production: {
            resource: "goods",
            time: "1d",
            amount: 105
        },
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Little Culture Site"
    },
    {
        id: "customization_ath_long_nine", 
        name: "Long Nine", 
        img: "/shared/customizations/ath_long_nine.webp",
        production: {
            resource: "goods",
            time: "1d",
            amount: 105
        },
        duration: "7d",
        applyTo: "Compact Culture Site"
    },
    {
        id: "customization_ath_treasure_trove", 
        name: "Treasure Trove", 
        img: "/shared/customizations/ath_treasure_trove.webp",
        boost: {
            type: "goods_bonus",
            amount: "5%"
        },
        duration: "7d",
        applyTo: "Compact Culture Site"
    },
    {
        id: "customization_ath_sparkling_fortune", 
        name: "Sparkling Fortune", 
        img: "/shared/customizations/ath_sparkling_fortune.webp",
        boost: {
            type: "coins_bonus",
            amount: "5%"
        },
        duration: "7d",
        applyTo: "Moderate Culture Site"
    },
    {
        id: "customization_world_fair_2024_singularity_movement", 
        name: "Singularity Movement", 
        img: "/shared/customizations/world_fair_2024_singularity_movement.webp",
        production: {
            resource: "antimatter_legendary_part",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Domestic Farm"
    },
    {
        id: "customization_world_fair_2024_tesla_coil", 
        name: "Tesla Coil", 
        img: "/shared/customizations/world_fair_2024_tesla_coil.webp",
        production: {
            resources: [
                "red_crest_common",
                "blue_crest_common",
                "green_crest_common",
                "yellow_crest_common",
                "purple_crest_common",
            ],
            time: "1d",
            amount: "2"
        },
        duration: "20d",
        applyTo: "Small Home"
    },
    {
        id: "customization_world_fair_2024_void_reactor", 
        name: "Void Reactor", 
        img: "/shared/customizations/world_fair_2024_void_reactor.webp",
        production: {
            resource: "antimatter_common_part",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Medium Home"
    },
    {
        id: "customization_world_fair_2024_heritage_exhibition", 
        name: "Heritage Exhibition", 
        img: "/shared/customizations/world_fair_2024_heritage_exhibition.webp",
        production: {
            resources: [
                {
                    resource: "war_horn",
                    percentage: 33
                },
                {
                    resource: "shadow_dial",
                    percentage: 33
                },
                {
                    resource: "fragrant_potpourri",
                    percentage: 33
                }
            ],
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Rural Farm"
    },
    {
        id: "customization_world_fair_2024_ticket_booth", 
        name: "Ticket Booth", 
        img: "/shared/customizations/world_fair_2024_ticket_booth.webp",
        production: {
            resource: "victory_ticket",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Moderate Culture Site"
    },
    {
        id: "customization_winter_event_2024_winter_home", 
        name: "Winter Home", 
        img: "/shared/customizations/winter_event_2024_winter_home_2.webp",
        production: {
            resource: "antimatter_common_part",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Small Home"
    },
    {
        id: "customization_winter_event_2024_candy_store", 
        name: "Candy Store", 
        img: "/shared/customizations/winter_event_2024_candy_store.webp",
        production: {
            resource: "antimatter_common_part",
            time: "1d",
            amount: "3"
        },
        duration: "20d",
        applyTo: "Medium Home"
    },
    {
        id: "customization_winter_event_2024_frozen_pond", 
        name: "Frozen Pond", 
        img: "/shared/customizations/winter_event_2024_frozen_pond.webp",
        production: {
            resource: "chest_ascension_2",
            time: "2d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Rural Farm"
    },
    {
        id: "customization_winter_event_2024_winter_market", 
        name: "Winter Market", 
        img: "/shared/customizations/winter_event_2024_winter_market.webp",
        production: {
            resource: "antimatter_legendary_part",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Domestic Farm"
    },
    {
        id: "customization_winter_event_2024_snowman", 
        name: "Snowman", 
        img: "/shared/customizations/winter_event_2024_snowman.webp",
        production: {
            resource: "goods",
            time: "1d",
            amount: "26"
        },
        duration: "20d",
        applyTo: "Little Culture Site"
    },
    {
        id: "customization_winter_event_2024_sleigh", 
        name: "Sleigh", 
        img: "/shared/customizations/winter_event_2024_sleigh.webp",
        production: {
            resource: "victory_ticket",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Compact Culture Site"
    },
    {
        id: "customization_winter_event_2024_winter_pyramid", 
        name: "Winter Pyramid", 
        img: "/shared/customizations/winter_event_2024_winter_pyramid.webp",
        production: {
            resource: "chest_teslacrests_enhanced",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Moderate Culture Site"
    },
]

const obtainableFrom = {
    "_ath_": "Alliance Treasure Hunt",
    "_world_fair_2024_": "World Fair 2024",
    "_winter_event_2024": "Winter Event 2024",
}

export {customizations, obtainableFrom};