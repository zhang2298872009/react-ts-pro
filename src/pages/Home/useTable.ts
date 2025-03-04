import {useEffect, useState} from "react";
import {ChannelItem, fetchChannelApi} from "@/apis/list.ts";

function useTable() {
    const [channels, setChannels] = useState<ChannelItem[]>([])
    useEffect(() => {
        // 获取频道列表
        const getChannels = async () => {
            const res = await fetchChannelApi()
            setChannels(res.data.data.channels)
        }
        getChannels();
    }, [])

    return {
        channels
    }
}

export {useTable} ;
