clickChart();
function clickChart(params) {
    const $clickChart = document.getElementsByClassName("click-chart");
    const $invokeModal = document.getElementsByClassName("invoke-modal");
    const $invokeClose = document.getElementsByClassName("invoke-close");
    
    
    $clickChart[0].addEventListener('click', ()=>{
        $invokeModal[0].classList.toggle('display');
    })
    
    $invokeClose[0].addEventListener('click', ()=>{
        $invokeModal[0].classList.toggle('display');
    })
}