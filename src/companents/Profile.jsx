import React from 'react';
import f from "./Profile.css"

const Profile = () => {
    return <div className="content">
        <div className={f.fon}> <img src="https://avatars.mds.yandex.net/i?id=efff5a953e522ee049f62f12dd53602b23816c8f-10814926-images-thumbs&n=13" />
        </div>
        <div className={f.ava}> <img src="https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-7.jpg" />
        </div>
        <div> My post
            <div>
                new post
            </div>
            <div className={f.item}>
                post 1
            </div>
            <div className={f.item}>
                post 2
            </div>
        </div>
    </div>
}
export default Profile