"use client";
import layoutResearch from "./sectionsDefinition";
import Container from "@/src/components/container/Container";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import Intro from "./intro/Intro";

const ResearchPage = () => {

  	const basePath = "research";

  	const selectedTab = useTabHandler(layoutResearch);

	const pageName = selectedTab.url ? (
        <span>
            <a href={`/${basePath}`} className="text-link-white">Research</a> &gt; {selectedTab.name}
        </span>
    ) : "Research";

  	const renderSelectedTab = () => {
    	switch (selectedTab.url) {
			default:
				return <Intro />;
    	}
  	};

  	return (
    	<Container basePath={basePath} tabs={layoutResearch.tabs} selectedTab={selectedTab} pageName={pageName}>
      		{renderSelectedTab()}
    	</Container>
  	);
};

export default ResearchPage;
