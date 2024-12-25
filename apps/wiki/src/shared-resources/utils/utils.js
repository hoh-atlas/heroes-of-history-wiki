import resources from "../data/resources";
import Icon from "@/src/components/icon/Icon";
import { customizations } from "../data/customizations";
import chests from "../data/chests";
import CustomizationPreview from "@/src/components/customization/CustomizationPreview";
import ChestPreview from "@/src/components/chest/ChestPreview";
import _customizations from "@/src/app/events/_data/_customizations";
import dynamicDefinitions from "../data/dynamicDefinitions";
import dropdownItems from "@/src/components/shared/navbar/dropdownItems";
import selectionKits from "../data/selectionKits";
import SelectionKitPreview from "@/src/components/selection-kit/SelectionKitPreview";

export const leftJoinArrays = (left, right) => {
    const rightMap = right.reduce((map, oneRight) => {
        map[oneRight.id] = oneRight;
        return map;
    }, {});

    const joined = left.map(oneLeft => ({
        ...oneLeft,
        ...rightMap[oneLeft.id]
    }));

    return joined;
}

export const getItemIcon = (id, maxHeight) => {
    const foundResource = resources.find(elem => elem.id === id);
    if (foundResource) {
        return <Icon resource={foundResource} maxHeight={maxHeight}/>
    }
    
    const foundCustomization = customizations.find(elem => elem.id === id);
    if (foundCustomization) {
        return <CustomizationPreview customization={foundCustomization}/>
    }

    const foundChest = chests.find(elem => elem.id === id);
    if (foundChest) {
        return <ChestPreview chest={foundChest}/>
    }

    const foundSelectionKit = selectionKits.find(elem => elem.id === id);
    if (foundSelectionKit)
        return <SelectionKitPreview selectionKit={foundSelectionKit} />
}

export const getItemData = (id) => {
    const foundResource = resources.find(elem => elem.id === id);
    if (foundResource) {
        return foundResource;
    }
    
    const foundCustomization = _customizations.find(elem => elem.id === id);
    if (foundCustomization) {
        return foundCustomization;
    }

    const foundChest = chests.find(elem => elem.id === id);
    if (foundChest) {
        return foundChest;
    }

    if (id.includes("Dac_")) {
        // This code is receiving the elem.when according to preset era. If the DAC has now such era, then it is looking for the first previous one.
        let presetEra = getFromLocalStorage("preset_era");
        let availableEras = dynamicDefinitions
            .find(elem => elem.id === id)
            .mapping[0]
            .values.map(value => value.when);
        const orderedEras = dropdownItems.map(item => item.value);
        let presetEraIndex = orderedEras.indexOf(presetEra);
        let effectiveEra = availableEras.includes(presetEra)
            ? presetEra
            : (() => {
                for (let i = presetEraIndex - 1; i >= 0; i--) {
                    if (availableEras.includes(orderedEras[i])) {
                        return orderedEras[i];
                    }
                }
                return orderedEras.find(era => availableEras.includes(era));
            })();
        let foundDynamicDefinition = dynamicDefinitions
            .find(elem => elem.id === id)
            .mapping[0]
            .values.find(elem => elem.when === effectiveEra).then;
        // ---

        let dynamicRewards = flattenRewards(foundDynamicDefinition.rewards);
        if (dynamicRewards) {
            dynamicRewards.rewards = dynamicRewards.rewards.map(reward => {
                const resourceName = resources.find(elem => elem.id === reward.resource).name;
                return {
                    ...reward,
                    name: resourceName
                };
            });
            const allEraGoods = Object.values(eraGoods).flat();
            if (dynamicRewards.chances.length === 0) {
                dynamicRewards["chances"] = undefined;
            }
            if (dynamicRewards.rewards.length === 1) {
                dynamicRewards.name = getItemData(dynamicRewards.rewards[0].resource).name;
            } else if (dynamicRewards.rewards.every(reward => allEraGoods.includes(reward.resource))) {
                dynamicRewards.name = "Goods";
            } else {
                dynamicRewards.name = "Mystery Chest";
            }
            return dynamicRewards;
        }
    }
}

export const calculateDaysBetween = (startDate, endDate) => {
    const cleanStartDate = startDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
    const cleanEndDate = endDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
  
    const start = new Date(cleanStartDate);
    const end = new Date(cleanEndDate);
  
    const timeDifference = end - start;
  
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
};

function flattenRewards(rewards, result = {rewards: [], chances: []}, chances = []) {
    rewards.forEach(reward => {
        if (reward["@type"] === "type.googleapis.com/ResourceRewardDTO") {
            result.rewards.push({
                resource: reward.resource,
                amount: reward.amount,
                
            });
        }
        if (reward["@type"] === "type.googleapis.com/GoodRewardDTO") {
            result.rewards.push({
                resource: eraGoods[getFromLocalStorage("preset_era")][reward.number-1],
                amount: reward.amount,
                
            });
        }
        if (reward["chances"]) {
            const totalChances = reward["chances"].reduce((sum, chance) => sum + chance, 0);
            const percentageChances = reward["chances"].map(chance => ((chance / totalChances) * 100).toFixed(0));
            result.chances = percentageChances;
        }
        
        if (reward.rewards) {
            flattenRewards(reward.rewards, result, chances);
        }
    });
    return result;
}

export const formatDuration = (durationString) => {
    const duration = parseInt(durationString.replace('s', ''), 10);
    if (duration < 60) {
        return `${duration}s`;
    } else if (duration < 3600) {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}m${seconds ? seconds : ''}${seconds ? 's' : ''}`;
    } else if (duration < 86400) {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = duration % 60;
        return `${hours}h${minutes ? `${minutes}m` : ''}${seconds ? `${seconds}s` : ''}`;
    } else {
        const days = Math.floor(duration / 86400);
        const hours = Math.floor((duration % 86400) / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = duration % 60;
        return `${days}d${hours ? `${hours}h` : ''}${minutes ? `${minutes}m` : ''}${seconds ? `${seconds}s` : ''}`;
    }
};

const eraGoods = {
    "StoneAge": ["alabaster_idol","bronze_bracelet","wool"],
    "BronzeAge": ["alabaster_idol","bronze_bracelet","wool"],
    "MinoanEra": ["marble_bust","iron_pendant","linen_shirt"],
    "ClassicGreece": ["column","silver_ring","toga"],
    "EarlyRome": ["stone_tablet","gold_laurel","tunic"],
    "RomanEmpire": ["mosaic","goblet","cape"],
    "ByzantineEra": ["planks","parchment","pepper"],
    "AgeOfTheFranks": ["cartwheel","ink","salt"],
    "FeudalAge": ["barrel","manuscript","herbs"],
    "IberianEra": ["door","wax_seal","saffron"],
    "KingdomOfSicily": ["wardrobe","tome","chili"],
}

export const getFromLocalStorage = (string) => {
    if (typeof window !== 'undefined') {
        if (string === "preset_era") {
            if (!localStorage.getItem(string)) {
                localStorage.setItem(string, "RomanEmpire");
            }
            return localStorage.getItem(string);
        }
    }
}

const extractRewards = (rewardsArray) => {
    const extractedRewards = [];
    rewardsArray.forEach((reward) => {
        if (reward.resource) {
            extractedRewards.push({ type: "resource", value: reward.resource });
        } else if (reward.dynamicDefinitionId) {
            extractedRewards.push({ type: "dynamicDefinitionId", value: reward.dynamicDefinitionId });
        } else if (reward.selectionKit) {
            extractedRewards.push({ type: "selectionKit", value: reward.selectionKit});
        } else if (reward.rewards) {
            extractedRewards.push(...extractRewards(reward.rewards));
        }
    });
    return extractedRewards;
};

export const displayRewards = (arrayOfRewards) => {
    return (
        <>
            {arrayOfRewards.rewards.map((reward, rewardIndex) => {
                const nestedRewards = extractRewards([reward]);
                return (
                    <div key={rewardIndex}>
                        {nestedRewards.map((nestedReward, nestedIndex) => (
                            <div key={nestedIndex}>
                                {nestedReward.type === "resource" ? (
                                    <span className="resource-span">{reward.amount}x {getItemIcon(nestedReward.value)}</span>
                                ) : nestedReward.type === "dynamicDefinitionId" ? (
                                    <>
                                        {getItemData(nestedReward.value).rewards.map((nestedResourceReward, nestedRewardIndex) => (
                                            <span className="resource-span" key={nestedRewardIndex}>
                                                {nestedResourceReward.amount}x {getItemIcon(nestedResourceReward.resource)}
                                            </span>
                                        ))}
                                    </>
                                ) : nestedReward.type === "selectionKit" ? (
                                        <span className="resource-span">{reward.amount}x {getItemIcon(nestedReward.value)}</span>
                                ) : (
                                    <></>
                                )}
                            </div>
                        ))}
                    </div>
                );
            })}
        </>
    );
};