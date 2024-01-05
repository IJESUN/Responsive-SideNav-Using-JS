let sideBar = document.querySelector('.sidebar');
let sideBarBtn = document.querySelector('.fa-bars');
sideBarBtn.addEventListener('click', () => {
    sideBar.classList.add('close');
})

document.querySelector('.logo-details .fa-x').addEventListener('click', function(){
    sideBar.classList.remove('close');
});