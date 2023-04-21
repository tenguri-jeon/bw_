tabmenu();
function tabmenu(params) { 
    const $tabContent = document.getElementsByClassName('tab-content');
    const $tabBtn = document.getElementsByClassName('tab-btn');
    
    $tabBtn[0].addEventListener('click',()=>{
        $tabBtn[0].classList.add('active');
        $tabBtn[1].classList.remove('active');
        $tabContent[0].classList.add('active')
        $tabContent[1].classList.remove('active')
    })

    $tabBtn[1].addEventListener('click',()=>{
    $tabBtn[1].classList.add('active');
    $tabBtn[0].classList.remove('active');
    $tabContent[1].classList.add('active')
    $tabContent[0].classList.remove('active')
})
}