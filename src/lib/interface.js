/*
Interface request function module
Return value: promise object
 */
import {post, get, put} from './http'

//server
const url = process.env.NODE_ENV === 'production'
    ? ''
    : '/api/';  //localhost



//Logout api
export const logout = (data) => get(url + "api/logout", data);
//Count ShoppingCart api
export const cartCount = (data) => post(url + "api/mall.init", data);
//Index category
export const category = (data) => get(url + "api/category", data);
//Index banner
export const banner = (data) => get(url + "api/index/getRotationChart", data);

