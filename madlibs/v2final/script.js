(function () {

    'use strict';
    console.log('reading js');

    const form = document.querySelector('.form');
    const madlib = document.querySelector('#madlib');
    
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const adj = document.querySelector('#adj').value;
        const adj2 = document.querySelector('#adj2').value;
        const verb = document.querySelector('#verb').value;
        const three = document.querySelector('#three').value;
        const noun = document.querySelector('#noun').value;
        const noun2 = document.querySelector('#noun2').value;
        
        let myText;

        if (name ==''){
            myText = "name";
            document.querySelector('#name').focus();
            return;
        }

        else if  (adj ==''){
            myText = "adjective";
            document.querySelector('#adj').focus();
            return;

        }

        else if  (adj2 ==''){
            myText = "another adjective";
            document.querySelector('#adj2').focus();
            return;
        }

        else if  (verb ==''){
            myText = "verb";
            document.querySelector('#verb').focus();
            return;
        }

        else if  (three ==''){
            myText = "3 digit number";
            document.querySelector('#three').focus();
            return;

        }
        else if  (noun ==''){
            myText = "noun";
            document.querySelector('#noun').focus();
            return;

        }
        else if  (noun2 ==''){
            myText = "another noun";
            document.querySelector('#noun2').focus();
            return;
        }

    
        else { 
            myText = `Every year, we bake a cake for ${name} to celebrate her birthday. Last year she got a ${adj} cake, so this year she will get a ${adj2} cake. To bake the cake we need to mix all of the ingredients in a bowl. Then we need to ${verb} it into a baking pan and bake it at ${three} degrees. We want to make the cake special so we will add ${noun} between the layers of the cake and decorate it with ${noun2}. The cake is assembled and ready to be served!`
            document.querySelector('#name').value = '';
            document.querySelector('#adj').value = '';
            document.querySelector('#adj2').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#three').value = '';
            document.querySelector('#noun').value = '';
            document.querySelector('#noun2').value = '';
        }

                
   

        madlib.innerHTML = myText;
    });

})();
