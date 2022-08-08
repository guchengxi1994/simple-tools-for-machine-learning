# 收录一些常用机器学习工具以及使用，比如opencv里面方法（调用神经网络模型，模板匹配等），dlib等
> Q:为什么要新建一个文件夹呢
> 
> A:因为主体部分没打算集成opencv等其它依赖😁

<h1 align="center">
  <img src="../mltools_viewer/assets/icon/icon.png" height="192" width="192"><br/>mltools_extra
</h1>

# 0.resources
* [dlib的dat文件](http://dlib.net/files/shape_predictor_68_face_landmarks.dat.bz2),下载完成之后解压到本文件夹下

# 1.安装
`opencv-python`安装比较简单，但是`dlib`安装比较复杂。
以我个人为例，我的anaconda python版本是3.8.5，首先要安装`cmake`。这个包还有版本要求，本来我的`cmake`版本是`cmake-3.18.4.post1`，安装`dlib`死活装不上，升级到`cmake-3.24.0`之后就能正常安装了。Windows上大概率还需要安装Visual Studio,不过做flutter桌面版，这个是必须的。
然后用`pip install dlib`就能正常编译dlib。不过整个过程等待时间较长，需要耐心等一下。
> 有些教程中还说需要装`boost`，其实没这个必要