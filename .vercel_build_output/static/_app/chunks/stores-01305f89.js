import{C as e}from"./vendor-93654020.js";const s=JSON.parse(localStorage.getItem("bucketLiters"))||[1],a=e(s);a.subscribe(t=>{localStorage.setItem("bucketLiters",JSON.stringify(t))});const o=new Date(JSON.parse(localStorage.getItem("dateGrowStart")))||new Date,r=e(o);r.subscribe(t=>localStorage.setItem("dateGrowStart",JSON.stringify(t)));const c=JSON.parse(localStorage.getItem("nutesRatio"))||[50],i=e(c);i.subscribe(t=>localStorage.setItem("nutesRatio",JSON.stringify(t)));export{a as b,r as d,i as n};