var app = new Vue({
    el:'#elm1',
    data:{
count:0
    },
    methods:{
        countUp:function(){
            this.count += 2
        },
         countDown:function(){
            this.count -= 2
        },
        Reset:function(){
            this.count = 0
        }
    }

})