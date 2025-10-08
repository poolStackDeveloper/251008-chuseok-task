// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// 입출력 예
//---------------------
// n	    |   result
//---------------------
// 1234	    |   10
//---------------------
// 930211	|   16
//---------------------

// 입출력 예 설명

// 입출력 예 #1
// 1 + 2 + 3 + 4 = 10을 return합니다.

// 입출력 예 #2
// 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.

function solution(n) {
    //공백을 넣는 방식으로 n을 문자열 타입으로 변환하여 각 자리수를 substring 함수를 사용할 수 있도록 접근한다.
    const nChar = n +"";
    // console.log(pLength);
    let pAcc = 0;
    for (let i = 0; i < nChar.length; i++) {
        // console.log(nChar.substring(i,i+1));
        // console.log(pAcc);
        pAcc += parseInt(nChar.substring(i,i+1));
    }
    var answer = pAcc;
    return answer;
}


let answer = solution(1234);
console.log(answer);
answer = solution(930211);
console.log(answer); 

;
