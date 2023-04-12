/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const socket = io()

socket.on('arr-chat', (data) => {
  let html = 'Chat'
  Object.keys(data).forEach(key => {
    const item = data[key]
    html += '<p style="padding: 16px 0px; margin: 0px"><span style="font-weight: bold; color: blue">' + item.from.email + ': </span><span style="font-style: italic; color: green" >' + item.text + ' </span></p>'
  })
  document.getElementById('div-msg').innerHTML = html
})

function enviar (id, email) {
  const text = document.getElementById('in-text').value
  socket.emit('data-chat', { from: { id, email }, text })
  return false
}
