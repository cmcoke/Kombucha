import '../styles/styles.css'
import 'lazysizes'
import 'picturefill'
import Glide from '@glidejs/glide'
import PopularItems from './modules/PopularItems'
import Testimonial from './modules/Testimonial'



let popularItems = new PopularItems();
let testimonial = new Testimonial();






// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
