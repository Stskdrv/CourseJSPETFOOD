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
          modal = document.querySelector('.modal');
        

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

    

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {// удалили обработчик события при клинке на крестик и изменили функционал, теперь если нажмем в любую облость с атрибутом дата клосе все закроется

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


    // делаем получение данных из базы, с помощью GET запроса к серверу. 59
    const getResourse = async (url ) => {// создаем отдельную переменную для функции отправки данных на сервер, она настраивает запрос, отправляет его на сервер, получает ответ и трансформирует его в json 

        const res = await fetch(url);

        if (!res.ok) {// обрабатываем поведение при возникновении ошибки, если что то пошло не так то выводим сообщение что именно
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();// возвращается promise, который можно будет отработать методом then/ устанавливаем await , чтобы подождпть пока полученный объект будет обработак и переведен в json
    };
    /* getResourse('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => { // декструктуризация объекта, когда мы вытвскиваем отдельные свойства в качестве отдельных переменных. 
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        }); *///закомментирована, тк ниже реализуется через библиотеку axious

        axios.get('http://localhost:3000/menu')
            .then(data =>  {
                data.data.forEach(({img, altimg, title, descr, price}) => { // декструктуризация объекта, когда мы вытвскиваем отдельные свойства в качестве отдельных переменных. 
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
                });
            }); 
    
    

/*    //  Работа с формами, отправка данных на сервер///

   const forms = document.querySelectorAll('form');

   const message = {

        loading: '/icons/spinner.svg',
        success: 'Спасибо! Скоро с Вами свяжутся!',
        failure: 'Что то пошло не так...',
    };

    forms.forEach(item => {//вызываем функцию на каждую форму кторая будет нажата.
        postData(item);
    });

   function postData(form) {
       form.addEventListener('submit', (e) => { // для отмены стандартного поведения браузера (перезагрузки страницы) добавляем аргумент e(event) дла дальнейшей отмены стандартного поведения страницы
            e.preventDefault();// всегда в аджакс запросах отменяем поведение страницы

            const statusMessage = document.createElement('img');// реализуем вывод сообщения пользователю через создание нового блока img и добавления к форме после процесса отправки.
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            //form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);
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
                    showThanksModal(message.success); // передаем сообщение с позитивным результатом
                    form.reset();
                    statusMessage.remove();
                } else {
                    showThanksModal(message.failure);// передаем сообщение с негативным результатом
                }
            });

        });
    }

    //// Красивое оповещение пользователя 54////

    //окно благодарности///
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog'); // получаем эдемент обертку нашего окна

        prevModalDialog.classList.add('hide'); //скрываем окно отправки формы
        openModal();// cнова вызываем функцию открытия модалки

        const thanksModal = document.createElement('div');// создаем новую верстку для благодарственной карточки
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class = " modal__content ">
               <div class="modal__close" data-close>X</div>
               <div class="modal__title" data-close>${message}</div>

            </div>  
        `;

        document.querySelector('.modal').append(thanksModal);// помещаем верстку в блок модал на странице

        setTimeout(() => { // реализуем возврат к исходному состоянию после отработки благодарности через 4 секунды
            thanksModal.remove();// удаляем новое оно 
            prevModalDialog.classList.add('show'); // старому добавляем и убираем классы показа
            prevModalDialog.classList.remove('hide');
            closeModal();// закрываем окно 
        }, 4000);



    }
 */
   //  Работа с формами, отправка данных на сервер 56 переписываем с помощью fetch вместо xmlhttpreq///

   const forms = document.querySelectorAll('form');

   const message = {

        loading: '/icons/spinner.svg',
        success: 'Спасибо! Скоро с Вами свяжутся!',
        failure: 'Что то пошло не так...',
    };

    forms.forEach(item => {//вызываем функцию на каждую форму кторая будет нажата.
        bindPostData(item);
    });


    const postData = async (url, data) => {// создаем отдельную переменную для функции отправки данных на сервер, она настраивает запрос, отправляет его на сервер, получает ответ и трансформирует его в json 

        const res = await fetch(url, { //задаем аргументы к фетч, это адрес запроса, а вторым это настройки запроса(метод,заголовки, и так далее)
            method: "POST",// тип запроса
            headers: {// заголовки зкапроса, какой тип данных  будем отправлять
                'Content-type': 'application/json'
            },
            body: data,// тело запроса, объект, который передается в запрос
        });

        return await res.json();// возвращается promise, который можно будет отработать методом then/ устанавливаем await , чтобы подождпть пока полученный объект будет обработак и переведен в json
    };

   function bindPostData(form) {
       form.addEventListener('submit', (e) => { // для отмены стандартного поведения браузера (перезагрузки страницы) добавляем аргумент e(event) дла дальнейшей отмены стандартного поведения страницы
            e.preventDefault();// всегда в аджакс запросах отменяем поведение страницы

            const statusMessage = document.createElement('img');// реализуем вывод сообщения пользователю через создание нового блока img и добавления к форме после процесса отправки.
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            //form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);


            // объект форм дата - спец объект для сбора данных с формы , быстрее чем писать самостоятельно
            const formData = new FormData(form); // для корректной работы всегда должен быть указан атрибут name  в верстке формы! Обязательно!
            // для перевода данных полученных в формдэйта мы используем такой метод:
            const json = JSON.stringify(Object.fromEntries(formData.entries()));// мы берем формдэйту,ее сначала превращаем в массив массивов, потом в классический объект, а потом объект в json и далее отправляем на сервер. 

            /*Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный метод fetch(), который позволяет легко и логично получать ресурсы по сети асинхронно.

            Подобная функциональность ранее достигалась с помощью XMLHttpRequest. Fetch представляет собой лучшую альтернативу, которая может быть легко использована другими технологиями, такими как Service Workers. Fetch также обеспечивает единое логическое место для определения других связанных с HTTP понятий, такие как CORS и расширения для HTTP. https://learn.javascript.ru/fetch */

            postData('http://localhost:3000/requests', json)
            .then(data => { // data это те данные, которые возвращает промис, те те, которые вернул сервер...
                console.log(data);
                showThanksModal(message.success); // передаем сообщение с позитивным результатом
                form.reset();// очищаем форму
                statusMessage.remove();// удаляем статус
            }).catch(() => {   //выполняем сценарий на случай ошибки в процессе
                showThanksModal(message.failure);// передаем сообщение с негативным результатом
            }).finally(() => {// действие, выполнящееся всегда, вне зависимости от результата в процессе выполнения
                form.reset();// очищаем форму
            });

               //ВАЖНО!!! Если fetch в процессе работы попадет на ошибку http протокола, он не будет считать это
               //ошибкой и продолжит выполнять скрипт дальше и выполнит резолв, он считает, что если запрос выполнить
               // удалось, то все окей, а ошибка будет если нет сети и не сможет сделать запрос(к примеру!)

        });
    }

    //// Красивое оповещение пользователя 54////

    //окно благодарности///
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog'); // получаем эдемент обертку нашего окна

        prevModalDialog.classList.add('hide'); //скрываем окно отправки формы
        openModal();// cнова вызываем функцию открытия модалки

        const thanksModal = document.createElement('div');// создаем новую верстку для благодарственной карточки
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class = " modal__content ">
               <div class="modal__close" data-close>X</div>
               <div class="modal__title" data-close>${message}</div>

            </div>  
        `;

        document.querySelector('.modal').append(thanksModal);// помещаем верстку в блок модал на странице

        setTimeout(() => { // реализуем возврат к исходному состоянию после отработки благодарности через 4 секунды
            thanksModal.remove();// удаляем новое оно 
            prevModalDialog.classList.add('show'); // старому добавляем и убираем классы показа
            prevModalDialog.classList.remove('hide');
            closeModal();// закрываем окно 
        }, 4000);



    }
    // работа с json srever и дазой данных карточек записанных в формате json 58

    fetch('http://localhost:3000/menu') // для того, чтобы осуществлять POST запросы мы обращаемся к нашей базе данных, которая лежит на сервере, в данном случае на нашем сервере json-server
        .then(data => data.json())
        .then(res => console.log(res));

    
    
    ///Создание слайдера на сайте 1 вариант 61

/*     const slides = document.querySelectorAll('.offer__slide');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');
    let slideIndex = 1;

    showSlides(slideIndex);
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');
        
        slides[slideIndex - 1].style.display = 'block';
        
         if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            total.textContent = slideIndex;
        }
        
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });
    
    next.addEventListener('click', function() {
        plusSlides(1);
    }); */

    // слайдер 2 вариант 62 

    // смысл данной реализации в том, что мы сделаем скрытым все, что выходит за границы блока обертки, и когда будет переключение слайда, то предыдущий будет уходить за пределы блока и скрываться, а новый занимать его окошко.

    const slides = document.querySelectorAll('.offer__slide');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    const slidesField = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;// мы получаем значение вычесленных стилей со страницы, которые расчитываются из css файла

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';// указываем, что ширина обертки слайдов будет 100 процентов от ширины слайда и умноженное на количество слайдов

    slidesField.style.display = 'flex'; // выстраиваем слайды в линию 
    slidesField.style.transition = '0.5s all'; // мутим плавное перемещение

    slidesWrapper.style.overflow = 'hidden';



    slides.forEach(slide => { // каждому слайду добавляем свойство ширины, чтобы они были одной ширины
        slide.style.width = width;

    });

    next.addEventListener('click', () =>{// мы проверяем, если смещение равно ширине одного слайда умноженное на количество слайдов(кроме первого - начальное состояние) то смещаем на исходное значение 
        if (offset == +width.slice(0, width.length-2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length-2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == slides.length) {

            slideIndex = 1;

        } else {
            slideIndex++; 
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex; 
        }

    });
    prev.addEventListener('click', () =>{//тут наоборот, если ноль то мы кидаем на последний слайд, а если другое положение но вычитаем ширину слайда
        if (offset == 0) {
            offset = +width.slice(0, width.length-2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length-2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex; 
        }
        
        if (slideIndex == 1) {

            slideIndex = slides.length;

        } else {
            slideIndex--; 
        }

    });


 
});



