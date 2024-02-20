import {Title} from "../../Compontents/Skills/title";
import {Express, Flutter, MongoDB, NodeJs, React, ReactNative} from "../../Compontents/Skills/card";
import {useEffect, useState} from "react";

export const Skills = () => {
    const [visible,setvisible] = useState("")
    // useEffect(() => {
    //     console.log(visible)
    // }, [visible]);

    const features = [
        {
            title: "Proficient in MongoDB for flexible and scalable data management.",
            id: "todo-list",
            cards:MongoDB
        },
        {
            title: "Skilled in ExpressJS for efficient server-side web application development.",
            id: "colors",
            cards:Express
        },
        {
            title: "Proficient in ReactJS for dynamic and user friendly web interfaces.",
            id: "availability",
            cards:React
        },
        {
            title: "Skilled in Node.js for scalable and efficient backend development.",
            id: "music",
            cards:NodeJs
        },
        {
            title: "Skilled in React Native for cross platform apps.",
            id: "scheduling-links",
            cards:ReactNative
        },
        {
            title: "Proficient in Flutter for building sleek mobile app.",
            id: "team",
            cards:Flutter
        },
    ];
    return (
        <>
            {/*<div className={"bg-gray-500 h-[500px]"}></div>*/}
            <div className={"mx-auto max-w-6xl px-4 bg-gray-900"}>
                <div className={"flex w-full items-start gap-20"}>
                    <div className={"w-full "}>
                        <ul>
                            <h1 className={"text-[10vw] font-bold pb-[10vh]"}>Skills</h1>
                            {features.map((e) => <li key={e.id}>
                                <Title title={e.title} id={e.id} setVisible={setvisible}/>
                            </li>)}
                        </ul>
                    </div>
                    <div className={"sticky top-0 flex h-screen w-full items-center"}>
                        <div className={"w-full aspect-square bg-gray-600 rounded-2xl relative"}>
                            {features.map((e)=><e.cards key={e.id} visible={visible} id={e.id}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
