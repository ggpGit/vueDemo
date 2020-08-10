/*
 * @Author: Paul.Tse 
 * @Date: 2020-08-10
 * @Last Modified by: Paul.Tse 
 * @Last Modified time: 2020-08-10
 * @Description: password validate
 */

 const compare = (password) => {
     if(password === '123123') {
         return true;
     } else {
         return false;
     }
 }

 const validate = async(password) => {
     const match = await compare(password);
     return match;
 }

 module.exports = {
    validate
 }