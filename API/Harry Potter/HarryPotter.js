
function criaDiv(result){

	const pai = document.querySelector(".container")
	const div = document.createElement('div');
	div.classList.add("bruxo")
	div.innerHTML = `<img src="${result.image}" alt="">
	<p>${result.name}`
	pai.appendChild(div)

}

function limpaDiv(){
	const pai = document.querySelector(".container");
	if (pai.childNodes.length > 0) pai.innerHTML = ""; 
}
const arrays = fetch('https://hp-api.onrender.com/api/characters')

	.then(response => response.json())
	.then(response => {

		const btn = document.querySelector(".buscabtn")
		const result = response;
		btn.addEventListener("click", () =>{
			limpaDiv()
			busca()
		})

		function busca(){
			const input = document.querySelector(".buscaInput")
			const search = input.value;
			if(search.length === 0) return alert("digite um nome correto");
			for (let i in result){
				if (result[i].name.includes(search)){criaDiv(result[i])};
			}
		}
		



	})
	.catch(err => console.error(err));

