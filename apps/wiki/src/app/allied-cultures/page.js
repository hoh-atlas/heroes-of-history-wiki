"use client";

import { useState, useEffect } from "react";

import Container from "@/src/components/container/Container";
import SelectBox from "@/src/components/select-box/SelectBox";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";

import layoutAlliedCultures from "./sectionsDefinition";
import allAlliedCultures from "./data";
import Intro from "./intro/Intro";
import Quests from "./quests/Quests";
import Buildings from "./buildings/Buildings";
import WorldWonder from "./world-wonder/WorldWonder";
import Strategies from "./strategies/Strategies";
import Layouts from "./layouts/Layouts";

const AlliedCulturesPage = (props) => {

	const basePath = "allied-cultures";

	const selectedTab = useTabHandler(layoutAlliedCultures);

	const pageName = selectedTab.url ? (
		<span>
			<a href={`/${basePath}`} className="text-link-white">Allied Cultures</a> &gt; {selectedTab.name}
		</span>
	) : "Allied Cultures";
		
	const getCurrentAlliedCultureIndex = (startDate, currentDate, culturesCount) => {
        const oneWeekInMilliseconds = 1000 * 60 * 60 * 24 * 7;
        const timeDifference = currentDate - startDate;
        const weeksPassed = Math.floor(timeDifference / oneWeekInMilliseconds);
        return weeksPassed % culturesCount;
    };
      
    const reorderAlliedCultures = (alliedCultures) => {
        const firstCultureStartDate = new Date(Date.UTC(2024, 7, 29, 12, 0));
        const currentDate = new Date();
        const currentCultureIndex = getCurrentAlliedCultureIndex(firstCultureStartDate, currentDate, alliedCultures.length);
        return [
          ...alliedCultures.slice(currentCultureIndex),
          ...alliedCultures.slice(0, currentCultureIndex),
        ];
    };
      
    const options = reorderAlliedCultures(allAlliedCultures).map((oneAlliedCulture) => {
        return { value: oneAlliedCulture.id, label: `${oneAlliedCulture.name}`, image: oneAlliedCulture.image };
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
        const newUrl = `/allied-cultures#${selectedTab.url}?id=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    const selectedAlliedCulture = selectedOption.value;

	const renderSelectedTab = () => {
		switch (selectedTab.url) {
            case "quests":
                return <Quests tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
            case "buildings":
                return <Buildings tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
            case "world-wonder":
                return <WorldWonder tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
            case "strategies":
                return <Strategies tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
            case "layouts":
                return <Layouts tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
			default:
				return <Intro tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
		}
	};

	return (
		<Container basePath={basePath} tabs={layoutAlliedCultures.tabs} selectedTab={selectedTab} pageName={pageName} selectBox={
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
  
export default AlliedCulturesPage;