function showLog(message: string){
    console.log('String >>> ' + message);
}

function showLogAnyThing(valor: any){
    console.log('Any >>> ' + valor);
}

showLog('Hello world!');
showLogAnyThing(77776);
showLogAnyThing('AnyThing');
/*
any(anything), string, number, boolean, array, created class....
*/

let arrayString: Array<string> = ['banana', 'maça', 'morango'];
let enabled: boolean = true;
let arrayString2: [string, string, string] = ['ford ka', 'onix', 'logan'];