const todoList = [];

function addTodo(ev){

    //요소만들기
    //내가 입력한 값 가지고오기
    const todoTitle = document.getElementById('search-input').value;

    //데이터 만들어주기
    let data = {
        title : todoTitle,
        isDone : false,
        date : new Date().getTime()
    }

    todoList.push(data);

    const todoNode = document.createElement('div'); // <div></div>
    todoNode.innerText = data.title;
    toDoListView.appendChild(todoNode);
    
    const removeBtn = document.createElement('button'); // <button><i class='fa-solid fa-xmark'></i></button>
    removeBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    todoNode.appendChild(removeBtn); // <div>밥먹기<button><i class='fa-solid fa-xmark'></i></button></div>


    toDoListView.innerHTML += "<div onclick='isSuccess(this)'>" + todoTitle + 
    "<button onclick='removeTodo(this)' class='remove-btn'><i class='fa-solid fa-xmark'></i></button>"
    +"</div>";

    //요소 붙여주기
    //붙일 공간 가지고오기







    //추가할 일정요소 만들기
    function getTodoNode(data){
        toDoListView.innerHTML += "<div onclick='isSuccess(this)'>" + todoTitle + 
        "<button onclick='removeTodo(this)' class='remove-btn'><i class='fa-solid fa-xmark'></i></button>"
        +"</div>";

    }
   

    //엔터키를 입력했다면 해당코드 실행
    if (!ev.keyCode || ev.keyCode === 13) {
        //데이터 저장
        let data = {
            title : todoTitle,
            isDone : false,
            date : new Date().getTime()
        };
        
        todoList.push(data);

        //일정을 보여주는 영역
        const toDoListView = document.querySelector('#todo-list-view');
        //추가할 일정 요소
        const toDoNode = getTodoNode(data);
        toDoListView.appendChild(toDoNode);

        //추가할 일정요소 만들기
      

        //추가한 일정 input에서 지워주기
        document.getElementById('search-input').value = "";
    }
}

function removeTodo(button){
    button.parentNode.remove();
}

function isSuccess(todo){
    // classList => 해당 요소가 가지고 있는 클레스들을 배열로 반환
    if (todo.classList.length === 0) {
        todo.className = 'done';
    } else {
        todo.className = '';
    }
}