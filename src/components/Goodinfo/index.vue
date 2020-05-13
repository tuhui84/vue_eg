<template>
    <div class="Good_info">
        <div class="foodimg">
            <img :src="myinfos.imgurl" alt="">
            <div class="back" @click="$store.state.myinfo = false"><i class="fa fa-times" aria-hidden="true"></i></div>
        </div>
        <div class="content">
            <h1>{{myinfos.name}}</h1>
            <div class="niceinfo">
                <span>月售{{myinfos.sellCount}}份</span>
                <span>好评率{{myinfos.hao}}%</span>
            </div>
            <div class="money">${{myinfos.money}}</div>
            <transition name="aa"><div class="addcar" v-show="!myinfos.showde" @click="add(messge)">加入购物车</div></transition>
            <div class="cartcontroll">
                <transition name="fade">
                    <div class="decrease" v-show="myinfos.showde" @click="decrease(messge)">
                        <i class="fa fa-minus-circle" aria-hidden="true"></i>
                    </div>
                </transition>
                <div class="count">{{myinfos.num}}</div>
                <div class="add">
                    <i class="fa fa-plus-circle" aria-hidden="true" @click="add(messge)"></i>
                </div>
            </div>
        </div>
        <div class="split"></div>
        <div class="jie">
            <h1>商品介绍</h1>
            <div>
                <p>ad两个火辣辣的宫颈癌来电管家拉法基嘎嘎结案率伽古拉房价高了快递费赶紧回来发个号家乐福梵蒂冈</p>
            </div>
        </div>
        <div class="split"></div>
        <div class="ping">
            <h1 class="title">商品评价</h1>
            <div class="listtitle">
                <span>全部3</span>
                <span>推荐</span>
                <span>吐槽</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['messge'],
    data(){
        return{
            
        }
    },
    methods: {
        hide(){
            this.myinfo = false
        },
        add(messge){
            this.$store.commit('add',messge)
        },
        decrease(messge){
            this.$store.commit('decrease',messge)
        },
    },
    computed: {

        myinfos(){
            return this.$store.state.goods[this.messge.indexg].foods[this.messge.indexf]
            
        }
    },

}
</script>
<style lang="less">
    .Good_info{
        &.e-enter-active, .e-leave-active {
            transition: all .5s
        }
        &.e-enter, .e-leave-to {
            transform: scale(0);
        }
        // display: none;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
        z-index: 1;
        width: 100%;
        .foodimg{
            >img{
                width: 100%;
            }
            .back{
                width: 30px;
                height: 30px;
                line-height: 28px;
                text-align: center;
                font-size: 2rem;
                border-radius: 50%;
                // background-color: #fff;
                position: absolute;
                color: #fff;
                top: 20px;
                left: 10px;
            }
        }
        .content{
            padding: 20px 20px;
            position: relative;
            h1{
                font-size: 1.4rem;
            }
            .niceinfo{
                color: #93999f;
                line-height: 20px;
            }
            .money{
                margin-top: 10px;
                font-size: 1.4rem;
                color: #f01414;
            }
            .addcar{
                width: 80px;
                line-height: 26px;
                background-color: #00a0dc;
                text-align: center;
                position: absolute;
                bottom: 10px;
                right: 20px;
                z-index: 1;
                color: #fff;
                border-radius: 10px;
                // &.aa-enter-active, &.aa-leave-active {
                //     transition: all .3s
                // }
            }
            .cartcontroll{
                height: 30px;
                position: absolute;
                bottom: 10px;
                right: 20px;
                display: flex;
                .fade-enter-active, .fade-leave-active {
                    transition: all .5s
                }
                .fade-enter, .fade-leave-to {
                    transform: translateX(40px) rotateZ(360deg);
                    opacity: 0
                }
                div{
                    line-height: 30px;
                    text-align: center;
                }
                .decrease{
                    flex: 1;
                    font-size: 2.2rem;
                    color: #00a0dc;
                }
                .count{
                    flex: 2;
                    width: 30px;
                }
                .add{
                    flex: 1;
                    font-size: 2.2rem;
                    color: #00a0dc;
                }
            }
        }
        .split{
            width: 100%;
            height: 16px;
            background-color: #f3f5f7;
            border-bottom: 1px solid rgba(7,17,27,.1);
            border-top: 1px solid rgba(7,17,27,.1);
        }
        .jie{
            padding: 10px 20px;
            h1{
                font-size: 1.6rem;
                line-height: 30px;
            }
            >div{
                p{
                    line-height: 24px;
                    color: #4d555d;
                    text-indent: 10px;
                }
            }
        }
        .ping{
            padding: 10px 20px;
            >.title{
                font-size: 1.6rem;
                line-height: 30px;

            }
            .listtitle{
                margin-top: 10px;
                >span{
                    display: inline-block;
                    width: 50px;
                    margin-right: 5px;
                    text-align: center;
                    line-height: 30px;
                    background-color: #00a0dc;
                    border-radius: 5px;
                    &:nth-child(1){
                        color: #fff;
                    }
                    &:nth-child(2){
                        background-color: rgba(0,160,220,.2);
                    }
                    &:nth-child(3){
                        background-color: rgba(77,85,93,.2);
                    }
                }
            }
        }
    }
</style>