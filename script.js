

const btn = document.getElementById('btn');
console.log(btn);

btn.addEventListener('click', function master(){
    var master = document.getElementsByClassName('toto');
    master[2].innerHTML = 'que mirás loco';
})