const target = Math.floor(Math.random() * (100-50)+50);
let score = 0;
let  wins = 0;
let loss = 0;
document.querySelector('#hedef').innerHTML = target ; 
var yourScore = document.querySelector('#score');

function again(){
    score = 0;
    $('.score').text(score);
}
$('.A').on('click',function() {
    const deyer = parseInt(this.dataset.deyer);
    score += deyer ; 
    if(score === target){

        alert('Qalib olduq');
        wins ++;
        $('#wins').text(wins);
        again();
    }else if ( score > target){
        alert('uduzduq');
        loss ++;
        $('#loss').text(loss);
        again();
    }else {
        yourScore.innerHTML= score;
        //alert("yeni deyer : " + score);
    }
});
// win count
// loss count
// crystal selection 
// your score 
// target score 
// crystal collector 