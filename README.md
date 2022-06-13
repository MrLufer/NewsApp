# DEMO NEWS APP

La solución  presenta el listado de las publicaciones de los usuarios, para ello se
utilizó el siguiente endpoint https://jsonplaceholder.typicode.com/users/1/posts que 
devuelve las publicaciones del usuario 1, cuando se haga scroll y se llegue al final se
obtiene las publicaciones del usuario 2 y así sucesivamente hasta obtener y
mostrar las publicaciones del usuario 10.

## Installation

Instalar los paquetes del proyecto

```bash
yarn install
```

## Usage

Ejecución en emulador android

```
yarn android
```

## Screens
Se creo solo una pantalla de Home


## Librerías
react-native-async-storage/async-storage: Se utilizó para almacenar en el storage los valores de las publicaciones.
axios: Se utilizó para hacer las peticiones a la api por un tema de facilidad.
dayjs: Se utilizó para trabajar con el tema de fechas.
