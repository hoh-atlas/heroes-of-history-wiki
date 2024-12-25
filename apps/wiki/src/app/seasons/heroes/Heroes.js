import "./Heroes.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import TextBlock from "@/src/components/textblock/TextBlock";
import H1 from "@/src/components/h1/H1";
import Image from "@/src/components/image/Image";
import allSeasons from "../data";
import { allHeroes } from "../../heroes/data";

const Heroes = (props) => {

    const getSeason = () => {
        return allSeasons.find(oneSeason => oneSeason.id == props.selectedSeason);
    }

    const season = getSeason();

    const hero1 = allHeroes.filter((oneHero) => oneHero.id === season.uniqueHeroes[0])[0];
    const hero2 = allHeroes.filter((oneHero) => oneHero.id === season.uniqueHeroes[1])[0];

    return <>
        <Prologue imageSrc={"/seasons/rewards/icon_reward_season_pass.webp"} alt={"Seasons"} maxHeight={"65px"}>
            This is an overview of featured heroes available in Arcanne Antimatter during this season.
        </Prologue>

        <SectionDivider/>
        <TextBlock>

            <H1 center={true}>Featured Heroes</H1>

            <div style={{ overflowX: 'auto', marginTop: '20px' }} className="responsive-table-container">
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '50%' }}>
                                {hero1.name}
                            </th>
                            <th style={{ width: '50%' }}>
                                {hero2.name}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Image src={hero1.image} maxHeight={'400px'}/></td>
                            <td><Image src={hero2.image} maxHeight={'400px'}/></td>
                        </tr>
                        <tr>
                            <td>
                                <a href={`/heroes/${hero1.id}`} key={hero1.id} className="text-link hero-icon-container">
                                    <span>More details</span>
                                </a>
                            </td>
                            <td>
                                <a href={`/heroes/${hero2.id}`} key={hero2.id} className="text-link hero-icon-container">
                                    <span>More details</span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </TextBlock>
    </>
}

export default Heroes;