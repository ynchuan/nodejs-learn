Vue.component('example', {
    render: function anonymous() {
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.list),function(item,index){return (_vm.show)?_c('div',[_vm._v(_vm._s(item))]):_vm._e()}),0)
},
    data() {
        return {
            show: true,
            list: [1,2,3,4,5],
        };
    }
});
