//---------getting all the available text-----------
function changeLanguage() {
    //checks the button, if it is an english flag, it calls the
    //changeToGreek() function. Otherwise, it calls the changeToEnglish() function
    const nav_menu = document.getElementById('nav-menu');
    const nav_menu_items = nav_menu.getElementsByTagName('li');
    const country_flag = nav_menu_items[6].getElementsByTagName('img')[0].src.split('/').pop();
    if (country_flag == 'english_flag.png') {
        changeToGreek();
    } else {
        changeToEnglish();
    }
}

//this fucntion changes all the texts of the page from english to greek :(
function changeToGreek() {
    //nav menu
    var nav_menu = document.getElementById('nav-menu');
    var nav_menu_items = nav_menu.getElementsByTagName('li');
    nav_menu_items[0].getElementsByTagName('a')[0].innerHTML = "Αρχικη"
    nav_menu_items[1].getElementsByTagName('a')[0].innerHTML = "Εκδηλωσεις"
    nav_menu_items[2].getElementsByTagName('a')[0].innerHTML = "ομαδα"
    nav_menu_items[3].getElementsByTagName('a')[0].innerHTML = "Γενικες Ερωτησεις"
    nav_menu_items[4].getElementsByTagName('a')[0].innerHTML = "Προσφατες Ανακοινωσεις"
    nav_menu_items[5].getElementsByTagName('a')[0].innerHTML = "Επικοινωνια"
    nav_menu_items[6].getElementsByTagName('img')[0].src = './img/greek_flag.png';
    //contact us and learn today buttons
    var conmore = document.getElementById('conmore');
    var conmore_buttons = conmore.getElementsByTagName('a');
    conmore_buttons[0].innerHTML = 'Επικοινωνηστε';
    conmore_buttons[1].innerHTML = 'Μαθετε περισσοτερα';
    //who we are stuff
    var who_we_are = document.getElementById('whoweare');
    who_we_are.getElementsByTagName('h2')[0].innerHTML = 'ΠΟΙΟΙ ΕΙΜΑΣΤΕ';
    who_we_are.getElementsByTagName('p')[0].innerHTML = 'Η ΙΕΕΕ Αντιπροσωπεύει';
    //services etc stuff
    var services = document.getElementsByClassName('service-area')[0].getElementsByClassName('row wow bounceInUp')[0];
    var moreServices = services.getElementsByClassName('col-md-4 col-sm-6 col-xs-12');
    moreServices[0].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    moreServices[1].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    moreServices[2].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    moreServices[3].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    moreServices[4].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    moreServices[5].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    
}

//this fucntion changes all the texts of the page from greek to english :(
function changeToEnglish() {
    //nav menu
    var nav_menu = document.getElementById('nav-menu');
    var nav_menu_items = nav_menu.getElementsByTagName('li');
    nav_menu_items[0].getElementsByTagName('a')[0].innerHTML = "Home"
    nav_menu_items[1].getElementsByTagName('a')[0].innerHTML = "Our Work"
    nav_menu_items[2].getElementsByTagName('a')[0].innerHTML = "Team"
    nav_menu_items[3].getElementsByTagName('a')[0].innerHTML = "General Questions"
    nav_menu_items[4].getElementsByTagName('a')[0].innerHTML = "Recent Posts"
    nav_menu_items[5].getElementsByTagName('a')[0].innerHTML = "Contact Us"
    nav_menu_items[6].getElementsByTagName('img')[0].src = './img/english_flag.png';
    //contact us and learn today buttons
    var conmore = document.getElementById('conmore');
    var conmore_buttons = conmore.getElementsByTagName('a');
    conmore_buttons[0].innerHTML = 'Contact Us!';
    conmore_buttons[1].innerHTML = 'Learn Today';
    //who we are stuff
    var who_we_are = document.getElementById('whoweare');
    who_we_are.getElementsByTagName('h2')[0].innerHTML = 'WHO WE ARE';
    who_we_are.getElementsByTagName('p')[0].innerHTML = 'IEEE stands for';
    //services etc stuff
    var services = document.getElementsByClassName('service-area')[0].getElementsByClassName('row wow bounceInUp')[0];
    var moreServices = services.getElementsByClassName('col-md-4 col-sm-6 col-xs-12');
    moreServices[0].getElementsByTagName('p')[0].innerHTML = 'We share our knowledge with each other, talk about new technologies, and discuss about tools\' strengths & weaknesses. ';
    moreServices[1].getElementsByTagName('p')[0].innerHTML = 'We collaborate, share ideas and co-organize events along with other IEEE student branches around Greece.';
    moreServices[2].getElementsByTagName('p')[0].innerHTML = 'IEEE own tagline is \'Advancing technology for humanity\'. Our own primary act could not be any other than helping people grow, through talks & workshops. ';
    moreServices[3].getElementsByTagName('p')[0].innerHTML = 'Our core is volunteering. We believe in teamwork and helping people, without discrimination, working and advancing together. ';
    moreServices[4].getElementsByTagName('p')[0].innerHTML = 'We are not equipped only with brackets, commands and numbers, but banners, colors and frames too! ';
    moreServices[5].getElementsByTagName('p')[0].innerHTML = 'We believe in an accessible web. We focus on keeping our web aspects easy to use while delivering the most elegant possible result. ';
    
}