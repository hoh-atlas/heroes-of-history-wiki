import "./ResearchHandler.css";

import React, { useState, useEffect } from 'react';
import { getItemIcon, getItemData } from "../../../shared-resources/utils/utils";
import H1 from "@/src/components/h1/H1";

const ResearchHandler = (props) => {
    const [completedTechnologies, setCompletedTechnologies] = useState({});

    const data = props.data;

    const categoryPriority = ["soft", "research_materials", "goods"];

    useEffect(() => {
        const savedData = localStorage.getItem(`completedTechnologies-${props.eraId}`);
        if (savedData) {
            setCompletedTechnologies(JSON.parse(savedData));
        } else {
            setCompletedTechnologies({});
        }
    }, [props.era]);

    useEffect(() => {
        localStorage.setItem(`completedTechnologies-${props.eraId}`, JSON.stringify(completedTechnologies));
    }, [completedTechnologies, props.era]);

    const toggleCompletion = (id, enable) => {
        const enableParents = (techId) => {
            const tech = data.find((t) => t.id === techId);
            if (tech) {
                tech.parents.forEach((parentId) => {
                    setCompletedTechnologies((prev) => ({
                        ...prev,
                        [parentId]: true,
                    }));
                    enableParents(parentId);
                });
            }
        };

        const disableChildren = (techId) => {
            const tech = data.find((t) => t.id === techId);
            if (tech) {
                tech.children.forEach((childId) => {
                    setCompletedTechnologies((prev) => ({
                        ...prev,
                        [childId]: false,
                    }));
                    disableChildren(childId);
                });
            }
        };

        setCompletedTechnologies((prev) => ({
            ...prev,
            [id]: enable,
        }));

        if (enable) {
            enableParents(id);
        } else {
            disableChildren(id);
        }
    };

    const calculateTotalCosts = () => {
        const totalCosts = {};
        data.forEach((tech) => {
            if (!completedTechnologies[tech.id]) {
                tech.costs.forEach((cost) => {
                    if (!totalCosts[cost.resource]) {
                        totalCosts[cost.resource] = 0;
                    }
                    totalCosts[cost.resource] += cost.amount;
                });
            }
        });
        return totalCosts;
    };

    const totalCosts = calculateTotalCosts();

    const maxCostColumns = Math.max(
        ...data.map((tech) =>
            tech.costs.filter((cost) => cost.resource !== "research_point").length
        )
    );

    const sortCostsByCategory = (costs) => {
        return costs.sort((a, b) => {
            const categoryA = getItemData(a.resource).category;
            const categoryB = getItemData(b.resource).category;
            return categoryPriority.indexOf(categoryA) - categoryPriority.indexOf(categoryB);
        });
    };

    return (
        <>
            <div>
                <div className="calculated-costs">
                    <H1>Remaining costs</H1><br/>
                    <div className="calculated-costs-items">
                        {Object.entries(totalCosts).map(([resource, amount]) => (
                            <div key={resource} className="calculated-costs-item">
                                {amount}x {getItemIcon(resource)}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <small style={{ fontSize: '11px', color: '#916a17' }}>
                        <i>Note: Each technology you mark as "Completed" will automatically finish all of its prerequisite technologies. You do not need to click all of them manually.</i>
                    </small>
                </div>
                <div className="scroll">
                    <table className="research-table" style={{ width: '80%', tableLayout: 'auto', borderCollapse: 'collapse' }} cellSpacing="0" cellPadding="8">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>RP</th>
                                <th colSpan={maxCostColumns}>Costs</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((tech) => {
                                const rpCost = tech.costs.find((cost) => cost.resource === "research_point");
                                const otherCosts = tech.costs.filter((cost) => cost.resource !== "research_point");

                                const sortedCosts = sortCostsByCategory(otherCosts);

                                return (
                                    <tr key={tech.id}>
                                        <td>{tech.id}</td>
                                        <td>{tech.name}</td>
                                        <td>{rpCost ? rpCost.amount : 0}x {getItemIcon("research_point")}</td>
                                        {Array.from({ length: maxCostColumns }).map((_, index) => (
                                            <td key={index}>
                                                {sortedCosts[index] ? (
                                                    <>
                                                        {sortedCosts[index].amount}x{" "}
                                                        {getItemIcon(sortedCosts[index].resource)}
                                                    </>
                                                ) : null}
                                            </td>
                                        ))}
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={completedTechnologies[tech.id] || false}
                                                onChange={(e) =>
                                                    toggleCompletion(tech.id, e.target.checked)
                                                }
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ResearchHandler;
