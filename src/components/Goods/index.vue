<template>
    <div class="good">
        <div class="foodnav"  ref="navwrap" >
            <ul>
                <li v-for="item,index in goods"
                ref="li1"
                 :class="{'current':currentIndex===index}"
                @click="select(index,$event)"
                ><span><img v-show="item.activ" :src="item.activ" alt="" srcset="">{{item.navname}}</span></li>
            </ul>
        </div>
        <div class="foodlist"  ref="wrapper">
            <ul>
                <li  ref="li2" v-for="item,indexg in goods">
                    <p class="listson">{{item.navname}}</p>
                    <div class="goodinfo" v-for="(food,indexf) in item.foods">
                        <img :src="food.imgurl" @click="$store.state.myinfo = true,messge={indexg,indexf}">
                        <div class="info">
                            <p class="goodname">{{food.name}}</p>
                            <p>{{food.description}}</p>
                            <p>月售<span>{{food.sellCount}}</span>份&nbsp;好评率<span>{{food.hao}}</span>%</p>
                            <p class="money">$<span>{{food.money}}</span></p>
                        </div>
                        <div class="cartcontroll">
                            <transition name="fade">
                                <div class="decrease" v-show="food.showde" @click="decrease(indexg,indexf)">
                                    <i class="fa fa-minus-circle" aria-hidden="true"></i>
                                </div>
                            </transition>
                            <div class="count">{{food.num}}</div>
                            <div class="add" @click="add(indexg,indexf)">
                                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            </div>
                        </div>
                        
                    </div>
                </li>
            </ul>
        </div>
        <div class="carbox">
            <div class="bottomshop">
                <div class="left">
                    <div class="logo-wrapper">
                        <div class="inshop" :class="{havegood:footheigh.need_all}" @click="showcar">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                        <div class="num" v-show="footheigh.need_all"><span>{{allgoodsnum}}</span></div>
                    </div>
                    <span class="allmoney" :class="{havegood:footheigh.all_need}">${{allneed}}</span>
                    <span class="addmoney">另需配送费4元</span>
                </div>
                <div class="right">
                    <div class="pay not_enough"  v-show="goodmoney < 20">还差${{add_money}}元起送</div>
                    <div class="pay enough"  v-show="goodmoney >=20">去结算</div>
                </div>
            </div>
            <transition name="v">
                <div class="shopcarlist" v-show="footheigh.carshow">
                    <div class="listhead">
                        <p>购物车</p>
                        <span @click="clearlist">清空</span>
                    </div>
                    <div class="list">
                        <ul v-for='item,index in goods'>
                            <li class="food" v-for="item1,index1 in item.foods" v-if="item1.num != ''">
                                <span class="foodname">{{item1.name}}</span>
                                <span class="money">${{item1.money}}</span>
                                <div class="cartcontroll">
                                    <transition name="fade">
                                        <div class="decrease" @click="decrease(index,index1)">
                                            <i class="fa fa-minus-circle" aria-hidden="true"></i>
                                        </div>
                                    </transition>
                                    <div class="count">{{item1.num}}</div>
                                    <div class="add" @click="add(index,index1)">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                    </div>
                                </div> 
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
            <transition name="c">
                <div class="background" v-show="footheigh.carshow" @click="hidecar"></div>
            </transition>
        </div>
        <transition name="e">
            <Goodinfo v-if="$store.state.myinfo" :messge='messge'></Goodinfo>
        </transition>
    </div>
</template>

<script>
import Cartcontro from '../Cartcontro';
import BScroll from 'better-scroll';
import Goodinfo from '../Goodinfo'
export default {
    components:{
        Cartcontro,
        Goodinfo
    },
    data(){
        return{
            messge:{},
            currentIndex: 0, //当前显示的下标
            listHeight: [],
            scrollY: 0,
            menuIndexChange: true,

            // 高亮
            footheigh:{
                need_all:false,
                song_need:false,
                carshow:false
            },
            goods:[
                {
                    navname:'热销榜',
                    activ:'',
                    foods:[
                        {
                            name:'猪肉饼',
                            description:'死猪肉',
                            sellCount:22,
                            hao:99,
                            money:14,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'皮蛋廋肉粥',
                            description:'吃不吃',
                            sellCount:22,
                            hao:99,
                            money:14,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'充话费',
                            description:'',
                            sellCount:22,
                            hao:34,
                            money:14,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'扁豆梦柔',
                            description:'',
                            sellCount:22,
                            hao:34,
                            money:14,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114'
                        }
                    ]
                },
                {
                    navname:'单人精彩套餐',
                    activ:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDUxMzhFRUM1M0IzMTFFNkExMTdCNjk0ODU0MDU5Q0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDUxMzhFRUQ1M0IzMTFFNkExMTdCNjk0ODU0MDU5Q0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NTEzOEVFQTUzQjMxMUU2QTExN0I2OTQ4NTQwNTlDRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NTEzOEVFQjUzQjMxMUU2QTExN0I2OTQ4NTQwNTlDRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pox67+QAAARASURBVHjarFZbbBRVGP5mdvbS3e52t7Td2lDaIG2kSAtBIVHjBRMhhFBJMDU+EY3B8KCJvhiffODReCFqTPDBKAYvCTFqxCgB0lBjQhQUFlIs1KIi272wu3Rvs7MzfmdmOzPb1oQmnPS02/+c8//f//3f+c9KeOPnbQAOcsZxZ0eS80WFvw5x9jYtGQZQ55T4WZatv0ZjTVrClW5Y656mxTbOD3kaHQv3+xQZoRYFitdjBZsPWtGAWyqg1hlYshwXa+ayrPD/asPujBUigNrknZt23R1DYu8wxp8ewqN9BFKo4sHeCPZt6cEj96xANOwHUkWgrGFtdwif7FyDH/ashZ/AUGJAyQ6iKovSJSgP9/VF/Obc0BnEqXwV98db8dZjq8wt755NYuJyBluHOvH8+k776MTe9dhxOIFZkaFXNm1OABFU8E4EOZFqY8RDXnjvakWqXLNtL4x0Yf/GOGTziIF8pY6pXAVfTd1EVWRRc847AVQd8agfoyNxPLQybJtf3dyDZ9Z14Oy/RbOOAsexP/N4ffwa8nWdLBmYq2oo8DwqBOFXLPTGwgCajqjfg5fu60Zni9c2z5D/C9mKmYlBtBL5/WwyjV9/mwXaAw61PEt1NEThFFq2P1E1k5kKhg+dw8unZmzz27/cwM6DZ/DeuSQFYh0cag9i5UAM61j4/u5WbF4dxflnR3Bk1wBiAQap6UtQ1Bh1KiPHlOdHiv8LVG7xvUbaXqGivJRplXXzUv9eyvPejiC+vJzF0fOz1p0gIGXRBaNRNxzT/g1xPLwqAtWF6qNECj9eTGF0OI4xylaMk9cKOHD6L5y8MUeqPLZUZbf/FhanLebHtv422/ZATysGWfysK6vjMwUcOTGD71ns+XH6+i2cIHJDb77Rio28qmNsUxzvbO1HRCCwneWx/fAFjG10WlUswPU2P3+cfeYZCqGprdgZiHS0OqZ5odzOxfh8Mot6uoQul7I0w7jtjufUgI4TmTK+5mURWT7BFhEkZQHRY6jt3rDP3npdtANZvq0AslvH6TkVo58m8MHvSfq0eCzViDYawCb2HNM590xMk/uAZ5kZUG7RkA8Vj2bS4WmoYE7VEIv4sIXtQoyPL6WRvVm2lLKsANT7mp4wvtk92CStIB09NdBOwDKmWKMDP/1N9KxHXV8mReT7KmtwMV1GV9DrYk5iF+3jhdLx3Ld/oMgg8zL0ueRo3uAliq+4a5Atqnj8i0s4+uQgVlOGx6ZzOH4lhzdJ3fg/BYxTAAj57O6bYrGv5KqYJGXfXc3R22LaJL7J4rZE7JbN7ujzyQiy7eYEWsl6hEzOWxRH40Qr6AtzJll40SzNPc1J5JWmLBrvqsr+ruqadcBjydRccx9m7ynxCS2JJ1S8AYq80LnJoqhBapFZ9HNxS8X7+n+PvQmG+wT3wrm01LcBZAT6fZzviwf6Dn9tyYhe+Z8AAwA383zjPVFQZwAAAABJRU5ErkJggg==',
                    foods:[
                        {
                            name:'红枣大米粥',
                            description:'',
                            sellCount:34,
                            hao:34,
                            money:67,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114'
                        }
                    ]},
                    {
                    navname:'冰爽饮品限时特惠',
                    activ:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzcyNTA0REE1M0IzMTFFNkExMTdCNjk0ODU0MDU5Q0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzcyNTA0REI1M0IzMTFFNkExMTdCNjk0ODU0MDU5Q0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNzI1MDREODUzQjMxMUU2QTExN0I2OTQ4NTQwNTlDRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNzI1MDREOTUzQjMxMUU2QTExN0I2OTQ4NTQwNTlDRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgXnpvoAAAGaSURBVHjarFZLTsMwEHWiHCDs6IoeIRIXSJcgEL0BVEhlSXuCtCegXYKEmp6gjXqAlj2IHCEbBMtwAhhLL9Uwip00xNJTfvZ7bzxjO456fTxTSj0TOqrd9km49UB+R9g0Yfk5HZa+d96eLjW3C+eblt1rYc3Z8Sx9IkJASAgp4YrwQsiAwqlPlxVhStjJqGwCmrwPzAgjvP8jQK0LhIQJhPbNNZD7IC4IE/Ytg9MCXOxbEpki6LP7WHzbSZdwrzCVqk4E9+x+/p9kl0UQYv6Llhvcmp4rBR4qTHWRzEI8P0TgRrjnUcRIqC7VLZvzKSuMtEpgTThBkgPmWA9eGqqtuEZYKwObQA5HoZjjhWWtbMVzAqPWKlKiTB1gUvJdT8sR67OuU6am5I4sUfhlgw4RWIEkF+5zJhI0FVhgsCbriZzNWCTvYheoJRChfDOQy1Kcs3exzIFXQ2CJ+R8bFlWO0rxGn1qbXSq25kHJhsf7pWWLzCYwroiqV3VkNqmiRs3F6X/RNjEdpZrzy6HflnP8WRy3rPFBGP4KMACs82JnMxsBQAAAAABJRU5ErkJggg==',
                    foods:[
                        {
                            name:'VC大瓶矿泉水',
                            description:'',
                            sellCount:1000000,
                            hao:100,
                            money:1000,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114'
                        }
                    ]},
                    {
                    navname:'精选热菜',
                    activ:'',
                    foods:[
                        {
                            name:'猪肉炖粉条',
                            description:'好吃又焊头',
                            sellCount:121,
                            hao:100,
                            money:33,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'手撕鬼子',
                            description:'力气大',
                            sellCount:345,
                            hao:88,
                            money:1,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'死鱼',
                            description:'香香的',
                            sellCount:121,
                            hao:100,
                            money:5,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114'
                        }
                    ]},
                    {
                    navname:'爽口凉菜',
                    activ:'',
                    foods:[
                        {
                            name:'八宝粥',
                            description:'',
                            sellCount:345,
                            hao:34,
                            money:12,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'大黄瓜',
                            description:'绿绿的',
                            sellCount:56,
                            hao:100,
                            money:52,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114'
                        }
                    ]},
                    {
                    navname:'精选套餐',
                    activ:'',
                    foods:[
                       {
                            name:'套餐2',
                            description:'好吃又焊头',
                            sellCount:121,
                            hao:100,
                            money:33,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'套餐2',
                            description:'力气大',
                            sellCount:345,
                            hao:88,
                            money:1,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'死鱼',
                            description:'香香的',
                            sellCount:121,
                            hao:100,
                            money:5,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114'
                        }
                    ]},
                    {
                    navname:'果拼果汁',
                    activ:'',
                    foods:[
                        {
                            name:'蜜瓜圣女萝莉杯',
                            description:'蜜瓜圣女萝莉杯',
                            sellCount:121,
                            hao:100,
                            money:33,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'加多宝',
                            description:'加多宝',
                            sellCount:345,
                            hao:88,
                            money:1,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'VC无限橙果汁',
                            description:'香香的',
                            sellCount:121,
                            hao:100,
                            money:5,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114'
                        }
                    ]},
                    {
                    navname:'小吃主食',
                    activ:'',
                    foods:[
                        {
                            name:'猪肉炖粉条',
                            description:'好吃又焊头',
                            sellCount:121,
                            hao:100,
                            money:33,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'手撕鬼子',
                            description:'力气大',
                            sellCount:345,
                            hao:88,
                            money:1,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114'
                        },
                        {
                            name:'死鱼',
                            description:'香香的',
                            sellCount:121,
                            hao:100,
                            money:5,
                            num:'',
                            showde:false,
                            imgurl:'https://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114'
                        }
                    ]}
                    
                // {navname:'冰霜饮品限时特惠'},
                // {navname:'精选热菜'},
                // {navname:'爽口凉菜'},
                // {navname:'精选套餐'},
                // {navname:'果品果子'},
                // {navname:'小吃猪食'},
                // {navname:'单人套餐'},
                // {navname:'单人套餐'},
                // {navname:'单人套餐'},
            ],
        }
    },
    created() {
        this.$nextTick(() => {
      // 3 在这个函数中调用以防内容还未加载完就执行，获取不到元素的高度导致无法滑动
            this._initScroll();
            this.height();
        });
    },
    computed:{
        add_money(){
            var b = this.a()
            return 20-(b)
        },
        goodmoney(){
            return (this.add_need())
        },
        allneed(){
            var allneedmoney = 0;
            if(!(this.add_need() == 0)){
                allneedmoney = 4+this.add_need()
                // console.log(this.footheigh.need_all)
                this.footheigh.need_all = true;
            }
            return allneedmoney
        },
        // 总共选择的商品数
        allgoodsnum(){
            if(this.allgoods_num() == 0){
                this.footheigh.carshow = false;
            }
            return this.allgoods_num();
        },
        // 没用
        showlist(){
            var list = [];
            this.goods.forEach(function(v,i){
                v.foods.forEach(function(v1,i1){
                    if(v1.num != ''){
                        list.push(v1)
                    }
                })
            })
            return list;
        }
    },
    
    methods: {
        // 滑动效果
         _initScroll() {
            //注意此处是 this.$refs.xxx
            this.navwrapScroll = new BScroll(this.$refs.navwrap, {
                click: true
            });
            this.wrapperScroll = new BScroll(this.$refs.wrapper, {
                click: true, //better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
                probeType: 3 //这个属性设置之后可以监听得到了
            });
        
            //监听滚动事件
            this.wrapperScroll.on("scroll", pos => {
                // 当允许滚动并滚动的y轴小于0
                if (this.menuIndexChange && pos.y <= 0) { 
                this.scrollY = Math.abs(Math.round(pos.y));  //滚动距离
                // console.log(this.scrollY);
        
                // 循环每一个模块距离顶部的高度
                for (let i = 0; i < this.listHeight.length; i++) {
                    let height1 = this.listHeight[i];
                    let height2 = this.listHeight[i + 1];
                    if (
                    !height2 ||
                    (this.scrollY >= height1 && this.scrollY < height2)
                    ) {
                    // console.log(i);
                    this._followScroll(i); //左侧动画移动
                    this.currentIndex = i;
                    return;
                    }
                }
                }
            });
        },
            //获取右侧每个模块的高度
        height() {
            let wrap2 = this.$refs.li2;
            // console.log(this.$refs.li2);
            let height = 0;
            this.listHeight.push(height);
            for (let i = 0; i < wrap2.length; i++) {
                let item = wrap2[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }
            // console.log(this.listHeight);
        },
        
        
            //  点击左侧滚动
        select(index, event) {
            // PC页面时,点击不会被 better-scroll阻止事件,初始化,给 better-scroll派发事件,使移动端拥有点击事件,因此切换到PC端时,点击事件会被执行两次,
            if (!event._constructed) {
                return;
            }
        
            this.currentIndex = index;  //改变点击的当前样式
            this.menuIndexChange = false;  //禁用右侧滚动  防止左右两侧都改变index  解决运动时listenScroll依然监听的bug
        
            //左侧网上偏移100
            this._followScroll(index); //左侧动画移动
        
            //右侧滚到响应位置
            let wrap2 = this.$refs.li2;
            let el = wrap2[index];
            this.wrapperScroll.scrollToElement(el, 300);
        
            //右侧滚动结束后在允许动画
            this.wrapperScroll.on("scrollEnd", () => {
                this.menuIndexChange = true;
            });
        },
            //左侧网上偏移
        _followScroll(index) {
            let wrap1 = this.$refs.li1;
            let el = wrap1[index];
            this.navwrapScroll.scrollToElement(el, 300, 0, -100); //往上偏移100
        },

        
        //清空购物车
        clearlist(){
            var allgoodnum = 0;
            for(var i in this.goods){
                this.goods[i].foods.forEach(function(v,i){
                    v.num = ''
                })
            }
            for(var i in this.goods){
                this.goods[i].foods.forEach(function(v,i){
                    v.showde = false;
                })
            }
        },
        // 显示购物车
        showcar(){
            var a = this.allgoods_num();
            if(a){
                this.footheigh.carshow = true;
            }
            // console.log(this.allgoods_num())
        },
        // 隐藏购物车
        hidecar(){
            this.footheigh.carshow = false;
        },
        // 总共商品数
        allgoods_num(){
            var _this = this;
            var allgoodnum = 0;
            for(var i in this.goods){
                this.goods[i].foods.forEach(function(v,i){
                    if(!(v.num == '')){
                        allgoodnum += v.num
                    }
                })
            }
            if(allgoodnum == 0){
                this.footheigh.need_all = false;
                // this.footheigh.carshow = false;
            }else{
                // this.footheigh.carshow = true;
            }
            return allgoodnum;
        },
        // 差多少元起送
        a(){
            var _this = this;
            var allmoney = 0;
            for(var i in this.goods){
                // console.log(this.goods[i].foods)
                this.goods[i].foods.forEach(function(v,i){
                    if(!(v.num == '')){
                        allmoney += (v.num*v.money)
                    }
                })
            }
            if(allmoney>=20){
                allmoney = 20;
                this.footheigh.song_need = true;
            }else{
                this.footheigh.song_need = false;
            }
            // 修改高亮
            
            // console.log(allmoney)
            return allmoney;
        },
        //总共需要付多少钱
        add_need(){
            var _this = this;
            var all_need = 0;
            for(var i in this.goods){
                this.goods[i].foods.forEach(function(v,i){
                    if(!(v.num == '')){
                        all_need += (v.num*v.money)
                    }
                })
            }
            return all_need;
        },
        // 商品加减
        add(indexg,indexf){
            var obj = {
                indexg,
                indexf
            }
            this.$store.commit('add',obj)
        },
        decrease(indexg,indexf){
            var obj = {
                indexg,
                indexf
            }
            this.$store.commit('decrease',obj)
            
        }
    },
    mounted() {
        //把数据放入vuex
        this.$store.commit('recive',this.goods)
    },
    
}
</script>
<style lang="less">
    .good{
       
        background-color: #fff;
        position: absolute;
        top: 164px;
        bottom: 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        // 左边商品列表
        .foodnav{
            width: 30%;
            // overflow-y: scroll;
            >ul{
                >li{
                    &.current{
                        background-color: #fff;
                    }
                    font-size: .9rem;
                    height: 50px;
                    line-height: 14px;
                    width: 60px;
                    padding: 0 10px;
                    text-align: center;
                    background-color: #F3F5F7;
                    display: table;
                    span{
                        display: inline-block;
                        height: 50px;
                        display: table-cell;
                        vertical-align: middle;
                        >img{
                            display: inline-block;
                            margin-right: 3px;
                            width: 14px;
                            height: 14px;
                        }
                    }
                    &.currten{
                        background-color: #fff;
                    }
                }
            }
        }
        // 右边商品列表
        .foodlist{
            width: 100%;
            margin-left: -8px;
            overflow-y: scroll;
            ul{
                
                li{
                   >p{
                       color: #bbb;
                       padding-left: 5px;
                        border-left: 2px solid #ccc;
                        background-color: #F3F5F7;
                        line-height: 24px;
                    } 
                    .goodinfo{
                        position: relative;
                        background-color: #fff;
                        padding: 15px 20px 15px 15px;
                        border-bottom: 1px solid rgb(250, 244, 244);
                        img{
                            vertical-align: top;
                            width: 60px;
                            height: 60px;
                        }
                        .info{
                            margin-left: 4px;
                            display: inline-block;
                            p{
                                color: #93999f;
                                font-size: .8rem;
                                line-height: 20px;
                                &.goodname{
                                    font-size: 1.4rem;
                                    font-weight: bold;
                                    color: #000;
                                
                                }
                                &.money{
                                    color: #f01414;
                                    font-weight: bold;
                                    margin-top: 5px;
                                    font-size: 1.4rem;
                                }
                            }
                        }
                        >.cartcontroll{
                            height: 30px;
                            position: absolute;
                            bottom: 20px;
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
                }
            }
            
        }
        // 购物车
        .carbox{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 2;
            .bottomshop{
                position: relative;
                z-index: 2;
                width: 100%;
                height: 50px;
                background-color: #141d27;
                display: flex;
                // justify-content: space-between;
                .left{
                    flex: 3;
                    .logo-wrapper{
                        width: 56px;
                        height: 56px;
                        background-color: #141d27;
                        position: relative;
                        top: -10px;
                        margin: 0 10px;
                        border-radius: 50%;
                        padding: 6px;
                        box-sizing:border-box;
                        display: inline-block;
                        .num{
                            position: absolute;
                            top: 0;
                            right: 0;
                            width: 20px;
                            height: 16px;
                            line-height: 16px;
                            background-color: #f01414;
                            border-radius: 30%;
                            color: #fff;
                            text-align: center;

                        }
                        .inshop{
                            background-color: #2b343c;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            text-align: center;
                            font-size: 22px;
                            line-height: 44px;
                            color: #80858a;
                            
                            
                            &.havegood{
                                background-color: #00a0dc;
                                color: #fff;
                            }
                            
                        }
                    }
                    >span{
                        display: inline-block;
                        vertical-align: top;
                        font-size: 1.6rem;
                        line-height: 22px;
                        margin-top: 10px;
                        color: #80858a;
                        &.allmoney{
                            color: #80858a;
                            font-weight: bold;
                            width: 40px;
                            border-right:1px solid #80858a;
                        }
                        &.allheight{
                            color: #fff;
                        }
                        &.addmoney{
                            font-size: 1rem;
                            padding-left: 10px;
                            // width: 100px;
                        }
                    }
                }
                .right{
                    flex: 1.2;
                    .pay{
                    line-height: 50px;
                    text-align: center;
                    }
                    .not_enough{
                        background-color: #2b333b; 
                        color: hsla(0,0%,100%,.4);
                        font-size: 1rem;
                    }
                    .enough{
                        background-color: #00b43c;
                        color: #fff;
                    }
                    
                }
            }
            //购物车列表
            .shopcarlist{
                // display: block;
                width: 100%;
                // height: 40px;
                background-color: #fff;
                position: absolute;
                bottom: 50px;
                z-index: 1;
                &.v-enter-active, &.v-leave-active{
					transition: all .5s;
				}
				&.v-enter, &.v-leave-to{
					transform: translate3d(0,100%,0);    
				}
                .listhead{
                    display: flex;
                    justify-content: space-between;
                    padding: 0px 20px;
                    background-color: #f3f5f7;
                    border-bottom: 1px solid #eee;
                    line-height: 40px;
                    >p{
                        color: #07111b;
                        font-size: 1.4rem;
                    }
                    >span{
                        color: #00a0dc;
                    }
                }
                .list{
                    background-color: #fff;
                    padding-bottom: 15px;
                    >ul{
                        >li{
                            padding-left: 20px;
                            line-height: 30px;
                            font-size: 1.4rem;
                            display: flex;
                            position: relative;
                            .cartcontroll{
                                // width: 50px;
                                height: 26px;
                                line-height: 26px;
                                // background-color: red;
                                position: absolute;
                                top: 2px;
                                right: 20px;
                                display: flex;
                                .fade-enter-active, .fade-leave-active {
                                    transition: all .5s
                                }
                                .fade-enter, .fade-leave-to {
                                    transform: translateX(30px) rotateZ(360deg);
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
                            .foodname{
                                flex: 2;
                            }
                            .money{
                                flex: 1.2;
                            }
                            .contra{
                                display: inline-block;
                                flex: 1;
                            }
                        }
                    }
                }
            }
            .background{
                
                position: fixed;
                top: 0;
                z-index: 0;
                min-height: 100%;
                width: 100%;
                background-color: rgba(7,17,27,.6);
                backdrop-filter:blur(10px);
                &.c-enter-active, &.c-leave-active{
					transition: opacity .5s;
				}
				&.c_000-enter, &.c-leave-to{
					opacity: 0;
				}
            }
        }
       
    }
</style>