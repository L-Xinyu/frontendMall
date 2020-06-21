/*
Interface request function module
Return value: promise object
 */
import {post, get, put} from './http'

//server
const url = process.env.NODE_ENV === 'production'
    ? ''
    : '/api/';  //localhost



//Send SmsCode
export const smscode = (data) => post(url + "api/smscode", data);
//Login
export const login = (data) => post(url + "api/login", data);
//Logout api
export const logout = (data) => get(url + "api/logout", data);
//Count ShoppingCart api
export const cartCount = (data) => post(url + "api/mall.init", data);
//Index category
export const category = (data) => get(url + "api/category", data);
//Index banner
export const banner = (data) => get(url + "api/index/getRotationChart", data);
//Index recommend
export const goodsRecommend = (data) => get(url + "api/index/cagegoryGoodsRecommend", data);
//Category classification list
export const categorySearch = (data) => get(url + "api/category/search/" + data.id);
//Category and goods list
export const lists = (data) => get(url + "api/lists", data);

