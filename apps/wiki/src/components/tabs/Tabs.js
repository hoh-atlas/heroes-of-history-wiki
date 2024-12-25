import "./Tabs.css";

const Tabs = (props) => {

    const filteredTabs = props.tabs.filter(tab => tab.show !== false);

    return (
        <div className="tabs-container">
        <section className="section-tabs">
            {
                filteredTabs.map((tab) => {
                    const {id, url, name, img} = tab;
                    const isActive = props.selectedTab.url === url;
                    let classNameTabFirst = id === 1 ? "tab tab-first" : "tab";
                    let classNameActive = isActive ? "active" : "";

                    return (
                        <div key={id} className={`${classNameTabFirst} ${classNameActive}`}>
                            <a href={`#${url}`} className={"link-regular"}>
                                <img src={img} alt="" style={{verticalAlign: 'middle', marginTop: '-2px'}}/>
                                <span>{id !== 1 ? name : ""}</span>
                            </a>
                        </div>
                    );
                })
            }
        </section>
        </div>
    );
};

export default Tabs;