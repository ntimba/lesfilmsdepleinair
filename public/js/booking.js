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
        }

        // 7. Récupéré l'identifiant ou sera afficher les reservations
        showBookingSeats = document.querySelector('#seatId');
        seats = document.createElement('p');
        seats.textContent = "vos sièges : " + bookingSeats;

        // 8. vider l'élément parent showBookingSeats
        showBookingSeats.innerHTML = '';
        showBookingSeats.appendChild(seats);

        console.log( bookingSeats );
    });
}

// *** Amélioration de l'application *** //
// 1. En cliquant pour la deuxième fois sur le meme élément, on le deselectionne.
// 2. Une personne ne peut pas reserver 10 places 

