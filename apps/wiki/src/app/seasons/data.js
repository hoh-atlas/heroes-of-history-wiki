const allSeasons = [
    {
        id: 4,
        codeName: "SeasonPass_04_2024",
        name: "Season 4: Eternal Rivals",
        image: "/shared/resources/icon_rift_token_seasonpass_common.webp",
        startDate: "December 18th 2024",
        endDate: "January 15th 2025",
        banner: "/seasons/intro/season_04_banner.webp",
        background: "/seasons/intro/season_4_sale_offer_bg.webp",
        uniqueHeroes: ["dracula", "abraham-van-helsing"],
    },
    {
        id: 5,
        codeName: "SeasonPass_05_2024",
        name: "Season 5: Skyward Pioneers",
        image: "/shared/resources/icon_rift_token_seasonpass_common.webp",
        startDate: "__ _ 2025",
        endDate: "__ _ 2025",
        banner: "/seasons/intro/season_05_banner.webp",
        background: "/seasons/intro/season_5_sale_offer_bg.webp",
        uniqueHeroes: ["amelia-earhart", "bessie-coleman"],
    },
    {
        id: 3,
        name: "Season 3: Rome's Titans",
        image: "/shared/resources/icon_rift_token_seasonpass_common.webp",
        startDate: "November 27th 2024",
        endDate: "December 17th 2024",
        banner: "/seasons/intro/season_03_banner.webp",
        background: "/seasons/intro/season_3_sale_offer_bg.webp",
        uniqueHeroes: ["julius-caesar", "spartacus"],
        rewards: [
            {
                id: 1,
                cost: 5,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 2
                }
            },
            {
                id: 2,
                cost: 10,
                free: {
                    resource: "energy",
                    amount: 80
                },
                premium: {
                    resource: "energy",
                    amount: 200
                }
            },
            {
                id: 3,
                cost: 30,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 4,
                cost: 40,
                free: {
                    resource: "gems",
                    amount: 50
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 5,
                cost: 50,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 6,
                cost: 60,
                free: {
                    resource: "energy",
                    amount: 80
                },
                premium: {
                    resource: "energy",
                    amount: 200
                }
            },
            {
                id: 7,
                cost: 70,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 8,
                cost: 80,
                free: {
                    resource: "arena_token",
                    amount: 5
                },
                premium: {
                    resource: "energy",
                    amount: 200
                }
            },
            {
                id: 9,
                cost: 90,
                free: {
                    resource: "energy",
                    amount: 80
                },
                premium: {
                    resource: "arena_token",
                    amount: 5
                }
            },
            {
                id: 10,
                cost: 100,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 11,
                cost: 105,
                free: {
                    resource: "gems",
                    amount: 50
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 12,
                cost: 110,
                free: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 13,
                cost: 115,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 2
                }
            },
            {
                id: 14,
                cost: 120,
                free: {
                    resource: "arena_token",
                    amount: 5
                },
                premium: {
                    resource: "energy",
                    amount: 200
                }
            },
            {
                id: 15,
                cost: 125,
                free: {
                    resource: "victory_ticket",
                    amount: 15
                },
                premium: {
                    resource: "victory_ticket",
                    amount: 30
                }
            },
            {
                id: 16,
                cost: 135,
                free: {
                    resource: "energy",
                    amount: 80
                },
                premium: {
                    resource: "arena_token",
                    amount: 5
                }
            },
            {
                id: 17,
                cost: 140,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 2
                }
            },
            {
                id: 18,
                cost: 145,
                free: {
                    resource: "energy",
                    amount: 80
                },
                premium: {
                    resource: "energy",
                    amount: 320
                }
            },
            {
                id: 19,
                cost: 150,
                free: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 2
                }
            },
            {
                id: 20,
                cost: 160,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 3
                }
            },
        ]
    },
    {
        id: 2,
        name: "Season 2: Mythical Mayhem",
        image: "/shared/resources/icon_rift_token_seasonpass_common.webp",
        startDate: "October 30th 2024",
        endDate: "November 27th 2024",
        banner: "/seasons/intro/season_02_banner.webp",
        background: "/seasons/intro/season_2_sale_offer_bg.webp",
        uniqueHeroes: ["medusa", "king-minos"],
        rewards: [
            {
                id: 1,
                cost: 5,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 2
                }
            },
            {
                id: 2,
                cost: 10,
                free: {
                    resource: "energy",
                    amount: 80
                },
                premium: {
                    resource: "energy",
                    amount: 160
                }
            },
            {
                id: 3,
                cost: 30,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 4,
                cost: 35,
                free: {
                    resource: "gems",
                    amount: 50
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 5,
                cost: 45,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 6,
                cost: 55,
                free: {
                    resource: "energy",
                    amount: 80
                },
                premium: {
                    resource: "energy",
                    amount: 160
                }
            },
            {
                id: 7,
                cost: 70,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 8,
                cost: 80,
                free: {
                    resource: "arena_token",
                    amount: 5
                },
                premium: {
                    resource: "energy",
                    amount: 160
                }
            },
            {
                id: 9,
                cost: 90,
                free: {
                    resource: "energy",
                    amount: 80
                },
                premium: {
                    resource: "arena_token",
                    amount: 5
                }
            },
            {
                id: 10,
                cost: 90,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 11,
                cost: 90,
                free: {
                    resource: "gems",
                    amount: 50
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 12,
                cost: 105,
                free: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 13,
                cost: 105,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 2
                }
            },
            {
                id: 14,
                cost: 105,
                free: {
                    resource: "arena_token",
                    amount: 5
                },
                premium: {
                    resource: "energy",
                    amount: 160
                }
            },
            {
                id: 15,
                cost: 115,
                free: {
                    resource: "victory_ticket",
                    amount: 15
                },
                premium: {
                    resource: "victory_ticket",
                    amount: 30
                }
            },
            {
                id: 16,
                cost: 115,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 17,
                cost: 115,
                free: {
                    resource: "energy",
                    amount: 80
                },
                premium: {
                    resource: "energy",
                    amount: 160
                }
            },
            {
                id: 18,
                cost: 115,
                free: {
                    resource: "gems",
                    amount: 50
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 19,
                cost: 125,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 20,
                cost: 125,
                free: {
                    resource: "arena_token",
                    amount: 5
                },
                premium: {
                    resource: "energy",
                    amount: 160
                }
            },
            {
                id: 21,
                cost: 125,
                free: {
                    resource: "energy",
                    amount: 80
                },
                premium: {
                    resource: "arena_token",
                    amount: 5
                }
            },
            {
                id: 22,
                cost: 125,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 23,
                cost: 135,
                free: {
                    resource: "energy",
                    amount: 80
                },
                premium: {
                    resource: "energy",
                    amount: 160
                }
            },
            {
                id: 24,
                cost: 150,
                free: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 25,
                cost: 160,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 2
                }
            },
        ]
    },
    {
        id: 1,
        name: "Season 1: Ethereal Minds",
        image: "/shared/resources/icon_rift_token_seasonpass_common.webp",
        startDate: "October 2nd 2024",
        endDate: "October 30th 2024",
        banner: "/seasons/intro/season_01_banner.webp",
        background: "/seasons/intro/season_sale_offer_bg.webp",
        uniqueHeroes: ["albert-einstein", "confucius"],
        rewards: [
            {
                id: 1,
                cost: 5,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 2
                }
            },
            {
                id: 2,
                cost: 10,
                free: {
                    resource: "energy",
                    amount: 100
                },
                premium: {
                    resource: "energy",
                    amount: 200
                }
            },
            {
                id: 3,
                cost: 30,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 4,
                cost: 35,
                free: {
                    resource: "gems",
                    amount: 50
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 5,
                cost: 45,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 6,
                cost: 55,
                free: {
                    resource: "arena_token",
                    amount: 5
                },
                premium: {
                    resource: "arena_token",
                    amount: 10
                }
            },
            {
                id: 7,
                cost: 70,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 8,
                cost: 80,
                free: {
                    resource: "ath_compass",
                    amount: 5
                },
                premium: {
                    resource: "ath_compass",
                    amount: 5
                }
            },
            {
                id: 9,
                cost: 90,
                free: {
                    resource: "energy",
                    amount: 100
                },
                premium: {
                    resource: "energy",
                    amount: 200
                }
            },
            {
                id: 10,
                cost: 90,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 11,
                cost: 90,
                free: {
                    resource: "gems",
                    amount: 50
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 12,
                cost: 105,
                free: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 13,
                cost: 105,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 2
                }
            },
            {
                id: 14,
                cost: 105,
                free: {
                    resource: "arena_token",
                    amount: 5
                },
                premium: {
                    resource: "arena_token",
                    amount: 10
                }
            },
            {
                id: 15,
                cost: 115,
                free: {
                    resource: "victory_ticket",
                    amount: 15
                },
                premium: {
                    resource: "victory_ticket",
                    amount: 30
                }
            },
            {
                id: 16,
                cost: 115,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 17,
                cost: 115,
                free: {
                    resource: "energy",
                    amount: 100
                },
                premium: {
                    resource: "energy",
                    amount: 200
                }
            },
            {
                id: 18,
                cost: 115,
                free: {
                    resource: "gems",
                    amount: 50
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 19,
                cost: 125,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 20,
                cost: 125,
                free: {
                    resource: "arena_token",
                    amount: 5
                },
                premium: {
                    resource: "arena_token",
                    amount: 10
                }
            },
            {
                id: 21,
                cost: 125,
                free: {
                    resource: "ath_compass",
                    amount: 5
                },
                premium: {
                    resource: "ath_compass",
                    amount: 5
                }
            },
            {
                id: 22,
                cost: 125,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                }
            },
            {
                id: 23,
                cost: 135,
                free: {
                    resource: "energy",
                    amount: 100
                },
                premium: {
                    resource: "energy",
                    amount: 200
                }
            },
            {
                id: 24,
                cost: 150,
                free: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                }
            },
            {
                id: 25,
                cost: 160,
                free: {
                    resource: "antimatter_seasonpass",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_seasonpass",
                    amount: 2
                }
            },
        ]
    },
]

export default allSeasons;