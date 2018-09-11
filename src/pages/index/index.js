import vars from '@js/publicPath.js';
// const $ = require('jquery');
import $ from 'jquery';
import '@js/public.js';
import './index.css';
import './index.scss';
import indexEjs from './index.ejs';
import indexTpl from './index.tpl';

console.log(document.getElementById("home"));
document.getElementById("home").innerHTML = "我把你给替换掉了aa啊";

let test = ()=>{
    let arr = [1,2,3,4];
    arr.forEach((o)=>{
        console.log(o);
    }); 
}
console.log($);

$("#content").append(indexEjs({data:{
    id:"001",
    name:"熊超",
    sex:'男',
}}));
$("#content").append(indexTpl({data:{
    id:"002",
    name:"小熊",
    sex:'中性，哈哈',
}}));

let i=0;
setInterval(function(){
    $("#home").text(i);
    i++;
},1000);

