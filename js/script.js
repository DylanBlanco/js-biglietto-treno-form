
const button = document.getElementById (`button`);

button.addEventListener (`click`,
    function() {
        //prendi e salva valore username
        const usernameInput = document.getElementById (`username`);
        console.log (`username:`, username, typeof username);
        console.log (`username.value:`, username.value, typeof username.value);

        //prendi e salva valore km
        const kmInput = document.getElementById (`km`);
        console.log (`km percorsi:`, km, typeof km);
        console.log (`km percorsi.value:`, km.value, typeof km.value);

        //prendi e salva valore age
        const ageInput = document.getElementById (`age`);
        console.log (`age percorsi:`, age, typeof age);
        console.log (`age percorsi.value:`, age.value, typeof age.value);
    }
)