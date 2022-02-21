const sidebar = function() {
  const menuBtn = document.getElementById('menu')
  const menuImg = document.querySelector('.header-menu-block__img')
  const menuText = document.querySelector('.header-menu-block__text')
  const sidebarBlock = document.querySelector('.sidebar')
  const listLeft = document.querySelector('.list-left')
  const listLeftItems = document.querySelectorAll('.list-left__item .list__link')
  const listRighttItems = document.querySelectorAll('.list-right')


  function getNewArr (arr) {
    const newArr = []
    for (let index in arr) { 
      if (Number(index) <= listLeftItems.length) {
        if (listLeftItems[index].classList.contains('list__link')) {
          newArr.push(listLeftItems[index])
        }
      }
    }
    return newArr
  }

  function showList () {
    listLeft.addEventListener('click', function(e) {
      if (e.target.classList.contains('list__link')) {
        const tabBtn = e.target
        for (let index in getNewArr(listLeftItems)) {
          let tab = getNewArr(listLeftItems)[index]
            if (tab === tabBtn) {
              listRighttItems[index].classList.remove('list-right--hidden')
            } else {
              listRighttItems[index].classList.add('list-right--hidden')
            }
        }
      }
    })
  }


  menuBtn.addEventListener('click', function() {
    if (!menuBtn.classList.contains('header-menu-block--active')) {
      menuBtn.classList.add(('header-menu-block--active'))
      sidebarBlock.classList.remove('sidebar--hidden')
      menuImg.src = './img/close-black.svg'
      menuText.textContent = 'Закрыть'
      showList()
      
    } else {
      menuBtn.classList.remove(('header-menu-block--active'))
      sidebarBlock.classList.add('sidebar--hidden')
      menuImg.src = './img/menu-black.svg'
      menuText.textContent = 'Меню'
    }
  })
}
sidebar()