//---------getting all the available text-----------
function changeLanguage() {
    //checks the button, if it is an english flag, it calls the
    //changeToGreek() function. Otherwise, it calls the changeToEnglish() function
    const nav_menu = document.getElementById('nav-menu');
    const nav_menu_items = nav_menu.getElementsByTagName('li');
    const country_flag = nav_menu_items[6].getElementsByTagName('img')[0].src.split('/').pop();
    if (country_flag == 'greek_flag.png') {
        changeToGreek();
    } else {
        changeToEnglish();
    }
}

//this fucntion changes all the texts of the page from english to greek :(
function changeToGreek() {
    //nav menu
    document.getElementById('nav-menu').getElementsByTagName('li')[0].getElementsByTagName('a')[0].innerHTML = "Αρχικη"
    document.getElementById('nav-menu').getElementsByTagName('li')[1].getElementsByTagName('a')[0].innerHTML = "Εκδηλωσεις"
    document.getElementById('nav-menu').getElementsByTagName('li')[2].getElementsByTagName('a')[0].innerHTML = "ομαδα"
    document.getElementById('nav-menu').getElementsByTagName('li')[3].getElementsByTagName('a')[0].innerHTML = "Γενικες Ερωτησεις"
    document.getElementById('nav-menu').getElementsByTagName('li')[4].getElementsByTagName('a')[0].innerHTML = "Προσφατες Ανακοινωσεις"
    document.getElementById('nav-menu').getElementsByTagName('li')[5].getElementsByTagName('a')[0].innerHTML = "Επικοινωνια"
    document.getElementById('nav-menu').getElementsByTagName('li')[6].getElementsByTagName('img')[0].src = './img/english_flag.png';
    //contact us and learn today buttons
    document.getElementById('conmore').getElementsByTagName('a')[0].innerHTML = 'Επικοινωνηστε';
    document.getElementById('conmore').getElementsByTagName('a')[1].innerHTML = 'Μαθετε περισσοτερα';
    //who we are stuff
    document.getElementById('whoweare').getElementsByTagName('h2')[0].innerHTML = 'ΠΟΙΟΙ ΕΙΜΑΣΤΕ';
    document.getElementById('whoweare').getElementsByTagName('p')[0].innerHTML = 'Η ΙΕΕΕ Αντιπροσωπεύει';
    //services etc stuff
    var services = document.getElementsByClassName('service-area')[0].getElementsByClassName('row wow bounceInUp')[0].getElementsByClassName('col-md-4 col-sm-6 col-xs-12');
    services[0].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    services[1].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    services[2].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    services[3].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    services[4].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    services[5].getElementsByTagName('p')[0].innerHTML = 'Αυτά είναι ελληνικά κείμενα, αλλα δεν ξέρω τι να γράψω :)';
    //workshop
    document.getElementsByClassName('section-title text-center wow zoomIn')[1].getElementsByTagName('h2')[0].getElementsByTagName('b')[0].innerHTML = 'ΕΚΔΗΛΩΣΕΙΣ';
    //members
    document.getElementsByClassName('container text-center wow zoomIn')[0].getElementsByTagName('h2')[0].getElementsByTagName('b')[0].innerHTML = "ΜΕΛΗ";
    document.getElementsByClassName('container text-center wow zoomIn')[0].getElementsByTagName('h4')[0].innerHTML = "Λίστα Μελών της IEEE<br>του παραρτήματος μας";
    //member list
    //nasia
    document.getElementsByClassName('team-member')[13].getElementsByClassName('team-member-name')[0].innerText = 'Σαμσούρη Νάσια';
    document.getElementsByClassName('team-member')[13].getElementsByClassName('team-member-designation')[0].innerText = 'Πρόεδρος';
    //apostolopoulos
    document.getElementsByClassName('team-member')[14].getElementsByClassName('team-member-name')[0].innerText = 'Αποστολόπουλος Γιώργος';
    document.getElementsByClassName('team-member')[14].getElementsByClassName('team-member-designation')[0].innerText = 'Αντιπρόεδρος, Design Committee';
    //mousa
    document.getElementsByClassName('team-member')[15].getElementsByClassName('team-member-name')[0].innerText = 'Μούσα Αναστασία';
    document.getElementsByClassName('team-member')[15].getElementsByClassName('team-member-designation')[0].innerText = 'Γραμματέας, Publicity Committee, Media Committee';
    //giapa
    document.getElementsByClassName('team-member')[16].getElementsByClassName('team-member-name')[0].innerText = 'Γιαπαντζής Γρηγόρης';
    document.getElementsByClassName('team-member')[16].getElementsByClassName('team-member-designation')[0].innerText = 'Ταμείας';
    //sifis
    document.getElementsByClassName('team-member')[17].getElementsByClassName('team-member-name')[0].innerText = 'Κοέν Ιωσήφ';
    document.getElementsByClassName('team-member')[17].getElementsByClassName('team-member-designation')[0].innerText = 'Μέντορας';
    //chatzimisios
    document.getElementsByClassName('team-member')[38].getElementsByClassName('team-member-name')[0].innerText = 'Χατζημίσιος Περικλής';
    document.getElementsByClassName('team-member')[38].getElementsByClassName('team-member-designation')[0].innerText = 'Councelor';
    //the rest of us
    document.getElementsByClassName('team-member')[18].getElementsByClassName('team-member-name')[0].innerText = 'Τσακίρης Νίκος';
    document.getElementsByClassName('team-member')[19].getElementsByClassName('team-member-name')[0].innerText = 'Παπαδόπουλος Παντελής';
    document.getElementsByClassName('team-member')[20].getElementsByClassName('team-member-name')[0].innerText = 'Γιουβανάκης Δημήτρης';
    document.getElementsByClassName('team-member')[21].getElementsByClassName('team-member-name')[0].innerText = 'Γερόπουλος Αποστόλης';
    document.getElementsByClassName('team-member')[22].getElementsByClassName('team-member-name')[0].innerText = 'Σακελλαρίου Γιώργος';
    document.getElementsByClassName('team-member')[23].getElementsByClassName('team-member-name')[0].innerText = 'Κιουτσίκης Αλέξανδρος';
    document.getElementsByClassName('team-member')[24].getElementsByClassName('team-member-name')[0].innerText = 'Θεοφάνους Χρίστος';
    document.getElementsByClassName('team-member')[25].getElementsByClassName('team-member-name')[0].innerText = 'Τετεπουλίδης Δημήτρης';
    document.getElementsByClassName('team-member')[26].getElementsByClassName('team-member-name')[0].innerText = 'Καλοβελόνης Απόστολος';
    document.getElementsByClassName('team-member')[27].getElementsByClassName('team-member-name')[0].innerText = 'Μαραντίδου Κωνσταντίνα';
    document.getElementsByClassName('team-member')[28].getElementsByClassName('team-member-name')[0].innerText = 'Πετράς Δημήτρης';
    document.getElementsByClassName('team-member')[29].getElementsByClassName('team-member-name')[0].innerText = 'Στασινός Πάνος';
    document.getElementsByClassName('team-member')[30].getElementsByClassName('team-member-name')[0].innerText = 'Καρανικόλας Γιώργος';
    document.getElementsByClassName('team-member')[31].getElementsByClassName('team-member-name')[0].innerText = 'Τζίκας Δημήτρης';
    document.getElementsByClassName('team-member')[32].getElementsByClassName('team-member-name')[0].innerText = 'Στεργιάδου Έλη';
    document.getElementsByClassName('team-member')[33].getElementsByClassName('team-member-name')[0].innerText = 'Πατράλη Μαρίνα';
    document.getElementsByClassName('team-member')[34].getElementsByClassName('team-member-name')[0].innerText = 'Πλιάκος Δημήτρης';
    document.getElementsByClassName('team-member')[35].getElementsByClassName('team-member-name')[0].innerText = 'Θεοχάρης Μιχάλης';
    document.getElementsByClassName('team-member')[36].getElementsByClassName('team-member-name')[0].innerText = 'Βουράκη Μαριάννα';
    document.getElementsByClassName('team-member')[37].getElementsByClassName('team-member-name')[0].innerText = 'Καριπίδης Θοδωρής';
    document.getElementsByClassName('team-member')[38].getElementsByClassName('team-member-name')[0].innerText = 'Χατζημίσιος Περικλής';
    //women in enginnering
    document.getElementsByClassName('wies')[0].getElementsByTagName('h2')[0].getElementsByTagName('b')[0].innerHTML = "Γυναίκες στη Μηχανολογία";
    document.getElementsByClassName('item active text-center')[0].getElementsByTagName('h4')[0].getElementsByTagName('b')[0].innerHTML = "Πιστεύω στην απεριόριστη δύναμη των γυναικών στο πλαίσιο της επιστήμης και της μηχανικής - Elizabeth Holmes.";
    document.getElementsByClassName('item active text-center')[0].getElementsByTagName('p')[0].innerHTML = 'Συνεργαζόμαστε για την αλλαγή του προσώπου της μηχανικής, αφιερωμένο στην προώθηση των γυναικών σε ρόλους μηχανικής και ηγεσίας, εμπνέοντας τα νεαρά κορίτσια να επιτύχουν τους στόχους τους στην επιστήμη.';
    //faqs
    document.getElementsByClassName('col-md-12 text-center wow zoomIn')[0].getElementsByTagName('h2')[0].getElementsByTagName('b')[0].innerHTML = 'ΓΕΝΙΚΕΣ ΕΡΩΤΗΣΕΙΣ';
    document.getElementsByClassName('sub-heading')[1].getElementsByTagName('h4')[0].innerHTML = 'Οι πιο συχνές ερωτήσεις για την IEEE<br>και πιο συγκεκριμένα για το SB μας';
    document.getElementsByClassName('collapsed')[0].innerHTML = "Τι είναι η IEEE;";
    document.getElementsByClassName('collapsed')[1].innerHTML = "Οι φοιτητές στην IEEE";
    document.getElementsByClassName('collapsed')[2].innerHTML = "Δραστηριότητες από Φοιτητικές Ομάδες";
    document.getElementsByClassName('collapsed')[3].innerHTML = "Γιατί να γίνεις μέλος της IEEE";
    document.getElementsByClassName('collapsed')[4].innerHTML = "Οφέλη Μέλους της IEEE";
    //faq questions
    document.getElementsByClassName('panel-body')[0].getElementsByTagName('p')[0].innerHTML = 'Η ΙΕΕΕ (Institute of Electrical and Electronic Engineers) είναι μια παγκόσμια τεχνολογική, επαγγελματική, μη πολιτική οργάνωση με σκοπό την προώθηση της θεωρίας και των εφαρμογών της επιστήμης του Ηλεκτρολόγου Μηχανικού και Μηχανικού Υπολογιστών για την εξέλιξη του επαγγέλματος με γνώμονα την κοινωνική προσφορά.<br> Στην ΙΕΕΕ είναι σήμερα εγγεγραμμένα περισσότερα από 400.000 μέλη εκ των οποίων περισσότεροι από 90.000 φοιτητές, σε περισσότερες από 160 χώρες, γεγονός που την καθιστά τη μεγαλύτερη τεχνολογική επαγγελματική κοινότητα στον κόσμο.';
    document.getElementsByClassName('panel-body')[1].getElementsByTagName('p')[0].innerHTML = 'Οι φοιτητές παίζουν καθοριστικό ρόλο για την IEEE. Σήμερα υπάρχουν περισσότερες από 2000 φοιτητικές ομάδες της ΙΕΕΕ στον κόσμο.<br> Σκοπός τους είναι να παρέχουν στους προπτυχιακούς και μεταπτυχιακούς φοιτητές, που ενδιαφέρονται για την επιστήμη του Ηλεκτρολόγου Μηχανικού, Μηχανικού Υπολογιστών ή συγγενείς επιστήμες, ευκαιρίες για ακαδημαϊκή, τεχνολογική και επαγγελματική εξέλιξη.';
    document.getElementsByClassName('panel-body')[2].getElementsByTagName('ul')[0].innerHTML = '<li> Διοργάνωση σεμιναρίων, συνεδρίων (workshops) και ομιλιών από διακεκριμένους επιστήμονες με σκοπό την επιμόρφωση και ενημέρωση των φοιτητών γύρω από θέματα που αφορούν την επιστήμη των Ηλεκτρολόγων Μηχανικών, Μηχανικών Υπολογιστών ή παρεμφερείς επιστήμες. </li> <li> Διοργάνωση εκπαιδευτικών εκδρομών και επισκέψεων σε εταιρείες και ιδρύματα που ασχολούνται με την έρευνα και την ανάπτυξη συγγενών επιστημονικών πεδίων. </li> <li> Συμμετοχή σε φοιτητικούς διαγωνισμούς υπό την αιγίδα της ΙΕΕΕ ή άλλων τεχνολογικών οργανισμών. </li> <li> Ενημέρωση των φοιτητών σχετικά με τις δραστηριότητες της ΙΕΕΕ και τις δυνατότητες που τους παρέχονται από την οργάνωση. </li> <li> Διοργάνωση διαγωνισμών και βραβείων με σκοπό την διάκριση της. </li>';
    document.getElementsByClassName('panel-body')[3].getElementsByTagName('p')[0].innerHTML = 'Η εγγραφή ενός φοιτητή ως μέλος της ΙΕΕΕ του παρέχει όλα τα προνόμια ενός κανονικού μέλους με το συγκριτικό πλεονέκτημα της πολύ μικρότερης συνδρομής. Η ΙΕΕΕ μέσω των πρωτοποριακών θεμάτων που πραγματεύεται και τη συμμετοχή σε διάφορες επαγγελματικές δραστηριότητες, συνέδρια κ.ά., σου δίνει τη δυνατότητα να είσαι ενήμερος της προόδου της τεχνολογίας και του κλάδου σου, των τελευταίων τάσεων της βιομηχανίας και <b>το πιο σημαντικό</b> σε βοηθάει τελικά στην καριέρα σου.';
    document.getElementsByClassName('panel-body')[4].getElementsByTagName('ul')[0].innerHTML = '<li>Λαμβάνεις το βραβευμένο μηνιαίο περιοδικό ΙΕΕΕ Spectrum, το οποίο περιλαμβάνει άρθρα για την κατάσταση του επαγγέλματος, ευκαιρίες για την καριέρα και την εκπαίδευση καθώς και αφιερώματα στις πιο πρόσφατες τεχνολογικές εξελίξεις και τις εφαρμογές τους. </li> <li> Έχεις δωρεάν ηλεκτρονική πρόσβαση στο περιοδικό POTENTIALS για φοιτητές και νέους επαγγελματίες. </li> <li> Μπορείς να πάρεις μέρος σε φοιτητικούς διαγωνισμούς που διοργανώνει η ΙΕΕΕ (όπως IEEEXtreme, Student Paper Contest κ.ά.) και να διακριθείς σε διεθνές επίπεδο. </li> <li> Μπορείς να διεκδικήσεις υποτροφίες για μέλη της ΙΕΕΕ. </li> <li> Αποκτάς δωρεάν @ieee.org email alias σε συνεργασία της ΙΕΕΕ με τη Google. </li> <li> Έχεις πρόσβαση σε καταλόγους προσφοράς εργασίας σε ευρωπαϊκό και διεθνές επίπεδο και σε εργαλεία προώθησης της καριέρας σου. </li> <li> Μπορείς να συμμετάσχεις σε φοιτητικά συνέδρια και συναντήσεις με άλλα μέλη στην Ελλάδα ή το εξωτερικό με σκοπό να ανταλλάξεις γνώσεις και απόψεις. </li> <li> Μπορείς να συμμετάσχεις σε όλα τα διεθνή επιστημονικά συνέδρια που διοργανώνει η ΙΕΕΕ έχοντας ειδικές χαμηλές φοιτητικές τιμές. </li> <li> Εξοικονομείς χρήματα με σημαντικές εκπτώσεις σε πάνω από 15.000 βιβλία που εκδίδει η ΙΕΕΕ. </li> <li> Λαμβάνεις οικονομική ενίσχυση για μεταφορά σε επιστημονικό συνέδριο στο οποίο έχεις δημοσίευση. </li> <li> Χρησιμοποιείς το εργαλείο IEEE Xplore για εύκολη εύρεση οποιουδήποτε επιστημονικού άρθρου και πρόσβαση σε αυτό αν περιλαμβάνεται στη συνδρομή σου. </li>';
    //upcoming events
    document.getElementsByClassName('section-title text-center wow zoomIn')[2].getElementsByTagName('h2')[0].getElementsByTagName('b')[0].innerHTML = 'ΑΝΕΡΧΟΜΕΝΕΣ ΕΚΔΗΛΩΣΕΙΣ';
    document.getElementsByClassName('section-title text-center wow zoomIn')[2].getElementsByTagName('h4')[0].innerHTML = 'Ανερχόμενες Εκδηλώσεις από το Student Branch';

}

//this fucntion changes all the texts of the page from greek to english :(
function changeToEnglish() {
    //nav menu
    document.getElementById('nav-menu').getElementsByTagName('li')[0].getElementsByTagName('a')[0].innerHTML = "Home"
    document.getElementById('nav-menu').getElementsByTagName('li')[1].getElementsByTagName('a')[0].innerHTML = "Our Work"
    document.getElementById('nav-menu').getElementsByTagName('li')[2].getElementsByTagName('a')[0].innerHTML = "Team"
    document.getElementById('nav-menu').getElementsByTagName('li')[3].getElementsByTagName('a')[0].innerHTML = "General Questions"
    document.getElementById('nav-menu').getElementsByTagName('li')[4].getElementsByTagName('a')[0].innerHTML = "Recent Posts"
    document.getElementById('nav-menu').getElementsByTagName('li')[5].getElementsByTagName('a')[0].innerHTML = "Contact Us"
    document.getElementById('nav-menu').getElementsByTagName('li')[6].getElementsByTagName('img')[0].src = './img/greek_flag.png';
    //contact us and learn today buttons
    document.getElementById('conmore').getElementsByTagName('a')[0].innerHTML = 'Contact Us!';
    document.getElementById('conmore').getElementsByTagName('a')[1].innerHTML = 'Learn Today';
    //who we are stuff
    document.getElementById('whoweare').getElementsByTagName('h2')[0].innerHTML = 'WHO WE ARE';
    document.getElementById('whoweare').getElementsByTagName('p')[0].innerHTML = 'IEEE stands for';
    //services etc stuff
    var services = document.getElementsByClassName('service-area')[0].getElementsByClassName('row wow bounceInUp')[0].getElementsByClassName('col-md-4 col-sm-6 col-xs-12');
    services[0].getElementsByTagName('p')[0].innerHTML = 'We share our knowledge with each other, talk about new technologies, and discuss about tools\' strengths & weaknesses. ';
    services[1].getElementsByTagName('p')[0].innerHTML = 'We collaborate, share ideas and co-organize events along with other IEEE student branches around Greece.';
    services[2].getElementsByTagName('p')[0].innerHTML = 'IEEE own tagline is \'Advancing technology for humanity\'. Our own primary act could not be any other than helping people grow, through talks & workshops. ';
    services[3].getElementsByTagName('p')[0].innerHTML = 'Our core is volunteering. We believe in teamwork and helping people, without discrimination, working and advancing together. ';
    services[4].getElementsByTagName('p')[0].innerHTML = 'We are not equipped only with brackets, commands and numbers, but banners, colors and frames too! ';
    services[5].getElementsByTagName('p')[0].innerHTML = 'We believe in an accessible web. We focus on keeping our web aspects easy to use while delivering the most elegant possible result. ';
    //workshop
    document.getElementsByClassName('section-title text-center wow zoomIn')[1].getElementsByTagName('h2')[0].getElementsByTagName('b')[0].innerHTML = 'WORKSHOPS';
    //members
    document.getElementsByClassName('container text-center wow zoomIn')[0].getElementsByTagName('h2')[0].getElementsByTagName('b')[0].innerHTML = "MEMBERS";
    document.getElementsByClassName('container text-center wow zoomIn')[0].getElementsByTagName('h4')[0].innerHTML = "Complete list of the members<br>of our IEEE SB";
    //member list
    //nasia
    document.getElementsByClassName('team-member')[13].getElementsByClassName('team-member-name')[0].innerText = 'Samsouri Nasia';
    document.getElementsByClassName('team-member')[13].getElementsByClassName('team-member-designation')[0].innerText = 'Chair';
    //apostolopoulos
    document.getElementsByClassName('team-member')[14].getElementsByClassName('team-member-name')[0].innerText = 'Apostolopoulos Georgios';
    document.getElementsByClassName('team-member')[14].getElementsByClassName('team-member-designation')[0].innerText = 'Vice-Chair, Design Committee';
    //mousa
    document.getElementsByClassName('team-member')[15].getElementsByClassName('team-member-name')[0].innerText = 'Mousa Anastasia';
    document.getElementsByClassName('team-member')[15].getElementsByClassName('team-member-designation')[0].innerText = 'Secretary, Publicity Committee, Media Committee';
    //giapa
    document.getElementsByClassName('team-member')[16].getElementsByClassName('team-member-name')[0].innerText = 'Giapantzis Gregory';
    document.getElementsByClassName('team-member')[16].getElementsByClassName('team-member-designation')[0].innerText = 'Treasurer';
    //sifis
    document.getElementsByClassName('team-member')[17].getElementsByClassName('team-member-name')[0].innerText = 'Koen Iosif';
    document.getElementsByClassName('team-member')[17].getElementsByClassName('team-member-designation')[0].innerText = 'Μέντορας';
    //chatzimisios
    document.getElementsByClassName('team-member')[38].getElementsByClassName('team-member-name')[0].innerText = 'Xatzimisios Periklis';
    document.getElementsByClassName('team-member')[38].getElementsByClassName('team-member-designation')[0].innerText = 'Councelor';
    //the rest of us
    document.getElementsByClassName('team-member')[18].getElementsByClassName('team-member-name')[0].innerText = 'Tsakiris Nikos';
    document.getElementsByClassName('team-member')[19].getElementsByClassName('team-member-name')[0].innerText = 'Papadopoulos Pantelis';
    document.getElementsByClassName('team-member')[20].getElementsByClassName('team-member-name')[0].innerText = 'Giouvanakis Dimitris';
    document.getElementsByClassName('team-member')[21].getElementsByClassName('team-member-name')[0].innerText = 'Geropoulos Apostolis';
    document.getElementsByClassName('team-member')[22].getElementsByClassName('team-member-name')[0].innerText = 'Sakellariou Georgios';
    document.getElementsByClassName('team-member')[23].getElementsByClassName('team-member-name')[0].innerText = 'Kioutsikis Alexandros';
    document.getElementsByClassName('team-member')[24].getElementsByClassName('team-member-name')[0].innerText = 'Theofanous Christos';
    document.getElementsByClassName('team-member')[25].getElementsByClassName('team-member-name')[0].innerText = 'Tetepoulidis Dimitris';
    document.getElementsByClassName('team-member')[26].getElementsByClassName('team-member-name')[0].innerText = 'Kalovelonis Apostolos';
    document.getElementsByClassName('team-member')[27].getElementsByClassName('team-member-name')[0].innerText = 'Marantidou Konstantina';
    document.getElementsByClassName('team-member')[28].getElementsByClassName('team-member-name')[0].innerText = 'Petras Dimitris';
    document.getElementsByClassName('team-member')[29].getElementsByClassName('team-member-name')[0].innerText = 'Stasinos Panos';
    document.getElementsByClassName('team-member')[30].getElementsByClassName('team-member-name')[0].innerText = 'Karanikolas Giorgos';
    document.getElementsByClassName('team-member')[31].getElementsByClassName('team-member-name')[0].innerText = 'Tzikas Dimitris';
    document.getElementsByClassName('team-member')[32].getElementsByClassName('team-member-name')[0].innerText = 'Stergiadou Ellie';
    document.getElementsByClassName('team-member')[33].getElementsByClassName('team-member-name')[0].innerText = 'Patrali Marina';
    document.getElementsByClassName('team-member')[34].getElementsByClassName('team-member-name')[0].innerText = 'Pliakos Dimitris';
    document.getElementsByClassName('team-member')[35].getElementsByClassName('team-member-name')[0].innerText = 'Theoxaris Michalis';
    document.getElementsByClassName('team-member')[36].getElementsByClassName('team-member-name')[0].innerText = 'Vouraki Marianna';
    document.getElementsByClassName('team-member')[37].getElementsByClassName('team-member-name')[0].innerText = 'Karipidis Thodoris';
    //women in enginnering
    document.getElementsByClassName('wies')[0].getElementsByTagName('h2')[0].getElementsByTagName('b')[0].innerHTML = "Women in Engineering";
    document.getElementsByClassName('item active text-center')[0].getElementsByTagName('h4')[0].getElementsByTagName('b')[0].innerHTML = "I believe in the unlimited power of women in the context of science and engineering -Elizabeth Holmes.";
    document.getElementsByClassName('item active text-center')[0].getElementsByTagName('p')[0].innerHTML = 'We work together on changing the face of engineering, dedicated to promoting women in engineering & leadership roles, inspiring young girls to achieve their goals in science.';
    //faqs
    document.getElementsByClassName('col-md-12 text-center wow zoomIn')[0].getElementsByTagName('h2')[0].getElementsByTagName('b')[0].innerHTML = 'GENERAL FAQs';
    document.getElementsByClassName('sub-heading')[1].getElementsByTagName('h4')[0].innerHTML = 'Most common questions about IEEE<br>and more specifically about our SB';
    document.getElementsByClassName('collapsed')[0].innerHTML = "What is IEEE?";
    document.getElementsByClassName('collapsed')[1].innerHTML = "Students in IEEE";
    document.getElementsByClassName('collapsed')[2].innerHTML = "Activities from our Student Branch";
    document.getElementsByClassName('collapsed')[3].innerHTML = "Why you Should Join Now";
    document.getElementsByClassName('collapsed')[4].innerHTML = "Benefits of Joining IEEE";
    //faq questions
    document.getElementsByClassName('panel-body')[0].getElementsByTagName('p')[0].innerHTML = 'The IEEE (Institute of Electrical and Electronic Engineers) is a global technological, professional, non-political organization with the goal of promoting the theory and applications of the science of Electrical and Computer Engineering for the development of the profession based on social contribution. <br> IEEE currently has more than 400,000 members, of which more than 90,000 are students in more than 160 countries, making it the largest technology professional community in the world.';
    document.getElementsByClassName('panel-body')[1].getElementsByTagName('p')[0].innerHTML = 'Students play a key role in the IEEE. Today there are more than 2000 IEEE student groups in the world. <br> Their purpose is to provide undergraduate and postgraduate students interested in the science of Electrical Engineering, Computer Engineering or related sciences with opportunities for academic, technological and professional development.';
    document.getElementsByClassName('panel-body')[2].getElementsByTagName('ul')[0].innerHTML = '<li> Organizing seminars, conferences (workshops) and lectures by distinguished scientists in order to educate and inform students about topics related to the science of Electrical Engineering, Computer Engineering or similar sciences. </li> <li> Organizing educational trips and visits to companies and institutions engaged in the research and development of related sciences fields. </li> <li> Participation in student competitions under the auspices of IEEE or others technological organizations. </li> <li> Informing students about the activities of IEEE and opportunities provided to them by the organization. </li> <li> Organizing competitions and awards in order to distinguish it. </li>';
    document.getElementsByClassName('panel-body')[3].getElementsByTagName('p')[0].innerHTML = 'The registration of a student as a member of the IEEE gives you access to all the privileges of one normal member with the comparative advantage of much smaller subscription. The IEEE through the pioneering issues and involvement in various professional activities, conferences, etc., gives you the opportunity to be informed of progress of your technology and industry, the latest industry trends and <b> the most important </b> ultimately helps you in your career.';
    document.getElementsByClassName('panel-body')[4].getElementsByTagName('ul')[0].innerHTML = '<li> You receive the award-winning monthly IEEE Spectrum magazine, which includes articles on the state of the profession, career opportunities and the education as well as tributes to the latest technology developments and their applications. </li> <li> You have free online access to the POTENTIALS magazine for students and young professionals. </li> <li> You can take part in student competitions organized by IEEE (such as IEEEXtreme, Student Paper Contest etc.) and to stand out internationally. </li> <li> You can apply for scholarships for IEEE members. </li> <li> You get free @ ieee.org email alias in collaboration with IEEE with Google. </li> <li> You have access to job offers lists in European and internationally and in tools to promote your career. </li> <li> You can participate in student conferences and meetings with others members in Greece or abroad in order to exchange knowledge and views. </li> <li> You can participate in all the international scientific conferences that organized by the IEEE having special low student prices. </li> <li> You save money with significant discounts on over 15,000 books issued by the IEEE. </li> <li> You receive financial support for transfer to a scientific conference at which you have a post. </li> <li> You use the IEEE Xplore tool to easily find anyone scientific article and access it if it is included in your subscription. </li>';
    //upcoming events
    document.getElementsByClassName('section-title text-center wow zoomIn')[2].getElementsByTagName('h2')[0].getElementsByTagName('b')[0].innerHTML = 'UPCOMING EVENTS'
    document.getElementsByClassName('section-title text-center wow zoomIn')[2].getElementsByTagName('h4')[0].innerHTML = 'Upcoming Events from our Student Branch';
}