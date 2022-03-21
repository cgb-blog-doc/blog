# 样式技巧

## 文本块两端对齐并居中

<p style="text-align: justify;text-align-last: center;">王合信基先选团可六住按西非便老种。世风构置放包知圆长气资积劳照用门好。保素只电教完八段容市响术研。厂整红文据很感装究育说常人矿题。理派马命层身资西开少号照行满片系江。那志引事管资后米以命力选火好。</p>

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
