var cardToggle = true;
var message = document.getElementById('message');

var messagesList = [
    "Do you remember nung di pa tayo I said mag bet ako sayo, Im happy i did.",
    "If ever na tanungin mo ko ng bakit ikaw, I see kase na compatible tayo as partner.",
    "Always remember love kaya kita pinupush to be better looking, kase ayoko mag kaiwanan tayo sa status, gusto ko sa future mag kasama tayo on our best version.",
    "I appreciate yung every day goodmorning and goodnight, always small things makes the changes.",
    "Stop thinking that people will leave you love, and practice if something is broken fix it instead of throwing away.",
    "I can do and hanle anything on myself, Here sa relasyon natin I really don't care if you loose if magiging masaya ka and be better Im content.",
    "I appreciate sobra mga binili mo sakin love hahahha, gifting na love language ko.",
    "I love you love, wala nako masabi hahahah.",
    "Love... tulog na tayo.",
    "Secret.",
    "Tanda mo paba nung nag Intramuros tayo hahaha, Ang memorable noh.",
    "Gulat sya eh, hinalikan ko sya sa elevator."
]


document.getElementById('card-inside').addEventListener('click', function() {

    if (cardToggle == true) {

    const randomItem = messagesList[Math.floor(Math.random() * messagesList.length)];

        message.textContent = randomItem;
    } else {
        setTimeout(() => {
            message.textContent = "";
        }, 100);
    }
    
    cardToggle = !cardToggle;

});
