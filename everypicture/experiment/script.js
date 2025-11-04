(function(){
    'use strict';

    const theSection = document.querySelectorAll('article');
    const observer = new IntersectionObserver(callback, {threshold: 0.5}); 
  


    for(const eachArticle of theSection ){
        observer.observe(eachArticle);
    }

    function callback(entries){

        for ( const eachEntry of entries){

            if(eachEntry.isIntersecting){
                console.log(eachEntry.target);
                eachEntry.target.className='show';
            } else {
                console.log(eachEntry.target);
                eachEntry.target.removeAttribute('class');
            }

        }

       
    }
})();
