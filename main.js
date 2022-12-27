const apiKey = 'A592DDA642BDA14ABAE08F0F8BC8215C978F5386563B9D14F37537C7952AE4F8';

// $.ajax({
//   method: "GET",
//   url: "http://book.interpark.com/api/bestSeller.api",
//   data: { key: apiKey, 
//     categoryId: '100',
//     output: 'json'
//   }
// })
//   .done(function( msg ) {
//     console.log(msg);
//   });

fetch("http://book.interpark.com/api/bestSeller.api", 
  { key: apiKey, 
    categoryId: '100',
    output: 'json'}
  )
    .then((response) => console.log(response));