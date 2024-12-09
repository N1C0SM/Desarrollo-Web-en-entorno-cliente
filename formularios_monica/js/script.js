function selection() {
	let music = formulario1.music;
	let gender = formulario1.gender;
	// console.log(gender);
	// console.log(music);
	if (music.value === '1') {
		gender.disabled = false;
		new option = document.createElement('option');
		option.value = '0';
		option.textContent = 'Musica de los 90'
		gender.appendChild(option);
	} else if (music.value === '2') {

	}


}
selection();