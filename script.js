window.onload = function () {
	const connexion = document.getElementById('connexion');
	const inscription = document.getElementById('inscription');
	
	if(connexion){
		connexion.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = new FormData(connexion);
            fetch('localhost:3000/api/users', {
                method: 'POST',
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