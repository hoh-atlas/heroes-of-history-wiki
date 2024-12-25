import "./Collectable.css";

import { useState, useEffect } from "react";

import SelectBox from "@/src/components/select-box/SelectBox";
import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import BuildingsHandler from "@/src/components/buildings/BuildingsHandler";

import { collectableBuildings } from "../_data/collectableBuildings";
import { school, minoanWatchtower, architectsStudio } from "../_data/collectableBuildingsImages";

const Collectable = (props) => {

    const optionsColors = {"StoneAge":"#be6061", "BronzeAge":"#e9942e", "MinoanEra":"#5cc299", "ClassicGreece":"#5a98bd", "EarlyRome":"#686cc5", "RomanEmpire": "#be6061", "ByzantineEra": "#e9942e",
        "AgeOfTheFranks": "#5cc299", "FeudalAge": "#5a98bd", "IberianEra": "#686cc5", "KingdomOfSicily": "#be6061"
    };

    const options = [
        {value: "MinoanWatchtower", label: "Minoan Watchtower", image: "/shared/resources/puzzle_piece.webp"},
        {value: "School", label: "School", image: "/shared/resources/puzzle_piece.webp"},
        {value: "ArchitecsStudio", label: "Scholars Lyceum", image: "/shared/resources/puzzle_piece.webp"},
    ];   

    const [selectedOption, setSelectedOption] = useState(options[0]);

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?') + 1));
        const selectedOptionParam = hashParams.get('building');
        if (selectedOptionParam) {
            const foundOption = options.find(option => option.value == selectedOptionParam);
            if (foundOption) {
                setSelectedOption(foundOption);
            }
        }
    }, []);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        const newUrl = `/#/buildings/collectable/?building=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    let buildings;
  
    switch (selectedOption.value) {
        case "School": buildings = school; break;
        case "MinoanWatchtower": buildings = minoanWatchtower; break;
        case "ArchitecsStudio": buildings = architectsStudio; break;
    }
  
    return (
        <>
            <Prologue imageSrc={"/buildings/intro/icon_hud_build.webp"} alt={"Buildings"} maxHeight={"65px"} >
                This is an overview of all the collectible buildings in the game. The pieces required to construct and upgrade these buildings can be found in various parts of the game, such as Treasure Hunts, Events, and more.
            </Prologue>
            <SectionDivider/>

            <H1 center={true}>Collectable Buildings</H1><br/>

            <SelectBox
                options={options}
                width={"50%"}
                color={"#f2f1ed"}
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
            />

            <BuildingsHandler buildingsData={collectableBuildings} buildingsImages={buildings} cityType={'capitalCity'}/>
        </>
    );
  };
  
  export default Collectable;