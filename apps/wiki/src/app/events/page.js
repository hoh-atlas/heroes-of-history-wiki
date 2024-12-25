"use client";

import { useState, useEffect } from "react";

import Container from "@/src/components/container/Container";
import SelectBox from "@/src/components/select-box/SelectBox";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";

import layoutEvents from "./sectionsDefinition";
import allEvents from "./data";
import Intro from "./intro/Intro";
import DailySpecials from "./daily-specials/DailySpecials";
import Quests from "./quests/Quests";
import Customizations from "./customizations/Customizations";
import GrandPrizes from "./grand-prizes/GrandPrizes";

const EventsPage = (props) => {

	const basePath = "events";

	const selectedTab = useTabHandler(layoutEvents);

	const pageName = selectedTab.url ? (
		<span>
			<a href={`/${basePath}`} className="text-link-white">Events</a> &gt; {selectedTab.name}
		</span>
	) : "Events";
		
	const options = allEvents.map((oneEvent) => {
		return { value: oneEvent.id, label: `${oneEvent.name}`, image: oneEvent.image };
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
		const newUrl = `/events#${selectedTab.url}?id=${selectedOption.value}`;
		window.history.pushState({ path: newUrl }, '', newUrl);
	};

	const selectedEvent = selectedOption.value;

	layoutEvents.tabs[0].img = selectedOption.image;

	const event = allEvents.find((oneEvent) => oneEvent.id === selectedEvent);
	if (event.questlines === undefined) {
		if (event.leaderboard) {
			layoutEvents.tabs[2].name = "Leaderboard";
			layoutEvents.tabs[2].img = event.questsIcon;
		}
	}
	if (event.leaderboard === undefined) {
		if (event.questlines) {
			layoutEvents.tabs[2].name = "Quests";
			layoutEvents.tabs[2].img = event.questsIcon;
		}
	}

	const renderSelectedTab = () => {
		switch (selectedTab.url) {
			case "daily-specials":
				return <DailySpecials tab={props.tab} selectedEvent={selectedEvent} />;
			case "quests":
				return <Quests tab={props.tab} selectedEvent={selectedEvent} />;
			case "customizations":
				return <Customizations tab={props.tab} selectedEvent={selectedEvent} />;
			case "grand-prizes":
				return <GrandPrizes tab={props.tab} selectedEvent={selectedEvent} />;
			default:
				return <Intro tab={props.tab} selectedEvent={selectedEvent} />;
		}
	};

	return (
		<Container basePath={basePath} tabs={layoutEvents.tabs} selectedTab={selectedTab} pageName={pageName} selectBox={
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
  
  export default EventsPage;