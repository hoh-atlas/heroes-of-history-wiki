import "./Quests.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import TextBlock from "@/src/components/textblock/TextBlock";
import Icon from "@/src/components/icon/Icon";
import { getItemIcon } from "@/src/shared-resources/utils/utils";
import OneQuestline from "@/src/components/quests/OneQuestline";

import allEvents from "../data";

const Quests = (props) => {
  
    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }

    const event = getEvent();
  
    return (
        <>
            <Prologue imageSrc={event.questsIcon} alt={"Events"} maxHeight={"65px"} >            
                Quests introduce players to the story of the event and offer a variety of rewards. They consist of rush quests and daily quests that appear at a pace of 4 per event day.
            </Prologue>

            <SectionDivider />

            {
                event.questlines !== undefined ? (
                    <div className="questlines-container">
                        {
                            event.questlines?.map((oneQuestline) => (
                                <OneQuestline questline={oneQuestline} headerColor={event.questlineColor} />
                            ))
                        }
                    </div>
                ) : event.leaderboard !== undefined ? (
                    <>
                        <H1 center={true}>Leaderboard</H1><br/>

                        <TextBlock>
                            The goal is to spend Stamina {getItemIcon("energy")} to obtain {event.currency.name} <Icon resource={event.currency.image}/> by
                            reaching individual milestones. To preview all the available milestones, see the table below:
                        </TextBlock>

                        <div style={{ overflowX: 'auto', marginTop: '20px', marginBottom: '20px' }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        {event.leaderboard.individualRewards.map((_, index) => (
                                            <th key={`header-${index}`}>{index + 1}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>{getItemIcon("energy")}</b></td>
                                        {event.leaderboard.individualRewards.map((reward, index) => (
                                            <td key={`costs-${index}`}>{reward.costs}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td><b><Icon resource={event.currency.image} /></b></td>
                                        {event.leaderboard.individualRewards.map((reward, index) => (
                                            <td key={`currency-${index}`}>{reward.currency}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <TextBlock>
                            The duration of each Leaderboard event during the {event.name} is 7 days. These events occur 4 times, covering the entire duration of the event. Each time, you have the opportunity to collect 
                            individual rewards from the start and compete with other players in rankings rewards once again.
                        </TextBlock>

                        <H1 center={true}>Calculations</H1>

                        <TextBlock>
                            To collect all individual rewards from a single Leaderboard event, you will need to spend 2,800 Stamina {getItemIcon("energy")} over 7 days. Let's break this down with some calculations:<br/><br/>

                            Stamina regenerates at a rate of 1 every 3 minutes, meaning a full bar of 100 Stamina is replenished in 5 hours. Assuming you sleep for 8 hours each night, 
                            5 of those hours will be used for Stamina regeneration. As a result, you will generate Stamina for the remaining 21 hours of the day, equating to 420 Stamina per day.<br/><br/>

                            If you log in regularly and consistently use your Stamina, you can spend approximately 2,940 Stamina in a week, giving you a slight surplus over the required 2,800. 
                            Any potential loss of Stamina due to inconsistent collection during the day can be offset by earning additional Stamina from seasonal rewards, Treasure Hunt rewards, watching ads, and completing certain quests.<br/><br/>

                            This means you should be able to collect all individual rewards without needing to purchase extra Stamina, provided that you play consistently and ensure your Stamina is not maxed out for long periods.<br/><br/>

                            Note: If a season is active, we strongly recommend holding off on collecting Stamina rewards until the Leaderboard event starts. This strategy will help you maximize your Stamina reserves for the event.
                        </TextBlock>
                    </>
                ) : (
                    <>
                        No data found.
                    </>
                )
            }
        </>
    );
  };
  
  export default Quests;