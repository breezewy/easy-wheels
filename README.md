# easy-wheel - 一个简易的Vue UI 组件

[![Build Status](https://www.travis-ci.org/breezewy/easy-wheels.svg?branch=main)](https://www.travis-ci.org/breezewy/easy-wheels)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架 ，希望对你有用

## 开始使用

1. 添加 CSS 样式
使用本框架前，请在CSS中 开启 border-box

```
*,*::before,*::after{box-sizing:border-box}
```
你还需要设置默认颜色变量（后续会改为 scss 变量）

IE 8 及以上浏览器都支持此样式。

```
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```

IE 15 及以上浏览器都支持此样式。

2. 安装 easy-wheels
```
npm i --save easy-wheels
```

3. 引入
```
import {Button,ButtonGroup,Icon} from 'easy-wheels'
import 'easy-wheels/dist/index.css'
export default {
  name: 'App',
  components:{
    'w-button':Button,
    'w-button-group':ButtonGroup,
    'w-icon':Icon
  }
}
```

4. 引入 svg symbols
```
<script src="//at.alicdn.com/t/font_2351163_q1lvnywyn1c.js"></script>
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


