# 1.기본타입

#### 문자열
```javascript
const str: string = 'king';
```

#### 정수 
```javascript
const num :number = 999;
```

#### 불 
```javascript
const isMine : boolean = true;
```

#### 배열

```javascript
const arr: Array<number> = [1,2,3];
const colors: Array<string> = ['#3289FD', '#abff22'];
const arr2 : number[] = [3,23,4,4];
```

#### 튜플

지정된 길이와 인덱스에 타입할당

```javascript
const tuple :[string, number] = ['a', 2];
console.log(tuple[42]); 	//error
tuple[1] = '213'			//error
```

#### 객체

```javascript
const obj : object = {};
```

객체리터럴로 작성하면 타입을 신경쓰지 않고 느슨해짐
```javascript
const king:person = {
	name:'king',
	age:23432
};
```

구체적으로 멤머변수를 타이핑한다. 
```javascript
const king2 :{name:string, age:number} = {
	// same
};
```

#### 함수

```javascript 
function sum(num1:number, num2:number){
	return num1 + num2;
}
```

리턴값 타이핑
```javascript
function sum(num1:number, num2:number): number{
	return num1 + num2;
}
```

sum(1,2,3,4); 
기존 js에선 파라미터 갯수가 달라도 유연하게 무시하는데
ts에서는 엄격함 !!!!!!!!!!!!!!!!!!!

옵셔널 파라미터
가변인자를 넣어주고 싶을 때
물음표를 넣어 써도 된다 안써도 된다 명시하기

```javascript
function printIncome(a:string, b?:string):string{
	return a;
}
printIncome('aaaa');
printIncome('aaaa','bbbb');
```

#### Practice

```javascript
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
```
