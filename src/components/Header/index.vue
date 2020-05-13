<template>
    <div class="header">
        <div class="content-head">
            <div class="abinfo">
                <img src="https://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="图片没加载出来" srcset="">
                <div class="abcontent">
                    <ul>
                        <li class="abname">
                            <img src="./brand@2x.png" alt="">
                            <span>粥品香坊（回龙观）</span>
                        </li>
                        <li><span>蜂鸟专送/38分钟送达</span></li>
                        <li><img src="./decrease_1@2x.png" alt=""><span>在线支付满28减5</span></li>
                    </ul>
                </div>
            </div>
            <div class="count_num" @click="showdata">
                <span class="count">5</span>
                <i class="fa fa-chevron-right"></i>
            </div>
        </div>
        <div class="head_foot" @click="showdata">
            <span><img src="./bulletin@2x.png" alt=""></span>
            <span>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
            <i class="fa fa-chevron-right"></i>
        </div>
        <div class="background">
            <img src="./bg.png" alt="">
        </div>
        <transition name="fade">
        <div class="shopinfo" v-show="datashow">
            <div class="detail">
                <div class="detail_main">
                    <h1>粥品香坊（回龙观）</h1>
                    <div class="star">
                        <span><img src="./starall.png" v-for="item in Math.ceil(shop.star)"></span>
                        
                        <span><img src="./starno.png" v-for="item in Math.floor(5-shop.star)"></span>
                    </div>
                    <div class="fenbox">
                        <div class="line"></div>
                        <div class="title">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <ul class="supports">
                        <li class="support_item" v-for="item in supports">
                            <img :src="item.imgurl">
                            <span class="text">{{item.text}}</span>
                        </li>
                    </ul>
                    <div class="fenbox">
                        <div class="line"></div>
                        <div class="title">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <div class="content">
                        <p>
                            粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
                         </p>
                    </div>
                    <div class="hidedata" @click="hidedata">
                        <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    </div>
                    
                </div>
                
                <!-- <div @click="hidedata">隐藏</div> -->
            </div>
        </div>
        </transition>
    </div>
</template>
<script>
export default {
    // name:'Header'
    data(){
        return {
            datashow:false,
            shop:{
                star:3.1
            },
            supports:[
                {
                    imgurl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUE1QTdFNjU0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUE1QTdFNjY0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOTQ0OEQwRTREOEYxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQTVBN0U2NDREQjQxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoFQatoAAAN2SURBVHjatFbNS1RRFP/d+94MmqSW5UeiC8EvUCpFxYULRQtx0dK97lr0h7gM7B9wEYESim4sqEhTMINE/EAjm/xoEmWmdNT33r23c+5k6DjaRg9c5+o77/zO+Z3fOaMwxjwE8JROAS7XonSeCAKI0KUEV2PrDJCgS+YVARy49MM7F8AYQIj0ryoF/9UrCnEAWVkJs7cHt74ecJyTXp5MfS94/x7e8+f2BQ7uDw/DGxiA3tw87UiB9OIivBcvYL5/RzA6Cp/u0PqUm5uaVTA9DTUxAb2yArezE+rzZwQfP0LNz0Pm5yer+mt6ZweysBDB3BzM79/w372D294OwX5pAaRE6NEjmK9foRYW4Ny7B5GdDXnrFmRBAURJiU0CoRCYOPPrlw0ssrIgm5shwmEgI+OCCogSp6ICTlMTQnfuwO3owGFfnw3ilJXBbW2lAgwMZW6CAHprC5qS4aRkcXHaVrGKYvSZc+qvvm+rUbOz8F+/ho5EIG/ehMjJgTk8tIe5FuRj4nGEurstkCwttUmcEEbcTQtLFPhjYwgmJ235oICsFLelxdKgPc8mEYyPQ8di0BsbCKhvzt27cNvaLqDouHnRqAUIPXgA/fMnDPXDVsTNpOAmkYBwXStRq6ZoNEkH0ZpqaQH8wUFIapbb0ABvaMgG5yoUydFQUEH0cBXi2jUIqpZlCgJ0iKJUOzMHrB41NQVZWwtBjeNsj4dOZGYi3NUF5/592w9ZVGR7wTPDEpbl5f8BoGD+yAhAmbGeUxVmP1iKXBFRI/LykoNFR5KERW7uxQDMt15ehiDFyONhITlaKm7csHd/ZgbqyxeI69cB8jPUbPZ3qGLeAmZ393wAcfs2ZHU1zI8fdkXo9XU7TIIGjRuoSZKKEjAEYI6OAD5MHVXCz4M3b5ISPq/JLEmnpgaa1BJ8+AD97Ruwv2/7wQOoP32CbGyEJD9Fe0i9fQvBy43XBCVkJ5orvUhFdiJ53EklanXVZuhSUK4i3NNj+8PPeJNqqk5S1Xp7GyAlMU0p2/QsANPkVFXBoaCaAHglOHV1yYccnJXGfaClGO7ttZQe9fdDUbUOJ5YCwLslZk6a7xuazuQ9kTDEtTlj+/smWFr696taWzPey5dGRSKpnjHeRXHCyb6ib7S4PG+aL8nCDLB9hQA74u+/Lc/o5F12cDqP/wgwAJG54Y1udZHlAAAAAElFTkSuQmCC',
                    text:'在线支付满28减5'
                },
                {
                    imgurl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUE1QTdFNjU0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUE1QTdFNjY0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOTQ0OEQwRTREOEYxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQTVBN0U2NDREQjQxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoFQatoAAAN2SURBVHjatFbNS1RRFP/d+94MmqSW5UeiC8EvUCpFxYULRQtx0dK97lr0h7gM7B9wEYESim4sqEhTMINE/EAjm/xoEmWmdNT33r23c+5k6DjaRg9c5+o77/zO+Z3fOaMwxjwE8JROAS7XonSeCAKI0KUEV2PrDJCgS+YVARy49MM7F8AYQIj0ryoF/9UrCnEAWVkJs7cHt74ecJyTXp5MfS94/x7e8+f2BQ7uDw/DGxiA3tw87UiB9OIivBcvYL5/RzA6Cp/u0PqUm5uaVTA9DTUxAb2yArezE+rzZwQfP0LNz0Pm5yer+mt6ZweysBDB3BzM79/w372D294OwX5pAaRE6NEjmK9foRYW4Ny7B5GdDXnrFmRBAURJiU0CoRCYOPPrlw0ssrIgm5shwmEgI+OCCogSp6ICTlMTQnfuwO3owGFfnw3ilJXBbW2lAgwMZW6CAHprC5qS4aRkcXHaVrGKYvSZc+qvvm+rUbOz8F+/ho5EIG/ehMjJgTk8tIe5FuRj4nGEurstkCwttUmcEEbcTQtLFPhjYwgmJ235oICsFLelxdKgPc8mEYyPQ8di0BsbCKhvzt27cNvaLqDouHnRqAUIPXgA/fMnDPXDVsTNpOAmkYBwXStRq6ZoNEkH0ZpqaQH8wUFIapbb0ABvaMgG5yoUydFQUEH0cBXi2jUIqpZlCgJ0iKJUOzMHrB41NQVZWwtBjeNsj4dOZGYi3NUF5/592w9ZVGR7wTPDEpbl5f8BoGD+yAhAmbGeUxVmP1iKXBFRI/LykoNFR5KERW7uxQDMt15ehiDFyONhITlaKm7csHd/ZgbqyxeI69cB8jPUbPZ3qGLeAmZ393wAcfs2ZHU1zI8fdkXo9XU7TIIGjRuoSZKKEjAEYI6OAD5MHVXCz4M3b5ISPq/JLEmnpgaa1BJ8+AD97Ruwv2/7wQOoP32CbGyEJD9Fe0i9fQvBy43XBCVkJ5orvUhFdiJ53EklanXVZuhSUK4i3NNj+8PPeJNqqk5S1Xp7GyAlMU0p2/QsANPkVFXBoaCaAHglOHV1yYccnJXGfaClGO7ttZQe9fdDUbUOJ5YCwLslZk6a7xuazuQ9kTDEtTlj+/smWFr696taWzPey5dGRSKpnjHeRXHCyb6ib7S4PG+aL8nCDLB9hQA74u+/Lc/o5F12cDqP/wgwAJG54Y1udZHlAAAAAElFTkSuQmCC',
                    text:'VC无限橙果汁全场8折'
                },
                {
                    imgurl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjU4QjNENjM0REI5MTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjU4QjNENjQ0REI5MTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNThCM0Q2MTREQjkxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNThCM0Q2MjREQjkxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqkGEWkAAAKDSURBVHjaYvj//78IEK8B4s//6Qc+Q+0UYQQSGxkYGPwYBgZsBjngJ5DBNkAO+AVywH+GAQRMhBQc+PyMwfHWFoYJry4zPPj1GS4GwvgASG3g3V0MF769xauOYAg0Pj/L0PDsLJzfL2vJUPj4OJyvwMbLkCCihqFvwsvLDB/+/mIQYGYD6rFiSBBWw2o+C6EQ2PDhAQrfgUcKw6fIDkQHIEckPjgAZmNzBAuhYEQOQpBvDbiEUdTgCgFkRwUIKJAXAui+r5cyxlCjwM7LUC9pjNcB6I4mOhFOfHkFzgbFJcgndMsFoFQOS/UQX4iAHUFtwII79Z8jyoAL396AsylVHQCKe0L5HDmVE6uWqCgAGYiczwkBUOpuQEuc/43TwLnDgVcKLG/PI0l8CICCFDnusYH9aj4oaQJUWKGD+7qRUPPeMlz4/pZ4B4BcfV4zGBgSPzHidsHbWwwPoY47+OU5UoJ9jlF6opeIuAoivEUx49lZKA4z4BQG1wnkAlDIgcwhqShGBvFAHwiwsKH4HFcCLBDTRVGrD3Q8uuUkOwBUosFKNVCwLnhzC3ct+uUZ0Me+BMsOJnKDsxFY1OJLrKDE53hrMzz+qeoAULAjpwV0X8KCGuQIxcvL8JYTJDsA1tBALgcKxHVRKy1JI5RyBZSbQGULttAgyQEgA0CWI2er+QoODNiyMnqCA6UJikMAuYkFSuXYLIeB+Qr28KgBJVxcCZIkB/TLWIINWa/sBm6a4QOgohjkQHyWk5UN7+tGEV0tg9oPhNoQeEtCUJEKq0jwtQdAqRxU3oNKSuRcQAwY/P0Cejjg6wDa/wvkgD0D6ICdDNDu+Vog/kXH7vkvqJ0iAAEGADpWEt2Pbne5AAAAAElFTkSuQmCC',
                    text:'单人精彩套餐'
                },
                {
                    imgurl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRBOEZBRjE0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRBOEZBRjI0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEE4RkFFRjREQjQxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEE4RkFGMDREQjQxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjEX/Z4AAAKKSURBVHja3Fc9TNtAFH4gBFn4GVyBxJANyBJ3SiYyVXRAVCoSiIGIBTYYmcrIBls6QYdWWVB/QCXqwM8EE0zAAixIGZD4G4CoUpLFve+acxz7zjmrIZb6pLOt8/ned9/73rszWZZlsPadtYLVPCtUfBot7PKTiN5ROJYDgBJ7aA8JQBkALArRWl/awfHyAW2OZKn0WJS+lzKQiSw3HMgrs5emjuY8/W2ywa8XEnR/eusN2FOxpr8/FeX364N8jaP27ojn21g6rs8ADLTBISbDpMMrI9wR+oUtFJc8jI3vpjkwUL6R/ERv1sdsoDJr86NNrBaOOxiQ5/yTJ75uO8+e8fFXuUs2/pEDTi6lKMFaYAac1P6rqUBoZwHoBr3uPhEGZwjQ56QdIVQx0NqMXJeJUksD9VJT1ucUqY5pA/BTsswezm6VxUcLQFe0hyj1994V7Q4M4IhlCESM9EVdUZkyC662L+nX5LeGaEDUhkAM4IOgq1aVYN95XvrksTe7bX0eyFh3JzfS954QQDhrfasNT8WOngjNXMzzu28IMCCWNnkZhRVY+cUz+o14r1Llzo0Jwu1kwnVvRm7nSg1gAxG2kVwnypPtbPTrBJ/IXaohNCHaEtvEYqm4svppV8L9uVzN9ouVyVZhA18b46IDWKThl8GP0m1dC8B59pS3KoUmW9Fw3Ti/30nbIBE6MHiSOQ5WiOAYq3eGBAB0TkoCxNbb6jHscHHXPujUZQCohXNQjmOUECUm4BVS4tSd+4kP1fj7VUNpJQQDUL85n/BMLk46Ikv89nqsfGja5IACl2I/EwCRaka8z9dBPfv//wt0APwO0X8ZAPZDBLBDld/zH6yVm/h7Xq74NP4IMAB7J5cF7YRXigAAAABJRU5ErkJggg==',
                    text:'该商家支持发票,请下单写好发票抬头'
                },
                {
                    imgurl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUFBMjcwRUE0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUFBMjcwRUI0REI0MTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QUEyNzBFODREQjQxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QUEyNzBFOTREQjQxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmCrdL8AAAKgSURBVHjaxJc7aBRRFIaPYfAZEZIl4kJSBEywEFxMZQoDWpq0RjvFR2Hno47pBB+dhTZ2EkELExtBQUHtJIKFREEhQkRxC9msMUtknG/YM8zjzOxsEjM/3H3M3DvnP//577mMuK5b8sZDb9TcjUOtGbO0yft4LCJjUgxmILDs/dhcEIEGBFwpEE6rCXfnp/1R3lqSPVu65c7+K4k5b3/Nyfn31+XgrkHZ6WyXw10HZHT38OoJzHx/7Qcc2NEbXFv489MfWYAIqK38DghwDWJtEXjy403wsHN9Y5nBwFx9PnIPAtznOSQzsfdUqiLOamt38/OUfKx/Ne9xnZIoJj/d81VA1VwENDtLOvww0l2RS/3jwbxvy1U/UwWBjvUcCv5TSis4MHfB0KszmdljNMyoHlETKiBumbXtEhBg8e9SxHyqCjsiD1jLM8KGziQQruvVgdPyojrry64gMzIOz0szId/UX9dZJBIEWKR1ZAEE2jGgZUJwcnZSpoeuJbzgpBlwpKuSGuBE+ahvPAthQ6rzKVeaERMEmIzJxstHzABISgArG01ACWgTSuslJgEaRrhpLK4sJbokBDFWHlBCSkIzYl3LbYhrtROyUD0R3xlpu4D5lj9YhxHjJBxrj4ddHwcPufzhdqQV58FgZ5+pgEmAEoQ7W/z+jX0X5NaXB2afjzcl6p/lgQ7rorZRDJR2kqkCmDJLsVYwCRD0fmXCl9sigApne0cj54M2nHUhoKbJArKHt2He1pybQB6gAmrgA5SiLO2a01kLAY5lAk8tPF//EuQB2WsZ0s77/0pAcbH/uN+a+bYMvaYSYC6kxpSdzrZsY/YMy8vqu8ih1YpA4e8FHVIwIFAvMH4DAs8KJPBUmq/nj7zR2MDX80YzZumfAAMAT9Ay2IE9eG0AAAAASUVORK5CYII=',
                    text:'已加入“外卖保”计划,食品安全保障'
                },
            ]
        }
    },
    methods: {
        showdata(){
            this.datashow = true;
            console.log(this.datashow)
        },
        hidedata(){
            this.datashow = false;
        }
    },
}
</script>
<style lang="less">
    .header{
        position: fixed;
        top: 0;
        left: 0;
        position: relative;
        color: #fff;
        overflow: hidden;
        background: url('./bg.png');
        .background{
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 20%;
            
        }
        .shopinfo{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
            width: 100%;
            height: 100%;
            // transition:all 6s linear;
            &.fade-enter-active, &.fade-leave-active{
                transition: opacity .5s;
            }
            &.fade-enter, &.fade-leave-to{
                opacity: 0;
            }
            .detail{
                background-color: rgba(7,17,27,.8);
                backdrop-filter:blur(8px);
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
                .detail_main{
                    margin-top: 50px;
                    h1{
                        text-align: center;
                        font-size: 1.8rem;
                    }
                    .star{
                        margin: 20px auto;
                        text-align: center;
                        span{
                            display: inline-block;
                            img{
                                display: inline-block;
                                margin: 0 7px;
                                width: 20px;
                                height: 20px;
                            }
                        }
                    }
                    .hidedata{
                        font-size: 2rem;
                        text-align: center;
                        position: relative;
                        bottom: -100px;
                        margin: 0 auto;
                    }
                    .fenbox{
                        margin: 20px auto;
                        display: flex;
                        width: 80%;
                        .line{
                            flex: 1;
                            display: inline-block;
                            border-bottom: 1px solid hsla(0,0%,100%,.2);
                        }
                        .title{
                            flex: 1;
                            text-align: center;
                            font-size: 1.4rem;
                            position: relative;
                            bottom: -10px;
                        }
                    }
                    .supports{
                        width: 80%;
                        margin: 20px auto; 
                        .support_item{
                            line-height: 26px;
                            >img{
                                width: 16px;
                                height: 16px;
                            }
                            .text{
                                display: inline-block;
                                padding-left: 5px;
                            }
                        }
                    }
                    .content{
                        width: 80%;
                        margin: 0 auto;
                        padding-top: 20px;
                        p{
                            line-height: 20px;
                        }
                    }
                }
            }
        }
        .content-head{
            background: rgba(7,17,27,.4);
            backdrop-filter:blur(10px);
            padding: 20px 20px 10px;
            position: relative;
            .abinfo{
                >img{
                    width: 64px;
                    height: 64px;
                }
                .abcontent{
                    margin-left: 6px;
                    font-size: 1rem;
                    display: inline-block;
                    vertical-align: middle;
                    ul{
                        li{
                            &.abname{
                                font-size: 1.6rem;
                                margin: 2px 0 5px;
                                img{
                                    width: 30px;
                                    height: 20px;
                                   
                                }
                            }
                        }
                        li:nth-child(3){
                            line-height: 24px;
                            >img{
                                width: 16px;
                                height: 16px;
                            }
                            span{
                                display: inline-block;
                                margin-left: 4px;
                            }
                        }                        
                    }
                }
            }
           .count_num{
               position: absolute;
               bottom: 10px;
               right: 10px;
               width: 40px;
               line-height: 20px;
               background-color: rgba(0,0,0,.2);
               text-align: center; 
               border-radius: 10px;
               .fa-chevron-right{
                   font-size: .5rem;
               }
           }
        }
        .head_foot{
            white-space: nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
            padding: 0 20px;
            background-color: rgba(7,17,27,.6);
            backdrop-filter:blur(10px);
            position: relative;
            line-height: 30px;
            >i{
                position: absolute;
                top: 10px;
                right: 10px;
            }
            span{
                >img{
                    width: 22px;
                    height: 12px;
                }
            }
            
        }
    }
</style>