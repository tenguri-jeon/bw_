button();
function button(params) {  
    const $dropdownButton = document.getElementsByClassName('dropdown-button');
    const $submenuWrap = document.getElementsByClassName('submenu-wrap');

    for (let i = 0; i < $dropdownButton.length; i++) {
        $dropdownButton[i].addEventListener('click', (e)=>{
            // 버튼 클릭 시 버튼 모양이 바뀌는 이벤트와, 아코디언 메뉴가 나오는 이벤트 발생
            if ($dropdownButton[i].classList.contains('dropdown-icon-down')) {
                $dropdownButton[i].classList.remove('dropdown-icon-down');
                $dropdownButton[i].classList.add('dropdown-icon-up');
                $submenuWrap[0].classList.remove('display');
            }
            else{
                $dropdownButton[i].classList.add('dropdown-icon-down');
                $dropdownButton[i].classList.remove('dropdown-icon-up');
                $submenuWrap[0].classList.add('display');
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

