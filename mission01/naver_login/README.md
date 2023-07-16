# 네이버 로그인 페이지 구현


---

## 🔒 조건 
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
5. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
6. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

<br><br>
## 📌 변경사항
- button의 type을 submit에서 button으로 변경하였습니다.


<br><br>
## 👨‍💻 구현
<br>
### 초기 변수 설정
```js

//dom에 접근
const email = document.querySelector(".user-email-input");
const pw = document.querySelector(".user-password-input");
const button = document.querySelector(".btn-login");

let emailPass = false;
let pwPass = false;
```
<br>
### 1. email 정규표현식을 사용한 validation
```js
//이메일 validation
email.addEventListener("input", function () {
  if (emailReg(this.value)) {
    this.classList.remove("is-active");
    emailPass = true;
  } else {
    this.classList.add("is-active");
    emailPass = false;
    throw new Error("아이디는 이메일 형식으로 입력해주세요.");
  }
});
```

<br>
### 2. pw 정규표현식을 사용한 validation
```js
//패스워드 validation
pw.addEventListener("input", function () {
  if (pwReg(this.value)) {
    this.classList.remove("is-active");
    pwPass = true;

  } else {
    this.classList.add("is-active");
    pwPass = false;
    throw new Error("비밀번호는 특수문자 포함 6자리 이상, 16자리 이하로 입력해주세요.");
  }

});
```

<br>
### 3. 상태 변수 관리
```js
let emailPass = false;
let pwPass = false;

//validation true시에 emailPass, pwPass에 true 할당

```

<br>
### 4. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
```js

//아이디가 일치하지 않았을 때
    if (emailPass&&(email.value !== user.id)) {
      throw new Error("아이디가 잘못되었습니다.");
    }

```

<br>
### 5. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
```js
//비밀번호가 일치하지 않았을 때
    if (pwPass && (pw.value !== user.pw)) {
      throw new Error("비밀번호가 잘못되었습니다.");
    }

```

<br>
### 6. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
```js

button.addEventListener("click", () => {

  //아이디 비밀번호 비교 true일 경우 페이지 이동
  if (email.value === user.id && pw.value === user.pw) {
    console.log('로그인되었습니다.')
    return (window.location.href = "welcome.html");
  }

  else{

    //아이디가 일치하지 않았을 때
    if (emailPass&&(email.value !== user.id)) {
      throw new Error("아이디가 잘못되었습니다.");
    }

    //비밀번호가 일치하지 않았을 때
    if (pwPass && (pw.value !== user.pw)) {
      throw new Error("비밀번호가 잘못되었습니다.");
    }
  }
```

