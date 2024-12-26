"use client";
import layoutBuildings from "./sectionsDefinition";
import Container from "@/src/components/container/Container";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import Intro from "./intro/Intro";
import Collectable from "./collectable/Collectable";
import ReactGA from "react-ga4";
import { updateMeta } from "@/src/shared-resources/utils/utils";
import { useEffect } from "react";

const BuildingsPage = () => {

  	const basePath = "buildings";

  	const selectedTab = useTabHandler(layoutBuildings);

	  ReactGA.send({
        hitType: "pageview",
        page: `/${basePath}`,
        title: `Buildings - ${selectedTab.name}`,
    });

	useEffect(() => {
		updateMeta("Buildings", selectedTab, basePath);
	}, [selectedTab]);

	const pageName = selectedTab.url ? (
        <span>
            <a href={`/${basePath}`} className="text-link-white">Buildings</a> &gt; {selectedTab.name}
        </span>
    ) : "Buildings";

  	const renderSelectedTab = () => {
    	switch (selectedTab.url) {
            case "collectable":
                return <Collectable />;
			default:
				return <Intro />;
    	}
  	};

  	return (
    	<Container basePath={basePath} tabs={layoutBuildings.tabs} selectedTab={selectedTab} pageName={pageName}>
      		{renderSelectedTab()}
    	</Container>
  	);
};

export default BuildingsPage;
