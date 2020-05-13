<template>
  <div id="app">
    <Header></Header>
    <div class="tab">
      <div class="tab_item">
        <router-link to="/good">商品</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/retings">评论</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header'

export default {
  // name: 'App'
  components:{
    Header
  }
}
</script>
<style lang="less">
  #app{
    .tab{
      background-color: #fff;
      // position: fixed;
      // top: 126px;
      // z-index: 4;
      width: 100%;
      display: flex;
      height: 40px;
      line-height: 40px;
      font-size: 1.4rem;
      .tab_item{
        flex: 1;
        text-align: center;
        .router-link-active{
          color: red;
        }
        >a{
          color: #4d555d;
          text-decoration: none;
          &.activ{
            color:#f01414;
          }
        }
      }
    }
   
  }
</style>
