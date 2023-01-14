const nftNames = ['Frosties', 'Evil Ape', 'Pixelmon','Crypto Zoo', 'R2R' , 'Blockverse', 'SolGame', 'Swipathefox' ];
const images = ['/Users/samiel-amoudi/Desktop/rug message project/How-To-Properly-Care-For-Different-Types-Of-Rugs-So-They-Last-Longer-2.webp', '/Users/samiel-amoudi/Desktop/rug message project/How-To-Properly-Care-For-Different-Types-Of-Rugs-So-They-Last-Longer.webp', '/Users/samiel-amoudi/Desktop/rug message project/rug-care.webp'];

function generateMessage(nft) {
    let match = false;
    let img;
    for(let i = 0; i < nftNames.length; i++) {
      if (nftNames[i] === nft) {
          match = true;
          img = document.createElement("img");
          img.src = images[Math.floor(Math.random() * images.length)];
          img.id = "message-image";
          document.getElementById("message-container").appendChild(img);
          break;
      }
    }
    if(!match){
      document.getElementById("message").innerHTML = 'The gods have spared you';
      if(!img){
          img.remove();
      }
    }
  }
  
  

const form = document.getElementById('nft-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const input = document.getElementById('nft-name').value;
  generateMessage(input);
});

