/*=============================================
Object with Properties
=============================================*/
var p = {
    //catch the 7 buttons in two arrays
    selectionButtons: document.querySelectorAll('#right-container #buttons button'),
    actionButtons: document.querySelectorAll('#right-container #btn-action button'),

    //catch the div of the stars per column
    starsColumn1: document.querySelectorAll('#left-container #column1 .star'),
    starsColumn2: document.querySelectorAll('#left-container #column2 .star'),
    starsColumn3: document.querySelectorAll('#left-container #column3 .star'),
    starsColumn4: document.querySelectorAll('#left-container #column4 .star'),
    starsColumn5: document.querySelectorAll('#left-container #column5 .star'),

    //catch the text per column
    textColumn1: document.querySelectorAll('#left-container #column1 .info p'),
    textColumn2: document.querySelectorAll('#left-container #column2 .info p'),
    textColumn3: document.querySelectorAll('#left-container #column3 .info p'),
    textColumn4: document.querySelectorAll('#left-container #column4 .info p'),
    textColumn5: document.querySelectorAll('#left-container #column5 .info p'),

    //catch the images percolumn
    imagesColumn1: document.querySelectorAll('#left-container #column1 .cartoon img'),
    imagesColumn2: document.querySelectorAll('#left-container #column2 .cartoon img'),
    imagesColumn3: document.querySelectorAll('#left-container #column3 .cartoon img'),
    imagesColumn4: document.querySelectorAll('#left-container #column4 .cartoon img'),
    imagesColumn5: document.querySelectorAll('#left-container #column5 .cartoon img'),

    //catch the h2 for the result text
    resultText: document.querySelector('#right-container #result h1'),

    //catch the img tags results
    resultImg: document.querySelectorAll('#right-container #result #result-img img'),

    //variables with the state of the stars per column
    stateStars1: 0,
    stateStars2: 0,
    stateStars3: 0,
    stateStars4: 0,
    stateStars5: 0,

    //variable to save a selected message per column
    message: ['', '', '', '', ''],

    //variable to save the location selected img per column
    imagesLocation: ['', '', '', '', ''],

}

/*=============================================
Object with Methods
=============================================*/
var m = {
    //method to remove and add stars
    rmv_add_Stars: (stateStars, starsColumn) => {
        // remove if is not position 0
        if (stateStars != 0)
            starsColumn[stateStars - 1].style.display = "none";
        // remove the last star when is in position 0
        else if (stateStars == 0)
            starsColumn[starsColumn.length - 1].style.display = "none";
        starsColumn[stateStars].style.display = "contents";
    },

    //method to remove all the stars
    removeAll: () => {
        console.log(p.stateStars1)
        p.starsColumn1[(p.stateStars1 != 0) ? p.stateStars1 - 1 : 0].style.display = 'none';
        p.starsColumn2[(p.stateStars2 != 0) ? p.stateStars2 - 1 : 0].style.display = 'none';
        p.starsColumn3[(p.stateStars3 != 0) ? p.stateStars3 - 1 : 0].style.display = 'none';
        p.starsColumn4[(p.stateStars4 != 0) ? p.stateStars4 - 1 : 0].style.display = 'none';
        p.starsColumn5[(p.stateStars5 != 0) ? p.stateStars5 - 1 : 0].style.display = 'none';

        [...p.resultImg].map((element) => {
            element.setAttribute('src', './img/question.png');
        })
        p.stateStars1 = 0;
        p.stateStars2 = 0;
        p.stateStars3 = 0;
        p.stateStars4 = 0;
        p.stateStars5 = 0;
    },

    //method to create a random number
    getRandomNumber: (limit) => Math.floor(Math.random() * limit),

    //method to set the ranom number
    setRandomNumber: (stateStars) => (stateStars != 0) ? stateStars - 1 : 0,

    //method to validate and concat the message
    concatMessage: (stateStars, textColumn, positionMessage) => {

        if (stateStars == 0)
            p.message[positionMessage] = textColumn[stateStars].innerText;
        else if (stateStars - 1 >= 0)
            p.message[positionMessage] = textColumn[stateStars - 1].innerText;
        else
            p.message[positionMessage] = '___';
    },

    setImages: (stateStars, imagesColumn, positionImage) => {
        if (stateStars == 0)
            p.resultImg[positionImage].setAttribute('src', imagesColumn[stateStars].getAttribute('src'));
        else if (stateStars - 1 >= 0)
            p.resultImg[positionImage].setAttribute('src', imagesColumn[stateStars - 1].getAttribute('src'));
    },

    //MAIN METHOD
    main: () => {
        /*----add eventlistener to  selectionButtons---*/
        // convert StaticNodeList to Array of item and add eventlistener using spread operator
        [...p.selectionButtons].map((element, index) => element.addEventListener("click", m.setStars));

        /*----add eventlistener to  actionButtons---*/
        // convert StaticNodeList to Array of item and add eventlistener using spread operator
        [...p.actionButtons].map((element, index) => element.addEventListener("click", m.execute));
    },

    setStars: (number) => {
        switch (number.target.id) {
            case 'button1':
                m.rmv_add_Stars(p.stateStars1, p.starsColumn1);
                (p.stateStars1 >= p.starsColumn1.length) ? p.stateStars1 = 0: p.stateStars1++;
                break;
            case 'button2':
                m.rmv_add_Stars(p.stateStars2, p.starsColumn2);
                (p.stateStars2 >= p.starsColumn2.length) ? p.stateStars2 = 0: p.stateStars2++;
                break;
            case 'button3':
                m.rmv_add_Stars(p.stateStars3, p.starsColumn3);
                (p.stateStars3 >= p.starsColumn3.length) ? p.stateStars3 = 0: p.stateStars3++;
                break;
            case 'button4':
                m.rmv_add_Stars(p.stateStars4, p.starsColumn4);
                (p.stateStars4 >= p.starsColumn4.length) ? p.stateStars4 = 0: p.stateStars4++;
                break;
            case 'button5':
                m.rmv_add_Stars(p.stateStars5, p.starsColumn5);
                (p.stateStars5 >= p.starsColumn5.length) ? p.stateStars5 = 0: p.stateStars5++;
                break;
            default:
                break;
        }
    },

    //methods for action buttons
    execute: (e) => {
        switch (e.target.id) {
            case 'button-reset':
                m.removeAll();
                p.resultText.innerText = "___ ___ ___ ___ ___";
                break;
            case 'button-random':
                m.removeAll();
                p.stateStars1 = m.getRandomNumber(8);
                p.stateStars2 = m.getRandomNumber(7);
                p.stateStars3 = m.getRandomNumber(7);
                p.stateStars4 = m.getRandomNumber(8);
                p.stateStars5 = m.getRandomNumber(7);
                p.starsColumn1[m.setRandomNumber(p.stateStars1)].style.display = "contents";
                p.starsColumn2[m.setRandomNumber(p.stateStars2)].style.display = "contents";
                p.starsColumn3[m.setRandomNumber(p.stateStars3)].style.display = "contents";
                p.starsColumn4[m.setRandomNumber(p.stateStars4)].style.display = "contents";
                p.starsColumn5[m.setRandomNumber(p.stateStars5)].style.display = "contents";
                break;
            case 'button-playback':

                //call the maker message function per each column 
                m.concatMessage(p.stateStars1, p.textColumn1, 0);
                m.concatMessage(p.stateStars2, p.textColumn2, 1);
                m.concatMessage(p.stateStars3, p.textColumn3, 2);
                m.concatMessage(p.stateStars4, p.textColumn4, 3);
                m.concatMessage(p.stateStars5, p.textColumn5, 4);

                m.setImages(p.stateStars1, p.imagesColumn1, 0);
                m.setImages(p.stateStars2, p.imagesColumn2, 1);
                m.setImages(p.stateStars3, p.imagesColumn3, 2);
                m.setImages(p.stateStars4, p.imagesColumn4, 3);
                m.setImages(p.stateStars5, p.imagesColumn5, 4);
                p.resultText.innerText = p.message.join(' ');

                break;

            default:
                break;
        }
    },

}

m.main();