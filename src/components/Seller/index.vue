<template>
    <div class="seller">
        <div class="seller_content">
            <div class="overview">
                <h1>粥品香坊（回龙观）</h1>
                <div class="star">
                    <span><img src="./starall.png" v-for="item in Math.ceil(shop.star)"></span>
                    
                    <span><img src="./starno.png" v-for="item in Math.floor(5-shop.star)"></span>
                    <span>(24)</span>
                    <span>月售1单</span>
                </div>
                <div class="heart"  @click='shouc = !shouc'>
                    <div class="xin" :class="{shou:shouc}"><i class="fa fa-heart" aria-hidden="true"></i></div>
                    <div class="shouchang">{{shouc?'已收藏':'收藏'}}</div>
                </div>
                <div class="remark">
                    <div class="block">
                        <h3 class="title">起送价</h3>
                        <div class="content"><span>20</span>元</div>
                    </div>
                    <div class="block">
                        <h3 class="title">商家配送</h3>
                        <div class="content"><span>4</span>元</div>
                    </div>
                    <div class="block">
                        <h3 class="title">平均配送时间</h3>
                        <div class="content"><span>38</span>分钟</div>
                    </div>
                </div>
            </div>
            <div class="split"></div>
            <div class="bulletin">
                <h1>公告与活动</h1>
                <div class="content">
                    <p>
                        粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
                    </p>
                </div>
                <ul class="supports">
                    <li class="supports_item" v-for="item in supports">
                        <img :src="item.imgurl">
                        <span class="text">{{item.text}}</span>
                    </li>
                </ul>
            </div>
            <div class="split"></div>
            <div class="pic">
                <h1>商家信息</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            shouc:false,
            shop:{
                star:2.1
            },
            supports:[
                {
                    imgurl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjIzOTZBNDY1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjIzOTZBNDc1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMjM5NkE0NDVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMjM5NkE0NTVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtgZ4joAAAKtSURBVHjazJevU1tBEMcvjzSlhTaIoMGg+Q/AMFNVTNEYmKEKgwaDxqBqYtAgoIqZGNAYNAY0JmGAFkJJ73PMppvj7v2YafO6M5e83NvbH9/97h5U2o1Gwxjzza5Pdo2b4citXcd2fa3aj6Zdi2a4QqJf7KpVLAIPPJhy5DEp0TlSS/62xffNphnd3DS15WX3+81ienUpQS/0ojo/b36dn5teu/2iODFhKvW66XU6/b2QfDg7M8nUlHt+Ojnp27lbWgqeCyJA9GP7++bjxYV5u77u9kZmZ51x9urX17nQwOnz1ZU7CyrBREObHBDhIDD+3N4e0MkThNYBCVD0UQgG8GNjw8HIIQmoOjc3oBMrA05COs+Xl8EzUQ7gdLzV6kOJUBaRzuRkJgdiOpkIIBCne3RkHvf2+mTSItzQvAlmGIA9FwJa4AFkerezU6gl71dWXFsSABwimdwIiEBAsgURLT4ppeboSgmS6elXvMjVhgPZb229zEwvepzBE8hFiQiU71g3gWAhDgj0ZMNh3wDGcaonHQTU9dYB+MFlIgBsMk5DtdOZSXlwrkslpYhlnxoAhBMGP+zuRg2QmQTImI7pFAqAlhNon05PCzE/FATtXCgAPbdD8Kf1tf8O+NMQCJJQaicj1N/TWbKv28xvVxKgnOjJRM1EQMM+dnDwitHaiS6Xj4DwB+cyE3IF0D08HMiQO0AjoN9TX01SmRvSSQSHcx+ZzFHMvR+aYGR1MzPjWpTs5a6QzpHW1frYQY9bNncbxiKWEYxBZr04x7E412WQJGL2krQBIxBLG2Ek1BU4kYuKcyDkMz92H0RL4E9BWpPn2FQTBG4XFv4Q2HKHMoEI+6Gzua7jfymJKVn+iwDuSvTv/jVrlRjAMXfBKh1m12f+AhuS465d3+1a+y3AAKPKcE07d0OiAAAAAElFTkSuQmCC',
                    text:'在线支付满28减5'
                },
                {
                    imgurl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjAyNzlCNUI1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjAyNzlCNUM1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRUVCMkU2NDVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMDI3OUI1QTVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjMTN9QAAAJ8SURBVHjaxFfPaxNBFH6JaVpQGlNEUTDSqkUvIlS96akhHhovmv4FxQr9A9o/oQWvBRW9eWq99VSak15ECUjx4A8MNIKiYNoUA602tPMNvGEymd2dZJfsg7dZdib7vvfe983MJujx21NE9ER4QfgJ6o/9Fb4u/FFKXF4Iv0f9NSR6X3g6KS53KT4rAEA6RgCyAp728Nppqs9N0MaDK7RSvEzZoZQaK42P0Fhm0PftT/Oj9G3muu+cVBBEBJ28kJH3zzZ/U3mrIe8X7+QUgGpjny4+/6Dmz988K8EzYIDg8a4BuFh28Bgt3j4vgU6cOd4xDqCoYv7Vp3AAEAhBuAp6leZvneuYv713IKuz+qUuq+dcAS6t2WPwADa99rUj0NL7n7T6+Y96hsAuZgWwUbrqSzAAQVAFYL9FS+9+9NQ+K4CF1zUaOzkk+wm2syEIgqEFpiq8DIlgXuVX0x0AesYy1AGUa7sd/TfbZnID5MMv2sbvjVwFCB6kd1QMKjAT6BoA5AbCmSTkEiNbXYo8huxt1esKAMrJQdoACF6wxiFTngdDcJv+2ZJ+ZdX73ya5HhnvREJksDJ1ycpwzkaXYFhL2oJ4yWvhzfdIg1sB6IQKYr7+n8gA8DoAxiJjF827LrvOAEAyv17z9qwAa3tAJACCTAcAkLYVLhQALMEos5mpApAbbiNmpDKEYW/HccoLHKsEZPXa58ORUPTU1v/qzp46eGDcPBdEBgBlNUvL6zhORQh+4+XHUOwP3AtALC41MmeijSxX5HMvhWAu2gJwuA9aUxLi0+wwxu+C3mQYNYBmjPH/AUA5RgDrYNmM8JbwovCBPgX+L3xN+OyRAAMApt4SIIixgnYAAAAASUVORK5CYII=',
                    text:'VC无限橙果汁全场8折'
                },
                {
                    imgurl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDg3RDgyNTc1RDlBMTFFNjk5QTJBOUEwOEVGNzIyMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDg3RDgyNTg1RDlBMTFFNjk5QTJBOUEwOEVGNzIyMDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ODdEODI1NTVEOUExMUU2OTlBMkE5QTA4RUY3MjIwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0ODdEODI1NjVEOUExMUU2OTlBMkE5QTA4RUY3MjIwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjsZE8gAAAIBSURBVHjaxFe9TgJBEF4uSKMmV9hQCbXN+QQelS2+gRgLO73KxgR8Aii1UPEJpDUxEXuLtbGVRyBRCmzOWTOXTCb7cwvHMcnHLZfZnW9n52evIt5vd4QQN4BDwJYoR34Az4CzAH7uAJ+AOqBSEupo874CHpjDYBvwK8qVGuA7wEHZxgXarAU5FGPAK+AC0CDvYsc8pfsEiGxK1RwEDojBPiDBZyYTwFAzTxEOcV5i0MlFoM3+jzU77VnmKxIPOB76EmgwF6rdSqZj8gAlNVrUA3z31xqdieE9JSBNBlxBeE7GU9xJoRI4or/BdjEtmoDtCLo514gwTQsl0M6R5zTK4yIJhCzPXTLEQKRBp+r9F75XePMhELGz10mLxYTuuJpkvciHgCo0++gJfrbHgF1SIWnAmuInq4jaQqS6YYou00nKiElccFFpsUqaVj0XeGSpaGtKA6b7oSnjwpeAJFUtxCOx1ZGWq3YES7iz6wjWrD6EqyAQs1iYGjpmhOkYF0kgu2jQOjCwNK0sm/o6b/gSCNE4TauOIZXHGq8t7QF6xRoYjGfSIUcjTQHpSyDBRY5wbJMJkpC2bFgkDZsebXnkukO4CPRII5GGiBeok9huPiZxleJVSxqINYsiMANsrsH2/xeZIvACuARslGhc2bpSX8iKwClgDz2RloQZ2jz5E2AAhkCLabtFR1IAAAAASUVORK5CYII=',
                    text:'单人精彩套餐'
                },
                {
                    imgurl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjAyNzlCNjM1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjAyNzlCNjQ1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMDI3OUI2MTVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMDI3OUI2MjVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlhCbkEAAAIWSURBVHjaxFe9TsMwEE6qUAYYOrB0aphZwhPQTjDCwEyLGBjpxIJEK9hbmFig4QkqRiSkhidoJlbCE2AJurCUM7pIJ2MntlXMSV9buY7vu/P9xb9evljzPO8GsA1Y9dzIJ+ARcFyBj1vAC6AO8B2hjjrvAvjYAewDvjx3wj1wCfjgHqg6Vp4L11mtOFB0DpgAarI/A8VD8z8gwkls6hIYAiLJek1YT/C7SdZSAJM8e2/igS5xG8NDu6hoQva1JB7rIjH+7BTQIUS1CeQSEQs5kVByv6IcALYAu7ifE+4B+jYEqPQ019oF+36RMMkCn7icrvnCWgvXEiEupB6oOMp5ZhsDZak5V6SbtpgQSAytjlTFR5dAhkozxLNFBWxiWg5tCDwAxgu4/wEGYWJKILFwu0xS20LEJGlnIyPAK2APyZQS4IHz/kfNaF1MyUBheUzKbohgggVilNPGlAeu2IyY7hV0yO8p8YyHrmRoUVOogGOyN1FVP5NKOBLab1ZU1ZB4igR6ePeRLYG20FhiDYvywGXk+rgHT0yzoI3WU8tizUkpJ0HHsAEZdEo9EBLlGY5ReVAOJcElazZi91NWw0BRgrnFDcAVOTzDg/ro1lAY4WRjXQOjPzW9grjExX08/A0PTwtGu4V1Q12CRuJqICkkMAOs/IPunzcyTuAJcApYcqic6zrjb8icwBFgAz0xd4QZ6jz8FmAAE/eVb2xSKbkAAAAASUVORK5CYII=',
                    text:'该商家支持发票,请下单写好发票抬头'
                },
                {
                    imgurl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUVFQjJFNUU1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUVFQjJFNUY1RTQ1MTFFNjk5QTJBOUEwOEVGNzIyMDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRUVCMkU1QzVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRUVCMkU1RDVFNDUxMUU2OTlBMkE5QTA4RUY3MjIwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsPuJEUAAALHSURBVHjaxFc7TFRBFL27cUk0aPCTiImJUmBhoRAaCzYKjSEEPwW1LjHRRo3tNkIDpUEbKxbrLVyiQjDE31rYGHYbCyFhjSYshQZxkSgYmDN6J/Pem3kMC+47yc2+nd89d+6ZO+/F6Gn7ISJ6KOy8sHqqDSrCJoXdiAkCY+LhAkWDJyDwSzzURUTgdzxC50BdfLMRd5tTtN6dp7nOLL08c9845tzBVjkG/Y/bBunq0S5nBrtMjVigtFKmwtKMaju+u1FaGEAEaEjU0+iXCdX26uv01ghcEQR4sf6PI6HOgJZ9zZ4+EEA/1kEwqeKgIuREwAX3Tt4MONYJ6enKnE7LXcCuOhHg6ExbB02MLbylOx8e0NkDLX/Ts+eIJ+9wNPp5XP0v/pg1OgdwDNf9jRBUGBZXK9Tx7pbSCAjrEYM4+qsWIQMOGhJ7PeLjXSmtzDs5wFysoQs6lICe11RxiC4ebqf+E32qDZEhYn2cTYT4zZxKq3kmEgECmMR5xAQQ2IoATSIEppMj1PSiN6CFAAEWVq78xupgeC5Lxyw1QRckK7/0c94qxACBT2IQRAYnJuBIwYEpGhYkE8Az6sjATMYaTKAUo2Dsf96lFueU6FUSBCEsF1xqTMry7F/HegyhWq6EyKV/Ip8MbKsJGG/SB+ZBiCAfmoLFtYpH9X5gEUSkl2IXFJZmA86NKcAgW93m/svv02oM6nzsWVKZvwBBA2jHOCcNAI/+LQ4V224y3gGIEuW5WhgJwGlrvk9GYyKAXRjQbkmkDER2jACLJgxIgX4MbaKsmoALsAvYDeT39beCTAsXsm29Ebkit5CXKbrd1LvzKXABouc02O77/0qAgZcTlGb8+oHUbCsFuBty5bwU5fe15U2EOe65PYdL2dAXUusbUS0Rp4gBAssR+pefZlMREpiECK8J+yOsR1iiRo5X8WUs7PqGAAMAbV9KOzs8mYkAAAAASUVORK5CYII=',
                    text:'已加入“外卖保”计划,食品安全保障'
                }
            ]
        }
    },
    methods: {
        shou(){
            
        }
    },
}
</script>
<style lang="less">
    .seller{
        position: absolute;
        top: 164px;
        bottom:0;
        background: #fff;
        width: 100%;
        // height: 100%;
        z-index: 0;
        overflow: scroll;
        .seller_content{
            .overview{
                position: relative;
                padding: 20px;
                h1{
                    font-size: 1.6rem;
                }
                .star{
                    padding: 5px 0 20px;
                    span{
                        color: #4d555d;
                        display: inline-block;
                        img{
                            display: inline-block;
                            width: 16px;
                            height: 16px;
                        }
                        &:nth-last-child(2){
                            line-height: 20px;
                            vertical-align: middle;
                            margin-left: 3px;
                        }
                        &:nth-last-child(1){
                            margin-left: 20px;
                            line-height: 20px;
                            vertical-align: middle;
                        }
                    }
                    border-bottom: 1px solid #eee;
                }
                .heart{
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    width: 60px;
                    .xin{
                        color: #d4d6d9;
                        font-size: 1.8rem;
                        text-align: center;
                        width: 60px;
                        &.shou{
                            color: red;
                        }
                    }
                    .shouchang{
                        text-align: center;
                        width: 60px;
                    }
                    
                }
                .remark{
                    display: flex;
                    padding: 10px 0;
                    // border-bottom: 1px solid rgba(7,17,27,.1);
                    .block{
                        border-right: 1px solid rgba(7,17,27,.1);
                        flex: 1;
                        text-align: center;
                        .title{
                            font-size: 1rem;
                            color: #93999f;
                        }
                        .content{
                            span{
                                font-size: 2rem 
                            }
                           
                        }
                        &:nth-last-child(1){
                            border-right: none;
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
            .bulletin{
                padding: 10px 20px;
                h1{
                    line-height: 24px;
                    font-size: 1.4rem;
                    color: #07111b;
                }
                .content{
                    border-bottom: 1px solid rgba(7,17,27,.1);
                    padding: 0 10px 10px;
                    p{
                        line-height: 24px;
                        color: #f01414;
                        font-size: 1.2rem;
                        font-weight: 200;
                    }
                }
                .supports{
                    .supports_item{
                        border-bottom: 1px solid rgba(7,17,27,.1);
                        padding: 16px 12px;
                        img{
                            width: 16px;
                            height: 16px;
                        }
                        .text{
                            display: inline-block;
                            padding-left: 3px;
                            vertical-align: middle;
                        }
                    }
                }
            }
            .pic{
                padding: 10px 20px;
                
            }
            
        }

    }
</style>