(function () {
    'use strict';
    console.log('reading js');

    const containers = document.querySelectorAll('.container');
    let containerTops = [];
    let pagetop;
    let counter = 1;
    let prevCounter = 1;

    containers.forEach(function (eachContainer) {
    containerTops.push(Math.floor(eachContainer.getBoundingClientRect().top) + window.scrollY);
    });

    window.addEventListener('load', function () {
        const sliderContent = document.querySelector('.one');

        //sider container width
        const sliderWidth = sliderContent.offsetWidth;
        
        //clones the images
        const cloned = sliderContent.cloneNode(true);
        cloned.className = "two";

        document.querySelector('.slider').appendChild(cloned);

        //from :root element
        let root = document.querySelector(':root');

        //to let it animate/move  
        const endLeftPos = `-${sliderWidth}px`;    
        root.style.setProperty('--sliderwidth', endLeftPos);

        document.querySelector('.slider').classList.add("animate");
    });

    window.addEventListener('scroll', function () {
    
    // lets it scroll and changes the image when most of the next image shows
    pagetop = window.scrollY + 300;

        //if scroll pass the containers
        if (pagetop > containerTops[counter]) {
            counter++;
            console.log(`scrolling down ${counter}`);
        }

        //scrolling to prev container
        else if (counter > 1 && pagetop < containerTops[counter - 1]) {
            counter--;
            console.log(`scrolling up ${counter}`);
        }

        //changes image when we scroll up or down
        if (counter != prevCounter) {
            onContainerChange();
            prevCounter = counter;
        }
    });

    //changes the images when you scroll to another card
    function onContainerChange(){
        const myStyle = `locationpics${counter}`;
        document.querySelector('body').className = myStyle;

        //the different images it changes to
        switch(counter){
            case 1: document.body.style.backgroundImage = "url('images/hawaiisanrio1.jpg')"; break;
            case 2: document.body.style.backgroundImage = "url('images/osaka.jpg')"; break;
            case 3: document.body.style.backgroundImage = "url('images/waterjapan.jpg')"; break;
            case 4: document.body.style.backgroundImage = "url('images/tbzscreenstage.jpg')"; break;
            case 5: document.body.style.backgroundImage = "url('images/tbzsinglescreen.jpg')"; break;
            case 6: document.body.style.backgroundImage = "url('images/totoropark.jpg')"; break;

        }

    
        //shows current container/class onscreen visible
        document.querySelector(`#container${counter}`).className = 'container onscreen';
        }

    
})();