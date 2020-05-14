
//글씨 넣으면 게시 버튼 색이 바뀌는 event//

const inputComment = document.getElementById("got-a-new-comment"); //댓글 창 선택

inputComment.addEventListener('keyup', function(){   //댓글창에 keyup 할때 이벤트 발생
    const giveComment = document.getElementById("got-a-new-comment").value; //댓글창에 써지는 내용
    const uploadButton = document.querySelector(".comment-bt");  //게시 버튼 선택
    if (giveComment.length > 0 ){     //댓글창에 글씨가 1개 이상이 될 때
        uploadButton.style.color = "blue";   /// 버튼색이 파란색으로 변경
    } else {// 입력된 문자가 0개일때는
        uploadButton.style.color = "lightblue";}});  //게시버튼 색이 원래 색으로



//클릭으로 댓글 올리는 기능//

const clickBtn = document.querySelector(".comment-bt");  //버튼 선택

clickBtn.addEventListener('click', function(){ 
    
    if(inputComment.value!==""){   ///댓글창이 비어있지않을때.

    //버튼을 클릭할 때, 이벤트가 발생
    const makeDiv = document.createElement('div');  
    makeDiv.className="comment" //div 태그를 생성// console.log(makeDiv)
    const makeSpan = document.createElement('span');
    makeSpan.className = "liker-id"; //strong 태그 생성 user 용
    const makeSpan2 = document.createElement('span'); // span2 생성  댓글용
    makeSpan2.className = "liker-comment";
    makeSpan.innerHTML = "jia  "; //span1 에 유저명 넣기
    const getComment = document.getElementById('got-a-new-comment').value;   //코멘트 내용 가져오기
    const textNode = document.createTextNode(getComment); /// 코멘트를 텍스트노드로 만들기
    makeDiv.appendChild(makeSpan);
    makeDiv.appendChild(makeSpan2);
    makeSpan2.appendChild(textNode);
    document.body.querySelector(".previous-comment").appendChild(makeDiv);
    inputComment.value=""
    const uploadButton = document.querySelector(".comment-bt");
    uploadButton.style.color = "lightblue";

}});


const enter = document.querySelector(".comment-box");

enter.addEventListener('keyup', function(e){ 
    
    if(e.keyCode === 13){

    if(inputComment.value!==""){   ///댓글창이 비어있지않을때.

    //버튼을 클릭할 때, 이벤트가 발생
    const makeDiv = document.createElement('div');  
    makeDiv.className="comment" //div 태그를 생성// console.log(makeDiv)
    const makeSpan = document.createElement('span');
    makeSpan.className = "liker-id"; //strong 태그 생성 user 용
    const makeSpan2 = document.createElement('span'); // span2 생성  댓글용
    makeSpan2.className = "liker-comment";
    makeSpan.innerHTML = "jia  "; //span1 에 유저명 넣기
    const getComment = document.getElementById('got-a-new-comment').value;   //코멘트 내용 가져오기
    const textNode = document.createTextNode(getComment); /// 코멘트를 텍스트노드로 만들기
    makeDiv.appendChild(makeSpan);
    makeDiv.appendChild(makeSpan2);
    makeSpan2.appendChild(textNode);
    document.body.querySelector(".previous-comment").appendChild(makeDiv);
    inputComment.value=""
    inputComment.blur();
    const uploadButton = document.querySelector(".comment-bt");
    uploadButton.style.color = "lightblue";


}}});



