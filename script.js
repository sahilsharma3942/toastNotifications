const btn = document.querySelector('.btn');
const toasts = document.querySelector('.toasts');


btn.addEventListener("click",function(){
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = "test";
    toasts.appendChild(toast);

    setTimeout(()=>{
        toast.remove("toast");
    },2000)
})