"use client";
import layoutTreasureHunt from "./sectionsDefinition";
import Container from "@/src/components/container/Container";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import Intro from "./intro/Intro";
import Checkpoints from "./checkpoints/Checkpoints";
import Customizations from "./customizations/Customizations";
import ReactGA from "react-ga4";

const TreasureHuntPage = () => {

  	const basePath = "treasure-hunt";

  	const selectedTab = useTabHandler(layoutTreasureHunt);

	ReactGA.send({
		hitType: "pageview",
		page: `/${basePath}`,
		title: `Treasure Hunt - ${selectedTab.name}`,
	});

	const pageName = selectedTab.url ? (
        <span>
            <a href={`/${basePath}`} className="text-link-white">Treasure Hunt</a> &gt; {selectedTab.name}
        </span>
    ) : "Treasure Hunt";

  	const renderSelectedTab = () => {
    	switch (selectedTab.url) {
            case "checkpoints":
                return <Checkpoints />;
            case "customizations":
                return <Customizations />;
			default:
				return <Intro />;
    	}
  	};

  	return (
    	<Container basePath={basePath} tabs={layoutTreasureHunt.tabs} selectedTab={selectedTab} pageName={pageName}>
      		{renderSelectedTab()}
    	</Container>
  	);
};

export default TreasureHuntPage;
