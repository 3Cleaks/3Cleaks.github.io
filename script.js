// script.js

// Funzione per gestire la schermata di accesso
function chiediAccesso() {
    // Codice di accesso impostato
    const codiceAccesso = "1234";  
    const titolo = document.querySelector('h1');
    const accessForm = document.getElementById('accessForm');
    const content = document.getElementById('content');
    const lockedMessage = document.getElementById('lockedMessage');

    // Richiesta del codice di accesso all'utente
    let codiceInserito = prompt("Inserisci il codice per accedere:");

    // Verifica se il codice è corretto
    if (codiceInserito !== codiceAccesso) {
        alert("Codice errato. Accesso negato.");

        // Cambia il titolo della pagina
        titolo.textContent = "Not Found";

        // Nasconde il contenuto protetto (pulsanti, link, ecc.)
        document.querySelectorAll('.button').forEach(button => button.style.display = 'none');
        document.querySelectorAll('.file-link').forEach(link => link.remove());

        // Mostra il messaggio di errore con animazione
        lockedMessage.style.display = 'block';
        lockedMessage.classList.add('fadeInMessage');
    } else {
        // Se il codice è corretto, mostra il contenuto
        content.style.display = 'block';
        accessForm.style.display = 'none'; // Nasconde il modulo di accesso
    }
}

// Esegui la funzione di accesso quando la pagina viene caricata
window.onload = chiediAccesso;
