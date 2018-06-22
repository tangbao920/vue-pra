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
        title:'',
        cur:'',
        escstr:''
    },
    methods:{
        add:function () {
           this.todos.push({isSelected:true,title:this.title});
           this.title='';
        },
        remove:function (val) {
           this.todos=this.todos.filter(item=>item!==val);
        },
        remember:function (todo) {//当前操作的这一项
           this.cur=todo;//界面上，cur和todo相等的这一项就是刚被点击的，input显示，span被隐藏
           this.escstr=this.cur.title;
           //alert(this.cur===todo);同一个引用地址
        },
        cancel:function (event) {
           this.cur='';//cur和界面上的tudo都不相等，所以input都不会再显示了。
        },
        esc:function (todo) {
           //this.cur.title=this.escstr;
           todo.title=this.escstr;
           this.escstr='';
           this.cur='';
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
    },
    directives:{
        focus:function (el,binding) {
            //el是当前绑定自定义自定的元素，binding获取传给指令的值
            //当点击当前li的时候，li里面的input获取焦点
            if(binding.value)//为true的时候，当前的li被点击
            {
               el.focus();
            }
        }
    },
    created:function(){//初始化数据
       this.todos=JSON.parse(localStorage.getItem('data'))||this.todos;
    },
    watch:{
        /*todos:function () {//不能监控数组内部成员的变化，因为对于vue来说，newVal和oldVal地址没有发生改变
           alert("nihao");
        }*/
        todos:{
            handler(newVal,oleVal){ //默认写成函数，就相当于写了个handler
               localStorage.setItem("data",JSON.stringify(this.todos));
            },
            deep:true
        }
    }
});