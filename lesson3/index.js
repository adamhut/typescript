var user1 = {
    id: '1',
    name: 'Michael'
};
var user2 = {
    id: '1',
    name: 'Michael'
};
console.log(user1, user2);



/*
WHICH ONE SHOULD WE USE?
 - Standard data types use Interface
 - Use types for unions and intersections
 - Key Difference
    - Interaces are guaranteed to be 'named' in error message , whereas type aliases are not
    - Interfaces cannot be used to rename primitives or literl type
    - type aliases cannot participate in declaration merging but interace can
*/ 