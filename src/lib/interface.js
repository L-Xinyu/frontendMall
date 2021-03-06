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
export const smscode = (data) => post(url + "api/auth/smscode", data);
//Login
export const login = (data) => post(url + "api/auth/login", data);
//Register
export const reg = (data) => post(url + "api/auth/register", data);
//Logout api
export const logout = (data) => post(url + "api/user/logout", data);

//Count ShoppingCart api
export const cartCount = (data) => post(url + "api/mall/init", data);
//Category and goods list
export const lists = (data) => post(url + "api/mall/lists", data);
//Good Detail
export const detail = (data) => get(url + "api/mall/detail/" + data.id);
//New Goods Recommend
export const recommend = (data) => get(url + "api/mall/recommend",data);

//Index category
export const category = (data) => get(url + "api/category", data);
//Category classification list
export const categorySearch = (data) => get(url + "api/category/search/" + data.id);
//Get category sku
export const sku = (data) => get(url + "api/sku", data);

//Index banner
export const banner = (data) => get(url + "api/index/getRotationChart", data);
//Index recommend
export const goodsRecommend = (data) => get(url + "api/index/cagegoryGoodsRecommend", data);

//Add Shopping Cart
export const addCart = (data) => post(url + "api/cart/add", data);
//ShoppingCart list
export const cartList = (data) => get(url + "api/cart/lists", data);
//Delete Cart goods
export const deleteCart = (data) => post(url + "api/cart/delete", data);
//Update cart data
export const updateCart = (data) => post(url + "api/cart/update", data);

//Add User Address
export const addAddress = (data) => post(url + "api/address/add", data);
//Address
export const address = (data) => get(url + "api/address/read", data);

//Post Order
export const order = (data) => post(url + "api/order", data);
//Get Order inform
export const orderInfo = (data) => get(url + "api/order/" + data.id);
//Ger user all Orders
export const orderList = (data) => get(url + "api/order/all", data);

//Get User Information
export const user = (data) => get(url + "api/user", data);
//Update User
export const updateUser = (data) => put(url + "api/user/1", data);

