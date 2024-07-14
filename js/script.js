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
        
        // calcola prezzo under e over
        if (age < 18) {
            prezzoFinale = prezzoIntero * 0.8;
            console.log('Prezzo Scontato Under 18:', prezzoFinale);
        } else if (age > 65) {
            prezzoFinale = prezzoIntero * 0.6;
            console.log('Prezzo Scontato Over 65:', prezzoFinale);
        } else {
            console.log('Prezzo biglietto intero:', prezzoFinale);
        }

        //stampa prezzo biglietto
        document.getElementById('prezzoFinale').innerHTML= prezzoFinale.toFixed(2);
    }
)