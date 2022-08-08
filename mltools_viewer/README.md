<h1 align="center">
  <img src="assets/icon/icon2.png" height="192" width="192"><br/>mltools_viewer
</h1>

用于`mltools`的可视化工具 在线[demo](https://guchengxi1994.github.io/simple-tools-for-machine-learning/)

## Changelog
* v0.4.2 添加dlib人脸识别页面
* v0.4.1 支持快捷键以及（桌面端）多窗口
* v0.4.0 支持文本分类
* v0.3.1 支持服务器交互，无标注文件增广
* v0.3.0 开始支持服务器交互，已实现无标注文件增广，以及SIFT
* v0.2.4 支持标注删除功能
* v0.2.3 支持自定义实体类名的NER
* v0.2.2 通用`NER`支持生成`.ml`格式文件
* v0.2.1 添加读取图片类型的`.ml`并展示标注的功能
* v0.2.0 支持通用 Named Entity Recognition  [demo](https://guchengxi1994.github.io/simple-tools-for-machine-learning/#/pageNer)
* v0.1.1 完成`labelme`polygon标注，放大/移动
  - [x] 将在之后的版本完成删除标注的功能(labelImg的标注使用的是 `enable` 属性)
  - [ ] 将在之后的版本完成类名模糊搜索的功能
  - [ ] 可能在之后的版本完成隐藏显示polygon的功能
  - [x] 将在之后的版本完成`.ml`文件与标准labelImg以及labelme文件相互转化
* v0.1.0 改了项目文件结构，添加了一个主界面，为了支持多类型数据标注（暂时没有开发）
* v0.0.3 完成labelImg标注，支持导出特定的`.ml`文件，暂不支持删除标注

## build(有些细节功能存在差异，所以打算分入口文件打包)
* on windows(桌面上打算集成一些，比如多窗口这样的功能)
  `flutter build windows lib/main_desktop.dart`
* on web(这个应该算是全平台通用)
  `flutter build web  --web-renderer html`

