const death = 'truedeath'.split('');
const deathLength = death.length;
let deathCurrentNumber = 0;

$(document).keypress(function(e) {
    if (e.keyCode !== death[deathCurrentNumber].charCodeAt(0)){
        deathCurrentNumber = 0;
        return;
    }

    deathCurrentNumber++;

    if (deathCurrentNumber === deathLength) {
        trueDeath();
    }
});

function trueDeath() {

    setInterval(function() {
        const reverseExclemationMark = 'ยก';
        const amount = 4;
        const random1 = Math.floor(Math.random() * amount) + 1;
        const random2 = Math.floor(Math.random() * amount) + 1;

        let text = '%c ';

        for (let i = 0; i < random1; i++)      text += '๐';
        for (let i = amount; i > random1; i--) text += '  ';

        text += ' TRUE DEATH ';

        for (let i = amount; i > random2; i--) text += '  ';
        for (let i = 0; i < random2; i++)      text += '๐';

        console.log(text,
            'font-weight:bold; background-color:red; color:black; font-size:1.8em; text-align:center;');
    }, 10);

    openWindow();

}


function openWindow() {
    var data = `
        <img src="https://c.tenor.com/UyujgSp5DHwAAAAC/skull-human-skull.gif" style="width=100%; margin:0;"/>

        <script>
            console.log('opened window');

            window.open('', null, 'width=520,height=400')
                .document.write(window.opener.Data);
            
            console.log(window.opener.Data);
        </script>
    `;

    window.Data = data;

    window.open('', 'w1', 'width=520,height=400')
        .document.write(data);

    // read this once you have some motivation
    // https://stackoverflow.com/questions/29909927/inject-an-opened-window-with-script

}
