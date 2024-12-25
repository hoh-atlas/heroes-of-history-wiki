import "./Rewards.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import TextBlock from "@/src/components/textblock/TextBlock";
import H1 from "@/src/components/h1/H1";
import Image from "@/src/components/image/Image";
import { getItemIcon } from "../../../shared-resources/utils/utils";
import allSeasons from "../data";
import seasonsCheckpoints from "../_data/seasonsCheckpoints";

const Rewards = (props) => {

    const getSeason = () => {
        return allSeasons.find(oneSeason => oneSeason.id == props.selectedSeason);
    }

    const season = getSeason();

    return <>
        <Prologue imageSrc={"/seasons/rewards/icon_reward_season_pass.webp"} alt={"Seasons"} maxHeight={"65px"}>
            This is an overview of all rewards and their requirements of the season.
        </Prologue>

        <SectionDivider/>
        <TextBlock>

            <H1 center={true}>Rewards</H1>

            <div style={{ overflowX: 'auto', marginTop: '20px' }} className="responsive-table-container">
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '5%' }}>
                                #
                            </th>
                            <th>
                                Costs
                            </th>
                            <th>
                                Free Lane
                            </th>
                            <th>
                                Premium Lane
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th></th>
                            <td></td>
                            <td><Image src={"/seasons/rewards/icon_silver_ticket.webp"} maxHeight={'80px'}/></td>
                            <td><Image src={"/seasons/rewards/icon_golden_ticket.webp"} maxHeight={'80px'}/></td>
                        </tr>
                        {
                            season.rewards && season.rewards.map((oneReward) => (
                                <tr style={{ height: '70px' }}>
                                    <th>{oneReward.id}</th>
                                    <td>{oneReward.cost} {getItemIcon("seasonpass_progress")}</td>
                                    <td>{oneReward.free.amount}x {getItemIcon(oneReward.free.resource)}</td>
                                    <td>{oneReward.premium.amount}x {getItemIcon(oneReward.premium.resource)}</td>
                                </tr>
                            ))
                        }
                        {
                            season.codeName && seasonsCheckpoints[season.codeName][0].map((checkpoint) => (
                                <tr style={{ height: '70px'}}>
                                    <th>{checkpoint.order}</th>
                                    <td>{checkpoint.requiredProgress} {getItemIcon("seasonpass_progress")}</td>
                                    <td>{checkpoint.regularRewards[0].amount}x {getItemIcon(checkpoint.regularRewards[0].resource)}</td>
                                    <td>{checkpoint.premiumRewards[0].amount}x {getItemIcon(checkpoint.premiumRewards[0].resource)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </TextBlock>
    </>
}

export default Rewards;