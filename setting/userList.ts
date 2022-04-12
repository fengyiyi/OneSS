const userList: userListType = {
    users: ["fengyiyi@outlook.com", "oness@dzaaaaaa.com"],
    nickname: {
        "fengyiyi@outlook.com": '🤝 分享功能测试',
        "oness@dzaaaaaa.com": '🌟 ☁OneSS † 开发测试用 †',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

