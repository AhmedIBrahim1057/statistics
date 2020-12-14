var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['فوز' ,'خسارة'],
        datasets: [{
            label: '',
            data: [5000, 3533],
            backgroundColor: [
                '#2d94d8',
                '#f9395f',
            ],
            borderColor: [
                'white'
                
            ],
            borderWidth: 2
        }]
    },
});

$( document ).ready(function() {
    $(function () { 
        $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
      });  
      
      // $( window ).scroll(function() {   
       // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
    $(".progress-bar").each(function(){
        each_bar_width = $(this).attr('aria-valuenow');
        $(this).width(each_bar_width + '%');
    });
});