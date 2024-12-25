import { getItemIcon } from "@/src/shared-resources/utils/utils";

const allLeaderboards = [
    {
        id: "rally_of_heroes_12_2024",
        name: "Rally of Heroes",
        codeName: "event.LeaderboardEvent_RallyOfHeroes_1",
        image: "/shared/resources/icon_rift_token_legendary.webp",
        background: "/leaderboards/intro/hero_backdrop_antimatter.webp",
        startDate: "__ _ 2025",
        endDate: "__ _ 2025",
        description: (
            <>
                Open any portal to earn trophies and rewards in the Rally of Heroes event. The number of trophies you receive depends on the specific portal:
                <table style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <thead>
                        <tr>
                            <th>Antimatter</th>
                            <th>Trophies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{getItemIcon("antimatter")}</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>{getItemIcon("antimatter_egyptian")}/{getItemIcon("antimatter_china")}/{getItemIcon("antimatter_vikings")}</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>{getItemIcon("antimatter_seasonpass")}</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>{getItemIcon("antimatter_legendary")}</td>
                            <td>200</td>
                        </tr>
                    </tbody>
                </table>
                Players will be organized into groups of 100 before the event begins. You will compete against others in your group to earn ranking rewards and achieve milestone rewards.
            </>
        )
    }
]

export default allLeaderboards;