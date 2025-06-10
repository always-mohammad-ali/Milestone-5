// METHOD 2 FOR CLICK EVENT

function makeRed(){
            document.body.style.backgroundColor = 'red';
         }

// <!--METHOD 3 FOR CLICK EVENT -->
const makeBlueButton = document.getElementById('makeBlue');
         makeBlueButton.onclick = blueButton;

         function blueButton(){
            document.body.style.backgroundColor = 'blue';
         }

// <!--METHOD 3 another system FOR CLICK EVENT -->
const makeAquaButton = document.getElementById('makeAqua');
         makeAquaButton.onclick = function aquaButton(){
            document.body.style.backgroundColor = 'aqua';
         }


// <!--METHOD 4 system FOR CLICK EVENT -->
         const makePinkButton = document.getElementById('makePink');

        makePinkButton.addEventListener('click', pinkButton);

        function pinkButton(){
            document.body.style.backgroundColor = 'pink';
        }

 // <!--METHOD 4 another system FOR CLICK EVENT -->       
 const makeOrangeBtn = document.getElementById('makeOrange');
         
         makeOrangeBtn.addEventListener('click', function orangeBtn(){
            document.body.style.backgroundColor = 'orange';
         })


// <!--METHOD 5 system FOR CLICK EVENT and it will use frequently -->
         document.getElementById('makeViolate').addEventListener('click', function(){
            document.body.style.backgroundColor = 'violet';
         })
