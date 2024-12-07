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
    const consultarAPI = () =>{
        fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => {
        resultado.forEach(comentario => {
            console.table(comentario)
        })
    })
    }
    consultarAPI()


