import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({

  providedIn: 'root'
})
export class ServiceService {

  public posturl: string = "/a/login";
  public geturl: string = "/a/article/search"
  constructor(public http:HttpClient) { }

  // 登录页面的发送数据方法
  postData(data) {
    const params = typeof (data) === 'object' && String(data) !== '[object File]' ? paramFormat(data) : data;          
    const requestHeader = {headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})}
    return this.http.post(
      this.posturl, params, requestHeader
    )
      
    // 以下函数是序列化，post方法需要用到,和上面的paramFormat(data)相呼应。这是固定写法，
    function paramFormat(data: any) {
      let paramStr = '',
        name, value, subName, innerObj;
      let that = this;
      for (name in data) {       
        value = data[name];
        if (value instanceof Array) {
          for (let i of value) {
            subName = name;
            innerObj = {};
            innerObj[subName] = i;
            paramStr += this.paramFormat(innerObj) + '&';
          }
        } else if (value instanceof Object) {
          Object.keys(value).forEach(function (key) {
            subName = name + '[' + key + ']';
            innerObj = {};
            innerObj[subName] = value[key];
            paramStr += that.paramFormat(innerObj) + '&';
          });
        } else if (value !== undefined && value !== null) {
          paramStr += encodeURIComponent(name) + '=' +
            encodeURIComponent(value) + '&';
        }
      }
      return paramStr.length ? paramStr.substr(0, paramStr.length - 1) : paramStr;
    }
  }
getA(){
  return this.http.get(this.geturl)
}
}
