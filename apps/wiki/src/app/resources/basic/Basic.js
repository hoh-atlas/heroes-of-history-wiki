import "./Basic.css";

import { leftJoinArrays, getItemIcon } from "../../../shared-resources/utils/utils";
import resources from "@/src/shared-resources/data/resources";
import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";

const Basic = () => {

    const basicAdditionalData = [
        {id: "coins", description1: "Homes, Quests, Campaign, Allied Cultures", description2: "Unlock technologies, Construct buildings"},
        {id: "food", description1: "Farms, Quests, Allied Cultures", description2: "Evolve heroes"},
        {id: "research_point", description1: "Every 1 Hour, Campaign, Quests, Incidents, Allied Cultures", description2: "Unlock technologies in Research Tree"},
        {id: "gems", description1: "Purchase, Quests, Campaign, Season Pass", description2: "Premium buildings, Premium expansions"},
        {id: "energy", description1: "Every 3 min, Quests, Treasure Hunt, Ads", description2: "Campaign Battles, Tesla Storms"},
        {id: "victory_ticket", description1: "Quests, Ads, Season Pass", description2: "Campaign Battles, Tesla Storms"},
        /*{id: "xp_common", description1: "Campaign", description2: "Adds 100 Experience to your Hero"},
        {id: "xp_uncommon", description1: "Campaign, Hero Academy", description2: "Adds 300 Experience to your Hero"},
        {id: "xp_rare", description1: "Campaign", description2: "Adds 700 Experience to your Hero"},
        {id: "xp_epic", description1: "Campaign, Treasure Hunt", description2: "Adds 1500 Experience to your Hero"},
        {id: "xp_legendary", description1: "Campaign, Treasure Hunt", description2: "Adds 3000 Experience to your Hero"},*/
        {id: "xp_hero", description1: "Campaign, Treasure Hunt, Allied Cultures, Hero Academy", description2: "Leveling Up your Heroes"},
        {id: "mastery_point", description1: "Treasure Hunt", description2: "Ability training"},
        {id: "antimatter", description1: "Campaign, Quests, Daily Bonus", description2: "Powers the Time Portal"},
        {id: "antimatter_legendary", description1: "Quests, Allied Cultures, Fragments", description2: "Powers the Legendary Time Portal"},
        {id: "antimatter_egyptian", description1: "Egypt Allied Cultures", description2: "Powers the Egyptian Time Portal"},
        {id: "antimatter_china", description1: "China Allied Cultures", description2: "Powers the China Time Portal"},
        /*{id: "antimatter_vikings", description1: "", description2: ""},*/
        {id: "antimatter_seasonpass", description1: "Season Pass", description2: "Powers the Arcane Time Portal"},
    ]

    const goodsExpanded = leftJoinArrays(basicAdditionalData, resources);

    const categoryPriorities = ["soft", "experiences", "antimatters"];

    const categorizedData = goodsExpanded.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return <>
        <Prologue imageSrc={"/resources/basic/food.webp"} alt={"Provinces"} maxHeight={"65px"}>
            Basic resources are crucial for your in-game progress. You need them to develop your city, unlock technologies in research, explore, evolve new heroes, and navigate through the realms of history and allied cultures.
        </Prologue>
        <SectionDivider/>
        {
            categoryPriorities.map((category) => (
                <table style={{width: '80%', marginBottom: '10px'}}>
                    <thead>
                        <tr>
                            <th colSpan={4}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Icon</th>
                            <th>Where to get</th>
                            <th>Usage</th>
                        </tr>
                        {
                            categorizedData[category].map((item) => (
                                <tr>
                                    <td style={{width: '30%'}}>{item.name}</td>
                                    <td style={{width: '10%'}}>{getItemIcon(item.id)}</td>
                                    <td style={{width: '30%'}}>{item.description1}</td>
                                    <td style={{width: '30%'}}>{item.description2}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            ))
        }
    </>
}

export default Basic;