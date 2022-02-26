let getFact = document.getElementById('get');
let getClear = document.getElementById('clear');
let factOut = document.getElementById('kitty-fact');

getFact.addEventListener("click", loadFact);
getClear.addEventListener("click", clearFact);

function loadFact() {
    
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then(response => response.json())
    .then(data => {
       
        let result = data.text;       

        factOut.innerHTML += result + "<br/>" +"<br/>";

    });    
}
function clearFact() {
    factOut.innerHTML = "";
}
