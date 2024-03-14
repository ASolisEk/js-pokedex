# js-pokedex
Ejemplo de pokedex usando javascript vanilla JS

### **Estructura de las ramas** 

  
| Rama          | Descripción                                                  | 
| ------------- | ------------------------------------------------------------ | 
| main        | El contenido de la rama main es el código final y sin errores. | 
| equipo       | La rama equipo se crea una vez que se hace merge entre las ramas de los desarrolladores y posteriormente se realizará una salida a main, esta rama representa un punto estable del proyecto. | 
| rama_personal | Rama de trabajo del desarrollador, se trabaja a nivel localhost. | 

  

### **Crear una nueva rama en GIT** 

  

1. Cambiarse a la rama equipo. 

``` 

$ git checkout [equipo] 

``` 

2. Bajar los cambios más recientes de la rama de equipo. 

``` 

$ git pull 

``` 

3. Crear rama personal. 

``` 

$ git checkout -b [rama_personal] 

``` 

4. Hace primer push 

``` 

$ git push -u origin [rama_personal] 

``` 

  

### **Subir cambios a la rama personal** 

  

1. Verificar que se está trabajando en la rama personal. 

``` 

$ git branch 

``` 

2. En caso de estar en otra rama, cambiar a la rama personal. 

``` 

$ git checkout [rama_personal] 

``` 

3. Realizar un commit. 

``` 

$ git commit -am "Numero Tarea | Descripción de tus cambios" => "DEV-132 | cambios de en el codigo" 

``` 

4. Realizar un push 

``` 

$ git push 

``` 

  

### **Hacer merge con otras ramas.** 

1. Cambiarse a la rama con la que se quiere hacer merge y traer los cambios más recientes de esa rama. 

``` 

$ git checkout [rama_para_merge] 

$ git pull 

``` 

2. Cambiar a tu rama y hacer merge. 

``` 

$ git checkout [rama_personal] 

$ git pull 

$ git merge [rama_para_merge] 

``` 

3. Resolver conflictos en caso de haberlos. 

4. Subir cambios. 

``` 

$ git commit -am "Descripción de tus cambios" 

$ git push 

``` 

  

### **Subir a main.** 

1. Hacer merge con la rama de los otros desarrolladores de la rama de equipo a nuestra rama y subir cambios. 

``` 

$ git checkout [equipo] 

$ git pull 

$ git checkout [rama_personal] 

$ git merge [equipo] 

$ git push 

  

``` 

2. Subir cambios a equipo 

``` 

$ git checkout [equipo] 

$ git pull 

$ git merge [rama_personal] 

$ git push 

``` 

3. Subir cambios a main 

``` 

$ git checkout [main] 

$ git pull 

$ git merge equipo 

$ git push 

``` 