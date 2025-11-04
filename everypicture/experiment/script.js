(function () {
    'use strict';

    const container = document.querySelector('#container');
    const plushies = document.querySelectorAll ('#container div');
    const img = document.querySelector('img');

    plushies.forEach(function (eachSpot){
        eachSpot.addEventListener('mouseover', zoomPhoto);
    });

    function zoomPhoto (event){
        const selection = event.target.id;
        console.log(selection);
        switch (selection){
            case 'bottom1' : img.className = 'bottom1'; break; 
            case 'bottom2' : img.className = 'bottom2'; break; 
            case 'bottom3' : img.className = 'bottom3'; break; 
            case 'bottom4' : img.className = 'bottom4'; break; 
            case 'bottom5' : img.className = 'bottom5'; break; 
            case 'bottom6' : img.className = 'bottom6'; break; 

        }
    }

    plushies.forEach(function (eachSpot){
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function(){
            img.className = 'start';
        })
    });


})();