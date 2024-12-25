"use client";
import layoutCampaign from "./sectionsDefinition";
import Container from "@/src/components/container/Container";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import layoutResources from "./sectionsDefinition";
import Intro from "./intro/Intro";
import Basic from "./basic/Basic";
import Goods from "./goods/Goods";
import Research from "./research/Research";
import Crests from "./crests/Crests";
import Ascension from "./ascension/Ascension";

const ResourcesPage = () => {

  	const basePath = "resources";

  	const selectedTab = useTabHandler(layoutResources);

	const pageName = selectedTab.url ? (
        <span>
            <a href={`/${basePath}`} className="text-link-white">Resources</a> &gt; {selectedTab.name}
        </span>
    ) : "Resources";

  	const renderSelectedTab = () => {
    	switch (selectedTab.url) {
            case "basic":
                return <Basic />;
            case "goods":
                return <Goods />;
            case "research":
                return <Research />;
            case "crests":
                return <Crests />;
            case "ascension":
                return <Ascension />;
			default:
				return <Intro />;
    	}
  	};

  	return (
    	<Container basePath={basePath} tabs={layoutResources.tabs} selectedTab={selectedTab} pageName={pageName}>
      		{renderSelectedTab()}
    	</Container>
  	);
};

export default ResourcesPage;
