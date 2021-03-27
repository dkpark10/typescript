# operator

any쓰면 사실상 쓰나마나
```javascript 
function logmsg(value: any){
  console.log(value);
}

logmsg('ggsddgs');
logmsg(100);
logmsg(true);
```

#### 유니온

or 연산자로 다양한 타입의 파라미터를 받는다.
```javascript 
function logmsg2(value: string | number){
  console.log(value);
}

logmsg2('dgg');
logmsg2(523352);

let vari : string | number | boolean;

function logmsg3(value: string | number){
  if(typeof value === 'number'){
    value.toString();       // 정수 메소드 
  }
  else if(typeof value === 'string'){
    value.split(',');       // 스트링 메소드
  }
  throw new TypeError('no string no number');
}

interface Developer2{
  name:string;
  skill:string;
}

interface Person{
  name:string; 
  age:number;
}

// 타입스크립트는 어떤 타입이 들어올지 모른다. 
// 보장된 속성만 제공한다.
function askSomeone(some : Developer2 | Person) : void {
  // some.name;
  // some.age;
  // some.skill;   // 빨간줄
}

```

#### 인터섹션

&연산자로 모든 타입의 프로퍼티를 사용한다.

```javascript
function askSomeone2(some : Developer2 & Person) : void {
  some.name;
  some.age;
  some.skill;
}

// 유니온 타입이기 때문에 Person이나 Developer를 넣어주면 된다. 
askSomeone({name:'dev', skill:'deep'});
askSomeone({name:'black', age:12434});

// 이렇게 디벨로퍼만 넘기면 age 속성을 넣지 않았기 때문에 에러
// askSomeone2({name:'dev', skill:'deep'});      <----------- 에러
askSomeone2({name:'dev', skill:'deep', age:098980});    <--------- 모두 넘겨주자

```

#### enum 

그냥 이넘타입임 다른언어처럼

```javascript 
enum color {
  red,                  // 별도 값을 설정하지 않으면 0으로 시작 자동 증가
  yellow
}

enum color2{
  red = 'red',          // 문자열 지정가능
  yellow = 'yellow'
}

const red = color.red;  // 0
const reds = color.red;  // red

enum downType{
  netShare,
  FTP, 
  SFTP
}

function getDownType(ty:downType) : string{
  if(ty === downType.netShare){
    return 'netShare';
  }else if(ty === downType.FTP){
    return 'FTP';
  }else{
    return 'SFTP';
  }
}

// 파라미터를 이넘으로 정했기 떄문에 이넘 타입만 넘길 수 있다.
getDownType(downType.SFTP);
```
