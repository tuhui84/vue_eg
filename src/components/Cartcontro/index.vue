<template>
    <div class="cartcontroll">
        <transition name="fade">
            <div class="decrease" v-show="showde" @click="decrease">
                <i class="fa fa-minus-circle" aria-hidden="true"></i>
            </div>
        </transition>
        <div class="count">{{count}}</div>
        <div class="add" @click="add">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
  </div>    
</template>
<script>
    export default {
        data(){
            return{
                count:'',
                showde:false
            }
        },
        methods: {
            add(){
                if(this.count == ''){
                    this.count = 1;
                    this.showde =true;
                }else{
                    this.count += 1;
                    this.showde =true;
                }
                this.$emit('childByValue',this.count)
            },
            decrease(){
                if(this.count == ''){
                    this.count == ''
                    this.showde = false
                }else{
                    this.count -= 1;
                    if(this.count == 0){
                        this.count = '';
                        this.showde = false
                    }
                }
                this.$emit('childByValue',this.count)
            }
        },
    }
</script>
<style lang="less">
    .cartcontroll{
        // width: 50px;
        height: 30px;
        // background-color: red;
        position: absolute;
        bottom: 20px;
        right: 20px;
        display: flex;
        .fade-enter-active, .fade-leave-active {
            transition: all .5s
        }
        .fade-enter, .fade-leave-to {
            transform: translateX(50px) rotateZ(360deg);
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
</style>