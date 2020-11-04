window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');

        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });

    }      

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) =>{
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });

        }
    });

    // Практика по созданию таймера на сайте///


    const deadline = '2020-11-11';

    function getTimeRemining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000*60*60*24)),
              hours = Math.floor((t / (1000*60*60)) % 24),
              minutes = Math.floor((t / (1000/60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return  {
            "total":t,
            "days":days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds,

        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
           
           return  `0${num}`;

        }else {
            return num ;
        }

    }

    function SetClock(selector, endtime) {
        const timer = document.querySelector(selector);
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds');
              timeInterval = setInterval(updateClock,1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
    }

    SetClock('.timer', deadline);
    // модальное окно Открытие по названию.

    //собственный код
    
   /*  const linkForm = document.querySelector('.modal');
    const linkBtn = document.querySelectorAll('.btn');
    const closeForm = document.querySelector('.modal__close');

    // console.log(linkForm);
    // console.log(linkBtn);
    
    function closeModal() {
        linkForm.classList.remove('show');
        linkForm.classList.add('hide');
        document.body.style.overflow = '';
    };

    function openModal() {
        linkForm.classList.add('show');
        linkForm.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId); // если пользователь уже сам открыл модалку, то этим действием мы убиваем сеттаймаут

    };
     
    linkBtn.forEach(btn => {  // метод foreach позволяет обращаться к жлементам псевдомассива и перебирать их
        btn.addEventListener('click', openModal);
    });

    closeForm.addEventListener('click', () => {
        // linkForm.style.display = '';
        closeModal();
    });
    
    linkForm.addEventListener('click', (e) => {
        if (e.target === linkForm) {
            closeModal();

        }

    });

    // всплытие модального окна при прокрутке до определенного момента или через определенное время.
    //const modalTimerId = setTimeout(openModal, 6000);

    // если долистали до конца, то открывать окно

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= 
        document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        
        }
    }
    
    window.addEventListener('scroll', showModalByScroll); */


    // код урока по модалкам//
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 300000);
    // Изменил значение, чтобы не отвлекало

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);


    
  // создаем карточки на сайте с помощью классов самостоятельное решение///////

    // const cards = document.querySelector('.menu__field .container');

    // cards.textContent = '';
    // class Card {
        
    //     constructor ( img, title, subtitle, price ) {

    //         cards.insertAdjacentHTML('afterbegin', `
    //             <div class="menu__item">
    //                 <img src="${img}" alt="vegy">
    //                 <h3 class="menu__item-subtitle">Меню "${title}"</h3>
    //                 <div class="menu__item-descr">${subtitle}</div>
    //                 <div class="menu__item-divider"></div>
    //                 <div class="menu__item-price">
    //                     <div class="menu__item-cost">Цена:</div>
    //                     <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //                 </div>
    //             </div>
            
    //         `)

    //     }

    // }
    // const fitnessCard = new Card('/img/tabs/vegy.jpg', 'Фитнес', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', '230',);
    // const PremiumCard = new Card('/img/tabs/elite.jpg', 'Премиум', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', '550',);
    // const PostCard = new Card('/img/tabs/post.jpg', 'Постное', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ', '550',);
    
    // решение по курсу//////

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;

        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element  = 'menu__item';
                element.classList.add(this.element);
            } else {
               this.classes.forEach(className => element.classList.add(className));
 
            }
            
            element.innerHTML = `
                
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                
        
            `;
            
            this.parent.append(element);
        }

    }

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Фитнес',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        
    ).render();

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Фитнес',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
     
    ).render();

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Фитнес',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        
    ).render();
    

   //  Работа с формами, отправка данных на сервер///

   const forms = document.querySelectorAll('form');

   const message = {

        loading: 'Загрузка',
        success: 'Спасибо! Скоро с Вами свяжутся!',
        failure: 'Что то пошло не так...',
    };

    forms.forEach(item => {//вызываем функцию на каждую форму кторая будет нажата.
        postData(item);
    });

   function postData(form) {
       form.addEventListener('submit', (e) => { // для отмены стандартного поведения браузера (перезагрузки страницы) добавляем аргумент e(event) дла дальнейшей отмены стандартного поведения страницы
            e.preventDefault();// всегда в аджакс запросах отменяем поведение страницы

            const statusMessage = document.createElement('div');// реализуем вывод сообщения пользователю через создание нового блока и добавления к форме после процесса отправки.
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest(); // создаем объект реквест черех хмл
            request.open('POST', 'server.php'); // метод опен служит для настройки поведения запроса
            
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            // объект форм дата - спец объект для сбора данных с формы , быстрее чем писать самостоятельно
            const formData = new FormData(form); // для корректной работы всегда должен быть указан атрибут name  в верстке формы! Обязательно!
            // для перевода данных полученных в формдэйта мы используем такой метод:
            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;

            });
            const json = JSON.stringify(object);
            request.send(json);

            //request.send(formData);// отправляем объект 
            request.addEventListener('load', () => {
                if (request.status === 200) { // проверяем что код успешной отправки передан в статус
                    console.log(request.response);
                    statusMessage.textContent = message.success; // передаем сообщение с позитивным результатом
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure;// передаем сообщение с негативным результатом
                }
            });

        });
    }
 
});



