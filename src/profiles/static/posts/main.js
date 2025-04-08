console.log("Hello world");

const helloWorldBox = document.getElementById('hello-world');
const postsBox = document.getElementById('posts-box');

$.ajax({

  type: 'GET',
  url: '/hello-world/',
  success: function (response) {
    console.log('success:', response);
    helloWorldBox.textContent = response.text;
  },

  error: function (error) {
    console.error('Error:', error);
  }


})

$.ajax({
  type: 'GET',
  url: '/data/',
  success: function (response) {
    console.log('success:', response);
    const data = response.data;

    console.log('Data:', data);

    data.forEach(el => {
      postsBox.innerHTML += `
        ${el.title} - <b>${el.body}</b> <br>
        `
  })
},

  error: function (error) {
    console.error('Error:', error);
  }



})