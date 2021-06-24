interface IUser {
    id:string,
    name:string
}

type User = {
    id: string,
    name: string
}


const user1:IUser= {
    id:'1',
    name:'Michael'
}

const user2: User = {
    id: '1',
    name: 'Michael'
}


console.log(user1,user2);

/*
WHICH ONE SHOULD WE USE?
 - Standard data types use Interface
 - Use types for unions and intersections
 - Key Difference
    - Interaces are guaranteed to be 'named' in error message , whereas type aliases are not
    - Interfaces cannot be used to rename primitives or literl type
    - type aliases cannot participate in declaration merging but interace can
*/

// Union
type Suit = 'CLUBS'|'DIAMONDS'|'HEARTS'|'SPADES'
const card: Suit ='HEARTS';
console.log(card);

// INTERSECTION
interface Timestamps {
    createdAt:Date,
    updatedAt: Date,
}

type PersistedUser = User & Timestamps
const persisted:PersistedUser = {
    id:'1',
    name :'adam',
    createdAt: new Date(),
    updatedAt: new Date(),
}