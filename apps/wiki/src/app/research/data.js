const allTechnologies = [
    {
        id: 1,
        era: "Stone Age",
        image: "/research/intro/age_transition_stone_age_main1.webp",
        technologies: [
            {
                id: 1,
                name: "Tribal Settlement",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                parents: [],
                children: [2]
            },
            {
                id: 2,
                name: "Cultivation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "coins",
                        amount: 1
                    }
                ],
                parents: [1],
                children: [3]
            },
            {
                id: 3,
                name: "Spear Fighting",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "coins",
                        amount: 3
                    }
                ],
                parents: [2],
                children: [4]
            },
            {
                id: 4,
                name: "Firemaker",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 7
                    }
                ],
                parents: [3],
                children: [5,6]
            },
            {
                id: 5,
                name: "Cave Paintings",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "coins",
                        amount: 10
                    }
                ],
                parents: [4],
                children: [7]
            },
            {
                id: 6,
                name: "Cavalry Barracks",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "coins",
                        amount: 10
                    }
                ],
                parents: [4],
                children: [7]
            },
            {
                id: 7,
                name: "Einstein's Portal",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 60
                    },
                    {
                        resource: "amber",
                        amount: 1
                    }
                ],
                parents: [5,6],
                children: [8]
            },
            {
                id: 8,
                name: "Goat Pens",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 50
                    },
                ],
                parents: [7],
                children: [9,10]
            },
            {
                id: 9,
                name: "Agriculture",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 20
                    },
                ],
                parents: [8],
                children: [11]
            },
            {
                id: 10,
                name: "Slingshots",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 50
                    },
                    {
                        resource: "amber",
                        amount: 1
                    }
                ],
                parents: [8],
                children: [11]
            },
            {
                id: 11,
                name: "Tribal Celebrations",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "coins",
                        amount: 70
                    },
                    {
                        resource: "amber",
                        amount: 1
                    }
                ],
                parents: [9,10],
                children: [12,13]
            },
            {
                id: 12,
                name: "Herding",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 100
                    },
                ],
                parents: [11],
                children: [14]
            },
            {
                id: 13,
                name: "Baby Boom",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 120
                    },
                ],
                parents: [11],
                children: [15]
            },
            {
                id: 14,
                name: "The Wheel",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 150
                    },
                ],
                parents: [12],
                children: [16,17]
            },
            {
                id: 15,
                name: "Sacred Sites",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 170
                    },
                ],
                parents: [13],
                children: [16,17]
            },
            {
                id: 16,
                name: "Domesticated Goats",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 190
                    },
                ],
                parents: [14,15],
                children: []
            },
            {
                id: 17,
                name: "Rural Community",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 220
                    },
                    {
                        resource: "amber",
                        amount: 1
                    }
                ],
                parents: [14,15],
                children: []
            },
        ]
    },
    {
        id: 2,
        era: "Bronze Age",
        image: "/research/intro/age_transition_bronze_age_main1.webp",
        technologies: [
            {
                id: 1,
                name: "Village",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 750
                    },
                ],
                parents: [],
                children: [2]
            },
            {
                id: 2,
                name: "Alliances",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 1500
                    }
                ],
                parents: [1],
                children: [3]
            },
            {
                id: 3,
                name: "Ability Training",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 2450
                    }
                ],
                parents: [2],
                children: [4,5]
            },
            {
                id: 4,
                name: "Bronze Sentinel",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 2100
                    }
                ],
                parents: [3],
                children: [6]
            },
            {
                id: 5,
                name: "Chariot",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 4350
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1
                    }
                ],
                parents: [3],
                children: [7,8,9]
            },
            {
                id: 6,
                name: "Slingstone Catapult",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 2100
                    },
                    {
                        resource: "petroglyph",
                        amount: 1
                    }
                ],
                parents: [4],
                children: [10]
            },
            {
                id: 7,
                name: "Feed Trough",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 5150
                    }
                ],
                parents: [5],
                children: [11]
            },
            {
                id: 8,
                name: "Sacred Groves",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 4750
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 2
                    }
                ],
                parents: [5],
                children: [11]
            },
            {
                id: 9,
                name: "Archery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 5500
                    },
                ],
                parents: [5],
                children: [11]
            },
            {
                id: 10,
                name: "Cavalry Spearmen",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 4550
                    },
                ],
                parents: [6],
                children: [12]
            },
            {
                id: 11,
                name: "Artisan",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 2450
                    },
                ],
                parents: [7,8,9],
                children: [12]
            },
            {
                id: 12,
                name: "Allied Culture Events",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 3500
                    },
                ],
                parents: [10,11],
                children: [13,14,15]
            },
            {
                id: 13,
                name: "Sacred Stones",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 5150
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 25
                    }
                ],
                parents: [12],
                children: [16]
            },
            {
                id: 14,
                name: "Stone Manson",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 5300
                    },
                ],
                parents: [12],
                children: [17]
            },
            {
                id: 15,
                name: "Tailor",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 3400
                    },
                ],
                parents: [12],
                children: [18]
            },
            {
                id: 16,
                name: "Social Change",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 5300
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 55
                    },
                ],
                parents: [13],
                children: [19]
            },
            {
                id: 17,
                name: "Reinforced Footwear",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 5150
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 65
                    }
                ],
                parents: [14],
                children: [19]
            },
            {
                id: 18,
                name: "Farm Utensils",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 3050
                    },
                    {
                        resource: "wool",
                        amount: 65
                    },
                    {
                        resource: "petroglyph",
                        amount: 2
                    }
                ],
                parents: [15],
                children: [19]
            },
            {
                id: 19,
                name: "Mantlet Shields",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 8000
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 35
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 3
                    }
                ],
                parents: [16,17,18],
                children: [20,21,22,23]
            },
            {
                id: 20,
                name: "Building Knowledge",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 2450
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 60
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 25
                    }
                ],
                parents: [19],
                children: [24]
            },
            {
                id: 21,
                name: "Silent Draw",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 7200
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 60
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 25
                    }
                ],
                parents: [19],
                children: [24]
            },
            {
                id: 22,
                name: "Bronze Plating",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 4400
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 60
                    },
                    {
                        resource: "wool",
                        amount: 25
                    }
                ],
                parents: [19],
                children: [24,25]
            },
            {
                id: 23,
                name: "Barn",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 5200
                    },
                    {
                        resource: "wool",
                        amount: 80
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 35
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 3
                    }
                ],
                parents: [19],
                children: [25]
            },
            {
                id: 24,
                name: "Bronze Artillery Gears",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 6850
                    },
                    {
                        resource: "wool",
                        amount: 80
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 35
                    },
                ],
                parents: [20,21,22],
                children: [26,27,28]
            },
            {
                id: 25,
                name: "Bronze Tipped Spears",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 7800
                    },
                    {
                        resource: "wool",
                        amount: 100
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 45
                    },
                ],
                parents: [22,23],
                children: [28,29]
            },
            {
                id: 26,
                name: "Ancestral Valor",
                costs: [
                    {
                        resource: "research_point",
                        amount: 7
                    },
                    {
                        resource: "coins",
                        amount: 9300
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 100
                    },
                    {
                        resource: "wool",
                        amount: 40
                    },
                ],
                parents: [24],
                children: [30]
            },
            {
                id: 27,
                name: "Stakes",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 5700
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 120
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 50
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 4
                    }
                ],
                parents: [24],
                children: [30]
            },
            {
                id: 28,
                name: "Tribal Marksmanship",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 10050
                    },
                    {
                        resource: "wool",
                        amount: 110
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 45
                    },
                ],
                parents: [24,25],
                children: [31]
            },
            {
                id: 29,
                name: "Plough",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 5500
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 145
                    },
                    {
                        resource: "wool",
                        amount: 60
                    },
                    {
                        resource: "petroglyph",
                        amount: 3
                    }
                ],
                parents: [25],
                children: [31]
            },
            {
                id: 30,
                name: "Stronger Frames",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 11600
                    },
                    {
                        resource: "wool",
                        amount: 170
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 70
                    },
                ],
                parents: [26,27],
                children: [32]
            },
            {
                id: 31,
                name: "Small Holding",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 6850
                    },
                    {
                        resource: "wool",
                        amount: 170
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 75
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 5
                    }
                ],
                parents: [28,29],
                children: [32]
            },
            {
                id: 32,
                name: "Arena",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 6850
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 100
                    },
                    {
                        resource: "wool",
                        amount: 45
                    },
                ],
                parents: [30,31],
                children: [33,34]
            },
            {
                id: 33,
                name: "Bonze Effigy",
                costs: [
                    {
                        resource: "research_point",
                        amount: 7
                    },
                    {
                        resource: "coins",
                        amount: 3800
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 210
                    },
                    {
                        resource: "wool",
                        amount: 90
                    },
                ],
                parents: [32],
                children: [35]
            },
            {
                id: 34,
                name: "War Paint",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 6100
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 195
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 85
                    },
                ],
                parents: [32],
                children: [36]
            },
            {
                id: 35,
                name: "Prosperity",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 9300
                    },
                    {
                        resource: "wool",
                        amount: 195
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 85
                    },
                ],
                parents: [33],
                children: []
            },
            {
                id: 36,
                name: "Thundering Gallop",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 6100
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 210
                    },
                    {
                        resource: "wool",
                        amount: 90
                    },
                    {
                        resource: "petroglyph",
                        amount: 3
                    }
                ],
                parents: [34],
                children: []
            },
        ]
    },
    {
        id: 3,
        era: "Minoan Era",
        image: "/research/intro/age_transition_ancient_greece_main1.webp",
        technologies: [
            {
                id: 1,
                name: "Township",
                costs: [
                    {
                        resource: "research_point",
                        amount: 10
                    },
                    {
                        resource: "coins",
                        amount: 10500
                    },
                    {
                        resource: "wool",
                        amount: 90
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 40
                    },
                ],
                parents: [],
                children: [2,3,4,5]
            },
            {
                id: 2,
                name: "Iron Pendant",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 10500
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 65
                    },
                    {
                        resource: "wool",
                        amount: 30
                    },
                    {
                        resource: "jasper",
                        amount: 2
                    }
                ],
                parents: [1],
                children: [6]
            },
            {
                id: 3,
                name: "Stables",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 13000
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 105
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 45
                    }
                ],
                parents: [1],
                children: [7]
            },
            {
                id: 4,
                name: "Marble Bust",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 18000
                    },
                    {
                        resource: "wool",
                        amount: 55
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 25
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 2
                    }
                ],
                parents: [1],
                children: [8]
            },
            {
                id: 5,
                name: "Linen Shirt",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 18400
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 145
                    },
                    {
                        resource: "wool",
                        amount: 60
                    }
                ],
                parents: [1],
                children: [9]
            },
            {
                id: 6,
                name: "Oat Production",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 18400
                    },
                    {
                        resource: "iron_pendant",
                        amount: 30
                    },
                    {
                        resource: "wool",
                        amount: 75
                    },
                    {
                        resource: "jasper",
                        amount: 3
                    }
                ],
                parents: [2],
                children: [10]
            },
            {
                id: 7,
                name: "Composite Bow",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 15000
                    },
                    {
                        resource: "wool",
                        amount: 90
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 40
                    }
                ],
                parents: [3],
                children: [11]
            },
            {
                id: 8,
                name: "Battle Grounds",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 15500
                    },,
                    {
                        resource: "marble_bust",
                        amount: 30
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 110
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 2
                    }
                ],
                parents: [4],
                children: [11]
            },
            {
                id: 9,
                name: "Shepherding",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 14200
                    },
                    {
                        resource: "linen_shirt",
                        amount: 30
                    },
                    {
                        resource: "wool",
                        amount: 110
                    },
                    {
                        resource: "jasper",
                        amount: 3
                    }
                ],
                parents: [5],
                children: [12]
            },
            {
                id: 10,
                name: "Minotaur's Vanguard",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 11700
                    },
                    {
                        resource: "iron_pendant",
                        amount: 90
                    },
                    {
                        resource: "linen_shirt",
                        amount: 70
                    }
                ],
                parents: [6],
                children: [13]
            },
            {
                id: 11,
                name: "Masonry",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 20100
                    },
                    {
                        resource: "marble_bust",
                        amount: 95
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 185
                    }
                ],
                parents: [7,8],
                children: [13]
            },
            {
                id: 12,
                name: "Minoan Sling Launcher",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 18800
                    },
                    {
                        resource: "linen_shirt",
                        amount: 175
                    },
                    {
                        resource: "marble_bust",
                        amount: 125
                    }
                ],
                parents: [9],
                children: [13]
            },
            {
                id: 13,
                name: "Hero Academy",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 13800
                    },
                    {
                        resource: "marble_bust",
                        amount: 205
                    },
                    {
                        resource: "iron_pendant",
                        amount: 160
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 6
                    }
                ],
                parents: [10,11,12],
                children: [14,15]
            },
            {
                id: 14,
                name: "Basket Weaving",
                costs: [
                    {
                        resource: "research_point",
                        amount: 13
                    },
                    {
                        resource: "coins",
                        amount: 20100
                    },
                    {
                        resource: "iron_pendant",
                        amount: 410
                    },
                    {
                        resource: "linen_shirt",
                        amount: 175
                    }
                ],
                parents: [13],
                children: [16,17]
            },
            {
                id: 15,
                name: "Equestrian Artistry",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 19200
                    },
                    {
                        resource: "linen_shirt",
                        amount: 355
                    },
                    {
                        resource: "marble_bust",
                        amount: 150
                    }
                ],
                parents: [13],
                children: [18]
            },
            {
                id: 16,
                name: "Hawkeye Vision",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 13800
                    },
                    {
                        resource: "marble_bust",
                        amount: 310
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 130
                    },
                    {
                        resource: "jasper",
                        amount: 4
                    }
                ],
                parents: [14],
                children: [19]
            },
            {
                id: 17,
                name: "Screws",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 12100
                    },
                    {
                        resource: "linen_shirt",
                        amount: 325
                    },
                    {
                        resource: "iron_pendant",
                        amount: 140
                    }
                ],
                parents: [14],
                children: [20,21]
            },
            {
                id: 18,
                name: "Glyphic Warding",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 11700
                    },
                    {
                        resource: "marble_bust",
                        amount: 195
                    },
                    {
                        resource: "linen_shirt",
                        amount: 85
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 4
                    }
                ],
                parents: [15],
                children: [22]
            },
            {
                id: 19,
                name: "Mystic Battle Chants",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 20500
                    },
                    {
                        resource: "iron_pendant",
                        amount: 440
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 190
                    }
                ],
                parents: [16],
                children: [23]
            },
            {
                id: 20,
                name: "Animal Husbandry",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 17600
                    },
                    {
                        resource: "iron_pendant",
                        amount: 505
                    },
                    {
                        resource: "marble_bust",
                        amount: 215
                    },
                    {
                        resource: "jasper",
                        amount: 4
                    }
                ],
                parents: [17],
                children: [23]
            },
            {
                id: 21,
                name: "Millstone",
                costs: [
                    {
                        resource: "research_point",
                        amount: 13
                    },
                    {
                        resource: "coins",
                        amount: 13800
                    },
                    {
                        resource: "linen_shirt",
                        amount: 355
                    },
                    {
                        resource: "iron_pendant",
                        amount: 150
                    }
                ],
                parents: [17],
                children: [23]
            },
            {
                id: 22,
                name: "Oracles Guidance",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 12100
                    },
                    {
                        resource: "marble_bust",
                        amount: 230
                    },
                    {
                        resource: "linen_shirt",
                        amount: 100
                    }
                ],
                parents: [18],
                children: [24]
            },
            {
                id: 23,
                name: "Columns",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 15900
                    },
                    {
                        resource: "iron_pendant",
                        amount: 260
                    },
                    {
                        resource: "wool",
                        amount: 110
                    },
                ],
                parents: [19,20,21],
                children: [25]
            },
            {
                id: 24,
                name: "Divinatory Strategy",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 17100
                    },
                    {
                        resource: "marble_bust",
                        amount: 280
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 120
                    },
                    {
                        resource: "jasper",
                        amount: 4
                    }
                ],
                parents: [22],
                children: [25]
            },
            {
                id: 25,
                name: "Winch",
                costs: [
                    {
                        resource: "research_point",
                        amount: 10
                    },
                    {
                        resource: "coins",
                        amount: 18000
                    },
                    {
                        resource: "linen_shirt",
                        amount: 355
                    },
                    {
                        resource: "marble_bust",
                        amount: 150
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 6
                    }
                ],
                parents: [23,24],
                children: [26,27,28]
            },
            {
                id: 26,
                name: "Lionhearted Infantry",
                costs: [
                    {
                        resource: "research_point",
                        amount: 10
                    },
                    {
                        resource: "coins",
                        amount: 22200
                    },
                    {
                        resource: "iron_pendant",
                        amount: 330
                    },
                    {
                        resource: "marble_bust",
                        amount: 140
                    },
                ],
                parents: [25],
                children: [29]
            },
            {
                id: 27,
                name: "Administration",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 20100
                    },
                    {
                        resource: "linen_shirt",
                        amount: 420
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 180
                    },
                    {
                        resource: "jasper",
                        amount: 4
                    }
                ],
                parents: [25],
                children: [29]
            },
            {
                id: 28,
                name: "Cretan Quivers",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 23000
                    },
                    {
                        resource: "marble_bust",
                        amount: 355
                    },
                    {
                        resource: "linen_shirt",
                        amount: 155
                    },
                ],
                parents: [25],
                children: [30]
            },
            {
                id: 29,
                name: "Ceramic Armorcraft",
                costs: [
                    {
                        resource: "research_point",
                        amount: 10
                    },
                    {
                        resource: "coins",
                        amount: 14200
                    },
                    {
                        resource: "iron_pendant",
                        amount: 230
                    },
                    {
                        resource: "wool",
                        amount: 100
                    },
                    {
                        resource: "jasper",
                        amount: 4
                    }
                ],
                parents: [26,27],
                children: []
            },
            {
                id: 30,
                name: "Bronze Automata",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 17600
                    },
                    {
                        resource: "linen_shirt",
                        amount: 245
                    },
                    {
                        resource: "iron_pendant",
                        amount: 105
                    },
                    {
                        resource: "jasper",
                        amount: 6
                    }
                ],
                parents: [28],
                children: []
            },
        ]
    },
    {
        id: 4,
        era: "Classic Greece",
        image: "/research/intro/age_transition_classic_greece_main1.webp",
        technologies: [
            {
                id: 1,
                name: "Agora",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 37300
                    },
                    {
                        resource: "iron_pendant",
                        amount: 205
                    },
                    {
                        resource: "linen_shirt",
                        amount: 90
                    },
                ],
                parents: [],
                children: [2,3,4]
            },
            {
                id: 2,
                name: "Silver Ring",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 27700
                    },
                    {
                        resource: "linen_shirt",
                        amount: 135
                    },
                    {
                        resource: "marble_bust",
                        amount: 60
                    },
                    {
                        resource: "hematite",
                        amount: 1
                    }
                ],
                parents: [1],
                children: [5]
            },
            {
                id: 3,
                name: "Toga",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 35100
                    },
                    {
                        resource: "marble_bust",
                        amount: 275
                    },
                    {
                        resource: "iron_pendant",
                        amount: 115
                    },
                    {
                        resource: "hematite",
                        amount: 2
                    }
                ],
                parents: [1],
                children: [6,7]
            },
            {
                id: 4,
                name: "Column",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 31900
                    },
                    {
                        resource: "iron_pendant",
                        amount: 100
                    },
                    {
                        resource: "linen_shirt",
                        amount: 45
                    },
                    {
                        resource: "hematite",
                        amount: 2
                    }
                ],
                parents: [1],
                children: [8]
            },
            {
                id: 5,
                name: "Toxotai",
                costs: [
                    {
                        resource: "research_point",
                        amount: 14
                    },
                    {
                        resource: "coins",
                        amount: 39400
                    },
                    {
                        resource: "silver_ring",
                        amount: 100
                    },
                    {
                        resource: "marble_bust",
                        amount: 265
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1
                    }
                ],
                parents: [2],
                children: [9]
            },
            {
                id: 6,
                name: "Domestic Pigs",
                costs: [
                    {
                        resource: "research_point",
                        amount: 16
                    },
                    {
                        resource: "coins",
                        amount: 38300
                    },
                    {
                        resource: "toga",
                        amount: 70
                    },
                    {
                        resource: "linen_shirt",
                        amount: 175
                    },
                ],
                parents: [3],
                children: [9]
            },
            {
                id: 7,
                name: "Carpentry",
                costs: [
                    {
                        resource: "research_point",
                        amount: 14
                    },
                    {
                        resource: "coins",
                        amount: 29800
                    },
                    {
                        resource: "toga",
                        amount: 60
                    },
                    {
                        resource: "marble_bust",
                        amount: 240
                    }
                ],
                parents: [3],
                children: [10]
            },
            {
                id: 8,
                name: "Cataphract",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 39400
                    },,
                    {
                        resource: "column",
                        amount: 110
                    },
                    {
                        resource: "linen_shirt",
                        amount: 245
                    },
                    {
                        resource: "hematite",
                        amount: 3
                    }
                ],
                parents: [4],
                children: [10]
            },
            {
                id: 9,
                name: "Education",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 37300
                    },
                    {
                        resource: "toga",
                        amount: 380
                    },
                    {
                        resource: "silver_ring",
                        amount: 165
                    },
                ],
                parents: [5,6],
                children: [11,12]
            },
            {
                id: 10,
                name: "Psiloi",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 42600
                    },
                    {
                        resource: "column",
                        amount: 590
                    },
                    {
                        resource: "toga",
                        amount: 250
                    },
                    {
                        resource: "hematite",
                        amount: 4
                    }
                ],
                parents: [7,8],
                children: [12,13]
            },
            {
                id: 11,
                name: "Hellenic Bolt Thrower",
                costs: [
                    {
                        resource: "research_point",
                        amount: 13
                    },
                    {
                        resource: "coins",
                        amount: 37300
                    },
                    {
                        resource: "silver_ring",
                        amount: 410
                    },
                    {
                        resource: "toga",
                        amount: 175
                    },
                    {
                        resource: "greek_lyre",
                        amount: 3
                    }
                ],
                parents: [9],
                children: [14]
            },
            {
                id: 12,
                name: "Philosophy",
                costs: [
                    {
                        resource: "research_point",
                        amount: 16
                    },
                    {
                        resource: "coins",
                        amount: 31900
                    },
                    {
                        resource: "toga",
                        amount: 610
                    },
                    {
                        resource: "column",
                        amount: 260
                    }
                ],
                parents: [9,10],
                children: [15]
            },
            {
                id: 13,
                name: "Hoplites",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 34100
                    },
                    {
                        resource: "column",
                        amount: 275
                    },
                    {
                        resource: "linen_shirt",
                        amount: 115
                    },
                ],
                parents: [10],
                children: [16]
            },
            {
                id: 14,
                name: "Wind Prediction",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 52200
                    },
                    {
                        resource: "toga",
                        amount: 820
                    },
                    {
                        resource: "silver_ring",
                        amount: 350
                    },
                    {
                        resource: "hematite",
                        amount: 6
                    }
                ],
                parents: [11],
                children: [17,18]
            },
            {
                id: 15,
                name: "Crop Rotation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 18
                    },
                    {
                        resource: "coins",
                        amount: 43600
                    },
                    {
                        resource: "silver_ring",
                        amount: 345
                    },
                    {
                        resource: "iron_pendant",
                        amount: 150
                    }
                ],
                parents: [12],
                children: [18,19]
            },
            {
                id: 16,
                name: "Improved Saddles",
                costs: [
                    {
                        resource: "research_point",
                        amount: 20
                    },
                    {
                        resource: "coins",
                        amount: 50000
                    },
                    {
                        resource: "column",
                        amount: 530
                    },
                    {
                        resource: "toga",
                        amount: 230
                    },
                    {
                        resource: "greek_lyre",
                        amount: 4
                    }
                ],
                parents: [13],
                children: [20]
            },
            {
                id: 17,
                name: "Swift Reload",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 54300
                    },
                    {
                        resource: "silver_ring",
                        amount: 405
                    },
                    {
                        resource: "marble_bust",
                        amount: 175
                    }
                ],
                parents: [14],
                children: [21]
            },
            {
                id: 18,
                name: "Ambush Techniques",
                costs: [
                    {
                        resource: "research_point",
                        amount: 16
                    },
                    {
                        resource: "coins",
                        amount: 49000
                    },
                    {
                        resource: "toga",
                        amount: 480
                    },
                    {
                        resource: "silver_ring",
                        amount: 205
                    },
                    {
                        resource: "greek_lyre",
                        amount: 6
                    }
                ],
                parents: [14,15],
                children: [21]
            },
            {
                id: 19,
                name: "Temples",
                costs: [
                    {
                        resource: "research_point",
                        amount: 13
                    },
                    {
                        resource: "coins",
                        amount: 43600
                    },
                    {
                        resource: "column",
                        amount: 415
                    },
                    {
                        resource: "silver_ring",
                        amount: 180
                    },
                    {
                        resource: "hematite",
                        amount: 7
                    }
                ],
                parents: [15],
                children: [21]
            },
            {
                id: 20,
                name: "Bulwark Formation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 14
                    },
                    {
                        resource: "coins",
                        amount: 57500
                    },
                    {
                        resource: "silver_ring",
                        amount: 820
                    },
                    {
                        resource: "column",
                        amount: 350
                    },
                ],
                parents: [16],
                children: [21]
            },
            {
                id: 21,
                name: "Herbal Aromas",
                costs: [
                    {
                        resource: "research_point",
                        amount: 20
                    },
                    {
                        resource: "coins",
                        amount: 51100
                    },
                    {
                        resource: "toga",
                        amount: 750
                    },
                    {
                        resource: "iron_pendant",
                        amount: 320
                    },
                    {
                        resource: "greek_lyre",
                        amount: 6
                    }
                ],
                parents: [17,18,19,20],
                children: [22,23,24]
            },
            {
                id: 22,
                name: "Flank Assault",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 43600
                    },
                    {
                        resource: "column",
                        amount: 405
                    },
                    {
                        resource: "toga",
                        amount: 175
                    }
                ],
                parents: [21],
                children: [25]
            },
            {
                id: 23,
                name: "Math",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 54300
                    },
                    {
                        resource: "silver_ring",
                        amount: 620
                    },
                    {
                        resource: "column",
                        amount: 185
                    },
                    {
                        resource: "hematite",
                        amount: 7
                    }
                ],
                parents: [21],
                children: [26]
            },
            {
                id: 24,
                name: "Improved Fletching",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 53200
                    },
                    {
                        resource: "toga",
                        amount: 740
                    },
                    {
                        resource: "linen_shirt",
                        amount: 235
                    },
                ],
                parents: [21],
                children: [27]
            },
            {
                id: 25,
                name: "Reinforced Shields",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 37300
                    },
                    {
                        resource: "column",
                        amount: 690
                    },
                    {
                        resource: "toga",
                        amount: 215
                    },
                    {
                        resource: "hematite",
                        amount: 8
                    }
                ],
                parents: [22],
                children: [28]
            },
            {
                id: 26,
                name: "Philosophical Debates",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 45800
                    },
                    {
                        resource: "toga",
                        amount: 325
                    },
                    {
                        resource: "silver_ring",
                        amount: 140
                    },
                    {
                        resource: "greek_lyre",
                        amount: 6
                    }
                ],
                parents: [23],
                children: [29]
            },
            {
                id: 27,
                name: "Advanced Projectiles",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 56400
                    },
                    {
                        resource: "column",
                        amount: 680
                    },
                    {
                        resource: "silver_ring",
                        amount: 295
                    },
                ],
                parents: [24],
                children: [29]
            },
            {
                id: 28,
                name: "Intimidating Presence",
                costs: [
                    {
                        resource: "research_point",
                        amount: 18
                    },
                    {
                        resource: "coins",
                        amount: 46800
                    },
                    {
                        resource: "silver_ring",
                        amount: 460
                    },
                    {
                        resource: "marble_bust",
                        amount: 200
                    },
                    {
                        resource: "greek_lyre",
                        amount: 8
                    }
                ],
                parents: [25],
                children: []
            },
            {
                id: 29,
                name: "Concrete",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 57500
                    },
                    {
                        resource: "silver_ring",
                        amount: 615
                    },
                    {
                        resource: "column",
                        amount: 265
                    },
                    {
                        resource: "hematite",
                        amount: 13
                    }
                ],
                parents: [26,27],
                children: []
            },
        ]
    },
    {
        id: 5,
        era: "Early Rome",
        image: "/research/intro/age_transition_early_rome_main1.webp",
        technologies: [
            {
                id: 1,
                name: "Municipium",
                costs: [
                    {
                        resource: "research_point",
                        amount: 27
                    },
                    {
                        resource: "coins",
                        amount: 53800
                    },
                    {
                        resource: "silver_ring",
                        amount: 630
                    },
                    {
                        resource: "column",
                        amount: 270
                    },
                ],
                parents: [],
                children: [2,3,4]
            },
            {
                id: 2,
                name: "Tunic",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 55900
                    },
                    {
                        resource: "column",
                        amount: 855
                    },
                    {
                        resource: "toga",
                        amount: 365
                    },
                    {
                        resource: "emerald",
                        amount: 2
                    }
                ],
                parents: [1],
                children: [5]
            },
            {
                id: 3,
                name: "Javelin Catapult",
                costs: [
                    {
                        resource: "research_point",
                        amount: 26
                    },
                    {
                        resource: "coins",
                        amount: 81800
                    },
                    {
                        resource: "toga",
                        amount: 730
                    },
                    {
                        resource: "silver_ring",
                        amount: 310
                    },
                ],
                parents: [1],
                children: [6,7]
            },
            {
                id: 4,
                name: "Gold Laurel",
                costs: [
                    {
                        resource: "research_point",
                        amount: 18
                    },
                    {
                        resource: "coins",
                        amount: 83900
                    },
                    {
                        resource: "silver_ring",
                        amount: 755
                    },
                    {
                        resource: "column",
                        amount: 325
                    },
                    {
                        resource: "emerald",
                        amount: 4
                    }
                ],
                parents: [1],
                children: [8]
            },
            {
                id: 5,
                name: "Auxilla Riders",
                costs: [
                    {
                        resource: "research_point",
                        amount: 23
                    },
                    {
                        resource: "coins",
                        amount: 55900
                    },
                    {
                        resource: "tunic",
                        amount: 400
                    },
                    {
                        resource: "column",
                        amount: 375
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 2
                    }
                ],
                parents: [2],
                children: [9]
            },
            {
                id: 6,
                name: "Insulae",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 55900
                    },
                    {
                        resource: "toga",
                        amount: 780
                    },
                    {
                        resource: "column",
                        amount: 335
                    },
                ],
                parents: [3],
                children: [10]
            },
            {
                id: 7,
                name: "Stone Tablet",
                costs: [
                    {
                        resource: "research_point",
                        amount: 26
                    },
                    {
                        resource: "coins",
                        amount: 66700
                    },
                    {
                        resource: "silver_ring",
                        amount: 1105
                    },
                    {
                        resource: "toga",
                        amount: 475
                    },
                    {
                        resource: "emerald",
                        amount: 4
                    }
                ],
                parents: [3],
                children: [10]
            },
            {
                id: 8,
                name: "Hastati",
                costs: [
                    {
                        resource: "research_point",
                        amount: 24
                    },
                    {
                        resource: "coins",
                        amount: 73200
                    },,
                    {
                        resource: "gold_laurel",
                        amount: 655
                    },
                    {
                        resource: "column",
                        amount: 280
                    },
                ],
                parents: [4],
                children: [11]
            },
            {
                id: 9,
                name: "Triarii",
                costs: [
                    {
                        resource: "research_point",
                        amount: 24
                    },
                    {
                        resource: "coins",
                        amount: 62400
                    },
                    {
                        resource: "tunic",
                        amount: 620
                    },
                    {
                        resource: "gold_laurel",
                        amount: 355
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 4
                    }
                ],
                parents: [5],
                children: [12]
            },
            {
                id: 10,
                name: "Sewerage",
                costs: [
                    {
                        resource: "research_point",
                        amount: 24
                    },
                    {
                        resource: "coins",
                        amount: 71000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 1080
                    },
                    {
                        resource: "toga",
                        amount: 465
                    },
                    {
                        resource: "emerald",
                        amount: 6
                    }
                ],
                parents: [6,7],
                children: [12,13]
            },
            {
                id: 11,
                name: "Velites",
                costs: [
                    {
                        resource: "research_point",
                        amount: 21
                    },
                    {
                        resource: "coins",
                        amount: 86100
                    },
                    {
                        resource: "gold_laurel",
                        amount: 1155
                    },
                    {
                        resource: "tunic",
                        amount: 495
                    },
                ],
                parents: [8],
                children: [13]
            },
            {
                id: 12,
                name: "Marketplaces",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 92500
                    },
                    {
                        resource: "stone_tablet",
                        amount: 705
                    },
                    {
                        resource: "tunic",
                        amount: 300
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 6
                    }
                ],
                parents: [9,10],
                children: [14,15]
            },
            {
                id: 13,
                name: "Rear Livestock",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 66700
                    },
                    {
                        resource: "stone_tablet",
                        amount: 955
                    },
                    {
                        resource: "gold_laurel",
                        amount: 410
                    },
                ],
                parents: [10,11],
                children: [16]
            },
            {
                id: 14,
                name: "War Machines",
                costs: [
                    {
                        resource: "research_point",
                        amount: 23
                    },
                    {
                        resource: "coins",
                        amount: 75300
                    },
                    {
                        resource: "tunic",
                        amount: 1330
                    },
                    {
                        resource: "silver_ring",
                        amount: 570
                    },
                    {
                        resource: "emerald",
                        amount: 8
                    }
                ],
                parents: [12],
                children: [17]
            },
            {
                id: 15,
                name: "Tactical Charge",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 79600
                    },
                    {
                        resource: "stone_tablet",
                        amount: 780
                    },
                    {
                        resource: "gold_laurel",
                        amount: 335
                    }
                ],
                parents: [12],
                children: [18]
            },
            {
                id: 16,
                name: "Sword Mastery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 25
                    },
                    {
                        resource: "coins",
                        amount: 77500
                    },
                    {
                        resource: "gold_laurel",
                        amount: 1355
                    },
                    {
                        resource: "stone_tablet",
                        amount: 580
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 7
                    }
                ],
                parents: [13],
                children: [19,20]
            },
            {
                id: 17,
                name: "Marks of History",
                costs: [
                    {
                        resource: "research_point",
                        amount: 27
                    },
                    {
                        resource: "coins",
                        amount: 105000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 655
                    },
                    {
                        resource: "gold_laurel",
                        amount: 280
                    }
                ],
                parents: [14],
                children: [21]
            },
            {
                id: 18,
                name: "Formation Drill",
                costs: [
                    {
                        resource: "research_point",
                        amount: 23
                    },
                    {
                        resource: "coins",
                        amount: 96800
                    },
                    {
                        resource: "tunic",
                        amount: 655
                    },
                    {
                        resource: "stone_tablet",
                        amount: 280
                    },
                    {
                        resource: "emerald",
                        amount: 8
                    }
                ],
                parents: [15],
                children: [22]
            },
            {
                id: 19,
                name: "Pilum Precision",
                costs: [
                    {
                        resource: "research_point",
                        amount: 27
                    },
                    {
                        resource: "coins",
                        amount: 60200
                    },
                    {
                        resource: "gold_laurel",
                        amount: 930
                    },
                    {
                        resource: "column",
                        amount: 400
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 8
                    }
                ],
                parents: [16],
                children: [23]
            },
            {
                id: 20,
                name: "Tributum Capitis",
                costs: [
                    {
                        resource: "research_point",
                        amount: 23
                    },
                    {
                        resource: "coins",
                        amount: 71000
                    },
                    {
                        resource: "tunic",
                        amount: 980
                    },
                    {
                        resource: "gold_laurel",
                        amount: 420
                    },
                    {
                        resource: "emerald",
                        amount: 8
                    }
                ],
                parents: [16],
                children: [23]
            },
            {
                id: 21,
                name: "Siege Engineering",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 108000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 905
                    },
                    {
                        resource: "tunic",
                        amount: 385
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 8
                    }
                ],
                parents: [17],
                children: [24]
            },
            {
                id: 22,
                name: "Roman Providence",
                costs: [
                    {
                        resource: "research_point",
                        amount: 21
                    },
                    {
                        resource: "coins",
                        amount: 77500
                    },
                    {
                        resource: "gold_laurel",
                        amount: 905
                    },
                    {
                        resource: "stone_tablet",
                        amount: 385
                    }
                ],
                parents: [18],
                children: [24]
            },
            {
                id: 23,
                name: "Rations Efficiency",
                costs: [
                    {
                        resource: "research_point",
                        amount: 27
                    },
                    {
                        resource: "coins",
                        amount: 71000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 855
                    },
                    {
                        resource: "gold_laurel",
                        amount: 365
                    },
                    {
                        resource: "emerald",
                        amount: 10
                    }
                ],
                parents: [19,20],
                children: [25]
            },
            {
                id: 24,
                name: "Lance Mastery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 24
                    },
                    {
                        resource: "coins",
                        amount: 114000
                    },
                    {
                        resource: "gold_laurel",
                        amount: 830
                    },
                    {
                        resource: "toga",
                        amount: 355
                    },
                ],
                parents: [21,22],
                children: [26]
            },
            {
                id: 25,
                name: "Compost",
                costs: [
                    {
                        resource: "research_point",
                        amount: 26
                    },
                    {
                        resource: "coins",
                        amount: 99000
                    },
                    {
                        resource: "tunic",
                        amount: 1005
                    },
                    {
                        resource: "stone_tablet",
                        amount: 430
                    },
                    {
                        resource: "emerald",
                        amount: 11
                    }
                ],
                parents: [23],
                children: [26]
            },
            {
                id: 26,
                name: "Domus",
                costs: [
                    {
                        resource: "research_point",
                        amount: 23
                    },
                    {
                        resource: "coins",
                        amount: 116000
                    },
                    {
                        resource: "tunic",
                        amount: 1255
                    },
                    {
                        resource: "column",
                        amount: 540
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 11
                    }
                ],
                parents: [24,25],
                children: [27,28,29]
            },
            {
                id: 27,
                name: "Watchtowers",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 64500
                    },
                    {
                        resource: "stone_tablet",
                        amount: 1280
                    },
                    {
                        resource: "gold_laurel",
                        amount: 550
                    },
                    {
                        resource: "emerald",
                        amount: 12
                    }
                ],
                parents: [26],
                children: [30]
            },
            {
                id: 28,
                name: "Terrain Mapping",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 73200
                    },
                    {
                        resource: "gold_laurel",
                        amount: 1230
                    },
                    {
                        resource: "tunic",
                        amount: 525
                    },
                ],
                parents: [26],
                children: [30]
            },
            {
                id: 29,
                name: "Soil Conservation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 20
                    },
                    {
                        resource: "coins",
                        amount: 94700
                    },
                    {
                        resource: "tunic",
                        amount: 830
                    },
                    {
                        resource: "silver_ring",
                        amount: 355
                    },
                    {
                        resource: "emerald",
                        amount: 13
                    }
                ],
                parents: [26],
                children: []
            },
            {
                id: 30,
                name: "Spear Throw Mastery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 110000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 1130
                    },
                    {
                        resource: "tunic",
                        amount: 485
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 11
                    }
                ],
                parents: [27,28,29],
                children: []
            },
        ]
    },
    {
        id: 6,
        era: "Roman Empire",
        image: "/research/intro/age_transition_roman_empire_main1.webp",
        technologies: [
            {
                id: 1,
                name: "Urbs Aeterna",
                costs: [
                    {
                        resource: "research_point",
                        amount: 33
                    },
                    {
                        resource: "coins",
                        amount: 170000
                    },
                    {
                        resource: "gold_laurel",
                        amount: 1365
                    },
                    {
                        resource: "tunic",
                        amount: 585
                    },
                ],
                parents: [],
                children: [2,3,4]
            },
            {
                id: 2,
                name: "Sagittarii",
                costs: [
                    {
                        resource: "research_point",
                        amount: 33
                    },
                    {
                        resource: "coins",
                        amount: 115000
                    },
                    {
                        resource: "tunic",
                        amount: 1240
                    },
                    {
                        resource: "stone_tablet",
                        amount: 530
                    },
                    {
                        resource: "amethyst",
                        amount: 2
                    }
                ],
                parents: [1],
                children: [5]
            },
            {
                id: 3,
                name: "Cape",
                costs: [
                    {
                        resource: "research_point",
                        amount: 28
                    },
                    {
                        resource: "coins",
                        amount: 111000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 865
                    },
                    {
                        resource: "gold_laurel",
                        amount: 370
                    },
                    {
                        resource: "roman_cameo_ring",
                        amount: 2
                    },
                ],
                parents: [1],
                children: [6,7]
            },
            {
                id: 4,
                name: "Legionary",
                costs: [
                    {
                        resource: "research_point",
                        amount: 30
                    },
                    {
                        resource: "coins",
                        amount: 132000
                    },
                    {
                        resource: "gold_laurel",
                        amount: 1300
                    },
                    {
                        resource: "tunic",
                        amount: 560
                    },
                ],
                parents: [1],
                children: [8]
            },
            {
                id: 5,
                name: "Fountains",
                costs: [
                    {
                        resource: "research_point",
                        amount: 34
                    },
                    {
                        resource: "coins",
                        amount: 128000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 835
                    },
                    {
                        resource: "gold_laurel",
                        amount: 360
                    },
                    {
                        resource: "amethyst",
                        amount: 4
                    }
                ],
                parents: [2],
                children: [9]
            },
            {
                id: 6,
                name: "Goblet",
                costs: [
                    {
                        resource: "research_point",
                        amount: 25
                    },
                    {
                        resource: "coins",
                        amount: 165000
                    },
                    {
                        resource: "cape",
                        amount: 930
                    },
                    {
                        resource: "gold_laurel",
                        amount: 400
                    },
                ],
                parents: [3],
                children: [9,10]
            },
            {
                id: 7,
                name: "Mosaic",
                costs: [
                    {
                        resource: "research_point",
                        amount: 30
                    },
                    {
                        resource: "coins",
                        amount: 161000
                    },
                    {
                        resource: "cape",
                        amount: 1145
                    },
                    {
                        resource: "stone_tablet",
                        amount: 490
                    },
                    {
                        resource: "roman_cameo_ring",
                        amount: 3
                    }
                ],
                parents: [3],
                children: [11]
            },
            {
                id: 8,
                name: "Princeps",
                costs: [
                    {
                        resource: "research_point",
                        amount: 29
                    },
                    {
                        resource: "coins",
                        amount: 140000
                    },,
                    {
                        resource: "tunic",
                        amount: 1055
                    },
                    {
                        resource: "stone_tablet",
                        amount: 450
                    },
                    {
                        resource: "amethyst",
                        amount: 4
                    },
                ],
                parents: [4],
                children: [11]
            },
            {
                id: 9,
                name: "Swinery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 23
                    },
                    {
                        resource: "coins",
                        amount: 152000
                    },
                    {
                        resource: "goblet",
                        amount: 1210
                    },
                    {
                        resource: "cape",
                        amount: 520
                    },
                    {
                        resource: "amethyst",
                        amount: 6
                    }
                ],
                parents: [5,6],
                children: [12]
            },
            {
                id: 10,
                name: "Turmae",
                costs: [
                    {
                        resource: "research_point",
                        amount: 24
                    },
                    {
                        resource: "coins",
                        amount: 181000
                    },
                    {
                        resource: "cape",
                        amount: 1455
                    },
                    {
                        resource: "goblet",
                        amount: 625
                    },
                ],
                parents: [6],
                children: [12]
            },
            {
                id: 11,
                name: "Ballistas",
                costs: [
                    {
                        resource: "research_point",
                        amount: 33
                    },
                    {
                        resource: "coins",
                        amount: 161000
                    },
                    {
                        resource: "mosaic",
                        amount: 1270
                    },
                    {
                        resource: "cape",
                        amount: 545
                    },
                    {
                        resource: "amethyst",
                        amount: 6
                    },
                ],
                parents: [7,8],
                children: [12]
            },
            {
                id: 12,
                name: "Alloyed Arrowheads",
                costs: [
                    {
                        resource: "research_point",
                        amount: 32
                    },
                    {
                        resource: "coins",
                        amount: 120000
                    },
                    {
                        resource: "goblet",
                        amount: 1055
                    },
                    {
                        resource: "mosaic",
                        amount: 450
                    },
                    {
                        resource: "roman_cameo_ring",
                        amount: 7
                    }
                ],
                parents: [9,10,11],
                children: [13,14,15]
            },
            {
                id: 13,
                name: "Villa Rustica",
                costs: [
                    {
                        resource: "research_point",
                        amount: 30
                    },
                    {
                        resource: "coins",
                        amount: 173000
                    },
                    {
                        resource: "mosaic",
                        amount: 1210
                    },
                    {
                        resource: "cape",
                        amount: 520
                    },
                    {
                        resource: "roman_cameo_ring",
                        amount: 7
                    },
                ],
                parents: [12],
                children: [16]
            },
            {
                id: 14,
                name: "Shieldwall Fortification",
                costs: [
                    {
                        resource: "research_point",
                        amount: 26
                    },
                    {
                        resource: "coins",
                        amount: 140000
                    },
                    {
                        resource: "goblet",
                        amount: 1365
                    },
                    {
                        resource: "gold_laurel",
                        amount: 585
                    },
                    {
                        resource: "amethyst",
                        amount: 8
                    }
                ],
                parents: [12],
                children: [17]
            },
            {
                id: 15,
                name: "Tenant Farming",
                costs: [
                    {
                        resource: "research_point",
                        amount: 29
                    },
                    {
                        resource: "coins",
                        amount: 185000
                    },
                    {
                        resource: "cape",
                        amount: 990
                    },
                    {
                        resource: "goblet",
                        amount: 425
                    }
                ],
                parents: [12],
                children: [18]
            },
            {
                id: 16,
                name: "Forums",
                costs: [
                    {
                        resource: "research_point",
                        amount: 26
                    },
                    {
                        resource: "coins",
                        amount: 136000
                    },
                    {
                        resource: "cape",
                        amount: 1610
                    },
                    {
                        resource: "mosaic",
                        amount: 690
                    },
                    {
                        resource: "roman_cameo_ring",
                        amount: 8
                    }
                ],
                parents: [13],
                children: [19]
            },
            {
                id: 17,
                name: "Enhanced Torsion",
                costs: [
                    {
                        resource: "research_point",
                        amount: 38
                    },
                    {
                        resource: "coins",
                        amount: 124000
                    },
                    {
                        resource: "mosaic",
                        amount: 1580
                    },
                    {
                        resource: "goblet",
                        amount: 675
                    },
                    {
                        resource: "amethyst",
                        amount: 11
                    },
                ],
                parents: [14],
                children: [20]
            },
            {
                id: 18,
                name: "Field Medicines",
                costs: [
                    {
                        resource: "research_point",
                        amount: 34
                    },
                    {
                        resource: "coins",
                        amount: 214000
                    },
                    {
                        resource: "goblet",
                        amount: 1240
                    },
                    {
                        resource: "cape",
                        amount: 530
                    },
                    {
                        resource: "amethyst",
                        amount: 13
                    }
                ],
                parents: [15],
                children: [20]
            },
            {
                id: 19,
                name: "Improved Stirrups",
                costs: [
                    {
                        resource: "research_point",
                        amount: 35
                    },
                    {
                        resource: "coins",
                        amount: 136000
                    },
                    {
                        resource: "goblet",
                        amount: 1520
                    },
                    {
                        resource: "tunic",
                        amount: 650
                    },
                    {
                        resource: "roman_cameo_ring",
                        amount: 8
                    }
                ],
                parents: [16],
                children: [21,22]
            },
            {
                id: 20,
                name: "Centurions Aim",
                costs: [
                    {
                        resource: "research_point",
                        amount: 26
                    },
                    {
                        resource: "coins",
                        amount: 210000
                    },
                    {
                        resource: "cape",
                        amount: 900
                    },
                    {
                        resource: "mosaic",
                        amount: 385
                    },
                    {
                        resource: "roman_cameo_ring",
                        amount: 10
                    }
                ],
                parents: [17,18],
                children: [22,23,24]
            },
            {
                id: 21,
                name: "Villa Urbana",
                costs: [
                    {
                        resource: "research_point",
                        amount: 24
                    },
                    {
                        resource: "coins",
                        amount: 210000
                    },
                    {
                        resource: "mosaic",
                        amount: 1300
                    },
                    {
                        resource: "stone_tablet",
                        amount: 560
                    },
                ],
                parents: [19],
                children: [25]
            },
            {
                id: 22,
                name: "Quick Reload System",
                costs: [
                    {
                        resource: "research_point",
                        amount: 30
                    },
                    {
                        resource: "coins",
                        amount: 181000
                    },
                    {
                        resource: "goblet",
                        amount: 1055
                    },
                    {
                        resource: "tunic",
                        amount: 450
                    },
                    {
                        resource: "amethyst",
                        amount: 13
                    },
                ],
                parents: [19,20],
                children: [26]
            },
            {
                id: 23,
                name: "Public Gardens",
                costs: [
                    {
                        resource: "research_point",
                        amount: 28
                    },
                    {
                        resource: "coins",
                        amount: 128000
                    },
                    {
                        resource: "mosaic",
                        amount: 1580
                    },
                    {
                        resource: "cape",
                        amount: 675
                    },
                ],
                parents: [20],
                children: [26]
            },
            {
                id: 24,
                name: "Centurion Command",
                costs: [
                    {
                        resource: "research_point",
                        amount: 29
                    },
                    {
                        resource: "coins",
                        amount: 194000
                    },
                    {
                        resource: "cape",
                        amount: 960
                    },
                    {
                        resource: "goblet",
                        amount: 410
                    },
                    {
                        resource: "roman_cameo_ring",
                        amount: 13
                    },
                ],
                parents: [20],
                children: [27]
            },
            {
                id: 25,
                name: "Underfloor Heating",
                costs: [
                    {
                        resource: "research_point",
                        amount: 36
                    },
                    {
                        resource: "coins",
                        amount: 140000
                    },
                    {
                        resource: "goblet",
                        amount: 1020
                    },
                    {
                        resource: "mosaic",
                        amount: 440
                    },
                    {
                        resource: "amethyst",
                        amount: 15
                    }
                ],
                parents: [21],
                children: [28]
            },
            {
                id: 26,
                name: "Improved Gladius",
                costs: [
                    {
                        resource: "research_point",
                        amount: 25
                    },
                    {
                        resource: "coins",
                        amount: 202000
                    },
                    {
                        resource: "mosaic",
                        amount: 1395
                    },
                    {
                        resource: "goblet",
                        amount: 595
                    },
                    {
                        resource: "amethyst",
                        amount: 16
                    }
                ],
                parents: [22,23],
                children: [28]
            },
            {
                id: 27,
                name: "Circus Maximus",
                costs: [
                    {
                        resource: "research_point",
                        amount: 34
                    },
                    {
                        resource: "coins",
                        amount: 210000
                    },
                    {
                        resource: "goblet",
                        amount: 960
                    },
                    {
                        resource: "mosaic",
                        amount: 410
                    },
                ],
                parents: [24],
                children: [28]
            },
            {
                id: 28,
                name: "Pasture Improvement",
                costs: [
                    {
                        resource: "research_point",
                        amount: 31
                    },
                    {
                        resource: "coins",
                        amount: 165000
                    },
                    {
                        resource: "goblet",
                        amount: 1580
                    },
                    {
                        resource: "stone_tablet",
                        amount: 675
                    },
                    {
                        resource: "roman_cameo_ring",
                        amount: 17
                    },
                ],
                parents: [25,26,27],
                children: [29]
            },
            {
                id: 29,
                name: "Horseshoe Alloys",
                costs: [
                    {
                        resource: "research_point",
                        amount: 34
                    },
                    {
                        resource: "coins",
                        amount: 169000
                    },
                    {
                        resource: "mosaic",
                        amount: 1020
                    },
                    {
                        resource: "goblet",
                        amount: 440
                    },
                    {
                        resource: "amethyst",
                        amount: 20
                    }
                ],
                parents: [28],
                children: []
            },
        ]
    },
    {
        id: 7,
        era: "Byzantine Era",
        image: "/research/intro/age_transition_byzantine_era_main1.webp",
        technologies: [
            {
                id: 1,
                name: "Byzantium",
                costs: [
                    {
                        resource: "research_point",
                        amount: 39
                    },
                    {
                        resource: "coins",
                        amount: 266000
                    },
                    {
                        resource: "cape",
                        amount: 1320
                    },
                    {
                        resource: "mosaic",
                        amount: 570
                    },
                ],
                parents: [],
                children: [2,3,4]
            },
            {
                id: 2,
                name: "Carpenter",
                costs: [
                    {
                        resource: "research_point",
                        amount: 41
                    },
                    {
                        resource: "coins",
                        amount: 223000
                    },
                    {
                        resource: "goblet",
                        amount: 410
                    },
                    {
                        resource: "opal",
                        amount: 2
                    },
                ],
                parents: [1],
                children: [5]
            },
            {
                id: 3,
                name: "Spice Merchant",
                costs: [
                    {
                        resource: "research_point",
                        amount: 46
                    },
                    {
                        resource: "coins",
                        amount: 309000
                    },
                    {
                        resource: "mosaic",
                        amount: 1200
                    },
                    {
                        resource: "goblet",
                        amount: 520
                    },
                    {
                        resource: "opal",
                        amount: 3
                    },
                ],
                parents: [1],
                children: [6]
            },
            {
                id: 4,
                name: "Scribe",
                costs: [
                    {
                        resource: "research_point",
                        amount: 40
                    },
                    {
                        resource: "coins",
                        amount: 240000
                    },
                    {
                        resource: "goblet",
                        amount: 1090
                    },
                    {
                        resource: "cape",
                        amount: 470
                    },
                    {
                        resource: "byzantine_ewer",
                        amount: 2
                    },
                ],
                parents: [1],
                children: [7]
            },
            {
                id: 5,
                name: "Bucellarii",
                costs: [
                    {
                        resource: "research_point",
                        amount: 37
                    },
                    {
                        resource: "coins",
                        amount: 326000
                    },
                    {
                        resource: "planks",
                        amount: 370
                    },
                    {
                        resource: "goblet",
                        amount: 160
                    },
                    {
                        resource: "opal",
                        amount: 5
                    }
                ],
                parents: [2],
                children: [8]
            },
            {
                id: 6,
                name: "Saracen Archers",
                costs: [
                    {
                        resource: "research_point",
                        amount: 30
                    },
                    {
                        resource: "coins",
                        amount: 249000
                    },
                    {
                        resource: "pepper",
                        amount: 250
                    },
                    {
                        resource: "mosaic",
                        amount: 110
                    },
                    {
                        resource: "opal",
                        amount: 5
                    },
                ],
                parents: [3],
                children: [8,9]
            },
            {
                id: 7,
                name: "Catapult",
                costs: [
                    {
                        resource: "research_point",
                        amount: 41
                    },
                    {
                        resource: "coins",
                        amount: 249000
                    },
                    {
                        resource: "parchment",
                        amount: 390
                    },
                    {
                        resource: "mosaic",
                        amount: 170
                    },
                    {
                        resource: "opal",
                        amount: 8
                    }
                ],
                parents: [4],
                children: [9]
            },
            {
                id: 8,
                name: "Trapezites",
                costs: [
                    {
                        resource: "research_point",
                        amount: 39
                    },
                    {
                        resource: "coins",
                        amount: 360000
                    },,
                    {
                        resource: "pepper",
                        amount: 740
                    },
                    {
                        resource: "planks",
                        amount: 320
                    },
                    {
                        resource: "byzantine_ewer",
                        amount: 7
                    },
                ],
                parents: [5,6],
                children: [10,11]
            },
            {
                id: 9,
                name: "Jovians",
                costs: [
                    {
                        resource: "research_point",
                        amount: 36
                    },
                    {
                        resource: "coins",
                        amount: 343000
                    },
                    {
                        resource: "parchment",
                        amount: 980
                    },
                    {
                        resource: "pepper",
                        amount: 420
                    },
                ],
                parents: [6,7],
                children: [12]
            },
            {
                id: 10,
                name: "Pendentive Dome",
                costs: [
                    {
                        resource: "research_point",
                        amount: 50
                    },
                    {
                        resource: "coins",
                        amount: 386000
                    },
                    {
                        resource: "planks",
                        amount: 860
                    },
                    {
                        resource: "cape",
                        amount: 370
                    },
                    {
                        resource: "opal",
                        amount: 8
                    },
                ],
                parents: [8],
                children: [13]
            },
            {
                id: 11,
                name: "Forquier",
                costs: [
                    {
                        resource: "research_point",
                        amount: 35
                    },
                    {
                        resource: "coins",
                        amount: 309000
                    },
                    {
                        resource: "pepper",
                        amount: 1470
                    },
                    {
                        resource: "planks",
                        amount: 630
                    },
                    {
                        resource: "byzantine_ewer",
                        amount: 7
                    },
                ],
                parents: [8],
                children: [14]
            },
            {
                id: 12,
                name: "Architekton",
                costs: [
                    {
                        resource: "research_point",
                        amount: 40
                    },
                    {
                        resource: "coins",
                        amount: 223000
                    },
                    {
                        resource: "parchment",
                        amount: 1170
                    },
                    {
                        resource: "pepper",
                        amount: 500
                    },
                    {
                        resource: "opal",
                        amount: 11
                    }
                ],
                parents: [9],
                children: [15,16]
            },
            {
                id: 13,
                name: "Improved Lorica",
                costs: [
                    {
                        resource: "research_point",
                        amount: 47
                    },
                    {
                        resource: "coins",
                        amount: 378000
                    },
                    {
                        resource: "planks",
                        amount: 1640
                    },
                    {
                        resource: "parchment",
                        amount: 700
                    },
                    {
                        resource: "byzantine_ewer",
                        amount: 11
                    },
                ],
                parents: [10],
                children: [17]
            },
            {
                id: 14,
                name: "Theodosian Walls",
                costs: [
                    {
                        resource: "research_point",
                        amount: 34
                    },
                    {
                        resource: "coins",
                        amount: 438000
                    },
                    {
                        resource: "parchment",
                        amount: 1870
                    },
                    {
                        resource: "goblet",
                        amount: 800
                    },
                ],
                parents: [11],
                children: [18]
            },
            {
                id: 15,
                name: "Polyculture",
                costs: [
                    {
                        resource: "research_point",
                        amount: 45
                    },
                    {
                        resource: "coins",
                        amount: 318000
                    },
                    {
                        resource: "pepper",
                        amount: 1310
                    },
                    {
                        resource: "parchment",
                        amount: 560
                    },
                    {
                        resource: "opal",
                        amount: 12
                    },
                ],
                parents: [12],
                children: [18]
            },
            {
                id: 16,
                name: "Precision Armguards",
                costs: [
                    {
                        resource: "research_point",
                        amount: 40
                    },
                    {
                        resource: "coins",
                        amount: 275000
                    },
                    {
                        resource: "planks",
                        amount: 1540
                    },
                    {
                        resource: "pepper",
                        amount: 660
                    },
                    {
                        resource: "opal",
                        amount: 12
                    }
                ],
                parents: [12],
                children: [19]
            },
            {
                id: 17,
                name: "Crossgroined Vault",
                costs: [
                    {
                        resource: "research_point",
                        amount: 32
                    },
                    {
                        resource: "coins",
                        amount: 343000
                    },
                    {
                        resource: "pepper",
                        amount: 1260
                    },
                    {
                        resource: "mosaic",
                        amount: 540
                    },
                    {
                        resource: "byzantine_ewer",
                        amount: 12
                    },
                ],
                parents: [13],
                children: [20]
            },
            {
                id: 18,
                name: "Byzantine Steeds",
                costs: [
                    {
                        resource: "research_point",
                        amount: 31
                    },
                    {
                        resource: "coins",
                        amount: 300000
                    },
                    {
                        resource: "parchment",
                        amount: 2430
                    },
                    {
                        resource: "planks",
                        amount: 1040
                    },
                ],
                parents: [14,15],
                children: [20,21]
            },
            {
                id: 19,
                name: "Advanced Counterweights",
                costs: [
                    {
                        resource: "research_point",
                        amount: 43
                    },
                    {
                        resource: "coins",
                        amount: 412000
                    },
                    {
                        resource: "parchment",
                        amount: 1880
                    },
                    {
                        resource: "pepper",
                        amount: 810
                    },
                    {
                        resource: "byzantine_ewer",
                        amount: 12
                    }
                ],
                parents: [16],
                children: [22]
            },
            {
                id: 20,
                name: "Wheeled Plough",
                costs: [
                    {
                        resource: "research_point",
                        amount: 37
                    },
                    {
                        resource: "coins",
                        amount: 378000
                    },
                    {
                        resource: "planks",
                        amount: 1910
                    },
                    {
                        resource: "parchment",
                        amount: 820
                    },
                    {
                        resource: "opal",
                        amount: 15
                    }
                ],
                parents: [17,18],
                children: [22]
            },
            {
                id: 21,
                name: "Counter Cavalry Tactics",
                costs: [
                    {
                        resource: "research_point",
                        amount: 45
                    },
                    {
                        resource: "coins",
                        amount: 232000
                    },
                    {
                        resource: "pepper",
                        amount: 1960
                    },
                    {
                        resource: "planks",
                        amount: 840
                    },
                ],
                parents: [18],
                children: [23,24]
            },
            {
                id: 22,
                name: "Gregorian Calendar",
                costs: [
                    {
                        resource: "research_point",
                        amount: 40
                    },
                    {
                        resource: "coins",
                        amount: 206000
                    },
                    {
                        resource: "planks",
                        amount: 1720
                    },
                    {
                        resource: "cape",
                        amount: 740
                    },
                    {
                        resource: "byzantine_ewer",
                        amount: 13
                    },
                ],
                parents: [19],
                children: [24]
            },
            {
                id: 23,
                name: "Trench Warfare",
                costs: [
                    {
                        resource: "research_point",
                        amount: 37
                    },
                    {
                        resource: "coins",
                        amount: 472000
                    },
                    {
                        resource: "pepper",
                        amount: 1900
                    },
                    {
                        resource: "parchment",
                        amount: 820
                    },
                    {
                        resource: "opal",
                        amount: 16
                    },
                ],
                parents: [20,21],
                children: [25,26,27]
            },
            {
                id: 24,
                name: "Flight Path Analysis",
                costs: [
                    {
                        resource: "research_point",
                        amount: 37
                    },
                    {
                        resource: "coins",
                        amount: 300000
                    },
                    {
                        resource: "parchment",
                        amount: 1960
                    },
                    {
                        resource: "goblet",
                        amount: 840
                    },
                ],
                parents: [21,22],
                children: [27,28]
            },
            {
                id: 25,
                name: "Shielded Saddles",
                costs: [
                    {
                        resource: "research_point",
                        amount: 32
                    },
                    {
                        resource: "coins",
                        amount: 309000
                    },
                    {
                        resource: "planks",
                        amount: 1720
                    },
                    {
                        resource: "pepper",
                        amount: 740
                    },
                    {
                        resource: "byzantine_ewer",
                        amount: 11
                    }
                ],
                parents: [23],
                children: [29]
            },
            {
                id: 26,
                name: "Tillage",
                costs: [
                    {
                        resource: "research_point",
                        amount: 45
                    },
                    {
                        resource: "coins",
                        amount: 343000
                    },
                    {
                        resource: "pepper",
                        amount: 2940
                    },
                    {
                        resource: "cape",
                        amount: 1260
                    },
                    {
                        resource: "opal",
                        amount: 20
                    }
                ],
                parents: [23],
                children: [29,30]
            },
            {
                id: 27,
                name: "Mortar",
                costs: [
                    {
                        resource: "research_point",
                        amount: 50
                    },
                    {
                        resource: "coins",
                        amount: 266000
                    },
                    {
                        resource: "parchment",
                        amount: 2210
                    },
                    {
                        resource: "planks",
                        amount: 950
                    },
                ],
                parents: [23,24],
                children: [30,31]
            },
            {
                id: 28,
                name: "Mobility Innovations",
                costs: [
                    {
                        resource: "research_point",
                        amount: 43
                    },
                    {
                        resource: "coins",
                        amount: 438000
                    },
                    {
                        resource: "planks",
                        amount: 2450
                    },
                    {
                        resource: "parchment",
                        amount: 1050
                    },
                    {
                        resource: "byzantine_ewer",
                        amount: 13
                    },
                ],
                parents: [24],
                children: [31]
            },
            {
                id: 29,
                name: "Water Cistern",
                costs: [
                    {
                        resource: "research_point",
                        amount: 40
                    },
                    {
                        resource: "coins",
                        amount: 343000
                    },
                    {
                        resource: "pepper",
                        amount: 2700
                    },
                    {
                        resource: "mosaic",
                        amount: 1160
                    },
                    {
                        resource: "opal",
                        amount: 20
                    }
                ],
                parents: [25,26],
                children: []
            },
            {
                id: 30,
                name: "Chainmail Reinforcement",
                costs: [
                    {
                        resource: "research_point",
                        amount: 47
                    },
                    {
                        resource: "coins",
                        amount: 240000
                    },
                    {
                        resource: "parchment",
                        amount: 1910
                    },
                    {
                        resource: "planks",
                        amount: 820
                    },
                    {
                        resource: "byzantine_ewer",
                        amount: 20
                    }
                ],
                parents: [26,27],
                children: []
            },
            {
                id: 31,
                name: "Domical Vault",
                costs: [
                    {
                        resource: "research_point",
                        amount: 45
                    },
                    {
                        resource: "coins",
                        amount: 300000
                    },
                    {
                        resource: "planks",
                        amount: 2940
                    },
                    {
                        resource: "pepper",
                        amount: 1260
                    },
                    {
                        resource: "opal",
                        amount: 26
                    }
                ],
                parents: [27,28],
                children: []
            },
        ]
    },
    {
        id: 8,
        era: "Age of the Franks",
        image: "/research/intro/age_transition_franks_main1.webp",
        technologies: [
            {
                id: 1,
                name: "Regnum Francorum",
                costs: [
                    {
                        resource: "research_point",
                        amount: 43
                    },
                    {
                        resource: "coins",
                        amount: 357000
                    },
                    {
                        resource: "parchment",
                        amount: 1830
                    },
                    {
                        resource: "planks",
                        amount: 780
                    },
                ],
                parents: [],
                children: [2,3,4]
            },
            {
                id: 2,
                name: "Ink",
                costs: [
                    {
                        resource: "research_point",
                        amount: 51
                    },
                    {
                        resource: "coins",
                        amount: 371000
                    },
                    {
                        resource: "planks",
                        amount: 1390
                    },
                    {
                        resource: "pepper",
                        amount: 600
                    },
                    {
                        resource: "spessartine",
                        amount: 3
                    },
                ],
                parents: [1],
                children: [5]
            },
            {
                id: 3,
                name: "Carolingian Catapult",
                costs: [
                    {
                        resource: "research_point",
                        amount: 58
                    },
                    {
                        resource: "coins",
                        amount: 300000
                    },
                    {
                        resource: "pepper",
                        amount: 2810
                    },
                    {
                        resource: "parchment",
                        amount: 1200
                    },
                ],
                parents: [1],
                children: [6]
            },
            {
                id: 4,
                name: "Cartwheel",
                costs: [
                    {
                        resource: "research_point",
                        amount: 59
                    },
                    {
                        resource: "coins",
                        amount: 457000
                    },
                    {
                        resource: "parchment",
                        amount: 2370
                    },
                    {
                        resource: "pepper",
                        amount: 1020
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 3
                    },
                ],
                parents: [1],
                children: [7,8]
            },
            {
                id: 5,
                name: "Villers",
                costs: [
                    {
                        resource: "research_point",
                        amount: 41
                    },
                    {
                        resource: "coins",
                        amount: 414000
                    },
                    {
                        resource: "ink",
                        amount: 1090
                    },
                    {
                        resource: "planks",
                        amount: 470
                    },
                    {
                        resource: "spessartine",
                        amount: 5
                    }
                ],
                parents: [2],
                children: [9]
            },
            {
                id: 6,
                name: "Halberds",
                costs: [
                    {
                        resource: "research_point",
                        amount: 53
                    },
                    {
                        resource: "coins",
                        amount: 528000
                    },
                    {
                        resource: "planks",
                        amount: 2350
                    },
                    {
                        resource: "parchment",
                        amount: 1010
                    },
                ],
                parents: [3],
                children: [10,11]
            },
            {
                id: 7,
                name: "Salt",
                costs: [
                    {
                        resource: "research_point",
                        amount: 61
                    },
                    {
                        resource: "coins",
                        amount: 585000
                    },
                    {
                        resource: "cartwheel",
                        amount: 1310
                    },
                    {
                        resource: "pepper",
                        amount: 560
                    },
                    {
                        resource: "spessartine",
                        amount: 7
                    }
                ],
                parents: [4],
                children: [11]
            },
            {
                id: 8,
                name: "Franc Axe Throwers",
                costs: [
                    {
                        resource: "research_point",
                        amount: 64
                    },
                    {
                        resource: "coins",
                        amount: 600000
                    },,
                    {
                        resource: "cartwheel",
                        amount: 1530
                    },
                    {
                        resource: "planks",
                        amount: 660
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 7
                    },
                ],
                parents: [4],
                children: [11]
            },
            {
                id: 9,
                name: "Aristocracy",
                costs: [
                    {
                        resource: "research_point",
                        amount: 54
                    },
                    {
                        resource: "coins",
                        amount: 643000
                    },
                    {
                        resource: "ink",
                        amount: 1370
                    },
                    {
                        resource: "parchment",
                        amount: 590
                    },
                    {
                        resource: "spessartine",
                        amount: 12
                    },
                ],
                parents: [5],
                children: [12,13]
            },
            {
                id: 10,
                name: "Skirmishers",
                costs: [
                    {
                        resource: "research_point",
                        amount: 43
                    },
                    {
                        resource: "coins",
                        amount: 628000
                    },
                    {
                        resource: "pepper",
                        amount: 4740
                    },
                    {
                        resource: "planks",
                        amount: 2030
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 10
                    },
                ],
                parents: [6],
                children: [13,14]
            },
            {
                id: 11,
                name: "Caballarii",
                costs: [
                    {
                        resource: "research_point",
                        amount: 69
                    },
                    {
                        resource: "coins",
                        amount: 671000
                    },
                    {
                        resource: "salt",
                        amount: 2230
                    },
                    {
                        resource: "cartwheel",
                        amount: 960
                    },
                    {
                        resource: "spessartine",
                        amount: 12
                    },
                ],
                parents: [6,7,8],
                children: [14,15]
            },
            {
                id: 12,
                name: "Spades",
                costs: [
                    {
                        resource: "research_point",
                        amount: 58
                    },
                    {
                        resource: "coins",
                        amount: 628000
                    },
                    {
                        resource: "salt",
                        amount: 3460
                    },
                    {
                        resource: "ink",
                        amount: 1480
                    },
                ],
                parents: [9],
                children: [16]
            },
            {
                id: 13,
                name: "Banner Standardization",
                costs: [
                    {
                        resource: "research_point",
                        amount: 42
                    },
                    {
                        resource: "coins",
                        amount: 378000
                    },
                    {
                        resource: "ink",
                        amount: 1840
                    },
                    {
                        resource: "planks",
                        amount: 790
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 10
                    },
                ],
                parents: [9,10],
                children: [16]
            },
            {
                id: 14,
                name: "Ballistic Innovation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 64
                    },
                    {
                        resource: "coins",
                        amount: 742000
                    },
                    {
                        resource: "salt",
                        amount: 4330
                    },
                    {
                        resource: "cartwheel",
                        amount: 1860
                    },
                    {
                        resource: "spessartine",
                        amount: 13
                    },
                ],
                parents: [10,11],
                children: [16,17]
            },
            {
                id: 15,
                name: "Lingua Franca",
                costs: [
                    {
                        resource: "research_point",
                        amount: 68
                    },
                    {
                        resource: "coins",
                        amount: 742000
                    },
                    {
                        resource: "cartwheel",
                        amount: 3310
                    },
                    {
                        resource: "salt",
                        amount: 1420
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 12
                    },
                ],
                parents: [11],
                children: [17]
            },
            {
                id: 16,
                name: "Improved Reins",
                costs: [
                    {
                        resource: "research_point",
                        amount: 68
                    },
                    {
                        resource: "coins",
                        amount: 457000
                    },
                    {
                        resource: "ink",
                        amount: 4510
                    },
                    {
                        resource: "planks",
                        amount: 1940
                    },
                    {
                        resource: "spessartine",
                        amount: 19
                    }
                ],
                parents: [12,13,14],
                children: [18]
            },
            {
                id: 17,
                name: "Tactical Hurling",
                costs: [
                    {
                        resource: "research_point",
                        amount: 59
                    },
                    {
                        resource: "coins",
                        amount: 343000
                    },
                    {
                        resource: "salt",
                        amount: 3740
                    },
                    {
                        resource: "ink",
                        amount: 1600
                    },
                    {
                        resource: "spessartine",
                        amount: 19
                    },
                ],
                parents: [14,15],
                children: [18]
            },
            {
                id: 18,
                name: "Armor Adaptation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 43
                    },
                    {
                        resource: "coins",
                        amount: 685000
                    },
                    {
                        resource: "cartwheel",
                        amount: 4330
                    },
                    {
                        resource: "parchment",
                        amount: 1860
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 13
                    },
                ],
                parents: [16,17],
                children: [19,20,21]
            },
            {
                id: 19,
                name: "Production Boom",
                costs: [
                    {
                        resource: "research_point",
                        amount: 61
                    },
                    {
                        resource: "coins",
                        amount: 443000
                    },
                    {
                        resource: "ink",
                        amount: 6550
                    },
                    {
                        resource: "salt",
                        amount: 2810
                    },
                    {
                        resource: "spessartine",
                        amount: 19
                    }
                ],
                parents: [18],
                children: [22]
            },
            {
                id: 20,
                name: "Advanced Fodder",
                costs: [
                    {
                        resource: "research_point",
                        amount: 63
                    },
                    {
                        resource: "coins",
                        amount: 700000
                    },
                    {
                        resource: "salt",
                        amount: 4230
                    },
                    {
                        resource: "cartwheel",
                        amount: 1820
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 13
                    }
                ],
                parents: [18],
                children: [23]
            },
            {
                id: 21,
                name: "Pottery Wheel",
                costs: [
                    {
                        resource: "research_point",
                        amount: 48
                    },
                    {
                        resource: "coins",
                        amount: 386000
                    },
                    {
                        resource: "cartwheel",
                        amount: 3980
                    },
                    {
                        resource: "pepper",
                        amount: 1710
                    },
                    {
                        resource: "spessartine",
                        amount: 21
                    },
                ],
                parents: [18],
                children: [24]
            },
            {
                id: 22,
                name: "Urban Combat Prowess",
                costs: [
                    {
                        resource: "research_point",
                        amount: 64
                    },
                    {
                        resource: "coins",
                        amount: 714000
                    },
                    {
                        resource: "cartwheel",
                        amount: 3280
                    },
                    {
                        resource: "ink",
                        amount: 1410
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 13
                    },
                ],
                parents: [19],
                children: [25]
            },
            {
                id: 23,
                name: "Scythes",
                costs: [
                    {
                        resource: "research_point",
                        amount: 51
                    },
                    {
                        resource: "coins",
                        amount: 800000
                    },
                    {
                        resource: "ink",
                        amount: 5220
                    },
                    {
                        resource: "salt",
                        amount: 2240
                    },
                    {
                        resource: "spessartine",
                        amount: 21
                    },
                ],
                parents: [20],
                children: [26,27]
            },
            {
                id: 24,
                name: "Siege Engine Tactics",
                costs: [
                    {
                        resource: "research_point",
                        amount: 41
                    },
                    {
                        resource: "coins",
                        amount: 557000
                    },
                    {
                        resource: "salt",
                        amount: 5180
                    },
                    {
                        resource: "ink",
                        amount: 2220
                    },
                    {
                        resource: "spessartine",
                        amount: 21
                    },
                ],
                parents: [21],
                children: [28]
            },
            {
                id: 25,
                name: "Elite Rider Training",
                costs: [
                    {
                        resource: "research_point",
                        amount: 56
                    },
                    {
                        resource: "coins",
                        amount: 628000
                    },
                    {
                        resource: "ink",
                        amount: 4150
                    },
                    {
                        resource: "cartwheel",
                        amount: 1780
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 16
                    }
                ],
                parents: [22],
                children: [29]
            },
            {
                id: 26,
                name: "Goat Herds",
                costs: [
                    {
                        resource: "research_point",
                        amount: 59
                    },
                    {
                        resource: "coins",
                        amount: 571000
                    },
                    {
                        resource: "salt",
                        amount: 5780
                    },
                    {
                        resource: "parchment",
                        amount: 2480
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 16
                    }
                ],
                parents: [23],
                children: [29]
            },
            {
                id: 27,
                name: "Patrimony",
                costs: [
                    {
                        resource: "research_point",
                        amount: 66
                    },
                    {
                        resource: "coins",
                        amount: 671000
                    },
                    {
                        resource: "cartwheel",
                        amount: 7230
                    },
                    {
                        resource: "salt",
                        amount: 3100
                    },
                    {
                        resource: "spessartine",
                        amount: 24
                    },
                ],
                parents: [23],
                children: [30]
            },
            {
                id: 28,
                name: "Reinforced Handles",
                costs: [
                    {
                        resource: "research_point",
                        amount: 58
                    },
                    {
                        resource: "coins",
                        amount: 828000
                    },
                    {
                        resource: "salt",
                        amount: 5280
                    },
                    {
                        resource: "ink",
                        amount: 2270
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 16
                    },
                ],
                parents: [24],
                children: [30]
            },
            {
                id: 29,
                name: "Battle Axe Mastery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 33
                    },
                    {
                        resource: "coins",
                        amount: 428000
                    },
                    {
                        resource: "cartwheel",
                        amount: 5460
                    },
                    {
                        resource: "ink",
                        amount: 2340
                    },
                    {
                        resource: "spessartine",
                        amount: 26
                    }
                ],
                parents: [25,26],
                children: []
            },
            {
                id: 30,
                name: "Leges Salica",
                costs: [
                    {
                        resource: "research_point",
                        amount: 59
                    },
                    {
                        resource: "coins",
                        amount: 757000
                    },
                    {
                        resource: "ink",
                        amount: 4370
                    },
                    {
                        resource: "cartwheel",
                        amount: 1870
                    },
                    {
                        resource: "frankish_fibula",
                        amount: 20
                    }
                ],
                parents: [27,28],
                children: []
            },
        ]
    },
    {
        id: 9,
        era: "Feudal Age",
        image: "/research/intro/age_transition_feudal_age_main1.webp",
        technologies: [
            {
                id: 1,
                name: "Feudalism",
                costs: [
                    {
                        resource: "research_point",
                        amount: 46
                    },
                    {
                        resource: "coins",
                        amount: 826000
                    },
                    {
                        resource: "salt",
                        amount: 3030
                    },
                    {
                        resource: "ink",
                        amount: 1300
                    },
                ],
                parents: [],
                children: [2,3,4,5]
            },
            {
                id: 2,
                name: "Barrel",
                costs: [
                    {
                        resource: "research_point",
                        amount: 46
                    },
                    {
                        resource: "coins",
                        amount: 705000
                    },
                    {
                        resource: "cartwheel",
                        amount: 1850
                    },
                    {
                        resource: "salt",
                        amount: 790
                    },
                    {
                        resource: "agate",
                        amount: 3
                    },
                ],
                parents: [1],
                children: [6]
            },
            {
                id: 3,
                name: "Herbs",
                costs: [
                    {
                        resource: "research_point",
                        amount: 53
                    },
                    {
                        resource: "coins",
                        amount: 564000
                    },
                    {
                        resource: "ink",
                        amount: 2220
                    },
                    {
                        resource: "cartwheel",
                        amount: 950
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 3
                    },
                ],
                parents: [1],
                children: [7]
            },
            {
                id: 4,
                name: "Longbowmen",
                costs: [
                    {
                        resource: "research_point",
                        amount: 43
                    },
                    {
                        resource: "coins",
                        amount: 745000
                    },
                    {
                        resource: "cartwheel",
                        amount: 3030
                    },
                    {
                        resource: "ink",
                        amount: 1300
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 6
                    },
                ],
                parents: [1],
                children: [8]
            },
            {
                id: 5,
                name: "Manuscript",
                costs: [
                    {
                        resource: "research_point",
                        amount: 58
                    },
                    {
                        resource: "coins",
                        amount: 483000
                    },
                    {
                        resource: "ink",
                        amount: 1780
                    },
                    {
                        resource: "cartwheel",
                        amount: 760
                    },
                    {
                        resource: "agate",
                        amount: 6
                    }
                ],
                parents: [1],
                children: [9]
            },
            {
                id: 6,
                name: "Trebuchets",
                costs: [
                    {
                        resource: "research_point",
                        amount: 45
                    },
                    {
                        resource: "coins",
                        amount: 866000
                    },
                    {
                        resource: "barrel",
                        amount: 3700
                    },
                    {
                        resource: "salt",
                        amount: 1590
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 8
                    },
                ],
                parents: [2],
                children: [10]
            },
            {
                id: 7,
                name: "Knights",
                costs: [
                    {
                        resource: "research_point",
                        amount: 45
                    },
                    {
                        resource: "coins",
                        amount: 504000
                    },
                    {
                        resource: "herbs",
                        amount: 2740
                    },
                    {
                        resource: "ink",
                        amount: 1180
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 11
                    }
                ],
                parents: [3],
                children: [10]
            },
            {
                id: 8,
                name: "Axemen",
                costs: [
                    {
                        resource: "research_point",
                        amount: 63
                    },
                    {
                        resource: "coins",
                        amount: 604000
                    },
                    {
                        resource: "salt",
                        amount: 2220
                    },
                    {
                        resource: "cartwheel",
                        amount: 950
                    },
                    {
                        resource: "agate",
                        amount: 11
                    },
                ],
                parents: [4],
                children: [11]
            },
            {
                id: 9,
                name: "Kings Guard",
                costs: [
                    {
                        resource: "research_point",
                        amount: 54
                    },
                    {
                        resource: "coins",
                        amount: 987000
                    },
                    {
                        resource: "manuscript",
                        amount: 2590
                    },
                    {
                        resource: "salt",
                        amount: 1110
                    },
                    {
                        resource: "agate",
                        amount: 13
                    },
                ],
                parents: [5],
                children: [11]
            },
            {
                id: 10,
                name: "Domestic Sheep",
                costs: [
                    {
                        resource: "research_point",
                        amount: 64
                    },
                    {
                        resource: "coins",
                        amount: 564000
                    },
                    {
                        resource: "barrel",
                        amount: 2440
                    },
                    {
                        resource: "herbs",
                        amount: 1050
                    },
                    {
                        resource: "agate",
                        amount: 16
                    },
                ],
                parents: [6,7],
                children: [12]
            },
            {
                id: 11,
                name: "Myths and Legends",
                costs: [
                    {
                        resource: "research_point",
                        amount: 51
                    },
                    {
                        resource: "coins",
                        amount: 504000
                    },
                    {
                        resource: "manuscript",
                        amount: 3770
                    },
                    {
                        resource: "barrel",
                        amount: 1620
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 11
                    },
                ],
                parents: [8,9],
                children: [12]
            },
            {
                id: 12,
                name: "Repurposed Ruins",
                costs: [
                    {
                        resource: "research_point",
                        amount: 68
                    },
                    {
                        resource: "coins",
                        amount: 927000
                    },
                    {
                        resource: "barrel",
                        amount: 3180
                    },
                    {
                        resource: "manuscript",
                        amount: 1370
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 11
                    },
                ],
                parents: [10,11],
                children: [13,14,15,16]
            },
            {
                id: 13,
                name: "Heavy Draw Weight",
                costs: [
                    {
                        resource: "research_point",
                        amount: 51
                    },
                    {
                        resource: "coins",
                        amount: 906000
                    },
                    {
                        resource: "herbs",
                        amount: 2960
                    },
                    {
                        resource: "ink",
                        amount: 1270
                    },
                    {
                        resource: "agate",
                        amount: 17
                    },
                ],
                parents: [12],
                children: [17]
            },
            {
                id: 14,
                name: "Open Field System",
                costs: [
                    {
                        resource: "research_point",
                        amount: 66
                    },
                    {
                        resource: "coins",
                        amount: 584000
                    },
                    {
                        resource: "manuscript",
                        amount: 1850
                    },
                    {
                        resource: "barrel",
                        amount: 790
                    },
                ],
                parents: [12],
                children: [17]
            },
            {
                id: 15,
                name: "Peaked Roofs",
                costs: [
                    {
                        resource: "research_point",
                        amount: 59
                    },
                    {
                        resource: "coins",
                        amount: 806000
                    },
                    {
                        resource: "barrel",
                        amount: 3330
                    },
                    {
                        resource: "herbs",
                        amount: 1430
                    },
                    {
                        resource: "agate",
                        amount: 13
                    },
                ],
                parents: [12],
                children: [17]
            },
            {
                id: 16,
                name: "Socket Langets",
                costs: [
                    {
                        resource: "research_point",
                        amount: 59
                    },
                    {
                        resource: "coins",
                        amount: 564000
                    },
                    {
                        resource: "manuscript",
                        amount: 2960
                    },
                    {
                        resource: "cartwheel",
                        amount: 1270
                    },
                    {
                        resource: "agate",
                        amount: 13
                    }
                ],
                parents: [12],
                children: [17]
            },
            {
                id: 17,
                name: "Battlefield Artillery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 61
                    },
                    {
                        resource: "coins",
                        amount: 665000
                    },
                    {
                        resource: "herbs",
                        amount: 3400
                    },
                    {
                        resource: "barrel",
                        amount: 1460
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 11
                    },
                ],
                parents: [13,14,15,16],
                children: [18,19,20]
            },
            {
                id: 18,
                name: "Halberd Mastery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 43
                    },
                    {
                        resource: "coins",
                        amount: 1000000
                    },
                    {
                        resource: "barrel",
                        amount: 2520
                    },
                    {
                        resource: "salt",
                        amount: 1080
                    },
                ],
                parents: [17],
                children: [21]
            },
            {
                id: 19,
                name: "Manorialism",
                costs: [
                    {
                        resource: "research_point",
                        amount: 58
                    },
                    {
                        resource: "coins",
                        amount: 544000
                    },
                    {
                        resource: "herbs",
                        amount: 2070
                    },
                    {
                        resource: "manuscript",
                        amount: 890
                    },
                    {
                        resource: "agate",
                        amount: 13
                    }
                ],
                parents: [17],
                children: [21,22]
            },
            {
                id: 20,
                name: "Plate Barding",
                costs: [
                    {
                        resource: "research_point",
                        amount: 59
                    },
                    {
                        resource: "coins",
                        amount: 806000
                    },
                    {
                        resource: "manuscript",
                        amount: 3920
                    },
                    {
                        resource: "herbs",
                        amount: 1680
                    },
                    {
                        resource: "agate",
                        amount: 13
                    }
                ],
                parents: [17],
                children: [22]
            },
            {
                id: 21,
                name: "Timber Framing",
                costs: [
                    {
                        resource: "research_point",
                        amount: 56
                    },
                    {
                        resource: "coins",
                        amount: 826000
                    },
                    {
                        resource: "herbs",
                        amount: 2070
                    },
                    {
                        resource: "cartwheel",
                        amount: 890
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 15
                    },
                ],
                parents: [18,19],
                children: [23]
            },
            {
                id: 22,
                name: "Sheep Herds",
                costs: [
                    {
                        resource: "research_point",
                        amount: 48
                    },
                    {
                        resource: "coins",
                        amount: 604000
                    },
                    {
                        resource: "barrel",
                        amount: 2000
                    },
                    {
                        resource: "manuscript",
                        amount: 860
                    },
                    {
                        resource: "agate",
                        amount: 16
                    },
                ],
                parents: [19,20],
                children: [23]
            },
            {
                id: 23,
                name: "Wing Guards",
                costs: [
                    {
                        resource: "research_point",
                        amount: 54
                    },
                    {
                        resource: "coins",
                        amount: 604000
                    },
                    {
                        resource: "manuscript",
                        amount: 2070
                    },
                    {
                        resource: "barrel",
                        amount: 890
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 15
                    },
                ],
                parents: [21,22],
                children: [24,25,26,27]
            },
            {
                id: 24,
                name: "Sinew Backing",
                costs: [
                    {
                        resource: "research_point",
                        amount: 63
                    },
                    {
                        resource: "coins",
                        amount: 685000
                    },
                    {
                        resource: "barrel",
                        amount: 2520
                    },
                    {
                        resource: "herbs",
                        amount: 1080
                    },
                    {
                        resource: "agate",
                        amount: 20
                    },
                ],
                parents: [23],
                children: [28]
            },
            {
                id: 25,
                name: "Ridge and Furrow",
                costs: [
                    {
                        resource: "research_point",
                        amount: 43
                    },
                    {
                        resource: "coins",
                        amount: 1100000
                    },
                    {
                        resource: "herbs",
                        amount: 2220
                    },
                    {
                        resource: "ink",
                        amount: 950
                    },
                    {
                        resource: "agate",
                        amount: 20
                    }
                ],
                parents: [23],
                children: [28]
            },
            {
                id: 26,
                name: "Castle",
                costs: [
                    {
                        resource: "research_point",
                        amount: 66
                    },
                    {
                        resource: "coins",
                        amount: 906000
                    },
                    {
                        resource: "manuscript",
                        amount: 4370
                    },
                    {
                        resource: "herbs",
                        amount: 1870
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 15
                    }
                ],
                parents: [23],
                children: [29]
            },
            {
                id: 27,
                name: "Trebuchet Command",
                costs: [
                    {
                        resource: "research_point",
                        amount: 50
                    },
                    {
                        resource: "coins",
                        amount: 1000000
                    },
                    {
                        resource: "manuscript",
                        amount: 4140
                    },
                    {
                        resource: "barrel",
                        amount: 1780
                    },
                    {
                        resource: "agate",
                        amount: 24
                    },
                ],
                parents: [23],
                children: [29]
            },
            {
                id: 28,
                name: "Polearm Maneuvers",
                costs: [
                    {
                        resource: "research_point",
                        amount: 63
                    },
                    {
                        resource: "coins",
                        amount: 685000
                    },
                    {
                        resource: "herbs",
                        amount: 3330
                    },
                    {
                        resource: "manuscript",
                        amount: 1430
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 17
                    },
                ],
                parents: [24,25],
                children: [30]
            },
            {
                id: 29,
                name: "Knight Training",
                costs: [
                    {
                        resource: "research_point",
                        amount: 48
                    },
                    {
                        resource: "coins",
                        amount: 1100000
                    },
                    {
                        resource: "barrel",
                        amount: 2150
                    },
                    {
                        resource: "manuscript",
                        amount: 920
                    },
                    {
                        resource: "agate",
                        amount: 26
                    }
                ],
                parents: [26,27],
                children: [30]
            },
            {
                id: 30,
                name: "Transhumance",
                costs: [
                    {
                        resource: "research_point",
                        amount: 68
                    },
                    {
                        resource: "coins",
                        amount: 1000000
                    },
                    {
                        resource: "herbs",
                        amount: 3630
                    },
                    {
                        resource: "barrel",
                        amount: 1560
                    },
                    {
                        resource: "medieval_tapestry",
                        amount: 20
                    }
                ],
                parents: [28,29],
                children: []
            },
        ]
    },
    {
        id: 10,
        era: "Iberian Era",
        image: "/research/intro/age_transition_iberian_era_main1.webp",
        technologies: [
            {
                id: 1,
                name: "Castillos",
                costs: [
                    {
                        resource: "research_point",
                        amount: 53
                    },
                    {
                        resource: "coins",
                        amount: 816000
                    },
                    {
                        resource: "barrel",
                        amount: 2230
                    },
                    {
                        resource: "manuscript",
                        amount: 960
                    },
                ],
                parents: [],
                children: [2,3]
            },
            {
                id: 2,
                name: "Saffron",
                costs: [
                    {
                        resource: "research_point",
                        amount: 51
                    },
                    {
                        resource: "coins",
                        amount: 1000000
                    },
                    {
                        resource: "herbs",
                        amount: 1560
                    },
                    {
                        resource: "barrel",
                        amount: 670
                    },
                    {
                        resource: "aquamarine",
                        amount: 3
                    },
                ],
                parents: [1],
                children: [4]
            },
            {
                id: 3,
                name: "Door",
                costs: [
                    {
                        resource: "research_point",
                        amount: 54
                    },
                    {
                        resource: "coins",
                        amount: 489000
                    },
                    {
                        resource: "manuscript",
                        amount: 3640
                    },
                    {
                        resource: "herbs",
                        amount: 1560
                    },
                    {
                        resource: "aquamarine",
                        amount: 6
                    },
                ],
                parents: [1],
                children: [4]
            },
            {
                id: 4,
                name: "Wax Seal",
                costs: [
                    {
                        resource: "research_point",
                        amount: 58
                    },
                    {
                        resource: "coins",
                        amount: 769000
                    },
                    {
                        resource: "saffron",
                        amount: 2530
                    },
                    {
                        resource: "door",
                        amount: 1090
                    },
                    {
                        resource: "iberian_torc_necklace",
                        amount: 5
                    },
                ],
                parents: [2,3],
                children: [5,6,7]
            },
            {
                id: 5,
                name: "Almogavars",
                costs: [
                    {
                        resource: "research_point",
                        amount: 48
                    },
                    {
                        resource: "coins",
                        amount: 979000
                    },
                    {
                        resource: "wax_seal",
                        amount: 2310
                    },
                    {
                        resource: "saffron",
                        amount: 990
                    },
                ],
                parents: [4],
                children: [8]
            },
            {
                id: 6,
                name: "Crossbowmen",
                costs: [
                    {
                        resource: "research_point",
                        amount: 50
                    },
                    {
                        resource: "coins",
                        amount: 699000
                    },
                    {
                        resource: "door",
                        amount: 3420
                    },
                    {
                        resource: "herbs",
                        amount: 1470
                    },
                    {
                        resource: "aquamarine",
                        amount: 7
                    },
                ],
                parents: [4],
                children: [9]
            },
            {
                id: 7,
                name: "Order of Calatrava",
                costs: [
                    {
                        resource: "research_point",
                        amount: 61
                    },
                    {
                        resource: "coins",
                        amount: 932000
                    },
                    {
                        resource: "wax_seal",
                        amount: 2970
                    },
                    {
                        resource: "door",
                        amount: 1280
                    },
                    {
                        resource: "aquamarine",
                        amount: 10
                    }
                ],
                parents: [4],
                children: [10]
            },
            {
                id: 8,
                name: "Advanced Trebuchet",
                costs: [
                    {
                        resource: "research_point",
                        amount: 54
                    },
                    {
                        resource: "coins",
                        amount: 816000
                    },
                    {
                        resource: "saffron",
                        amount: 4240
                    },
                    {
                        resource: "barrel",
                        amount: 1820
                    },
                    {
                        resource: "iberian_torc_necklace",
                        amount: 7
                    },
                ],
                parents: [5],
                children: [11]
            },
            {
                id: 9,
                name: "Masia",
                costs: [
                    {
                        resource: "research_point",
                        amount: 46
                    },
                    {
                        resource: "coins",
                        amount: 1000000
                    },
                    {
                        resource: "door",
                        amount: 2010
                    },
                    {
                        resource: "saffron",
                        amount: 860
                    },
                    {
                        resource: "aquamarine",
                        amount: 11
                    },
                ],
                parents: [6],
                children: [12]
            },
            {
                id: 10,
                name: "Jinete",
                costs: [
                    {
                        resource: "research_point",
                        amount: 41
                    },
                    {
                        resource: "coins",
                        amount: 769000
                    },
                    {
                        resource: "saffron",
                        amount: 2380
                    },
                    {
                        resource: "wax_seal",
                        amount: 1020
                    },
                    {
                        resource: "aquamarine",
                        amount: 11
                    },
                ],
                parents: [7],
                children: [13]
            },
            {
                id: 11,
                name: "Domesticated Donkeys",
                costs: [
                    {
                        resource: "research_point",
                        amount: 41
                    },
                    {
                        resource: "coins",
                        amount: 746000
                    },
                    {
                        resource: "wax_seal",
                        amount: 3120
                    },
                    {
                        resource: "door",
                        amount: 1340
                    },
                    {
                        resource: "iberian_torc_necklace",
                        amount: 10
                    },
                ],
                parents: [8],
                children: [14]
            },
            {
                id: 12,
                name: "Orange Plantation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 66
                    },
                    {
                        resource: "coins",
                        amount: 932000
                    },
                    {
                        resource: "door",
                        amount: 2450
                    },
                    {
                        resource: "manuscript",
                        amount: 1050
                    },
                    {
                        resource: "iberian_torc_necklace",
                        amount: 12
                    },
                ],
                parents: [9],
                children: [14,15]
            },
            {
                id: 13,
                name: "Patios",
                costs: [
                    {
                        resource: "research_point",
                        amount: 63
                    },
                    {
                        resource: "coins",
                        amount: 1000000
                    },
                    {
                        resource: "wax_seal",
                        amount: 3270
                    },
                    {
                        resource: "saffron",
                        amount: 1400
                    },
                    {
                        resource: "aquamarine",
                        amount: 13
                    },
                ],
                parents: [10],
                children: [16,17]
            },
            {
                id: 14,
                name: "Horseshoe Arches",
                costs: [
                    {
                        resource: "research_point",
                        amount: 43
                    },
                    {
                        resource: "coins",
                        amount: 1000000
                    },
                    {
                        resource: "door",
                        amount: 4010
                    },
                    {
                        resource: "wax_seal",
                        amount: 1720
                    },
                    {
                        resource: "aquamarine",
                        amount: 13
                    },
                ],
                parents: [11,12],
                children: [18]
            },
            {
                id: 15,
                name: "Latch Mechanism",
                costs: [
                    {
                        resource: "research_point",
                        amount: 59
                    },
                    {
                        resource: "coins",
                        amount: 1000000
                    },
                    {
                        resource: "saffron",
                        amount: 2160
                    },
                    {
                        resource: "wax_seal",
                        amount: 930
                    },
                    {
                        resource: "iberian_torc_necklace",
                        amount: 12
                    },
                ],
                parents: [12],
                children: [18]
            },
            {
                id: 16,
                name: "Eyeglasses",
                costs: [
                    {
                        resource: "research_point",
                        amount: 66
                    },
                    {
                        resource: "coins",
                        amount: 1200000
                    },
                    {
                        resource: "saffron",
                        amount: 2600
                    },
                    {
                        resource: "door",
                        amount: 1120
                    },
                ],
                parents: [13],
                children: [18]
            },
            {
                id: 17,
                name: "Shield Boss",
                costs: [
                    {
                        resource: "research_point",
                        amount: 56
                    },
                    {
                        resource: "coins",
                        amount: 1100000
                    },
                    {
                        resource: "wax_seal",
                        amount: 3870
                    },
                    {
                        resource: "saffron",
                        amount: 1660
                    },
                    {
                        resource: "aquamarine",
                        amount: 15
                    },
                ],
                parents: [13],
                children: [18]
            },
            {
                id: 18,
                name: "Donkey Herds",
                costs: [
                    {
                        resource: "research_point",
                        amount: 61
                    },
                    {
                        resource: "coins",
                        amount: 769000
                    },
                    {
                        resource: "door",
                        amount: 3940
                    },
                    {
                        resource: "wax_seal",
                        amount: 1690
                    },
                    {
                        resource: "iberian_torc_necklace",
                        amount: 13
                    },
                ],
                parents: [14,15,16,17],
                children: [19,20,21]
            },
            {
                id: 19,
                name: "Lightweight Shields",
                costs: [
                    {
                        resource: "research_point",
                        amount: 58
                    },
                    {
                        resource: "coins",
                        amount: 1200000
                    },
                    {
                        resource: "saffron",
                        amount: 2970
                    },
                    {
                        resource: "door",
                        amount: 1280
                    },
                ],
                parents: [18],
                children: [22]
            },
            {
                id: 20,
                name: "Brace Mechanism",
                costs: [
                    {
                        resource: "research_point",
                        amount: 45
                    },
                    {
                        resource: "coins",
                        amount: 1000000
                    },
                    {
                        resource: "door",
                        amount: 1930
                    },
                    {
                        resource: "barrel",
                        amount: 830
                    },
                    {
                        resource: "aquamarine",
                        amount: 17
                    }
                ],
                parents: [18],
                children: [22]
            },
            {
                id: 21,
                name: "Shock Charges",
                costs: [
                    {
                        resource: "research_point",
                        amount: 59
                    },
                    {
                        resource: "coins",
                        amount: 676000
                    },
                    {
                        resource: "wax_seal",
                        amount: 3270
                    },
                    {
                        resource: "saffron",
                        amount: 1400
                    },
                    {
                        resource: "iberian_torc_necklace",
                        amount: 15
                    },
                ],
                parents: [18],
                children: [23]
            },
            {
                id: 22,
                name: "Distillation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 48
                    },
                    {
                        resource: "coins",
                        amount: 792000
                    },
                    {
                        resource: "saffron",
                        amount: 2450
                    },
                    {
                        resource: "wax_seal",
                        amount: 1050
                    },
                    {
                        resource: "iberian_torc_necklace",
                        amount: 17
                    },
                ],
                parents: [19,20],
                children: [24]
            },
            {
                id: 23,
                name: "Botany",
                costs: [
                    {
                        resource: "research_point",
                        amount: 68
                    },
                    {
                        resource: "coins",
                        amount: 1100000
                    },
                    {
                        resource: "wax_seal",
                        amount: 3870
                    },
                    {
                        resource: "door",
                        amount: 1660
                    },
                    {
                        resource: "aquamarine",
                        amount: 20
                    },
                ],
                parents: [21],
                children: [25,26]
            },
            {
                id: 24,
                name: "Safety Mechanisms",
                costs: [
                    {
                        resource: "research_point",
                        amount: 64
                    },
                    {
                        resource: "coins",
                        amount: 1200000
                    },
                    {
                        resource: "door",
                        amount: 2450
                    },
                    {
                        resource: "herbs",
                        amount: 1050
                    },
                    {
                        resource: "aquamarine",
                        amount: 20
                    },
                ],
                parents: [22],
                children: [27]
            },
            {
                id: 25,
                name: "Toledo Steel",
                costs: [
                    {
                        resource: "research_point",
                        amount: 46
                    },
                    {
                        resource: "coins",
                        amount: 723000
                    },
                    {
                        resource: "wax_seal",
                        amount: 2310
                    },
                    {
                        resource: "door",
                        amount: 990
                    },
                    {
                        resource: "iberian_torc_necklace",
                        amount: 15
                    }
                ],
                parents: [23],
                children: [28]
            },
            {
                id: 26,
                name: "Gambeson Padding",
                costs: [
                    {
                        resource: "research_point",
                        amount: 56
                    },
                    {
                        resource: "coins",
                        amount: 606000
                    },
                    {
                        resource: "saffron",
                        amount: 2600
                    },
                    {
                        resource: "door",
                        amount: 1120
                    },
                    {
                        resource: "aquamarine",
                        amount: 21
                    }
                ],
                parents: [23],
                children: [28]
            },
            {
                id: 27,
                name: "Leather Lappets",
                costs: [
                    {
                        resource: "research_point",
                        amount: 63
                    },
                    {
                        resource: "coins",
                        amount: 1200000
                    },
                    {
                        resource: "saffron",
                        amount: 3720
                    },
                    {
                        resource: "wax_seal",
                        amount: 1590
                    },
                    {
                        resource: "iberian_torc_necklace",
                        amount: 17
                    },
                ],
                parents: [24],
                children: [29,30]
            },
            {
                id: 28,
                name: "Equestrian Excellence",
                costs: [
                    {
                        resource: "research_point",
                        amount: 56
                    },
                    {
                        resource: "coins",
                        amount: 723000
                    },
                    {
                        resource: "wax_seal",
                        amount: 3350
                    },
                    {
                        resource: "saffron",
                        amount: 1440
                    },
                    {
                        resource: "aquamarine",
                        amount: 24
                    },
                ],
                parents: [25,26],
                children: [29,30]
            },
            {
                id: 29,
                name: "Improved Crew Arrangement",
                costs: [
                    {
                        resource: "research_point",
                        amount: 68
                    },
                    {
                        resource: "coins",
                        amount: 1300000
                    },
                    {
                        resource: "door",
                        amount: 3420
                    },
                    {
                        resource: "wax_seal",
                        amount: 1470
                    },
                    {
                        resource: "iberian_torc_necklace",
                        amount: 20
                    }
                ],
                parents: [27,28],
                children: []
            },
            {
                id: 30,
                name: "Donkey Farms",
                costs: [
                    {
                        resource: "research_point",
                        amount: 48
                    },
                    {
                        resource: "coins",
                        amount: 629000
                    },
                    {
                        resource: "saffron",
                        amount: 3200
                    },
                    {
                        resource: "door",
                        amount: 1370
                    },
                    {
                        resource: "aquamarine",
                        amount: 26
                    }
                ],
                parents: [27,28],
                children: []
            },
        ]
    },
    {
        id: 11,
        era: "Kingdom of Sicily",
        image: "/research/intro/age_transition_kingdom_of_sicily_main1.webp",
        technologies: [
            {
                id: 1,
                name: "Sicilian Villetta",
                costs: [
                    {
                        resource: "research_point",
                        amount: 56
                    },
                    {
                        resource: "coins",
                        amount: 525000
                    },
                    {
                        resource: "door",
                        amount: 2010
                    },
                    {
                        resource: "wax_seal",
                        amount: 860
                    },
                ],
                parents: [],
                children: [2,3,4,5]
            },
            {
                id: 2,
                name: "Siege Tower",
                costs: [
                    {
                        resource: "research_point",
                        amount: 61
                    },
                    {
                        resource: "coins",
                        amount: 475000
                    },
                    {
                        resource: "wax_seal",
                        amount: 2610
                    },
                    {
                        resource: "saffron",
                        amount: 1120
                    },
                    {
                        resource: "lava_stone",
                        amount: 3
                    },
                ],
                parents: [1],
                children: [6]
            },
            {
                id: 3,
                name: "Wardrobe",
                costs: [
                    {
                        resource: "research_point",
                        amount: 53
                    },
                    {
                        resource: "coins",
                        amount: 999000
                    },
                    {
                        resource: "saffron",
                        amount: 2530
                    },
                    {
                        resource: "door",
                        amount: 1090
                    },
                ],
                parents: [1],
                children: [6,7]
            },
            {
                id: 4,
                name: "Chili",
                costs: [
                    {
                        resource: "research_point",
                        amount: 46
                    },
                    {
                        resource: "coins",
                        amount: 999000
                    },
                    {
                        resource: "door",
                        amount: 1420
                    },
                    {
                        resource: "wax_seal",
                        amount: 610
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 2
                    },
                ],
                parents: [1],
                children: [7,8]
            },
            {
                id: 5,
                name: "Tome",
                costs: [
                    {
                        resource: "research_point",
                        amount: 46
                    },
                    {
                        resource: "coins",
                        amount: 749000
                    },
                    {
                        resource: "saffron",
                        amount: 2310
                    },
                    {
                        resource: "wax_seal",
                        amount: 990
                    },
                    {
                        resource: "lava_stone",
                        amount: 5
                    },
                ],
                parents: [1],
                children: [8]
            },
            {
                id: 6,
                name: "Melites",
                costs: [
                    {
                        resource: "research_point",
                        amount: 53
                    },
                    {
                        resource: "coins",
                        amount: 899000
                    },
                    {
                        resource: "wardrobe",
                        amount: 1260
                    },
                    {
                        resource: "door",
                        amount: 540
                    },
                ],
                parents: [2],
                children: [9]
            },
            {
                id: 7,
                name: "Armored Crossbowmen",
                costs: [
                    {
                        resource: "research_point",
                        amount: 63
                    },
                    {
                        resource: "coins",
                        amount: 600000
                    },
                    {
                        resource: "chili",
                        amount: 1050
                    },
                    {
                        resource: "wardrobe",
                        amount: 450
                    },
                    {
                        resource: "lava_stone",
                        amount: 6
                    }
                ],
                parents: [3,4],
                children: [10]
            },
            {
                id: 8,
                name: "Pedites",
                costs: [
                    {
                        resource: "research_point",
                        amount: 43
                    },
                    {
                        resource: "coins",
                        amount: 899000
                    },
                    {
                        resource: "tome",
                        amount: 1470
                    },
                    {
                        resource: "chili",
                        amount: 630
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 7
                    },
                ],
                parents: [4,5],
                children: [11]
            },
            {
                id: 9,
                name: "Vegetable Gardens",
                costs: [
                    {
                        resource: "research_point",
                        amount: 59
                    },
                    {
                        resource: "coins",
                        amount: 999000
                    },
                    {
                        resource: "wardrobe",
                        amount: 2680
                    },
                    {
                        resource: "wax_seal",
                        amount: 1150
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 10
                    },
                ],
                parents: [6],
                children: [12]
            },
            {
                id: 10,
                name: "Familia Regis",
                costs: [
                    {
                        resource: "research_point",
                        amount: 61
                    },
                    {
                        resource: "coins",
                        amount: 849000
                    },
                    {
                        resource: "wardrobe",
                        amount: 3500
                    },
                    {
                        resource: "chili",
                        amount: 1500
                    },
                    {
                        resource: "lava_stone",
                        amount: 10
                    },
                ],
                parents: [7],
                children: [12]
            },
            {
                id: 11,
                name: "Improved Roof Tiles",
                costs: [
                    {
                        resource: "research_point",
                        amount: 43
                    },
                    {
                        resource: "coins",
                        amount: 774000
                    },
                    {
                        resource: "chili",
                        amount: 1940
                    },
                    {
                        resource: "tome",
                        amount: 830
                    },
                    {
                        resource: "lava_stone",
                        amount: 10
                    },
                ],
                parents: [8],
                children: [12]
            },
            {
                id: 12,
                name: "Windmill",
                costs: [
                    {
                        resource: "research_point",
                        amount: 40
                    },
                    {
                        resource: "coins",
                        amount: 675000
                    },
                    {
                        resource: "tome",
                        amount: 3060
                    },
                    {
                        resource: "wardrobe",
                        amount: 1310
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 4
                    },
                ],
                parents: [9,10,11],
                children: [13,14]
            },
            {
                id: 13,
                name: "Orchards",
                costs: [
                    {
                        resource: "research_point",
                        amount: 58
                    },
                    {
                        resource: "coins",
                        amount: 874000
                    },
                    {
                        resource: "wardrobe",
                        amount: 2240
                    },
                    {
                        resource: "chili",
                        amount: 960
                    },
                    {
                        resource: "lava_stone",
                        amount: 13
                    },
                ],
                parents: [12],
                children: [15,16]
            },
            {
                id: 14,
                name: "Armored Panels",
                costs: [
                    {
                        resource: "research_point",
                        amount: 46
                    },
                    {
                        resource: "coins",
                        amount: 725000
                    },
                    {
                        resource: "chili",
                        amount: 2760
                    },
                    {
                        resource: "wax_seal",
                        amount: 1180
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 3
                    },
                ],
                parents: [12],
                children: [16,17]
            },
            {
                id: 15,
                name: "Couched Spear Technique",
                costs: [
                    {
                        resource: "research_point",
                        amount: 64
                    },
                    {
                        resource: "coins",
                        amount: 1100000
                    },
                    {
                        resource: "wardrobe",
                        amount: 2020
                    },
                    {
                        resource: "tome",
                        amount: 870
                    },
                    {
                        resource: "lava_stone",
                        amount: 11
                    },
                ],
                parents: [13],
                children: [18]
            },
            {
                id: 16,
                name: "Polychrome Inlays",
                costs: [
                    {
                        resource: "research_point",
                        amount: 41
                    },
                    {
                        resource: "coins",
                        amount: 650000
                    },
                    {
                        resource: "tome",
                        amount: 2160
                    },
                    {
                        resource: "chili",
                        amount: 930
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 3
                    },
                ],
                parents: [13,14],
                children: [19]
            },
            {
                id: 17,
                name: "Reinforced Nasal Guards",
                costs: [
                    {
                        resource: "research_point",
                        amount: 40
                    },
                    {
                        resource: "coins",
                        amount: 1100000
                    },
                    {
                        resource: "chili",
                        amount: 3650
                    },
                    {
                        resource: "wardrobe",
                        amount: 1570
                    },
                    {
                        resource: "lava_stone",
                        amount: 13
                    },
                ],
                parents: [14],
                children: [20]
            },
            {
                id: 18,
                name: "Domed Sanctuary",
                costs: [
                    {
                        resource: "research_point",
                        amount: 64
                    },
                    {
                        resource: "coins",
                        amount: 899000
                    },
                    {
                        resource: "tome",
                        amount: 1790
                    },
                    {
                        resource: "chili",
                        amount: 770
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 13
                    },
                ],
                parents: [15],
                children: [21]
            },
            {
                id: 19,
                name: "Refined Chainmail Coifs",
                costs: [
                    {
                        resource: "research_point",
                        amount: 58
                    },
                    {
                        resource: "coins",
                        amount: 924000
                    },
                    {
                        resource: "wardrobe",
                        amount: 1940
                    },
                    {
                        resource: "saffron",
                        amount: 830
                    },
                    {
                        resource: "lava_stone",
                        amount: 17
                    },
                ],
                parents: [16],
                children: [22]
            },
            {
                id: 20,
                name: "Refined Tools",
                costs: [
                    {
                        resource: "research_point",
                        amount: 53
                    },
                    {
                        resource: "coins",
                        amount: 1200000
                    },
                    {
                        resource: "chili",
                        amount: 2980
                    },
                    {
                        resource: "tome",
                        amount: 1280
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 13
                    }
                ],
                parents: [17],
                children: [23]
            },
            {
                id: 21,
                name: "Close Formation Tactics",
                costs: [
                    {
                        resource: "research_point",
                        amount: 41
                    },
                    {
                        resource: "coins",
                        amount: 650000
                    },
                    {
                        resource: "tome",
                        amount: 4100
                    },
                    {
                        resource: "wardrobe",
                        amount: 1760
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 13
                    },
                ],
                parents: [18],
                children: [24]
            },
            {
                id: 22,
                name: "Pavilions",
                costs: [
                    {
                        resource: "research_point",
                        amount: 51
                    },
                    {
                        resource: "coins",
                        amount: 575000
                    },
                    {
                        resource: "wardrobe",
                        amount: 2530
                    },
                    {
                        resource: "door",
                        amount: 1090
                    },
                    {
                        resource: "lava_stone",
                        amount: 20
                    },
                ],
                parents: [19],
                children: [25]
            },
            {
                id: 23,
                name: "Tactical Chambers",
                costs: [
                    {
                        resource: "research_point",
                        amount: 56
                    },
                    {
                        resource: "coins",
                        amount: 874000
                    },
                    {
                        resource: "tome",
                        amount: 2940
                    },
                    {
                        resource: "chili",
                        amount: 1260
                    },
                    {
                        resource: "lava_stone",
                        amount: 20
                    },
                ],
                parents: [20],
                children: [26]
            },
            {
                id: 24,
                name: "Terrain Mastery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 63
                    },
                    {
                        resource: "coins",
                        amount: 1000000
                    },
                    {
                        resource: "tome",
                        amount: 3530
                    },
                    {
                        resource: "wardrobe",
                        amount: 1510
                    },
                    {
                        resource: "lava_stone",
                        amount: 21
                    },
                ],
                parents: [21],
                children: [27]
            },
            {
                id: 25,
                name: "Improved Sails",
                costs: [
                    {
                        resource: "research_point",
                        amount: 45
                    },
                    {
                        resource: "coins",
                        amount: 1100000
                    },
                    {
                        resource: "wardrobe",
                        amount: 3730
                    },
                    {
                        resource: "tome",
                        amount: 1600
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 15
                    }
                ],
                parents: [22],
                children: [27]
            },
            {
                id: 26,
                name: "Conservation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 51
                    },
                    {
                        resource: "coins",
                        amount: 849000
                    },
                    {
                        resource: "chili",
                        amount: 2100
                    },
                    {
                        resource: "wardrobe",
                        amount: 900
                    },
                    {
                        resource: "lava_stone",
                        amount: 23
                    }
                ],
                parents: [23],
                children: [27]
            },
            {
                id: 27,
                name: "Heavy Crossbow Designs",
                costs: [
                    {
                        resource: "research_point",
                        amount: 51
                    },
                    {
                        resource: "coins",
                        amount: 650000
                    },
                    {
                        resource: "tome",
                        amount: 2520
                    },
                    {
                        resource: "door",
                        amount: 1080
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 17
                    },
                ],
                parents: [24,25,26],
                children: [28,29,30,31]
            },
            {
                id: 28,
                name: "Monasteries",
                costs: [
                    {
                        resource: "research_point",
                        amount: 64
                    },
                    {
                        resource: "coins",
                        amount: 1300000
                    },
                    {
                        resource: "wardrobe",
                        amount: 2690
                    },
                    {
                        resource: "chili",
                        amount: 1150
                    },
                ],
                parents: [27],
                children: [32]
            },
            {
                id: 29,
                name: "Improved Heater Shield",
                costs: [
                    {
                        resource: "research_point",
                        amount: 40
                    },
                    {
                        resource: "coins",
                        amount: 924000
                    },
                    {
                        resource: "chili",
                        amount: 4200
                    },
                    {
                        resource: "tome",
                        amount: 1800
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 17
                    }
                ],
                parents: [27],
                children: [32]
            },
            {
                id: 30,
                name: "Marble Decorations",
                costs: [
                    {
                        resource: "research_point",
                        amount: 53
                    },
                    {
                        resource: "coins",
                        amount: 999000
                    },
                    {
                        resource: "tome",
                        amount: 2680
                    },
                    {
                        resource: "chili",
                        amount: 1150
                    },
                    {
                        resource: "lava_stone",
                        amount: 24
                    }
                ],
                parents: [27],
                children: [32]
            },
            {
                id: 31,
                name: "Reinforced Kite Shield",
                costs: [
                    {
                        resource: "research_point",
                        amount: 46
                    },
                    {
                        resource: "coins",
                        amount: 849000
                    },
                    {
                        resource: "wardrobe",
                        amount: 5040
                    },
                    {
                        resource: "chili",
                        amount: 2160
                    },
                    {
                        resource: "lava_stone",
                        amount: 26
                    }
                ],
                parents: [27],
                children: [32]
            },
            {
                id: 32,
                name: "Piazza",
                costs: [
                    {
                        resource: "research_point",
                        amount: 41
                    },
                    {
                        resource: "coins",
                        amount: 1200000
                    },
                    {
                        resource: "chili",
                        amount: 2610
                    },
                    {
                        resource: "wardrobe",
                        amount: 1120
                    },
                    {
                        resource: "arabesque_wood_carving",
                        amount: 20
                    }
                ],
                parents: [28,29,30,31],
                children: []
            },
        ]
    }
]

export default allTechnologies;