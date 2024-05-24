# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur
(**hkds)

## experiment，实验分支，这里保留一个最初的环境，可以测试公共封装，永远不会和入dev分支；同时写入一些必要的注释。

## dev分支开发分支，禁止在dev-fix出现的时候更改，谨慎在feature分支出现时更改。
1.完成基础的环境配置。同时分出experiment分支（用于测试组合式函数和公共组件是否在环境中有效）。
2.新建账号分支

## dev-fix ,出问题就创建，解决好就删去，每次必须完成，并且及时合并到dev分支。这里用于记录出现的bug;和修改的思路；



## dev-feature分支，每次创建都代表一个功能的产生；这里用于记录每个分支。每次正在进行的分支最少有两个，这是为了处理冲突的情况，值得注意的是，不要持续的太久，
1. 现在开始兵分两路；一个是feature-account 和 feature-mainpage.



## dev-feature分支，这是项目要求的子分支，全部完成宣告项目结束
1. 邮箱格式校验
2. 密码6 - 18位必须是字母数字的组合
3. 验证码个数和数字校验
4. 上划下划（模仿IOS系统的界面切换，其实就是快滑不管距离直接划到下一屏幕，慢划超过屏幕的1半才会划到下一屏否则回弹到原来的那一屏）
5. 点赞动画（纯CSS模仿抖音）
6. 选择联系人的左右联动
7. 上传头像canvas头像截取
8. “我”这个页面中下拉背景图会按照比例放大而且有回弹效果
9. 登陆成功后登录界面消失动画
10. 路由切换动画（当前的路由从左边划走，下一个路由从右边进来）
11. 一进来视频默认播放（点击一下暂停，再点击播放（暂停播放该有图标就得有图标））
12. 当视频被划走了那么就应该暂停播放或者是结束播放，在播放的应该是当前的视频
13. 整站图标禁用icon，可以使用SVG或原生CSS模拟