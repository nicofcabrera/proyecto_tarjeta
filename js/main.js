const formulario = document.querySelector('#formulario'),
tarjetaNumero = document.querySelector('.tarjeta_numero'),
logoMarca = document.querySelector('.tarjeta_contenedor_logo'),
tarjetaCard = document.querySelector('#tarjeta'),
nombreTarjeta = document.querySelector('.tarjeta_nombre'),
ccvTarjeta = document.querySelector('.ccv_tarjeta'),
mesTarjeta = document.querySelector('.mes_tarjeta'),
yearTarjeta = document.querySelector('.year_tarjeta')   ;

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

// Numero de la tarjeta en input + regex
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

// Nombre Tarjeta
formulario.inputNombres.addEventListener('keyup', (e) =>{
	let valorInput = e.target.value.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;

    if(valorInput == ''){
		nombreTarjeta.textContent = 'Nombre y apellido';
	}
})

// Mes Tarjeta

formulario.selectMes.addEventListener('change', (e) =>{
	let valorInput = e.target.value;
	mesTarjeta.textContent = valorInput
})


// Año Tarjeta
formulario.selectYear.addEventListener('change', (e) =>{
	let valorInput = e.target.value.slice(2);
	yearTarjeta.textContent = valorInput
})


// CCV Tarjeta
formulario.inputCCV.addEventListener('keyup', (e) =>{
	let valorInput = e.target.value;
	
	formulario.inputCCV.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Elimina el ultimo espaciado
	.trim();
	
	ccvTarjeta.textContent = valorInput

    if(valorInput == ''){
		ccvTarjeta.textContent = 'XXX';
	}
})
