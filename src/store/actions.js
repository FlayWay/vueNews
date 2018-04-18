/**
 * Created by ljkj on 2018/1/30.
 */

export default {

  showHeader:({ commit })=>{

    commit("showHeader")
  },
  hideHeader:( {commit} )=>{

    commit('hideHeader');
  },
  hideFooter:( {commit} )=>{

    commit('hideFooter');
  },
  showFooter:( {commit} )=>{

    commit("showFooter")
  }

}
