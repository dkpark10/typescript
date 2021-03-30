# 클래스 제너릭

#### 클래스 

```javascript 
function Men(name, age){
  this.name = name;
  this.age = age;
}
const kingson = new Men('king', 214);

class Men {
  private name: string;
  public age: number;
  readonly skill: string;     // readonly 오직 읽기만 가능

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

```


#### 제너릭 

여러가지 타입에서 동작하는 컴포넌트를 생성하는데 사용 C++, JAVA 그거 타임템플릿 생각하면 된다.


**기본문법**

```javascript 
function logtext<T>(text: T): T {
  console.log(text);
  return text;
}

logtext(10);
logtext<string>('hi');        // 이렇게 함수 옆에 제너릭을 붙여줘서 작성.
logtext(true);

```




아래 예제는 이렇게 다양한 타입을 받아야 할 때 여러 함수를 작성해야 한다. </br>
유지보수 관점에서 좋지 않다. 타입만 다른데 로직은 같으니까 </br>

```javascipt
function logtext2(text: string) {
  console.log(text);
  // text.split(',').reverse().join();
  return text;
}


function lognumber(num: number) {
  console.log(num);
  return num;
}
```


유니온 타입의 경우 제한적이다. </br>
이 함수를 반환받을 때 number인지 string인지 알 수 없다. </br>
그러므로 각 타입의 내장되어있는 메소드 사용 불가 </br>

```javascript
function logunion(arg: string | number) {
  console.log(arg);
  return arg;
}

lognumber(1);
logtext2('11');

```


제너릭 이 타입을 인풋받고 그대로 반환하겠다. </br>
제너릭은 호출시점에 타입을 결정한다. </br>

```javascipt 
function logtext3<T>(text: T): T {
  console.log(text);
  return text;
}

const ssttrr = logtext3<string>('erfsd');
ssttrr.split('.');                          // 스트링이 확실하기 때문에 스플릿 메소드 가능

```



**인터페이스 제너릭 선언**

```javascript 
interface upsidedown<T> {
  value: T;
  slected: boolean;
}
// 넘버자리 
const usd: upsidedown<number> = { value: 12, slected: true };

```

**제너릭의 실사용**

```javascript
interface ddItem<T> {
  val: T;
  selected: boolean;
}

interface Email {
  val: string;                       // <------------------------------------------------
  selected: boolean;
}

interface ProductNum {
  val: number;                       // <------------------------------------------------
  selected: boolean;
}

// const emails: Email[] = [
//   { val: 'naver', selected: true },
//   { val: 'yahoo', selected: false },
//   { val: 'google', selected: false }
// ];

const emails: ddItem<string>[] = [
  { val: 'naver', selected: true },
  { val: 'yahoo', selected: false },
  { val: 'google', selected: false }
];

// const numofproducts: ProductNum[] = [
//   { val: 1, selected: true },
//   { val: 2, selected: true },
//   { val: 3, selected: true }
// ];

const numofproducts: ddItem<number>[] = [
  { val: 1, selected: true },
  { val: 2, selected: true },
  { val: 3, selected: true }
];

// 파라미터는 지금 현재 val property에 string만 받는다.
// 즉 이 함수는 이메일과 넘 프로덕트의 두 val 프로퍼티 즉 스트링과 넘버를 둘다 받아야 한다.
// 제너릭의 장점은 여기서 나타난다.
// 유니온 타입으로 이렇게 두 인터페이스를 묶어도 된다.
// 겨우 val property의 타입이 다를 뿐인데.... 이렇게 되면 코드의 양이 증가.
// 즉 어떤 타입이 온다면 그에 상응하는 인터페이스를 계속 작성해 줘야함...

function createDropdownItem(item: ddItem<number> | ddItem<string>) {
  const option = document.createElement('option');
  option.value = item.val.toString();
  option.innerText = item.val.toString();
  option.selected = item.selected;

  if(typeof item.val === 'number'){
    // console.log(item.val.length);   // error  지금 현재 문자인지 정수인지 모르기 때문에 
  }
  else if(typeof item.val === 'string'){
    console.log(item.val.length);
  }
  return option;
}

emails.forEach(function (email: ddItem<string>) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numofproducts.forEach(function (product) {
  const item = createDropdownItem(product);
});

```



제너릭의 타입제한

```javascipt
function logtext4<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}

logtext4<string>(['hihihihihihi']);


// 제너릭 타입제한2 
interface lengthtype {
  length: number;
}

// 제너릭에 들어갈 수 있는 속성 정하기
function logtext5<T extends lengthtype>(text: T): T {
  text.length;
  return text;
}

logtext5('a');


// 제너릭 타입제한3
// 익스텐즈에 키나 클래스를 넣는다.
interface shopitem{
  name:string;
  price:number;
  stock:number;
}

// 쇼핑아이템의 프로퍼티중 하나만 매칭 된다. ~~~
function getitemoption<T extends keyof shopitem>(itemop: T): T {
  return itemop;
}

getitemoption('name');          // 키값을 파라미터로 넘겨줘야함 ~~~
// getitemoption<string>('a'); error 
```
