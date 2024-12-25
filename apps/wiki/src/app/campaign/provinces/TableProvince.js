import "../../../components/table/Table.css";

import React from "react";

import resources from "@/src/shared-resources/data/resources";
import { getItemIcon } from "../../../shared-resources/utils/utils";
import SectionDivider from "@/src/components/section-divider/SectionDivider";

const TableProvince = (props) => {

    let baseColumns1 = ["Encounter"];
    let baseColumns2 = ["First Victory Bonus"];

    let priorities = {"soft": "Basic", "experiences": "XP", "research_materials": "Research Materials", "crests_colors": "Crests Colors", "crests_factions": "Crests Factions", "ascension_materials": "Ascension Materials"};

    let unsortedColumns = [...new Set(props.data.encounters.flatMap(encounter => encounter.rewards.map(reward => reward.resource)))];

    let maxOccurrences = {};

    props.data.encounters.forEach(encounter => {
        let resourceCounts = {};
        
        encounter.rewards.forEach(reward => {
            if (!resourceCounts[reward.resource]) {
                resourceCounts[reward.resource] = 0;
            }
            resourceCounts[reward.resource] += 1;
        });

        for (const [resource, count] of Object.entries(resourceCounts)) {
            if (!maxOccurrences[resource] || count > maxOccurrences[resource]) {
                maxOccurrences[resource] = count;
            }
        }
    });

    const groupedColumns = unsortedColumns.reduce((acc, column) => {
        const resource = resources.find(resource => resource.id === column);
        const category = resource ? resource.category : "uncategorized";
    
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(column);
    
        return acc;
    }, {});
    
    const groupedColumnsArray = Object.keys(groupedColumns).map(category => ({
        category,
        columns: groupedColumns[category]
    }));

    groupedColumnsArray.sort((a, b) => {
        const priorityA = Object.keys(priorities).indexOf(a.category);
        const priorityB = Object.keys(priorities).indexOf(b.category);
    
        if (priorityA === -1) return 1;
        if (priorityB === -1) return -1;
    
        return priorityA - priorityB;
    });

    const getSumOfOccurrencesAndAdjust = (columns) => {
        const totalOccurrences = columns.reduce((sum, column) => {
            return sum + (maxOccurrences[column] || 0);
        }, 0);
    
        return totalOccurrences - columns.length;
    }

    const getRewardAmount = (encounter, resource, index) => {
        const matchingRewards = encounter.rewards.filter(reward => reward.resource === resource);
        return matchingRewards[index]?.amount;
    };

    const getRewardPercentage = (encounter, resource, index) => {
        const matchingRewards = encounter.rewards.filter(reward => reward.resource === resource);
        return matchingRewards[index]?.percentage;
    };

    let COLUMNS = [...baseColumns1, ...groupedColumnsArray, ...baseColumns2];
    
    const isBaseColumn = (column) => {
        return baseColumns1.includes(column) || baseColumns2.includes(column);
    }

    return (
        <div style={{ overflowX: 'auto' }} className="responsive-table-container">
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        {
                            COLUMNS.map((oneColumn) => (
                                isBaseColumn(oneColumn) ?
                                <th rowSpan={2} style={{ width: '25%' }}>
                                    {oneColumn}
                                </th> :
                                <th colSpan={oneColumn.columns.length + getSumOfOccurrencesAndAdjust(oneColumn.columns)}>
                                    {priorities[oneColumn.category]}
                                </th>
                            ))                                   
                        }
                    </tr>
                    <tr>
                        {
                            COLUMNS.map((oneColumn) => (
                                !isBaseColumn(oneColumn) &&
                                oneColumn.columns.map((column) => (
                                    <th colSpan={maxOccurrences[column]}>
                                        {getItemIcon(column)}
                                    </th>
                                ))
                            ))                                   
                        }
                    </tr>
                </thead>
                <tbody>
                    {props.data.encounters.map((encounter, index) => (
                        <React.Fragment key={index}>
                        <tr style={{ borderTop: '2px solid #e1cda4', borderBottom: '2px dotted #e1cda4'}}>
                            {
                                COLUMNS.map((oneColumn) => (
                                    isBaseColumn(oneColumn) ?
                                        baseColumns2.includes(oneColumn) ?
                                        <td rowSpan={2}>{encounter.firstVictoryBonus.map((reward) => <div style={{ display: 'inline-flex', marginRight: '5px'}}>{reward.amount}&nbsp;{getItemIcon(reward.resource)}</div>)}</td> :
                                        <td rowSpan={2}>
                                                <div style={{backgroundImage: `url(${encounter.special ? "/campaign/provinces/common_map_encounter_xp.webp" : "/campaign/provinces/common_map_encounter.webp"})`, width: '30px', height: '30px', display: 'flex', justifyContent: 'center', margin: '0px auto', color: 'white', fontWeight: 'bold', textShadow: 'rgb(0,0,0) 1px 1px 1px', zIndex: '2', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative'}}>
                                                    <p style={{marginTop: '3px', marginRight: `${encounter.special ? '8px' : '10px'}`, alignSelf: 'center', fontSize: '13px'}}>
                                                        {encounter.id}
                                                    </p>
                                                </div>
                                        </td> :
                                    oneColumn.columns.map((column) => {
                                        const occurrences = maxOccurrences[column];
                                        return (
                                            Array.from({ length: occurrences }).map((_, index) => (
                                                <td key={`${column}_${index}`}>
                                                    {getRewardAmount(encounter, column, index)}
                                                </td>
                                            ))
                                        )
                                    })
                                ))
                            }
                        </tr>
                        <tr>
                            {
                                COLUMNS.map((oneColumn) => (
                                    isBaseColumn(oneColumn) ?
                                    null :
                                    oneColumn.columns.map((column) => {
                                        const occurrences = maxOccurrences[column];
                                        return (
                                            Array.from({ length: occurrences }).map((_, index) => (
                                                getRewardPercentage(encounter, column, index) ?
                                                <td style={{ fontSize: '11px', color: '#916a17', borderTop: 'none !important' }}>{getRewardPercentage(encounter, column, index)}%</td> :
                                                <td></td>
                                            ))
                                        )
                                    })
                                ))
                            }
                        </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );    
}

export default TableProvince;
