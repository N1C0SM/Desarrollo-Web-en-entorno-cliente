// function show() {
// 	let inputValueMonth = document.getElementById('month').value;
// 	let inputValueDay = document.getElementById('day').value;
// 	let inputValueHour = document.getElementById('hour').value;
// 	let inputValueEvent = document.getElementById('event').value;
// 	let calendarOK = false;
// 	if ((inputValueMonth > 0) & (inputValueMonth < 31)) {
// 		calendarOK = true;
// 	}
// 	if ((inputValueDay > 0) & (inputValueDay < 31)) {
// 		calendarOK = true;
// 	}
// 	if ((inputValueHour > 1) & (inputValueHour < 12)) {
// 		calendarOK = true;
// 	}
// 	if (calendarOK) {
// 		let textCalendar = document.createElement('p');
// 		textCalendar.innerText = 'Evento : ' + inputValueEvent + ' , Mes : ' + inputValueMonth + ' , Dia : ' + inputValueDay + ' , Hora : ' + inputValueHour;
// 		document.body.append(textCalendar);
// 	}
// }

let events = []

for (let i = 0; i < 12; i++) {
	let days = []
	for (let j = 0; j < 31; j++) {
		//option 1
		let hours = []
		for (let k = 0; k < 24; k++) {
			hours[k] = null
		}
		days[j] = hours

		//option 2
		// days[j] = new Array(24)
	}
	events[i] = days
}


events[0][0][0] = 'año nuevo'
events[8][19][7] = 'inicio de curso'
events[11][23][20] = 'discurso del rey en navidad'
console.log(events)