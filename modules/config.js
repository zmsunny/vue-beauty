import Vue from 'vue'
//rem
import computed_rem from './rem'
import 'swiper/dist/css/swiper.min.css'
 //计算rem
computed_rem()
//导入样式
import '../stylesheet/main.scss'

import axios from 'axios'

Vue.prototype.$http = axios