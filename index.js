
function goToShow(show) {
  localStorage.setItem("clickedShow", show)
  window.open("videoPlayer.html", "_self")  
}







class Slider {
  constructor(el) {

    this.el = el
    this.container = this.el.querySelector('.slides-container')
    this.slides = this.container.querySelectorAll('.slide')
    this.parallaxes = this.container.querySelectorAll('.parallax')

    this.current = 0;
    this.currentPos
    this.mouseOffset
    this.moving = false

    this.container.style.width = this.slides.length * 100 + '%'
    this.slides[0].classList.add('current')

    let startPos, lastTouchX

    const 

    dragStart = (e) => {
      e.stopPropagation()
      if(e.touches) lastTouchX = e.touches[0].clientX
      startPos = e.clientX || lastTouchX
      this.mouseOffset = 0
      this.currentPos = this.container.getBoundingClientRect().left;
      this.moving = true;
      requestAnimationFrame(this.move.bind(this))
    },

          dragEnd = (e) => {
            if(this.moving) {
              const moveX = e.clientX || lastTouchX
              if( moveX < startPos - 100 ) this.next()
              else if( moveX > startPos + 100) this.prev()
              else this.goTo(this.current)
              this.moving = false
            }
          },

          dragMove = (e) => {
            if(e.touches) lastTouchX = e.touches[0].clientX
            const moveX = e.clientX || lastTouchX
            this.mouseOffset = moveX - startPos
          }

    this.container.addEventListener('mousedown', dragStart)
    this.container.addEventListener('touchstart', dragStart)

    window.addEventListener('mouseup', dragEnd)
    this.container.addEventListener('touchend', dragEnd)

    window.addEventListener('mousemove', dragMove)
    this.container.addEventListener('touchmove', dragMove)

    window.addEventListener('keydown', (e) => {
      e = e || window.event;
      if (e.keyCode == '39') {// right arrow
        this.next()
      }
      else if (e.keyCode == '37') {// left arrow
        this.prev()
      }
    })

  }

  move() {
    if(this.moving) {
      this.container.style.transform = 'translate3d('+ (this.currentPos + this.mouseOffset) +'px, 0, 0)'
      this.container.classList.add('moving')
      const slideWidth = this.slides[0].offsetWidth;
      this.slides.forEach( ($_slide, i) => {
        const coef = 1 - Math.abs($_slide.getBoundingClientRect().left / slideWidth)
        $_slide.style.opacity = .5 + (coef * .5)
        $_slide.style.transform = 'scale('+ (.9 + coef * .1) +')'
      })
      this.parallaxes.forEach( ($_item, i) => {
        const coef = this.slides[i].getBoundingClientRect().left / slideWidth
        $_item.style.opacity = 1 - Math.abs(coef * 1.8)
        $_item.style.transform = 'translate3d('+ (-coef * 85) +'%, 0, 0)'
      })
      requestAnimationFrame(this.move.bind(this))
    }
  }

  goTo(i) {
    if(i >= 0 && i < this.slides.length) this.current = i
    this.container.classList.remove('moving')
    this.container.style.transform = 'translate3d('+ this.current * -100 / this.slides.length +'%, 0, 0)' 

    this.slides.forEach( ($_slide, i) => {
      $_slide.classList.remove('current')
      $_slide.removeAttribute('style')
    })
    this.slides[this.current].classList.add('current')
    this.slides[this.current].removeAttribute('style')

    this.parallaxes.forEach( ($_item, i) => {
      $_item.removeAttribute('style')
      $_item.style.transform = 'translate3d('+ ( i <= this.current ? 85 : -85 ) +'%, 0, 0)'
    })
    this.slides[this.current].querySelector('.parallax').removeAttribute('style')
  }

  next() {
    this.goTo(this.current + 1)
  }

  prev() {
    this.goTo(this.current - 1)
  }

}

const $sliders = document.querySelectorAll('.slider')
const sliders = []
$sliders.forEach( ($slider) => { 
  sliders.push( new Slider($slider) )
})




var recentShowName = localStorage.getItem("mostRecentShow")
var recentShowEp = localStorage.getItem("mostRecentShowEp")

var siteName = " {site name} "
var siteSlogan = " {site slogan} "

var siteNameElement = document.querySelectorAll(".title")
var siteSloganElement = document.querySelectorAll(".sub-title")

function setTitlesToTitles() {
  siteNameElement.forEach(function(element) {
    element.textContent = siteName;
  });
  
  siteSloganElement.forEach(function(element) {
    element.textContent = siteSlogan;
  });
}

function setTitlesToShowStats() {
  siteNameElement.forEach(function(element) {
    element.textContent = recentShowName.replace(/([A-Z])/g, " $1");
  });
  
  siteSloganElement.forEach(function(element) {
    element.textContent = "ep. " + (parseInt(recentShowEp)-1);
  });
}

function continueMostRecent() {
  goToShow(recentShowName)
}


setTitlesToTitles()