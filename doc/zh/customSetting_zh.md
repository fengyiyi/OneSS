# 自定义设置

## 目前在逐步添加可自定义的部分

1. 网站图标

   替换 public/favicons 里的全部文件 [(favicons在线生成)](https://realfavicongenerator.net/)

2. 颜色主题

   本项目主题借助 daisyUI 实现，所以可根据 [daisyUI 主题部分文档](https://daisyui.com/docs/themes/) 自定义

3. 修改 setting 文件夹内 userList.ts 文件添加昵称

   按文件示例修改就行
4. 修改 setting 文件夹内 customSetting.ts 文件

    - 其余部分自行修改
    - backgroundImage 背景图片

        - 默认为 Bing 近 7 天随机图片

          ```ts
          backgroundImage: "/api/bingPic";
          ```

        - 若要自定义图片背景，请将图片放入 Public 文件夹并修改路径，例

          ```ts
          backgroundImage: "/bg.jpg";
          ```
