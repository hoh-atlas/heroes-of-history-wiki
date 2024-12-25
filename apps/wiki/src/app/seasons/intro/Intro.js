import "./Intro.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import TextBlock from "@/src/components/textblock/TextBlock";
import H1 from "@/src/components/h1/H1";
import Image from "@/src/components/image/Image";
import { getItemIcon } from "../../../shared-resources/utils/utils";
import allSeasons from "../data";
import CardContainer from "@/src/components/card-container/CardContainer";
import Card from "@/src/components/card/Card";

const Intro = (props) => {

    const getSeason = () => {
        return allSeasons.find(oneSeason => oneSeason.id == props.selectedSeason);
    }

    const season = getSeason();

    return <>
        <Prologue imageSrc={"/seasons/intro/icon_seasonpass_progress.webp"} alt={"Seasons"} maxHeight={"65px"}>
            Season Pass is a monthly event where players complete a variety of different tasks to earn progress tokens and unlock rewards.
            The rewards include special Arcane Antimatter to receive unique heroes that are not available elsewhere!
            Each season comes with a different quests to complete and heroes to collect.
        </Prologue>

        <SectionDivider/>
        <TextBlock>

            <H1 center={true}>{season.name}</H1>

            <Image src={season.banner} alt="" spacing={true} maxHeight={'140px'}/>

            Season runs for several weeks and offers two lanes of prizes: Free and Premium. You can preview all the available prizes and their requirements inside the <b>Rewards</b> tab at the top of this page. The free lane
            is readily available for all, while the premium lane is only available after a one-time investment. To claim the prizes you need to collect Season Progress {getItemIcon("seasonpass_progress")} by completing daily, weekly
            and seasonal quests. To learn more about them, keep reading below.

        </TextBlock>

        <CardContainer 
            card1={
                <Card title={"<b>Schedule on Live Servers</b>"} centered backgroundImage={season.background} blurred={false} footer={season.startDate + " - " + season.endDate}></Card>
            }
            style={{ marginTop: '20px', marginBottom: '20px' }}
        >
        </CardContainer>

        <TextBlock>

            <H1 center={true}>Daily, Weekly & Seasonal Quests</H1><br/>

            <ul>
                <li>Daily quests appear in a quantity of 10 per day and each offers 5 {getItemIcon("seasonpass_progress")}. Quests that are not claimed will disappear.</li>
                <li>Weekly quests appear in a quantity of 10 per 7 days and each offers 25 {getItemIcon("seasonpass_progress")}. Quests that are not claimed will disappear.</li>
                <li>Seasonal quests appear in a quantity of 10 once per season, right at its beginning. Each seasonal quest offers 50 {getItemIcon("seasonpass_progress")}.</li>
            </ul>

        </TextBlock>

        {/*<H1 center={true}>Introduction Video</H1><br/>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/n7JurtEYavg"
                title="Introducing: The Season Pass | Heroes of History"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>*/}
    </>
}

export default Intro;