Vue.component('section-header',{
    template:'<h3>Список ссылок</h3>'
});
var comp = {
    template:'<a href="#">Link1</a>'
};
var comp2 = {
    template:'<a href="#">Link2</a>'
};
var comp3 = {
    template:'<a href="#">Link3</a>'
};
 
new Vue({
    el: "#app",
    components:{
        'section-content':comp,
        'section-content2':comp2,
        'section-content3':comp3
    }
});



//Vue.component('tabl', {
    //template: "<ul><li><buter></li></ul>"
//})
//Vue.component('buter', {
  //template: '<a href="#">Сайт 1</a>'
//})
//new Vue ({
    //el:'#DAI',
    //components:{
        //'tabl':tabl1,
        //'buter':href1,

    //}
//});

//Vue.component('buter',{
//template: "<p> Fork </>"
//});
//new Vue ({
//    el:'#DAI'
//});