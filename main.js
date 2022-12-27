const apiKey = 'A592DDA642BDA14ABAE08F0F8BC8215C978F5386563B9D14F37537C7952AE4F8';
const path = "http://book.interpark.com/api/bestSeller.api"

const ulEl = document.querySelector('.bs');

function bsView(msg, index) {
  const liChild = document.createElement('li');
  const imgChild = document.createElement('img');
  const spanChildTitle = document.createElement('span');
  const spanChildDesc = document.createElement('span');

  liChild.classList.add('bs-list');

  imgChild.src = msg.item[index].coverLargeUrl;
  imgChild.classList.add('thumbnail');

  spanChildTitle.textContent = msg.item[index].title;
  spanChildDesc.textContent = msg.item[index].description;
  
  ulEl.append(liChild);
  liChild.append(imgChild, spanChildTitle, spanChildDesc);
}

$.ajax({
  method: "GET",
  url: path,
  data: { key: apiKey, 
    categoryId: '100',
    output: 'json'
  }
})
  .done(function( msg ) {
    for (let index = 0; index < 10; index++) {
      bsView(msg, index);
      }
    });

// fetch(`http://book.interpark.com/api/bestSeller.api`,
//   {key: apiKey, 
//   categoryId: '100',
//   output: 'json'}
//   )
//   .then((response) => console.log(response))
//   .then((data) => console.log(data));