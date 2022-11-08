let addTask = document.querySelector(".add-btn")

// let dateT = document.querySelector(".dates")

let inputText = document.querySelector("#input-field")

let tasks = document.querySelector(".tasks")



addTask.addEventListener("click", function(){
    let deleteTask = document.createElement("div")
    deleteTask.classList.add("px-4")
    deleteTask.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-6 h-6 hover:text-red-500">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>`

    let newTask = document.createElement('div')
    newTask.classList.add("flex", "items-center", "bg-yellow-900", "rounded-xl", "mb-4", "h-16")
    newTask.innerHTML= `
    <div class="overflow-hidden px-8  w-[32rem] text-2xl font-kanit ">${inputText.value}</div> 
    `
    inputText.value =""

    tasks.appendChild(newTask)
    newTask.appendChild(deleteTask)
    
    deleteTask.addEventListener("click", function(){
        tasks.removeChild(newTask)
    })

})


// var dateObj = new Date();
// var month = dateObj.getUTCMonth() + 1; //months from 1-12
// var day = dateObj.getUTCDate();
// var year = dateObj.getUTCFullYear();

// newdate = year + "/" + month + "/" + day;

// let weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// dateT.innerHTML = newdate
