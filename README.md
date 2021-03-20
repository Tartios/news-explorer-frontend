# Дипломный проект Яндекс.Практикум.
# Проект собран на React и Node.js, 
# Работает с внутреннием api, а также внешним NewsApi
# Адрес проекта http://tartios.students.nomoredomains.icu/
Функционал:
- регистрация на сайте приложения;
- поиск новостей по ключевому слову с помощью стороннего api;
- возможность сохранять и удалять из списка сохраненных новости;
- Проект обладает собственными api и базой данных на MongoDB;

В целях доработки проекта планируется устранить:
- верстка текста карточек съезжает при изменении разрешения экрана - клик по определенным зонам карточек должен перенаправлять 
на источник новости - при сохранении карточек и выходе с сайта на длительное время (когда jwt в хранилище просрочен), при повторном заходе на сайт подтягиваются данные из локального хранилища, где стоят метки на ранее сохраненных карточках, когда пользователь был авторизован - при наведении на иконки фб и гит они подсвечиваются неверно - при нажатии на логотип происходит... что-то, что должно происходить иначе
