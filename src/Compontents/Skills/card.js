import classNames from "classnames";
import MongoDBLogo from "../../Images/mongoLogo.png"
import ExpressLogo from "../../Images/express.png"
import ReactLogo from "../../Images/react.png"
import NodeLogo from "../../Images/node.png"
import ReactNativeLogo from "../../Images/reactNative.png"
import FlutterLogo from "../../Images/flutter_logo.png"

const Cards = ({gradient, children, id, visible}) => {
    console.log(visible)
    return (
        <div className={classNames("absolute inset-0 bg-red-300 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity flex items-center justify-center",
            gradient,
            visible===id?"opacity-1":"opacity-0"
            )}>{children}</div>
    )
}

export  function MongoDB({id,visible}){
   return <Cards id={id} visible={visible} gradient={"from-gray-800 to-[#001e2b]"}>
        <img src={MongoDBLogo} alt={"MongoDB"}/>
    </Cards>
}

export  function Express({id,visible}){
    return <Cards id={id} visible={visible} gradient={"from-gray-800 to-[#fee600]"}>
        <img src={ExpressLogo} alt={"ExpressJS"}/>
    </Cards>
}

export function React({id, visible}) {
    return <Cards id={id} visible={visible} gradient={"from-gray-800 to-[#53c1de]"}>
        <img src={ReactLogo} alt={"ReactJS"}/>
    </Cards>
}

export function NodeJs({id, visible}) {
    return <Cards id={id} visible={visible} gradient={"from-gray-800 to-[#80bc02]"}>
        <img src={NodeLogo} alt={"NodeJS"}/>
    </Cards>
}

export function ReactNative({id, visible}){
    return <Cards id={id} visible={visible} gradient={"from-gray-800 to-[#8167a9]"}>
        <img src={ReactNativeLogo} alt={"React Native"}/>
    </Cards>
}

export function Flutter({id, visible}){
    return <Cards id={id} visible={visible} gradient={"from-gray-800 to-[#01579b]"}>
        <img src={FlutterLogo} alt={"Flutter"}/>
    </Cards>
}

