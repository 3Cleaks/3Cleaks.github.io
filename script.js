// script.js

// Funzione per gestire la schermata di accesso
function chiediAccesso() {
    // Codice di accesso impostato
    const codiceAccesso = "1234";  
    const googleEmbed = document.getElementById('googleEmbed');
    const content = document.getElementById('content');
    const lockedMessage = document.getElementById('lockedMessage');
    const titolo = document.querySelector('h1');

    // Richiesta del codice di accesso all'utente
    let codiceInserito = prompt("Inserisci il codice per accedere:");

    // Verifica se il codice è corretto
    if (codiceInserito !== codiceAccesso) {
        alert("Codice errato. Accesso negato.");
        
        // Mostra il messaggio di errore
        lockedMessage.style.display = 'block';
        lockedMessage.classList.add('fadeInMessage');
    } else {
        // Se il codice è corretto, nasconde l'iframe di Google e mostra il contenuto
        googleEmbed.style.display = 'none';  // Nasconde l'iframe di Google
        content.style.display = 'block';     // Mostra il contenuto
    }
}

// Esegui la funzione di accesso quando la pagina viene caricata
window.onload = chiediAccesso;
