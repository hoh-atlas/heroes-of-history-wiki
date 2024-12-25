"use client";

import { useState, useEffect } from "react";

import Container from "@/src/components/container/Container";
import SelectBox from "@/src/components/select-box/SelectBox";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";

import layoutLeaderboards from "./sectionsDefinition";
import allLeaderboards from "./data";
import Intro from "./intro/Intro";
import Milestones from "./milestones/Milestones";
import Ranking from "./ranking/Ranking";

const LeaderboardsPage = (props) => {

	const basePath = "leaderboards";

	const selectedTab = useTabHandler(layoutLeaderboards);

	const pageName = selectedTab.url ? (
		<span>
			<a href={`/${basePath}`} className="text-link-white">Leaderboards</a> &gt; {selectedTab.name}
		</span>
	) : "Leaderboards";
		
	/*const { selectedOption, handleOptionChange } = useOptionURL(options, "id");*/

    const options = allLeaderboards.map((oneLeaderboard) => {
        return { value: oneLeaderboard.id, label: `${oneLeaderboard.name}`, image: oneLeaderboard.image };
    });

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
        const newUrl = `/leaderboards#${selectedTab.url}?id=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    layoutLeaderboards.tabs[0].img = selectedOption.image;

    const selectedLeaderboard = selectedOption.value;

	const renderSelectedTab = () => {
		switch (selectedTab.url) {
            case "milestones":
                return <Milestones tab={selectedTab.tab} selectedLeaderboard={selectedLeaderboard} />;
            case "ranking":
                return <Ranking tab={selectedTab.tab} selectedLeaderboard={selectedLeaderboard} />;
			default:
				return <Intro tab={props.tab} selectedLeaderboard={selectedLeaderboard} />;
		}
	};

	return (
		<Container basePath={basePath} tabs={layoutLeaderboards.tabs} selectedTab={selectedTab} pageName={pageName} selectBox={
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
  
export default LeaderboardsPage;