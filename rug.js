console.log('please enter your twitter username')

let userName = '@nftc0llect0r';

userName? console.log(`Hello , ${userName}!`)
: console.log('Hello!');
console.log('enter the name of the NFT to see if you got rugged')
let nft = 'R2R'
const userQuestion = `is my ${nft} a rug?`;

userQuestion? console.log(`${userName} is asking, ${userQuestion}`) : console.log('please ask a question');

let randomNumber = Math.floor(Math.random() * 8);


let rugType='';

switch(randomNumber){

case 0:
console.log('eightBall :It is certain')
break;

case 1:
console.log('eightBall:It is decidedly so')
break;

case 2:
console.log('eightBall:Reply hazy try again')
break;

case 3:
console.log('eightBall:Cannot predict now')
break;

case 4:
console.log('eightBall:Do not count on it')
break;

case 4:
console.log('eightBall:My sources say no')
break;

case 6:
console.log('eightBall:Outlook not so good')
break;

case 7:
console.log('eightBall:Signs point to yes')
break;

default:
console.log('eightBall:try asking again!')
break;

}


