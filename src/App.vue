<template>
  <div id="app">
    <!--<loading></loading>-->
    <NavView v-show="headerShow"></NavView>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FooterView v-show="footerShow"></FooterView>
  </div>
</template>

<script>

  import NavView from './components/Nav.vue';
  import FooterView from './components/Footer.vue';
  import { mapGetters, mapActions } from '../bower_components/vuex/dist/vuex';

  export default {

      mounted(){

        var path=this.$route.path.substring(1);

        this.footerChange(path);
      },
      methods:{

        footerChange(path){

          var path=this.$route.path.substring(1);
          if (path.indexOf('article')==-1)
            {
                this.$store.dispatch('showFooter');

            }else {
                this.$store.dispatch('hideFooter');
            }
        }
      },

      computed:mapGetters([
        'headerShow',
        'footerShow'
      ]),

      watch:{

        $route(to){

            if (to.path == '/user-info'){
                this.$store.dispatch('hideHeader')
            }else {
              this.$store.dispatch('showHeader')
            }
            var path=to.path.substring(1);
            this.footerChange(path);
        }
      },

      components:{
        NavView,
        FooterView,
      }
  }
</script>

<style>
  @import "./assets/css/index.css";

</style>
