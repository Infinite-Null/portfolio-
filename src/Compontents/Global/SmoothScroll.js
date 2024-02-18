import {useEffect} from "react";
import Scrollbar from 'smooth-scrollbar';
export const SmoothScroll = () => {

    useEffect(() => {
        const options = {
            damping : 0.03,
        }

        Scrollbar.init(document.body, options);

        return () => {
            if (Scrollbar) Scrollbar.destroy(document.body)
        }  },[])
    return null
}
