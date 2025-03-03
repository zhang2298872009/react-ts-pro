import {http} from '../utils';

import {ResType} from './shared.ts';

// 接口类型

type ChannelItem = {
    id: number;
    name: string;
}

type ChannelRes = {
    channels: ChannelItem[];
}

// 获取频道列表
export function fetchChannelApi() {
    return http.request<ResType<ChannelRes>>({
            url: "/channel",
        }
    );
}


