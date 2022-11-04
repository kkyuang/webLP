$(document).ready(() => {
    //마우스로 끌어서 각도조절

    //카트리지 클릭 여부
    isMouseDown = false
    //축의 좌표 설정
    posx = $(".arm-axis").offset().left + ($(".arm-axis").width() / 2)
    posy = $(".arm-axis").offset().top + ($(".arm-axis").height() / 2)

    //마우스 움직임 감지시
    $(document).mousemove((e)=>{
        //카트리지 클릭시에만
        if(isMouseDown){
            //마우스와 축의 기울기 계산
            var slope = (e.clientY - posy) / (e.clientX - posx)
            //각도 계산(역탄젠트 함수)
            var deg = (Math.atan(slope) * 180 / Math.PI) + 90
            //회전
            if(e.clientY - posy > 0 && e.clientX - posx < 0){
                if(deg <= 60){
                    $('.arm-axis').css({'transform': `rotate(${deg}deg)`})
                }
            }
        }
    })

    //카트리지 클릭시
    $(".cartridge").mousedown(()=>{
        isMouseDown = true
    })

    //마우스를 카트리지에서 떼었을 시
    $(document).mouseup(()=>{
        isMouseDown = false
    })
})