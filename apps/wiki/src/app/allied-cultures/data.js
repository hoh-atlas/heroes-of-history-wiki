const allAlliedCultures = [
    {
        id: "egypt_abu_simbel",
        name: "The Visionary Invitation",
        type: "Egypt",
        image: "/allied-cultures/intro/city_event_banner_egypt_abusimbel.webp",
        questlineColor: "#b9713a",
        questlines: [
            {   
                id: 1,
                appearsAfter: [],
                name: "The Visionary Invitation",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 250
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rise of Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 25
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>4 Small Home</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Medium Home</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 50
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>50 Deben</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 75
                        }
                    }
                ]
            },
            {   
                id: 2,
                appearsAfter: [1],
                name: "Papyrus Scrolls",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Papyrus Scroll</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 60
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Papyrus Field</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Luxurious Papyrus Field</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "papyrus",
                            amount: 120
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>15 Papyrus</b> in <b>Egypt</b>",
                            "Have <b>1 Papyrus Press</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 200
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>4 Papyrus Scroll</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 250
                        }
                    }
                ]
            },
            {   
                id: 3,
                appearsAfter: [1],
                name: "Ankhs",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Ankh</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 40
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Gold Mine</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Luxurious Gold Mine</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "gold_ore",
                            amount: 80
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>10 Gold Ore</b> in <b>Egypt</b>",
                            "Have <b>1 Goldsmith</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "gold_ore",
                            amount: 120
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>3 Ankh</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 150
                        }
                    }
                ]
            },
            {   
                id: 4,
                appearsAfter: [2,3],
                name: "Irrigation",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 750
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>300 Deben</b> in <b>Egypt</b>",
                            "Research <b>Water Wheel</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 150
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>2</b> expansions in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 300
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>2 Small Well</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Oasis</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "gold_ore",
                            amount: 250
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>5 Building</b> in <b>Egypt</b> on irrigation level <img src='" + "/shared/resources/irrigation_1.webp" + "' style='height: 24px'> or higher"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 300
                        }
                    }
                ]
            },
            {   
                id: 5,
                appearsAfter: [4],
                name: "Workforce",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "papyrus",
                        amount: 5000
                    },
                    {
                        resource: "gold_ore",
                        amount: 3100
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Egyptian Diplomacy</b>",
                            "Have <b>3</b> expansions in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 1000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>6 Small Home</b> on level <b>2</b> in <b>Egypt</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "deben",
                            amount: 2000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>500 Deben</b> in <b>Egypt</b>",
                            "Have <b>4</b>  expansions in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 3000
                        }
                    },
                ]
            },
            {   
                id: 6,
                appearsAfter: [5],
                name: "Path to Greatness",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 250000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>7</b> technologies in <b>Egypt</b>",
                            "Have <b>8 Building</b> on level <b>2</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 10000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Research <b>9</b> technologies in <b>Egypt</b>",
                            "Have <b>4 Irrigation</b> on level <b>2</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 10000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>11</b> technologies for <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 6000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>1 Papyrus Press</b> on level <b>3</b> in <b>Egypt</b>",
                            "Have <b>1 Goldsmith</b> on level <b>3</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 30000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>11</b> technologies for <b>Egypt</b>",
                            "Have <b>12 Building</b> on level <b>3</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 20000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>Extraction Methods</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 12000
                        }
                    },
                ]
            },
            {   
                id: 7,
                appearsAfter: [5],
                name: "Crossing the Nile",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "papyrus_scroll",
                        amount: 800
                    },
                    {
                        resource: "ankh",
                        amount: 300
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Complete <b>1</b> stage of <b>3</b> of the <b>Nile Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 800
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Complete <b>2</b> stages out of <b>3</b> of the <b>Nile Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 1600
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Complete <b>3</b> stages out of <b>3</b> of the <b>Nile Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 1200
                        }
                    },
                ]
            },
            {   
                id: 8,
                appearsAfter: [6],
                name: "The Final Stretch",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "ceremonial_dress",
                        amount: 5000
                    },
                    {
                        resource: "golden_mask",
                        amount: 3300
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>1 Papyrus Press</b> on level <b>4</b> in <b>Egypt</b>",
                            "Have <b>1 Goldsmith</b> on level <b>4</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 100000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>7</b> expansions in <b>Egypt</b>",
                            "Have <b>20 Building</b> on level <b>4</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 50000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>19</b> technologies for <b>Egypt</b>",
                            "Have <b>5 Irrigation</b> on level <b>5</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "gold_ore",
                            amount: 30000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>15 Building</b> in <b>Egypt</b> on irrigation level <img src='" + "/shared/resources/irrigation_3.webp" + "' style='height: 24px'>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 150000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>23</b> technologies for <b>Egypt</b>",
                            "Have <b>25 Building</b> on level <b>5</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 100000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Have <b>6 Irrigation</b> on level <b>6</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 60000
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Research <b>25</b> technologies for <b>Egypt</b>",
                            "Have <b>28 Building</b> on level <b>6</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 200000
                        }
                    },
                    {
                        id: 8,
                        tasks: [
                            "Research <b>27</b> technologies for <b>Egypt</b>",
                            "Have <b>34 Building</b> on level <b>6</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 300000
                        }
                    },
                ]
            },
            {   
                id: 9,
                appearsAfter: [2,3],
                name: "Abu Simbel - Phase I",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "antimatter_egyptian",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>1</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 500
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>3</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 1000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>5</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 1500
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>10</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 3000
                        }
                    },
                ]
            },
            {   
                id: 10,
                appearsAfter: [9],
                name: "Abu Simbel - Phase II",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "antimatter_egyptian",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>15</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 10000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>20</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 15000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>25</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 20000
                        }
                    },
                ]
            },
            {   
                id: 11,
                appearsAfter: [10],
                name: "Abu Simbel - Phase III",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "antimatter_egyptian",
                        amount: 15
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>30</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 30000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>35</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 50000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>40</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 100000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>45</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 250000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>Abu Simbel</b> on level <b>50</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "antimatter_legendary_part",
                            amount: 1
                        }
                    },
                ]
            }
        ],
        wonder: {
            name: "Abu Simbel",
            id: "Wonder_Egypt_AbuSimbel",
            image: "/allied-cultures/world-wonder/abu_simbel.webp",
            boostedResources: [
                {
                    id: "papyrus",
                    name: "Papyrus"
                }
            ],
        }
    },
    {
        id: "vikings_valhalla",
        name: "Bravery's Call",
        type: "Vikings",
        image: "/allied-cultures/intro/city_event_banner_vikings_valhalla.webp",
        questlineColor: "#4C80A2",
        questlines: [
            {   
                id: 1,
                appearsAfter: [],
                name: "Leaves of Fate",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 250
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rise of the Vikings</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 30
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>4 Worker Home</b> on level <b>1</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Sailor Home</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 50
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>20 Pennies</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 100
                        }
                    }
                ]
            },
            {   
                id: 2,
                appearsAfter: [1],
                name: "Expedition Preparations",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 750
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Seafaring</b>",
                            "Have <b>1 Water</b> expansion in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 150
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Fishing Pier</b> on level <b>1</b> in <b>Viking Pier</b>",
                            "Have <b>1 Luxurious Fishing Pier</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 200
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>10 Fish</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "fish",
                            amount: 200
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Research <b>Beekeeping</b>",
                            "Have <b>1 Beehive</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 300
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Collect <b>5 Honey</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "honey",
                            amount: 150
                        }
                    }
                ]
            },
            {   
                id: 3,
                appearsAfter: [2],
                name: "Provisions",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 1500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Mead Brewery</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 350
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Tavern</b> on level <b>1</b> in <b>Viking Kingdom</b>",
                            "Collect <b>20 Mead</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "fish",
                            amount: 400
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>Plundering Raids</b>",
                            "Have <b>2 Water</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 800
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>1 Expedition Pier</b> on level <b>1</b> in <b>Viking Kingdom</b>",
                            "Have <b>1 Luxurious Sailor Port</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "honey",
                            amount: 300
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Collect <b>3 Ceramic Treasure</b> in <b>Viking Kingdom</b>",
                            "Collect <b>2 Gold Treasure</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 1000
                        }
                    }
                ]
            },
            {   
                id: 4,
                appearsAfter: [3],
                name: "Workforce",
                questgiver: "",
                rewards: [
                    {
                        resource: "honey",
                        amount: 2000
                    },
                    {
                        resource: "fish",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Jarldom</b>",
                            "Have <b>4</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 1200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>6 Worker Home</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 1100
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>Thralls and Karls</b>",
                            "Have <b>5</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 1400
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>2 Sailor Home</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 1700
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Collect <b>30 Pennies</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 2000
                        }
                    }
                ]
            },
            {   
                id: 5,
                appearsAfter: [3],
                name: "Eternal Ice",
                questgiver: "",
                rewards: [
                    {
                        resource: "ceramic_treasure",
                        amount: 1000
                    },
                    {
                        resource: "gold_treasure",
                        amount: 800
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Glacier Mastery</b>",
                            "Complete <b>1</b> stage of <b>2</b> of the <b>Glacier</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "mead",
                            amount: 2000
                        }
                    },
                ]
            },
            {   
                id: 6,
                appearsAfter: [4],
                name: "Journey to Greatness",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 100000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>11</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>8 Building</b> on level <b>2</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 2500
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>3 Water</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 3000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>2 Fishing Pier</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Luxurious Fishing Pier</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 4000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Research <b>15</b> technologies for <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 5000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>2 Tavern</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>3 Beehive</b> on level <b>3</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 6000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>17</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>12 Building</b> on level <b>3</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 7000
                        }
                    },
                ]
            },
            {   
                id: 7,
                appearsAfter: [6],
                name: "The Final Stretch",
                questgiver: "",
                rewards: [
                    {
                        resource: "spice_treasure",
                        amount: 3500
                    },
                    {
                        resource: "jewel_treasure",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>2 Tavern</b> on level <b>4</b> in <b>Viking Kingdom</b>",
                            "Have <b>1 Sailor Port</b> on level <b>4</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 15000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>12</b> expansions in <b>Viking Kingdom</b>",
                            "Have <b>20 Building</b> on level <b>4</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "fish",
                            amount: 7500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>25</b> technologies for <b>Viking Kingdom</b>",
                        ],
                        relation: null,
                        reward: {
                            resource: "honey",
                            amount: 5000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>4 Beehive</b> on level <b>4</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 30000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>30</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>25 Building</b> on level <b>5</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "fish",
                            amount: 15000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>35</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>20 Building</b> on level <b>6</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "honey",
                            amount: 10000
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Research <b>39</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>30 Building</b> on level <b>6</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 75000
                        }
                    }
                ]
            },
            {   
                id: 10,
                appearsAfter: [3],
                name: "Yggdrasil - Phase I",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_vikings",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>1</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>3</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>5</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 2000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>10</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 4000
                        }
                    },
                ]
            },
            {   
                id: 11,
                appearsAfter: [10],
                name: "Yggdrasil - Phase II",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_vikings",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>15</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 7000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>20</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 10000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>25</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 15000
                        }
                    },
                ]
            },
            {   
                id: 112,
                appearsAfter: [11],
                name: "Yggdrasil - Phase III",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_vikings",
                        amount: 15
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>30</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 20000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>35</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 25000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>40</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 35000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>45</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 90000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>50</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "antimatter_legendary_part",
                            amount: 1
                        }
                    },
                ]
            },
        ],
        wonder: {
            name: "Valhalla",
            id: "Wonder_Vikings_Valhalla",
            image: "/allied-cultures/world-wonder/valhalla.webp",
            boostedResources: [
                {
                    id: "pennies",
                    name: "Pennies"
                }
            ],
        }
    },
    {
        id: "china_great_wall",
        name: "Guardian of Heritage",
        type: "China",
        image: "/allied-cultures/intro/city_event_banner_china_greatwall.webp",
        questlineColor: "#BF2C4E",
        questlines: [
            {   
                id: 1,
                appearsAfter: null,
                name: "Guardian of Heritage",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rise of China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 30
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>4 Small Home</b> on level <b>1</b> in <b>China</b>",
                            "Have <b>1 Medium Home</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 50
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>20 Wu Zhu</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 100
                        }
                    }
                ]
            },
            {   
                id: 2,
                appearsAfter: [1],
                name: "Rice Farms",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 2000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Ink and Brush</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 100
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>2 Rice Farms</b> on level <b>1</b> in <b>China</b>",
                            "Have <b>1 Luxurious Rice Farm</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>5 Rice</b> in <b>China</b>",
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 350
                        }
                    },
                ]
            },
            {   
                id: 3,
                appearsAfter: [1],
                name: "Silk Production",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 5000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Claim <b>Moth Glade Area</b> in <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Research <b>Sericulture</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>5 Moth Cocoon</b> in <b>China</b>",
                            "Have <b>1 Moth Glade</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "moth_cocoon",
                            amount: 40
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>1 Thread Processor</b> on level <b>1</b> in <b>China</b>",
                            "Collect <b>5 Silk Threads</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>Silk Manufacture</b>",
                            "Have <b>1 Silk Workshop</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 250
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Collect <b>3 Silk</b> in <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 250
                        }
                    }
                ]
            },
            {   
                id: 4,
                appearsAfter: [2,3],
                name: "Workforce",
                questgiver: "",
                rewards: [
                    {
                        resource: "rice",
                        amount: 300
                    },
                    {
                        resource: "moth_cocoon",
                        amount: 300
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rammed Eearth Houses</b>",
                            "Have <b>3</b> expansions in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>6 Small Home</b> on level <b>2</b> in <b>China</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "wu_zhu",
                            amount: 1000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>200 Wu Zhu</b> in <b>China</b>",
                            "Have <b>4</b> expansions in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 2500
                        }
                    },
                ]
            },
            {   
                id: 5,
                appearsAfter: [4],
                name: "Path to Greatness",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 150000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>7</b> technologies in <b>China</b>",
                            "Have <b>8 Building</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 5000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Claim <b>Western Moth Glade Area</b> in <b>China</b>",
                            "Have <b>2 Moth Glade</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>9</b> technologies for <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 750
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>2 Silk Workshop</b> on level <b>2</b> in <b>China</b>",
                            "Have <b>2 Rice Farm</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 5000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>11</b> technologies for <b>China</b>",
                            "Have <b>12 Building</b> on level <b>3</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 1500
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>Dedicated Workforce</b>",
                            "Claim <b>Southern Moth Glade Area</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "silk",
                            amount: 250
                        }
                    },
                ]
            },
            {   
                id: 6,
                appearsAfter: [4],
                name: "Mount Song Crossing",
                questgiver: "",
                rewards: [
                    {
                        resource: "silk",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Complete <b>1</b> stage of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Complete <b>2</b> stages out of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 400
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Complete <b>3</b> stages out of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 250
                        }
                    },
                ]
            },
            {   
                id: 7,
                appearsAfter: [5],
                name: "The Final Stretch",
                questgiver: "",
                rewards: [
                    {
                        resource: "porcelain",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>2 Silk Workshops</b> on level <b>4</b> in <b>China</b>",
                            "Research <b>Porcelain Production</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 10000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Claim <b>Southern Kaolin Area</b> in <b>China</b>",
                            "Have <b>1 Kaolin Quarry</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "kaolin",
                            amount: 7500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>1 Clay Processor</b> on level <b>4</b> in <b>China</b>",
                            "Have <b>1 Porcelain Workshop</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 5000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>300 Porcelain</b> in <b>China</b>",
                            "Have <b>15 Building</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 25000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>20</b> technologies for <b>China</b>",
                            "Have <b>5 Building</b> on level <b>5</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "kaolin",
                            amount: 15000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>22</b> technologies for <b>China</b>",
                            "Have <b>10 Building</b> on level <b>6</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 8000
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Research <b>25</b> technologies for <b>China</b>",
                            "Have <b>18 Building</b> on level <b>6</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 75000
                        }
                    },
                ]
            },
            {   
                id: 8,
                appearsAfter: [6],
                name: "Within Reach",
                questgiver: "",
                rewards: [
                    {
                        resource: "silk",
                        amount: 2000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Complete <b>1</b> stage of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 1000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Complete <b>2</b> stages out of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "kaolin",
                            amount: 3000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Complete <b>3</b> stages out of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 2500
                        }
                    },
                ]
            },
            {   
                id: 9,
                appearsAfter: [2,3],
                name: "The Great Wall - Phase I",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_china",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>1</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>3</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>5</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 2000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>10</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 4000
                        }
                    },
                ]
            },
            {   
                id: 10,
                appearsAfter: [9],
                name: "The Great Wall - Phase II",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_china",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>15</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 7000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>20</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 10000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>25</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 15000
                        }
                    },
                ]
            },
            {   
                id: 11,
                appearsAfter: [10],
                name: "The Great Wall - Phase III",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_china",
                        amount: 15
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>30</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 20000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>35</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 25000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>40</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 35000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>45</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 90000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>50</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "antimatter_legendary_part",
                            amount: 1
                        }
                    },
                ]
            }
        ],
        wonder: {
            name: "Great Wall",
            id: "Wonder_China_GreatWall",
            image: "/allied-cultures/world-wonder/great_wall.webp",
            boostedResources: [
                {
                    id: "rice",
                    name: "Rice"
                }
            ],
        }
    },
    {
        id: "egypt_cheops_pyramid",
        name: "The Grand Celebration",
        type: "Egypt",
        image: "/allied-cultures/intro/city_event_banner_egypt_cheopspyramid.webp",
        questlineColor: "#b9713a",
        questlines: [
            {   
                id: 1,
                appearsAfter: [],
                name: "The Grand Celebration",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 250
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rise of Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 25
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>4 Small Home</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Medium Home</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 50
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>50 Deben</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 75
                        }
                    }
                ]
            },
            {   
                id: 2,
                appearsAfter: [1],
                name: "Papyrus Scrolls",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Papyrus Scroll</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 60
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Papyrus Field</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Luxurious Papyrus Field</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "papyrus",
                            amount: 120
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>15 Papyrus</b> in <b>Egypt</b>",
                            "Have <b>1 Papyrus Press</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 200
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>4 Papyrus Scroll</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 250
                        }
                    }
                ]
            },
            {   
                id: 3,
                appearsAfter: [1],
                name: "Ankhs",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Ankh</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 40
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Gold Mine</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Luxurious Gold Mine</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "gold_ore",
                            amount: 80
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>10 Gold Ore</b> in <b>Egypt</b>",
                            "Have <b>1 Goldsmith</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "gold_ore",
                            amount: 120
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>3 Ankh</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 150
                        }
                    }
                ]
            },
            {   
                id: 4,
                appearsAfter: [2,3],
                name: "Irrigation",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 750
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>300 Deben</b> in <b>Egypt</b>",
                            "Research <b>Water Wheel</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 150
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>2</b> expansions in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 300
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>2 Small Well</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Oasis</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "gold_ore",
                            amount: 250
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>5 Building</b> in <b>Egypt</b> on irrigation level <img src='" + "/shared/resources/irrigation_1.webp" + "' style='height: 24px'> or higher"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 300
                        }
                    }
                ]
            },
            {   
                id: 5,
                appearsAfter: [4],
                name: "Workforce",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "papyrus",
                        amount: 5000
                    },
                    {
                        resource: "gold_ore",
                        amount: 3100
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Egyptian Diplomacy</b>",
                            "Have <b>3</b> expansions in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 1000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>6 Small Home</b> on level <b>2</b> in <b>Egypt</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "deben",
                            amount: 2000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>500 Deben</b> in <b>Egypt</b>",
                            "Have <b>4</b>  expansions in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 3000
                        }
                    },
                ]
            },
            {   
                id: 6,
                appearsAfter: [5],
                name: "Path to Greatness",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 250000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>7</b> technologies in <b>Egypt</b>",
                            "Have <b>8 Building</b> on level <b>2</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 10000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Research <b>9</b> technologies in <b>Egypt</b>",
                            "Have <b>4 Irrigation</b> on level <b>2</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 10000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>11</b> technologies for <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 6000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>1 Papyrus Press</b> on level <b>3</b> in <b>Egypt</b>",
                            "Have <b>1 Goldsmith</b> on level <b>3</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 30000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>11</b> technologies for <b>Egypt</b>",
                            "Have <b>12 Building</b> on level <b>3</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 20000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>Extraction Methods</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 12000
                        }
                    },
                ]
            },
            {   
                id: 7,
                appearsAfter: [5],
                name: "Crossing the Nile",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "papyrus_scroll",
                        amount: 800
                    },
                    {
                        resource: "ankh",
                        amount: 300
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Complete <b>1</b> stage of <b>3</b> of the <b>Nile Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 800
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Complete <b>2</b> stages out of <b>3</b> of the <b>Nile Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 1600
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Complete <b>3</b> stages out of <b>3</b> of the <b>Nile Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 1200
                        }
                    },
                ]
            },
            {   
                id: 8,
                appearsAfter: [6],
                name: "The Final Stretch",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "ceremonial_dress",
                        amount: 5000
                    },
                    {
                        resource: "golden_mask",
                        amount: 3300
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>1 Papyrus Press</b> on level <b>4</b> in <b>Egypt</b>",
                            "Have <b>1 Goldsmith</b> on level <b>4</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 100000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>7</b> expansions in <b>Egypt</b>",
                            "Have <b>20 Building</b> on level <b>4</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 50000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>19</b> technologies for <b>Egypt</b>",
                            "Have <b>5 Irrigation</b> on level <b>5</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "gold_ore",
                            amount: 30000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>15 Building</b> in <b>Egypt</b> on irrigation level <img src='" + "/shared/resources/irrigation_3.webp" + "' style='height: 24px'>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 150000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>23</b> technologies for <b>Egypt</b>",
                            "Have <b>25 Building</b> on level <b>5</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 100000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Have <b>6 Irrigation</b> on level <b>6</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 60000
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Research <b>25</b> technologies for <b>Egypt</b>",
                            "Have <b>28 Building</b> on level <b>6</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 200000
                        }
                    },
                    {
                        id: 8,
                        tasks: [
                            "Research <b>27</b> technologies for <b>Egypt</b>",
                            "Have <b>34 Building</b> on level <b>6</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 300000
                        }
                    },
                ]
            },
            {   
                id: 9,
                appearsAfter: [2,3],
                name: "The Cheops Pyramid - Phase I",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "antimatter_egyptian",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>1</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 500
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>3</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 1000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>5</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 1500
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>10</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 3000
                        }
                    },
                ]
            },
            {   
                id: 10,
                appearsAfter: [9],
                name: "The Cheops Pyramid - Phase II",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "antimatter_egyptian",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>15</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 10000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>20</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 15000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>25</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 20000
                        }
                    },
                ]
            },
            {   
                id: 11,
                appearsAfter: [10],
                name: "The Cheops Pyramid - Phase III",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "antimatter_egyptian",
                        amount: 15
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>30</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 30000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>35</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 50000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>40</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 100000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>45</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 250000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>Cheops Pyramid</b> on level <b>50</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "antimatter_legendary_part",
                            amount: 1
                        }
                    },
                ]
            }
        ],
        wonder: {
            name: "Cheops Pyramid",
            id: "Wonder_Egypt_CheopsPyramid",
            image: "/allied-cultures/world-wonder/cheops_pyramid.webp",
            boostedResources: [
                {
                    id: "deben",
                    name: "Deben"
                }
            ],
        }
    },
    {
        id: "vikings_yggdrasil",
        name: "Leaves of Fate",
        type: "Vikings",
        image: "/allied-cultures/intro/city_event_banner_vikings_yggdrasil.webp",
        questlineColor: "#4C80A2",
        questlines: [
            {   
                id: 1,
                appearsAfter: [],
                name: "Leaves of Fate",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 250
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rise of the Vikings</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 30
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>4 Worker Home</b> on level <b>1</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Sailor Home</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 50
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>20 Pennies</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 100
                        }
                    }
                ]
            },
            {   
                id: 2,
                appearsAfter: [1],
                name: "Expedition Preparations",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 750
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Seafaring</b>",
                            "Have <b>1 Water</b> expansion in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 150
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Fishing Pier</b> on level <b>1</b> in <b>Viking Pier</b>",
                            "Have <b>1 Luxurious Fishing Pier</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 200
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>10 Fish</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "fish",
                            amount: 200
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Research <b>Beekeeping</b>",
                            "Have <b>1 Beehive</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 300
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Collect <b>5 Honey</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "honey",
                            amount: 150
                        }
                    }
                ]
            },
            {   
                id: 3,
                appearsAfter: [2],
                name: "Provisions",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 1500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Mead Brewery</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 350
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Tavern</b> on level <b>1</b> in <b>Viking Kingdom</b>",
                            "Collect <b>20 Mead</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "fish",
                            amount: 400
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>Plundering Raids</b>",
                            "Have <b>2 Water</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 800
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>1 Expedition Pier</b> on level <b>1</b> in <b>Viking Kingdom</b>",
                            "Have <b>1 Luxurious Sailor Port</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "honey",
                            amount: 300
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Collect <b>3 Ceramic Treasure</b> in <b>Viking Kingdom</b>",
                            "Collect <b>2 Gold Treasure</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 1000
                        }
                    }
                ]
            },
            {   
                id: 4,
                appearsAfter: [3],
                name: "Workforce",
                questgiver: "",
                rewards: [
                    {
                        resource: "honey",
                        amount: 2000
                    },
                    {
                        resource: "fish",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Jarldom</b>",
                            "Have <b>4</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 1200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>6 Worker Home</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 1100
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>Thralls and Karls</b>",
                            "Have <b>5</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 1400
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>2 Sailor Home</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 1700
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Collect <b>30 Pennies</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 2000
                        }
                    }
                ]
            },
            {   
                id: 5,
                appearsAfter: [3],
                name: "Eternal Ice",
                questgiver: "",
                rewards: [
                    {
                        resource: "ceramic_treasure",
                        amount: 1000
                    },
                    {
                        resource: "gold_treasure",
                        amount: 800
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Glacier Mastery</b>",
                            "Complete <b>1</b> stage of <b>2</b> of the <b>Glacier</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "mead",
                            amount: 2000
                        }
                    },
                ]
            },
            {   
                id: 6,
                appearsAfter: [4],
                name: "Journey to Greatness",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 100000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>11</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>8 Building</b> on level <b>2</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 2500
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>3 Water</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 3000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>2 Fishing Pier</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Luxurious Fishing Pier</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 4000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Research <b>15</b> technologies for <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 5000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>2 Tavern</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>3 Beehive</b> on level <b>3</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 6000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>17</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>12 Building</b> on level <b>3</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 7000
                        }
                    },
                ]
            },
            {   
                id: 7,
                appearsAfter: [6],
                name: "The Final Stretch",
                questgiver: "",
                rewards: [
                    {
                        resource: "spice_treasure",
                        amount: 3500
                    },
                    {
                        resource: "jewel_treasure",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>2 Tavern</b> on level <b>4</b> in <b>Viking Kingdom</b>",
                            "Have <b>1 Sailor Port</b> on level <b>4</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 15000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>12</b> expansions in <b>Viking Kingdom</b>",
                            "Have <b>20 Building</b> on level <b>4</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "fish",
                            amount: 7500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>25</b> technologies for <b>Viking Kingdom</b>",
                        ],
                        relation: null,
                        reward: {
                            resource: "honey",
                            amount: 5000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>4 Beehive</b> on level <b>4</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 30000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>30</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>25 Building</b> on level <b>5</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "fish",
                            amount: 15000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>35</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>20 Building</b> on level <b>6</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "honey",
                            amount: 10000
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Research <b>39</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>30 Building</b> on level <b>6</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 75000
                        }
                    }
                ]
            },
            {   
                id: 10,
                appearsAfter: [3],
                name: "Yggdrasil - Phase I",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_vikings",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>1</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>3</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>5</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 2000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>10</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 4000
                        }
                    },
                ]
            },
            {   
                id: 11,
                appearsAfter: [10],
                name: "Yggdrasil - Phase II",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_vikings",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>15</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 7000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>20</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 10000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>25</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 15000
                        }
                    },
                ]
            },
            {   
                id: 112,
                appearsAfter: [11],
                name: "Yggdrasil - Phase III",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_vikings",
                        amount: 15
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>30</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 20000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>35</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 25000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>40</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 35000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>45</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 90000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>50</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "antimatter_legendary_part",
                            amount: 1
                        }
                    },
                ]
            },
        ],
        wonder: {
            name: "Yggdrasil",
            id: "Wonder_Vikings_Yggdrasil",
            image: "/allied-cultures/world-wonder/yggdrasil.webp",
            boostedResources: [
                {
                    id: "honey",
                    name: "Honey"
                }
            ],
        }
    },
    {
        id: "china_terracotta_army",
        name: "The Festival of Warriors",
        type: "China",
        image: "/allied-cultures/intro/city_event_banner_china_terracottaarmy.webp",
        questlineColor: "#BF2C4E",
        questlines: [
            {   
                id: 1,
                appearsAfter: null,
                name: "The Festival of Warriors",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rise of China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 30
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>4 Small Home</b> on level <b>1</b> in <b>China</b>",
                            "Have <b>1 Medium Home</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 50
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>20 Wu Zhu</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 100
                        }
                    }
                ]
            },
            {   
                id: 2,
                appearsAfter: [1],
                name: "Rice Farms",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 2000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Ink and Brush</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 100
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>2 Rice Farms</b> on level <b>1</b> in <b>China</b>",
                            "Have <b>1 Luxurious Rice Farm</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>5 Rice</b> in <b>China</b>",
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 350
                        }
                    },
                ]
            },
            {   
                id: 3,
                appearsAfter: [1],
                name: "Silk Production",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 5000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Claim <b>Moth Glade Area</b> in <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Research <b>Sericulture</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>5 Moth Cocoon</b> in <b>China</b>",
                            "Have <b>1 Moth Glade</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "moth_cocoon",
                            amount: 40
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>1 Thread Processor</b> on level <b>1</b> in <b>China</b>",
                            "Collect <b>5 Silk Threads</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>Silk Manufacture</b>",
                            "Have <b>1 Silk Workshop</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 250
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Collect <b>3 Silk</b> in <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 250
                        }
                    }
                ]
            },
            {   
                id: 4,
                appearsAfter: [2,3],
                name: "Workforce",
                questgiver: "",
                rewards: [
                    {
                        resource: "rice",
                        amount: 300
                    },
                    {
                        resource: "moth_cocoon",
                        amount: 300
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rammed Eearth Houses</b>",
                            "Have <b>3</b> expansions in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>6 Small Home</b> on level <b>2</b> in <b>China</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "wu_zhu",
                            amount: 1000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>200 Wu Zhu</b> in <b>China</b>",
                            "Have <b>4</b> expansions in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 2500
                        }
                    },
                ]
            },
            {   
                id: 5,
                appearsAfter: [4],
                name: "Path to Greatness",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 150000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>7</b> technologies in <b>China</b>",
                            "Have <b>8 Building</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 5000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Claim <b>Western Moth Glade Area</b> in <b>China</b>",
                            "Have <b>2 Moth Glade</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>9</b> technologies for <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 750
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>2 Silk Workshop</b> on level <b>2</b> in <b>China</b>",
                            "Have <b>2 Rice Farm</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 5000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>11</b> technologies for <b>China</b>",
                            "Have <b>12 Building</b> on level <b>3</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 1500
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>Dedicated Workforce</b>",
                            "Claim <b>Southern Moth Glade Area</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "silk",
                            amount: 250
                        }
                    },
                ]
            },
            {   
                id: 6,
                appearsAfter: [4],
                name: "Mount Song Crossing",
                questgiver: "",
                rewards: [
                    {
                        resource: "silk",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Complete <b>1</b> stage of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Complete <b>2</b> stages out of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 400
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Complete <b>3</b> stages out of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 250
                        }
                    },
                ]
            },
            {   
                id: 7,
                appearsAfter: [5],
                name: "The Final Stretch",
                questgiver: "",
                rewards: [
                    {
                        resource: "porcelain",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>2 Silk Workshops</b> on level <b>4</b> in <b>China</b>",
                            "Research <b>Porcelain Production</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 10000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Claim <b>Southern Kaolin Area</b> in <b>China</b>",
                            "Have <b>1 Kaolin Quarry</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "kaolin",
                            amount: 7500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>1 Clay Processor</b> on level <b>4</b> in <b>China</b>",
                            "Have <b>1 Porcelain Workshop</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 5000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>300 Porcelain</b> in <b>China</b>",
                            "Have <b>15 Building</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 25000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>20</b> technologies for <b>China</b>",
                            "Have <b>5 Building</b> on level <b>5</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "kaolin",
                            amount: 15000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>22</b> technologies for <b>China</b>",
                            "Have <b>10 Building</b> on level <b>6</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 8000
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Research <b>25</b> technologies for <b>China</b>",
                            "Have <b>18 Building</b> on level <b>6</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 75000
                        }
                    },
                ]
            },
            {   
                id: 8,
                appearsAfter: [6],
                name: "Within Reach",
                questgiver: "",
                rewards: [
                    {
                        resource: "silk",
                        amount: 2000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Complete <b>1</b> stage of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 1000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Complete <b>2</b> stages out of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "kaolin",
                            amount: 3000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Complete <b>3</b> stages out of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 2500
                        }
                    },
                ]
            },
            {   
                id: 9,
                appearsAfter: [2,3],
                name: "Terracotta Army - Phase I",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_china",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>1</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>3</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>5</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 2000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>10</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 4000
                        }
                    },
                ]
            },
            {   
                id: 10,
                appearsAfter: [9],
                name: "Terracotta Army - Phase II",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_china",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>15</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 7000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>20</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 10000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>25</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 15000
                        }
                    },
                ]
            },
            {   
                id: 11,
                appearsAfter: [10],
                name: "Terracotta Army - Phase III",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_china",
                        amount: 15
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>30</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 20000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>35</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 25000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>40</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 35000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>45</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 90000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>Terracotta Army</b> on level <b>50</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "antimatter_legendary_part",
                            amount: 1
                        }
                    },
                ]
            }
        ],
        wonder: {
            name: "Terracotta Army",
            id: "Wonder_China_TerracottaArmy",
            image: "/allied-cultures/world-wonder/terracotta_army.webp",
            boostedResources: [
                {
                    id: "wu_zhu",
                    name: "Wu Zhu"
                }
            ],
        }
    },
    {
        id: "egypt_great_sphinx",
        name: "The Trade Exhibition",
        type: "Egypt",
        image: "/allied-cultures/intro/city_event_banner_egypt_great_sphinx.webp",
        questlineColor: "#b9713a",
        questlines: [
            {   
                id: 1,
                appearsAfter: [],
                name: "The Trade Exhibition",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 250
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rise of Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 25
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>4 Small Home</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Medium Home</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 50
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>50 Deben</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 75
                        }
                    }
                ]
            },
            {   
                id: 2,
                appearsAfter: [1],
                name: "Papyrus Scrolls",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Papyrus Scroll</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 60
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Papyrus Field</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Luxurious Papyrus Field</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "papyrus",
                            amount: 120
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>15 Papyrus</b> in <b>Egypt</b>",
                            "Have <b>1 Papyrus Press</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 200
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>4 Papyrus Scroll</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 250
                        }
                    }
                ]
            },
            {   
                id: 3,
                appearsAfter: [1],
                name: "Ankhs",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Ankh</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 40
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Gold Mine</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Luxurious Gold Mine</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "gold_ore",
                            amount: 80
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>10 Gold Ore</b> in <b>Egypt</b>",
                            "Have <b>1 Goldsmith</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "gold_ore",
                            amount: 120
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>3 Ankh</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 150
                        }
                    }
                ]
            },
            {   
                id: 4,
                appearsAfter: [2,3],
                name: "Irrigation",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 750
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>300 Deben</b> in <b>Egypt</b>",
                            "Research <b>Water Wheel</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 150
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>2</b> expansions in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 300
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>2 Small Well</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Oasis</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "gold_ore",
                            amount: 250
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>5 Building</b> in <b>Egypt</b> on irrigation level <img src='" + "/shared/resources/irrigation_1.webp" + "' style='height: 24px'> or higher"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 300
                        }
                    }
                ]
            },
            {   
                id: 5,
                appearsAfter: [4],
                name: "Workforce",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "papyrus",
                        amount: 5000
                    },
                    {
                        resource: "gold_ore",
                        amount: 3100
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Egyptian Diplomacy</b>",
                            "Have <b>3</b> expansions in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 1000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>6 Small Home</b> on level <b>2</b> in <b>Egypt</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "deben",
                            amount: 2000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>500 Deben</b> in <b>Egypt</b>",
                            "Have <b>4</b>  expansions in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 3000
                        }
                    },
                ]
            },
            {   
                id: 6,
                appearsAfter: [5],
                name: "Path to Greatness",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "deben",
                        amount: 250000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>7</b> technologies in <b>Egypt</b>",
                            "Have <b>8 Building</b> on level <b>2</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 10000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Research <b>9</b> technologies in <b>Egypt</b>",
                            "Have <b>4 Irrigation</b> on level <b>2</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 10000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>11</b> technologies for <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 6000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>1 Papyrus Press</b> on level <b>3</b> in <b>Egypt</b>",
                            "Have <b>1 Goldsmith</b> on level <b>3</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 30000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>11</b> technologies for <b>Egypt</b>",
                            "Have <b>12 Building</b> on level <b>3</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 20000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>Extraction Methods</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 12000
                        }
                    },
                ]
            },
            {   
                id: 7,
                appearsAfter: [5],
                name: "Crossing the Nile",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "papyrus_scroll",
                        amount: 800
                    },
                    {
                        resource: "ankh",
                        amount: 300
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Complete <b>1</b> stage of <b>3</b> of the <b>Nile Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 800
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Complete <b>2</b> stages out of <b>3</b> of the <b>Nile Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 1600
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Complete <b>3</b> stages out of <b>3</b> of the <b>Nile Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 1200
                        }
                    },
                ]
            },
            {   
                id: 8,
                appearsAfter: [6],
                name: "The Final Stretch",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "ceremonial_dress",
                        amount: 5000
                    },
                    {
                        resource: "golden_mask",
                        amount: 3300
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>1 Papyrus Press</b> on level <b>4</b> in <b>Egypt</b>",
                            "Have <b>1 Goldsmith</b> on level <b>4</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 100000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>7</b> expansions in <b>Egypt</b>",
                            "Have <b>20 Building</b> on level <b>4</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 50000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>19</b> technologies for <b>Egypt</b>",
                            "Have <b>5 Irrigation</b> on level <b>5</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "gold_ore",
                            amount: 30000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>15 Building</b> in <b>Egypt</b> on irrigation level <img src='" + "/shared/resources/irrigation_3.webp" + "' style='height: 24px'>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 150000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>23</b> technologies for <b>Egypt</b>",
                            "Have <b>25 Building</b> on level <b>5</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 100000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Have <b>6 Irrigation</b> on level <b>6</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 60000
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Research <b>25</b> technologies for <b>Egypt</b>",
                            "Have <b>28 Building</b> on level <b>6</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 200000
                        }
                    },
                    {
                        id: 8,
                        tasks: [
                            "Research <b>27</b> technologies for <b>Egypt</b>",
                            "Have <b>34 Building</b> on level <b>6</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 300000
                        }
                    },
                ]
            },
            {   
                id: 9,
                appearsAfter: [2,3],
                name: "The Great Sphinx - Phase I",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "antimatter_egyptian",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>1</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 500
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>3</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 1000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>5</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 1500
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>10</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 3000
                        }
                    },
                ]
            },
            {   
                id: 10,
                appearsAfter: [9],
                name: "The Great Sphinx - Phase II",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "antimatter_egyptian",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>15</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 10000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>20</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 15000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>25</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 20000
                        }
                    },
                ]
            },
            {   
                id: 11,
                appearsAfter: [10],
                name: "The Great Sphinx - Phase III",
                questgiver: "/allied-cultures/quests/Questgiver_Egypt_Cleopatra.webp",
                rewards: [
                    {
                        resource: "antimatter_egyptian",
                        amount: 15
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>30</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 30000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>35</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 50000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>40</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 100000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>45</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 250000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>Great Sphinx</b> on level <b>50</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "antimatter_legendary_part",
                            amount: 1
                        }
                    },
                ]
            }
        ],
        wonder: {
            name: "Great Sphinx",
            id: "Wonder_Egypt_GreatSphinx",
            image: "/allied-cultures/world-wonder/great_sphinx.webp",
            boostedResources: [
                {
                    id: "gold_ore",
                    name: "Gold Ore"
                }
            ],
        }
    },
    {
        id: "vikings_ellida",
        name: "Ellida's Wake",
        type: "Vikings",
        image: "/allied-cultures/intro/city_event_banner_vikings_dragonshipellida.webp",
        questlineColor: "#4C80A2",
        questlines: [
            {   
                id: 1,
                appearsAfter: [],
                name: "Leaves of Fate",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 250
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rise of the Vikings</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 30
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>4 Worker Home</b> on level <b>1</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Sailor Home</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 50
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>20 Pennies</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 100
                        }
                    }
                ]
            },
            {   
                id: 2,
                appearsAfter: [1],
                name: "Expedition Preparations",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 750
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Seafaring</b>",
                            "Have <b>1 Water</b> expansion in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 150
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Fishing Pier</b> on level <b>1</b> in <b>Viking Pier</b>",
                            "Have <b>1 Luxurious Fishing Pier</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 200
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>10 Fish</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "fish",
                            amount: 200
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Research <b>Beekeeping</b>",
                            "Have <b>1 Beehive</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 300
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Collect <b>5 Honey</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "honey",
                            amount: 150
                        }
                    }
                ]
            },
            {   
                id: 3,
                appearsAfter: [2],
                name: "Provisions",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 1500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Mead Brewery</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 350
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Tavern</b> on level <b>1</b> in <b>Viking Kingdom</b>",
                            "Collect <b>20 Mead</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "fish",
                            amount: 400
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>Plundering Raids</b>",
                            "Have <b>2 Water</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 800
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>1 Expedition Pier</b> on level <b>1</b> in <b>Viking Kingdom</b>",
                            "Have <b>1 Luxurious Sailor Port</b> on level <b>1</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "honey",
                            amount: 300
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Collect <b>3 Ceramic Treasure</b> in <b>Viking Kingdom</b>",
                            "Collect <b>2 Gold Treasure</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 1000
                        }
                    }
                ]
            },
            {   
                id: 4,
                appearsAfter: [3],
                name: "Workforce",
                questgiver: "",
                rewards: [
                    {
                        resource: "honey",
                        amount: 2000
                    },
                    {
                        resource: "fish",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Jarldom</b>",
                            "Have <b>4</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 1200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>6 Worker Home</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 1100
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>Thralls and Karls</b>",
                            "Have <b>5</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 1400
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>2 Sailor Home</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 1700
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Collect <b>30 Pennies</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 2000
                        }
                    }
                ]
            },
            {   
                id: 5,
                appearsAfter: [3],
                name: "Eternal Ice",
                questgiver: "",
                rewards: [
                    {
                        resource: "ceramic_treasure",
                        amount: 1000
                    },
                    {
                        resource: "gold_treasure",
                        amount: 800
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Glacier Mastery</b>",
                            "Complete <b>1</b> stage of <b>2</b> of the <b>Glacier</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "mead",
                            amount: 2000
                        }
                    },
                ]
            },
            {   
                id: 6,
                appearsAfter: [4],
                name: "Journey to Greatness",
                questgiver: "",
                rewards: [
                    {
                        resource: "pennies",
                        amount: 100000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>11</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>8 Building</b> on level <b>2</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 2500
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>3 Water</b> expansions in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 3000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>2 Fishing Pier</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>2 Luxurious Fishing Pier</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                        ],
                        relation: "or",
                        reward: {
                            resource: "pennies",
                            amount: 4000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Research <b>15</b> technologies for <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 5000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>2 Tavern</b> on level <b>2</b> in <b>Viking Kingdom</b>",
                            "Have <b>3 Beehive</b> on level <b>3</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 6000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>17</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>12 Building</b> on level <b>3</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 7000
                        }
                    },
                ]
            },
            {   
                id: 7,
                appearsAfter: [6],
                name: "The Final Stretch",
                questgiver: "",
                rewards: [
                    {
                        resource: "spice_treasure",
                        amount: 3500
                    },
                    {
                        resource: "jewel_treasure",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>2 Tavern</b> on level <b>4</b> in <b>Viking Kingdom</b>",
                            "Have <b>1 Sailor Port</b> on level <b>4</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 15000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>12</b> expansions in <b>Viking Kingdom</b>",
                            "Have <b>20 Building</b> on level <b>4</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "fish",
                            amount: 7500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>25</b> technologies for <b>Viking Kingdom</b>",
                        ],
                        relation: null,
                        reward: {
                            resource: "honey",
                            amount: 5000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>4 Beehive</b> on level <b>4</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 30000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>30</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>25 Building</b> on level <b>5</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "fish",
                            amount: 15000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>35</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>20 Building</b> on level <b>6</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "honey",
                            amount: 10000
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Research <b>39</b> technologies for <b>Viking Kingdom</b>",
                            "Have <b>30 Building</b> on level <b>6</b> in <b>Viking Kingdom</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "pennies",
                            amount: 75000
                        }
                    }
                ]
            },
            {   
                id: 10,
                appearsAfter: [3],
                name: "Yggdrasil - Phase I",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_vikings",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>1</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>3</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>5</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 2000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>10</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 4000
                        }
                    },
                ]
            },
            {   
                id: 11,
                appearsAfter: [10],
                name: "Yggdrasil - Phase II",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_vikings",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>15</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 7000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>20</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 10000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>25</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 15000
                        }
                    },
                ]
            },
            {   
                id: 112,
                appearsAfter: [11],
                name: "Yggdrasil - Phase III",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_vikings",
                        amount: 15
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>30</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 20000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>35</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 25000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>40</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 35000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>45</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "pennies",
                            amount: 90000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>Yggdrasil</b> on level <b>50</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "antimatter_legendary_part",
                            amount: 1
                        }
                    },
                ]
            },
        ],
        wonder: {
            name: "Dragonship Ellida",
            id: "Wonder_Vikings_DragonshipEllida",
            image: "/allied-cultures/world-wonder/dragonship_ellida.webp",
            boostedResources: [
                {
                    id: "honey",
                    name: "Honey"
                },
                {
                    id: "pennies",
                    name: "Pennies"
                }
            ],
        }
    },
    {
        id: "china_forbidden_city",
        name: "The Festival of Lights",
        type: "China",
        image: "/allied-cultures/intro/city_event_banner_china_forbiddencity.png",
        questlineColor: "#BF2C4E",
        questlines: [
            {   
                id: 1,
                appearsAfter: null,
                name: "The Festival of Lights",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rise of China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 30
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>4 Small Home</b> on level <b>1</b> in <b>China</b>",
                            "Have <b>1 Medium Home</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 50
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>20 Wu Zhu</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 100
                        }
                    }
                ]
            },
            {   
                id: 2,
                appearsAfter: [1],
                name: "Rice Farms",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 2000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Ink and Brush</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 100
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>2 Rice Farms</b> on level <b>1</b> in <b>China</b>",
                            "Have <b>1 Luxurious Rice Farm</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>5 Rice</b> in <b>China</b>",
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 350
                        }
                    },
                ]
            },
            {   
                id: 3,
                appearsAfter: [1],
                name: "Silk Production",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 5000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Claim <b>Moth Glade Area</b> in <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Research <b>Sericulture</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>5 Moth Cocoon</b> in <b>China</b>",
                            "Have <b>1 Moth Glade</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "moth_cocoon",
                            amount: 40
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>1 Thread Processor</b> on level <b>1</b> in <b>China</b>",
                            "Collect <b>5 Silk Threads</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>Silk Manufacture</b>",
                            "Have <b>1 Silk Workshop</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 250
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Collect <b>3 Silk</b> in <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 250
                        }
                    }
                ]
            },
            {   
                id: 4,
                appearsAfter: [2,3],
                name: "Workforce",
                questgiver: "",
                rewards: [
                    {
                        resource: "rice",
                        amount: 300
                    },
                    {
                        resource: "moth_cocoon",
                        amount: 300
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rammed Eearth Houses</b>",
                            "Have <b>3</b> expansions in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>6 Small Home</b> on level <b>2</b> in <b>China</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "wu_zhu",
                            amount: 1000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>200 Wu Zhu</b> in <b>China</b>",
                            "Have <b>4</b> expansions in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 2500
                        }
                    },
                ]
            },
            {   
                id: 5,
                appearsAfter: [4],
                name: "Path to Greatness",
                questgiver: "",
                rewards: [
                    {
                        resource: "wu_zhu",
                        amount: 150000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>7</b> technologies in <b>China</b>",
                            "Have <b>8 Building</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 5000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Claim <b>Western Moth Glade Area</b> in <b>China</b>",
                            "Have <b>2 Moth Glade</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>9</b> technologies for <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 750
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>2 Silk Workshop</b> on level <b>2</b> in <b>China</b>",
                            "Have <b>2 Rice Farm</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 5000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>11</b> technologies for <b>China</b>",
                            "Have <b>12 Building</b> on level <b>3</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 1500
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>Dedicated Workforce</b>",
                            "Claim <b>Southern Moth Glade Area</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "silk",
                            amount: 250
                        }
                    },
                ]
            },
            {   
                id: 6,
                appearsAfter: [4],
                name: "Mount Song Crossing",
                questgiver: "",
                rewards: [
                    {
                        resource: "silk",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Complete <b>1</b> stage of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Complete <b>2</b> stages out of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 400
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Complete <b>3</b> stages out of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 250
                        }
                    },
                ]
            },
            {   
                id: 7,
                appearsAfter: [5],
                name: "The Final Stretch",
                questgiver: "",
                rewards: [
                    {
                        resource: "porcelain",
                        amount: 1000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>2 Silk Workshops</b> on level <b>4</b> in <b>China</b>",
                            "Research <b>Porcelain Production</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 10000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Claim <b>Southern Kaolin Area</b> in <b>China</b>",
                            "Have <b>1 Kaolin Quarry</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "kaolin",
                            amount: 7500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>1 Clay Processor</b> on level <b>4</b> in <b>China</b>",
                            "Have <b>1 Porcelain Workshop</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 5000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>300 Porcelain</b> in <b>China</b>",
                            "Have <b>15 Building</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 25000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>20</b> technologies for <b>China</b>",
                            "Have <b>5 Building</b> on level <b>5</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "kaolin",
                            amount: 15000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>22</b> technologies for <b>China</b>",
                            "Have <b>10 Building</b> on level <b>6</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 8000
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Research <b>25</b> technologies for <b>China</b>",
                            "Have <b>18 Building</b> on level <b>6</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 75000
                        }
                    },
                ]
            },
            {   
                id: 8,
                appearsAfter: [6],
                name: "Within Reach",
                questgiver: "",
                rewards: [
                    {
                        resource: "silk",
                        amount: 2000
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Complete <b>1</b> stage of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 1000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Complete <b>2</b> stages out of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "kaolin",
                            amount: 3000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Complete <b>3</b> stages out of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 2500
                        }
                    },
                ]
            },
            {   
                id: 9,
                appearsAfter: [2,3],
                name: "Forbidden City - Phase I",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_china",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>1</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>3</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>5</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 2000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>10</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 4000
                        }
                    },
                ]
            },
            {   
                id: 10,
                appearsAfter: [9],
                name: "Forbidden City - Phase II",
                questgiver: "",
                reward: [
                    {
                        resource: "antimatter_china",
                        amount: 2
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>15</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 7000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>20</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 10000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>25</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 15000
                        }
                    },
                ]
            },
            {   
                id: 11,
                appearsAfter: [10],
                name: "Forbidden City - Phase III",
                questgiver: "",
                rewards: [
                    {
                        resource: "antimatter_china",
                        amount: 15
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>30</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 20000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>35</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 25000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>40</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 35000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>45</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 90000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>Forbidden City</b> on level <b>50</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "antimatter_legendary_part",
                            amount: 1
                        }
                    },
                ]
            }
        ],
        wonder: {
            name: "Forbidden City",
            id: "Wonder_China_ForbiddenCity",
            image: "/allied-cultures/world-wonder/forbidden_city.webp",
            boostedResources: [
                {
                    id: "wu_zhu",
                    name: "Wu Zhu"
                },
                {
                    id: "rice",
                    name: "Rice"
                }
            ],
        }
    },
]

export default allAlliedCultures;