// script.js

// Funzione che richiede il codice e gestisce l'accesso
const codiceAccesso = "1234";  // Imposta il codice che desideri
let codiceInserito = prompt("Inserisci il codice per accedere:");

// Verifica se il codice inserito è corretto
if (codiceInserito !== codiceAccesso) {
    alert("Codice errato. Accesso negato.");
    
    // Cambia il titolo da "3C LEAKS" a "Not Found"
    document.querySelector('h1').textContent = "Not Found";
    
    // Rimuove i pulsanti se il codice è errato
    document.querySelectorAll('.button').forEach(button => button.style.display = 'none');
    
    // Mostra il messaggio di accesso negato con animazione
    const lockedMessage = document.querySelector('.locked-message');
    lockedMessage.style.display = 'block';
    lockedMessage.classList.add('fadeInMessage');
}