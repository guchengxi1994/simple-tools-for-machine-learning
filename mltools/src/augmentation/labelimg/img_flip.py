def flip_xml(src, xmin, ymin, xmax, ymax, flipType=0):
    """
    src : src image
    flipType: 0 or 1(>0) or -1(<0)
    """
    w = src.shape[1]
    h = src.shape[0]

    if flipType == 0:
        return xmin, h - ymax, xmax, h - ymin
    elif flipType == 1:
        return w - xmax, ymin, w - xmin, ymax
    else:
        return w - xmax, h - ymax, w - xmin, h - ymin
