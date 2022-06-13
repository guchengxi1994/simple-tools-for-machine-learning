import numpy as np
from mltools.src.augmentation import AugmentationTypes
from mltools.src.augmentation.aug import BaseAugmentation
from skimage import io


class ImageAugementation(BaseAugmentation):
    def __init__(self, augType: AugmentationTypes) -> None:
        super().__init__(augType)

    def go(*args, **kwargs):
        return super().go(**kwargs)
