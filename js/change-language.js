//---------getting all the available text-----------
//navigation menu
function changeLanguage() {
    var nav_menu = document.getElementById('nav-menu');
    var nav_menu_items = nav_menu.getElementsByTagName('li');
    var country_flag = nav_menu_items[6].getElementsByTagName('img')[0].src.split('/').pop();
    if (country_flag == 'english_flag.png') {
        changeToGreek();
    } else {
        changeToEnglish();
    }
}

//this fucntion changes all the texts of the page from english to greek :(
function changeToGreek() {
    var nav_menu = document.getElementById('nav-menu');
    var nav_menu_items = nav_menu.getElementsByTagName('li');
    nav_menu_items[0].getElementsByTagName('a')[0].innerHTML = "Αρχικη"
    nav_menu_items[1].getElementsByTagName('a')[0].innerHTML = "Η Εμπειρια μας"
    nav_menu_items[2].getElementsByTagName('a')[0].innerHTML = "ομαδα"
    nav_menu_items[3].getElementsByTagName('a')[0].innerHTML = "Γενικες Ερωτησεις"
    nav_menu_items[4].getElementsByTagName('a')[0].innerHTML = "Προσφατες Ανακοινωσεις"
    nav_menu_items[5].getElementsByTagName('a')[0].innerHTML = "Επικοινωνια"
    nav_menu_items[6].getElementsByTagName('img')[0].src = './img/greek_flag.png';
}

//this fucntion changes all the texts of the page from greek to english :(
function changeToEnglish() {
    var nav_menu = document.getElementById('nav-menu');
    var nav_menu_items = nav_menu.getElementsByTagName('li');
    nav_menu_items[0].getElementsByTagName('a')[0].innerHTML = "Home"
    nav_menu_items[1].getElementsByTagName('a')[0].innerHTML = "Our Work"
    nav_menu_items[2].getElementsByTagName('a')[0].innerHTML = "Team"
    nav_menu_items[3].getElementsByTagName('a')[0].innerHTML = "General Questions"
    nav_menu_items[4].getElementsByTagName('a')[0].innerHTML = "Recent Posts"
    nav_menu_items[5].getElementsByTagName('a')[0].innerHTML = "Contact Us"
    nav_menu_items[6].getElementsByTagName('img')[0].src = './img/english_flag.png';
}