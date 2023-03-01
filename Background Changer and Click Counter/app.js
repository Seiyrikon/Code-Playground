const clearBg = document.getElementById('clear'),
      bgChanger = document.getElementById('bgChanger'),
      background = document.getElementById('background'),
      clickCounter = document.getElementById('clickCounter'),
      clearBtn = document.getElementById('clearBtn');

let clicks = 0;

bgChanger.addEventListener('input', function (){
    background.style.backgroundColor = bgChanger.value; 
    background.style.color = 'white';
    document.getElementById('container').style.borderColor = 'white';

    console.log(bgChanger.value);
    if(bgChanger.value > '#d1d1d1'){
        background.style.color = 'black';
    document.getElementById('container').style.borderColor = 'black';
    }
})

clearBg.addEventListener('click', function(){
    background.style.backgroundColor = 'white';
    background.style.color = 'black';

    document.getElementById('container').style.borderColor = 'black';
})

clickCounter.addEventListener('click', function(){
    clicks += 1;
    document.getElementById('clicks').textContent = clicks;
    clearBtn.classList.remove('none');
})

clearBtn.addEventListener('click', function(){
    clicks = 0;
    clearBtn.classList.add('none');
    document.getElementById('clicks').textContent = clicks;
})
