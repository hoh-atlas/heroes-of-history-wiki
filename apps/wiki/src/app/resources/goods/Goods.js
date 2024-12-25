import "./Goods.css";

import resources from "@/src/shared-resources/data/resources";
import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import React from "react";
import { leftJoinArrays, getItemIcon } from "@/src/shared-resources/utils/utils";

const Goods = () => {

    const goodsAdditionalData = [
        {id: "alabaster_idol", workshop: "Stone Mansion", era: "Bronze Age"},
        {id: "bronze_bracelet", workshop: "Artisan", era: "Bronze Age"},
        {id: "wool", workshop: "Tailor", era: "Bronze Age"},
        {id: "marble_bust", workshop: "Stone Mansion", era: "Minoan Era"},
        {id: "iron_pendant", workshop: "Artisan", era: "Minoan Era"},
        {id: "linen_shirt", workshop: "Tailor", era: "Minoan Era"},
        {id: "column", workshop: "Stone Mansion", era: "Classical Greece"},
        {id: "silver_ring", workshop: "Artisan", era: "Classical Greece"},
        {id: "toga", workshop: "Tailor", era: "Classical Greece"},
        {id: "stone_tablet", workshop: "Stone Mansion", era: "Early Rome"},
        {id: "gold_laurel", workshop: "Artisan", era: "Early Rome"},
        {id: "tunic", workshop: "Tailor", era: "Early Rome"},
        {id: "mosaic", workshop: "Stone Mansion", era: "Roman Empire"},
        {id: "goblet", workshop: "Artisan", era: "Roman Empire"},
        {id: "cape", workshop: "Tailor", era: "Roman Empire"},
        {id: "planks", workshop: "Carpenter", era: "Byzantine Era"},
        {id: "parchment", workshop: "Scribe", era: "Byzantine Era"},
        {id: "pepper", workshop: "Spice Merchant", era: "Byzantine Era"},
        {id: "cartwheel", workshop: "Carpenter", era: "Age of the Franks"},
        {id: "ink", workshop: "Scribe", era: "Age of the Franks"},
        {id: "salt", workshop: "Spice Merchant", era: "Age of the Franks"},
        {id: "barrel", workshop: "Carpenter", era: "Feudal Age"},
        {id: "manuscript", workshop: "Scribe", era: "Feudal Age"},
        {id: "herbs", workshop: "Spice Merchant", era: "Feudal Age"},
        {id: "door", workshop: "Carpenter", era: "Iberian Era"},
        {id: "wax_seal", workshop: "Scribe", era: "Iberian Era"},
        {id: "saffron", workshop: "Spice Merchant", era: "Iberian Era"},
        {id: "wardrobe", workshop: "Carpenter", era: "Kingdom of Sicily"},
        {id: "tome", workshop: "Scribe", era: "Kingdom of Sicily"},
        {id: "chili", workshop: "Spice Merchant", era: "Kingdom of Sicily"},
    ]

    const goodsExpanded = leftJoinArrays(goodsAdditionalData, resources);

    const workshops = Array.from(new Set(goodsAdditionalData.map(item => item.workshop)));
    const numberOfWorkshopGroups = workshops.length / 3;

    const splitWorkshopsIntoGroups = (arr, groupSize) => {
        let groups = [];
        for (let i = 0; i < arr.length; i += groupSize) {
            groups.push(arr.slice(i, i + groupSize));
        }
        return groups;
    };

    const workshopGroups = splitWorkshopsIntoGroups(workshops, 3);

    const eraGroups = workshopGroups.map(group => {
        const eras = goodsAdditionalData
            .filter(item => group.includes(item.workshop))
            .map(item => item.era);
        return Array.from(new Set(eras));
    });

    return <>
        <Prologue imageSrc={"/resources/goods/icon-alabaster-idol.webp"} alt={"Provinces"} maxHeight={"65px"}>
            Goods are produced in workshops. In each era, starting with the Bronze Age, you unlock three workshops for your city, each producing a unique type of goods.
            Workshops require workers to produce goods. Goods are necessary to unlock technologies in research and upgrade buildings in your city.
        </Prologue>
        <SectionDivider/>
        <table style={{width: '70%'}}>
            {
                workshopGroups.map((group, indexGroup) =>(
                    <React.Fragment key={indexGroup}>
                        <thead>
                            <tr>
                                <th style={{width: '40%'}}></th>
                                {
                                    group.map((workshop) => (
                                        <th style={{width: '20%'}}>{workshop}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                eraGroups[indexGroup].map((era, indexEra) => (
                                    <tr>
                                        <th>{era}</th>
                                        {
                                            group.map((workshop, indexWorkshop) => (
                                                <td key={indexWorkshop}>
                                                    {goodsExpanded
                                                        .filter(item => item.workshop === workshop && item.era === era)
                                                        .map((item, indexItem) => (
                                                            <div key={indexItem}>{getItemIcon(item.id)} {item.name}</div>
                                                        ))
                                                    }
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </React.Fragment>
                ))
            }
            <thead>
                <tr>

                </tr>
            </thead>
        </table>
    </>
}

export default Goods;