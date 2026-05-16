//#EP5I1UUzAX
//Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//     diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }
type cardType={
    name: string,
    color: string,
    value: string,
}

const suits:{name:string,color:string}[]=[
    {name:'diamond', color:'red'},
    {name:'heart', color:'red'},
    {name:'spad', color:'black'},
    {name:'clubs', color:'black'}
];

const values:string[] =['6', '7', '8','9', '10','ace','jack','queen','king'];

const deckOfCards:any[] = [ ];

for (let suit of suits ) {
    for (let value of values) {
        deckOfCards.push({
            cardSuit:suit.name,
            value: value,
            color: suit.color,
        });
    }
}

console.log(deckOfCards);

console.log(deckOfCards.reduce((previousValue:any, card:any):any => {
    if (card.cardSuit === 'diamond' ){
        previousValue.diamonds.push(card);
    }else if (card.cardSuit === 'heart' ){
        previousValue.hearts.push(card);
    }else if (card.cardSuit === 'spad' ){
        previousValue.spades.push(card);
    }else if (card.cardSuit === 'clubs' ){
        previousValue.clubs.push(card);
    }

    return previousValue;

}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
}));
