function show() {
    const num = '0123456789';
    const eng = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    const rus = 'БВГДЕЁЖЗИЙКЛМНОПФфЦЧШЩЭ';
    const jap = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
    const lang_Array = [num, eng, rus, jap]
    const lang_String = lang_Array.join('')

    const randomize = () => Math.floor(Math.random() * lang_String.length);

    const shuffleString = () => lang_Array.sort(() => randomize() * 0.5).join('');

    const sliced = () => {
        let random1 = randomize();
        const prandom = random1;
        let random2 = randomize();

        if (random1 < random2) {
            random1 = random2;
            random2 = prandom;
        }

        return shuffleString.slice(random1, random2);
    }

    const matrix = $('.matrix').first();
    const matrixTextElement = '<div class="matrix-text"></div>';

    matrix.innerHTML = '';

    for( let i = 0; i < lang_String.length; i++ ) {
        matrix.innerHTML += matrixTextElement;
        let matrixText = $('.matrix-text');

        console.log(matrixText);
        console.log(matrix.innerHTML);
        console.log(matrixText[i]);

        matrixText[i].style.opacity = (Math.random() * 0.3) + 1;
        matrixText[i].style.transitionDelay = Math.random() * (matrixText.length / 2) + 's';
        matrixText[i].style.transform = `translateZ(${Math.floor(Math.random() * windows.innerWidth) + "px"})`;
        matrixText[i].innerHTML = shuffleString();
    }

    function init() {
        matrix.className = 'loaded';
    }

    setTimeout(init, 2000);

    setInterval(() => {
        for( let i = 0; i < lang_String.length; i++ ) {
            matrixText[randomize()].innerHTML = sliced() + shuffleString();
        }
    }, 300);
}

show();