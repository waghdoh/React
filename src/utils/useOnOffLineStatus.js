import { useState,useEffect } from "react";

const useOnOffLineStatus = () => {
    const [onOfflineStatus, setOnOfflineStatus] = useState(true);

    useEffect ( () =>{
        window.addEventListener("online", () => setOnOfflineStatus(true));
        window.addEventListener("offline", () => setOnOfflineStatus(false));
    },[])

    return onOfflineStatus;

}
export default useOnOffLineStatus;