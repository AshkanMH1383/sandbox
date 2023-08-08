// install
/**
 * npm install typescript --save-dev
 * npx tsc || npm install -g tsc
 * create tsconfig file
 */

const strtype: string = 'sss'; // string type

const numtype: number = 13; // number type

// void type
function func1(param: number):void {
    console.log(param);
}

// object type
function func2(id: number , name: string): {id: number , name: string} {
    return { id , name }
}


// create type

type User = {
    id: number;
    name?: string;
}

function func3(id: number , name: string): User {
    return { id , name }
}

// create Interface

interface Iuser {
    id: number;
    name: string;
}

interface Ibook {
    id: number;
    name: string;
}

function func4(id: number , name: string): User|Ibook { //  User & Ibook
    return { id , name }
}

type IuserBook = Iuser & Ibook; 



// array


const list: string[] = [
    'ashkan',
    'reza',
]

const nums: number[] = [
    1,2,3,4,5,6
]

const nums2: Array<number> = [ // generic type
    1,2,3,4,5,6
]

const styint: (string|number)[] = [
    1,2,'3',4,'5',6
]

const tupul: [number,string,number,string] = [
    1,'3',4,'5'
]


// make type

type SHIROrKHAT =  'SHIR' | 'KHAT';
const coin = (): SHIROrKHAT => (Math.random() > 0.5 ? "SHIR" : "KHAT")

// enum

enum Cources {
    FARSI,
    ARABI,
    ZABAN
}

const CourcesMean = (cource: Cources): String =>{
    switch (cource) {
        case Cources.FARSI: return "فارسی"; break;
        case Cources.ARABI: return "عربی"; break;
        case Cources.ZABAN: return "زبان"; break;
    }
}

console.log(CourcesMean(Cources.FARSI))


// im dont now this type = unknown

const logger = (somthing: unknown) => console.log(somthing);

// any = use all type -end


interface Users {
    id: Number;
    email: string;
    name?: string|null;
    age: Number;
}



// null != undefined != '' != false != NaN != unknow != void != never != any


const CreateUser = (email: string): Users  => ({
    id: 2,
    email,
    // name: null,
    age: 12,
})



// any

function log(something: any) {
    console.log(something)
}

const canvas = document.getElementById('tst') as HTMLCanvasElement; 


// extends

interface One {
    foo: string;
    bar: string;
}
interface Two {
    bar: string;
}

interface Three extends One , Two {
    dd: string;
}

const makeuser = (user: Three) => ({})


// interface vs type

// interface for relation to database and class
interface UserInterface {
    readonly id: number; // readonly
    email: string;
    name: string;
    age: number;
}

// type used in props and functions
// type not extend
type props ={
    one: string;
    two: string;
}

function propss(params:props) {
 console.log(params)   
}


// never

const test = (test: never): never =>{ // هرگز هیچ خروجی ندارد
    console.log(test); // error
}



// First & Second    and
// First | Second    or
// as string

/**
    {
        'name': 'ashkan'
    }
 */

type Dictionory = {
    [key: string]: string;
}

type TwoDictionory = Record<string, string>; // beter



// generic type

interface Box<T> {
    contents: T;
}

const boxOfStrings: Box<string[]> = {
    contents: ['ashkan' , 'reza']
}

const boxOfString: Box<string> = {
    contents: 'mmad'
}

const boxOfNumbers: Box<number[]> = {
    contents: [5, 6, 7]
}





const idendity = <T>(x: T): T =>x; // generic return

