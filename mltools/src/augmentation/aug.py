from abc import abstractmethod
from mltools.src.augmentation import AugmentationTypes



class BaseAugmentation:
    def __init__(self, augType: AugmentationTypes) -> None:
        self.augType = augType

    @abstractmethod 
    def go(self,*args,**kwargs):
        """ 本来想命名为 `process` 的，但是因为和很多函数名冲突，就改为`go`了
        """
        pass
