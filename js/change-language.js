//---------getting all the available text-----------
//navigation menu
function changeLanguage() {
    var nav_menu = document.getElementById('nav-menu');
    var nav_menu_items = nav_menu.getElementsByTagName('li');
    var list_item = nav_menu_items[0].getElementsByTagName('a');
    list_item[0].innerHTML = "Αρχικη"
    list_item = nav_menu_items[1].getElementsByTagName('a');
    list_item[0].innerHTML = "Η Εμπειρια μας"
    list_item = nav_menu_items[2].getElementsByTagName('a');
    list_item[0].innerHTML = "ομαδα"
    list_item = nav_menu_items[3].getElementsByTagName('a');
    list_item[0].innerHTML = "Γενικες Ερωτησεις"
    list_item = nav_menu_items[4].getElementsByTagName('a');
    list_item[0].innerHTML = "Προσφατες Ανακοινωσεις"
    list_item = nav_menu_items[5].getElementsByTagName('a');
    list_item[0].innerHTML = "Επικοινωνια"
    list_item = nav_menu_items[0].getElementsByTagName('img');
}