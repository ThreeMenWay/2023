import { StringLiteral } from "typescript";

let a: number = 123;
const h1 = document.createElement("h1");
h1.innerHTML = "Hello,I am Lison";
document.body.appendChild(h1);


// let num: number = 123;
// let num = 123;
// num = 'abc';

// let bool: boolean = false;
// bool = true;
// bool = 123;

// let num: number;
// num = 123;
// num = 0b111011;
// num = 0o173;
// num = 0x7b;

// let str: string = "phy";
// str = "ncu";
// const first = "phy";
// const last = "ncu";
// str = `${first} ${last}`;
// const h2 = document.createElement("h2");
// h2.innerHTML = str;
// document.body.appendChild(h2);

// let str : 'phy';
// str = 'ncu';

// let list1: number[] = [1,2,3];
// let list2: Array<number> = [1,2,3];

// let u: undefined = undefined;
// let n: null = null;

// let strInit = "abc";
// let strClone = strInit;
// strClone = "efg";
// console.log(strInit); // 'abc'

// let objInit = { a: "aa" };
// let objClone = objInit;
// console.log(objClone); // {a:"aa"}
// objInit.a = "bb";
// console.log(objClone); // {a:'bb'}

// let obj: object;
// obj = { name: 'phy' };
// obj = 123;

// let obj: object;
// obj = { name: 'phy' };
// console.log(obj.name);

// function getKeys(obj: object) {
//     return Object.keys(obj); // 以列表的形式返回obj中的值
// }
// getKeys({a:'a'}); // ['a']
// getKeys(123);// 类型“123”的参数不能赋给类型“object”的参数

// let tuple: [string,number,boolean];
// tuple = ["a",2,false];
// tuple = [2,"a",false]; // 不能将“number”类型分配给“string”，不能将类型“string”分配给“number”
// tuple = ["a",2];  

// let tuple: [string,number,boolean];
// tuple = ["a",2,false];
// tuple[1] = 3;

// tuple[0].split(":");
// tuple[1].split(":");


// let tuple: [string,number];
// tuple = ["a",2];

// interface Tuple extends Array<number | string> {
//     0: string;
//     1: number;
//     length: 2;
// }

// enum Roles {
//     SUPER_ADMIN = 0,
//     ADMIN = 1,
//     USER = 2
// }

// const superAdmin = Roles.SUPER_ADMIN;
// console.log(superAdmin); // 0

// enum Roles {
//     SUPER_ADMIN = 1,
//     ADMIN,// 2
//     USER// 3
// }

// enum Roles {
//     SUPER_ADMIN = 1,
//     ADMIN = 3,
//     USER = 7
// }
// console.log(Roles[3]); // 'ADMIN'

// let value: any;
// value = 123;
// value = "abc";
// value = false;

// const array: any[] = [1,"a",true];

// const consolText = (text: string): void => {
//     console.log(text);
// }

// const errorFunc = (message: string): never => {
//     throw new Error(message);
// }

// const infinitFunc = (): never => {
//     while (true) {}
// }

// let neverVariable = (() => {
//     while(true) {}
// })();
// neverVariable = 123;

// let value: any;
// console.log(value.name);
// console.log(value.toFIxed());
// console.log(value.length); // 输出的都是unknown

// const merge = <T extends Object ,U>(arg1: T ,arg2: U): T & U => {
//     let res = <T & U>{};// 这里指定返回值的类型兼备T和U两个类型变量代表的类型的特点
//     res = Object.assign(arg1,arg2);
//     return res;
// }
// const info1 = {
//     name: "ncu"
// }
// const info2 = {
//     age: 10
// }
// const phyInfo = merge(info1,info2);
// console.log(phyInfo);

// const getLength = (content: string | number): number => {
//     if(typeof content === "string") return content.length;
//     else return content.toString().length;
// };
// console.log(getLength("abc")); // 3
// console.log(getLength(123));// 3

// const s = Symbol();
// typeof s; // 'symbol'

// const s1 = Symbol("phy");
// const s2 = Symbol("ncu");
// console.log(s1 === s2); //false

// const s1 = Symbol("phy");
// console.log(s1.toString()); // 'Symbol(phy)'

// let s = Symbol("phy");
// console.log(s.toString()); // 'Symbol(phy)'
// console.log(Boolean(s)); // true
// console.log(!s); // false

// let prop = "name";
// const obj = {
//     [prop]: "phy"
// }
// console.log(obj.name); // 'phy'

// let name1 = Symbol();
// let obj = {
//     [name1]: "phy"
// };
// console.log(obj); // { Symbol(): "phy" }
// console.log(obj[name1]); // 'phy'
// console.log(obj.name1); // undefined 

// const myName = Symbol("name");
// const obj = {
//     [myName]: "phy",
//     age: 18
// };
//  for(const key in obj) {
//     console.log(key);
//  }
//  console.log(Object.keys(obj));
//  console.log(Object.getOwnPropertyNames(obj));
//  console.log(JSON.stringify(obj));

// const myName = Symbol("name");
// const obj = {
//     [myName]: "phy",
//     age: 18
// }
// const SymbolPropNames = Object.getOwnPropertySymbols(obj);
// console.log(SymbolPropNames);

// const myName = Symbol("name");
// const obj = {
//     [myName]: "phy",
//     age: 18
// };
// console.log(Reflect.ownKeys(obj));// ['age',Symbol(name)]

// const s1 = Symbol("phy");
// const s2 = Symbol("phy");
// const s3 = Symbol.for("phy");
// const s4 = Symbol.for("phy");
// s3 === s4; // true
// s1 === s3; // false

// const iframe = document.createElement("iframe");
// iframe.src = String(window.location);
// document.body.appendChild(iframe);
// (iframe.contentWindow as Window & {Symbol: SymbolConstructor}).Symbol.for("phy") === Symbol.for("phy");

// const sym = Symbol.for("phy");
// console.log(Symbol.keyFor(sym)); // 'phy'

// const obj = {
//     [Symbol.hasInstance](otherObj: any) {
//         console.log(otherObj);
//     }
// };
// console.log({a:"a"} instanceof (obj as any)); // false

// let arr = [1,2];
// let empty:number[] = [];
// console.log(empty.concat(arr,[3,4]));
// let arr1 = ["a","b"];
// console.log(arr1[Symbol.isConcatSpreadable]);
// arr1[Symbol.isConcatSpreadable] = false;

// class C extends Array {
//     getName() {
//         return "phy";
//     }
// }

// let obj = {
//     [Symbol.match](string: any) {
//         return string.length;
//     }
// };
// console.log("abcde".match(obj)); // 5

// const arr = [1,2,3];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// let obj = {
//     [Symbol.toPrimitive](type: any) {
//         console.log(type);
//     }
// };

// let obj = {
//     [Symbol.toStringTag]:"phy"
// };
// obj.toString();// "[object phy]"
// let obj2 = {
//     get[Symbol.toStringTag]() {
//         return "haha";
//     } 
// };
// obj2.toString(); //"[object haha]"

// const obj = {
//     a: "a",
//     b: "b"
// };
// with(obj) {
//     console.log(a); // "a"
//     console.log(b); // "b"
// }

// console.log(Array.prototype[Symbol.unscopables]);

// let sym: symbol = Symbol();

// const key1: symbol = Symbol();
// let key2: symbol = Symbol();
// const obj = {
//     [key1]: "value1",
//     [key2]: "value2"
// }
// console.log(obj[key1]);
// console.log(obj[key2]);

// enum Status {
//     Uploading,
//     Success,
//     Failed
// }
// console.log(Status.Uploading);// 0
// console.log(Status["Success"]); // 1
// console.log(Status.Failed); // 2

// enum Color {
//     Red = 2,
//     Blue,
//     Yellow
// }
// console.log(Color.Red,Color.Blue,Color.Yellow);
// enum Status {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
// console.log(Status.Success,Status.NotFound,Status.Error);
// enum Status {
//     OK = 200,
//     Created,
//     Accepted,
//     BadRequest = 400,
//     Unauthorized
// }
// console.log(Status.Created,Status.Accepted,Status.Unauthorized);

// const getValue = () => {
//     return 0;
// };
// enum ErrorIndex {
//     a = getValue(),
//     b,
//     c
// }
// enum RightIndex {
//     a = getValue(),
//     b = 1,
//     c
// }
// const Start = 1;
// enum Index {
//     a = Start,
//     b,
//     c
// }

// enum Status {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
// console.log(Status["Success"]);
// console.log(Status[200]);
// console.log(Status[Status["Success"]]);

// enum Message {
//     Error = "Sorry,error",
//     Success = "hoho,success"
// }
// console.log(Message.Error);

// enum Message {
//     Error = "error message",
//     SeverError = Error,
//     ClientError = Error
// }

// enum Result {
//     Faild = 0,
//     Success = "Success"
// }

// enum Animal {
//     Dog = 1,
//     Cat = 2
// }
// interface Dog {
//     type: Animal.Dog;
// }
// interface Cat {
//     type: Animal.Cat;
// }
// let cat1: Cat = {
//     type: Animal.Dog
// }
// let dog: Dog = {
//     type: Animal.Dog
// }

// enum Status {
//     off,
//     On
// }
// interface Light {
//     status: Status
// }
// enum Animal {
//     Dog = 1,
//     Cat = 2
// }
// const light1: Light = {
//     status: Animal.Dog
// }
// const light2: Light = {
//     status: Status.off
// }
// const light3: Light = {
//     status: Status.On
// }

// enum E {
//     A,
//     B
// }
// const getIndex = (enumObj:{A:number}):number => {
//     return enumObj.A;
// };
// console.log(getIndex(E));

// enum Status {
//     Off,
//     On
// }
// const enum Animal {
//     Dog,
//     Cat
// }
// const myStatus = Status.On;
// const animal = Animal.Dog;

// const getLength =(target: any) => {
//     if(target.length) {
//         return target.length;
//     } else {
//         return target.toString().length;
//     }
// }

// const getLength = (target: string | number): number => {
//     if(target.length) {
//         return target.length;
//     } else {
//         return target.toString().length;
//     }
// }

// const getStrLength = (target: string | number): number => {
//     if((<string>target).length) {
//         return (target as string).length;
//     } else { return target.toString().length; }
// };

// const getFullName = ({
//     firstName,
//     lastName,
// }: {
//     firstName: string;
//     lastName: string;
// }) => {
//     return `${firstName} ${lastName}`;
// }

// interface Info {
//     firstName: string;
//     lastName: string;
// }
// const getFullName = ({ firstName,lastName }: Info) => {
//     `${firstName} ${lastName}`;
// }

// const getVegetables = ({ color,type }) => {
//     return A 
// }

// interface Vegetables {
//     color?: string;
//     type: string;
// }

// interface Vegetables {
//     color?: string;
//     type: string;
// };
// const getVegetables = ({ color,type }: Vegetables) => {
//     return  `${color ? color + " " : ""}${type}`;
// };
// getVegetables ({
//     type: "tomato",
//     size: 12,
//     price: 1.2
// } as Vegetables)

// interface Vegetables {
//     color: string;
//     type: string;
//     [prop: string]: any;
// }
// const getVegetables = ({ color,type }: Vegetables) => {
//     return `${color ? color + " " :"" }${type}`
// };
// getVegetables({
//     color: "red",
//     type: "tomato",
//     size: 12,
//     price: 1.2
// })

// interface Vegetables {
//     type: string;
// }
// const getVegetables = ({type}: Vegetables) => {
//     return `${type}`
// }
// const option = { type:"tomato",size: 12 };
// getVegetables(option);

// interface Role {
//     readonly 0: string;
//     readonly 1: string;
// }
// const role: Role = {
//     0:"superadmin",
//     1: "admin"
// };
// role[1] = "sup";

// const NAME: string = "phy";
// NAME = "haha";
// const obj = {
//     name: "phy"
// };
// obj.name = "HaHa";
// interface Info {
//     readonly name: string;
// }
// const info: Info = {
//     name: "phy"
// }
// info["name"] = "HaHa";

// interface AddFunc {
//     (num1: number,num2: number): number;
// }
// const add: AddFunc = (n1,n2) => n1 + n2;
// const join:AddFunc = (n1,n2) => `${n1} ${n2}`;
// add("a",2);

// interface RoleDic {
//     [id:number]: string;
// }
// const role1: RoleDic = {
//     0: "superadmin",
//     1: "admin"
// };
// const role2: RoleDic = {
//     a: "superadmin"
// }
// const role3: RoleDic = ["superadmin","admin"];

// interface RoleDic {
//     readonly [id: number]:string;
// }
// const role: RoleDic = {
//     0: "super_admin"
// };
// role[0] = "admin";

// const obj = {
//     123:"a",
//     "123":"b"
// };

// interface Vegetables {
//     color: string
// }
// interface Tomato {
//     color: string;
//     radius: number;
// }
// interface Carrot {
//     color: string;
//     length: number;
// }

// interface Vegetables {
//     color: string;
// }
// interface Tomato extends Vegetables {
//     radius: number;
// }
// interface Carrot extends Vegetables {
//     length: number;
// }
// const tomato: Tomato = {
//     radius:1.2
// }
// const carrot: Carrot = {
//     color: "orange",
//     length: 20
// }

// interface Vegetables {
//     color: string;
// }
// interface Food {
//     type: string;
// }
// interface Tomato extends Food,Vegetables {
//     radius: number;
// }
// const tomato: Tomato = {
//     type: "vegetables",
//     color: "red",
//     radius: 1.2
// }

// let count = 0;
// const countUp = () => count++;

// interface Counter {
//     (): void;
//     count: number;
// }
//     const getCounter = (): Counter => {
//         const c = () => {
//             c.count++;
//         };
//         c.count = 0;
//         return c;
//     };
//     const counter: Counter = getCounter();
//     counter();
//     console.log(counter.count);
//     counter();
//     console.log(counter.count);

// function add(arg1: number,arg2: number): number {
//     return arg1+arg2;
// }
// const add2 = (arg1: number,arg2: number): number => {
//     return arg1 + arg2;
// }

// let add:(x: number,y: number) => number;
// add = (arg1: number,arg2: number): number => arg1 + arg2;
// add = (arg1: string, arg2: string): string => arg1 + arg2;

// interface Add {
//     (x: number,y: number): number;
// }
// let add: Add = (arg1: string,arg2: string): string => arg1 + arg2;

// type Add = (x: number,y: number) => number;
// let add: Add = (arg1: string,arg2: string): string => arg1 + arg2;

// type Add = (x: number,y: number) => number;
// let add: Add = (arg1,arg2) => arg1 + arg2;
// add(1,2);
// add(1,2,3);
// add(1);

// type Add = (x?: number,y: number) => number;

// const add = (x: number,y = 2) => {
//     return x + y;
// }
// add(1,"a");

// const add = (x: number,y: number = 2) => {
//     return x + y;
// }

// const handleData = (arg1: any,...args: any[]) => {
//     console.log(args);
// }
// handleData(1,2,3,4,5);

// const handleData = (value: any) => {
//     if(typeof value === "string") {
//         return value.split("");
//     } else {
//         return value
//             .toString()
//             .split("")
//             .join("_");
//     }
// };

// function handleData(x: string): string[];
// function handleData(x: number): string;
// function handleData(x: any): any {
//     if(typeof x === "string") {
//         return x.split("");
//     } else {
//         return x
//             .toString()
//             .split("")
//             .join("");
//     }
// }
// handleData("abc").join("");
// handleData(123).join("_");
// handleData(false);

// const getArray = (value: any,times: number = 5): any[] => {
//     return new Array(times).fill(value);
// };
// getArray([1],2).forEach(item => {
//     console.log(item.length);
// });
// getArray(2,3).forEach(item => {
//     console.log(item.length);
// });

// const getArray = <T>(value: T,times: number = 5): T[] => {
//     return new Array(times).fill(value);
// }
// getArray<number[]>([1,2,3],3).forEach(item => {
//     console.log(item.length);
// });
// getArray<number>(2,3).forEach(item => {
//     console.log(item.length);
// });

// const getLength = <T>(param: T): number => {
//     return param.length;
// }

// const getArray = <T,U extends number | undefined>(param1: T,param2: U,times: number): [T,U][] => {
//     return new Array(times).fill(param1,param2);
// }
// getArray("a",1,3).forEach(item => {
//     console.log(item[1].length);
//     console.log(item[0].toFixed(2));
// })

// const getArray: <T>(arg: T,times: number) => T[] = (arg,times) => {
//     return new Array(times).fill(arg);
// }
// type GetArray = <T>(arg: T,times: number) => T[];
// const getArray: GetArray = <T>(arg: T,times: number): T[] => {
//     return new Array(times).fill(arg);
// }

// interface GetArray {
//     <T>(arg: T,times: number): T[];
// }
// const getArray: GetArray = <T>(arg: T,times: number): T[] => {
//     return new Array(times).fill(arg);
// }

// interface GetArray<T> {
//     (arg: T,times: number): T[];
//     tag: T;
// };
// const getArray: GetArray<number> = <T>(arg: Text,times: number): T[] => {
//     return new Array(times).fill(arg);
// }

// interface ValueWithLength {
//     length: number;
// }
// const v:ValueWithLength = {};

// interface ValueWithLength {
//     length: number;
// };
// const getLength = <T extends ValueWithLength>(param: T): number => {
//     return param.length;
// }
// getLength("abc");
// getLength([1,2,3]);
// getLength({ length: 3 });
// getLength(123);

// const getProps = (object: any,propName: any) => {
//     return object[propName];
// }
// const obj = {a: "aa",b: "bb"};
// getProps(obj,"c");// undefined

// const getProp = <T,K extends keyof T>(object: T,propName: K) => {
//     return object[propName];
// };
// const obj = { a: "aa", b: "bb" };
// getProp(obj,"c");

// class Point {
//     x: number;
//     y: number;
//     constructor(x: number,y: number) {
//         this.x = x;
//         this.y = y;
//     }
//     getPosition() {
//         return `(${this.x},${this.y})`;
//     }
// }
// const point = new Point(1,2);

// class Parent {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class Child extends Parent {
//     constructor(name: string) {
//         super(name);
//     }
// }

// class Point {
//     public x: number;
//     public y: number;
//     constructor(x: number,y: number) {
//         this.x = x;
//         this.y = y;
//     }
//     public getPosition() {
//         return `(${this.x},${this.y})`;
//     }
// };

// class Parent {
//     private age: number;
//     constructor(age: number) {
//         this.age = age;
//     }
// }
// const p = new Parent(18);
// console.log(p);
// console.log(p.age);
// console.log(Parent.age);
// class Child extends Parent {
//     constructor(age: number){
//         super(age);
//         console.log(super.age);
//     }
// }

// class Parent {
//     protected age: number;
//     constructor(age: number) {
//         this.age = age;
//     };
//     protected getAge() {
//         return this.age;
//     }
// };
// const p = new Parent(18);
// console.log(p.age);
// console.log(Parent.age);
// class Child extends Parent {
//     constructor(age: number) {
//         super(age);
//         console.log(super.age);
//         console.log(super.getAge());
//     }
// }
// new Child(18);

// class Parent {
//     protected constructor() {

//     }
// }
// const p = new Parent();
// class Child extends Parent {
//     constructor() {
//         super();
//     }
// }
// const c = new Child();

// class UserInfo {
//     readonly name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// const user = new UserInfo ("phy");
// user.name = "ncu";

// class A {
//     constructor(name: string) {}
// };
// const a = new A("phy");
// console.log(a.name);
// class B {
//     constructor(public name: string) {};
// }
// const b = new B("phy");
// console.log(b.name);

// class Parent {
//     public static age: number = 18;
//     public static getAge() {
//         return Parent.age;
//     }
//     constructor(){

//     }
// }
// const p = new Parent();
// console.log(p.age);
// console.log(Parent.age);

// class Parent {
//     public static getAge() {
//         return Parent.getAge;
//     }
//     private static age: number = 18;
//     constructor(){}
// }
// const p = new Parent();
// console.log(p.age);
// console.log(Parent.age);

// class Info {
//     name: string;
//     age?: number;
//     constructor(name: string,age?: number,public sex?:string) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const info1 = new Info("phy");
// const info2 = new Info("phy",18);
// const info3 = new Info("phy",18,"man");

// class UserInfo {
//     private fullName: string = "";
//     constructor(){};
//     getfullName() {
//         return this.fullName;
//     }
//     setfullName(value: string) {
//         console.log(`${value}`);
//         this.fullName = value;
//     }
// }

// abstract class People {
//     constructor(public name: string){};
//     abstract printName(): void;
// }
// class Man extends People {
//     constructor(name: string) {
//         super(name);
//         this.name = name;
//     };
//     printName(): void {
//         console.log(this.name);
//     }
// }
// const m = new Man();
// const man = new Man("phy");
// man.printName();
// const p = new People("ncu");

// abstract class People {
//     constructor(public name: string) {}
//     abstract printName(): void;
// }
// class Man extends People {
//     constructor(name: string) {
//         super(name);
//         this.name = name;
//     }
// }
// const m = new Man("phy");
// m.printName();

// abstract class People {
//     abstract name: string;
//     abstract get insideName(): string;
//     abstract set insideName(value: string);
// }
// class Pp extends People {
//     name: string;
//     insideName: string;
// }

// class People {
//     constructor(public name: string) {}
// }
// let p: People = new People("phy");

// class Animal {
//     constructor(public name: string) {};
// }
// let p = new Animal("phy");

// interface FoodInterface {
//     type: string;
// }
// class FoodClass implements FoodInterface {
//     static type: string;
//     constructor(){};
// }

// interface FoodInterface {
//     type: string;
// }
// class FoodClass implements FoodInterface {
//     constructor(public type: string) {}
// }

// abstract class FoodAbstractClass {
//     abstract type: string;
// }
// class Food extends FoodAbstractClass {
//     constructor(public type: string) {
//         super();
//     }
// }

// class A {
//     protected name: string;
//     constructor(name: string){
//         this.name = name;
//     }
// }
// interface I extends A {};
// class B implements I {};
// class C implements I {
//     name: string;
// }
// class D extends A implements I {
//     getName() {
//         return this.name;
//     }
// }

// const create = <T>(c: { new (): T }): T => {
//     return new c();
// };
// class Info {
//     age: number = 0;
// }
// create(Info).age;
// create(Info).name;

// let name = "phy";
// name = 1234;

// let arr = [1,"a"];
// arr = ["b",2,false];

// let value = Math.random() * 10 > 5 ? 'abc' : 123;
// value = false;

// window.onmousedown = function(mouseEvent) {
//     console.log(mouseEvent.a);
// }

// let x = (a: number) => 0;
// let y = (b: number, c: string) => 0;
// y = x;
// x = y;

// const arr = [1,2,3];
// arr.forEach((item,index,array) => {
//     console.log(item);
// });
// arr.forEach(item => {
//     console.log(item);
// });

// let x = (a: number) => 0;
// let y = (b: string) => 0;
// let z = (c: string) => false;
// x = y;
// x = z;

// const getNum = (
//     arr: number[],
//     callback: (...args: number[]) => number
// ): number => {
//     return callback(...arr);
// };
// getNum(
//     [1,2],
//     (...args: number[]): number => args.length
//     );

// const getNum = (
//     arr: number[],
//     callback: (arg1: number,arg2?: number) => number
// ): number => {
//     return callback(...arg);
// }

// let funcA = function(arg: number | string): void{};
// let funcB = function(arg: number): void {};
// funcA = funcB;

// let x = (a: number): string | number => 0;
// let y = (b: number) => "a";
// let z = (c: number) => false;
// x = y;
// x = z;

// function merge(arg1: number,arg2: number): number;
// function merge(arg1: string,arg2: string): string;
// function merge(arg1: any,arg2: any) {
//     return arg1 + arg2;
// }
// function sum(arg1: number,arg2: number): number;
// function sum(arg1: any,arg2: any): any {
//     return arg1 + arg2;
// }
// let func = merge;
// func = sum;

// enum Status {
//     on,
//     off
// }
// let s = Status.on;
// s = 1;
// s = 2;

// enum Status {
//     On,
//     Off
// };
// enum Color {
//     White,
//     Black
// }
// let s = Status.On;
// s = Color.White;

// enum Status {
//     On = 'on',
//     Off = 'off'
// }
// let s = Status.On;
// s = 'phy';

// class Animal {
//     static age: number;
//     constructor(public name: string) {}
// }
// class People {
//     static age: string;
//     constructor(public name: string) {}
// }
// class Food {
//     constructor(public name: number) {}
// }
// let aa: Animal;
// let pp: People;
// let f: Food;
// aa = pp;
// aa = f;

// class Parent {
//     private age: number = 0;
//     constructor(){}
// }
// class Children extends Parent {
//     constructor() {
//         super();
//     }
// }
// class Other {
//     private age: number = 0;
//     constructor(){}
// }
// const children: Parent = new Children();
// const other: Parent = new Other();

// class Parent {
//     protected age: number = 0;
//     constructor(){}
// }
// class Children extends Parent {
//     constructor(){
//         super();
//     }
// }

// class Onther {
//     private age: number = 0;
//     constructor(){}
// }
// const children: Parent = new Children();
// const other: Parent = new Onther();

// interface Data<T> {}
// let data1: Data<number>;
// let data2: Data<string> ;
// data1 = data2;

// interface Data<T> {
//     data: T;
// }
// let data1: Data<number>;
// let data2: Data<string>;
// data1 = data2;

// const valueList = [123,"abc"];
// const getRandomValue = () => {
//     const number = Math.random() * 10;
//     if(number < 5) return valueList[0];
//     else return valueList[1];
// };
// const item = getRandomValue();
// if(item.length) {
//     console.log(item.length);
// } else {
//     console.log(item.toFixed());
// }

// if((<string>item).length) {
//     console.log((<string>item).length);
// } else {
//     console.log((<number>item).toFixed());
// }

// const valueList = [123,'abc'];
// const getRandomValue = () => {
//     const value = Math.random() * 10;
//     if(value < 5){ return valueList[0]; } else { return valueList[1]; }
// };
// function isString(value: number | string): value is string {
//     return typeof value === 'string';
// }
// const item = getRandomValue();
// if(isString(item)) {
//     console.log(item.length);
// } else {
//     console.log(item.toFixed());
// }

// if(typeof item === "string") {
//     console.log(item.length);
// } else {
//     console.log(item.toFixed());
// }

// const valueList = [{},() => {}];
// const getRandomValue = () => {
//     const number = Math.random() * 10;
//     if(number < 5) {
//         return valueList[0];
//     } else {
//         return valueList[1];
//     }
// };
// const res = getRandomValue();
// if(typeof res === "object") {
//     console.log(res.toString());
// } else {
//     console.log(res());
// }

// class CreateByClass1 {
//     public age = 18;
//     constructor(){}
// }
// class CreateByClass2 {
//     public name = "phy";
//     constructor(){}
// }
// function getRandomItem() {
//     return Math.random() < 0.5 ? new CreateByClass1() : new CreateByClass2();
// }
// const item = getRandomItem();
// if(item instanceof CreateByClass1) {
//     console.log(item.age);
// } else {
//     console.log(item.name);
// }

// let str = "phy";
// str = null;
// let strNull: string | null = "phy";
// strNull = null;
// strNull = undefined;

// const sum = (x: number, y?: number) => {
//     return x + (y || 0);
// }
// sum(1,2);
// sum(1);
// sum(1,undefined); // 1
// sum(1,null);

// interface PositionInterface {
//     x: number;
//     b?: number;
// }
// const position: PositionInterface = {
//     x: 12
// }
// position.b = "abc";
// position.b = undefined;
// position.b = null;

// function getSplicedStr(num: number | null): string {
//     function getRes(prefix: string) {
//         return prefix + num?.toFixed().toString();
//     };
//     num = num || 0.1; // 这里进行了赋值，如果num为null则会将0.1赋值给num
//     return getRes("phy");
// }

// function getSplicedStr(num: number | null): string {
//     function getLength(prefix: string) {
//         return prefix + num!.toFixed().toString();
//     }
//     num = num || 0.1;
//     return getLength("phy");
// }

// type TypeString = string;
// let str: TypeString;
// str = 123;

// type PositionType<T> = { x: T; y: T };
// const position1: PositionType<number> = {
//     x: 1,
//     y: -1
// };
// const position2: PositionType<string> = {
//     x: "right",
//     y: "top"
// };

// type Child<T> = {
//     current: T;
//     child?: Child<T>;
// }
// let ccc: Child<string> = {
//     current: "first",
//     child: {
//         current: "second",
//         child: "test"
//     }
// }
// type child = Child<string>[];

// type Alias = {
//     num: number;
// };
// interface Interface {
//     num: number;
// };
// let alias: Alias = {
//     num: 3
// }
// let interfaceA: Interface = {
//     num: 321
// }
// alias = interfaceA;

// type Name = "phy";
// const name1: Name = "test1";
// const name2: Name = "test2";

// type Direction = "north" | "east" | "south" | "west";
// function getDirectionFirstLetter(direction: Direction) {
//     return direction.substring(0,1);
// }
// getDirectionFirstLetter("test");
// getDirectionFirstLetter("east");

// type Age = 18;
// interface Info {
//     name: string;
//     age: Age;
// }
// const info: Info = {
//     name: "phy",
//     age: 28
// }

// function getValue(index: number) {
//     if(index !== 0 || index !==1) {

//     }
// }

// interface Square {
//     kind: "square";
//     size: number;
// }
// interface Rectangle {
//     kind: "rectangle";
//     height: number;
//     width: number;
// }
// interface Circle {
//     kind: "circle";
//     radius: number;
// }
// type Shape = Square | Rectangle | Circle;
// function getArea(s: Shape) {
//     switch(s.kind) {
//         case "square":
//             return s.size * s.size;
//         case "rectangle":
//             return s.height * s.width;
//         case "circle":
//             return Math.PI * s.radius * 2;
//     }
// }

// interface Square {
//     kind: "square";
//     size: number;
// }
// interface Rectangle {
//     kind: "rectangle";
//     height: number;
//     width: number;
// }
// interface Circle {
//     kind: "circle";
//     radius: number;
// }
// interface Triangle {
//     kind: "triangle";
//     bottom: number;
//     height: number;
// }
// type Shape = Square | Rectangle | Circle | Triangle;
// function getArea(s: Shape) {
//     switch(s.kind) {
//         case "square":
//             return s.size * s.size;
//         case "rectangle":
//             return s.height * s.width;
//         case "circle":
//             return Math.PI * s.radius * 2;
//     }
// }

// function assertNever(value: never): never {
//     throw new Error("Unexpected Object: " + value);
// }
// function getArea(s: Shape) {

// }

// class Counter {
//     constructor(public count: number = 0) {}
//     add(value: number) {
//         this.count += value;
//         return this;
//     }
//     substract(value: number) {
//         this.count -= value;
//         return this;
//     }
// }
// let counter = new Counter(10);
// console.log(counter.count);
// counter.add(5).substract(2);
// console.log(counter.count);

// function add(x: number,y: number): number {
//     return x + y;
// };
// const addT = (arg1: number,arg2: number): number {
//     return arg1 + arg2;
// }

// let add: (x: number,y: number) => number;
// add = (arg1: number,arg2: number): number => arg1 + arg2;
// add = (arg1: string,arg2: string): string => arg1 + arg2;

// interface Add {
//     (x: number,y: number): number;
// }
// let add: Add = (arg1: string,arg2: string): string => arg1 + arg2;

// type Add = (x: number,y: number) => number;
// let add: Add = (arg1: string,arg2: string): string => arg1 + arg2;

// type Add = (x: number,y: number) => number;
// let add: Add = (arg1: string,arg2: string): string => arg1 + arg2;
// add(1,2);
// add(1,2,3);
// add(1);

// type Add = (x?: number,y: number) => number;

// const add = (x: number,y = 2){
//     return x + y;
// };
// add(1,3);
// add(1,"a");

// const add = (x: number,y: number = 2) => {
//     return x + y;
// }

// const handleData = (arg1: any,...args: any[]) => {
//     console.log(args);
// }
// handleData(1,2,3,4,5,6,7);

// const handleData = (arg1: number,...args: number[]) => {

// }
// handleData(1,"A");

// const handleData = (value:any) => {
//     if(typeof value === "string") {
//         return value.split("");
//     } else {
//         return value
//             .toString()
//             .split("")
//             .join("_");
//     }
// }

// function handleData(x: string): string[];// 重载的一部分，指定当参数类型为string时，返回值为string类型的元素构成的数组
// function handleData(x: number): string;
// function handleData(x: any): any { // 这个是重载的内容了，他是实体函数，不算做重载的部分
//     if(typeof x === "string") {
//         return x.split("");
//     } else {
//         return x
//             .toString()
//             .split("")
//             .join("");
//     }
// }
// handleData("abc").join("");
// handleData(123).join("_");
// handleData(false);

// const getArray = (value: any,times: number = 5): any[] => {
//     return new Array(times).fill(value);
// };
// getArray([1],2).forEach(item => {
//     console.log(item.length);
// });
// getArray(2,3).forEach(item => {
//     console.log(item.length);
// });

// const getArray = <T>(value: T,times: number = 5): T[] => {
//     return new Array(times).fill(value);
// };
// getArray<number[]>([1,2],3).forEach(item => {
//     console.log(item.length);
// });
// getArray<number>(2,3).forEach(item => {
//     console.log(item.length);
// })

// const getLength = <T>(parame: T): number => {
//     return parame.length;
// }

// const getArray: <T>(arg: T,times: number) => T[] = (arg,times) => {
//     return new Array(times).fill(arg);
// };
// type GetArray = <T>(arg: T,times: number) => T[];
// const getArrayB: GetArray = <T>(arg: T,times: number): T[] => {
//     return new Array(times).fill(arg);
// }

// interface GetArray {
//     <T>(arg: T,times: number): T[];
// };
// const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
// }

// interface GetArray<T> {
//     (arg: T,times: number): T[];
//     tag: T;
// }
// const getArray: GetArray<number> = <T>(arg: T,times: number): T[] => {
//     return new Array(times).fill(arg);
// };

// interface ValueWithLength {
//     length: number;
// }
// const v: ValueWithLength = {};

// interface ValueWithLength {
//     length: number;
// }
// const getLength = <T extends ValueWithLength>(param: T): number => {
//     return Text.length;
// };
// getLength("abc");
// getLength([1,2,3]);
// getLength({ length: 3 });
// getLength(123);

// const getProps = (object,propName) => {
//     return object[propName];
// };
// const obj = {a:"aa",b:"bb"};
// getProps(obj,"c");

// const getProp = <T,K extends keyof T>(object: T,propName: K) => {
//     return object[propName];
// };
// const obj = { a: "aa", b: "bb" };
// getProp(obj,"c");

// class Point {
//     x: number;
//     y: number;
//     constructor(x: number,y: number) {
//         this.x = x;
//         this.y = y;
//     };
//     getPosition() {
//         return `(${this.x},${this.y})`;
//     }
// }
// const point = new Point(1,2);

// class Parent {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class Child extends Parent {
//     constructor(name: string) {
//         super(name);
//     }
// }

// class Point {
//     public x: number;
//     public y: number;
//     constructor(x: number,y: number) {
//         this.x = x;
//         this.y = y;
//     };
//     public getPosition() {
//         return `(${this.x},${this.y})`;
//     }
// }

// class Parent {
//     private age: number;
//     constructor(age: number) {
//         this.age = age;
//     };
// }
// const p = new Parent(18);
// console.log(p);
// console.log(p.age);
// console.log(Parent.age);
// class Child extends Parent {
//     constructor(name: number) {
//         super(name);
//         console.log(super.age);// 通过super关键字只能访问基类的公共方法和受保护方法
//     }
// }

// class Parent {
//     protected age: number;
//     constructor(age: number) {
//         this.age = age;
//     };
//     protected getAge() {
//         return this.age;
//     }
// }
// const p = new Parent(18);
// console.log(p.age);
// console.log(Parent.age);
// class Child extends Parent {
//     constructor(age: number) {
//         super(age);
//         console.log(super.age);
//         console.log(super.getAge());
//     }
// }

// class Parent {
//     protected constructor() {}
// }
// const p = new Parent();
// class Child extends Parent {
//     constructor() {
//         super();
//     }
// }
// const c = new Child();

// class UserInfo {
//     readonly name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// const user = new UserInfo("phy");
// user.name = "haha";

// class A {
//     constructor(name: string) {}
// }
// const aa = new A("aa");
// console.log(aa.name);
// class B {
//     constructor(public name: string){}
// }
// const b = new B("bb");
// console.log(b.name);

// class Parent {
//     public static age: number = 18;
//     public static getAge() {
//         return Parent.age;
//     }
//     constructor() {}
// }
// const p = new Parent();
// console.log(p.age);
// console.log(Parent.age);

// class Parent {
//     public static getAge() {
//         return Parent.getAge;
//     }
//     private static age: number = 18;
//     constructor() {}
// }
// const p = new Parent();
// console.log(p.age);
// console.log(Parent.age);

// class Info {
//     name: string;
//     age?: number;
//     constructor(name: string,age?: number,public sex?: string) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const info1 = new Info("phy");
// const info2 = new Info("phy",18);
// const info3 = new Info("phy",18,"man");

// class UserInfo {
//     private _fullName: string | undefined;
//     constructor() {};
//     get fullName(){
//      return this._fullName;
//     };
//     set fullName(value) {
//         this._fullName = value;
//     }
// }
// const user = new UserInfo();
// user.fullName = "phy";
// console.log(user.fullName);

// abstract class People {
//     constructor(public name: string) {}
//     abstract printName(): void;
// }
// class Man extends People {
//     constructor(name: string) {
//         super(name);
//         this.name = name;
//     }
//     printName(): void {
//         console.log(this.name);
//     }
// }
// const m = new Man();
// const man = new Man("phy");
// man.printName();
// const p = new People("phy");

// abstract class People {
//     constructor(public name: string){}
//     abstract printName(): void;
// }
// class Man extends People {
//     constructor(name: string) {
//         super(name);
//         this.name = name;
//     }
//     printName(): void {
        
//     }
// }
// const m = new Man("phy");
// m.printName();

// abstract class People {
//     abstract name: string;
//     abstract get insideName(): string;
//     abstract set insidName(value: string);
// }
// class Pp extends People {
//     name: string;
//     insideName: string;
// }

// class People {
//     constructor(public name: string) {}
// }
// let p: People = new People("phy");

// class Animal {
//     constructor(public name: string){};
// }
// let p = new Animal("lark");

// interface Info {
//     name: string;
//     age: number;
// }
// let infoProp: keyof Info;
// infoProp = "name";
// infoProp = "age";
// infoProp = "no";

// function getValue<T,K extends keyof T>(obj: T,names: K[]): T[K][] {
//     return names.map(n => obj[n]);
// }
// const info = {
//     name: "phy",
//     age: 18
// }
// let values: string[] = getValue(info,["name"]);
// values = getValue(info,["age"]);

// interface Info {
//     name: string;
//     age: number;
// }
// type NameType = Info["name"];
// let name: NameType = 123;

// function getProperty<T,K extends keyof T>(o: T,name: K): T[K] {
//     return o[name];
// }

// interface Obj<T> {
//     [key: number]: T;
// }
// const key: keyof Obj<number>;

// interface Obj<T> {
//     [key: string]: T;
// }
// let key: keyof Obj<number>;
// key = 123;
// key = "abc";

// interface Obj<T> {
//     [key: string]: T;
// }
// const obj: Obj<number> = {
//     age: 18
// };
// let value: Obj<number>["age"]; // value的属性值是number

// interface Type {
//     a: never;
//     b: never;
//     c: string;
//     d: number;
//     e: undefined;
//     f: null;
//     g: object;
// }
// type test = Type[keyof Type]; // test的类型是 string | number | object

// interface Info {
//     age: number;
// }
// type ReadonlyType<T> = { readonly [P in keyof T]: T[P] };
// type ReadonlyInfo = ReadonlyType<Info>;
// let info: ReadonlyInfo = {
//     age: 18
// };
// info.age = 28;

// interface Info {
//     age: number;
// }
// type ReadonlyType<T> = { readonly [P in keyof T]?: T[P] };
// type ReadonlyInfo = ReadonlyType<Info>;
// let info: ReadonlyInfo = {};

// interface Info {
//     name: string;
//     age: number;
//     address: string;
// }
// const info: Info = {
//     name: "phy",
//     age: 18,
//     address: "beijing"
// };
// function pick<T,K extends keyof T>(obj: T,keys: K[]): Pick<T,K> {
//     let res = {} as Pick<T,K>;
//     keys.forEach(key => {
//         res[key] = obj[key];
//     });
//     return res;
// }
// const nameAndAddress = pick(info,["name","address"]);

// function mapObject<K extends string | number, T, U> (
//     obj: Record<K,T>,
//     f: (x: T) => U
// ): Record<K,U> {
//     let res = {} as Record<K,U>;
//     for(const key in obj) {
//         res[key] = f(obj[key]);
//     }
//     return res;
// }
// const names = {0:"hello",1:"world",2:"byte"};
// const lengths = mapObject(names,s => s.length);

// type Proxy<T> = {
//     get(): T;
//     set(value: T):void;
// };
// type Proxify<T> = {[P in keyof T]: Proxy<T[P]>};
// function proxify<T>(obj: T): Proxify<T> {
//     let result = {} as Proxify<T>;
//     for(const key in obj ) {
//         result[key] = {
//             get: () => obj[key],
//             set: value => (obj[key] = value)
//         };
//     }
//     return result;
// }
// let props = {
//     name: "phy",
//     age: 18
// };
// let proxyProps = proxify(props);
// console.log(proxyProps.name.get());
// proxyProps.name.set("ncu");

// interface Info {
//     name: string;
//     age: number;
// }
// type ReadonlyInfo<T> = { +readonly [P in keyof T]+?: T[P] };
// let info: ReadonlyInfo<Info> = {
//     name: "phy"
// };
// info.name = "";
// info.age = 18;

// interface Info {
//     name: string;
//     age: number;
// }
// type RemoveModifier<T> = { -readonly [P in keyof T]-?: T[P] };
// type InfoType = RemoveModifier<Readonly<Partial<Info>>>;
// let info1: InfoType = {
//     name: "phy"
// };
// let info2: InfoType = {
//     name: "phy",
//     age: 18
// }
// info2.name = "";

// const stringIndex = "a";
// const numberIndex = 1;
// const symbolIndex = Symbol();
// type Obj = {
//     [stringIndex]: string;
//     [numberIndex]: number;
//     [symbolIndex]: symbol;
// };
// type keys = keyof Obj;
// let key1: keys = 2;
// let key2: keys = 1;
// let key3: keys = "b";
// let key4: keys = "a";
// let key5: keys = Symbol();
// let key:keys = symbolIndex;

// const stringIndex = "a";
// const numberIndex = 1;
// const symbolIndex = Symbol();
// type Obj = {
//     [stringIndex]: string;
//     [numberIndex]: number;
//     [symbolIndex]: symbol;
// };
// type ReadonlyType<T> = { readonly [P in keyof T]?: T[P] };
// let obj: ReadonlyType<Obj> = {
//     a: "aa",
//     1: 11,
//     [symbolIndex]: Symbol()
// };
// obj.a = "bb";

// type MapPromise<T> = { [K in keyof T]: Promise<T[K]> };
// type Tuple = [number,string,boolean];
// type promiseTuple = MapPromise<Tuple>;
// let tuple: promiseTuple = [
//     new Promise((resolve,reject) => resolve(1)),
//     new Promise((resolve,reject) => resolve("a")),
//     new Promise((resolve,reject) => resolve(false))
// ];

// interface Info {
//     name: string
// }
// interface Info {
//     age: number
// }
// let info: Info;
// info = {
//     name: "phy"
// }
// info = {
//     name: "phy",
//     age: 18
// }

// interface Info {
//     name: string
// }
// interface Info {
//     age: number
// }
// interface Info {
//     age: boolean
// }

// interface Res {
//     getRes(input: string): number
// }
// interface Res {
//     getRes(input: number): string
// }
// const res: Res = {
//     getRes: (input: any): any => {
//         if(typeof input === "string") return input.length
//         else return String(input);
//     }
// }
// res.getRes('123').length;

// namespace Validation {
//     export const checkNumber = () => {}
// }
// namespace Validation {
//     export const checkString = () => {}
// }
// namespace Validation {
//     export const checkNumber = () => {}
//     export const checkString = () => {}
// }

// namespace Validation {
//     const numberReg = /^[0-9]+$/;
//     export const stringReg = /^[A-Za-z]+$/;
//     export const checkString = () => {};
// }
// namespace Validation {
//     export const checkNumber = (value: any) => {
//         return numberReg.test(value);
//     }
// }

// class Validation {
//     checkType(){}
// }
// namespace Validation {
//     export const numberReg = /^[0-9]+$/;
//     export const stringReg = /^[A-Za-z]+$/;
//     export const checkString = () => {};
// }
// namespace Validation {
//     export const checkNumber = (value: any) => {
//         return numberReg.test(value);
//     }
// }
// console.log(Validation.prototype);
// console.log(Validation.prototype.constructor);

// function countUp () {
//     countUp.count++;
// }
// namespace countUp {
//     export let count = 0;
// }
// countUp();
// countUp();
// console.log(countUp.count);

// enum Colors {
//     red,
//     green,
//     blue
// };
// namespace Colors {
//     export const yellow = 3;
// }
// console.log(Colors);

// type Type<T> = T extends string ? string : number;
// let index: Type<'a'>;
// let index2: Type<false>;

// type TypeName<T> = T extends any ? T : never;
// type Type1 = TypeName<string | number>;

// type TypeName<T> = T extends string
//     ? string
//     : T extends number
//     ? number
//     : T extends boolean
//     ? boolean
//     ...

// type Diff<T,U> = T extends U ? never : T;
// type Test = Diff<string | number | boolean, undefined | number>;

// type Type<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
// interface Part {
//     id: number;
//     name: string;
//     subparts: Part[];
//     updatePart(newName: string): void;
// }
// type Test = Type<Part>; // Test的类型为“updatePart”

// type Type<T> = T extends any[] ? T[number] : T;
// type test = Type<string[]>;
// type test2 = Type<string>;

// type Type<T> = T extends Array<infer U> ? U : T;
// type test1 = Type<string[]>;
// type test2 = Type<string>;

// type Type = Exclude<"a" | "b" | "c","a" | "b">;
// type Type2 = Exclude<string | number | boolean, string | number>;

// type Type = Extract<"a" | "b" | "c","a" | "c" | "f">;
// type Type2 = Extract<number | string | boolean, string | boolean>;

// type Type = Extract<string | number , undefined | null>;

// type Type = ReturnType< () => string >;
// type Type2 = ReturnType<(arg: number) => void>;

// class A {
//     constructor(){}
// }
// type T1 = InstanceType<typeof A>;
// type T2 = InstanceType<any>;
// type T3 = InstanceType<never>;
// type T4 = InstanceType<string>;

// function setProp(target: any) {

// }
// @setProp

// function setProp () {
//     return function (target: any) {
//         // ...
//     }
// }

// @setProp()

// function setName() {
//     console.log('get setName');
//     return function (target: any) {
//         console.log('setName');
//     }
// }
// function setAge () {
//     console.log('get setAge');
//     return function (target: any) {
//         console.log('setAge');
//     }
// }
// @setName()
// @setAge()
// class Test {};

// let sign = null;
// function setName(name: string) {
//     return function(target: Function) {
//         sign = target;
//         console.log(target.name);
//     };
// }
// @setName("phy")
// class Info {
//     constructor() {}
// }
// console.log(sign === Info);
// console.log(sign === Info.prototype.constructor);

// function addName(constructor: { new(): any }) {
//     constructor.prototype.name = "phy";
// }
// @addName
// class A {};
// const aa = new A();
// console.log(aa.name);

// function addName(constructor: { new():any }) {
//     constructor.prototype.name = "phy";
// }
// @addName
// class A {}
// interface A {
//     name: string;
// }
// const aa = new A();
// console.log(aa.name);

// function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
//     return class extends target {
//         newProperty = "new property";
//         hello = "override";
//     }
// }
// @classDecorator
// class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
// }
// console.log(new Greeter("world"));

// function classDecorator(target: any): any {
//     return class {
//         newProperty = "new property";
//         hello = "override";
//     };
// }
// @classDecorator
// class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
// }
// console.log(new Greeter("world"));

// function enumerable(bool: boolean) {
//     return function (
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ) {
//         console.log(target);
//         descriptor.enumerable = bool;
//     };
// }
// class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//         return this.age;
//     }
// }
// const info = new Info(18);
// console.log(info);
// for(let propName in info) {
//     console.log(propName);
// }

// function enumerable(bool: boolean): any {
//     return function(
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ) {
//         return {
//             value: function() {
//                 return "not age";
//             },
//             enumerable: bool
//         };
//     };
// }
// class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge(){
//         return this.age;
//     }
// }
// const info = new Info(18);
// console.log(info.getAge());

// function enumerbale(bool: boolean) {
//     return function(
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ) {
//         descriptor.enumerable = bool;
//     };
// }
// class Info {
//     private _name: string;
//     constructor(name: string) {
//         this._name = name;
//     }
//     @enumerbale(false)
//     get name() {
//         return this._name;
//     }
//     @enumerbale(false)
//     set name(name) {
//         this._name = name;
//     }
// }

// function printPropertyName(target: any,propertyName: string) {
//     console.log(propertyName);
// }
// class Info {
//     @printPropertyName
//     name: string;
//     @printPropertyName
//     age: number;
// }

