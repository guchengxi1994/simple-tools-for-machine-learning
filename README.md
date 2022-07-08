# simple-tools-for-machine-learning(MLTools)
Simple tools for machine learning. Including computer vision, deep learning,...

------

用于机器学习/深度学习/机器视觉用的小工具

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)

## requirements
> * numpy
> * scipy
> * scikit_image

## note:
> * 这个repo是[mask2json](https://github.com/guchengxi1994/mask2json)的一次重构，原始的代码是使用python3.6完成的，同时`numpy`等包的版本也比较低（高版本出了很多问题，尤其是`numpy`，有的时候3.8版本可以正常通过测试3.9版本就会出错）；加上同时使用了`opencv-python`和`scikit_image`做图像处理，有点冗余；而且一直想做的可视化界面也半途而废了，所以才有了重构的想法
> * 可视化界面有可能会用flutter做，参考[我用flutter做的移动端标注工具](https://github.com/AI-change-the-world/ai-apps)，不过可能不会提供修改的功能（稍微有点复杂）
> * skimage 保存`png`的时候很慢，保存成`jpg`的时候要快很多,尽量使用`jpg`保存。参考这个 [issue](https://github.com/scikit-image/scikit-image/issues/3419)
> * `inpaint`增广，印象中使用`opencv`没有这么慢的，尽量少用

## 重构进度
* 2022-07-04 无标注增广完成(去掉了原版`透视变换`增广)
* 2022-06-13 开始重构，抄/改（主要还是统一`cv2`和`skimage`）了部分代码