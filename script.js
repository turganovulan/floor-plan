$(document).ready(function () {
  init('floor-plan')
})

function init(elemId) {
  const container = $('#' + elemId)

  createWidget(container)
}

function createWidget(container) {
  const el = $('<div>', { class: 'fp-container' })
  container.append(el)

  const img = $('<img>', { src: 'plan.jpg' })
  el.append(img)
  img.click(openModal)
}

function openModal() {
  const modal = $('<div>', { class: 'fp-modal' })

  // Add modal close button
  const header = $('<div class="fp-modal-header"></div>')
  const closeButton = $(`<button id="fp-modal-close" type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>`)
  closeButton.click($.modal.close)
  modal.prepend(header.append(closeButton))

  // Add content
  const content = $('<div>', { class: 'fp-modal-content' })
  modal.append(content)

  $.get("fp.html", function (fpContent) {
    content.append($(fpContent))
    // window.initFP()

    modal.appendTo('body').modal({
      escapeClose: false,
      clickClose: false,
      showClose: false,
      fadeDuration: 1
    })
  })
}