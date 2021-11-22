window.onload = function () {
	const connexion = document.getElementById('connexion');
	const inscription = document.getElementById('inscription');
	
	if(connexion){
		connexion.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = new FormData(connexion);
            fetch('http://localhost:3000/api/login/', {
                method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
                body: form
            })
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    console.log("connexion réussie");
                }
                else{
                    alert(data.message);
                }
            })
            .catch(error => console.error(error));
		});
	}

    if(inscription){
        inscription.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = new Formadata(inscription);
            fetch('http://localhost:3000/api/register/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: form
            })
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    console.log("inscription réussie");
                }
                else{
                    alert(data.message);
                }
            })
            .catch(error => console.error(error));
        });
    }
}