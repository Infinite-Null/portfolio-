import {useEffect, useRef} from "react";
import {useInView,motion} from "framer-motion";
import classNames from "classnames";

export const Title = ({title, setVisible, id}) => {
    const ref = useRef(null)
    const isInView = useInView(ref,{margin:"-50% 0px -50% 0px"})
    useEffect(() => {
        if(isInView){
            setVisible(id)
        }
    }, [isInView]);

    return (
        <motion.p ref={ref} className={classNames(
            "text-5xl transition-colors py-16 font-bold",
            isInView?"text-[#8167a9]":"text-gray-600"
        )}>{title}</motion.p>
    )
}
