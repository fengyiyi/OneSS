const userList: userListType = {
    users: ["fengyiyi@outlook.com", "fengyiyi_outlook.com#EXT#@fengyiyioutlook.onmicrosoft.com"],
    nickname: {
        "fengyiyi@outlook.com": '🤝 分享功能测试',
        "fengyiyi_outlook.com#EXT#@fengyiyioutlook.onmicrosoft.com": '🌟 ☁OneSS † 开发测试用 †',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

