const apiKey = 'A592DDA642BDA14ABAE08F0F8BC8215C978F5386563B9D14F37537C7952AE4F8';
const path = 'http://book.interpark.com/api/bestSeller.api'

const ulEl = document.querySelector('.bs');


// $.ajax({
//   method: "GET",
//   url: path,
//   data: { key: apiKey, 
//     categoryId: '100',
//     output: 'json'
//   }
// })
//   .done(function(msg) {
//     for (let index = 0; index < 10; index++) {
//       bsView(msg, index);
//       }
//     });

function bsView(data, index) {
  const liChild = document.createElement('li');
  const imgChild = document.createElement('img');
  const spanChildTitle = document.createElement('span');
  const spanChildDesc = document.createElement('span');

  liChild.classList.add('bs-list');

  imgChild.src = data.item[index].coverLargeUrl;
  imgChild.classList.add('thumbnail');

  spanChildTitle.textContent = data.item[index].title;
  spanChildDesc.textContent = data.item[index].description;
  
  ulEl.append(liChild);
  liChild.append(imgChild, spanChildTitle, spanChildDesc);
}


function createUrl(obj) {
  let url = `${path}?key=${apiKey}`;
  for (const key in obj) {
    url += `&${key}=${obj[key]}`;
  }
  return url;
}

const bestseller = {
  categoryId: 100,
  output: 'json'
}

fetch(createUrl(bestseller))
  .then((response) => response.json())
  .then((data) => {
    for (let index = 0; index < 10; index++) {
      bsView(data, index);
    }
  });