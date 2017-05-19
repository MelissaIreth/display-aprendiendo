(function displayNone(){
	var cajas = Array.from(document.getElementsByClassName('caja'));
	cajas.forEach(function(e){
		e.addEventListener("click", function(){
			this.classList.toggle("no");
		})
	})
})()