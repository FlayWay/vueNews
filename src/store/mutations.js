/**
 * Created by ljkj on 2018/1/30.
 */
/**
 * Created by ljkj on 2018/1/30.
 */

import  getters from './getters'


const state={

  header : true,
  footerShow:true,

}

const  mutations = {

  showHeader(state){

    state.header = true;
  },
  hideHeader(state){

    state.header = false;
  },
  hideFooter(state){
    state.footerShow = false;
  },
  showFooter(state){
    state.footerShow = true;
  }
};

export default {

  state,
  mutations,
  getters,

}
/**
 * Created by ljkj on 2018/1/30.
 */
