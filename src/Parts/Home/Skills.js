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
            title: "Use your calendar as a todo list",
            id: "todo-list",
            cards:MongoDB
        },
        {
            title: "Color your calendar to organize",
            id: "colors",
            cards:Express
        },
        {
            title: "Instantly know if someone is available",
            id: "availability",
            cards:React
        },
        {
            title: "Track what you listened to when",
            id: "music",
            cards:NodeJs
        },
        {
            title: "Send scheduling links guests love",
            id: "scheduling-links",
            cards:ReactNative
        },
        {
            title: "Always know what your team is up to",
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
