//配置npm 和语法
/*
var ary=[1,2,3,4,5,6,7];
ary.name="私有属性";
Array.prototype.Name="原型公有";
for(let i in ary){
    console.log(i);
}
for(let i of ary){
    console.log(i);
}*/
/*let newAry=[1,2,3,4,5,6,7].filter(function (item) {
    return item>5;
});
console.log(newAry);*/

/*let ary=[1,2,3].map(function (item) {
    return `<li>${item}</li>`;
});
console.log(Math.max(...ary));
console.log(ary.join(''));
var a=[1,2,4,5];
console.log(...a);*/
/*var a =[1,2,3,4,55];
console.log(a.includes(5));*/

var a=[1,2,3,4,5].reduce(function (prev,curr,index,item) {
    console.log(prev,curr,index,item);
    return prev+curr;
});
console.log(a);
var result = [
    {
        subject: 'math',
        score: 88
    },
    {
        subject: 'chinese',
        score: 95
    },
    {
        subject: 'english',
        score: 80
    }
];
var sum=result.reduce(function (prev,curr) {
    return prev+curr.score;
},0);
console.log(sum);
var s=[];
[[1,2,3],[4,5,6],[7,8,9],[10,11,12]].forEach(function (item) {
    s.push(...item);
});

var newArray=[[1,2,3],[4,5,6],[7,8,9],[10,11,12]].reduce(function (prev,curr) {
    return prev.concat(curr);
});
console.log(newArray);
