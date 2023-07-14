var testimg = document.getElementById('monkey');
var xbtn = document.getElementById('xbtn');
var mobilenav = document.getElementById('nav');

testimg.addEventListener('click', function(){
    mobilenav.style.display='flex';
    testimg.style.display='none';

})

xbtn.addEventListener('click', function(){
    mobilenav.style.display='none';
    testimg.style.display='block'
})