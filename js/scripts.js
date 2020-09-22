// $('#FeedBackFormModal').modal('show');


$('#specificOtp').on('click', function(e){
    $('#ChooseOptModal').modal('hide');
    $('#NoteTextModal').modal('show');

    setTimeout(function(){
        $('#NoteTextModal').modal('hide');

        // highlighted element function
        container.onmouseover = container.onmouseout = handler;

        function handler(event) {

            if (event.type == 'mouseover') {                
                event.target.classList.add('highlighted')
                event.target.addEventListener('click', event => {
                    //console.log(event.currentTarget.innerHTML)
                    event.stopImmediatePropagation();
                    html2canvas(document.getElementsByClassName("highlighted")[0]).then(canvas => {
                        document.querySelector('.container').appendChild(canvas)
                    });
                    container.onmouseover = null;

                    // Showing feedback modal
                    $('#FeedBackFormModal').modal('show');

                })

            }
            if (event.type == 'mouseout') {
                event.target.classList.remove('highlighted')
            }

        }

    },2000)
});