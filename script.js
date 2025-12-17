fetch("data.json")
.then(rep=> rep.json())
.then(data=>{
    // j'ai acces a ma donnée : data est un tableau
    console.log(data)
    console.log(data.produits)

    // cette focntion recoit le tableau de prodiots (les sneakers)
    afficheLesSneakers(data.produits) 
    // cette focntion recoit le tableau des témoignages
    afficheTemoin(data.temoignages)
      // cette focntion recoit le tableau de servives 
    afficheServ(data.services)

})


function afficheLesSneakers(sneakers){

    sneakers.forEach(sneaker=>{
// sert a afficher les carte dans la section qui a l'id section1
document.getElementById("section1").innerHTML +=
`
            <div class="card2 btm">
                <img src="${sneaker.imageUrl}" alt="" width="300px" class="alignfin">
                <h4 class="red">${sneaker.nom}</h4>
                <p>${sneaker.description}</p>
            </div>
`
    })

}








function afficheTemoin(personne){

    personne.forEach(temoin=>{
// sert a afficher les carte dans la section qui a l'id section1
document.getElementById("section2").innerHTML +=
`
        
            <!-- carte de temoignage -->

            <div class="w-28 card2">
                <img src="asset/Julien.png" alt="">
                <h4>${temoin.prenom}</h4>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <p class="red">${temoin.typeExperience}</p>
                <p>${temoin.commentaire}</p>
                <p class="left5">note ${temoin.note}</p>
            </div>
        

`
    })

}




function afficheServ(avantage){

    avantage.forEach(avt=>{
// sert a afficher les carte dans la section qui a l'id section1
document.getElementById("section3").innerHTML +=
`

        <!-- avantage -->
<div class="card9 w-33 space-between margetop left">
<i class="ph-fill ph-leaf"></i>
    <h3>${avt.nom}</h3>
    <p>${avt.description}</p>
</div>


`

 })

}





// defilement horizontal
const container = document.querySelector('.sliderProjets-container');

let isDown = false;
let startX;
let scrollLeft;
let isDragging =false
container.addEventListener('dragstart', (e) => e.preventDefault());

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  container.classList.add('dragging');
  startX = e.clientX;
  scrollStart = container.scrollLeft;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const delta = e.clientX - startX;
  container.scrollLeft = scrollStart - delta;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  container.classList.remove('dragging');
});


 AOS.init();