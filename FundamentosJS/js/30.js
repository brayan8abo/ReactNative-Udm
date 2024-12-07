// fetch API - Async Await

//FETCH API

const url = "https://jsonplaceholder.typicode.com/comments" //api

// fetch(url).then((respuesta) => {
//     // console.log ('Haciendo fetch...')
//     // console.log (respuesta)
//     return respuesta.json()
// })
//     .then((resultado) => {
//         /* console.log('Resultado casi listo...')
//         console.log(resultado) */
//         resultado.forEach(comentario => {
//             console.log(comentario)
//         });
//     })


//segunda opcion
/* fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => {
        resultado.forEach(comentario => {
            console.table(comentario)
        })
    }) */

    //lo puedo volver funcion
  /*  const consultarAPI = async () =>{
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log (resultado)
    resultado.forEach (comentario =>{
        console.table (comentario)
    })
   }
   consultarAPI()
 */


   const consultarAPI = async () =>{
    const respuesta = await fetch(url)
    console.log ('desupés de respuesta')
    console.log (respuesta)
    const resultado = await respuesta.json()
    console.log ('después de resultado')

   }
   consultarAPI()
