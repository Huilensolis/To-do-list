// header inputs (the task text and the add task button)
const addTaskInput = document.querySelector('#task_input');
const addTaskBtn = document.querySelector('#add_task_btn');

// task list container 
const ul = document.querySelector('ul')

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const text = addTaskInput.value
    if(text === ''){
        
    } else{
        //  <li>
        //      <div class="task_item">
        //        <section class="text_container">
        //          <p>this is an example task</p>
        //        </section>
        //      <div class="delete_btn"><p>X</p></div>
        // </li> 
        const li = document.createElement('li'); // <li></li>
    
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
    
        const delete_btn_p = document.createElement('p'); // the p inside the delete btn
        delete_btn_p.innerHTML = 'X';
    
        delete_btn.appendChild(delete_btn_p);
    
        addTaskInput.value = '';
    }
});