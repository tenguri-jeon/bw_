accordion();
function accordion(params) {  
    const $dropdownButton = document.getElementsByClassName('dropdown-button');
    const $submenuWrap = document.getElementsByClassName('submenu-wrap');
    const $tabMenu = document.getElementsByClassName('tab-menu');
    const $tableBody = document.getElementsByClassName('query-adjust-list-tbody');
    
    for (let i = 0; i < $dropdownButton.length; i++) {
        
        $dropdownButton[i].addEventListener('click', (e)=>{
            // 버튼 클릭 시 버튼 모양이 바뀌는 이벤트와, 아코디언 메뉴가 나오는 이벤트 발생

            // 밑으로 내리는 버튼 이벤트
            if ($dropdownButton[i].classList.contains('dropdown-icon-down')) {
                $dropdownButton[i].classList.remove('dropdown-icon-down');
                $dropdownButton[i].classList.add('dropdown-icon-up');
                $submenuWrap[i].classList.remove('display')
                setTimeout(function() {
                    $tabMenu[i].classList.remove('tab-menu-display')
                }, 200)
                $tableBody[0].style.height = '378px';
            }
            // 다시 올리는 버튼 이벤트
            else{
                $dropdownButton[i].classList.add('dropdown-icon-down');
                $dropdownButton[i].classList.remove('dropdown-icon-up');
                $submenuWrap[i].classList.add('display')
                $tabMenu[i].classList.add('tab-menu-display')
                $tabMenu[i].classList.add('tab-menu-display')
                $tableBody[0].style.height = '178px';
            }
            // i번째 이외의 다른 버튼을 눌렀을 때, 버튼 모양을 바꿔주는 이벤트
            for (let j = 0; j < $dropdownButton.length; j++) {
                if (j !== i) {
                    $dropdownButton[j].classList.add('dropdown-icon-down');
                    $dropdownButton[j].classList.remove('dropdown-icon-up');
                }
                
            }
        })
    }
}

