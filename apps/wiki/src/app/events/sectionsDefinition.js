const layoutEvents = {
    page: "events",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: "/events/intro/icon_event_world_fair_tokens.webp",
            show: true,
            dynamicSegments: [],
        },
        {
            id: 3,
            url: "daily-specials",
            name: "Daily Specials",
            img: "/events/daily-specials/calendar.webp",
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "quests",
            name: "Quests",
            img: "/events/quests/quests_icon.webp",
            show: true,
            dynamicSegments: [],
        },
        {
            id: 4,
            url: "customizations",
            name: "Customizations",
            img: "/events/customizations/icon_selection_kit_customizations_generic.webp",
            show: true,
            dynamicSegments: [":customizationId"],
        },
        {
            id: 5,
            url: "grand-prizes",
            name: "Grand Prizes",
            img: "/events/grand-prizes/EventPassGrandPriceChest.webp",
            show: true,
            dynamicSegments: [],
        },
    ]
}

export default layoutEvents;