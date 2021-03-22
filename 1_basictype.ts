const str : string = 'king';    // 문자열 

const num : number = 10;      // 정수

// 배열
const arr : Array<Number> = [1,2,3];
const colors: Array<string> = ['#abdd23', '#349233'];
const items : number[] = [1,2,3,4];


// 튜플
// 특정인덱스에 타입도 지정하겠다 ~~ 길이 까지도 지정한다. 
const address : [string, number ] = ['a',2];


// 객체
const obj: object = {};

// 이렇게 작성하면 멤버변수의 타입을 신경쓰지 않는다.
const person: object = {
  name:'king',
  age:2041
};

// 구체적으로 멤버변수의 타입을 정한다.
const person2: {name:string , age:number} = {
  name: 'king2',
  age:1234532
}

// TS 진위값

const isshow: boolean = true;

// 함수 파라미터 타입 정하는 방식 
function sum(a: number, b: number) {
  return a + b;
}

// 함수 리턴값 타입정의
function sum2(a: number, b: number): number {
  return a + b;
}

// sum2(1,2,3,4); 
// 기존 js에선 파라미터 갯수가 달라도 유연하게 무시하는데
// ts에서는 엄격함 !!!!!!!!!!!!!!!!!!


// 옵셔널 파라미터
// 가변인자를 넣어주고 싶을 때
// 물음표를 넣어 써도 된다 안써도 된다 명시하기
function log(a: string, b?: string) : string{
  return a;
}

log('hi');
log('hi', 'jejejejeje');

// basic ts practice
// 객체배열
let iceCreams: { id: number, taste: string, sugar: number }[];

// 객체배열을 반환하겄다 ~~~
function fetchIceCreamsItems() : { id: number, taste: string, sugar: number }[] {
  const icecreames = [
    { id:1 , taste: 'vanilla', sugar:23},
    { id:2 , taste: 'strawberry', sugar:43},
    { id:3 , taste: 'choco', sugar:73}
  ];

  return icecreames;
}

function addIceCream(ic: { id: number, taste: string, sugar: number }): void {
  iceCreams.push(ic);
}

function deleteIceCreame(idx: number) :void {
  iceCreams.splice(idx , 1);
}

function meltIceCreames(idx: number, ic: { id: number, taste: string, sugar: number }): void {
  ic.sugar = 0;
  iceCreams.splice(idx,1,ic);    
}

function logFirstIceCream(){
  return iceCreams[0];
}

function showMelted(){
  return iceCreams.filter(element => {
    if (element.sugar === 0) {
      return element;
    }
  });
}

function addTwoIceCreame():void{
  const ic1 = {
    id:4,
    taste:'ailen',
    sugar:23545
  };
  addIceCream(ic1);
  addIceCream({
    id:5,
    taste:'mint',
    sugar:-2344
  });
}

function printice():void{
  console.log('hehe');
}

iceCreams = fetchIceCreamsItems();
