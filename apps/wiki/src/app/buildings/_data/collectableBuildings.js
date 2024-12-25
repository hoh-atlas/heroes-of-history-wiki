const collectableBuildings = [
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_BronzeAge_Collectable_SchoolV2_10",
        "type": "collectable",
        "width": 3,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_BronzeAge_Collectable_SchoolV2_10"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_BronzeAge_Collectable_SchoolV2_10",
                "duration": "7200s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_BronzeAge_Collectable_SchoolV2_10"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_BronzeAge_Collectable_SchoolV2_10",
                "type": "ProductionType_WORKER",
                "duration": "28800s",
                "minCollectionPeriod": "28800s",
                "skipPricePerMinute": 0.3,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 4
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-200000",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/RewardDefinitionDTO",
                            "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_10",
                            "rewards": [
                                {
                                    "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                    "baseData": {
                                        "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_10_Id"
                                    },
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_10_1"
                                            },
                                            "resource": "research_points",
                                            "amount": "3"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_10_2"
                                            },
                                            "resource": "research_points",
                                            "amount": "4"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_10_3"
                                            },
                                            "resource": "research_points",
                                            "amount": "5"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_10_4"
                                            },
                                            "resource": "research_points",
                                            "amount": "7"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_10_5"
                                            },
                                            "resource": "research_points",
                                            "amount": "10"
                                        }
                                    ],
                                    "chances": [
                                        20,
                                        40,
                                        25,
                                        10,
                                        5
                                    ],
                                    "assetId": "icon_chest_rp",
                                    "randomSeedCounter": "default"
                                }
                            ],
                            "baseData": {
                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_10"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_BronzeAge_Collectable_SchoolV2_10",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "BronzeAge",
        "group": "collectableSchoolV2",
        "level": 10
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_9",
        "type": "collectable",
        "width": 2,
        "height": 2,
        "components": [
            {
                "@type": "type.googleapis.com/GrantWorkerComponentDTO",
                "id": "GrantWorker1_Building_MinoanEra_Collectable_MinoanWatchtowerV2_9",
                "amount": 2
            },
            {
                "@type": "type.googleapis.com/CultureComponentDTO",
                "id": "Culture_Building_MinoanEra_Collectable_MinoanWatchtowerV2_9",
                "range": 3,
                "points": 1450
            },
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_MinoanEra_Collectable_MinoanWatchtowerV2_9"
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_MinoanEra_Collectable_MinoanWatchtowerV2_9",
                "target": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_10",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-75",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_MinoanEra_Collectable_MinoanWatchtowerV2_9",
                "duration": "10800s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_MinoanEra_Collectable_MinoanWatchtowerV2_9"
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_MinoanEra_Collectable_MinoanWatchtowerV2_9",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "age": "MinoanEra",
        "group": "collectableMinoanWatchtowerV2",
        "level": 9
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_8",
        "type": "collectable",
        "width": 2,
        "height": 2,
        "components": [
            {
                "@type": "type.googleapis.com/GrantWorkerComponentDTO",
                "id": "GrantWorker1_Building_MinoanEra_Collectable_MinoanWatchtowerV2_8",
                "amount": 2
            },
            {
                "@type": "type.googleapis.com/CultureComponentDTO",
                "id": "Culture_Building_MinoanEra_Collectable_MinoanWatchtowerV2_8",
                "range": 3,
                "points": 1200
            },
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_MinoanEra_Collectable_MinoanWatchtowerV2_8"
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_MinoanEra_Collectable_MinoanWatchtowerV2_8",
                "target": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_9",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-70",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_MinoanEra_Collectable_MinoanWatchtowerV2_8",
                "duration": "10800s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_MinoanEra_Collectable_MinoanWatchtowerV2_8"
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_MinoanEra_Collectable_MinoanWatchtowerV2_8",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "age": "MinoanEra",
        "group": "collectableMinoanWatchtowerV2",
        "level": 8
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_7",
        "type": "collectable",
        "width": 2,
        "height": 2,
        "components": [
            {
                "@type": "type.googleapis.com/GrantWorkerComponentDTO",
                "id": "GrantWorker1_Building_MinoanEra_Collectable_MinoanWatchtowerV2_7",
                "amount": 2
            },
            {
                "@type": "type.googleapis.com/CultureComponentDTO",
                "id": "Culture_Building_MinoanEra_Collectable_MinoanWatchtowerV2_7",
                "range": 3,
                "points": 1000
            },
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_MinoanEra_Collectable_MinoanWatchtowerV2_7"
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_MinoanEra_Collectable_MinoanWatchtowerV2_7",
                "target": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_8",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-65",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_MinoanEra_Collectable_MinoanWatchtowerV2_7",
                "duration": "10800s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_MinoanEra_Collectable_MinoanWatchtowerV2_7"
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_MinoanEra_Collectable_MinoanWatchtowerV2_7",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "age": "MinoanEra",
        "group": "collectableMinoanWatchtowerV2",
        "level": 7
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_6",
        "type": "collectable",
        "width": 2,
        "height": 2,
        "components": [
            {
                "@type": "type.googleapis.com/GrantWorkerComponentDTO",
                "id": "GrantWorker1_Building_MinoanEra_Collectable_MinoanWatchtowerV2_6",
                "amount": 2
            },
            {
                "@type": "type.googleapis.com/CultureComponentDTO",
                "id": "Culture_Building_MinoanEra_Collectable_MinoanWatchtowerV2_6",
                "range": 3,
                "points": 850
            },
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_MinoanEra_Collectable_MinoanWatchtowerV2_6"
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_MinoanEra_Collectable_MinoanWatchtowerV2_6",
                "target": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_7",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-60",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_MinoanEra_Collectable_MinoanWatchtowerV2_6",
                "duration": "10800s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_MinoanEra_Collectable_MinoanWatchtowerV2_6"
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_MinoanEra_Collectable_MinoanWatchtowerV2_6",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "age": "MinoanEra",
        "group": "collectableMinoanWatchtowerV2",
        "level": 6
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_5",
        "type": "collectable",
        "width": 2,
        "height": 2,
        "components": [
            {
                "@type": "type.googleapis.com/GrantWorkerComponentDTO",
                "id": "GrantWorker1_Building_MinoanEra_Collectable_MinoanWatchtowerV2_5",
                "amount": 2
            },
            {
                "@type": "type.googleapis.com/CultureComponentDTO",
                "id": "Culture_Building_MinoanEra_Collectable_MinoanWatchtowerV2_5",
                "range": 3,
                "points": 720
            },
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_MinoanEra_Collectable_MinoanWatchtowerV2_5"
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_MinoanEra_Collectable_MinoanWatchtowerV2_5",
                "target": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_6",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-55",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_MinoanEra_Collectable_MinoanWatchtowerV2_5",
                "duration": "10800s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_MinoanEra_Collectable_MinoanWatchtowerV2_5"
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_MinoanEra_Collectable_MinoanWatchtowerV2_5",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "age": "MinoanEra",
        "group": "collectableMinoanWatchtowerV2",
        "level": 5
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_4",
        "type": "collectable",
        "width": 2,
        "height": 2,
        "components": [
            {
                "@type": "type.googleapis.com/GrantWorkerComponentDTO",
                "id": "GrantWorker1_Building_MinoanEra_Collectable_MinoanWatchtowerV2_4",
                "amount": 2
            },
            {
                "@type": "type.googleapis.com/CultureComponentDTO",
                "id": "Culture_Building_MinoanEra_Collectable_MinoanWatchtowerV2_4",
                "range": 3,
                "points": 600
            },
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_MinoanEra_Collectable_MinoanWatchtowerV2_4"
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_MinoanEra_Collectable_MinoanWatchtowerV2_4",
                "target": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_5",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-50",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_MinoanEra_Collectable_MinoanWatchtowerV2_4",
                "duration": "10800s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_MinoanEra_Collectable_MinoanWatchtowerV2_4"
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_MinoanEra_Collectable_MinoanWatchtowerV2_4",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "age": "MinoanEra",
        "group": "collectableMinoanWatchtowerV2",
        "level": 4
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_3",
        "type": "collectable",
        "width": 2,
        "height": 2,
        "components": [
            {
                "@type": "type.googleapis.com/GrantWorkerComponentDTO",
                "id": "GrantWorker1_Building_MinoanEra_Collectable_MinoanWatchtowerV2_3",
                "amount": 2
            },
            {
                "@type": "type.googleapis.com/CultureComponentDTO",
                "id": "Culture_Building_MinoanEra_Collectable_MinoanWatchtowerV2_3",
                "range": 3,
                "points": 470
            },
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_MinoanEra_Collectable_MinoanWatchtowerV2_3"
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_MinoanEra_Collectable_MinoanWatchtowerV2_3",
                "target": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_4",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-45",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_MinoanEra_Collectable_MinoanWatchtowerV2_3",
                "duration": "10800s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_MinoanEra_Collectable_MinoanWatchtowerV2_3"
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_MinoanEra_Collectable_MinoanWatchtowerV2_3",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "age": "MinoanEra",
        "group": "collectableMinoanWatchtowerV2",
        "level": 3
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_2",
        "type": "collectable",
        "width": 2,
        "height": 2,
        "components": [
            {
                "@type": "type.googleapis.com/GrantWorkerComponentDTO",
                "id": "GrantWorker1_Building_MinoanEra_Collectable_MinoanWatchtowerV2_2",
                "amount": 1
            },
            {
                "@type": "type.googleapis.com/CultureComponentDTO",
                "id": "Culture_Building_MinoanEra_Collectable_MinoanWatchtowerV2_2",
                "range": 3,
                "points": 420
            },
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_MinoanEra_Collectable_MinoanWatchtowerV2_2"
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_MinoanEra_Collectable_MinoanWatchtowerV2_2",
                "target": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_3",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-40",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_MinoanEra_Collectable_MinoanWatchtowerV2_2",
                "duration": "10800s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_MinoanEra_Collectable_MinoanWatchtowerV2_2"
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_MinoanEra_Collectable_MinoanWatchtowerV2_2",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "age": "MinoanEra",
        "group": "collectableMinoanWatchtowerV2",
        "level": 2
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_1",
        "type": "collectable",
        "width": 2,
        "height": 2,
        "components": [
            {
                "@type": "type.googleapis.com/GrantWorkerComponentDTO",
                "id": "GrantWorker1_Building_MinoanEra_Collectable_MinoanWatchtowerV2_1",
                "amount": 1
            },
            {
                "@type": "type.googleapis.com/CultureComponentDTO",
                "id": "Culture_Building_MinoanEra_Collectable_MinoanWatchtowerV2_1",
                "range": 3,
                "points": 350
            },
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_MinoanEra_Collectable_MinoanWatchtowerV2_1"
            },
            {
                "@type": "type.googleapis.com/ConstructionComponentDTO",
                "id": "Construction_Building_MinoanEra_Collectable_MinoanWatchtowerV2_1",
                "duration": "10800s",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/AgeRequirementDTO",
                            "minAgeDefinition": "BronzeAge"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "finish": {},
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_MinoanEra_Collectable_MinoanWatchtowerV2_1",
                "target": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_2",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-35",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_MinoanEra_Collectable_MinoanWatchtowerV2_1",
                "duration": "10800s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_MinoanEra_Collectable_MinoanWatchtowerV2_1"
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_MinoanEra_Collectable_MinoanWatchtowerV2_1",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "age": "MinoanEra",
        "group": "collectableMinoanWatchtowerV2",
        "level": 1
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_MinoanEra_Collectable_MinoanWatchtowerV2_10",
        "type": "collectable",
        "width": 2,
        "height": 2,
        "components": [
            {
                "@type": "type.googleapis.com/GrantWorkerComponentDTO",
                "id": "GrantWorker1_Building_MinoanEra_Collectable_MinoanWatchtowerV2_10",
                "amount": 3
            },
            {
                "@type": "type.googleapis.com/CultureComponentDTO",
                "id": "Culture_Building_MinoanEra_Collectable_MinoanWatchtowerV2_10",
                "range": 3,
                "points": 1750
            },
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_MinoanEra_Collectable_MinoanWatchtowerV2_10"
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_MinoanEra_Collectable_MinoanWatchtowerV2_10",
                "duration": "10800s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_MinoanEra_Collectable_MinoanWatchtowerV2_10"
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_MinoanEra_Collectable_MinoanWatchtowerV2_10",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "age": "MinoanEra",
        "group": "collectableMinoanWatchtowerV2",
        "level": 10
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_BronzeAge_Collectable_SchoolV2_9",
        "type": "collectable",
        "width": 3,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_BronzeAge_Collectable_SchoolV2_9"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_BronzeAge_Collectable_SchoolV2_9",
                "target": "Building_BronzeAge_Collectable_SchoolV2_10",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-75",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_BronzeAge_Collectable_SchoolV2_9",
                "duration": "7200s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_BronzeAge_Collectable_SchoolV2_9"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_BronzeAge_Collectable_SchoolV2_9",
                "type": "ProductionType_WORKER",
                "duration": "28800s",
                "minCollectionPeriod": "28800s",
                "skipPricePerMinute": 0.3,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-150000",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/RewardDefinitionDTO",
                            "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_9",
                            "rewards": [
                                {
                                    "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                    "baseData": {
                                        "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_9_Id"
                                    },
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_9_1"
                                            },
                                            "resource": "research_points",
                                            "amount": "3"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_9_2"
                                            },
                                            "resource": "research_points",
                                            "amount": "4"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_9_3"
                                            },
                                            "resource": "research_points",
                                            "amount": "5"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_9_4"
                                            },
                                            "resource": "research_points",
                                            "amount": "7"
                                        }
                                    ],
                                    "chances": [
                                        30,
                                        40,
                                        25,
                                        5
                                    ],
                                    "assetId": "icon_chest_rp",
                                    "randomSeedCounter": "default"
                                }
                            ],
                            "baseData": {
                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_9"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_BronzeAge_Collectable_SchoolV2_9",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "BronzeAge",
        "group": "collectableSchoolV2",
        "level": 9
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_10",
        "type": "collectable",
        "width": 2,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_ClassicGreece_Collectable_ArchitectsStudioV2_10"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_ClassicGreece_Collectable_ArchitectsStudioV2_10",
                "duration": "14400s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_ClassicGreece_Collectable_ArchitectsStudioV2_10"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_ClassicGreece_Collectable_ArchitectsStudioV2_10",
                "type": "ProductionType_WORKER",
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 0.20835,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "resource.mastery_points",
                            "amount": "1900",
                            "fromResourceChange": true
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_ClassicGreece_Collectable_ArchitectsStudioV2_10",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "ClassicGreece",
        "group": "collectableArchitectsStudioV2",
        "level": 10
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_BronzeAge_Collectable_SchoolV2_4",
        "type": "collectable",
        "width": 3,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_BronzeAge_Collectable_SchoolV2_4"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_BronzeAge_Collectable_SchoolV2_4",
                "target": "Building_BronzeAge_Collectable_SchoolV2_5",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-50",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_BronzeAge_Collectable_SchoolV2_4",
                "duration": "7200s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_BronzeAge_Collectable_SchoolV2_4"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_BronzeAge_Collectable_SchoolV2_4",
                "type": "ProductionType_WORKER",
                "duration": "28800s",
                "minCollectionPeriod": "28800s",
                "skipPricePerMinute": 0.3,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 2
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-30000",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/RewardDefinitionDTO",
                            "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_4",
                            "rewards": [
                                {
                                    "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                    "baseData": {
                                        "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_4_Id"
                                    },
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_4_1"
                                            },
                                            "resource": "research_points",
                                            "amount": "2"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_4_2"
                                            },
                                            "resource": "research_points",
                                            "amount": "3"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_4_3"
                                            },
                                            "resource": "research_points",
                                            "amount": "4"
                                        }
                                    ],
                                    "chances": [
                                        65,
                                        25,
                                        10
                                    ],
                                    "assetId": "icon_chest_rp",
                                    "randomSeedCounter": "default"
                                }
                            ],
                            "baseData": {
                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_4"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_BronzeAge_Collectable_SchoolV2_4",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "BronzeAge",
        "group": "collectableSchoolV2",
        "level": 4
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_BronzeAge_Collectable_SchoolV2_3",
        "type": "collectable",
        "width": 3,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_BronzeAge_Collectable_SchoolV2_3"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_BronzeAge_Collectable_SchoolV2_3",
                "target": "Building_BronzeAge_Collectable_SchoolV2_4",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-45",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_BronzeAge_Collectable_SchoolV2_3",
                "duration": "7200s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_BronzeAge_Collectable_SchoolV2_3"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_BronzeAge_Collectable_SchoolV2_3",
                "type": "ProductionType_WORKER",
                "duration": "28800s",
                "minCollectionPeriod": "28800s",
                "skipPricePerMinute": 0.3,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 2
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-15000",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/RewardDefinitionDTO",
                            "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_3",
                            "rewards": [
                                {
                                    "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                    "baseData": {
                                        "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_3_Id"
                                    },
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_3_1"
                                            },
                                            "resource": "research_points",
                                            "amount": "2"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_3_2"
                                            },
                                            "resource": "research_points",
                                            "amount": "3"
                                        }
                                    ],
                                    "chances": [
                                        75,
                                        25
                                    ],
                                    "assetId": "icon_chest_rp",
                                    "randomSeedCounter": "default"
                                }
                            ],
                            "baseData": {
                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_3"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_BronzeAge_Collectable_SchoolV2_3",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "BronzeAge",
        "group": "collectableSchoolV2",
        "level": 3
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_BronzeAge_Collectable_SchoolV2_2",
        "type": "collectable",
        "width": 3,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_BronzeAge_Collectable_SchoolV2_2"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_BronzeAge_Collectable_SchoolV2_2",
                "target": "Building_BronzeAge_Collectable_SchoolV2_3",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-40",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_BronzeAge_Collectable_SchoolV2_2",
                "duration": "7200s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_BronzeAge_Collectable_SchoolV2_2"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_BronzeAge_Collectable_SchoolV2_2",
                "type": "ProductionType_WORKER",
                "duration": "28800s",
                "minCollectionPeriod": "28800s",
                "skipPricePerMinute": 0.3,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 2
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-7500",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/RewardDefinitionDTO",
                            "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_2",
                            "rewards": [
                                {
                                    "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                    "baseData": {
                                        "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_2_Id"
                                    },
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_2_1"
                                            },
                                            "resource": "research_points",
                                            "amount": "2"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_2_2"
                                            },
                                            "resource": "research_points",
                                            "amount": "3"
                                        }
                                    ],
                                    "chances": [
                                        90,
                                        10
                                    ],
                                    "assetId": "icon_chest_rp",
                                    "randomSeedCounter": "default"
                                }
                            ],
                            "baseData": {
                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_2"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_BronzeAge_Collectable_SchoolV2_2",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "BronzeAge",
        "group": "collectableSchoolV2",
        "level": 2
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_BronzeAge_Collectable_SchoolV2_1",
        "type": "collectable",
        "width": 3,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_BronzeAge_Collectable_SchoolV2_1"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/ConstructionComponentDTO",
                "id": "Construction_Building_BronzeAge_Collectable_SchoolV2_1",
                "duration": "7200s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "finish": {},
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_BronzeAge_Collectable_SchoolV2_1",
                "target": "Building_BronzeAge_Collectable_SchoolV2_2",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-35",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_BronzeAge_Collectable_SchoolV2_1",
                "duration": "7200s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_BronzeAge_Collectable_SchoolV2_1"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_BronzeAge_Collectable_SchoolV2_1",
                "type": "ProductionType_WORKER",
                "duration": "28800s",
                "minCollectionPeriod": "28800s",
                "skipPricePerMinute": 0.3,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 1
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-2500",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/RewardDefinitionDTO",
                            "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_1",
                            "rewards": [
                                {
                                    "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                    "baseData": {
                                        "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_1_Id"
                                    },
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_1_1"
                                            },
                                            "resource": "research_points",
                                            "amount": "1"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_1_2"
                                            },
                                            "resource": "research_points",
                                            "amount": "2"
                                        }
                                    ],
                                    "chances": [
                                        95,
                                        5
                                    ],
                                    "assetId": "icon_chest_rp",
                                    "randomSeedCounter": "default"
                                }
                            ],
                            "baseData": {
                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_1"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_BronzeAge_Collectable_SchoolV2_1",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "BronzeAge",
        "group": "collectableSchoolV2",
        "level": 1
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_BronzeAge_Collectable_SchoolV2_8",
        "type": "collectable",
        "width": 3,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_BronzeAge_Collectable_SchoolV2_8"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_BronzeAge_Collectable_SchoolV2_8",
                "target": "Building_BronzeAge_Collectable_SchoolV2_9",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-70",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_BronzeAge_Collectable_SchoolV2_8",
                "duration": "7200s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_BronzeAge_Collectable_SchoolV2_8"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_BronzeAge_Collectable_SchoolV2_8",
                "type": "ProductionType_WORKER",
                "duration": "28800s",
                "minCollectionPeriod": "28800s",
                "skipPricePerMinute": 0.3,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-100000",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/RewardDefinitionDTO",
                            "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_8",
                            "rewards": [
                                {
                                    "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                    "baseData": {
                                        "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_8_Id"
                                    },
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_8_1"
                                            },
                                            "resource": "research_points",
                                            "amount": "3"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_8_2"
                                            },
                                            "resource": "research_points",
                                            "amount": "4"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_8_3"
                                            },
                                            "resource": "research_points",
                                            "amount": "5"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_8_4"
                                            },
                                            "resource": "research_points",
                                            "amount": "7"
                                        }
                                    ],
                                    "chances": [
                                        40,
                                        35,
                                        20,
                                        5
                                    ],
                                    "assetId": "icon_chest_rp",
                                    "randomSeedCounter": "default"
                                }
                            ],
                            "baseData": {
                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_8"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_BronzeAge_Collectable_SchoolV2_8",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "BronzeAge",
        "group": "collectableSchoolV2",
        "level": 8
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_BronzeAge_Collectable_SchoolV2_7",
        "type": "collectable",
        "width": 3,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_BronzeAge_Collectable_SchoolV2_7"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_BronzeAge_Collectable_SchoolV2_7",
                "target": "Building_BronzeAge_Collectable_SchoolV2_8",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-65",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_BronzeAge_Collectable_SchoolV2_7",
                "duration": "7200s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_BronzeAge_Collectable_SchoolV2_7"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_BronzeAge_Collectable_SchoolV2_7",
                "type": "ProductionType_WORKER",
                "duration": "28800s",
                "minCollectionPeriod": "28800s",
                "skipPricePerMinute": 0.3,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-75000",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/RewardDefinitionDTO",
                            "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_7",
                            "rewards": [
                                {
                                    "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                    "baseData": {
                                        "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_7_Id"
                                    },
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_7_1"
                                            },
                                            "resource": "research_points",
                                            "amount": "3"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_7_2"
                                            },
                                            "resource": "research_points",
                                            "amount": "4"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_7_3"
                                            },
                                            "resource": "research_points",
                                            "amount": "5"
                                        }
                                    ],
                                    "chances": [
                                        50,
                                        30,
                                        20
                                    ],
                                    "assetId": "icon_chest_rp",
                                    "randomSeedCounter": "default"
                                }
                            ],
                            "baseData": {
                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_7"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_BronzeAge_Collectable_SchoolV2_7",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "BronzeAge",
        "group": "collectableSchoolV2",
        "level": 7
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_BronzeAge_Collectable_SchoolV2_6",
        "type": "collectable",
        "width": 3,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_BronzeAge_Collectable_SchoolV2_6"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_BronzeAge_Collectable_SchoolV2_6",
                "target": "Building_BronzeAge_Collectable_SchoolV2_7",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-60",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_BronzeAge_Collectable_SchoolV2_6",
                "duration": "7200s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_BronzeAge_Collectable_SchoolV2_6"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_BronzeAge_Collectable_SchoolV2_6",
                "type": "ProductionType_WORKER",
                "duration": "28800s",
                "minCollectionPeriod": "28800s",
                "skipPricePerMinute": 0.3,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-55000",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/RewardDefinitionDTO",
                            "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_6",
                            "rewards": [
                                {
                                    "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                    "baseData": {
                                        "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_6_Id"
                                    },
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_6_1"
                                            },
                                            "resource": "research_points",
                                            "amount": "3"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_6_2"
                                            },
                                            "resource": "research_points",
                                            "amount": "4"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_6_3"
                                            },
                                            "resource": "research_points",
                                            "amount": "5"
                                        }
                                    ],
                                    "chances": [
                                        60,
                                        25,
                                        15
                                    ],
                                    "assetId": "icon_chest_rp",
                                    "randomSeedCounter": "default"
                                }
                            ],
                            "baseData": {
                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_6"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_BronzeAge_Collectable_SchoolV2_6",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "BronzeAge",
        "group": "collectableSchoolV2",
        "level": 6
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_BronzeAge_Collectable_SchoolV2_5",
        "type": "collectable",
        "width": 3,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_BronzeAge_Collectable_SchoolV2_5"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_BronzeAge_Collectable_SchoolV2_5",
                "target": "Building_BronzeAge_Collectable_SchoolV2_6",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-55",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_BronzeAge_Collectable_SchoolV2_5",
                "duration": "7200s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_BronzeAge_Collectable_SchoolV2_5"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_BronzeAge_Collectable_SchoolV2_5",
                "type": "ProductionType_WORKER",
                "duration": "28800s",
                "minCollectionPeriod": "28800s",
                "skipPricePerMinute": 0.3,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 2
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-40000",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/RewardDefinitionDTO",
                            "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_5",
                            "rewards": [
                                {
                                    "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                    "baseData": {
                                        "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_5_Id"
                                    },
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_5_1"
                                            },
                                            "resource": "research_points",
                                            "amount": "2"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_5_2"
                                            },
                                            "resource": "research_points",
                                            "amount": "3"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResourceRewardDTO",
                                            "baseData": {
                                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_5_3"
                                            },
                                            "resource": "research_points",
                                            "amount": "4"
                                        }
                                    ],
                                    "chances": [
                                        60,
                                        25,
                                        15
                                    ],
                                    "assetId": "icon_chest_rp",
                                    "randomSeedCounter": "default"
                                }
                            ],
                            "baseData": {
                                "id": "Reward_Building_BronzeAge_Collectable_SchoolV2_1_5"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_BronzeAge_Collectable_SchoolV2_5",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "BronzeAge",
        "group": "collectableSchoolV2",
        "level": 5
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_9",
        "type": "collectable",
        "width": 2,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_ClassicGreece_Collectable_ArchitectsStudioV2_9"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_ClassicGreece_Collectable_ArchitectsStudioV2_9",
                "target": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_10",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-75",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_ClassicGreece_Collectable_ArchitectsStudioV2_9",
                "duration": "14400s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_ClassicGreece_Collectable_ArchitectsStudioV2_9"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_ClassicGreece_Collectable_ArchitectsStudioV2_9",
                "type": "ProductionType_WORKER",
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 0.20835,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "resource.mastery_points",
                            "amount": "1700",
                            "fromResourceChange": true
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_ClassicGreece_Collectable_ArchitectsStudioV2_9",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "ClassicGreece",
        "group": "collectableArchitectsStudioV2",
        "level": 9
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_8",
        "type": "collectable",
        "width": 2,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_ClassicGreece_Collectable_ArchitectsStudioV2_8"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_ClassicGreece_Collectable_ArchitectsStudioV2_8",
                "target": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_9",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-70",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_ClassicGreece_Collectable_ArchitectsStudioV2_8",
                "duration": "14400s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_ClassicGreece_Collectable_ArchitectsStudioV2_8"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_ClassicGreece_Collectable_ArchitectsStudioV2_8",
                "type": "ProductionType_WORKER",
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 0.20835,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "resource.mastery_points",
                            "amount": "1500",
                            "fromResourceChange": true
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_ClassicGreece_Collectable_ArchitectsStudioV2_8",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "ClassicGreece",
        "group": "collectableArchitectsStudioV2",
        "level": 8
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_7",
        "type": "collectable",
        "width": 2,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_ClassicGreece_Collectable_ArchitectsStudioV2_7"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_ClassicGreece_Collectable_ArchitectsStudioV2_7",
                "target": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_8",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-65",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_ClassicGreece_Collectable_ArchitectsStudioV2_7",
                "duration": "14400s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_ClassicGreece_Collectable_ArchitectsStudioV2_7"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_ClassicGreece_Collectable_ArchitectsStudioV2_7",
                "type": "ProductionType_WORKER",
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 0.20835,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "resource.mastery_points",
                            "amount": "1300",
                            "fromResourceChange": true
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_ClassicGreece_Collectable_ArchitectsStudioV2_7",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "ClassicGreece",
        "group": "collectableArchitectsStudioV2",
        "level": 7
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_6",
        "type": "collectable",
        "width": 2,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_ClassicGreece_Collectable_ArchitectsStudioV2_6"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_ClassicGreece_Collectable_ArchitectsStudioV2_6",
                "target": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_7",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-60",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_ClassicGreece_Collectable_ArchitectsStudioV2_6",
                "duration": "14400s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_ClassicGreece_Collectable_ArchitectsStudioV2_6"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_ClassicGreece_Collectable_ArchitectsStudioV2_6",
                "type": "ProductionType_WORKER",
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 0.20835,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "resource.mastery_points",
                            "amount": "1150",
                            "fromResourceChange": true
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_ClassicGreece_Collectable_ArchitectsStudioV2_6",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "ClassicGreece",
        "group": "collectableArchitectsStudioV2",
        "level": 6
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_5",
        "type": "collectable",
        "width": 2,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_ClassicGreece_Collectable_ArchitectsStudioV2_5"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_ClassicGreece_Collectable_ArchitectsStudioV2_5",
                "target": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_6",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-55",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_ClassicGreece_Collectable_ArchitectsStudioV2_5",
                "duration": "14400s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_ClassicGreece_Collectable_ArchitectsStudioV2_5"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_ClassicGreece_Collectable_ArchitectsStudioV2_5",
                "type": "ProductionType_WORKER",
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 0.20835,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "resource.mastery_points",
                            "amount": "1000",
                            "fromResourceChange": true
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_ClassicGreece_Collectable_ArchitectsStudioV2_5",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "ClassicGreece",
        "group": "collectableArchitectsStudioV2",
        "level": 5
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_4",
        "type": "collectable",
        "width": 2,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_ClassicGreece_Collectable_ArchitectsStudioV2_4"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_ClassicGreece_Collectable_ArchitectsStudioV2_4",
                "target": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_5",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-50",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_ClassicGreece_Collectable_ArchitectsStudioV2_4",
                "duration": "14400s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_ClassicGreece_Collectable_ArchitectsStudioV2_4"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_ClassicGreece_Collectable_ArchitectsStudioV2_4",
                "type": "ProductionType_WORKER",
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 0.20835,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "resource.mastery_points",
                            "amount": "800",
                            "fromResourceChange": true
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_ClassicGreece_Collectable_ArchitectsStudioV2_4",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "ClassicGreece",
        "group": "collectableArchitectsStudioV2",
        "level": 4
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_3",
        "type": "collectable",
        "width": 2,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_ClassicGreece_Collectable_ArchitectsStudioV2_3"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_ClassicGreece_Collectable_ArchitectsStudioV2_3",
                "target": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_4",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-45",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_ClassicGreece_Collectable_ArchitectsStudioV2_3",
                "duration": "14400s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_ClassicGreece_Collectable_ArchitectsStudioV2_3"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_ClassicGreece_Collectable_ArchitectsStudioV2_3",
                "type": "ProductionType_WORKER",
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 0.20835,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "resource.mastery_points",
                            "amount": "600",
                            "fromResourceChange": true
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_ClassicGreece_Collectable_ArchitectsStudioV2_3",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "ClassicGreece",
        "group": "collectableArchitectsStudioV2",
        "level": 3
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_2",
        "type": "collectable",
        "width": 2,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_ClassicGreece_Collectable_ArchitectsStudioV2_2"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_ClassicGreece_Collectable_ArchitectsStudioV2_2",
                "target": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_3",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-40",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_ClassicGreece_Collectable_ArchitectsStudioV2_2",
                "duration": "14400s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_ClassicGreece_Collectable_ArchitectsStudioV2_2"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_ClassicGreece_Collectable_ArchitectsStudioV2_2",
                "type": "ProductionType_WORKER",
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 0.20835,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "resource.mastery_points",
                            "amount": "400",
                            "fromResourceChange": true
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_ClassicGreece_Collectable_ArchitectsStudioV2_2",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "ClassicGreece",
        "group": "collectableArchitectsStudioV2",
        "level": 2
    },
    {
        "@type": "type.googleapis.com/BuildingDefinitionDTO",
        "id": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_1",
        "type": "collectable",
        "width": 2,
        "height": 3,
        "components": [
            {
                "@type": "type.googleapis.com/InitComponentDTO",
                "id": "Init_Building_ClassicGreece_Collectable_ArchitectsStudioV2_1"
            },
            {
                "@type": "type.googleapis.com/SubscriptionSlotComponentDTO",
                "subscriptionBenefitDefinitionId": "subscription_benefit.PRODUCTION_SLOTS",
                "slots": 1
            },
            {
                "@type": "type.googleapis.com/ConstructionComponentDTO",
                "id": "Construction_Building_ClassicGreece_Collectable_ArchitectsStudioV2_1",
                "duration": "14400s",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/AgeRequirementDTO",
                            "minAgeDefinition": "BronzeAge"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "finish": {},
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/UpgradeComponentDTO",
                "id": "Upgrade_Building_ClassicGreece_Collectable_ArchitectsStudioV2_1",
                "target": "Building_ClassicGreece_Collectable_ArchitectsStudioV2_2",
                "autoFinish": true,
                "duration": "3600s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-35",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 1
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/RebuildConstructionComponentDTO",
                "id": "RebuildConstruction_Building_ClassicGreece_Collectable_ArchitectsStudioV2_1",
                "duration": "14400s",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "complete": {},
                "workersRequired": {
                    "amount": 5
                },
                "usesConstructionSlots": true
            },
            {
                "@type": "type.googleapis.com/MoveComponentDTO",
                "id": "Move_Building_ClassicGreece_Collectable_ArchitectsStudioV2_1"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production2_Building_ClassicGreece_Collectable_ArchitectsStudioV2_1",
                "type": "ProductionType_WORKER",
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 0.20835,
                "behaviours": [
                    {
                        "@type": "type.googleapis.com/WorkerBehaviourDTO",
                        "amount": 3
                    }
                ],
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "resource.mastery_points",
                            "amount": "200",
                            "fromResourceChange": true
                        }
                    ]
                }
            },
            {
                "@type": "type.googleapis.com/SellComponentDTO",
                "id": "Sell_Building_ClassicGreece_Collectable_ArchitectsStudioV2_1",
                "start": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                            "amount": "10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "forInventory": true
            }
        ],
        "cities": [
            "City_Capital"
        ],
        "freeProductionSlots": 1,
        "age": "ClassicGreece",
        "group": "collectableArchitectsStudioV2",
        "level": 1
    }
]

export { collectableBuildings };