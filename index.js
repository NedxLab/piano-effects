window.onload = function() { 
    const sounds = document.querySelectorAll('.sound');
    const keys = document.querySelectorAll('.row div');

keys.forEach((keys, index) => {
    keys.addEventListener ('click',  function (e) { 
        sounds[index].currentTime = 0;
        sounds[index].play();
    });
});
};