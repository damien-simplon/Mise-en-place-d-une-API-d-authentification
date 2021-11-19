window.onload = function () {
	const connexion = document.getElementById('connexion');
	const inscription = document.getElementById('inscription');
	
	if(connexion){
		connexion.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = new FormData(connexion);
            fetch('https://damien-api-jwt.herokuapp.com/', {
                method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': "*"
				},
                body: form
            })
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    window.location.href = '/';
                }
                else{
                    alert(data.message);
                }
            })
            .catch(error => console.error(error));
		});
	}
}