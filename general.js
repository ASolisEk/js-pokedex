let pokemon_activo=null;
let lista_equipo = [];
function asignarNumero(obj) {
    //se obtiene el elemento html del pokemon
    let numero_pokemon = document.getElementById('pokemon-numero');
    numero_pokemon.innerText += obj.innerText;
}

function buscarPokemon() {
    //se obtiene el elemento html del pokemon
    let numero_pokemon = document.getElementById('pokemon-numero');
    let texto_buscar = numero_pokemon.innerText;

    let nombre_pokemon = document.getElementById('pokemon-title');

    let contenedor_imagen = document.getElementById('screen-left');

    //se obtiene los elemento html de las estadisticas a modificar
    let hp = document.getElementById('pokemon-hp');
    let ataque = document.getElementById('pokemon-attack');
    let defensa = document.getElementById('pokemon-defense');
    let velocidad = document.getElementById('pokemon-speed');

    fetch("https://pokeapi.co/api/v2/pokemon/"+texto_buscar)
    .then(response => response.json())
    .then(data => {
        nombre_pokemon.innerText = data.name;

        contenedor_imagen.innerHTML = '<img id="screen-left-image" src="'+data.sprites.front_default+'" alt="">';

        hp.innerText = data.stats[0].base_stat;
        ataque.innerText = data.stats[1].base_stat;
        defensa.innerText = data.stats[2].base_stat;
        velocidad.innerText = data.stats[5].base_stat;

        pokemon_activo = {
            numero_pokemon: parseInt(texto_buscar),
            nombre_pokemon: data.name,
            hp: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            velocidad: data.stats[5].base_stat,
        };
    });

}

function actualizarTablaPokemon() {
    let contenido_tabla = document.getElementById('contenido-tabla');
    contenido_tabla.innerHTML="";

    fetch("http://localhost:3002/get-all")
    .then(respuesta => respuesta.json())
    .then(data => {
        data.forEach( (pokemon, index) => {
            let fila =  "<tr>";
                    fila +=  "<td>"+pokemon.numero_pokemon+"</td>";
                    fila +=  "<td>"+pokemon.nombre_pokemon+"</td>";
                    fila +=  "<td>"+pokemon.hp+"</td>";
                    fila +=  "<td>"+pokemon.ataque+"</td>";
                    fila +=  "<td>"+pokemon.defensa+"</td>";
                    fila +=  "<td>"+pokemon.velocidad+"</td>";
                    fila +=  "<td><button onclick='eliminarPokemon("+'"'+pokemon._id+'"'+")'>Elminar</button></td>";
                    fila +=  "<td><button onclick='mostrarPokemon("+'"'+pokemon._id+'"'+")'>Editar</button></td>";
                fila += "</tr>";
                contenido_tabla.innerHTML +=fila;
        });
    });

    
}

function agregarPokemon() {
    lista_equipo.push(pokemon_activo);

    let data = {
                    title: 'Prueba EVND 5A',
                    body: 'Prueba POST',
                    userId: 1,
                };

    fetch(
        "http://127.0.0.1:8000/api/equipo",
        {
            method:"POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(pokemon_activo)
        }
    )
    .then(response => response.json())
    .then(json => console.log(json));


    actualizarTablaPokemon();
}

function eliminarPokemon(index) {
    lista_equipo.splice(index,1);
    actualizarTablaPokemon();
}


function mostrarPokemon(index) {
    fetch("http://localhost:3002/get-by-id/"+index)
    .then(respuesta => respuesta.json())
    .then(data =>{
        //el pokemon esta en la lista
        let pokemon_editar = data;

        //antes se manda el indice del registro de la lista
        let input_index = document.getElementById('index');
        input_index.value = index;

        //antes se manda el nombre del pokemon
        let nombre_pokemon = document.getElementById('nombre_editar');
        nombre_pokemon.value = pokemon_editar.nombre_pokemon;

        //al final se visualiza el modal
        let modal = document.getElementById('modal');
        modal.style.display= "block";
    });
    
}

function cerrarModal() {
    document.getElementById('modal').style.display= "none";
}

function editarPokemon() {
    let index = document.getElementById('index').value;
    //buscar el pokemon de la lista
    let pokemon_editar = lista_equipo[index];
    //obtener el cambio del nombre
    let nombre_pokemon = document.getElementById('nombre_editar');
    //asignar ese cambio al pokemon actual
    pokemon_editar.nombre_pokemon= nombre_pokemon.value;
    //vuelvo asignar el cambio
    lista_equipo[index] = pokemon_editar;
    cerrarModal();
    actualizarTablaPokemon();
}

actualizarTablaPokemon();