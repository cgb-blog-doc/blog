# 样式技巧

## 毛玻璃效果

火狐（PC 和 Mobile）、IE 不支持

```css
div {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px); /* 重点样式 */
}
```

## CSS 实现打字效果

<p class="typing-effect">让我们一起玩技术！</p>

<style>
  .typing-effect {
    width: 19ch;
    height: 22px;
    line-height: 22px;
    border-right: 2px solid;
    animation: typing 3s steps(9) infinite, shine .5s step-end infinite alternate;
    overflow: hidden;
  }
  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes shine {
    50% {
      border-color: transparent;
    }
  }
</style>

```css
/**
  <p class="typing-effect">让我们一起玩技术！</p > 
*/
.typing-effect {
  width: 19ch; /* 1ch = 0的宽度 = 半个汉字的宽度 */
  height: 22px;
  line-height: 22px;
  white-space: nowrap;
  border-right: 2px solid;
  animation: typing 3s steps(9) infinite, shine 0.5s step-end infinite alternate;
  overflow: hidden;
}
@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes shine {
  50% {
    border-color: transparent;
  }
}
```

## 使用 attr()从 DOM 中取值

```css
/* <p data-length="9" class="txt">some text</p> */

.txt::after {
  content: attr(data-length); /* 从DOM中取值 */
}
```

## 单行省略号

<p style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis;" title="Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。">Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。</p>

```css
p {
  overflow: hidden;
  white-space: nowrap; /*禁止换行*/
  text-overflow: ellipsis; /*省略号*/
}
```

## 多行省略号 <Badge text="只适用于webkit浏览器或者移动端" type="warning"/>

<p style="overflow:hidden; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2; text-overflow:ellipsis;" title="Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。">Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>

```css
p {
  overflow: hidden;
  display: -webkit-box; /*将对象作为弹性伸缩盒子模型显示*/
  -webkit-box-orient: vertical; /*设置或检索伸缩盒对象的子元素的排列方式*/
  -webkit-line-clamp: 2; /*限制在一个块元素显示的文本的行数*/
  text-overflow: ellipsis;
}
```

## 文本块两端对齐并居中

<p style="text-align: justify;text-align-last: center;">Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>

```css
p {
  text-align: justify; /*两端对齐*/
  text-align-last: center; /*最后一行居中对齐*/
}
```

## 渐进式 JPEG

JPEG 文件格式有两种保存方式：`Baseline JPEG` 和 `Progressive JPEG`

- 第一种格式在页面上显示的时候是从上到下显示。
- 第二种格式则是从模糊到清晰的显示出来。 <Badge text="推荐" type="tip" vertical="middle"/><br>

使用 Photoshop 存储为 web 所用格式的时候，勾选【**连续**】，即可保存为渐进式的图片
