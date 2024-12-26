"use client";
import layoutCampaign from "./sectionsDefinition";
import Container from "@/src/components/container/Container";
import Intro from "./intro/Intro";
import Provinces from "./provinces/Provinces";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import ReactGA from "react-ga4";
import { updateMeta } from "@/src/shared-resources/utils/utils";
import { useEffect } from "react";

const CampaignPage = () => {

  	const basePath = "campaign";

  	const selectedTab = useTabHandler(layoutCampaign);

	  ReactGA.send({
        hitType: "pageview",
        page: `/${basePath}`,
        title: `Campaign - ${selectedTab.name}`,
    });

	useEffect(() => {
		updateMeta("Campaign", selectedTab, basePath);
	}, [selectedTab]);

	const pageName = selectedTab.url ? (
        <span>
            <a href={`/${basePath}`} className="text-link-white">Campaign</a> &gt; {selectedTab.name}
        </span>
    ) : "Campaign";

  	const renderSelectedTab = () => {
    	switch (selectedTab.url) {
			case "provinces":
				return <Provinces />;
			default:
				return <Intro />;
    	}
  	};

  	return (
    	<Container basePath={basePath} tabs={layoutCampaign.tabs} selectedTab={selectedTab} pageName={pageName}>
      		{renderSelectedTab()}
    	</Container>
  	);
};

export default CampaignPage;
