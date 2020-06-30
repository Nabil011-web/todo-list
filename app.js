// {
//     document.querySelector('body').addEventListener('mouseover',onclick);
//     function onclick(e){
//         let val,mal,sal,me;
//         val = e.clientX;
//         mal= e.clientY;
//         sal = document.querySelector('#task-title')
//         me = mal/30;
//         sal.innerText = `bruhX:${val},bruhY:${mal} and the text size of this text is ${me} px`;
//         sal.style.fontSize = `${me}px`;
//     }
// }

const add  = document.querySelector('#task-form');
const val = document.querySelector('#task');
const ul = document.querySelector('.collection');
const dlt = document.querySelector('.clear-tasks');
const g = document.querySelector('#filter-task');
add.addEventListener('submit',buff);
dlt.addEventListener('click' , doge);
g.addEventListener('keyup',filtask);

function buff(e){
    if(val.value === ''){
        alert(`Bruh,you retard?`);
    }else{
    //creating li
    let li = document.createElement('li');
    //adding class
    li.className = 'collection-item';
    //append task value to li
    li.appendChild(document.createTextNode(val.value));
    //add the link
    const link = document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>'
    //append link to li 
    li.appendChild(link);
    //append li to ul
    ul.appendChild(li);
    //clear from task 
    val.value= '';
    }
    e.preventDefault();
}

function doge(e){
    const lis = document.querySelector('.collection');
    // lis.innerHTML='';
    	
while (lis.firstChild) {
    lis.removeChild(lis.firstChild);
  }
}

function filtask(e){
    let f = g.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const test = task.firstChild.textContent.toLocaleLowerCase();
        if(test.indexOf(f)!= -1){
            task.style.display = 'block';
        }else{
            task.style.display='none';
        }
    });
}

ul.addEventListener('click',sure);
function sure(e){
    if(e.target.parentElement.parentElement.classList.contains('collection-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }else{
            alert(`Hurry up and get it done already`)
        }
    }
}

