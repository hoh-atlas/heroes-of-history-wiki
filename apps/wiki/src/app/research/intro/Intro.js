import "./Intro.css";

import { useState, useEffect } from "react";

import SelectBox from "@/src/components/select-box/SelectBox";
import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import Image from "@/src/components/image/Image";

import allTechnologies from "../data";
import ResearchHandler from "./ResearchHandler";

const Intro = () => {

    const optionsColors = {1:"#be6061", 2:"#e9942e", 3:"#5cc299", 4:"#5a98bd", 5:"#686cc5", 6: "#be6061", 7: "#e9942e",
        8: "#5cc299", 9: "#5a98bd", 10: "#686cc5", 11: "#be6061"
    };

    const options = allTechnologies.map((oneEra) => {
        return {value: oneEra.id, label: `${oneEra.id} - ${oneEra.era}`, dotColor: optionsColors[oneEra?.id]}
    });   

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const getEra = (option) => {
        return allTechnologies.find(oneEra => oneEra.id === option.value);
    }

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?') + 1));
        const selectedOptionParam = hashParams.get('era');
        if (selectedOptionParam) {
            const foundOption = options.find(option => option.value == selectedOptionParam);
            if (foundOption) {
                setSelectedOption(foundOption);
            }
        }
    }, []);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        const newUrl = `/research#?era=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    return <>
        <Prologue imageSrc={"/research/intro/icon_hud_research.webp"} alt={"Research"} maxHeight={"65px"}>
            This overview displays all the technologies and their requirements for the selected age.
            Interactive buttons allow you to mark technologies as 'Completed,' helping you track remaining research costs.
            This feature will help you in your strategic planning!
        </Prologue>
        <SectionDivider/>

        <H1 center={true}>Research Calculator</H1>

        <Image src={getEra(selectedOption).image} maxHeight={140} marginBottom={20}/>

        <SelectBox
            options={options}
            width={"50%"}
            color={"#f2f1ed"}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
        />

        <ResearchHandler data={getEra(selectedOption).technologies} era={getEra(selectedOption).era}
        eraId={getEra(selectedOption).id}/>
    </>
}

export default Intro;