<template>
  <div class="content">

    <BannerView></BannerView>
    <div class="newsList">
      <ul>
        <li v-for="(item,index) in arrList">
          <router-link :to="'/article/'+item.id">
            <a href="#">
            <h2>{{index+1}}.{{item.title}}</h2>
            <p>{{item.detail}}</p>
            </a>
          </router-link>

        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import BannerView from './Banner.vue';


  export default {

      data(){

          return {

              arrList:[]
          }
      },

      components:{

          BannerView,
      },

      mounted(){

        //获取数据
        this.fetchData();

      },
      methods:{


          fetchData(){
              var _this = this;

              this.$http.get('src/data/index.data').then(function (res) {

                  console.log(res);
                  _this.arrList = res.data;

              }).catch(function (err) {

                  console.log('home',err);
              })
          }

      }

  }

</script>
