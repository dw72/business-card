;(function() {
  const card = document.querySelector('.card')
  const className = card.getAttribute('data-toggle-class')

  document.addEventListener('click', function() {
    if (['I', 'A'].indexOf(event.target.nodeName) !== -1) {
      return
    } else if (event.target.classList.contains('card')) {
      card.classList.toggle(className)
    } else {
      card.classList.remove(className)
    }
  })
})()
