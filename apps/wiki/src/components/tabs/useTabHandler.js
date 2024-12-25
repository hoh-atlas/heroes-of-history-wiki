import { useState, useEffect } from "react";

export const useTabHandler = (layout) => {
  const getInitialTab = () => {
    if (typeof window === "undefined") return layout.tabs[0];

    const hash = window.location.hash.split("?")[0].replace("#", "").toLowerCase();
    const foundTab = layout.tabs.find((tab) => tab.url.toLowerCase() === hash);
    return foundTab ? foundTab : layout.tabs[0];
  };

  const [selectedTab, setSelectedTab] = useState(getInitialTab);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashChange = () => {
      const hash = window.location.hash.split("?")[0].replace("#", "").toLowerCase();
      const foundTab = layout.tabs.find((tab) => tab.url.toLowerCase() === hash);
      setSelectedTab(foundTab ? foundTab : layout.tabs[0]);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [layout]);

  return selectedTab;
};
