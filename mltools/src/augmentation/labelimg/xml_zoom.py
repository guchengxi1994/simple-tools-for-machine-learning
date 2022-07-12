def zoom_xml(src, zoomfactor, xmin, ymin, xmax, ymax):
    # print(zoomfactor)
    oriImgShape = src.shape
    if zoomfactor < 1:
        vDis = 0.5 * (oriImgShape[0] - oriImgShape[0] * zoomfactor)
        hDis = 0.5 * (oriImgShape[1] - oriImgShape[1] * zoomfactor)
        resYmin = zoomfactor * ymin + vDis
        resYmax = zoomfactor * ymax + vDis
        resXmin = zoomfactor * xmin + hDis
        resXmax = zoomfactor * xmax + hDis
    else:
        vDis = abs(0.5 * (oriImgShape[0] - oriImgShape[0] * zoomfactor))
        hDis = abs(0.5 * (oriImgShape[1] - oriImgShape[1] * zoomfactor))

        resYmin = zoomfactor * ymin - vDis
        resYmax = zoomfactor * ymax - vDis
        resXmin = zoomfactor * xmin - hDis
        resXmax = zoomfactor * xmax - hDis

    return resXmin, resXmax, resYmin, resYmax
