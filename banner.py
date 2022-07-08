"""
Descripttion: 
version: 
Author: xiaoshuyui
email: guchengxi1994@qq.com
Date: 2022-06-12 14:13:07
LastEditors: xiaoshuyui
LastEditTime: 2022-06-12 14:32:38
"""
"""
 ```pip install pyfiglet``` first
"""
from pyfiglet import Figlet

f = Figlet(font="slant", width=300)
print(f.renderText("MLTools"))
