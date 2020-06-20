import iView from "iview"
/*
ajax request function module
Return value: promise object
(return: response.data)
 */
import axios from 'axios'

export function get(url, data = {}) {
    return ajax(url, data, 'GET');
}

export function post(url, data = {}) {
    return ajax(url, data, 'POST');
}

export function put(url, data = {}) {
    return ajax(url, data, 'PUT');
}

export function ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        iView.Spin.show({
            render: (h) => {
                return h('div', [
                    h('i', {
                        'class': 'demo-spin-icon-load ivu-icon ivu-icon-ios-loading',
                        style: {
                            fontSize: '64px'
                        }
                    }),
                    h('div', "Loading...")
                ])
            }
        })
        // asyn ajax request
        let promise;
        if (type === 'GET') {
            // url query data
            let dataStr = ''; //Data stitching string
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            });
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr
            }
            // send get
            promise = axios.get(url)
        } else if (type === 'POST') {
            // send post
            promise = axios.post(url, data)
        } else {
            promise = axios.put(url, data)
        }
        promise.then(function (response) {
            iView.Spin.hide()
            // success -> resolve()
            if (response) {
                resolve(response.data)
            } else {
                // alert("当前请求的返回值出现错误,请检查！", "error")
            }
        }).catch(function (error) {
            iView.Spin.hide()
            //failed -> reject()
            reject(error)
        })
    })
}
