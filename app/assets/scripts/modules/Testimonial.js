import Glide from '@glidejs/glide'

class Testimonial{

  constructor(){

    let sliders = document.querySelectorAll('.testimonial .glide');
    let nextSlide = document.querySelector('#next');
    let previousSlide = document.querySelector('#prev');

    for (let i = 0; i < sliders.length; i++) {

      let glide = new Glide(sliders[i], {
        type: "carousel",
        startAt: 0,
        perView: 3,
        focusAt: 'center',
        gap: 40,
        animationTimingFunc: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        autoplay: false,
        hoverpause: false,
        swipeThreshold: false,
        dragThreshold: false,
        breakpoints: {
          1200: {
            perView: 2,
            gap: 40,
          },
          600: {
            perView: 1,
            focusAt: false,
            gap: 20,
          }
        }
      });

      nextSlide.addEventListener('click', function () {
        glide.go('>')
      })

      previousSlide.addEventListener('click', function () {
        glide.go('<')
      })

      glide.mount()
    }


  }

}


export default Testimonial