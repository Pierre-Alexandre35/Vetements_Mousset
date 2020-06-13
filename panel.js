

const radioSelector = () => {

    const sexe = document.getElementById("sexe-selector");
    const woman_items = document.getElementById("woman-items");
    const men_items = document.getElementById("men-items");

    sexe.addEventListener("click", (e)=>{
        var sexe_value = e.target.value;
        if(sexe_value == 'homme'){
            woman_items.style.display = "none";
            men_items.style.display = "block";

        }
        else{
            woman_items.style.display = "block";
            men_items.style.display = "none";
        }
    });

}

const app = () => {
    radioSelector();
}

app();
