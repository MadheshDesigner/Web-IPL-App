
const Add_player = document.getElementById('Add_player');

Add_player.addEventListener('click', () => {
    const input_text = document.getElementById('input_text');
    const input_number = document.getElementById('input_number');
    const select_1 = document.getElementById('select_1');
    const selectEl = document.getElementById('selectEl');
    const input_url = document.getElementById('input_url');

    if(input_text.value!='' && input_number.value!='' && select_1.value!='' && selectEl.value!='' && input_url.value!=''){
        window.location.href='index.html'
    }
    else{
        alert('Please Enter the All values')
    }
})
