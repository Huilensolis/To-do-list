// header inputs (the task text and the add task button)
const addTaskInput = document.querySelector('#task_input');
const addTaskBtn = document.querySelector('#add_task_btn');

const inputsContainer = document.querySelector('.inputs')
// task list container 
const ul = document.querySelector('ul');

function createTask(text){
    //  <li>
    //      <div class="task_item">
    //        <section class="text_container">
    //          <p>this is an example task</p>
    //        </section>
    //      <div class="delete_btn"><p>X</p></div>
    // </li> 
    var li = document.createElement('li'); // <li></li>

    const task_item = document.createElement('div'); // <div class="task_item">
    task_item.classList.add('task_item');

    li.appendChild(task_item);
    ul.appendChild(li);

    const text_container = document.createElement('section'); //  <section class="text_container">
    text_container.classList.add('text_container');

    task_item.appendChild(text_container);

    const html_task_element = document.createElement('p'); // <p>this is an example task</p>
    html_task_element.innerHTML = text;
    text_container.appendChild(html_task_element);
    
    const delete_btn = document.createElement('div'); // <div class="delete_btn"></div>
    delete_btn.classList.add('delete_btn')
    task_item.appendChild(delete_btn);
    delete_btn.addEventListener('click', (e) =>{
        li.remove();
    })

    const delete_btn_p = document.createElement('p'); // the p inside the delete btn
    delete_btn_p.innerHTML = 'X';

    delete_btn.appendChild(delete_btn_p);

    addTaskInput.value = '';
}
addTaskInput.addEventListener('keypress', (e) => {
    const text = addTaskInput.value;
    if (e.keyCode === 13) {
        if(text === ''){
            var alertExist = document.querySelector('.alert');
            if(alertExist){
                addTaskInput.classList.add('highlight');
                alertExist.classList.remove('active');
                setTimeout(() => {
                    const alert = document.querySelector('.alert');
                    alert.innerHTML = 'Please full the <span> Text Area </span> to create a task';
                    alert.classList.add('active')
                }, 50);
            }else{
                const alert = document.querySelector('.alert');
                alert.innerHTML = 'Please full the <span> Text Area </span> to create a task';
                alert.classList.add('active');
            }
        } else{
            var alertExist = document.querySelector('.alert');
            if(alertExist){
            alertExist.classList.remove('active');
            createTask(text)
            }else{
                createTask(text);
            }
        }
    };
});
addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const text = addTaskInput.value;
    if(text === ''){
        var alertExist = document.querySelector('.alert');
        if(alertExist){
            addTaskInput.classList.add('highlight');
            alertExist.classList.remove('active');
            setTimeout(() => {
                const alert = document.querySelector('.alert');
                alert.innerHTML = 'Please full the <span> Text Area </span> to create a task';
                alert.classList.add('active')
            }, 50);
        }else{
            const alert = document.querySelector('.alert');
            alert.innerHTML = 'Please full the <span> Text Area </span> to create a task';
            alert.classList.add('active');
        }
    } else{
        var alertExist = document.querySelector('.alert');
        if(alertExist){
            alertExist.classList.remove('active');
            createTask()
        } else{
            createTask()
        }
    };
});