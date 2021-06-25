/**
 *  THE NEVER TYPE
 *  one of my favourite TypeScript feature. Anytime we are doing checks on a Discriminated union
 * 
 */

const unreachablCaseError  = (x:never): never => {
    throw Error(x)
};


interface UserUpdatedEvent {
    eventType: 'USER_UPDATE',
    params:{
        id: string,
        name: string,
        email: string,
        someThingElse: string,
    }
}
