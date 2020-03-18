// Estructura json genérica
// {
//     "propiedad1": "valor",
//     "propiedad2": "valor"
// }
// Ejemplo de estructura json simple
// {
//     "id": 1,
//     "nombre": "Luke",
//     "apellido": "Skywalker",
//     "edad": 19
// }
// Ejemplo de estructura json más avanzada
// {
//     "provincias": [
//         {
//             "nombre": "Santiago del Estero",
//             "id": "86",
//             "centroide": {
//                 "lat": -27.782412,
//                 "lon": -63.252387
//             }
//         }
//     ],
//     "cantidad": 1,
//     "total": 1,
//     "inicio": 0,
//     "parametros": { ...
//     }
// }
// // Array de elementos en formato json
// [
//     {
//         "id": 1,
//         "nombre": "Luke",
//         "apellido": "Skywalker",
//         "edad": 19,
//         "password": "$2y$10$Hd35v8se0MIYhdzyeiCXuej8T5j6yNmgWWJSWJowLgelMFvSiqevq"
//     },
//     {
//         "id": 2,
//         "nombre": "Leia",
//         "apellido": "Organa",
//         "edad": 19,
//         "password": "$2y$10$pMuPiJ3dOvFw4Jzbl4cpJu59QggCNdterkHjdYn2.ThIPtVKWuiHy"
//     }
// ]

// Conversiond de json a objetos y viceversa

// De json a objetos
let datosJson = '{"club": "Independiente", "barrio": "Avellaneda"}';
let datosConvertidos = JSON.parse(datosJson);
console.log(datosConvertidos);
// Se verá en consola un objeto literal
// {
// club: 'Independiente',
// barrio: 'Avellaneda'
// }

// De objetos a jsonx
let objetoLiteral = { nombre: 'Carla', pais: 'Argentina' };
let datosConvertidos = JSON.stringify(datosObjeto);
console.log(datosConvertidos);
// Se verán en consola los datos en un string de tipo JSON
// '{ "nombre": "Carla", "pais": "Argentina" }'