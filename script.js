// targeting the action button & place it inside a var
var actionBtn = document.getElementById('actionBtn');
// window scroll on function
window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 100) {
        actionBtn.classList.remove('right-[-80px]');
        actionBtn.classList.remove('opacity-0');
        actionBtn.classList.add('right-[20px]');
        actionBtn.classList.add('opacity-100');
    } else {
        actionBtn.classList.remove('right-[20px]');
        actionBtn.classList.remove('opacity-100');
        actionBtn.classList.add('right-[-80px]');
        actionBtn.classList.add('opacity-0');
    }
})
// click on action button function
actionBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})