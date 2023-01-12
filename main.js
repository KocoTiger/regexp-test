// const str = 'hello world'
const str = `
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=fronzen
The quick brown fox jumps over the lazy dog
abbcccdddd
`

const h = `  the hello world    !

`

//////////// 정규식 생성자 함수 이용 ////////////
// // 문장 중, the를 처음 하나만 찾음
// const regexp = new RegExp('the', '')
// console.log(str.match(regexp))

// // 문장 중, the를 모두 찾고 싶다면, g 플래그
// const regexp = new RegExp('the', 'g')
// console.log(str.match(regexp))

// // 문장 중, 대소문자 구분 없이 the를 모두 찾고 싶다면, gi 플래그
// const regexp = new RegExp('the', 'gi')
// console.log(str.match(regexp))

//////////// 정규식 리터럴 이용 ////////////
// const regexp = /the/gi
// console.log(str.match(regexp))

//////////////////메서드////////////////////////
// // 정규식.test(문자열)
// const regexp = /fox/gi
// console.log(regexp.test(str))


// 문자열.match(정규식)
// 기존 내용 참고


// 문자열.replace(정규식, 대체문자)
// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

/////////////////플래그 (옵션1)/////////////////////
// // \ 이스케이프 : 특정 명령어를, 문자화 시킴, 그 기능을 잃어버리게 만듬
// // $ : 줄, 끝에 있는 ~~글자와 일치
// // m 플래그 : 각 라인에서 일치 찾음 (없으면 전체 범위)
// const regexp = /\.$/gim
// console.log(str.match(regexp))

////////////////패턴 (표현)1 /////////////////////
// // $ : 라인 끝에 단어와 일치
// const regexp = /d$/gm
// console.log(str.match(regexp))

// // ^ : 라인 시작 단어와 일치
// const regexp = /^t/gim
// console.log(str.match(regexp))

// // . : 임의의 한 문자와 일치
// const regexp = /./g
// console.log(str.match(regexp))

// // 글자사이의 .. : 임의의 문자와 일치
// const regexp = /h..p/g
// console.log(str.match(regexp))

// // a|b : a나 b 를 찾아라
// // g 플래그 제외시, 둘 중 먼저 찾아지는 하나만 찾아짐
// const regexp = /fox|dog/g
// console.log(str.match(regexp))

// // ab? : b가 없거나 b와 일치 하는 것을 찾아라
// const regexp = /https/g
// console.log(str.match(regexp))

// // 글자{숫자} : 글자가 {숫자}만큼 반복되는 것을 찾아
// const regexp = /d{2}/g
// console.log(str.match(regexp))

// // 글자{숫자,} : 글자가 {숫자}이상 반복되는 것을 찾아
// const regexp = /d{2,}/g
// console.log(str.match(regexp))

// // 글자{숫자1,숫자2} : 글자가 {숫자1}이상 {숫자2}이하 반복되는 것을 찾아
// const regexp = /d{2,3}/g
// console.log(str.match(regexp))

// // \w : 숫자, 알파벳
// const regexp = /\w{2,3}/g
// console.log(str.match(regexp))

// // \b\w\b : 숫자, 알파벳
// const regexp = /\b\w{2,3}\b/g
// console.log(str.match(regexp))

/////////////////새로운 패턴 추가 (2)/////////////////////////

// // [abc] : a또는 b또는 c를 찾는다
// const regexp = /[fox]/g
// console.log(str.match(regexp))

// // [0-9]{1,} : 숫자 하나 이상이 연속되는 것을 일치
// const regexp = /[0-9]{1,}/g
// console.log(str.match(regexp))

// // [가-힣]{1,} : 한글 하나 이상이 연속되는 것을 일치
// const regexp = /[가-힣]{1,}/g
// console.log(str.match(regexp))

/////////////////새로운 패턴 추가 (3)/////////////////////////

// // \w : 숫자, 알파벳, _ 찾기
// const regexp = /\w/g
// console.log(str.match(regexp))

// // \b : 숫자, 알파벳, _를 제외한 부분을 경계
// // 63개 문자를 제외한 부분 시작, f로 시작하고,
// // 뒤가 63개 문자인데 1이상 인 문자
// // 63개 문자를 제외한 부분에서 끝
// const regexp = /\bf\w{1,}\b/g
// console.log(str.match(regexp))

// // \d : 숫자만 검색
// // \d{1,} : 숫자 한개 이상인 것 일치
// const regexp = /\d/g
// console.log(str.match(regexp))

// // \s : 공백 검색
// const regexp = /\s/g
// console.log(
//   h.match(regexp)
//   )

// // 공백 사라지게 하기
//   const regexp = /\s/g
// console.log(
//   h.replace(regexp, '')
//   )

/////////////////새로운 패턴 추가 (4)/////////////////////////
// // (?=) : 앞쪽 일치 (Lookahead)
// const regexp = /.{1,}(?=@)/g
//   console.log(  
// str.match(regexp)
// )

// // (?<=) : 뒤쪽 일치 (LookBehind)
// const regexp = /(?<=@).{1,}/g
//   console.log(  
// str.match(regexp)
// )

