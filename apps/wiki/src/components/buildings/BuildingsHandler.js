import { getItemIcon, formatDuration } from "../../shared-resources/utils/utils";
import Image from "../image/Image";
import { workersIds } from "@/src/app/allied-cultures/_data/workersIds";
import heroAbilityTrainings from "@/src/app/buildings/_data/heroAbilityTrainings";

const BuildingsHandler = (props) => {

    const buildingsData = props.buildingsData;
    const buildingsImages = props.buildingsImages;
    const previousBuildingsImages = props.previousBuildingsImages;
    const cityType = props.cityType;

    const getPreviousBuildingId = (buildingId, buildingName, previousBuildingsImages) => {
        const updatedId = buildingId.replace(/(\d+)$/, (match) => parseInt(match) - 1);
        const numericValue = parseInt(updatedId.match(/(\d+)$/)[1]);
        if (numericValue === 0) {
            if (!previousBuildingsImages) {
                return "NOTFOUND";
            }
            const buildingImages = previousBuildingsImages[buildingName];
            if (!buildingImages) {
                return "NOTFOUND";
            }
            return Object.keys(buildingImages)[Object.keys(buildingImages).length-1]
        } else {
            return updatedId;
        }
    };
    
    const flattenRewards = (rewards) => {
        return rewards.reduce((acc, reward) => {
          if (Array.isArray(reward.rewards) && reward.rewards.length > 0) {
            acc.push(...flattenRewards(reward.rewards));
          } else {
            acc.push(reward);
          }
          return acc;
        }, []);
      };

    return (
        <>
        {Object.keys(buildingsImages).map(buildingName => {
            let additionalColumns = 0;
            const testBuildingData = buildingsData.find((building) => building.id === Object.keys(buildingsImages[buildingName])[0]);
            let differentConstructionUpgradeComponents = new Set();
            Object.keys(buildingsImages[buildingName]).map((buildingId) => {
                const testPrevBuildingId = getPreviousBuildingId(buildingId, buildingName, previousBuildingsImages);
                const testPrevBuildingData = buildingsData.find((building) => building.id === testPrevBuildingId);
                const testConstructionComponent = testBuildingData?.components?.find(component => component["@type"].includes("ConstructionComponentDTO"));
                const testUpgradeComponent = testPrevBuildingData?.components?.find(component => component["@type"].includes("UpgradeComponentDTO"));
                if (testConstructionComponent) differentConstructionUpgradeComponents.add("ConstructionComponent");
                if (testUpgradeComponent) differentConstructionUpgradeComponents.add("UpgradeComponent");
            })
            if (differentConstructionUpgradeComponents.size > 1) additionalColumns += 1;
            const testProductionComponents = testBuildingData?.components?.find(component => component["@type"].includes("ProductionComponentDTO"));
            const isHeroBoostComponentPresent = testBuildingData.components.some(component => 
                component["@type"] === "type.googleapis.com/GameDesignReference" && 
                component.id.includes("hero_building_boost")
            );
            if (testProductionComponents || isHeroBoostComponentPresent) additionalColumns += 1;
            const testGrantWorkerComponent = testBuildingData?.components?.find(component => component["@type"].includes("GrantWorkerComponentDTO"));
            if (testGrantWorkerComponent) additionalColumns += 1;
            const testCultureComponent = testBuildingData?.components?.find(component => component["@type"].includes("CultureComponentDTO"));
            if (testCultureComponent) additionalColumns += 1;                
            return (
                <div key={buildingName} className="scroll">
                    <table style={{ width: '90%', marginTop: '10px' }}>
                        <thead>
                            <tr>
                                <th colSpan={5+additionalColumns}>
                                    {buildingName}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th style={{ width: '10%' }}>Image</th>
                            <th style={{ width: '5%' }}>Level</th>
                            <th style={{ width: '5%' }}>Size</th>
                            {differentConstructionUpgradeComponents.has("ConstructionComponent") && <th style={{ width: '17%' }}>Construction Costs</th>}
                            {differentConstructionUpgradeComponents.has("UpgradeComponent") && <th style={{ width: '17%' }}>Upgrade Costs</th>}
                            {(testProductionComponents || isHeroBoostComponentPresent) && <th style={{ width: '30%' }}>Production</th>}
                            {testGrantWorkerComponent && <th style={{ width: '10%' }}>Provided</th>}
                            {testCultureComponent && <th>Effect</th>}
                        </tr>
                        {
                            Object.keys(buildingsImages[buildingName]).map((buildingId) => {
                                const buildingData = buildingsData.find((building) => building.id === buildingId);
                                const prevBuildingId = getPreviousBuildingId(buildingId, buildingName, previousBuildingsImages);
                                const prevBuildingData = buildingsData.find((building) => building.id === prevBuildingId);
                                const constructionComponent = buildingData?.components?.find(component => component["@type"].includes("ConstructionComponentDTO"));
                                const upgradeComponent = prevBuildingData?.components?.find(component => component["@type"].includes("UpgradeComponentDTO"));
                                let constructionAmount = [];
                                constructionComponent && constructionComponent.start.costs.map((oneCost) => {
                                    constructionAmount.push(Math.abs(oneCost.amount));
                                })
                                if (constructionAmount.length === 0) {
                                    constructionAmount.push(0);
                                }
                                let constructionResource = [];
                                constructionComponent && constructionComponent.start.costs.map((oneCost) => {
                                    constructionResource.push(oneCost.definitionId);
                                })
                                if (constructionResource.length === 0) {
                                    constructionResource.push('');
                                }
                                const constructionTime = constructionComponent ? constructionComponent.duration : '';
                                const constructionWorkers = constructionComponent?.workersRequired?.amount || 0;
                                const constructionWorkersType = constructionComponent?.workersRequired?.type ? workersIds[cityType]?.[constructionComponent.workersRequired.type] : workersIds[cityType]?.['default'];
                                let upgradeAmount = [];
                                upgradeComponent && upgradeComponent.start.costs.map((oneCost) => {
                                    upgradeAmount.push(Math.abs(oneCost.amount));
                                })
                                if (upgradeAmount.length === 0) {
                                    upgradeAmount.push(0);
                                }
                                let upgradeResource = [];
                                upgradeComponent && upgradeComponent.start.costs.map((oneCost) => {
                                    upgradeResource.push(oneCost.definitionId);
                                })
                                if (upgradeResource.length === 0) {
                                    upgradeResource.push('');
                                }
                                const upgradeTime = upgradeComponent ? upgradeComponent.duration : '';
                                const upgradeWorkers = upgradeComponent?.workersRequired?.amount || 0;
                                const upgradeWorkersType = upgradeComponent?.workersRequired?.type ? workersIds[cityType]?.[upgradeComponent.workersRequired.type] : workersIds[cityType]?.['default'];
                                const productionComponents = buildingData?.components?.filter(component => component["@type"].includes("ProductionComponentDTO")) || [];
                                const grantWorkerComponent = buildingData?.components?.find(component => component["@type"].includes("GrantWorkerComponentDTO"));
                                const cultureComponent = buildingData?.components?.find(component => component["@type"].includes("CultureComponentDTO"));
                                let maxHappiness;
                                if (buildingData.happinessEffect && buildingData.happinessEffect.maxHappiness) {
                                    maxHappiness = buildingData.happinessEffect.maxHappiness;
                                }
                                let isHeroBoostComponentPresent = buildingData.components.some(component => 
                                    component["@type"] === "type.googleapis.com/GameDesignReference" && 
                                    component.id.includes("hero_building_boost")
                                );
                                if (isHeroBoostComponentPresent) {
                                    const heroAbilityTraining = heroAbilityTrainings.find(component => component.definitionId.includes(buildingId));
                                    if (heroAbilityTraining) {
                                        const heroAbilityTrainingComponent = {};
                                        heroAbilityTrainingComponent['duration'] = "3600s";
                                        heroAbilityTrainingComponent['finish'] = {};
                                        heroAbilityTrainingComponent['finish']['rewards'] = [];
                                        heroAbilityTrainingComponent['finish']['rewards'].push({"amount": heroAbilityTraining.amountPerHour, "resource": "mastery_point"});
                                        productionComponents.push(heroAbilityTrainingComponent);
                                    } else {
                                        isHeroBoostComponentPresent = false;
                                    }
                                }
                                
                                return (
                                    <>
                                        <tr key={buildingId}>
                                            <td rowSpan={2}><Image src={buildingsImages[buildingName][buildingId]}/></td>
                                            <td rowSpan={2}>{buildingData.level}</td>
                                            <td rowSpan={2}>{buildingData.width}x{buildingData.height}</td>
                                            {differentConstructionUpgradeComponents.has("ConstructionComponent") && <td rowSpan={1}>
                                                {
                                                    constructionComponent && (
                                                        <>
                                                          {
                                                            constructionAmount.map((amount, index) => (
                                                              <span key={index}>
                                                                <span>{amount}</span>
                                                                <span> </span>
                                                                <span>{getItemIcon(constructionResource[index])}</span>
                                                                {index < constructionAmount.length - 1 && " "}
                                                              </span>
                                                            ))
                                                          }
                                                        </>
                                                      )
                                                }
                                            </td>}
                                            {differentConstructionUpgradeComponents.has("UpgradeComponent") && <td rowSpan={1}>
                                                {
                                                    upgradeComponent && (
                                                        <>
                                                          {
                                                            upgradeAmount.map((amount, index) => (
                                                              <span key={index}>
                                                                <span>{amount}</span>
                                                                <span> </span>
                                                                <span>{getItemIcon(upgradeResource[index])}</span>
                                                                {index < upgradeAmount.length - 1 && " "}
                                                              </span>
                                                            ))
                                                          }
                                                        </>
                                                      )
                                                }
                                            </td>}
                                            {productionComponents && productionComponents.length > 0 && <td rowSpan={maxHappiness ? 1 : 2}>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        textAlign: 'center',
                                                        width: '100%',
                                                    }}
                                                >
                                                    {
                                                        productionComponents?.length > 0 && productionComponents[0]?.finish?.rewards[0]?.amount 
                                                        ? productionComponents.map((production, index) => (
                                                            <div
                                                                key={index}
                                                                style={{
                                                                    flex: 1,
                                                                }}
                                                            >
                                                                {production.finish.rewards[0].amount} {getItemIcon(production.finish.rewards[0].resource)} / {formatDuration(production.duration)}
                                                            </div>
                                                        )) 
                                                        : productionComponents.map((production, index) => (
                                                            <><div
                                                                key={index}
                                                                style={{
                                                                    flex: 1,
                                                                    borderRight: index < productionComponents.length - 1 ? '1px solid #ccc' : 'none',
                                                                    padding: '0 5px',
                                                                    margin: '0 5px',
                                                                }}
                                                            >
                                                                {flattenRewards(production.finish.rewards).map((reward, rewardIndex, flattenedRewards) => (
                                                                <span key={rewardIndex}>
                                                                    {reward.amount} {getItemIcon(reward.resource)}
                                                                    {rewardIndex < flattenedRewards.length - 1 && ' or '}
                                                                </span>
                                                                ))}
                                                            </div></>
                                                        ))                                                        
                                                    }
                                                </div>
                                            </td>}
                                            {grantWorkerComponent && <td rowSpan={2}>
                                                {grantWorkerComponent.amount} {getItemIcon(grantWorkerComponent.type ? workersIds[cityType][grantWorkerComponent.type] : workersIds[cityType]['default'])}
                                            </td>}
                                            {cultureComponent && <td rowSpan={2}>
                                                Range: {cultureComponent.range}, Value: {cultureComponent.points}
                                            </td>}
                                        </tr>
                                        <tr>
                                            {differentConstructionUpgradeComponents.has("ConstructionComponent") && <td rowSpan={1} style={{ borderTop: '2px solid #e1cda4', borderTop: '2px dotted #e1cda4'}}>
                                                {
                                                    constructionComponent && <>{formatDuration(constructionTime)} / {constructionWorkers} {getItemIcon(constructionWorkersType)}</>
                                                }
                                            </td>}
                                            {differentConstructionUpgradeComponents.has("UpgradeComponent") && <td rowSpan={1} style={{ borderTop: '2px solid #e1cda4', borderTop: '2px dotted #e1cda4'}}>
                                                {
                                                    upgradeComponent && <>{formatDuration(upgradeTime)} / {upgradeWorkers} {getItemIcon(upgradeWorkersType)}</>
                                                }
                                            </td>}
                                            {maxHappiness && 
                                                <td 
                                                    rowSpan={1} 
                                                    style={{ 
                                                        borderTop: '2px solid #e1cda4', 
                                                        borderTop: '2px dotted #e1cda4', 
                                                        whiteSpace: 'normal',
                                                        fontSize: '11px', 
                                                        color: '#916a17',
                                                    }}
                                                >
                                                    Boost requirements:<br/><span style={{ whiteSpace: 'nowrap', marginRight: '12px' }}>{0}&nbsp;{getItemIcon("culture_bonus", "16px")}</span>
                                                    <span style={{ whiteSpace: 'nowrap', marginRight: '12px' }}>{(maxHappiness / 3).toFixed(0)}&nbsp;{getItemIcon("culture_bonus", "16px")}</span>
                                                    <span style={{ whiteSpace: 'nowrap', marginRight: '12px' }}>{(maxHappiness / 3 * 2).toFixed(0)}&nbsp;{getItemIcon("culture_bonus", "16px")}</span>
                                                    <span style={{ whiteSpace: 'nowrap' }}>{maxHappiness}&nbsp;{getItemIcon("culture_bonus", "16px")}</span>
                                                </td>
                                            }
                                        </tr>
                                    </>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>
            );
        })}

      </>
    )
}

export default BuildingsHandler;