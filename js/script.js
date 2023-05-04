



let arr = [
   {
      id: 1,
      tarif: "Гость",
      description: "Приходите в любое время",
      price: 1000,
      details: {
         "Место в общей зоне": true,
         "Доступ 24/7": false,
         "Skype-room": false,
         "Переговорная": false,
         "Мероприятия": false,
      }
   },
   {
      id: 2,
      tarif: "Резидент",
      description: "Сатнь частью сообщества",
      price: 14900,
      details: {
         "Место в общей зоне": true,
         "Доступ 24/7": true,
         "Skype-room": true,
         "Переговорная": false,
         "Мероприятия": false,
      }
   },
   {
      id: 1,
      tarif: "Резидент плюс",
      description: "Любим вас",
      price: 19900,
      details: {
         "Место в общей зоне": true,
         "Доступ 24/7": true,
         "Skype-room": true,
         "Переговорная": true,
         "Мероприятия": true,
      }
   },
]
let box = document.querySelector('.items-box');
for (let info of arr) {
   let doc = document;
   let item = doc.createElement('div');
   let item_top = doc.createElement('div');
   let item_textBox = doc.createElement('div');
   let title = doc.createElement('div');
   let suptitle = doc.createElement('div');
   let price = doc.createElement('div');
   let hr = doc.createElement('hr');
   let advan = doc.createElement('div');
   for(let objInfo in info.details){
      let el = doc.createElement('div');
      el.className = 'item__el el';
      let text = doc.createElement('div');
      text.className = 'el__text'
      text.innerText = objInfo;
      let span = doc.createElement('span');
      if (info.details[objInfo]){
         span.className = 'el__icon true material-icons';
      } else {
         span.className = 'el__icon false material-icons';
      }
      span.onclick=()=>{
         info.details[objInfo] = !info.details[objInfo];
         if (info.details[objInfo]){
            span.className = 'el__icon true material-icons';
         } else {
            span.className = 'el__icon false material-icons';
         }
      }
      span.innerHTML = 'done';
      el.append(text , span);
      advan.append(el);
   }
   let item_btn = doc.createElement('button');
   //class and inner
   item.classList.add('item');
   item_top.classList.add('item__top');
   item_textBox.classList.add('item__title-box');
   title.classList.add('item__title');
   suptitle.classList.add('item__suptitle');
   price.classList.add('item__price');
   hr.classList.add('item__hr');
   advan.classList.add('item__advan');
   item_btn.classList.add('item__btn');
   item_btn.innerHTML = `ВЫДРАТЬ ТАРИФ`;
   title.innerText = info.tarif;
   suptitle.innerText = info.description;
   price.innerText = `$${info.price}`;
   //app
   item.append(item_top , item_btn);
   item_top.append(item_textBox , price , hr , advan);
   item_textBox.append(title , suptitle)
   box.append(item)
}

