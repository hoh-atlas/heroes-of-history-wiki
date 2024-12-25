const _customizations = [
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_SparklingFortune",
        "duration": "604800s",
        "buildingGroup": "moderateCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_SparklingFortune",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/BoostResourceComponentDTO",
                "id": "Boost1_BuildingCustomization_TreasureHunt_SparklingFortune",
                "modifier": 0.05,
                "resourceDefinitionId": "coins",
                "cities": [
                    "City_Capital"
                ]
            }
        ],
        "order": 15,
        "cityDefinitionId": "City_Capital",
        "name": "Sparkling Fortune"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_TropicalFruitFarm",
        "duration": "604800s",
        "buildingGroup": "ruralFarm",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_TropicalFruitFarm",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_TreasureHunt_TropicalFruitFarm",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "research_points",
                            "amount": "1",
                            "fromResourceChange": true
                        }
                    ]
                }
            }
        ],
        "order": 9,
        "cityDefinitionId": "City_Capital",
        "name": "Tropical Fruit Farm"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_TreasureTrove",
        "duration": "604800s",
        "buildingGroup": "compactCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_TreasureTrove",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/BoostResourceComponentDTO",
                "id": "Boost1_BuildingCustomization_TreasureHunt_TreasureTrove",
                "modifier": 0.05,
                "resourceType": "good",
                "cities": [
                    "City_Capital"
                ]
            }
        ],
        "order": 14,
        "cityDefinitionId": "City_Capital",
        "name": "Treasure Trove"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWorldFair2024_CultureSite_Moderate",
        "duration": "1728000s",
        "buildingGroup": "moderateCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWorldFair2024_CultureSite_Moderate",
                "type": "inGameEvent",
                "name": "WorldFair_2024"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWorldFair2024_CultureSite_Moderate",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "campaign_battle_ticket",
                            "amount": "1",
                            "fromResourceChange": true
                        }
                    ]
                }
            }
        ],
        "order": 7,
        "cityDefinitionId": "City_Capital",
        "name": "Ticket Booth"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_JollyRoger",
        "duration": "604800s",
        "buildingGroup": "littleCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_JollyRoger",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/CultureBoostComponentDTO",
                "id": "CultureBoost_BuildingCustomization_TreasureHunt_JollyRoger",
                "cultureBoost": 0.5
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_TreasureHunt_JollyRoger",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_BuildingCustomization_TreasureHunt_LongNine"
                }
            }
        ],
        "order": 12,
        "cityDefinitionId": "City_Capital",
        "name": "Jolly Roger"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWorldFair2024_Home_Average",
        "duration": "1728000s",
        "buildingGroup": "averageHome",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWorldFair2024_Home_Average",
                "type": "inGameEvent",
                "name": "WorldFair_2024"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWorldFair2024_Home_Average",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "rift_token_common_part",
                            "amount": "1",
                            "fromResourceChange": true
                        }
                    ]
                }
            }
        ],
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "name": "Void Reactor"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWinter_Home_Small",
        "duration": "1728000s",
        "buildingGroup": "smallHome",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWinter_Home_Small",
                "type": "inGameEvent",
                "name": "Event_Winter"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWinter_Home_Small",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "rift_token_common_part",
                            "amount": "1",
                            "fromResourceChange": true
                        }
                    ]
                }
            }
        ],
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "name": "Winter Home"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_RobberCrab",
        "duration": "604800s",
        "buildingGroup": "moderateCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_RobberCrab",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/CultureBoostComponentDTO",
                "id": "CultureBoost_BuildingCustomization_TreasureHunt_RobberCrab",
                "cultureBoost": 0.5
            }
        ],
        "order": 7,
        "cityDefinitionId": "City_Capital",
        "name": "Robber Crab"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_PirateDen",
        "duration": "604800s",
        "buildingGroup": "smallHome",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_PirateDen",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_TreasureHunt_PirateDen",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_BuildingCustomization_TreasureHunt_PirateDen"
                }
            }
        ],
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "name": "Pirate Den"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWorldFair2024_Farm_Domestic",
        "duration": "1728000s",
        "buildingGroup": "domesticFarm",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWorldFair2024_Farm_Domestic",
                "type": "inGameEvent",
                "name": "WorldFair_2024"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWorldFair2024_Farm_Domestic",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "rift_token_legendary_part",
                            "amount": "1",
                            "fromResourceChange": true
                        }
                    ]
                }
            }
        ],
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "name": "Singularity Monument"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_CoconutTree",
        "duration": "604800s",
        "buildingGroup": "littleCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_CoconutTree",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/CultureBoostComponentDTO",
                "id": "CultureBoost_BuildingCustomization_TreasureHunt_CoconutTree",
                "cultureBoost": 0.5
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_TreasureHunt_CoconutTree",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_BuildingCustomization_TreasureHunt_CoconutTree"
                }
            }
        ],
        "order": 5,
        "cityDefinitionId": "City_Capital",
        "name": "Coconut Tree"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWinter_Farm_Rural",
        "duration": "1728000s",
        "buildingGroup": "ruralFarm",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWinter_Farm_Rural",
                "type": "inGameEvent",
                "name": "Event_Winter"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWinter_Farm_Rural",
                "auto": true,
                "duration": "172800s",
                "minCollectionPeriod": "172800s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_Reward_AscensionMaterials_100"
                }
            }
        ],
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "name": "Frozen Pond"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_SkullHome",
        "duration": "604800s",
        "buildingGroup": "smallHome",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_SkullHome",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_TreasureHunt_SkullHome",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_BuildingCustomization_TreasureHunt_SkullHome"
                }
            }
        ],
        "order": 8,
        "cityDefinitionId": "City_Capital",
        "name": "Skull Home"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_BelltowerCottage",
        "duration": "604800s",
        "buildingGroup": "averageHome",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_BelltowerCottage",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_TreasureHunt_BelltowerCottage",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_BuildingCustomization_TreasureHunt_BelltowerCottage"
                }
            }
        ],
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "name": "Belltower Cottage"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWinter_Home_Average",
        "duration": "1728000s",
        "buildingGroup": "averageHome",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWinter_Home_Average",
                "type": "inGameEvent",
                "name": "Event_Winter"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWinter_Home_Average",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "rift_token_common_part",
                            "amount": "3",
                            "fromResourceChange": true
                        }
                    ]
                }
            }
        ],
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "name": "Candy Store"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWorldFair2024_Home_Small",
        "duration": "1728000s",
        "buildingGroup": "smallHome",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWorldFair2024_Home_Small",
                "type": "inGameEvent",
                "name": "WorldFair_2024"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWorldFair2024_Home_Small",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_Customization_EventWorldFair2024_Home_Small"
                }
            }
        ],
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "name": "Tesla Coil"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_HammockTrees",
        "duration": "604800s",
        "buildingGroup": "compactCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_HammockTrees",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/CultureBoostComponentDTO",
                "id": "CultureBoost_BuildingCustomization_TreasureHunt_HammockTrees",
                "cultureBoost": 0.5
            }
        ],
        "order": 6,
        "cityDefinitionId": "City_Capital",
        "name": "Hammock Trees"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWinter_CultureSite_Moderate",
        "duration": "1728000s",
        "buildingGroup": "moderateCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWinter_CultureSite_Moderate",
                "type": "inGameEvent",
                "name": "Event_Winter"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWinter_CultureSite_Moderate",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_Reward_TeslaCrests_Superior_30"
                }
            }
        ],
        "order": 7,
        "cityDefinitionId": "City_Capital",
        "name": "Winter Pyramid"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWinter_CultureSite_Compact",
        "duration": "1728000s",
        "buildingGroup": "compactCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWinter_CultureSite_Compact",
                "type": "inGameEvent",
                "name": "Event_Winter"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWinter_CultureSite_Compact",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "campaign_battle_ticket",
                            "amount": "1",
                            "fromResourceChange": true
                        }
                    ]
                }
            }
        ],
        "order": 6,
        "cityDefinitionId": "City_Capital",
        "name": "Sleigh"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_SugarcaneDistillery",
        "duration": "604800s",
        "buildingGroup": "ruralFarm",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_SugarcaneDistillery",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_TreasureHunt_SugarcaneDistillery",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_BuildingCustomization_TreasureHunt_SugarcaneDistillery"
                }
            }
        ],
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "name": "Sugarcane Distillery"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWorldFair2024_Farm_Rural",
        "duration": "1728000s",
        "buildingGroup": "ruralFarm",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWorldFair2024_Farm_Rural",
                "type": "inGameEvent",
                "name": "WorldFair_2024"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWorldFair2024_Farm_Rural",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_Customization_EventWorldFair2024_Farm_Rural"
                }
            }
        ],
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "name": "Heritage Exhibition"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWinter_Farm_Domestic",
        "duration": "1728000s",
        "buildingGroup": "domesticFarm",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWinter_Farm_Domestic",
                "type": "inGameEvent",
                "name": "Event_Winter"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWinter_Farm_Domestic",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {},
                            "resource": "rift_token_legendary_part",
                            "amount": "1",
                            "fromResourceChange": true
                        }
                    ]
                }
            }
        ],
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "name": "Winter Market"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_VoodooHead",
        "duration": "604800s",
        "buildingGroup": "littleCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_VoodooHead",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/CultureBoostComponentDTO",
                "id": "CultureBoost_BuildingCustomization_TreasureHunt_VoodooHead",
                "cultureBoost": 0.5
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_TreasureHunt_VoodooHead",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_BuildingCustomization_TreasureHunt_VoodooHead"
                }
            }
        ],
        "order": 11,
        "cityDefinitionId": "City_Capital",
        "name": "Voodoo Head"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_CrowsInn",
        "duration": "604800s",
        "buildingGroup": "domesticFarm",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_CrowsInn",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/BoostResourceComponentDTO",
                "id": "Boost1_BuildingCustomization_TreasureHunt_CrowsInn",
                "modifier": 0.05,
                "resourceDefinitionId": "food",
                "cities": [
                    "City_Capital"
                ]
            }
        ],
        "order": 10,
        "cityDefinitionId": "City_Capital",
        "name": "Crow's Inn"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_LongNine",
        "duration": "604800s",
        "buildingGroup": "compactCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_LongNine",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_TreasureHunt_LongNine",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_BuildingCustomization_TreasureHunt_LongNine"
                }
            }
        ],
        "order": 13,
        "cityDefinitionId": "City_Capital",
        "name": "Long Nine"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_TreasureHunt_ScallywagsShanty",
        "duration": "604800s",
        "buildingGroup": "domesticFarm",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_TreasureHunt_ScallywagsShanty",
                "type": "feature",
                "name": "TreasureHunt"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_TreasureHunt_ScallywagsShanty",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_BuildingCustomization_TreasureHunt_ScallywagsShanty"
                }
            }
        ],
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "name": "The Scallywag's Shanty"
    },
    {
        "@type": "type.googleapis.com/BuildingCustomizationDefinitionDTO",
        "id": "BuildingCustomization_EventWinter_CultureSite_Little",
        "duration": "1728000s",
        "buildingGroup": "littleCulture",
        "components": [
            {
                "@type": "type.googleapis.com/OriginComponentDTO",
                "id": "OriginComponent_BuildingCustomization_EventWinter_CultureSite_Little",
                "type": "inGameEvent",
                "name": "Event_Winter"
            },
            {
                "@type": "type.googleapis.com/ProductionComponentDTO",
                "id": "Production1_BuildingCustomization_EventWinter_CultureSite_Little",
                "auto": true,
                "duration": "86400s",
                "minCollectionPeriod": "86400s",
                "skipPricePerMinute": 1.0,
                "start": {},
                "finish": {
                    "dynamicChangeDefinitionId": "Dac_Reward_Goods_10"
                }
            }
        ],
        "order": 5,
        "cityDefinitionId": "City_Capital",
        "name": "Snowman"
    }
]

export default _customizations;