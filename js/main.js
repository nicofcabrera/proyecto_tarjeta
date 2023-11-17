const formulario = document.querySelector('#formulario'),
tarjetaNumero = document.querySelector('.tarjeta_numero'),
logoMarca = document.querySelector('.tarjeta_contenedor_logo'),
tarjetaCard = document.querySelector('#tarjeta')   ;

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

    tarjetaNumero.textContent = valorInput;

    if(valorInput == ''){
		tarjetaNumero.textContent = '#### #### #### ####';
        tarjetaCard.classList.remove('visa');
        tarjetaCard.classList.remove('master');
	}

    if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/visa.png';
		logoMarca.appendChild(imagen);
        tarjetaCard.classList.add('visa');
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/mastercard.png';
		logoMarca.appendChild(imagen);
        tarjetaCard.classList.add('master');
	} else{
		logoMarca.innerHTML = '';
        
    }
})