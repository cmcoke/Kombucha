import '../styles/styles.css'
import 'lazysizes'
import 'picturefill'
import PopularItems from './modules/PopularItems'



let popularItems = new PopularItems();







// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
