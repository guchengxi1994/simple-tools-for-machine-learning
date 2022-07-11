"""
Descripttion: 
version: 
Author: xiaoshuyui
email: guchengxi1994@qq.com
Date: 2022-06-12 13:53:44
LastEditors: xiaoshuyui
LastEditTime: 2022-07-09 09:38:35
"""

from mltools.src.log.logger import logger

logger.info(
    """
    __  _____  ______            __    
   /  |/  / / /_  __/___  ____  / /____
  / /|_/ / /   / / / __ \/ __ \/ / ___/
 / /  / / /___/ / / /_/ / /_/ / (__  )
/_/  /_/_____/_/  \____/\____/_/____/
"""
)

__auglib_version__ = "0.0.4"

import multiprocessing

__CPUS__ = multiprocessing.cpu_count()
del multiprocessing
