const apiKey = 'A592DDA642BDA14ABAE08F0F8BC8215C978F5386563B9D14F37537C7952AE4F8';
const path = "http://book.interpark.com/api/bestSeller.api"

const ulEl = document.querySelector('.bs');

// $.ajax({
//   method: "GET",
//   url: path,
//   data: { key: apiKey, 
//     categoryId: '100',
//     output: 'json'
//   }
// })
//   .done(function( msg ) {
//     console.log(msg);
//     for (let index = 0; index < 10; index++) {
//       console.log(msg.item[index].title);
//         const liChild = document.createElement('li');
//         liChild.textContent = `${msg.item[index].title}, ${msg.item[index].author}`;
//         ulEl.append(liChild);
//       }
//     });

fetch("http://book.interpark.com/api/bestSeller.api",
  {key: apiKey, 
  categoryId: '100',
  output: 'json'}
  )
  .then((response) => console.log(response.json))
  .then((data) => console.log(data));