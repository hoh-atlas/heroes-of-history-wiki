"use client";
import layoutBuildings from "./sectionsDefinition";
import Container from "@/src/components/container/Container";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import Intro from "./intro/Intro";
import Collectable from "./collectable/Collectable";

const BuildingsPage = () => {

  	const basePath = "buildings";

  	const selectedTab = useTabHandler(layoutBuildings);

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
