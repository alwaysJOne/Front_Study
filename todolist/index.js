//할일목록 추가버튼을 눌렀을 때 할일 추가
function addTodoListClick(){
    //추가버튼 클릭시 ul목록 찾아서
    //추가하고자하는 할일목록을 li태그로 만들어서 넣어준다
    const searchInput = document.getElementById('search-input');
    const todoListUl = document.getElementsByClassName('todo-list')[0];
    // todoListUl.innerHTML += ('<li>' +  searchInput.value + '</li>');
    
    const toDoLi = document.createElement('li');
    toDoLi.innerText = searchInput.value;
    todoListUl.appendChild(toDoLi);
    searchInput.value = '';
}

//할일목록 추가중 엔터를 클릭했을 때 할일 추가
function addTodoListKeyUp(ev){
    if(ev.keyCode === 13) {
        const searchInput = document.getElementById('search-input');
        const todoListUl = document.getElementsByClassName('todo-list')[0];
        // todoListUl.innerHTML += ('<li>' +  searchInput.value + '</li>');
    
        const toDoLi = document.createElement('li');
        toDoLi.innerText = searchInput.value;
        todoListUl.appendChild(toDoLi);
        searchInput.value = '';
    }

}