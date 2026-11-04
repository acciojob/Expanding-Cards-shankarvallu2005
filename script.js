//your JS code here. If required.
const panels = document.querySelectorAll(".panel");

panels.forEach((panel)=>{
    panel.addEventListener("click", (event)=>{
		panels.forEach( p => p.classList.remove("active"))
	    panel.classList.add("active");
	})
})
