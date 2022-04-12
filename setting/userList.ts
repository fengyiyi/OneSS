const userList: userListType = {
    users: ["admin@fengyiyi.onmicrosoft.com", "AdeleV@fengyiyi.onmicrosoft.com"],
    nickname: {
        "admin@fengyiyi.onmicrosoft.com": '个人文件',
        "AdeleV@fengyiyi.onmicrosoft.com": '🌟 ☁OneSS † 开发测试用 †',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

