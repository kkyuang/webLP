$(document).ready(() => {
    setInterval(() => {
        value = $("#arm-deg").val()
        $('.arm-axis').css({'transform': `rotate(${value}deg)`})
    }, 10);
})