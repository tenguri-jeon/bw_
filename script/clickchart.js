// clickChart();
// function clickChart(params) {
    const $clickChart = document.getElementsByClassName("click-chart");
    const $invokeModal = document.getElementsByClassName("invoke-modal");
    const $invokeClose = document.getElementsByClassName("invoke-close");
    const $clickClose = document.getElementsByClassName('click-close');
    const $invokeModalContent = document.getElementsByClassName('invoke-modal-content');
    const $detailButton = document.getElementsByClassName('detail-button');
    
    // 닫기 버튼 클릭 시 사라지는 이벤트 발생
    invokeClose();
    function invokeClose(params) {
        for (let i = 0; i < $detailButton.length; i++) {
            $detailButton[i].addEventListener('click',()=>{
                $invokeModalContent[0].classList.remove('invoke-height');
            })
        }
        
        $clickClose[0].addEventListener('click',()=>{
            $invokeModalContent[0].classList.add('invoke-height');
        })
    }

    // 그래프 클릭 시 팝업창 나오는 이벤트발생
    openCloseChart();
    function openCloseChart(params) {
        
        $clickChart[0].addEventListener('click', ()=>{
            $invokeModal[0].classList.toggle('invoke-display');
        })
        
        $invokeClose[0].addEventListener('click', ()=>{
            $invokeModal[0].classList.toggle('invoke-display');
        })
    }
    // }

