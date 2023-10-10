function addTodo(ev){
    console.log(ev.keyCode)
    //내가 작성한 일정명 가지고오기
    const todoTitle = document.getElementById('search-input').value;
    if (todoTitle.trim() === "")
        return;

    //엔터키를 입력했다면 해당코드 실행
    if (!ev.keyCode || ev.keyCode === 13) {
        //일정을 보여주는 영역
        const toDoListView = document.querySelector('#todo-list-view');

        //추가할 일정요소 만들기
        toDoListView.innerHTML += "<div>" + todoTitle + "<button onclick='removeTodo(this)' class='remove-btn'><i class='fa-solid fa-xmark'></i></button></div>";

        //추가한 일정 input에서 지워주기
        document.getElementById('search-input').value = "";
    }
}

function removeTodo(button){
    button.parentNode.remove();
}