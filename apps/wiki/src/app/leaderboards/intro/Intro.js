import "./Intro.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import Image from "@/src/components/image/Image";
import TextBlock from "@/src/components/textblock/TextBlock";
import Card from "@/src/components/card/Card";
import CardContainer from "@/src/components/card-container/CardContainer";

import allLeaderboards from "../data";

const Intro = (props) => {
  
    const getLeaderboard = () => {
        return allLeaderboards.find(oneLeaderboards => oneLeaderboards.id == props.selectedLeaderboard);
    }

    const leaderboard = getLeaderboard();
  
    return (
        <>
            <Prologue imageSrc={leaderboard.image} alt={"Leaderboards"} maxHeight={"65px"} >
                Leaderboard events are various types of small events that run for several days and challenge you with particular tasks to achieve milestones. By completing these tasks you receive trophies, that boost
                your position in the ranking of 100 randomly selected players.
            </Prologue>

            <SectionDivider />

            <H1 center={true}>{leaderboard.name}</H1>

            <Image src={leaderboard.image} maxHeight={"100px"} spacing={true} />

            <TextBlock>
                {leaderboard.name} is a Leaderboard event that spans several days, challenging you to complete specific tasks to achieve milestones.
                Earning trophies boosts your position in the rankings, unlocking additional rewards that can be claimed once the event concludes.
            </TextBlock>

            <CardContainer 
            card1={
                <Card title={"<b>Schedule on Live Servers</b>"} centered backgroundImage={leaderboard.background} blurred={false} footer={leaderboard.startDate + " - " + leaderboard.endDate}></Card>
            }
            style={{ marginTop: '20px', marginBottom: '20px' }}
            >
            </CardContainer>

            <TextBlock>
                {leaderboard.description}<br/><br/>
                To learn more, visit the <b>Milestones</b> and <b>Ranking</b> tabs to see the available prizes during this event.
            </TextBlock>

        </>
    );
  };
  
  export default Intro;