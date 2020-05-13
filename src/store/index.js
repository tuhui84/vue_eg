import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        goods:'',
        myinfo:false
    },
    mutations:{
        // 接收原始数据
        recive(state,goods){
            state.goods = goods;
            // console.log(state.goods)
        },
        add(state,obj){
            var num = state.goods[obj.indexg].foods[obj.indexf].num;
            if(num == ''){
                state.goods[obj.indexg].foods[obj.indexf].num = 1;
                state.goods[obj.indexg].foods[obj.indexf].showde =true;
            }else{
                state.goods[obj.indexg].foods[obj.indexf].num += 1;
                state.goods[obj.indexg].foods[obj.indexf].showde =true;
            }
        },
        decrease(state,obj){
            var num = state.goods[obj.indexg].foods[obj.indexf].num;
            if(num == ''){
                state.goods[obj.indexg].foods[obj.indexf].num == ''
                state.goods[obj.indexg].foods[obj.indexf].showde =false;
            }else{
                state.goods[obj.indexg].foods[obj.indexf].num -= 1;
                if(state.goods[obj.indexg].foods[obj.indexf].num == 0){
                    state.goods[obj.indexg].foods[obj.indexf].num = '';
                    state.goods[obj.indexg].foods[obj.indexf].showde =false;
                }
            }
        }

    }
})

export default store;