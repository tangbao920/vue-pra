let vm=new Vue({
    el:'#app',
    data:{
        todos:[
            {
               isSelected:false,
               title:"睡觉"
            },
            {
               isSelected:false,
               title:"吃饭"
            },
            {
               isSelected:false,
               title:"打豆豆"
            }
        ],
        title:''
    },
    methods:{
        add:function () {
           this.todos.push({isSelected:true,title:this.title});
           this.title='';
        },
        remove:function (val) {
           this.todos=this.todos.filter(item=>item!==val);
        }
    },
    computed:{
        sum:function () {
            return this.todos.reduce((prev,curr)=>{
                if(curr.isSelected){
                    return prev+1;
                }
                else{
                    return prev;
                }
            },0);
            //return this.todos.filter(item=>item.isSelected==true).length;
        }
    }
});