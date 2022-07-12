def trans_xml(src, xmin, ymin, xmax, ymax, th, tv):
    w = src.shape[1]  # width
    h = src.shape[0]  # height

    xmin = xmin + tv
    xmax = xmax + tv if xmax + tv <= w else w
    ymin = ymin + th
    ymax = ymax + th if ymax + th <= h else h

    return xmin, xmax, ymin, ymax
