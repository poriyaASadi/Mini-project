const $ = document;
const boxSwich = $.querySelector('.boxSwich');
const boxShow__add = $.querySelector('.boxShow__add');
const boxIcon__add = $.querySelector('.boxIcon__add');
const LineDark = $.querySelector('.lineDark');
const btn = $.querySelector('.btn');

const inputTitle = $.querySelector('#searchInput');
const discription = $.querySelector('#discription');
const parent__cart = $.querySelector('.parent__cart');
const  ulList__type = $.querySelectorAll('.ulList__type li');
let swichK = false
boxSwich.addEventListener('click' , () => {
    if (!swichK) {
        boxShow__add.style.left = '1rem';
        LineDark.style.display = 'inline'
        swichK = true
    }else {
        boxShow__add.style.left = '-50rem';
        swichK = false;
    }
})
boxIcon__add.onclick = () => {
    boxShow__add.style.left = '-50rem';
    LineDark.style.display = 'none'
    swichK = false;
}

$.querySelector('.boxShow__add').addEventListener('click' , (e) => {

 if (e.target.tagName == 'LI') {
     iconType = e.target.innerHTML
 }
//  if (e.target.className.includes('boxSatus')) {
//      boxStatus = e.target.textContent.trim();
//      console.log(boxStatus)
//  }
})
$.querySelectorAll('.boxSatus').forEach(Element => Element.addEventListener('click' , (e) => {
   valueItem = e.target.textContent.trim()
}) )


class New {
    constructor (icontype , valueitem,inputtitle,discription) {
    this.iconType = icontype
    this.valueitem = valueitem
    this.title = inputtitle
    this.discription = discription
    }
    

    num = function () {
     switch (this.valueitem) {
      case 'In Progress' :
         return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
         <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
       </svg>`
        break
      case 'Won`t do' : 
        return ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>`
        break
      case 'Completed' : 
      return ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg> `
      break
     }
    }
}

btn.addEventListener('click' , () => {
    let newp = new New(iconType,valueItem,inputTitle.value,discription.value)
    parent__cart.insertAdjacentHTML('beforeend' , `
    <li>
                    <div class="boxUser__add boxUser__addY">
                        <div class="boxUser__leftItem">
                            <div class="boxIcon__type">
        ${newp.iconType}                                                                                      
                            </div>
                            <div><p class="text__userType">${newp.title}</p></div>
                        </div>
                        <div>
                            <span class="icon__spanUser icon__spanUserY">
                           ${newp.num()}       
                            </span>
                        </div>   
                    </div>
                    <p class="discriptionUser">${newp.discription}</p>
                </li>
    `);
})