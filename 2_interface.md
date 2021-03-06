# 인터페이스

상호간 약속 인터페이스를 받으면 
무조건 이렇게 써야한다 약속해주는거

```javascript
interface iceCreame{
  taste:string; 
  sugar:number;
}

const choco : iceCreame = {
  taste:'choco',
  sugar: 2421
}

// 아이스크림 인터페이스만 파라미터로 받겠다.
function getIce(ic: iceCreame){
  console.log(ic);
}

getIce({
  taste:'strawberry',
  sugar:97
});
```

#### 선택적 프로퍼티

인터페이스의 모든 프로퍼티가 필요한 것은 아니다. 특정 조건에서만 존재하거나 아예 없을 수도 있다. </br>
선택적 프로퍼티들을 사용하여 원하는 프로퍼티만 사용할 수 있다 </br>

```javascript
interface Person{
  age? :number;       // ?를 붙여준다.
  name : string;
}

class King implements Person{
  name:string;
  constructor(){}
}
```

킹클래스는 퍼슨 인터페이스를 예약어로 사용하지만 age 프로퍼티는 반드시 구현안해도 된다.

#### 함수의 스펙(구조)

```javascript 
interface sumfunc{
  (a:number, b:number) : number;
}

let suminterface: sumfunc;
suminterface = function(a:number,b:number) :number{
  return a + b;
}
```

#### 인덱싱

```javascript
interface stringArray{
  [index: number]: string; 
}

let arr2: stringArray = ['1','2','3'];
// arr2[0] = 12332;   // error가 난다. 키값은 스트링이기 때문.
arr2[0] = '321';

// 딕셔너리 패턴
interface stringdict {
  [key:string] : RegExp;          // 정규표현식 생성자
}

const obj2: stringdict = {
  cssFile : /\.css$/,
  jsFile: /\.js$/,
}

// obj2['cssFile'] = 'a'; 일반 문자열을 넣기 떄문에 error 

Object.keys(obj2).forEach(function(ele){

});

```


#### 인터페이스 확장

```javascript
interface Person {
  name:string;
  age:number;
}

interface Developer extends Person {
  skill:string;
}

const kingdev : Developer = {
  name: 'king',
  age: 2,
  skill: 'cobol'
}
```

#### 타입별칭

타입별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입변수를 의미한다.
걍 C계열에서 define, typedef 생각해라 

```javascript
// interface Person2{
//   name:string;
//   age:number;
// }

type Person2 = {
  name: string;
  age: number;
}

var king: Person2 = {
  name: 'king',
  age: 23
}

type teststring = string;
const strval: teststring = '3eejfsddfkdf';
```
