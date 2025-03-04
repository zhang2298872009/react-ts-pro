import {Image, List} from 'antd-mobile';
import {users} from './user.ts';
import {useNavigate} from "react-router-dom";

const HomeList = () => {

    const navigate = useNavigate();
    const goToDetail = (id: number) => {
        // 跳转详情页
        navigate(`/detail?id=${id}`)
    }

    return (
        <List>
            {
                users.map((user) => (
                    <List.Item
                        onClick={() => goToDetail(user.id)}
                        key={user.id}>

                        prefix={
                        <Image
                            src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            style={{width: '30px', height: '30px'}}>
                        </Image>
                    }
                        {user.name}
                    </List.Item>
                ))
            }
        </List>
    )
}

export default HomeList;
