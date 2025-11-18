;(function() {
  const card = document.querySelector('.card')

  document.addEventListener('click', function(event) {
    const path = event.composedPath ? event.composedPath() : event.path

    if (path.indexOf(card) !== -1) {
      if (
        path.some(function(el) {
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
