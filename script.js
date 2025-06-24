const seletorForm = document.getElementById("seletorForm");
const seletor = document.getElementById("seletor");
const calender = document.getElementById("calendar");

seletorForm.addEventListener("submit", function(event){
    event.preventDefault();
    const valor = seletor.value;
    colorirValor(valor);
});

function colorirValor(valor) {
    const dias = calender.getElementsByTagName("td");
    const data = new Date(valor);
    const diaDoMes = data.getDate().toString(); 

    for (let dia of dias) {
        if (dia.textContent.trim() === diaDoMes) {
            dia.style.backgroundColor = "yellow";
        } else {
            dia.style.backgroundColor = "";
        }
    }
}
