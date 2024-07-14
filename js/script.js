//`click` aggiungi valiori e salva valori
const infoForm = document.querySelector (`form`);

infoForm.addEventListener (`submit`,
    function(event) {
        //blocca comportamento di default
        event.preventDefault();
        
        //prendi e salva valore username
        const usernameInput = document.getElementById (`username`);
        const username = usernameInput.value;
        console.log('username:', username, typeof username);

        //prendi e salva valore km
        const kmInput = document.getElementById (`km`);
        const km = kmInput.value;
        console.log('km:', km, typeof km);

        //prendi e salva valore age
        const ageInput = document.getElementById (`age`);
        const age = ageInput.value;
        console.log('age:', age, typeof age);

        // prezzo biglietto
        const prezzokm = 0.21;
        let prezzoIntero = km * prezzokm;
        let prezzoFinale = prezzoIntero;
        
    }
)