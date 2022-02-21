function slider ({containerSlider, itemSlider, containerDot}) {
  const sliderBlock = document.querySelector(containerSlider)
  const slides = document.querySelectorAll(itemSlider)
  const dotsBlock = document.querySelector(containerDot)

  const arrBlock = [sliderBlock, slides, dotsBlock]
  for (let i = 0; i <= arrBlock.length; i++) {
    if (arrBlock[i] === null || arrBlock[i] === 0) {
    return
    }
  }

  let dots = []

  const timeInterval = 5000
  let currentSlide = 0
  let interval

  function addBlock () {
    let dot
    for (let i = 1; i <= slides.length; i++) {
      dot = document.createElement('li')
      dot.classList.add('paggination__item')
      dots.push(dot)
      dotsBlock.append(dot)
    }

    dots[0].classList.add('paggination__item--active')
    slides[0].classList.add('banner-container--active')

  }

  function prevSlide (elems, index, strClass) {
    elems[index].classList.remove(strClass)
  }

  function nextSlide (elems, index, strClass)  {
    elems[index].classList.add(strClass)
  }

  function autoSlide () {
    prevSlide(slides, currentSlide, 'banner-container--active')
    prevSlide(dots, currentSlide, 'paggination__item--active')

    currentSlide++
    if (currentSlide >= slides.length) {
      currentSlide = 0
    }
    nextSlide(slides, currentSlide, 'banner-container--active')
    nextSlide(dots, currentSlide, 'paggination__item--active')
  }

  function startSlide (timer = 1500) {
    interval = setInterval(autoSlide, timer)
  }

  function stopSlide () {
    clearInterval(interval)
  }

  sliderBlock.addEventListener('click', function (e) {
    e.preventDefault()

    if (!e.target.matches('.paggination__item, .portfolio-btn')) {
      return
    }

    prevSlide(slides, currentSlide, 'banner-container--active')
    prevSlide(dots, currentSlide, 'paggination__item--active')

    if (e.target.matches('#arrow-right')) {
      currentSlide++
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--
    } else if (e.target.classList.contains('paggination__item')) {
      dots.forEach(function (dot, index) {
        if (e.target === dot) {
          currentSlide = index
        }
      })
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    if (currentSlide < 0) {
      currentSlide = slides.length-1
    }

    nextSlide(slides, currentSlide, 'banner-container--active')
    nextSlide(dots, currentSlide, 'paggination__item--active')
  })

  sliderBlock.addEventListener('mouseenter', function(e) {
    if (e.target.matches('.paggination__item, .portfolio-btn')) {
      stopSlide()
    }
  }, true)

  sliderBlock.addEventListener('mouseleave', function(e) {
    if (e.target.matches('.paggination__item, .portfolio-btn')) {
      startSlide(timeInterval)
    }    
  }, true)

  startSlide(timeInterval)
  addBlock()

}


slider({containerSlider: '.banner', itemSlider: '.banner-container', containerDot: '.paggination'})