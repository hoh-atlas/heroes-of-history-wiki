import "./Milestones.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import { getItemIcon, displayRewards } from "../../../shared-resources/utils/utils";

import allLeaderboards from "../data";
import leaderboardsData from "../_data/leaderboards";

const Milestones = (props) => {
  
    const getLeaderboard = () => {
        return allLeaderboards.find(oneLeaderboards => oneLeaderboards.id == props.selectedLeaderboard);
    }

    const leaderboard = getLeaderboard();
    const leaderboardData = leaderboardsData.find(leaderboardData => leaderboardData.id === leaderboard.codeName);

    const milestonesComponent = leaderboardData.components.find(component => component["@type"] === "type.googleapis.com/RewardLaneEventComponentDTO");
    const rewards = Object.fromEntries(
        Object.entries(milestonesComponent.rewards)
            .sort(([keyA], [keyB]) => parseInt(keyA) - parseInt(keyB))
    );

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
  
    return (
        <>
            <Prologue imageSrc={"/leaderboards/intro/icon_ranking_points.webp"} alt={"Milestones"} maxHeight={"65px"} >
                The list of all rewards from the Leaderboard milestones
            </Prologue>

            <SectionDivider />

            <H1 center={true}>Milestones</H1>

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <small style={{ fontSize: '11px', color: '#916a17' }}>
                    <i>Note: These rewards vary depending on your current era. Be sure to set your era on the website using the dropdown menu in the navigation bar, to see the accurate data for your current in-game progress.</i>
                </small>
            </div>

            <div style={{ overflowX: 'auto', marginTop: '20px' }} className="responsive-table-container">
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '5%' }}>
                                #
                            </th>
                            <th>
                                Trophies {getItemIcon("icon_ranking_points", "20px")}
                            </th>
                            <th>
                                Rewards
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.entries(rewards).map(([trophies, rewardData], index) => {
                                return (
                                    <tr key={trophies}>
                                        <td>{index + 1}</td>
                                        <td>{trophies} </td>
                                        <td>
                                            {displayRewards(rewardData)}
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
  };
  
  export default Milestones;