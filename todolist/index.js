function addTodo(ev){

    //엔터키를 입력했다면 해당코드 실행
    if (ev.keyCode === 13) {
        //일정을 보여주는 영역
        const toDoListView = document.querySelector('#todo-list-view');

        //내가 작성한 일정명 가지고오기
        // const todoTitle = ev.target.value;
        const todoTitle = document.getElementById('search-input').value;

        //추가할 일정요소 만들기
        toDoListView.innerHTML += "<div>" + todoTitle + "</div>";
    }
}