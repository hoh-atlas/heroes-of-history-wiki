const wondersRewards = [
    {
        "id": "event.EventCity_China_TerracottaArmy",
        "components": [
            {
                "@type": "type.googleapis.com/RewardLaneEventComponentDTO",
                "definitionId": "reward_lane.EventCity_China_RewardLane",
                "progressResourceDefinitionId": "event_city_progress",
                "rewards": {
                    "1": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_1"
                                },
                                "resource": "campaign_energy",
                                "amount": "25"
                            }
                        ]
                    },
                    "2": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_2"
                                },
                                "city": "City_China",
                                "regular": 3
                            }
                        ]
                    },
                    "3": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_3"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "4": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_4"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_100"
                            }
                        ]
                    },
                    "5": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_5"
                                },
                                "resource": "research_points",
                                "amount": "4"
                            }
                        ]
                    },
                    "6": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_6"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "2"
                            }
                        ]
                    },
                    "7": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_7"
                                },
                                "city": "City_China",
                                "regular": 5
                            }
                        ]
                    },
                    "8": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_50",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_50_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_25"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_25"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_small"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50"
                                }
                            }
                        ]
                    },
                    "9": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_9"
                                },
                                "resource": "campaign_energy",
                                "amount": "40"
                            }
                        ]
                    },
                    "10": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_10"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "11": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_11"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_50"
                            }
                        ]
                    },
                    "12": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_12"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "13": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_13"
                                },
                                "city": "City_China",
                                "regular": 7
                            }
                        ]
                    },
                    "14": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_14"
                                },
                                "resource": "research_points",
                                "amount": "5"
                            }
                        ]
                    },
                    "15": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_15"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "2"
                            }
                        ]
                    },
                    "16": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_100",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_100_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_50"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_50"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_small"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100"
                                }
                            }
                        ]
                    },
                    "17": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_17"
                                },
                                "city": "City_China",
                                "regular": 8
                            }
                        ]
                    },
                    "18": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_18"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_75"
                            }
                        ]
                    },
                    "19": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_19"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_450"
                            }
                        ]
                    },
                    "20": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_20"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "21": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_21"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "22": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_22"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "23": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_23"
                                },
                                "resource": "research_points",
                                "amount": "6"
                            }
                        ]
                    },
                    "24": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_24"
                                },
                                "city": "City_China",
                                "regular": 8
                            }
                        ]
                    },
                    "25": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_25"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_450"
                            }
                        ]
                    },
                    "26": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_26"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "27": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_27"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "28": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_28"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "29": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_150",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_150_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_75"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_75"
                                            }
                                        ],
                                        "assetId": "icon_loot_container"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150"
                                }
                            }
                        ]
                    },
                    "30": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_30"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "31": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_31"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "32": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_32"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_200"
                            }
                        ]
                    },
                    "33": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_33"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "34": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_34"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "35": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_300",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_300_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_150"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_150"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_large"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300"
                                }
                            }
                        ]
                    },
                    "36": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_36"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "37": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_37"
                                },
                                "resource": "research_points",
                                "amount": "10"
                            }
                        ]
                    },
                    "38": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_38"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "39": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_39"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_650"
                            }
                        ]
                    },
                    "40": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_1000",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_500"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_500"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_xlarge"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000"
                                }
                            }
                        ]
                    },
                    "41": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_41"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "42": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_42"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "43": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_43"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "44": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_44"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_2200"
                            }
                        ]
                    },
                    "45": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_45"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "10"
                            }
                        ]
                    },
                    "46": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_46"
                                },
                                "resource": "research_points",
                                "amount": "15"
                            }
                        ]
                    },
                    "47": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_47"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "48": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_48"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_500"
                            }
                        ]
                    },
                    "49": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_49"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_1800"
                            }
                        ]
                    },
                    "50": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_50"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "20"
                            }
                        ]
                    }
                },
                "minimumStateToCollect": "ACTIVE"
            },
            {
                "@type": "type.googleapis.com/RiftEventComponentDTO",
                "definitionId": "event_rift.China",
                "riftDefinitionId": "rift.China",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/RiftPromotionEventComponentDTO",
                "id": "event_rift_promotion.EventCity_China_TerracottaArmy_Promotion_1",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/RiftPromotionEventComponentDTO",
                "id": "event_rift_promotion.EventCity_China_TerracottaArmy_Promotion_2",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/QuestlineEventDefinitionDTO",
                "id": "questline_event.EventCity_China_TerracottaArmy"
            },
            {
                "@type": "type.googleapis.com/EventCityComponentDTO",
                "id": "event_city.China_TerracottaArmy_1",
                "cityDefinitionId": "City_China",
                "technologies": [
                    {
                        "id": "Technology_China_RiseOfChina",
                        "name": "RiseOfChina",
                        "age": "China",
                        "column": 1,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_RiseOfChina",
                                "start": {
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-50",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_InkAndBrush",
                        "name": "InkAndBrush",
                        "age": "China",
                        "column": 2,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_InkAndBrush",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_RiseOfChina"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-60",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Premium_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_Sericulture",
                        "name": "Sericulture",
                        "age": "China",
                        "column": 2,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_Sericulture",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_RiseOfChina"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-70",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_MothGlade_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_SilkManufacture",
                        "name": "SilkManufacture",
                        "age": "China",
                        "column": 3,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_SilkManufacture",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_InkAndBrush"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_Sericulture"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-250",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Small_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_RammedEarthHouses",
                        "name": "RammedEarthHouses",
                        "age": "China",
                        "column": 4,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_RammedEarthHouses",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_SilkManufacture"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-500",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_PaddyFields",
                        "name": "PaddyFields",
                        "age": "China",
                        "column": 4,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_PaddyFields",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_SilkManufacture"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1500",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_Calligraphy",
                        "name": "Calligraphy",
                        "age": "China",
                        "column": 4,
                        "order": 3,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_Calligraphy",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_SilkManufacture"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1800",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_RefinedSilk",
                        "name": "RefinedSilk",
                        "age": "China",
                        "column": 5,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_RefinedSilk",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_RammedEarthHouses"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-2500",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_MothGlade_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Small_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_DynasticLaw",
                        "name": "DynasticLaw",
                        "age": "China",
                        "column": 5,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_DynasticLaw",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_PaddyFields"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_Calligraphy"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-20000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_SilkMastery",
                        "name": "SilkMastery",
                        "age": "China",
                        "column": 6,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_SilkMastery",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_RefinedSilk"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-50000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_EnhancedPaddyFields",
                        "name": "EnhancedPaddyFields",
                        "age": "China",
                        "column": 6,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_EnhancedPaddyFields",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_DynasticLaw"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-70000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_DedicatedWorkforce",
                        "name": "DedicatedWorkforce",
                        "age": "China",
                        "column": 7,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_DedicatedWorkforce",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_SilkMastery"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_EnhancedPaddyFields"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-70000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_MothGlade_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Premium_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Technology_China_DedicatedWorkforce_TransitionReward_1"
                                            },
                                            "target": "Building_China_City_CityHall_2",
                                            "duration": "0s",
                                            "start": {},
                                            "complete": {},
                                            "sourceGroup": "cityHall",
                                            "cities": [
                                                "City_China"
                                            ],
                                            "usesConstructionSlots": true
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_KaolinProcessing",
                        "name": "KaolinProcessing",
                        "age": "China",
                        "column": 8,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_KaolinProcessing",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_DedicatedWorkforce"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-110000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_KaolinQuarry_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ClayProcessor_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Small_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_IronPlough",
                        "name": "IronPlough",
                        "age": "China",
                        "column": 8,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_IronPlough",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_DedicatedWorkforce"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-270000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Premium_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_PorcelainProduction",
                        "name": "PorcelainProduction ",
                        "age": "China",
                        "column": 9,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_PorcelainProduction",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_KaolinProcessing"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-250000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_PorcelainWorkshop_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_LaborDuties",
                        "name": "LaborDuties",
                        "age": "China",
                        "column": 9,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_LaborDuties",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_IronPlough"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-170000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_MothGlade_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_BakedBricks",
                        "name": "BakedBricks",
                        "age": "China",
                        "column": 10,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_BakedBricks",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_PorcelainProduction"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-210000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ClayProcessor_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_DeepFoundations",
                        "name": "DeepFoundations",
                        "age": "China",
                        "column": 10,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_DeepFoundations",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_PorcelainProduction"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-330000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_KaolinQuarry_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Small_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_AdvancedClayworks",
                        "name": "AdvancedClayworks",
                        "age": "China",
                        "column": 10,
                        "order": 3,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_AdvancedClayworks",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_PorcelainProduction"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-420000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_PorcelainWorkshop_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_Terracing",
                        "name": "Terracing",
                        "age": "China",
                        "column": 10,
                        "order": 4,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_Terracing",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_LaborDuties"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-660000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_FloorPlans",
                        "name": "FloorPlans",
                        "age": "China",
                        "column": 11,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_FloorPlans",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_BakedBricks"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-730000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ClayProcessor_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_UrbanManagement",
                        "name": "UrbanManagement",
                        "age": "China",
                        "column": 11,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_UrbanManagement",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_DeepFoundations"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1000000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_KaolinQuarry_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_PorcelainMastery",
                        "name": "PorcelainMastery",
                        "age": "China",
                        "column": 11,
                        "order": 3,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_PorcelainMastery",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_AdvancedClayworks"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_Terracing"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1300000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_PorcelainWorkshop_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_MothGlade_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_DrylandFarming",
                        "name": "DrylandFarming",
                        "age": "China",
                        "column": 11,
                        "order": 4,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_DrylandFarming",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_Terracing"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1500000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_ChineseConsensus",
                        "name": "ChineseConsensus",
                        "age": "China",
                        "column": 12,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_ChineseConsensus",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_FloorPlans"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_UrbanManagement"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_PorcelainMastery"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_DrylandFarming"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1800000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Small_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                "wonderDefinitionId": "Wonder_China_TerracottaArmy"
            },
            {
                "@type": "type.googleapis.com/EventRankingDefinitionDTO",
                "id": "Ranking_EventCity_China",
                "progressResource": {
                    "id": "event_ranking_points",
                    "traits": [
                        {
                            "@type": "type.googleapis.com/NotSmallerZeroTraitDTO"
                        },
                        {
                            "@type": "type.googleapis.com/PlayerRankingTraitDTO",
                            "ranking": "RankingType_EVENT_CITY_PROGRESS"
                        }
                    ],
                    "resourceType": "soft_currency"
                },
                "brackets": [
                    {
                        "id": "Ranking_EventCity_China_Bracket_1",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "2"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_China_Bracket_2",
                        "threshold": 0.5,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "5"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "1500"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_China_Bracket_3",
                        "threshold": 0.8,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "7"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_china_common",
                                "amount": "2"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "3000"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_China_Bracket_4",
                        "threshold": 0.95,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "10"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_china_common",
                                "amount": "4"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "7500"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_China_Bracket_5",
                        "threshold": 0.99,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "15"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_china_common",
                                "amount": "8"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "15000"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_legendary_part",
                                "amount": "2"
                            }
                        ]
                    }
                ]
            },
            {
                "@type": "type.googleapis.com/EventSubscriptionComponentDTO",
                "id": "event_subscription.EventCity_China",
                "subscriptionBenefitDefinitionIds": [
                    "subscription_benefit.EVENT_CITY_PRODUCTION_SLOTS",
                    "subscription_benefit.EVENT_CITY_PRODUCTION_DURATION"
                ]
            },
            {
                "@type": "type.googleapis.com/EventSeenComponentDTO",
                "id": "event_seen.EventCity_China_TerracottaArmy"
            },
            {
                "@type": "type.googleapis.com/EventResourceComponentDTO",
                "id": "event_resources.EventCity_China_TerracottaArmy_Resources",
                "removeAtEventEnd": [
                    "event_city_progress",
                    "event_ranking_points",
                    "wu_zhu",
                    "rice",
                    "moth_cocoons",
                    "silk_threads",
                    "silk",
                    "kaolin",
                    "clay",
                    "porcelain"
                ]
            }
        ],
        "requirements": [
            {
                "@type": "type.googleapis.com/UnlockableFeatureRequirementDTO",
                "requiredFeature": "UnlockableFeatureConstant_EVENT_CITIES"
            }
        ]
    },
    {
        "id": "event.EventCity_Egypt_GreatSphinx",
        "components": [
            {
                "@type": "type.googleapis.com/RewardLaneEventComponentDTO",
                "definitionId": "reward_lane.EventCity_Egypt_RewardLane",
                "progressResourceDefinitionId": "event_city_progress",
                "rewards": {
                    "1": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_1"
                                },
                                "resource": "campaign_energy",
                                "amount": "25"
                            }
                        ]
                    },
                    "2": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_2"
                                },
                                "city": "City_Egypt",
                                "regular": 3
                            }
                        ]
                    },
                    "3": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_3"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "4": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_4"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_100"
                            }
                        ]
                    },
                    "5": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_5"
                                },
                                "resource": "research_points",
                                "amount": "4"
                            }
                        ]
                    },
                    "6": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_6"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "2"
                            }
                        ]
                    },
                    "7": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_7"
                                },
                                "city": "City_Egypt",
                                "regular": 5
                            }
                        ]
                    },
                    "8": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_50",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_50_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_25"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_25"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_small"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50"
                                }
                            }
                        ]
                    },
                    "9": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_9"
                                },
                                "resource": "campaign_energy",
                                "amount": "40"
                            }
                        ]
                    },
                    "10": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_10"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "11": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_11"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_50"
                            }
                        ]
                    },
                    "12": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_12"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "13": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_13"
                                },
                                "city": "City_Egypt",
                                "regular": 5
                            }
                        ]
                    },
                    "14": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_14"
                                },
                                "resource": "research_points",
                                "amount": "5"
                            }
                        ]
                    },
                    "15": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_15"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "2"
                            }
                        ]
                    },
                    "16": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_100",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_100_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_50"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_50"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_small"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100"
                                }
                            }
                        ]
                    },
                    "17": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_17"
                                },
                                "city": "City_Egypt",
                                "regular": 6
                            }
                        ]
                    },
                    "18": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_18"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_75"
                            }
                        ]
                    },
                    "19": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_19"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_450"
                            }
                        ]
                    },
                    "20": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_20"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "21": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_21"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "22": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_22"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "23": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_23"
                                },
                                "resource": "research_points",
                                "amount": "6"
                            }
                        ]
                    },
                    "24": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_24"
                                },
                                "city": "City_Egypt",
                                "regular": 6
                            }
                        ]
                    },
                    "25": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_25"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_450"
                            }
                        ]
                    },
                    "26": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_26"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "27": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_27"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "28": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_28"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "29": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_150",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_150_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_75"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_75"
                                            }
                                        ],
                                        "assetId": "icon_loot_container"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150"
                                }
                            }
                        ]
                    },
                    "30": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_30"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "31": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_31"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "32": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_32"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_200"
                            }
                        ]
                    },
                    "33": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_33"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "34": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_34"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "35": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_300",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_300_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_150"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_150"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_large"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300"
                                }
                            }
                        ]
                    },
                    "36": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_36"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "37": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_37"
                                },
                                "resource": "research_points",
                                "amount": "10"
                            }
                        ]
                    },
                    "38": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_38"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "39": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_39"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_650"
                            }
                        ]
                    },
                    "40": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_1000",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_500"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_500"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_xlarge"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000"
                                }
                            }
                        ]
                    },
                    "41": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_41"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "42": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_42"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "43": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_43"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "44": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_44"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_2200"
                            }
                        ]
                    },
                    "45": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_45"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "10"
                            }
                        ]
                    },
                    "46": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_46"
                                },
                                "resource": "research_points",
                                "amount": "15"
                            }
                        ]
                    },
                    "47": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_47"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "48": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_48"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_500"
                            }
                        ]
                    },
                    "49": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_49"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_1800"
                            }
                        ]
                    },
                    "50": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Egypt_RewardLane_Reward_50"
                                },
                                "resource": "rift_token_egypt_common",
                                "amount": "20"
                            }
                        ]
                    }
                },
                "minimumStateToCollect": "ACTIVE"
            },
            {
                "@type": "type.googleapis.com/RiftEventComponentDTO",
                "definitionId": "event_rift.Egypt",
                "riftDefinitionId": "rift.Egypt",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/RiftPromotionEventComponentDTO",
                "id": "event_rift_promotion.EventCity_Egypt_GreatSphinx_Promotion_1",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/RiftPromotionEventComponentDTO",
                "id": "event_rift_promotion.EventCity_Egypt_GreatSphinx_Promotion_2",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/QuestlineEventDefinitionDTO",
                "id": "questline_event.EventCity_Egypt_GreatSphinx"
            },
            {
                "@type": "type.googleapis.com/EventCityComponentDTO",
                "id": "event_city.Egypt_GreatSphinx_1",
                "cityDefinitionId": "City_Egypt",
                "technologies": [
                    {
                        "id": "Technology_Egypt_RiseOfEgypt",
                        "name": "RiseOfEgypt",
                        "age": "Egypt",
                        "column": 1,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_RiseOfEgypt",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/OrRequirementDTO",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/EventActiveRequirementDTO",
                                                    "id": "event.EventCity_Egypt_CheopsPyramid"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/EventActiveRequirementDTO",
                                                    "id": "event.EventCity_Egypt_GreatSphinx"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/EventActiveRequirementDTO",
                                                    "id": "event.EventCity_Egypt_AbuSimbel"
                                                }
                                            ]
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-50",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Average_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Ankh",
                        "name": "Ankh",
                        "age": "Egypt",
                        "column": 2,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Ankh",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_RiseOfEgypt"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-70",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_Goldsmith_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_GoldMine_Average_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_GoldMine_Premium_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_PapyrusScroll",
                        "name": "PapyrusScroll",
                        "age": "Egypt",
                        "column": 2,
                        "order": 2,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_PapyrusScroll",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_RiseOfEgypt"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-70",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_PapyrusPress_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_PapyrusField_Average_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_PapyrusField_Premium_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_WaterWheel",
                        "name": "WaterWheel",
                        "age": "Egypt",
                        "column": 3,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_WaterWheel",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_Ankh"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_PapyrusScroll"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-300",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_SmallWell_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_Oasis_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Geometry",
                        "name": "Geometry",
                        "age": "Egypt",
                        "column": 4,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Geometry",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_WaterWheel"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-800",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_GoldMine_Average_2"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_Goldsmith_2"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_EgyptianDiplomacy",
                        "name": "EgyptianDiplomacy",
                        "age": "Egypt",
                        "column": 4,
                        "order": 2,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_EgyptianDiplomacy",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_WaterWheel"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-300",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Small_2"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Joists",
                        "name": "Joists",
                        "age": "Egypt",
                        "column": 4,
                        "order": 3,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Joists",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_WaterWheel"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-2500",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_PapyrusField_Average_2"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_PapyrusPress_2"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Channel",
                        "name": "Channel",
                        "age": "Egypt",
                        "column": 5,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Channel",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_Geometry"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_EgyptianDiplomacy"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-10000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_Channel_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Hieroglyphs",
                        "name": "Hieroglyphs",
                        "age": "Egypt",
                        "column": 5,
                        "order": 2,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Hieroglyphs",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_EgyptianDiplomacy"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_Joists"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-15000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Average_2"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_SmallWell_2"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Preservation",
                        "name": "Preservation",
                        "age": "Egypt",
                        "column": 7,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Preservation",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_BurialRites"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-70000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_GoldMine_Average_3"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_Goldsmith_3"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_Channel_3"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_FinePapyrus",
                        "name": "FinePapyrus",
                        "age": "Egypt",
                        "column": 6,
                        "order": 2,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_FinePapyrus",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_Hieroglyphs"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-40000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_PapyrusField_Average_3"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_PapyrusPress_3"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_BurialRites",
                        "name": "BurialRites",
                        "age": "Egypt",
                        "column": 6,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_BurialRites",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_Channel"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-25000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Small_3"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_Channel_2"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Geography",
                        "name": "Geography",
                        "age": "Egypt",
                        "column": 7,
                        "order": 2,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Geography",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_FinePapyrus"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-110000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Average_3"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_SmallWell_3"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_ExtractionMethods",
                        "name": "ExtractionMethods",
                        "age": "Egypt",
                        "column": 8,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_ExtractionMethods",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_Preservation"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_Geography"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-250000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_IrrigationStation_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_Fountain_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_Oasis_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Technology_Egypt_ExtractionMethods_TransitionReward_1"
                                            },
                                            "target": "Building_Egypt_City_CityHall_2",
                                            "duration": "0s",
                                            "start": {},
                                            "complete": {},
                                            "sourceGroup": "cityHall",
                                            "cities": [
                                                "City_Egypt"
                                            ],
                                            "usesConstructionSlots": true
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_GoldenMask",
                        "name": "Golden Mask",
                        "age": "Egypt",
                        "column": 9,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_GoldenMask",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_ExtractionMethods"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-450000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_Goldsmith_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_GoldMine_Average_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_GoldMine_Premium_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_IrrigationStation_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_EgyptianConsensus",
                        "name": "Egyptian Consensus",
                        "age": "Egypt",
                        "column": 9,
                        "order": 2,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_EgyptianConsensus",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_ExtractionMethods"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-280000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Small_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Premium_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_SmallWell_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_Channel_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_CeremonialDress",
                        "name": "Ceremonial Dress",
                        "age": "Egypt",
                        "column": 9,
                        "order": 3,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_CeremonialDress",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_ExtractionMethods"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-350000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_PapyrusPress_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_PapyrusField_Average_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_PapyrusField_Premium_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_CulturalExchange",
                        "name": "Cultural Exchange",
                        "age": "Egypt",
                        "column": 10,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_CulturalExchange",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_GoldenMask"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_EgyptianConsensus"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-550000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Average_4"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_Channel_5"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_WaterPump",
                        "name": "Water Pump",
                        "age": "Egypt",
                        "column": 10,
                        "order": 2,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_WaterPump",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_EgyptianConsensus"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_CeremonialDress"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-700000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_WaterPump_1"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_SmallWell_5"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Alloys",
                        "name": "Alloys",
                        "age": "Egypt",
                        "column": 11,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Alloys",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_CulturalExchange"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-1100000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_GoldMine_Average_5"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_Goldsmith_5"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_IrrigationStation_5"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Astrology",
                        "name": "Astrology",
                        "age": "Egypt",
                        "column": 11,
                        "order": 2,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Astrology",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_CulturalExchange"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_WaterPump"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-900000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Small_5"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_SmallWell_6"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_Channel_6"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Storage",
                        "name": "Storage",
                        "age": "Egypt",
                        "column": 11,
                        "order": 3,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Storage",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_WaterPump"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-1300000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_PapyrusField_Average_5"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_PapyrusPress_5"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_WaterPump_5"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_MakeUp",
                        "name": "Make Up",
                        "age": "Egypt",
                        "column": 12,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_MakeUp",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_Alloys"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_Astrology"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_Storage"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-1600000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Average_5"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_IrrigationStation_6"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Irrigation_WaterPump_6"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Astronomy",
                        "name": "Astronomy",
                        "age": "Egypt",
                        "column": 13,
                        "order": 1,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Astronomy",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_MakeUp"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-2200000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_GoldMine_Average_6"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_Goldsmith_6"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Library",
                        "name": "Library",
                        "age": "Egypt",
                        "column": 13,
                        "order": 2,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Library",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_MakeUp"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-3000000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Small_6"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Mummification",
                        "name": "Mummification",
                        "age": "Egypt",
                        "column": 13,
                        "order": 3,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Mummification",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_MakeUp"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-1900000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Home_Average_6"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Egypt_Scaffolding",
                        "name": "Scaffolding",
                        "age": "Egypt",
                        "column": 13,
                        "order": 4,
                        "cityDefinitionId": "City_Egypt",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Egypt_Scaffolding",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Egypt_MakeUp"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "deben",
                                            "amount": "-2600000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_PapyrusField_Average_6"
                                            },
                                            "cities": [
                                                "City_Egypt"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Egypt_Workshop_PapyrusPress_6"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                "wonderDefinitionId": "Wonder_Egypt_GreatSphinx"
            },
            {
                "@type": "type.googleapis.com/EventRankingDefinitionDTO",
                "id": "Ranking_EventCity_Egypt",
                "progressResource": {
                    "id": "event_ranking_points",
                    "traits": [
                        {
                            "@type": "type.googleapis.com/NotSmallerZeroTraitDTO"
                        },
                        {
                            "@type": "type.googleapis.com/PlayerRankingTraitDTO",
                            "ranking": "RankingType_EVENT_CITY_PROGRESS"
                        }
                    ],
                    "resourceType": "soft_currency"
                },
                "brackets": [
                    {
                        "id": "Ranking_EventCity_Egypt_Bracket_1",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "2"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_Egypt_Bracket_2",
                        "threshold": 0.5,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "5"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_egypt_common",
                                "amount": "1"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "1500"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_Egypt_Bracket_3",
                        "threshold": 0.8,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "7"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_egypt_common",
                                "amount": "2"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "3000"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_Egypt_Bracket_4",
                        "threshold": 0.95,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "10"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_egypt_common",
                                "amount": "4"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "7500"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_Egypt_Bracket_5",
                        "threshold": 0.99,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "15"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_egypt_common",
                                "amount": "8"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "15000"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_legendary_part",
                                "amount": "2"
                            }
                        ]
                    }
                ]
            },
            {
                "@type": "type.googleapis.com/EventSubscriptionComponentDTO",
                "id": "event_subscription.EventCity_Egypt",
                "subscriptionBenefitDefinitionIds": [
                    "subscription_benefit.EVENT_CITY_PRODUCTION_SLOTS",
                    "subscription_benefit.EVENT_CITY_PRODUCTION_DURATION"
                ]
            },
            {
                "@type": "type.googleapis.com/EventSeenComponentDTO",
                "id": "event_seen.EventCity_Egypt_GreatSphinx"
            },
            {
                "@type": "type.googleapis.com/EventResourceComponentDTO",
                "id": "event_resources.EventCity_Egypt_GreatSphinx_Resources",
                "removeAtEventEnd": [
                    "event_city_progress",
                    "event_ranking_points",
                    "deben",
                    "papyrus",
                    "gold_ore",
                    "papyrus_scroll",
                    "ceremonial_dress",
                    "ankh",
                    "golden_mask"
                ]
            }
        ],
        "requirements": [
            {
                "@type": "type.googleapis.com/UnlockableFeatureRequirementDTO",
                "requiredFeature": "UnlockableFeatureConstant_EVENT_CITIES"
            }
        ]
    },
    {
        "id": "event.EventCity_Vikings_DragonshipEllida",
        "components": [
            {
                "@type": "type.googleapis.com/RewardLaneEventComponentDTO",
                "definitionId": "reward_lane.EventCity_Vikings_RewardLane",
                "progressResourceDefinitionId": "event_city_progress",
                "rewards": {
                    "1": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_1"
                                },
                                "resource": "campaign_energy",
                                "amount": "25"
                            }
                        ]
                    },
                    "2": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_Vikings_Expansions_1",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_Vikings_Expansions_1_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_Vikings_Expansions_1_1"
                                                },
                                                "city": "City_Vikings",
                                                "regular": 5
                                            },
                                            {
                                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_Vikings_Expansions_1_2"
                                                },
                                                "city": "City_Vikings",
                                                "regular": 1,
                                                "subType": "ExpansionSubType_WATER"
                                            }
                                        ],
                                        "assetId": "icon_viking_expansion_chest"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_Vikings_Expansions_1"
                                }
                            }
                        ]
                    },
                    "3": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_3"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "4": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_4"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_100"
                            }
                        ]
                    },
                    "5": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_5"
                                },
                                "resource": "research_points",
                                "amount": "4"
                            }
                        ]
                    },
                    "6": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_6"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "2"
                            }
                        ]
                    },
                    "7": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_Vikings_Expansions_2",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_Vikings_Expansions_2_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_Vikings_Expansions_2_1"
                                                },
                                                "city": "City_Vikings",
                                                "regular": 7
                                            },
                                            {
                                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_Vikings_Expansions_2_2"
                                                },
                                                "city": "City_Vikings",
                                                "regular": 1,
                                                "subType": "ExpansionSubType_WATER"
                                            }
                                        ],
                                        "assetId": "icon_viking_expansion_chest"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_Vikings_Expansions_2"
                                }
                            }
                        ]
                    },
                    "8": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_50",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_50_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_25"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_25"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_small"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50"
                                }
                            }
                        ]
                    },
                    "9": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_9"
                                },
                                "resource": "campaign_energy",
                                "amount": "40"
                            }
                        ]
                    },
                    "10": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_10"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "11": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_11"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_50"
                            }
                        ]
                    },
                    "12": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_12"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "13": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_Vikings_Expansions_3",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_Vikings_Expansions_3_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_Vikings_Expansions_3_1"
                                                },
                                                "city": "City_Vikings",
                                                "regular": 10
                                            },
                                            {
                                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_Vikings_Expansions_3_2"
                                                },
                                                "city": "City_Vikings",
                                                "regular": 2,
                                                "subType": "ExpansionSubType_WATER"
                                            }
                                        ],
                                        "assetId": "icon_viking_expansion_chest"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_Vikings_Expansions_3"
                                }
                            }
                        ]
                    },
                    "14": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_14"
                                },
                                "resource": "research_points",
                                "amount": "5"
                            }
                        ]
                    },
                    "15": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_15"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "2"
                            }
                        ]
                    },
                    "16": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_100",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_100_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_50"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_50"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_small"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100"
                                }
                            }
                        ]
                    },
                    "17": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_Vikings_Expansions_4",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_Vikings_Expansions_4_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_Vikings_Expansions_4_1"
                                                },
                                                "city": "City_Vikings",
                                                "regular": 11
                                            },
                                            {
                                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_Vikings_Expansions_4_2"
                                                },
                                                "city": "City_Vikings",
                                                "regular": 2,
                                                "subType": "ExpansionSubType_WATER"
                                            }
                                        ],
                                        "assetId": "icon_viking_expansion_chest"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_Vikings_Expansions_4"
                                }
                            }
                        ]
                    },
                    "18": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_18"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_75"
                            }
                        ]
                    },
                    "19": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_19"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_450"
                            }
                        ]
                    },
                    "20": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_20"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "21": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_21"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "22": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_22"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "23": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_23"
                                },
                                "resource": "research_points",
                                "amount": "6"
                            }
                        ]
                    },
                    "24": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_Vikings_Expansions_5",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_Vikings_Expansions_5_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_Vikings_Expansions_5_1"
                                                },
                                                "city": "City_Vikings",
                                                "regular": 15
                                            },
                                            {
                                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_Vikings_Expansions_5_2"
                                                },
                                                "city": "City_Vikings",
                                                "regular": 4,
                                                "subType": "ExpansionSubType_WATER"
                                            }
                                        ],
                                        "assetId": "icon_viking_expansion_chest"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_Vikings_Expansions_5"
                                }
                            }
                        ]
                    },
                    "25": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_25"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_450"
                            }
                        ]
                    },
                    "26": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_26"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "27": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_27"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "28": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_28"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "29": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_150",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_150_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_75"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_75"
                                            }
                                        ],
                                        "assetId": "icon_loot_container"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150"
                                }
                            }
                        ]
                    },
                    "30": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_30"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "31": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_31"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "32": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_32"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_200"
                            }
                        ]
                    },
                    "33": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_33"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "34": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_34"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "35": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_300",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_300_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_150"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_150"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_large"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300"
                                }
                            }
                        ]
                    },
                    "36": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_36"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "37": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_37"
                                },
                                "resource": "research_points",
                                "amount": "10"
                            }
                        ]
                    },
                    "38": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_38"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "39": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_39"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_650"
                            }
                        ]
                    },
                    "40": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_1000",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_500"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_500"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_xlarge"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000"
                                }
                            }
                        ]
                    },
                    "41": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_41"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "42": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_42"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "43": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_43"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "44": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_44"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_2200"
                            }
                        ]
                    },
                    "45": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_45"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "10"
                            }
                        ]
                    },
                    "46": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_46"
                                },
                                "resource": "research_points",
                                "amount": "15"
                            }
                        ]
                    },
                    "47": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_47"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "48": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_48"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_500"
                            }
                        ]
                    },
                    "49": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_49"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_1800"
                            }
                        ]
                    },
                    "50": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_Vikings_RewardLane_Reward_50"
                                },
                                "resource": "rift_token_vikings_common",
                                "amount": "20"
                            }
                        ]
                    }
                },
                "minimumStateToCollect": "ACTIVE"
            },
            {
                "@type": "type.googleapis.com/RiftEventComponentDTO",
                "definitionId": "event_rift.Vikings",
                "riftDefinitionId": "rift.Vikings",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/RiftPromotionEventComponentDTO",
                "id": "event_rift_promotion.EventCity_Vikings_DragonshipEllida_Promotion_1",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/RiftPromotionEventComponentDTO",
                "id": "event_rift_promotion.EventCity_Vikings_DragonshipEllida_Promotion_2",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/QuestlineEventDefinitionDTO",
                "id": "questline_event.EventCity_Vikings_DragonshipEllida"
            },
            {
                "@type": "type.googleapis.com/EventCityComponentDTO",
                "id": "event_city.Vikings_DragonshipEllida_1",
                "cityDefinitionId": "City_Vikings",
                "technologies": [
                    {
                        "id": "Technology_Vikings_RiseOfTheVikings",
                        "name": "RiseoftheVikings",
                        "age": "Vikings",
                        "column": 1,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_RiseOfTheVikings",
                                "start": {
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-10",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Sailor_1"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_Seafaring",
                        "name": "Seafaring",
                        "age": "Vikings",
                        "column": 2,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_Seafaring",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_RiseOfTheVikings"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-30",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_FishingPier_Average_1"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_FishingPier_Premium_1"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_Beekeeping",
                        "name": "Beekeeping",
                        "age": "Vikings",
                        "column": 2,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_Beekeeping",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_RiseOfTheVikings"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-30",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Beehive_Average_1"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_MeadBrewery",
                        "name": "MeadBrewery",
                        "age": "Vikings",
                        "column": 3,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_MeadBrewery",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_Seafaring"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_Beekeeping"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-140",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Workshop_Tavern_1"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_PlunderingRaids",
                        "name": "PlunderingRaids",
                        "age": "Vikings",
                        "column": 4,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_PlunderingRaids",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_MeadBrewery"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-220",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_ExpeditionPier_Average_1"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_SailorPort_Premium_1"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_FishingNets",
                        "name": "FishingNets",
                        "age": "Vikings",
                        "column": 5,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_FishingNets",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_PlunderingRaids"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-530",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_FishingPier_Average_2"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_Jarldom",
                        "name": "Jarldom",
                        "age": "Vikings",
                        "column": 5,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_Jarldom",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_PlunderingRaids"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-1100",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Sailor_2"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_ThrallsAndKarls",
                        "name": "ThrallsandKarls",
                        "age": "Vikings",
                        "column": 5,
                        "order": 3,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_ThrallsAndKarls",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_PlunderingRaids"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-1600",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Worker_2"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_ImprovedBeekeeping",
                        "name": "ImprovedBeekeeping",
                        "age": "Vikings",
                        "column": 5,
                        "order": 4,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_ImprovedBeekeeping",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_PlunderingRaids"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-1900",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Beehive_Average_2"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_FaeringMastery",
                        "name": "FaeringMastery",
                        "age": "Vikings",
                        "column": 6,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_FaeringMastery",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_FishingNets"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_Jarldom"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-3000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_ExpeditionPier_Average_2"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_TarOvens",
                        "name": "TarOvens",
                        "age": "Vikings",
                        "column": 6,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_TarOvens",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_ThrallsAndKarls"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_ImprovedBeekeeping"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-2000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Workshop_Tavern_2"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_DriftNets",
                        "name": "DriftNets",
                        "age": "Vikings",
                        "column": 7,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_DriftNets",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_FaeringMastery"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-90000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_FishingPier_Average_3"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_SkaldicPoetry",
                        "name": "SkaldicPoetry",
                        "age": "Vikings",
                        "column": 7,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_SkaldicPoetry",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_FaeringMastery"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-25000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Sailor_3"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_RunicWriting",
                        "name": "RunicWriting",
                        "age": "Vikings",
                        "column": 7,
                        "order": 3,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_RunicWriting",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_TarOvens"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-15000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Worker_3"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_Pictograms",
                        "name": "Pictograms",
                        "age": "Vikings",
                        "column": 7,
                        "order": 4,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_Pictograms",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_TarOvens"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-125000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Beehive_Average_3"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_FelagPartnerships",
                        "name": "FelagPartnerships",
                        "age": "Vikings",
                        "column": 8,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_FelagPartnerships",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_DriftNets"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_SkaldicPoetry"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-235000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_ExpeditionPier_Average_3"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_HealingMead",
                        "name": "Healing Mead",
                        "age": "Vikings",
                        "column": 8,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_HealingMead",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_RunicWriting"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_Pictograms"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-260000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Workshop_Tavern_3"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_GlacierMastery",
                        "name": "GlacierMastery",
                        "age": "Vikings",
                        "column": 9,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_GlacierMastery",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_FelagPartnerships"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_HealingMead"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-175000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Technology_Vikings_GlacierMastery_TransitionReward_1"
                                            },
                                            "target": "Building_Vikings_City_CityHall_2",
                                            "duration": "0s",
                                            "start": {},
                                            "complete": {},
                                            "sourceGroup": "cityHall",
                                            "cities": [
                                                "City_Vikings"
                                            ],
                                            "usesConstructionSlots": true
                                        },
                                        {
                                            "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                            "baseData": {
                                                "hidden": true
                                            },
                                            "city": "City_Vikings",
                                            "premium": 6
                                        },
                                        {
                                            "@type": "type.googleapis.com/InstantExpansionConstructionUnlockedRewardDTO",
                                            "baseData": {
                                                "id": "Technology_Vikings_GlacierMastery_CitySpaceRestriction_Unlock_1",
                                                "hidden": true
                                            },
                                            "constructionComponentId": "Connector_Vikings_ConstructionGrid1",
                                            "city": "City_Vikings"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_ImprovedFishing",
                        "name": "ImprovedFishing",
                        "age": "Vikings",
                        "column": 10,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_ImprovedFishing",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_GlacierMastery"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-230000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_FishingPier_Average_4"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_FishingPier_Premium_4"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_FuneralAtSea",
                        "name": "FuneralAtSea",
                        "age": "Vikings",
                        "column": 10,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_FuneralAtSea",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_GlacierMastery"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-320000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Sailor_4"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_Tattoos",
                        "name": "Tattoos",
                        "age": "Vikings",
                        "column": 11,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_Tattoos",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_FuneralAtSea"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_DragonBoats"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-700000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Worker_4"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Premium_4"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_SuperiorBeekeeping",
                        "name": "SuperiorBeekeeping",
                        "age": "Vikings",
                        "column": 11,
                        "order": 3,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_SuperiorBeekeeping",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_DragonBoats"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_MeadHalls"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-430000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Beehive_Average_4"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_GlimaFighting",
                        "name": "GlimaFighting",
                        "age": "Vikings",
                        "column": 11,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_GlimaFighting",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_ImprovedFishing"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_FuneralAtSea"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-840000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_ExpeditionPier_Average_4"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_DragonBoats",
                        "name": "DragonBoats",
                        "age": "Vikings",
                        "column": 10,
                        "order": 3,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_DragonBoats",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_GlacierMastery"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-420000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_SailorPort_Average_1"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_SailorPort_Premium_4"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_MeadHalls",
                        "name": "MeadHalls",
                        "age": "Vikings",
                        "column": 10,
                        "order": 4,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_MeadHalls",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_GlacierMastery"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-530000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Workshop_Tavern_4"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_Sagas",
                        "name": "Sagas",
                        "age": "Vikings",
                        "column": 12,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_Sagas",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_GlimaFighting"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_Tattoos"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-760000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_FishingPier_Average_5"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_PerfectedHoney",
                        "name": "PerfectedHoney",
                        "age": "Vikings",
                        "column": 13,
                        "order": 3,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_PerfectedHoney",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_Sagas"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_MeadMastery"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-850000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Beehive_Average_5"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_LongDistanceSeafaring",
                        "name": "LongDistanceSeafaring",
                        "age": "Vikings",
                        "column": 13,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_LongDistanceSeafaring",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_Sagas"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_MeadMastery"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-860000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_ExpeditionPier_Average_5"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_SunCompass",
                        "name": "SunCompass",
                        "age": "Vikings",
                        "column": 13,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_SunCompass",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_Sagas"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_MeadMastery"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-1200000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_SailorPort_Average_5"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_MeadMastery",
                        "name": "MeadMastery",
                        "age": "Vikings",
                        "column": 12,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_MeadMastery",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_Tattoos"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_SuperiorBeekeeping"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-1000000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Workshop_Tavern_5"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_BurialSites",
                        "name": "BurialSites",
                        "age": "Vikings",
                        "column": 14,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_BurialSites",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_LongDistanceSeafaring"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_SunCompass"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-830000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Sailor_5"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_TaflGames",
                        "name": "TaflGames",
                        "age": "Vikings",
                        "column": 14,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_TaflGames",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_PerfectedHoney"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-1300000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Worker_5"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_FishingMastery",
                        "name": "FishingMastery",
                        "age": "Vikings",
                        "column": 15,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_FishingMastery",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_BurialSites"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-950000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_FishingPier_Average_6"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_BeekeepingMastery",
                        "name": "BeekeepingMastery",
                        "age": "Vikings",
                        "column": 15,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_BeekeepingMastery",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_TaflGames"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-1600000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Beehive_Average_6"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_TavernBrawls",
                        "name": "TavernBrawls",
                        "age": "Vikings",
                        "column": 15,
                        "order": 3,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_TavernBrawls",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_TaflGames"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-1200000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Workshop_Tavern_6"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_FjordDominion",
                        "name": "FjordDominion",
                        "age": "Vikings",
                        "column": 16,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_FjordDominion",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_FishingMastery"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_BeekeepingMastery"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_TavernBrawls"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-990000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Sailor_6"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_VikingHomesteads",
                        "name": "VikingHomesteads",
                        "age": "Vikings",
                        "column": 16,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_VikingHomesteads",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_FishingMastery"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_BeekeepingMastery"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_TavernBrawls"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-940000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_Home_Worker_6"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_MagneticCompass",
                        "name": "MagneticCompass",
                        "age": "Vikings",
                        "column": 17,
                        "order": 1,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_MagneticCompass",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_FjordDominion"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-1500000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_ExpeditionPier_Average_6"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_Vikings_HarbourEconomics",
                        "name": "HarbourEconomics",
                        "age": "Vikings",
                        "column": 17,
                        "order": 2,
                        "cityDefinitionId": "City_Vikings",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_Vikings_HarbourEconomics",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_Vikings_VikingHomesteads"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "pennies",
                                            "amount": "-1300000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_Vikings_SailorPort_Average_6"
                                            },
                                            "cities": [
                                                "City_Vikings"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                "wonderDefinitionId": "Wonder_Vikings_DragonshipEllida"
            },
            {
                "@type": "type.googleapis.com/EventRankingDefinitionDTO",
                "id": "Ranking_EventCity_Vikings",
                "progressResource": {
                    "id": "event_ranking_points",
                    "traits": [
                        {
                            "@type": "type.googleapis.com/NotSmallerZeroTraitDTO"
                        },
                        {
                            "@type": "type.googleapis.com/PlayerRankingTraitDTO",
                            "ranking": "RankingType_EVENT_CITY_PROGRESS"
                        }
                    ],
                    "resourceType": "soft_currency"
                },
                "brackets": [
                    {
                        "id": "Ranking_EventCity_Vikings_Bracket_1",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "2"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_Vikings_Bracket_2",
                        "threshold": 0.5,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "5"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_vikings_common",
                                "amount": "1"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "1500"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_Vikings_Bracket_3",
                        "threshold": 0.8,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "7"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_vikings_common",
                                "amount": "2"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "3000"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_Vikings_Bracket_4",
                        "threshold": 0.95,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "10"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_vikings_common",
                                "amount": "4"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "7500"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_Vikings_Bracket_5",
                        "threshold": 0.99,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "15"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_vikings_common",
                                "amount": "8"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "15000"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_legendary_part",
                                "amount": "2"
                            }
                        ]
                    }
                ]
            },
            {
                "@type": "type.googleapis.com/EventSubscriptionComponentDTO",
                "id": "event_subscription.EventCity_Vikings",
                "subscriptionBenefitDefinitionIds": [
                    "subscription_benefit.EVENT_CITY_PRODUCTION_SLOTS",
                    "subscription_benefit.EVENT_CITY_PRODUCTION_DURATION"
                ]
            },
            {
                "@type": "type.googleapis.com/EventSeenComponentDTO",
                "id": "event_seen.EventCity_Vikings_DragonshipEllida"
            },
            {
                "@type": "type.googleapis.com/EventResourceComponentDTO",
                "id": "event_resources.EventCity_Vikings_DragonshipEllida_Resources",
                "removeAtEventEnd": [
                    "event_city_progress",
                    "event_ranking_points",
                    "pennies",
                    "fish",
                    "honey",
                    "mead",
                    "ceramic_treasure",
                    "gold_treasure",
                    "stockfish",
                    "spice_treasure",
                    "gem_treasure"
                ]
            }
        ],
        "requirements": [
            {
                "@type": "type.googleapis.com/UnlockableFeatureRequirementDTO",
                "requiredFeature": "UnlockableFeatureConstant_EVENT_CITIES"
            }
        ]
    },
    {
        "id": "event.EventCity_China_ForbiddenCity",
        "components": [
            {
                "@type": "type.googleapis.com/RewardLaneEventComponentDTO",
                "definitionId": "reward_lane.EventCity_China_RewardLane",
                "progressResourceDefinitionId": "event_city_progress",
                "rewards": {
                    "1": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_1"
                                },
                                "resource": "campaign_energy",
                                "amount": "25"
                            }
                        ]
                    },
                    "2": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_2"
                                },
                                "city": "City_China",
                                "regular": 3
                            }
                        ]
                    },
                    "3": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_3"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "4": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_4"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_100"
                            }
                        ]
                    },
                    "5": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_5"
                                },
                                "resource": "research_points",
                                "amount": "4"
                            }
                        ]
                    },
                    "6": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_6"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "2"
                            }
                        ]
                    },
                    "7": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_7"
                                },
                                "city": "City_China",
                                "regular": 5
                            }
                        ]
                    },
                    "8": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_50",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_50_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_25"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_25"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_small"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_50"
                                }
                            }
                        ]
                    },
                    "9": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_9"
                                },
                                "resource": "campaign_energy",
                                "amount": "40"
                            }
                        ]
                    },
                    "10": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_10"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "11": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_11"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_50"
                            }
                        ]
                    },
                    "12": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_12"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "13": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_13"
                                },
                                "city": "City_China",
                                "regular": 7
                            }
                        ]
                    },
                    "14": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_14"
                                },
                                "resource": "research_points",
                                "amount": "5"
                            }
                        ]
                    },
                    "15": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_15"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "2"
                            }
                        ]
                    },
                    "16": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_100",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_100_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_50"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_50"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_small"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_100"
                                }
                            }
                        ]
                    },
                    "17": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_17"
                                },
                                "city": "City_China",
                                "regular": 8
                            }
                        ]
                    },
                    "18": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_18"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_75"
                            }
                        ]
                    },
                    "19": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_19"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_450"
                            }
                        ]
                    },
                    "20": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_20"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "21": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_21"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "22": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_22"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            }
                        ]
                    },
                    "23": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_23"
                                },
                                "resource": "research_points",
                                "amount": "6"
                            }
                        ]
                    },
                    "24": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/IncreaseExpansionRightRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_24"
                                },
                                "city": "City_China",
                                "regular": 8
                            }
                        ]
                    },
                    "25": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_25"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_450"
                            }
                        ]
                    },
                    "26": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_26"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "27": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_27"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "28": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_28"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "29": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_150",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_150_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_75"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_75"
                                            }
                                        ],
                                        "assetId": "icon_loot_container"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_150"
                                }
                            }
                        ]
                    },
                    "30": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_30"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "31": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_31"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "32": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_32"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_200"
                            }
                        ]
                    },
                    "33": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_33"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "34": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_34"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "35": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_300",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_300_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_150"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_150"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_large"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_300"
                                }
                            }
                        ]
                    },
                    "36": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_36"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "37": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_37"
                                },
                                "resource": "research_points",
                                "amount": "10"
                            }
                        ]
                    },
                    "38": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_38"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "3"
                            }
                        ]
                    },
                    "39": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_39"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_650"
                            }
                        ]
                    },
                    "40": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/RewardDefinitionDTO",
                                "id": "Reward_EventCity_CoinsAndGoods_Chest_1000",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/LootContainerRewardDTO",
                                        "baseData": {
                                            "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_Id"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_1"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Coins_500"
                                            },
                                            {
                                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000_2"
                                                },
                                                "dynamicDefinitionId": "Dac_Reward_Goods_500"
                                            }
                                        ],
                                        "assetId": "icon_loot_container_xlarge"
                                    }
                                ],
                                "baseData": {
                                    "id": "Reward_EventCity_CoinsAndGoods_Chest_1000"
                                }
                            }
                        ]
                    },
                    "41": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_41"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "42": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_42"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "5"
                            }
                        ]
                    },
                    "43": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_43"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_250"
                            }
                        ]
                    },
                    "44": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_44"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_2200"
                            }
                        ]
                    },
                    "45": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_45"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "10"
                            }
                        ]
                    },
                    "46": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_46"
                                },
                                "resource": "research_points",
                                "amount": "15"
                            }
                        ]
                    },
                    "47": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_47"
                                },
                                "resource": "rift_token_legendary_part",
                                "amount": "1"
                            }
                        ]
                    },
                    "48": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_48"
                                },
                                "dynamicDefinitionId": "Dac_Reward_Food_500"
                            }
                        ]
                    },
                    "49": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_49"
                                },
                                "dynamicDefinitionId": "Dac_EventCity_XpScrolls_1800"
                            }
                        ]
                    },
                    "50": {
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {
                                    "id": "EventCity_China_RewardLane_Reward_50"
                                },
                                "resource": "rift_token_china_common",
                                "amount": "20"
                            }
                        ]
                    }
                },
                "minimumStateToCollect": "ACTIVE"
            },
            {
                "@type": "type.googleapis.com/RiftEventComponentDTO",
                "definitionId": "event_rift.China",
                "riftDefinitionId": "rift.China",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/RiftPromotionEventComponentDTO",
                "id": "event_rift_promotion.EventCity_China_ForbiddenCity_Promotion_1",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/RiftPromotionEventComponentDTO",
                "id": "event_rift_promotion.EventCity_China_ForbiddenCity_Promotion_2",
                "validAfterEventEnd": "172800s"
            },
            {
                "@type": "type.googleapis.com/QuestlineEventDefinitionDTO",
                "id": "questline_event.EventCity_China_ForbiddenCity"
            },
            {
                "@type": "type.googleapis.com/EventCityComponentDTO",
                "id": "event_city.China_ForbiddenCity_1",
                "cityDefinitionId": "City_China",
                "technologies": [
                    {
                        "id": "Technology_China_RiseOfChina",
                        "name": "RiseOfChina",
                        "age": "China",
                        "column": 1,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_RiseOfChina",
                                "start": {
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-50",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_InkAndBrush",
                        "name": "InkAndBrush",
                        "age": "China",
                        "column": 2,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_InkAndBrush",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_RiseOfChina"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-60",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Premium_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_Sericulture",
                        "name": "Sericulture",
                        "age": "China",
                        "column": 2,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_Sericulture",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_RiseOfChina"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-70",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_MothGlade_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_SilkManufacture",
                        "name": "SilkManufacture",
                        "age": "China",
                        "column": 3,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_SilkManufacture",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_InkAndBrush"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_Sericulture"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-250",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Small_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_RammedEarthHouses",
                        "name": "RammedEarthHouses",
                        "age": "China",
                        "column": 4,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_RammedEarthHouses",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_SilkManufacture"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-500",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_PaddyFields",
                        "name": "PaddyFields",
                        "age": "China",
                        "column": 4,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_PaddyFields",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_SilkManufacture"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1500",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_Calligraphy",
                        "name": "Calligraphy",
                        "age": "China",
                        "column": 4,
                        "order": 3,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_Calligraphy",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_SilkManufacture"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1800",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_RefinedSilk",
                        "name": "RefinedSilk",
                        "age": "China",
                        "column": 5,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_RefinedSilk",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_RammedEarthHouses"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-2500",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_2"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_MothGlade_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Small_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_DynasticLaw",
                        "name": "DynasticLaw",
                        "age": "China",
                        "column": 5,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_DynasticLaw",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_PaddyFields"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_Calligraphy"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-20000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_SilkMastery",
                        "name": "SilkMastery",
                        "age": "China",
                        "column": 6,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_SilkMastery",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_RefinedSilk"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-50000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_EnhancedPaddyFields",
                        "name": "EnhancedPaddyFields",
                        "age": "China",
                        "column": 6,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_EnhancedPaddyFields",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_DynasticLaw"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-70000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_3"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_DedicatedWorkforce",
                        "name": "DedicatedWorkforce",
                        "age": "China",
                        "column": 7,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_DedicatedWorkforce",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_SilkMastery"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_EnhancedPaddyFields"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-70000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_MothGlade_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Premium_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Technology_China_DedicatedWorkforce_TransitionReward_1"
                                            },
                                            "target": "Building_China_City_CityHall_2",
                                            "duration": "0s",
                                            "start": {},
                                            "complete": {},
                                            "sourceGroup": "cityHall",
                                            "cities": [
                                                "City_China"
                                            ],
                                            "usesConstructionSlots": true
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_KaolinProcessing",
                        "name": "KaolinProcessing",
                        "age": "China",
                        "column": 8,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_KaolinProcessing",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_DedicatedWorkforce"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-110000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_KaolinQuarry_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ClayProcessor_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Small_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_IronPlough",
                        "name": "IronPlough",
                        "age": "China",
                        "column": 8,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_IronPlough",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_DedicatedWorkforce"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-270000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Premium_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_4"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_PorcelainProduction",
                        "name": "PorcelainProduction ",
                        "age": "China",
                        "column": 9,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_PorcelainProduction",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_KaolinProcessing"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-250000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_PorcelainWorkshop_1"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_LaborDuties",
                        "name": "LaborDuties",
                        "age": "China",
                        "column": 9,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_LaborDuties",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_IronPlough"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-170000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_MothGlade_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_BakedBricks",
                        "name": "BakedBricks",
                        "age": "China",
                        "column": 10,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_BakedBricks",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_PorcelainProduction"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-210000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ClayProcessor_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_DeepFoundations",
                        "name": "DeepFoundations",
                        "age": "China",
                        "column": 10,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_DeepFoundations",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_PorcelainProduction"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-330000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_KaolinQuarry_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Small_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_AdvancedClayworks",
                        "name": "AdvancedClayworks",
                        "age": "China",
                        "column": 10,
                        "order": 3,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_AdvancedClayworks",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_PorcelainProduction"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-420000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_PorcelainWorkshop_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_Terracing",
                        "name": "Terracing",
                        "age": "China",
                        "column": 10,
                        "order": 4,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_Terracing",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_LaborDuties"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-660000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_5"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_FloorPlans",
                        "name": "FloorPlans",
                        "age": "China",
                        "column": 11,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_FloorPlans",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_BakedBricks"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-730000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ClayProcessor_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_UrbanManagement",
                        "name": "UrbanManagement",
                        "age": "China",
                        "column": 11,
                        "order": 2,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_UrbanManagement",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_DeepFoundations"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1000000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_KaolinQuarry_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_PorcelainMastery",
                        "name": "PorcelainMastery",
                        "age": "China",
                        "column": 11,
                        "order": 3,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_PorcelainMastery",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_AdvancedClayworks"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_Terracing"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1300000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_PorcelainWorkshop_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_ExtractionPoint_MothGlade_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_ThreadProcessor_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_DrylandFarming",
                        "name": "DrylandFarming",
                        "age": "China",
                        "column": 11,
                        "order": 4,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_DrylandFarming",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_Terracing"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1500000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_RiceFarm_Average_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Average_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "id": "Technology_China_ChineseConsensus",
                        "name": "ChineseConsensus",
                        "age": "China",
                        "column": 12,
                        "order": 1,
                        "cityDefinitionId": "City_China",
                        "components": [
                            {
                                "@type": "type.googleapis.com/ResearchComponentDTO",
                                "id": "Research_Technology_China_ChineseConsensus",
                                "start": {
                                    "requirements": [
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_FloorPlans"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_UrbanManagement"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_PorcelainMastery"
                                        },
                                        {
                                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                                            "id": "Technology_China_DrylandFarming"
                                        }
                                    ],
                                    "costs": [
                                        {
                                            "@type": "type.googleapis.com/ResourceDTO",
                                            "definitionId": "wu_zhu",
                                            "amount": "-1800000",
                                            "fromResourceChange": true
                                        }
                                    ]
                                },
                                "finish": {
                                    "rewards": [
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Home_Small_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        },
                                        {
                                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                                            "baseData": {
                                                "id": "Building_China_Workshop_SilkWorkshop_6"
                                            },
                                            "cities": [
                                                "City_China"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                "wonderDefinitionId": "Wonder_China_ForbiddenCity"
            },
            {
                "@type": "type.googleapis.com/EventRankingDefinitionDTO",
                "id": "Ranking_EventCity_China",
                "progressResource": {
                    "id": "event_ranking_points",
                    "traits": [
                        {
                            "@type": "type.googleapis.com/NotSmallerZeroTraitDTO"
                        },
                        {
                            "@type": "type.googleapis.com/PlayerRankingTraitDTO",
                            "ranking": "RankingType_EVENT_CITY_PROGRESS"
                        }
                    ],
                    "resourceType": "soft_currency"
                },
                "brackets": [
                    {
                        "id": "Ranking_EventCity_China_Bracket_1",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "2"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_China_Bracket_2",
                        "threshold": 0.5,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "5"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_china_common",
                                "amount": "1"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "1500"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_China_Bracket_3",
                        "threshold": 0.8,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "7"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_china_common",
                                "amount": "2"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "3000"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_China_Bracket_4",
                        "threshold": 0.95,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "10"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_china_common",
                                "amount": "4"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "7500"
                            }
                        ]
                    },
                    {
                        "id": "Ranking_EventCity_China_Bracket_5",
                        "threshold": 0.99,
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "research_points",
                                "amount": "15"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_china_common",
                                "amount": "8"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "resource.hero_xp",
                                "amount": "15000"
                            },
                            {
                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                "baseData": {},
                                "resource": "rift_token_legendary_part",
                                "amount": "2"
                            }
                        ]
                    }
                ]
            },
            {
                "@type": "type.googleapis.com/EventSubscriptionComponentDTO",
                "id": "event_subscription.EventCity_China",
                "subscriptionBenefitDefinitionIds": [
                    "subscription_benefit.EVENT_CITY_PRODUCTION_SLOTS",
                    "subscription_benefit.EVENT_CITY_PRODUCTION_DURATION"
                ]
            },
            {
                "@type": "type.googleapis.com/EventSeenComponentDTO",
                "id": "event_seen.EventCity_China_ForbiddenCity"
            },
            {
                "@type": "type.googleapis.com/EventResourceComponentDTO",
                "id": "event_resources.EventCity_China_ForbiddenCity_Resources",
                "removeAtEventEnd": [
                    "event_city_progress",
                    "event_ranking_points",
                    "wu_zhu",
                    "rice",
                    "moth_cocoons",
                    "silk_threads",
                    "silk",
                    "kaolin",
                    "clay",
                    "porcelain"
                ]
            }
        ],
        "requirements": [
            {
                "@type": "type.googleapis.com/UnlockableFeatureRequirementDTO",
                "requiredFeature": "UnlockableFeatureConstant_EVENT_CITIES"
            }
        ]
    }
]

export default wondersRewards;