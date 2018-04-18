/**
 * Created by ljkj on 2018/2/8.
 */
import  {normalTime} from './timeFormat'


// 翻译过来就是说，代码没毛病，在webpack打包的时候，可以在js文件中混用require和export。但是不能混用import 以及module.exports。
//
// 因为webpack 2中不允许混用import和module.exports,

// module.exports = {
//
//   normalTime,
// }

export default  {
  normalTime,
}

