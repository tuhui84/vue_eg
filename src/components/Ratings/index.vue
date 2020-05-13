<template>
    <div class="ratings">
        <div class="ratings_box">
            <div class="rating-wrapper">
                <div class="left">
                    <div class="score">{{shopscore.avescore}}</div>
                    <div class="title">综合评分</div>
                    <div class="gaoyu">高于周边商家45%</div>
                </div>
                <div class="right">
                    <div class="score-wrapper">
                        <span class="title">服务态度</span>
                        <div class="star">
                            <span v-for="item in Math.ceil(shopscore.sevscore)"><img src="./starall.png"></span>
                            <span v-for="item in Math.floor(5-shopscore.sevscore)"><img src="./starno.png"></span>
                        </div>
                    </div>
                    <div class="score-wrapper">
                        <span class="title">商品评分</span>
                        <div class="star">
                            <span v-for="item in Math.ceil(shopscore.goodsscore)"><img src="./starall.png"></span>
                            <span v-for="item in Math.floor(5-shopscore.goodsscore)"><img src="./starno.png"></span>
                        </div>
                    </div>
                    <div class="totime">
                        <span class="title">送达时间</span>
                        <div>38分钟</div>
                    </div>
                </div>
            </div>
            <div class="split"></div>
            <div class="ratingselect">
                <div class="rating-type">
                    <div class="all activ" @click='disall'>
                        <span>全部</span>
                        <span>{{this.thenum.allnum}}</span>
                    </div>
                    <div class="good1" @click='disgood'>
                        <span>满意</span>
                        <span>{{this.thenum.good}}</span>
                    </div>
                    <div class="bad" @click="disbad">
                        <span>不满意</span>
                        <span>{{this.thenum.bad}}</span>
                    </div>
                </div>
                <div class="choose" @click="onlycontent">
                    <i class="fa fa-check-square" aria-hidden="true" :class="{only:only}" @click="only = !only"></i>
                    <span>只看有内容的评价</span>
                </div>
            </div>
            <div class="rating-content">
                <ul>
                    <li v-for="item,index in newdata">
                        <div class="headimg">
                            <img src="./starall.png">
                        </div>
                        <div class="allcontent">
                            <div class="nt"><span>{{item.name}}</span></div>
                            <div class="star">
                                <span><img src="./starall.png" v-for="star in Math.ceil(item.stars)"></span>
                                <span><img src="./starno.png" v-for="star in Math.floor(5-item.stars)"></span>
                            </div>
                            <div class="content">
                                <p>{{item.content}}</p>
                            </div>
                            <div class="time">{{item.time}}</div>
                            <!-- <div class="nice"><i class="fa fa-thumbs-up" aria-hidden="true"></i></div> -->
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    data(){
        return {
            shopscore:{
                sevscore:4,
                goodsscore:3,
                avescore:0
            },
            only:false,
            thenum:{
                allnum:'',
                good:'',
                bad:''
            },
            havecontent:[],
            nocontent:[],
            newdata:[],
            disdata:[
                {
                    headimg:'',
                    name:'23***34',
                    stars:3,
                    time:'2016-3-15 21:38',
                    good:true,
                    oldbuy:["南瓜粥","猪肉"],
                    content:'贼他妈好喝'
                },
                {
                    headimg:'',
                    name:'tui***34',
                    stars:2,
                    time:'2016-3-15 21:38',
                    good:true,
                    oldbuy:["南瓜粥","猪肉"],
                    content:'四方股份吃饱穿暖'
                },
                {
                    headimg:'',
                    name:'ddf***34',
                    stars:1,
                    time:'2016-3-15 21:38',
                    good:true,
                    oldbuy:["南瓜粥","猪肉"],
                    content:'人生观是大法官发送到'
                },
                {
                    headimg:'',
                    name:'123***dsfs',
                    stars:3.5,
                    time:'2016-3-15 21:38',
                    good:true,
                    oldbuy:["南瓜粥","猪肉"],
                    content:'十多分胜多负少的'
                },
                {
                    headimg:'',
                    name:'123***dsfs',
                    stars:3,
                    time:'2016-3-15 21:38',
                    good:true,
                    oldbuy:["南瓜粥","猪肉"],
                    content:''
                },
                {
                    headimg:'',
                    name:'123***dsfs',
                    stars:1,
                    time:'2016-3-15 21:38',
                    good:true,
                    oldbuy:["南瓜粥","猪肉"],
                    content:''
                }
            ]
                

        }
    },
    methods: {
        disall(){
            this.newdata = this.disdata;
            // this.disdata.forEach(function(v,i){
            //     if(_this.disdata[i].content !== ''){
            //         this.havecontent = [];
            //         this.havecontent.push(_this.disdata[i])
            //     }
            // })
        },
        // 渲染数量
        thisnum(){
            var _this = this;
            var numbad = 0;
            var numgood = 0;
            this.thenum.allnum = this.newdata.length;
            this.newdata.forEach(function(v,i){
                if(_this.newdata[i].stars < 2){
                    numbad +=1;
                }
            })
            this.thenum.bad = numbad;
            numgood = this.thenum.allnum - numbad;
            this.thenum.good = numgood;
        },
        disgood(){
            var _this = this;
            var arr = [];
            this.disdata.forEach(function(v,i){
                if(_this.disdata[i].stars >= 2 && _this.disdata[i].stars < 4){
                    arr.push(_this.disdata[i]);
                    _this.newdata = arr;
                }
            })
            // this.disdata.forEach(function(v,i){
            //     if(_this.disdata[i].content !== ''){
            //         this.havecontent = [];
            //         this.havecontent.push(_this.disdata[i])
            //     }
            // })
        },
        disbad(){
            var _this = this;
            var arr = [];
            var onlyc = [];
            this.disdata.forEach(function(v,i){
                if(_this.disdata[i].stars <2){
                    arr.push(_this.disdata[i]);
                    _this.newdata = arr;
                    
                }
            })
            // this.disdata.forEach(function(v,i){
            //     if(_this.disdata[i].content !== ''){
            //         this.havecontent = [];
            //         this.havecontent.push(_this.disdata[i])
            //     }
            // })
            
        },
        onlycontent(){
            var _this = this;
            var arr = [];
            if(_this.only == false){
                _this.newdata = _this.disdata;
            }else{
                this.disdata.forEach(function(v,i){
                    if(!(_this.disdata[i].content == '')){
                        arr.push(_this.disdata[i])
                        _this.newdata = arr;
                    }
                })
            }
            
        }

    },
    mounted() {
        //平均分
        this.shopscore.avescore = (this.shopscore.sevscore+this.shopscore.goodsscore)/2;
        //高亮
        $('.rating-type .all').click(function(){
            $(this).siblings().removeClass('activ');
            $(this).addClass('activ')
        })
        $('.rating-type .good1').click(function(){
            $(this).siblings().removeClass('activ');
            $(this).addClass('activ')
        })
        $('.rating-type .bad').click(function(){
            $(this).siblings().removeClass('activ');
            $(this).addClass('activ')
        });
        //页面加载渲染
        this.disall();
        // 渲染数量
        this.thisnum()
        

    },
}
</script>
<style lang="less">
    .ratings{
       position: absolute;
        top: 164px;
        bottom:0;
        background: #fff;
        width: 100%;
        z-index: 0;
        overflow: scroll;
        .ratings_box{
            .rating-wrapper{
                padding: 20px 0;
                display: flex;
                .left{
                    flex: 1;
                    text-align: center;
                    border-right: 1px solid rgba(7,17,27,.1);
                    .score{
                        font-size: 2.2rem;
                        color: #f90;
                        line-height: 36px;
                    }
                    .gaoyu{
                        color: #93999f;
                        line-height: 20px;
                    }
                }
                .right{
                    padding-left: 20px;
                    flex: 1.5;
                    >div{
                        line-height: 24px;
                    }
                    .score-wrapper{
                        .title{
                            vertical-align: middle;
                        }
                        .star{
                            display: inline-block;
                            span{
                                margin-left: 3px;
                                img{
                                    width: 14px;
                                    height: 14px;
                                    
                                }
                            }
                        }
                    }
                    .totime{
                        >div{
                            display: inline-block;
                            padding-left: 8px;
                            color: #93999f;
                        }
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
            .ratingselect{
                padding: 20px 20px;
                .rating-type{
                    >div{
                        display: inline-block;
                        width: 60px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        font-size: 1.2rem;
                        margin-left: 3px;
                        border-radius: 5px;
                    }
                    .all{
                        background-color: rgba(0,160,220,.2);
                        &.activ{
                            background-color: #00a0dc;
                            color: #fff;
                        }
                    }
                    .good1{
                        background-color: rgba(0,160,220,.2);
                        &.activ{
                            background-color: #00a0dc;
                            color: #fff;
                        }
                    }
                    .bad{
                        background-color: rgba(77,85,93,.2);
                        &.activ{
                            background-color: #4d555d;
                            color: #fff;
                        }
                    }
                }
                .choose{
                    margin-top: 10px;
                    margin-left: 5px;
                    line-height: 20px;
                    i{
                        font-size: 2rem;
                        color: #93999f;
                        &.only{
                            color:#00c850;
                        }
                    }
                    span{
                        font-size: 1.2rem;
                        color: #93999f;
                    }
                }
            }
            .rating-content{
                padding: 10px 20px;
                ul{
                    li{
                        position: relative;
                        display: flex;
                        padding: 10px 0 20px;
                        .headimg{
                            flex: 1;
                            >img{
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                vertical-align: top;
                            }
                        }
                        .allcontent{
                            flex: 8;
                            .nt{

                            }
                            .star{
                                margin: 2px 0 ;
                                span{
                                    display: inline-block;
                                    img{
                                        width: 12px;
                                        height: 12px;
                                    }
                                }
                            }
                            .content{
                                p{
                                    line-height: 20px;
                                }
                            }
                            .time{
                                position: absolute;
                                top: 1px;
                                right: 0;
                            }
                            .nice{
                                color: #00a0dc;
                            }
                        }
                    }
                }
            }
        }
    }
</style>