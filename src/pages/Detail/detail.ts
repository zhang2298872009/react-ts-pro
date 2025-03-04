import {ResType} from "@/apis/shared.ts";
import {http} from "@/utils";


export type  DetailDataType = {
    id: number;
    name: string;
    price: number;
    desc: string;
};

export function fetchDetailApi(id: number) {
    return http.request<ResType<DetailDataType>>({
            url: "/detail",
            params: {
                id
            }
        }
    );
}


