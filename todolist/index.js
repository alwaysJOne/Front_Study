//할일목록 추가중 엔터를 클릭했을 때 할일 추가

//할일 추가

function addTodo(){
    const searchInput = document.getElementById('search-input');

    if (searchInput.value.replace(/ /g,"") === '')
        return;

    const todoListUl = document.getElementsByClassName('todo-list')[0];
    // todoListUl.innerHTML += ('<li>' +  searchInput.value + '</li>');

    const toDoLi = document.createElement('li');
    toDoLi.isDone = false;
    toDoLi.innerHTML = searchInput.value;
    todoListUl.appendChild(toDoLi);
    searchInput.value = '';

    const removeToDoli = document.createElement('div');
    removeToDoli.className = 'todo-remove-btn';
    removeToDoli.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    toDoLi.appendChild(removeToDoli);

    toDoLi.onclick = function(ev){     
        //클릭될때마다 isDone값을 반대로 변경해줌
        ev.target.isDone = !ev.target.isDone;

        //isDone값에 따라서 done class를 부여해주거나 삭제해줌
        if (ev.target.isDone) {
            ev.target.className = 'done';
        } else {
            ev.target.classList.remove('done');
        }
    }

    removeToDoli.onclick = function(ev){
        removeEvent(ev);
        this.parentNode.remove();
    }
}

function removeEvent(ev){
    ev.preventDefault(); //이벤트의 기본동작을 중단한다.   return false;
    ev.stopPropagation(); //현재 이벤트가 상위로 전파되지 않도록 중단한다.
    ev.stopImmediatePropagation(); // 현재 이벤트가 상위뿐만아니라 현재레벨에 걸린 다른 이벤트도 동작하지 않도록 중단한다.

}