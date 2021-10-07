# HomeWork

## 设计要求

1. 设计一个轮播组件
   * 循环播放
   * 视觉上中间大两边小
   * 可参考：<https://dribbble.com/shots/6584163-Playlist-Carousel>
2. 支持传入属性
3. 可分发成 npm 组件并通过包管理工具安装使用
4. 类型定义：

    ```ts
    type Props = {
      // 轮播的图片地址
      images: string[],
      // 轮番展示的图片数
      displayNumber: number
      // 每次轮播的时间间隔
      stepInterval: number
      // 点击事件
      onClickNext: (index: number) => void
      onClickPrev: (index: number) => void
    }
    ```

5. 增加属性支持受控模式与非受控模式
6. 移动端兼容
7. UI 好看

## 加分项

1. 构建一个现代化的前端应用
2. 代码整洁、结构良好、易于拓展
3. 具备 web 开发最佳实践
4. 加入自己的创意
5. 加入自己认可的加分项
6. 有在线演示地址

## 提交方式

邮件提交 github 代码仓库

## 自己的想法

1. 参考<https://swiperjs.com/demos>的设计
2. 图片可懒加载（即将划到时才将img的src设置为data-src）
3. 移动端兼容思路：根据滑动的宽度（滑动一个幻灯片距离则向前/向后移动），滑动期间实时更改transform和left的值，若滑动距离不够则撤销（重置值）
