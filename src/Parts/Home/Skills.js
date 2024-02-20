import {Title} from "../../Compontents/Skills/title";

export const Skills = () => {

    const features = [
        {
            title: "Use your calendar as a todo list",
            id: "todo-list",
        },
        {
            title: "Color your calendar to organize",
            id: "colors",

        },
        {
            title: "Instantly know if someone is available",
            id: "availability",

        },
        {
            title: "Track what you listened to when",
            id: "music",

        },
        {
            title: "Send scheduling links guests love",
            id: "scheduling-links",

        },
        {
            title: "Always know what your team is up to",
            id: "team",

        },
    ];
    return (
        <>
            {/*<div className={"bg-gray-500 h-[500px]"}></div>*/}
            <div className={"mx-auto max-w-6xl px-4 bg-gray-700"}>
                <div className={"flex w-full items-start gap-20"}>
                    <div className={"w-full py-[50vh]"}>
                        <ul>
                            {features.map((e) => <li key={e.id}>
                                <Title title={e.title}/>
                            </li>)}
                        </ul>
                    </div>
                    <div className={"sticky top-0 flex h-screen w-full items-center"}>
                        <div className={"w-full aspect-square bg-gray-600 rounded-2xl"}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
