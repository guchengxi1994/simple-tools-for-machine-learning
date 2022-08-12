class NNParameterModel {
  String layerName;
  String layerType;
  String sizeIn;
  String sizeOut;
  String memory;
  String parameter;

  NNParameterModel(
      {required this.layerName,
      required this.layerType,
      required this.memory,
      required this.parameter,
      required this.sizeIn,
      required this.sizeOut});
}

const List<String> nnParameterColumnNames = [
  "名称",
  "类型",
  "输入尺寸",
  "输出尺寸",
  "内存",
  "参数量"
];
