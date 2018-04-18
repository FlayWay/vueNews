<template>
  <div class="banner">
    <ul class="clearfix">
      <li>
        <img src="../assets/images/img_1.jpg" alt="">
        <div class="text-box">
          <h2>还可以降低首付款健身房1111</h2>
          <p>刘德华111 / 文</p>
        </div>
      </li>
      <li>
        <img src="../assets/images/img_2.jpg" alt="">
        <div class="text-box">
          <h2>还可以降低首付款健身房222</h2>
          <p>刘德华222 / 文</p>
        </div>
      </li>
      <li>
        <img src="../assets/images/img_3.jpg" alt="">
        <div class="text-box">
          <h2>还可以降低首付款健身房333</h2>
          <p>刘德华333 / 文</p>
        </div>
      </li>
    </ul>
    <ol>
      <li class="active"></li>
      <li></li>
      <li></li>
    </ol>
  </div>
</template>

<script>
  export default {

    mounted(){

      this.slide();
    },
    methods:{

      slide(){
        $(function (){
          var mySwipe=new Swipe($('.banner')[0],{
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function (index,element){
              $('.banner ol li').removeClass('active');
              $('.banner ol li').eq(index).addClass('active');
            }
          });
        });
      }
    }
  }
</script>

