clickChart();
function clickChart(params) {
    const $clickChart = document.getElementsByClassName("click-chart");
    const $invokeModal = document.getElementsByClassName("invoke-modal");
    
    $clickChart[0].addEventListener('click', ()=>{
        $invokeModal[0].classList.toggle('display');
    })
}