

// InputEl_1.addEventListener('keyup',(event)=>{
//    if(event.key==='Enter'){
//     console.log(InputEl_1.value);
//    }
// })

// console.log(InputEl_3);
// InputEl_3.addEventListener('keyup',(event)=>{
//     if(event.key==='Enter'){
//      console.log(InputEl_3.value);
//     }
//  })


const BtnEl = document.getElementById('Btn_1');
// const ContainerEl = document.querySelector('.container_div2');
// console.log(ContainerEl);


BtnEl.addEventListener('click', () => {

    const InputEl_1 = document.getElementById('inputEl_1');
    const InputEl_2 = document.getElementById('inputEl_2');
    const InputEl_3 = document.getElementById('inputEl_3');
    const input_value_1 = InputEl_1.value;
    const input_value_2 = InputEl_2.value;
    const input_value_3 = InputEl_3.value;
    if (input_value_1 != '' && input_value_2 != '' && input_value_3 != '') {
        window.location.href = 'index.html'

    }

})
