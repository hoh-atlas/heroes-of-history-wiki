import "./Checkpoints.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import Image from "@/src/components/image/Image";
import { checkpoints } from "../data";
import TableCheckpoints from "./TableCheckpoints";
import H1 from "@/src/components/h1/H1";

const Checkpoints = (props) => {

    const heroId = props.heroId;

    return <>
        <Prologue imageSrc={"/treasure-hunt/checkpoints/icon_mystery_chest_gold.webp"} alt={"Checkpoints"} maxHeight={"65px"} >
            Alliance Checkpoints are the main sequence of rewards in Alliance Treasure Hunt. Together with your alliance members, you collect points for each completed encounter.
            The number of points you receive depends on your current difficulty level. The higher the difficulty, the more you contribute to the shared rewards and the farther you can progress!<br/>
            Note: You can click on the customizations to preview their details!
        </Prologue>
        <SectionDivider />
        <H1 center={true}>Checkpoints</H1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", marginBottom: "15px" }}>
            <Image src={"/treasure-hunt/checkpoints/icon_ath_encounter.webp"} maxHeight={'100px'}/>
        </div>
        <TableCheckpoints data={checkpoints} />
    </>
}

export default Checkpoints;