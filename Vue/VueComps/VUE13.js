var componentA = {template:'<a href="#">Страница 1</a>'}
var componentB = {template:'<a href="#">Страница 2</a>'}
var componentC = {template:'<a href="#">Страница 3</a>'}


Vue.Component('lister', {template: '<p></p>',
});

new Vue({
    el:'#DAI',
    components: {
        'lister':componentA,
        'lister':componentB,
        'lister':componentC,
}
})




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