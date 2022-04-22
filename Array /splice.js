let myFish = ['angel', 'dolphin','clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)

console.log(myFish);

//[ 'angel', 'dolphin', 'clown', 'sturgeon' ]


let Fish = ['angel','clown', 'mandarin', 'sturgeon']
let remove = myFish.splice(-2, 1,'dolphin')

console.log(myFish);

//[ 'angel', 'clown', 'dolphin', 'sturgeon' ]
