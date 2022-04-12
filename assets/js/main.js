/* 
Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
BONUS
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice. console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Potrebbe tornarvi utile l'utilizzo dell'operatore ternario (un istruzione condizionale mono righa)
Operatore Ternario:
condition ? exprIfTrue : exprIfFalse
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator


*/

let posts = [
    {
        idPost: 1 ,
        nameAuthor:"Davide Mucci",
        photoAuthor:"./assets/img/profile_1.jpg",
        date:"04-12-2022",
        textPost: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsum!",
        imgPost: "./assets/img/photo_post_1.jpg",
        numberLikes: 12,
    },
    {
        idPost: 2 ,
        nameAuthor:"Luca Corti",
        photoAuthor:"./assets/img/profile_2.jpg",
        date:"04-11-2022",
        textPost: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus nemo debitis eligendi, tempora voluptas adipisci fugit iusto sunt veniam. ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsum!",
        imgPost: "./assets/img/photo_post_2.jpg",
        numberLikes: 24,
    },
    {
        idPost: 3 ,
        nameAuthor:"Sara Rossi",
        photoAuthor:"./assets/img/profile_3.jpg",
        date:"04-10-2022",
        textPost: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus nemo debitis eligendi, tempora voluptas adipisci fugit iusto sunt veniam. ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsum!",
        imgPost: "./assets/img/photo_post_3.jpg",
        numberLikes: 1,
    }


]


// M2 seleziono un nodo della dom a cui appendere HTML

// creo costante di markup per inserire HTML da inserire in pagina

// eseguo un ciclo forEach per "stampare" tutti i post nell'array

// appendo markup a nodo della DOM

let cardsBoxElement = document.querySelector('.cards');

function generatePost(posts){
    cardsBoxElement.innerHTML = "";
    return posts.forEach(post => { 
        
    
        cardsBoxElement.insertAdjacentHTML("beforeend",`
            <div class="col">
                <div class="card">
                    <div class="user d-flex align-item-center p-3">
                        <div class="profile_img">
                            <img style="height: 80px;" class="rounded-circle" src="${post.photoAuthor}"
                                alt="">
                        </div>
                        <div class="author-date d-flex flex-column justify-content-center ps-2">
                            <div class="fw-bold">${post.nameAuthor}</div>
                            <div class="text-secondary">${post.date}</div>
                        </div>
                    </div>
                    <div class="text_post px-3">
                        <p>${post.textPost}</p>
                    </div>
                    <div class="img_box px-3">
                        <img class="rounded" src="${post.imgPost}">
                    </div>
                    <div class="feedback d-flex align-item-center p-3 text-center mt-3">
                        <div class="likes-${post.idPost} w-50">
                            <i class="fa-solid fa-thumbs-up fa-xl pe-2"></i><span>mi piace</span>
                        </div>
                        <div class="counter-likes w-50">
                            <p>Piace a <strong class="counter-${post.idPost}">${post.numberLikes}</strong> persone</p>
                        </div>
                    </div>
    
    
                </div>
                <!-- /.card  -->
                </div>
            `
    
    )
        
    });
}


generatePost(posts)

posts.forEach(post => {

    const likeElement = document.querySelector(`.likes-${post.idPost}`);

    likeElement.addEventListener('click', function (){

        if (!likeElement.classList.contains("text-primary")) {
            likeElement.classList.add("text-primary")
            let newLikeCount = ++ post.numberLikes 
            let counter = document.querySelector(`.counter-${post.idPost}`)
            console.log(counter);

            counter.innerHTML= newLikeCount
        }
    
        

    })
  
});
