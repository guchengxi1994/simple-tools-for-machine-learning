import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

class DioUtils {
  // ignore: prefer_final_fields
  static DioUtils _instance = DioUtils._internal();
  factory DioUtils() => _instance;
  Dio? _dio;

  DioUtils._internal() {
    _dio ??= Dio();
  }

  ///get请求方法
  get(url, {params, options, cancelToken}) async {
    try {
      Response response = await _dio!.get(url,
          queryParameters: params, options: options, cancelToken: cancelToken);
      return response;
    } on DioError catch (e) {
      debugPrint('getHttp exception: $e');
      return null;
    }
  }

  ///put请求方法
  put(url, {data, params, options, cancelToken}) async {
    try {
      Response response = await _dio!.put(url,
          data: data,
          queryParameters: params,
          options: options,
          cancelToken: cancelToken);
      return response;
    } on DioError catch (e) {
      debugPrint('getHttp exception: $e');
      return null;
    }
  }

  ///post请求
  post(url, {data, params, options, cancelToken}) async {
    try {
      Response response = await _dio!.post(url,
          data: data,
          queryParameters: params,
          options: options,
          cancelToken: cancelToken);
      return response;
    } on DioError catch (e) {
      debugPrint('getHttp exception: $e');
      return null;
    }
  }

  //取消请求
  cancleRequests(CancelToken token) {
    token.cancel("cancelled");
  }
}
