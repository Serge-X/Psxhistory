import {useEffect} from "react";
import {useLocation, Link,Redirect,useHistory} from "react-router-dom";


export default function ScrollToTop(){
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);

        
    },[pathname])
    return null;

}
