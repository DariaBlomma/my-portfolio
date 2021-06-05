//last edited 09.03.21
// получить кнопку 1, 2
// при наведении мыши на 1 показать кнопку 2
//  при убирании мыши с 2 удалить класс
// при клике на 2 перейти по ссылке
function showInfo(sel1, sel2, link) {
    const btn1 =  document.querySelector(sel1);
    const btn2 = document.querySelector(sel2);
    btn1.addEventListener('mouseover', () => {
        btn2.classList.add('show');
    });

    btn2.addEventListener('mouseout', () => {
        btn2.classList.remove('show');
    });
    btn2.addEventListener('click', () => {
        window.location.href = link;
    });
}



showInfo('.insane', '.insane_info', 'https://dariablomma.github.io/insane-diploma/src/layout/');

showInfo('.glo3d', '.glo3d_info', 'https://dariablomma.github.io/3dglo/');

showInfo('.glo_project1', '.glo_project1_info', 'https://dariablomma.github.io/GloAcademy.18.0/Project%201/Obligatory%20tasks/');

showInfo('.scandi', '.scandi_info', 'https://dariablomma.github.io/HTMLAcademy.-Marathon-3.0/');

showInfo('.logitech', '.logitech_info', 'http://f0497458.xsph.ru/logitech/');

showInfo('.your_house', '.house_info', 'http://f0497458.xsph.ru/your_house/main_page.html');

showInfo('.summer_trip', '.trip_info', 'https://mega.nz/file/TzoQjThR#O4b4OtFfjLxe4YL_C9wuzl1PCDiSWUdoklvYwZUpQN4');

showInfo('.odysseum', '.odysseum_info', 'https://www.figma.com/file/5x09vTmuMaxHx6PNY3Rc69/Page3.-Design.Odysseum');

showInfo('.photoshop', '.photoshop_info', 'https://www.dropbox.com/s/ezb68rhsbiusrgi/min%20swedish.psd?dl=0');

