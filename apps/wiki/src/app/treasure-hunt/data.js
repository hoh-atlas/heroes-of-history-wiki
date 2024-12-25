const difficulties = [
    {
        id: 1,
        name: "Rookie I",
        icon: "https://i.ibb.co/hRxRcf1/icon-ath-difficulty-0.png",
    },
    {
        id: 2,
        name: "Rookie II",
        icon: "https://i.ibb.co/rmhwTfZ/icon-ath-difficulty-1.png",
    },
    {
        id: 3,
        name: "Rookie III",
        icon: "https://i.ibb.co/6FdMT5J/icon-ath-difficulty-2.png",
    },
    {
        id: 4,
        name: "Veteran I",
        icon: "https://i.ibb.co/jVWzhtQ/icon-ath-difficulty-3.png",
    },
    {
        id: 5,
        name: "Veteran II",
        icon: "https://i.ibb.co/Vj4kQ6d/icon-ath-difficulty-4.png",
    },
    {
        id: 6,
        name: "Veteran III",
        icon: "https://i.ibb.co/cg7zV6N/icon-ath-difficulty-5.png",
    },
    {
        id: 7,
        name: "Master I",
        icon: "https://i.ibb.co/PCkFssG/icon-ath-difficulty-6.png",
    },
    {
        id: 8,
        name: "Master II",
        icon: "https://i.ibb.co/NsNVytr/icon-ath-difficulty-7.png",
    },
    {
        id: 9,
        name: "Master III",
        icon: "https://i.ibb.co/QcsN3TJ/icon-ath-difficulty-8.png",
    },
]

const checkpoints = [
    {
        requirement: 150,
        rewards: [
            {
                resource: "coins",
                percentage: 50
            },
            {
                resource: "food",
                percentage: 50
            }
        ]
    },
    {
        requirement: 900,
        rewards: [
            {
                resource: "coins",
                percentage: 50
            },
            {
                resource: "food",
                percentage: 50
            }
        ]
    },
    {
        requirement: 1900,
        rewards: [
            {
                resource: "research_point",
                amount: 1,
                percentage: 20
            },
            {
                resource: "goods",
                percentage: 80
            }
        ]
    },
    {
        requirement: 3100,
        rewards: [
            {
                resource: "customization_ath_voodoo_head",
                amount: 1,
                percentage: 20
            },
            {
                resource: "xp_hero",
                percentage: 30
            },
            {
                resource: "coins",
                percentage: 50
            }
        ]
    },
    {
        requirement: 4500,
        rewards: [
            {
                resource: "token_ath_fountain_of_youth",
                amount: 1,
                percentage: 10
            },
            {
                resource: "food",
                percentage: 60
            },
            {
                resource: "energy",
                amount: 10,
                percentage: 30
            }
        ]
    },
    {
        requirement: 6200,
        rewards: [
            {
                resource: "xp_hero",
                percentage: 30
            },
            {
                resource: "research_point",
                amount: 2,
                percentage: 20
            },
            {
                resource: "goods",
                percentage: 50
            }
        ]
    },
    {
        requirement: 8000,
        rewards: [
            {
                resource: "customization_ath_sugarcane_distillery",
                amount: 1,
                percentage: 20
            },
            {
                resource: "coins",
                percentage: 60
            },
            {
                resource: "victory_ticket",
                amount: 1,
                percentage: 20
            }
        ]
    },
    {
        requirement: 10000,
        rewards: [
            {
                resource: "puzzle_piece",
                percentage: 20
            },
            {
                resource: "antimatter",
                amount: 1,
                percentage: 20
            },
            {
                resource: "food",
                percentage: 60
            }
        ]
    },
    {
        requirement: 12000,
        rewards: [
            {
                resource: "customization_ath_robber_crab",
                amount: 1,
                percentage: 20
            },
            {
                resource: "coins",
                percentage: 30
            },
            {
                resource: "research_point",
                amount: 2,
                percentage: 25
            },
            {
                resource: "victory_ticket",
                amount: 1,
                percentage: 25
            }
        ]
    },
    {
        requirement: 15000,
        rewards: [
            {
                resource: "token_ath_fountain_of_youth",
                amount: 1,
                percentage: 20
            },
            {
                resource: "xp_hero",
                percentage: 30
            },
            {
                resource: "goods",
                percentage: 20
            },
            {
                resource: "energy",
                amount: 20,
                percentage: 30
            }
        ]
    },
    {
        requirement: 18000,
        rewards: [
            {
                resource: "mastery_point",
                percentage: 30
            },
            {
                resource: "research_point",
                amount: 2,
                percentage: 30
            },
            {
                resource: "food",
                percentage: 40
            }
        ]
    },
    {
        requirement: 21000,
        rewards: [
            {
                resource: "customization_ath_jolly_roger",
                amount: 1,
                percentage: 20
            },
            {
                resource: "xp_hero",
                percentage: 30
            },
            {
                resource: "coins",
                percentage: 30
            },
            {
                resource: "victory_ticket",
                amount: 1,
                percentage: 20
            }
        ]
    },
    {
        requirement: 24000,
        rewards: [
            {
                resource: "puzzle_piece",
                percentage: 20
            },
            {
                resource: "mastery_point",
                percentage: 30
            },
            {
                resource: "food",
                percentage: 50
            }
        ]
    },
    {
        requirement: 27000,
        rewards: [
            {
                resource: "antimatter",
                amount: 2,
                percentage: 20
            },
            {
                resource: "research_point",
                amount: 2,
                percentage: 35
            },
            {
                resource: "goods",
                percentage: 45
            }
        ]
    },
    {
        requirement: 31000,
        rewards: [
            {
                resource: "token_ath_fountain_of_youth",
                amount: 1,
                percentage: 30
            },
            {
                resource: "customization_ath_long_nine",
                amount: 1,
                percentage: 20
            },
            {
                resource: "xp_hero",
                percentage: 30
            },
            {
                resource: "victory_ticket",
                amount: 1,
                percentage: 20
            }
        ]
    },
    {
        requirement: 35000,
        rewards: [
            {
                resource: "mastery_point",
                percentage: 30
            },
            {
                resource: "research_point",
                amount: 2,
                percentage: 40
            },
            {
                resource: "energy",
                amount: 30,
                percentage: 30
            }
        ]
    },
    {
        requirement: 39000,
        rewards: [
            {
                resource: "puzzle_piece",
                percentage: 25
            },
            {
                resource: "xp_hero",
                percentage: 30
            },
            {
                resource: "coins",
                percentage: 45
            }
        ]
    },
    {
        requirement: 43000,
        rewards: [
            {
                resource: "customization_ath_sparkling_fortune",
                amount: 1,
                percentage: 20
            },
            {
                resource: "xp_hero",
                percentage: 30
            },
            {
                resource: "food",
                percentage: 50
            }
        ]
    },
    {
        requirement: 48000,
        rewards: [
            {
                resource: "puzzle_piece",
                percentage: 30
            },
            {
                resource: "research_point",
                amount: 2,
                percentage: 45
            },
            {
                resource: "goods",
                percentage: 25
            }
        ]
    },
    {
        requirement: 53000,
        rewards: [
            {
                resource: "token_ath_fountain_of_youth",
                amount: 1,
                percentage: 40
            },
            {
                resource: "customization_ath_tropical_fruit_farm",
                amount: 1,
                percentage: 20
            },
            {
                resource: "coins",
                percentage: 40
            }
        ]
    },
    {
        requirement: 58000,
        rewards: [
            {
                resource: "antimatter",
                amount: 2,
                percentage: 20
            },
            {
                resource: "mastery_point",
                percentage: 30
            },
            {
                resource: "xp_hero",
                percentage: 30
            },
            {
                resource: "food",
                percentage: 20
            }
        ]
    },
    {
        requirement: 63000,
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1,
                percentage: 10
            },
            {
                resource: "coins",
                percentage: 70
            },
            {
                resource: "goods",
                percentage: 20
            }
        ]
    },
    {
        requirement: 68000,
        rewards: [
            {
                resource: "customization_ath_the_scallywags_shanty",
                amount: 1,
                percentage: 20
            },
            {
                resource: "mastery_point",
                percentage: 30
            },
            {
                resource: "xp_hero",
                percentage: 30
            },
            {
                resource: "research_point",
                amount: 5,
                percentage: 20
            }
        ]
    },
    {
        requirement: 74000,
        rewards: [
            {
                resource: "token_ath_fountain_of_youth",
                amount: 1,
                percentage: 50
            },
            {
                resource: "antimatter",
                amount: 2,
                percentage: 50
            }
        ]
    },
    {
        requirement: 80000,
        rewards: [
            {
                resource: "token_ath_fountain_of_youth",
                amount: 1,
                percentage: 100
            }
        ]
    }
]

export { difficulties, checkpoints };