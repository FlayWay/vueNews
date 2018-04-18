/**
 * Created by ljkj on 2018/1/30.
 */
import Vue from 'vue'
import Vuex from '../../bower_components/vuex/dist/vuex'

import  actions from './actions'
import mutations from './mutations'


Vue.use(Vuex);

export  default  new Vuex.Store({

  modules:{
    mutations,
  },
  actions

})

