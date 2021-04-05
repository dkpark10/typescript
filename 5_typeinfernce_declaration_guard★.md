# 타입추론, 타입단언, 타입가드


#### 타입추론

```javascript

// 타입추론 기본1

var a = '1234';

function getB(b = 10) {
  var cc = 'hihihi';
  return b + cc;
}

// 10 + '10' = '1010';      <-- 숫자 + 스트랑 = 스트링


// 타입추론 기본2 
// 인터페이스에 제너릭 받음 
interface dropdown<T> {
  value: T;
  title: string;
}

var shopitem: dropdown<string> = {
  value: 'ring',
  title: 'load'
}

// 타입추론 기본3

interface dropdown2<T> {
  value: T;
  title: string;
}

interface dropdown3<K> extends dropdown2<K> {      // 상속의 상속느낌
  description: string;
  tag: K;
  //  value :
  //  title : 
}

var dropdown3item: dropdown3<string> = {
  title: 'aabvc',
  description: 'king string',
  value: 'a',
  tag: 'b'
}


// best common type
// 간단하게 유니온으로 다 묶어나간다.

var aarrrrr = [1,2,true];     // var arrrrr: (number | boolean)[]
var aarrrr2 = [1,2,3];        // var arrrr2: number[]

```

#### 타입단언

```javascript
// 타입단언
// 타입이 현재 타입스크립보다 개발자가 더 잘알고 있을 때 ~~~~ 아직 와닿지는 않는군 ㅋ 

var a2;
a2 = 20;
a2 = '23132';
//	var b2 = a2 		<------- any로 찍힘 
var b2 = a2 as string;		<------- string으로 단언한다.


// DOM API 조작

// <div id = 'app' > hi < /div>

var div = document.querySelector('div') as HTMLDivElement;    // div라고 단언을 한다.
// 실무에서 이렇게 쓴다. 왜냐면 내부코드를 보면 HTMLDivElement 랑 null을 유니온 타입으로 둘다 받기 떄문
// 하지만 타입단언을 하게 되면 조건문을 만들지 않아도 된다.
if (div){
  // code
}
```

#### 타입가드 


```javascript

interface batman{
  name:string;
  skill:string;
}

interface flash{
  name:string;
  age:number;
}

function introduce():batman | flash {
  return { name: 'bruce', age: 34, skill: 'rich' };
}

const bruce = introduce();
```

</br>

>  유니온 타입은 공통된 요소만 접근이 가능하다(name) 그러므로 skill은 찍히지 않는다.
	 console.log(bruce.skill);

</br>

공통되지 않은 요소를 뽑아오려면 이렇게 타입단언을 해서 쓴다만....</br>
 가독성이 구려진다.</br>
</br>


```javascript
if ((bruce as batman).skill) {  
  console.log((bruce as batman).skill);
}
else if((bruce as flash).age){
  console.log((bruce as flash).age);
}

```

```javascript
// 타입을 걸러내는 함수작성
// 이것이 타입가드
function isBatman(arg : batman | flash): arg is batman{
  return (arg as batman).skill !== undefined;
}


if(isBatman(bruce)){
  console.log(bruce.skill);
}else{
  console.log(bruce.age);
}

```

