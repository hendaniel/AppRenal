// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.






//Para probar en movil tambien, cambiar localhost por la IP actual del PC.
const myIP = "localhost";
// const myIP = "192.168.224.109";

export const environment = {
  production: false,
<<<<<<< HEAD
  urlGetAllProducts : "http://localhost:8081/getAllAlimentos"
=======
  urlGetAllProducts: "http://" + myIP + ":8081/getAlimentoName",
  urlGetProductoByID: "http://" + myIP + ":8081/getAlimentoById",
  urlCompareAliment: "http://" + myIP + ":8081/compararAlimentos"
>>>>>>> 14536c5317d29758322fba3584059b37aea35f9e
};





/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
