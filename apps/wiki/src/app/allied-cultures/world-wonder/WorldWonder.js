import "./WorldWonder.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import { getItemIcon, getItemData } from "../../../shared-resources/utils/utils";
import H1 from "@/src/components/h1/H1";

import allAlliedCultures from "../data";
import wondersChests from "../_data/wondersChests";
import wondersBoosts from "../_data/wondersBoosts";
import wondersRewards from "../_data/wondersRewards";

const WorldWonder = (props) => {

    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const wonderChests = wondersChests.find(wonder => wonder.id === getAlliedCulture().wonder.id);
    const boosts = wonderChests.components.filter(component => component["@type"] === "type.googleapis.com/BoostResourceComponentDTO");
    const boostsComponents = boosts.map(boost => wondersBoosts.find(wonderBoost => wonderBoost.id === boost.dynamicModifiedFloatDefinitionId));
    const rewardsComponent = wondersRewards.find(rewardComponent => rewardComponent.id.includes("event.EventCity_") && rewardComponent.id.includes(getAlliedCulture().type));
    const wonder = getAlliedCulture().wonder;

    const requirementsByLevels = wonderChests.components[0].dynamicCosts.byWonderLevel;
    let chestsSum = 0;
    let boostsPerLevel = [];
    boostsComponents.map((boostComponent, index) => {
        let object = {};
        let component = [];
        boostComponent.mapping.values.map((level) => {
            component.push(level.then.value);
        });
        object['levels'] = component;
        object['resource'] = boosts[index].resourceDefinitionId;
        boostsPerLevel.push(object);
    });
    const rewards = rewardsComponent.components.find((component) => component["@type"].includes("RewardLaneEventComponentDTO"))?.rewards;

    const renderRewards = (rewards) => {
        return rewards.map((reward, index) => (
            <span key={index}>
                {reward.amount || reward.regular}
                {(reward.amount || reward.regular) && "x"}&nbsp;
                {(reward.resource && getItemIcon(reward.resource)) ||
                    (reward.city && reward.subType && getItemIcon(`${reward.city}_${reward.subType}`)) ||
                    (reward.city && !reward.subType && getItemIcon(reward.city)) ||
                    (reward.dynamicDefinitionId && 
                        getItemData(reward.dynamicDefinitionId).rewards.map(reward => (
                            <span className="resource-span">{reward.amount}x {getItemIcon(reward.resource)}</span>
                        ))
                    )}
    
                {reward.rewards && renderRewards(reward.rewards)}
            </span>
        ));
    };

    let costsSum = {};
  
    return (
      <>
          <Prologue imageSrc={"/allied-cultures/world-wonder/worldwonder_icon.webp"} alt={"Event"} maxHeight={"65px"} >
              The World Wonder defines the main progress of the allied culture. Produce the necessary resources, upgrade the Wonder, collect rewards, and compete with other players in leagues.<br/>
              Each level of the World Wonder increases the production of one of the allied culture's resources, accelerating your progress.
          </Prologue>
          <SectionDivider />
          <H1 center={true}>{wonder.name}</H1>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", marginBottom: "15px" }}>
              <img src={wonder?.image} style={{ maxWidth: "300px" }} />
          </div>
          <div className="scroll">
            <table style={{ minWidth: '90%' }}>
                <thead>
                    <tr>
                        <th style={{ width: '5%' }}>
                            Level
                        </th>
                        <th style={{ width: '18%' }}>
                            Costs
                        </th>
                        <th style={{ width: '18%' }}>
                            Costs Sum
                        </th>
                        <th style={{ width: '7%' }}>
                            Chests
                        </th>
                        <th style={{ width: '7%' }}>
                            Chests Sum
                        </th>
                        <th style={{ width: '15%' }}>
                            Boost
                        </th>
                        <th style={{ width: '20%' }}>
                            Rewards
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from({ length: 51 }, (_, index) => {

                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td>
                                    {
                                        index !== 0 && requirementsByLevels[index-1] !== undefined && Object.entries(
                                            requirementsByLevels[index-1].crates.reduce((acc, crate) => {
                                                const { definitionId, amount } = crate.cost;
                                                const totalAmount = crate.crateAmount * amount;

                                                if (!acc[definitionId]) {
                                                    acc[definitionId] = 0;
                                                }
                                                acc[definitionId] += totalAmount;
                                                
                                                if (!costsSum[definitionId]) {
                                                    costsSum[definitionId] = 0;
                                                }
                                                costsSum[definitionId] += totalAmount;

                                                return acc;
                                            }, {})
                                        ).map(([definitionId, totalAmount]) => (
                                            <span key={definitionId} className="resource-span">
                                                {totalAmount} {getItemIcon(definitionId)}
                                            </span>
                                        ))
                                    }
                                    </td>
                                    <td>
                                        {
                                            Object.keys(costsSum).map((resourceId) => {
                                                return (
                                                    <span className="resource-span"><small>{costsSum[resourceId]}x {getItemIcon(resourceId, "16px")}</small></span>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            index !== 0 && requirementsByLevels[index - 1] !== undefined && (
                                                <span className="resource-span">
                                                    {
                                                        requirementsByLevels[index - 1].crates.reduce((totalCrates, crate) => {
                                                            chestsSum += crate.crateAmount;
                                                            return totalCrates + crate.crateAmount;
                                                        }, 0)
                                                    } {getItemIcon("icon_crate", "18px")}
                                                </span>
                                            )
                                        }
                                    </td>
                                    <td>
                                        <span className="resource-span">{chestsSum} {getItemIcon("icon_crate", "18px")}</span>
                                    </td>
                                    <td>
                                        {
                                            boostsPerLevel.map((boost) => (
                                                <span className="resource-span">
                                                    {boost.levels[index]}% {getItemIcon(boost.resource)}
                                                </span>
                                            ))
                                        }
                                    </td>
                                    <td>
                                    {
                                        rewards[index]?.rewards && renderRewards(rewards[index].rewards)
                                    }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
      </>
    );
}

export default WorldWonder;