window.onload = function () {
	const connexion = document.getElementById('connexion');
	const inscription = document.getElementById('inscription');
	const read = document.getElementById('read');

	if (connexion) {
		connexion.addEventListener('submit', (e) => {
			e.preventDefault();
			var datas = {
				email: document.getElementById('emailCo').value,
				password: document.getElementById('passwordCo').value,
			};
			fetch('http://localhost:3000/api/login/', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(datas),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
                    localStorage.setItem('user', data._id);
                    //window.location.href = "./read.html";
				})
				.catch((error) => console.error(error));
		});
	}

	if (inscription) {
		inscription.addEventListener('submit', (e) => {
			e.preventDefault();
			var datas = {
				email: document.getElementById('emailIn').value,
				name: document.getElementById('name').value,
				password: document.getElementById('passwordIn').value,
			};
			console.log(datas);
			fetch('http://localhost:3000/api/register/', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(datas),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
				})
				.catch((error) => console.error(error));
		});
	}
	if (read) {
        const id = localStorage.getItem('user');
		fetch('http://localhost:3000/api/users/' + id, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json',
			}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => console.error(error));
	}
};
