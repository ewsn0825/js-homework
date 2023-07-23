/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
// elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;

const body = getNode("body");
const navigation = getNode(".nav");
const list = getNodes(".nav li");
const visualImage = getNode(".visual img");
const nickName = getNode(".nickName");

function setBgColor(node, firstColor, secondColor = "#000") {
  if (typeof node === "string") node = getNode(node);

  if (typeof firstColor !== "string" || typeof secondColor !== "string") {
    throw new TypeError(
      "setBgColor 함수의 두 번째와 세 번째 인수는 문자 타입 이어야 합니다."
    );
  }

  node.style.background = `linear-gradient(to bottom, ${firstColor},${secondColor})`;
}

function setImage(node, index) {
  if (typeof node === "string") node = getNode(node);

  attr(node, "src", `./assets/${data[index].name.toLowerCase()}.jpeg`);

  attr(node, "alt", data[index].alt);
}

function setNameText(node, index) {
  if (typeof node === "string") node = getNode(node);

  node.textContent = data[index].name;
}

// 이벤트 실행 함수

function handleSlider(e) {
  // e.preventDefault();

  const target = e.target.closest("li");

  if (!target) return;

  //이벤트 대상의 data-index값 불러오기
  const index = attr(target, "data-index");

  // 노드 리스트 순환 돌아서 각 리스트에 is-active 클래스 제거
  list.forEach((li) => removeClass(li, "is-active"));

  // 선택한 대상에 is-active 클래스 추가
  addClass(target, "is-active");

  let firstColor = data[index - 1].color[0];
  let secondColor = data[index - 1].color[1];

  setImage(visualImage, index - 1);
  setBgColor(body, firstColor, secondColor);
  setNameText(nickName, index - 1);

  // document.querySelector("h1").textContent = data[index - 1].name;
}

navigation.addEventListener("click", handleSlider);
