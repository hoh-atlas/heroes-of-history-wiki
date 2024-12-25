import "./Ranking.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import { displayRewards } from "../../../shared-resources/utils/utils";

import allLeaderboards from "../data";
import leaderboardsData from "../_data/leaderboards";

const Ranking = (props) => {
  
    const getLeaderboard = () => {
        return allLeaderboards.find(oneLeaderboards => oneLeaderboards.id == props.selectedLeaderboard);
    }

    const leaderboard = getLeaderboard();
    const leaderboardData = leaderboardsData.find(leaderboardData => leaderboardData.id === leaderboard.codeName);

    const rankingComponent = leaderboardData.components.find(component => component["@type"] === "type.googleapis.com/LeaderboardPlayerResourceEventComponentDTO");
    const rewards = rankingComponent.rankingRewards;
  
    return (
        <>
            <Prologue imageSrc={"/leaderboards/ranking/Ranking04.webp"} alt={"Ranking"} maxHeight={"65px"} >
                The list of all rewards from the Leaderboard ranking
            </Prologue>

            <SectionDivider />

            <H1 center={true}>Ranking</H1>

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
                                Position
                            </th>
                            <th>
                                Rewards
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.entries(rewards).map(([position, rewardData]) => {
                                return (
                                    <tr key={position}>
                                        <td>{position}</td>
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
  
  export default Ranking;