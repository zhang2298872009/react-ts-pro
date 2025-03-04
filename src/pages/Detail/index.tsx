import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {NavBar} from "antd-mobile";

const Detail = () => {

    const [params] = useSearchParams();
    const id = params.get("id");
    useEffect(() => {
        console.log(id)
    }, [id])
    return <div>
        <NavBar></NavBar>
    </div>
}

export default Detail;
