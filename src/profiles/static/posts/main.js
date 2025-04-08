console.log("Hello world");

const helloWorldBox = document.getElementById('hello-world');

$.ajax({

  type: 'GET',
  url: '/hello-world/',
  success: function (response) {
    console.log('success', response);
    helloWorldBox.textContent = response.text;
  },

  error: function (error) {
    console.error('Error:', error);
  }


})