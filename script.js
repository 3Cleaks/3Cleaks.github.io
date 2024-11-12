// script.js

// Funzione per gestire l'accesso e nascondere l'iframe
function chiediAccesso() {
    // Codice di accesso corretto
    const codiceAccesso = "1234";  
    const iframeEmbed = document.getElementById('iframeEmbed');
    const content = document.getElementById('content');
    const lockedMessage = document.getElementById('lockedMessage');

    // Richiesta del codice di accesso all'utente
    let codiceInserito = prompt("Inserisci il codice per accedere:");

    // Verifica se il codice è corretto
    if (codiceInserito !== codiceAccesso) {
        // Se il codice è errato
        alert("Codice errato. Accesso negato.");
        
        // Mostra il messaggio di errore
        lockedMessage.style.display = 'block';
        lockedMessage.classList.add('fadeInMessage');
    } else {
        // Se il codice è corretto
        iframeEmbed.style.display = 'none';  // Nasconde l'iframe che occupa lo schermo
        content.style.display = 'block';     // Mostra il contenuto
    }
}

// Esegui la funzione di accesso quando la pagina viene caricata
window.onload = chiediAccesso;
