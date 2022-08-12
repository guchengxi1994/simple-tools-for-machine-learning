const String serverIp = "http://192.168.50.75:14378";

// 使用的 kashgari 只支持3.6版本，所以有两个服务器
const String kashServerIp = "http://192.168.50.75:9001";

// const String serverIp = "http://192.168.10.2:14378";

const Map<String, String> mltoolsApis = {
  "sift": "$serverIp/sift",
  "augNoLabel": "$serverIp/aug/nolabel",
  "augNoLabelcrop": "$serverIp/aug/nolabel/crop",
  "augNoLabeldistort": "$serverIp/aug/nolabel/distort",
  "augNoLabelnoise": "$serverIp/aug/nolabel/noise",
  "augNoLabelrotation": "$serverIp/aug/nolabel/rotation",
  "augNoLabeltrans": "$serverIp/aug/nolabel/trans",
  "augNoLabelzoom": "$serverIp/aug/nolabel/zoom",
  "augNoLabelcode": "$serverIp/aug/nolabel/code",
  "siftCode": "$serverIp/sift/code",
  "zipdownload": "$serverIp/zipdownload/",
  "faceDetect": "$serverIp/dlib/faceDetect",
  "faceDetails": "$serverIp/dlib/faceDetails",
  "dlibCode": "$serverIp/dlib/code",
  "noise": "$serverIp/noise",
  "denoise": "$serverIp/denoise",
  "askQuestion": "$kashServerIp/question/ask",
  "questionHot": "$kashServerIp/question/hot",
  "canny": "$serverIp/edgeDetection/canny",
  "sobel": "$serverIp/edgeDetection/sobel",
};
