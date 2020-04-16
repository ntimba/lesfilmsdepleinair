// **** Liste des fonctions **** //
const deleteInArray = (Array, toDelete) => {
    // la fonction peut supprimer 1 element uniquement
    let searchEltIndex = Array.indexOf( toDelete );
    // Suppresion avec la méthode splice()
    Array.splice( searchEltIndex, 1 );
}

// 1. récupéré tout les éléments td 
let tdElts = document.querySelectorAll( 'td' );
let bookingSeats = []; 

for( let tdElt of tdElts){
    tdElt.addEventListener('click', function(){
        // 2. récupéré l'élément parent du tdElt
        let parentElt = tdElt.parentElement;
        // 3. identité seatRow : récupéré le premier enfant de parentElt
        let seatRow = parentElt.firstElementChild.textContent
        // 4. récupéré le numéro du siège 
        let seatNumber = tdElt.textContent
        // 5. créer l'Identité du siège avec seatId
        let seatId = seatRow + seatNumber;
        

        // 6. Si seatId n'est pas dans bookingSeats, on le rajoute
        if( !bookingSeats.includes( seatId ) ){
            bookingSeats.push( seatId );
            // 7. colorer le numéro de siège
            tdElt.style.backgroundColor = "red";
        } else if ( bookingSeats.includes( seatId ) ) { // sinon si on trouve seatId dans bookingSeats, on le supprime

            // 8. Si l'élément existe déjà dans l'array on le supprime
            deleteInArray(bookingSeats, seatId);

            // 9. Décolorer le numéro du siège 
            tdElt.style.backgroundColor = '#fff';
            console.log( tdElt.style );
            
            
        }
  
        // 7. Récupéré l'identifiant ou sera afficher les reservations
        showBookingSeats = document.querySelector('#seatId');
        seats = document.createElement('p');
        seats.textContent = "vos sièges : " + bookingSeats;

        // 8. vider l'élément parent showBookingSeats
        showBookingSeats.innerHTML = '';
        showBookingSeats.appendChild(seats);
        // Affichage dans le console
        console.log( bookingSeats );
    });
}

