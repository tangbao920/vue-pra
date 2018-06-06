function ajax({url='',type='get',dataType='json'}) {
   return new Promise((resolve,reject)=>{
       var xhr=new XMLHttpRequest();
       xhr.open(type,url,true);
       xhr.responseType=dataType;
       xhr.onload=function () {
           //ajax请求成功
           resolve(xhr.response);
       }
       xhr.onerror=function(){
           reject();
       }
       xhr.send();
   });
}