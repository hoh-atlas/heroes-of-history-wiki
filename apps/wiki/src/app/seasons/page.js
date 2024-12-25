"use client";

import { useState, useEffect } from "react";

import Container from "@/src/components/container/Container";
import SelectBox from "@/src/components/select-box/SelectBox";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";

import layoutSeasons from "./sectionsDefinition";
import allSeasons from "./data";
import Intro from "./intro/Intro";
import Rewards from "./rewards/Rewards";
import Heroes from "./heroes/Heroes";

const SeasonsPage = (props) => {

	const basePath = "seasons";

	const selectedTab = useTabHandler(layoutSeasons);

	const pageName = selectedTab.url ? (
		<span>
			<a href={`/${basePath}`} className="text-link-white">Seasons</a> &gt; {selectedTab.name}
		</span>
	) : "Seasons";
		
	const options = allSeasons.map((oneSeason) => {
        return { value: oneSeason.id, label: `${oneSeason.name}`, image: oneSeason.image };
    });

    /*const { selectedOption, handleOptionChange } = useOptionURL(options, "id");*/

    const [selectedOption, setSelectedOption] = useState(options[0]);

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?') + 1));
        const selectedOptionParam = hashParams.get('id');
        if (selectedOptionParam) {
            const foundOption = options.find(option => option.value == selectedOptionParam);
            if (foundOption) {
                setSelectedOption(foundOption);
            }
        }
    }, []);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        const newUrl = `/seasons#${selectedTab.url}?id=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    const selectedSeason = selectedOption.value;

	const renderSelectedTab = () => {
		switch (selectedTab.url) {
            case "rewards":
                return <Rewards tab={selectedTab.tab} selectedSeason={selectedSeason} />;
            case "heroes":
                return <Heroes tab={selectedTab.tab} selectedSeason={selectedSeason} />;
			default:
				return <Intro tab={selectedTab.tab} selectedSeason={selectedSeason} />;
		}
	};

	return (
		<Container basePath={basePath} tabs={layoutSeasons.tabs} selectedTab={selectedTab} pageName={pageName} selectBox={
			<SelectBox
				options={options}
				width={"400px"}
				mobileWidth={"350px"}
				height={"32px"}
				color={"#EFEADA"}
				selectedOption={selectedOption}
				onOptionChange={handleOptionChange}
				className="custom-selectbox"
			/>
		}>
			{renderSelectedTab()}
		</Container>
	);
};
  
export default SeasonsPage;