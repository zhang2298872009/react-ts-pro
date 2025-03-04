import './style.css';
import {Tabs} from "antd-mobile";
import {useTable} from "./useTable.ts";
import HomeList from "@/pages/Home/HomeList";

const Home = () => {
    const {channels} = useTable()
    return <div>
        <div className="tabContainer">
            {/*tab 区域*/}
            <Tabs>
                <Tabs.Tab title='水果' key='fruits'>
                    {channels.map(item => <div key={item.id}>{item.name}</div>)}
                </Tabs.Tab>
                <Tabs.Tab title='蔬菜' key='vegetables'>
                    <HomeList/>
                </Tabs.Tab>
                <Tabs.Tab title='动物' key='animals'>
                    蚂蚁
                </Tabs.Tab>
            </Tabs>

        </div>
    </div>
}

export default Home;
