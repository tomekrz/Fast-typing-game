const btn = document.querySelector("button");
const input = document.querySelector("input");
const wordDiv = document.getElementById("word");
const timeDiv = document.getElementById("time");
const scoreDiv = document.getElementById("score");
let timeRise;
let declarateTime;
let score;
let scales;

const wordsTab = ["kot", "Ala", "gacek", "Szczecin", "Kraków", "Białystok", "krzesło", "orszak", "komputer",
    "Zosia", "Grunka", "niebo", "woda", "ogień", "las", "stodoła", "pole", "petycja", "poeta", "grabie",
    "gitara", "zając", "stonka", "choinka", "Warszawa", "drzewo", "świerk", "śnieg", "transformaor",
    "klawiatura", 'pisanie', "oświetlenie", "orzeł", "bizon", "słoń", "struś", "skrzypce", "auto",
    "Sosnowiec", "Radom", "lotnisko", "samolot", "bursztyn", "pieniądze", "monety", "aluminium", "chemia",
    "motocykl", "proszek", "pilot", "Krzysztof", "nic", "noc", "dzień", "głośniki", "programowanie", "bieg",
    "zamek", "pałac"
];
let tabElement;
btn.addEventListener("click", function () {

    let writeTime = 0;
    btn.style.display = 'none';
    input.style.display = 'block';
    input.value = "";
    scoreDiv.textContent = "";
    timeDiv.style.display = 'block';
    scoreDiv.classList.add("small")
    score = 0;
    scales = 20

    const wordGeneration = () => {
        tabElement = Math.floor(Math.random() * wordsTab.length);
        wordDiv.textContent = wordsTab[tabElement];


        declarateTime = scales + (wordsTab[tabElement].length / 4);
        // console.log(declarateTime);
        timeRise = setInterval(() => {
            writeTime++

            if (writeTime >= declarateTime) {
                scoreDiv.innerHTML = `Koniec gry! <br> Twój wynik to ${score}`;
                wordDiv.textContent = "";
                input.style.display = 'none';
                timeDiv.style.display = 'none';
                btn.style.display = 'block';
                scoreDiv.classList.remove("small");
                clearInterval(timeRise);
            };

            timeDiv.style.width = ` ${ 100- (writeTime * 100 / declarateTime)}%`


        }, 1000);


    }
    wordGeneration();




    input.addEventListener("input", function (e) {



        if (writeTime < declarateTime) {
            if (wordsTab[tabElement].length == e.target.value.length) {


                if (wordsTab[tabElement] == e.target.value) {

                    score++
                    writeTime = 0;
                    scoreDiv.textContent = `Twój wynik to ${score}`;

                    e.target.value = "";
                    if (declarateTime > 3) {
                        scales--
                    }
                    clearInterval(timeRise);

                    wordGeneration();
                } else {
                    scoreDiv.innerHTML = `Koniec gry! <br>Twój wynik to ${score}`;
                    scoreDiv.classList.remove("small");
                    e.target.value = "";
                    wordDiv.textContent = "";
                    input.style.display = 'none';
                    timeDiv.style.display = 'none';
                    btn.style.display = 'block';
                    clearInterval(timeRise);
                }
            }
        }

    })


});