function clickk(){
            const handleDefault = document.getElementById('default');
            handleDefault.innerText = ('Hey lady! you are sucking blood');
        }

        document.getElementById('handleEvent').addEventListener('click', function(){
            const holdHandleEvent = document.getElementById('default');
            holdHandleEvent.innerText = ('it is changed using addeventlistener')
        })