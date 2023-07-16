const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

//dom에 접근

// const input=document.querySelector('#todo');
// console.log(input.value);

//input 실시간 이벤트
// let value=input.value
// input.addEventListener('input',()=>{
//   value=input.value;
//   console.log(input.value);
// })

// input.classList.add('is-active');
// input.classList.remove('is-active');

//토글
//classList.toggle()

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



//-------------------------------------------------------------------------------------------------------------------------------------------------------

const email = document.querySelector(".user-email-input");
const pw = document.querySelector(".user-password-input");
const button = document.querySelector(".btn-login");

let emailPass = false;
let pwPass = false;


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

button.addEventListener("click", () => {
  
  //아이디 비밀번호 비교
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

  
});
//------------------------------------------------------------------------------------------------------------------------------------------------------------
