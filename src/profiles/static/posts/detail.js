console.log("detail.js loaded")
const postBox = document.getElementById('post-box');
const backBtn = document.getElementById('back-btn');
const updateBtn = document.getElementById('update-btn');
const deleteBtn = document.getElementById('delete-btn');
const url = window.location.href + "data/"
const  spinnerBox = document.getElementById('spinner-box');

const titleInput = document.getElementById('id_title');
const bodyInput = document.getElementById('id_body');

backBtn.addEventListener('click', () => {
    history.back();
})

$.ajax({

    type: 'GET',
    url: url,
    success: function (response) {
        console.log('success:', response);
       
        const data = response.data;

        if (data.logged_in !== data.author) {
    
           
        }
        else{
            updateBtn.classList.remove('not-visible');
            deleteBtn.classList.remove('not-visible');
        }


        const titleEl = document.createElement('h3');
        titleEl.setAttribute('class', 'mt-1');

        const bodyEl = document.createElement('p');
        bodyEl.setAttribute('class', 'mt-1');


        titleEl.textContent = data.title;
        bodyEl.textContent = data.body;

        titleInput.value = data.title;
        bodyInput.value = data.body;

        postBox.appendChild(titleEl);
        postBox.appendChild(bodyEl);

        
        spinnerBox.classList.add('not-visible');

      
    },
    error: function (error) {
        console.error(error);
    }


})