import "./Intro.css";
import "../../../../components/table/Table.css";

import { useState } from "react";
import { allHeroes, heroClassIcons, unitIcons, backdrops, heroClassNames, unitNames, colorIcons, colorNames, positionNames, damageTypeNames, tacticalTypeNames } from "../../data";
import levelsExperiences from "../../_data/levelsExperiences";
import ascensions from "../../_data/ascensions";
import abilityDescriptions from "../../_data/abilityDescriptions";
import abilities from "../../_data/abilities";
import layoutHeroes from "../../sectionsDefinition";
import Image from "@/src/components/image/Image";
import H1 from "@/src/components/h1/H1";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import { getItemIcon } from "@/src/shared-resources/utils/utils";

const Intro = (props) => {

    const heroId = props.heroId;
    
    const [checkedRows, setCheckedRows] = useState([]);
    const [totalXp, setTotalXp] = useState(0);
    const [totalFood, setTotalFood] = useState(0);
    const [lastCheckedRowIndex, setLastCheckedRowIndex] = useState(null);

    const handleCheckboxChange = (xp, foodCost, rowIndex, isChecked) => {
        const rowIndexes = levelsExperiences
            .flatMap((experience, index) => {
                const starLevel = `hero_progression_cost.Cost_Star_${stars}`;
                if (experience.definitionId === starLevel) {
                    const currentCost = experience.levelUpCosts;
                    return Object.keys(currentCost).map((level, levelIndex) => `${index}-${levelIndex}`);
                }
                return [];
            });
    
        if (isChecked) {
            const newCheckedRows = [...checkedRows, rowIndex].sort((a, b) => rowIndexes.indexOf(a) - rowIndexes.indexOf(b));
            const firstIndex = rowIndexes.indexOf(newCheckedRows[0]);
            const lastIndex = rowIndexes.indexOf(newCheckedRows[newCheckedRows.length - 1]);
    
            const rangeToCheck = rowIndexes.slice(firstIndex, lastIndex + 1);
    
            const totalValues = rangeToCheck.reduce(
                (totals, index) => {
                    const [expIndex, levelIndex] = index.split('-').map(Number);
                    const cost = levelsExperiences[expIndex].levelUpCosts[Object.keys(levelsExperiences[expIndex].levelUpCosts)[levelIndex]];
                    return {
                        xp: totals.xp + cost.xp,
                        food: totals.food + cost.xp * cost.costPerXp,
                    };
                },
                { xp: 0, food: 0 }
            );
    
            setCheckedRows(rangeToCheck);
            setTotalXp(totalValues.xp);
            setTotalFood(totalValues.food);
            setLastCheckedRowIndex(rowIndex);
        } else {
            const indexOfUncheckedRow = rowIndexes.indexOf(rowIndex);
            const rowsToKeep = checkedRows.filter((index) => rowIndexes.indexOf(index) < indexOfUncheckedRow);
    
            const totalValues = rowsToKeep.reduce(
                (totals, index) => {
                    const [expIndex, levelIndex] = index.split('-').map(Number);
                    const cost = levelsExperiences[expIndex].levelUpCosts[Object.keys(levelsExperiences[expIndex].levelUpCosts)[levelIndex]];
                    return {
                        xp: totals.xp + cost.xp,
                        food: totals.food + cost.xp * cost.costPerXp,
                    };
                },
                { xp: 0, food: 0 }
            );
    
            setCheckedRows(rowsToKeep);
            setTotalXp(totalValues.xp);
            setTotalFood(totalValues.food);
            setLastCheckedRowIndex(rowsToKeep[rowsToKeep.length - 1] || null);
        }
    };
    
    
    
    const hero = allHeroes.find( (oneHero) => {
        return oneHero.id == heroId;
    })

    if (hero === undefined) {
        return <div>
            <a href={`/heroes`}>Back to All Heroes</a>
            <p>Hero not found</p>
        </div>
    }

    const {id, name, codeName, image, icon, backdrop, stars, heroClass, unit, color, abilityIcon, ascension, abilityName, abilityDescription, ability, position, damageType, tacticalType} = hero;

    const currentIndex = allHeroes.findIndex(item => item.id === id);
    const leftHero = currentIndex > 0 ? allHeroes[currentIndex - 1] : null;
    const rightHero = currentIndex < allHeroes.length - 1 ? allHeroes[currentIndex + 1] : null;

    const generateAbilityText = (ability, abilityDescriptions) => {
        const match = ability.id.match(/_([0-9]+)/);
        let abilityLevel;
        if (match) {
            abilityLevel = parseInt(match[1], 10);
        } else {
            console.log("No matching ability id found.");
            return null;
        }
    
        const originalAbilityDescription = abilityDescriptions.find(item => item.key.includes(ability.descriptionLocaKey));
        if (!originalAbilityDescription) {
            console.log("No matching ability description found.");
            return null;
        }
    
        let abilityDescriptionCopy = originalAbilityDescription.values[0];
        abilityDescriptionCopy = abilityDescriptionCopy.replace(/<style[^>]*>[^<]*<\/style>/, '<style></style>');
    
        const parametersArray = Object.entries(ability.descriptionParameters).map(([key, { value, type }]) => {
            let realValue = null;
            if (type === "percentage") {
                realValue = (value * 100).toFixed(1);
                if (realValue.endsWith('.0')) {
                    realValue = realValue.slice(0, -2);
                }
                realValue += "%";
            } else if (type === "duration") {
                realValue = `${value}s`;
            } else {
                realValue = value;
            }
            abilityDescriptionCopy = abilityDescriptionCopy.replace(`{${key}}`, `<b>${realValue}</b>`);
        });
    
        return {
            level: abilityLevel,
            description: abilityDescriptionCopy
        };
    };

    let abilityLevels = [];

    const renderAbilityLevels = abilities
        .filter(ability => ability.id.includes(codeName))
        .sort((a, b) => {
            const levelA = parseInt(a.id.match(/_([0-9]+)/)?.[1], 10);
            const levelB = parseInt(b.id.match(/_([0-9]+)/)?.[1], 10);
            return levelA - levelB;
        })
        .map((ability, index) => {
            const abilityText = generateAbilityText(ability, abilityDescriptions);
            if (!abilityText) return null;

            abilityLevels.push(abilityText);

            return (
                <tr key={index}>
                    <td>{abilityText.level}</td>
                    <td colSpan={4}>
                        <span dangerouslySetInnerHTML={{ __html: abilityText.description }} />
                    </td>
                </tr>
            );
        });

    const firstAbilityDescription = abilityLevels[0]?.description || '';

    return <div>
        <table style={{ width: '70%', marginBottom: '20px' }}>
            <thead>
                <tr>
                    <th>Previous</th>
                    <th></th>
                    <th>Next</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{width: '10%', maxWidth: '10%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                        {leftHero && <a href={`/heroes/${leftHero.id}`} className="text-link"><Image src={leftHero.icon} maxWidth={'70px'}/>{leftHero.name}</a>}
                    </td>
                    <td
                        style={{
                            width: '80%',
                            backgroundImage: `url(${backdrops[backdrop]})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                    </td>
                    <td style={{width: '10%', maxWidth: '10%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                        {rightHero && <a href={`/heroes/${rightHero.id}`} className="text-link"><Image src={rightHero.icon} maxWidth={'70px'}/>{rightHero.name}</a>}
                    </td>
                </tr>
            </tbody>
        </table>
        <SectionDivider></SectionDivider>
        <H1 center>{name}</H1>
        <Image src={icon} maxWidth={'100px'} marginTop={'10px'}/>
        <div className="scroll">
            <table style={{ width: '90%', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th colSpan={5}>General Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%'}} rowSpan="7">
                            <Image src={image} maxHeight={"350px"} />
                        </td>
                    </tr>
                    <tr>
                        <th style={{ width: '17.5%', height: '20px', lineHeight: '15px' }}>Hero Class</th>
                        <th style={{ width: '17.5%', height: '15px', lineHeight: '15px' }}>Unit Type</th>
                        <th style={{ width: '17.5%', height: '15px', lineHeight: '15px' }}>Color</th>
                        <th style={{ width: '17.5%', height: '15px', lineHeight: '15px' }}>Rarity</th>
                    </tr>
                    <tr>
                        <td style={{ width: '17.5%', height: '120px'}}>
                            <Image src={heroClassIcons[heroClass]} maxHeight={'50px'}/>
                            {heroClassNames[heroClass]}
                        </td>
                        <td style={{ width: '17.5%', height: '120px'}}>
                            <Image src={unitIcons[unit]} maxHeight={'50px'}/>
                            {unitNames[unit]}
                        </td>
                        <td style={{ width: '17.5%', height: '120px'}}>
                        <Image src={colorIcons[color]} maxHeight={'50px'}/>
                            {colorNames[color]}
                        </td>
                        <td style={{ width: '17.5%', height: '120px'}}>
                            {[...Array(stars)].map( () => (
                                <>
                                    <Image src={"/heroes/intro/icon_star.webp"} inline={true} maxWidth={'30px'}/>
                                    &nbsp;
                                </>
                            ))}
                            <br/>
                            {stars === 5 ? "Legendary" : stars === 4 ? "Epic" : stars === 3 ? "Rare" : stars === 2 ? "Uncommon" : stars === 1 ? "Common" : "No Stars"}
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={4} style={{ width: '23%', height: '20px', lineHeight: '15px' }}>
                            Ability: {abilityName}
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <Image src={abilityIcon} maxWidth={'100px'}/>
                        </td>
                        <td colSpan={3}>
                            <span dangerouslySetInnerHTML={{ __html: firstAbilityDescription }} />
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={1} style={{ width: '23%', height: '20px', lineHeight: '15px' }}>
                            Position
                        </th>
                        <th colSpan={1} style={{ width: '23%', height: '20px', lineHeight: '15px' }}>
                            Attack Type
                        </th>
                        <th colSpan={2} style={{ width: '23%', height: '20px', lineHeight: '15px' }}>
                            Tactical Type
                        </th>
                    </tr>
                    <tr>
                        <td colSpan={1} style={{ width: '23%', height: '20px', lineHeight: '15px' }}>
                            {positionNames[position]}
                        </td>
                        <td colSpan={1} style={{ width: '23%', height: '20px', lineHeight: '15px' }}>
                            {damageType.map(type => damageTypeNames[type]).join(', ')}
                        </td>
                        <td colSpan={2} style={{ width: '23%', height: '20px', lineHeight: '15px' }}>
                            {tacticalType.map(type => tacticalTypeNames[type]).join(', ')}
                        </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colSpan={5}>Ascension</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Level</th>
                        <th colSpan={4}>Required Materials</th>
                    </tr>
                    {
                        ascensions && ascensions.map((ascension, index) => {
                            const ascensionStarLevel = `hero_progression_ascension_cost.${colorNames[color]}_${heroClassNames[heroClass]}_Star_${stars}`;

                            if (ascension.definitionId === ascensionStarLevel) {
                                const currentAscensionCosts = ascension.ascensionCosts;

                                return Object.entries(currentAscensionCosts).map(([level, cost], costIndex) => {
                                    return (
                                        <tr key={`${index}-${costIndex}`}>
                                            <td>{(parseInt(level)+1)*10}&nbsp;&gt;&nbsp;{(parseInt(level)+1)*10 + 10}</td>
                                            <td colSpan={4}>
                                                {cost.costs.map((resource, resIndex) => (
                                                    <span key={resIndex}>
                                                        {Math.abs(resource.amount)}x {getItemIcon(resource.definitionId)}
                                                        {resIndex < cost.costs.length - 1 && "  "}
                                                    </span>
                                                ))}
                                            </td>
                                        </tr>
                                    );
                                });
                            }
                            return null;
                        })
                    }
                </tbody>
                <thead>
                    <tr>
                        <th colSpan={5}>Ability: {abilityName}</th>
                    </tr>
                </thead>
                <tbody>{renderAbilityLevels}</tbody>
                <thead>
                    <tr>
                        <th colSpan={5}>Upgrade Costs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Level</th>
                        <th colSpan={3}>Costs</th>
                        <th style={{ whiteSpace: 'nowrap' }}>Sum</th>
                    </tr>
                    {levelsExperiences &&
                        levelsExperiences.map((experience, index) => {
                            const starLevel = `hero_progression_cost.Cost_Star_${stars}`;

                            if (experience.definitionId === starLevel) {
                                const currentCost = experience.levelUpCosts;

                                return Object.entries(currentCost).map(([level, cost], levelIndex) => {
                                    const foodCost = cost.xp * cost.costPerXp;
                                    const rowIndex = `${index}-${levelIndex}`;
                                    const isChecked = checkedRows.includes(rowIndex);

                                    return (
                                        <>
                                            <tr key={`${index}-${levelIndex}`}>
                                                <td>{level}</td>
                                                <td colSpan={3}>
                                                    {cost.xp} {getItemIcon('xp_hero')}, {foodCost.toFixed(0)}{' '}
                                                    {getItemIcon('food')}
                                                </td>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        onChange={(e) =>
                                                            handleCheckboxChange(
                                                                cost.xp,
                                                                foodCost,
                                                                rowIndex,
                                                                e.target.checked
                                                            )
                                                        }
                                                    />
                                                </td>
                                            </tr>

                                            {isChecked && rowIndex === lastCheckedRowIndex && (
                                                <tr key={`total-${rowIndex}`}>
                                                    <td colSpan={4}></td>
                                                    <td
                                                        style={{
                                                            fontSize: '11px',
                                                            color: '#916a17',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <span>Total:</span>
                                                        <span>{totalXp} {getItemIcon('xp_hero')}</span>
                                                        <span>{totalFood.toFixed(0)} {getItemIcon('food')}</span>
                                                    </td>
                                                </tr>
                                            )}
                                        </>
                                    );
                                });
                            }
                            return null;
                        })}
                </tbody>
            </table>
        </div>
    </div>
}

export default Intro;