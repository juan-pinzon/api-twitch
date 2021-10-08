# Api-twitch and CRUD

## CRUD
Se realiza CRUD sobre una base de datos no relacional MongoDB sobre película, con sus respectivas validaciones.
Tiene los métodos de:
 - Crear: *[Post] 'api/movies'*
 - Leer todos: *[Get] 'api/movies'* [QueryParam tags (arreglo)]
 - Leer uno: *[Get] 'api/movies/:movieId'*
 - Actualizar uno: *[Patch] 'api/movies/:movieId'*
 - Eliminar uno: *[Delelet] 'api/movies/:movieId'*

## API Twitch
Se realiza un endPoint que consulta la información más básica de un usuario pasando como parámetro su nombre de usuario y otro que guarda esa misma información en una base datos relacional MySQL:

Consulta de usuario:

*[Get] 'api/twitch/user/:username'*

Guardar información del usuario:

*[Post] 'api/twitch/user/:username'*


> Se realizó de esta manera pues en la prueba propuesta no se es muy claro en lo referente a la utilización del api de twitch, hacer las operaciones CRUD sobre un recurso de Twitch requería de una mayor complejidad y tiempo pues implicaba tener todo un proceso de Autenticación de tipo OAuth2, lo cual no está contemplado en el enunciado, así que se intenta hacer el mayor acercamiento posible al requerimiento
