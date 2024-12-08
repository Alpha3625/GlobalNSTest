document.addEventListener('DOMContentLoaded', function () {
  const orderForm = document.getElementById('orderForm')
  if (orderForm) {
    orderForm.addEventListener('submit', function (event) {
      event.preventDefault()

      const nameInput = document.getElementById('name')
      const phoneInput = document.getElementById('phone')
      let name = nameInput.value
      let phone = phoneInput.value

      let xhr = new XMLHttpRequest()
      xhr.open('POST', 'https://order.drcash.sh/v1/order', true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.setRequestHeader('Authorization', 'Bearer RLPUUOQAMIKSAB2PSGUECA')
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            window.location.href = 'thank_you.html'
          } else {
            console.error('Ошибка при отправке данных:', xhr.responseText)
          }
        }
      }
      const data = JSON.stringify({
        stream_code: 'vv4uf',
        client: {
          phone: phone,
          name: name,
        },
      })
      xhr.send(data)
    })
  }
})
