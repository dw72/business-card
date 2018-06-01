;(function() {
  const card = document.querySelector('.card')

  document.addEventListener('click', function(event) {
    if (event.path.indexOf(card) !== -1) {
      if (
        event.path.some(function(el) {
          return el.tagName === 'A'
        })
      ) {
        return
      }
      card.classList.toggle('flipped')
    } else {
      card.classList.remove('flipped')
    }
  })
})()
