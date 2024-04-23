const $ = document;
const box__search = $.querySelector('.box__search');
const inputSearch = $.querySelector('#inputSearch');
const btn__qrSearch = $.querySelector('.btn__qrSearch');
const box_qr = $.querySelector('.box-qr');
const boxImage = $.querySelector('.boxImage');

btn__qrSearch.addEventListener('click' , () => {
    let valueInput = inputSearch.value.trim()
    CreatQR(valueInput)
    inputSearch.value = ''
})


async function CreatQR (data) {
  fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`)
  .then(res => {
    box__search.innerHTML = ''
    box__search.insertAdjacentHTML('beforeend' , `
    <h1 class="title__logo">
    <svg>
        <use href="#QR"></use>
    </svg>
    QRCODE</h1>
    <div class="box-qr">
    <div class="boxImage"> <img src=${res.url} alt="NO-QR" class="imageQR"></div>
     <div class="box__toSher">
         <div>Copy</div>
     <a href="https://github.com/poriyaASadi">Git-hub</a>
     </div>
    </div>
    `)
  })
}
