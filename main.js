 
let kerdesek = ["What is the one thing that all wise men, regardless of their religion or politics, agree is between heaven and earth? What is it?",
"It occurs once in a minute, twice in a moment, but never in an hour. What is it?",
"Ha egy kakas pontosan az ól tetejére rakja a tojást, melyik irányba fog nagyobb eséllyel leesni?",
"A cowboy rides into town on Friday. He stays three days, then rides out of town on Friday. How?",
"If a plane crashes on the border between the United States and Canada, where do they bury the survivors?",
"Összesen öt év alatt hány hónapban van 28 nap?",
"Bizonyítsd be, hogy gyök 2 irracionális szám!",
"Ha 1=3, 2=5, 3=5, 4=4, akkor 5=?",
"Hogyan lehet 3 és 5 literes üvegek segítségével 4 liter vizet kimérni?",
"Az e egyenes egyenlete y = 6-2x. Az f egyenes merőleges e-re és átmegy a (-6;0) ponton. Mekkora a két egyenes és az x-tengely által bezárt terület?",
"Az e egyenes érinti az x^2+y^2 = 144 egyenletű kört, átmegy a (20;0) ponton és metszi a pozitív y-tengelyt. Mi y értéke, az egyenes és az y-tengely metszéspontjában?",
"Egy számtani sorozat első három tagja p, q és p^2, ahol p>0. Egy mértani sorozat első három tagja p, p^2 és q. Mennyi a számtani sorozat első tíz tagjának összege?",
"Oldd meg az egyenlőtlenséget a 0<=x<=pi intervallumon! (1-2sinx)cosx>=0",
"A k kör egyenlete x^2+y^2-18x-22y+178=0. Egy szabályos hatszög minden csúcsa belülről érinti a kört. Mekkora a hatszög területe?",
"Egy mértani sorozat első eleme 2*gyök3, a negyedik tagja 9/4. Mi a sorozat összege végtelenig?",
"I have forgotten my 5-character computer password, but I know that it consists of the letters a, b, c, d, e in some order. When I enter a potential password into the computer, it tells me exactly how many of the letters are in the correct position. When I enter abcde, it tells me that none of the letters are in the correct position. The same happens when I enter cdbea and eadbc. Using the best strategy, how many further attempts must I make in order to guarantee that I can deduce the correct password?",
"9-hez 5-öt adok és 2-t kapok. Hogy lehetséges ez?",
"Csak három 0-t és bármilyen matematikai műveletet felhasználva hogy kaphatunk 6-ot?",
"a,b,c és d számjegyeket jelölnek. Tudjuk, hogy abcd*4 = dcba. Mi lehet a betűk értéke?",
"Anyának és apának négy lánya van és minden lánynak egy bátyja. Hányan vannak összesen a családban?",
"Lajos 10km-t vezet délre a házától, majd balra fordul és még 25 km-t vezet. Ismét balra fordul és 40 km-t vezet, majd jobbra fordul és 5 km-t vezet. Ekkor megérkezett Béla házához. Milyen messze van Lajos és Béla háza légvonalban?"]

let valaszok = ["The word \"and\".",
"The letter \"m\".",
"A kakasok nem raknak tojást!",
"The horse's name is Friday.",
"Survivors are not buried!",
"60 hónapban, hiszen mindegyik hónapban van 28 nap.",
"Nagyon hosszú a bizonyítás, de itt egy link hozzá: https://www.homeschoolmath.net/teaching/proof_square_root_2_irrational.php",
"5=2, mivel mindegyik számhoz a betűinek számát rendeljük.",
"Teletöltjük a háromliteres üveget, majd a három litert átöntjük az ötliteresbe. Újra megöltjük a három litereset és teleöntjük vele az öt literes üveget. Így a három literesben egy liter marad. Kiürítjük az ötlitereset és beleöntjük az egy litert a háromliteresből. Ezek után telitöltjük a három litereset és hozzáöntjük az egy literhez. Így az ötliteres üvegben pont négy liter lesz.",
"16,2",
"15",
"95/8",
"0<=x<=pi/6 ; pi/2<=x<=5pi/6",
"36*gyök3",
"4*(2gyök3 + 3)",
"One attempt.",
"Reggel 9 órához 5 órát adva délután 2-t kapunk.",
"(0!+0!+0!)! = 3! = 3*2*1 = 6",
"a=2, b=1, c=7, d=8",
"Heten (apa, anya, 4 lány, 1 fiú)",
"30*gyök2"]



let maidatum = String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())

if (localStorage.datum) {
    if (maidatum != localStorage.datum) {
        localStorage.datum = maidatum
        localStorage.napiszam  = Math.floor(Math.random() * kerdesek.length)
    }
    if (! localStorage.napiszam) {
        localStorage.napiszam = 0
    }
}
else {
    localStorage.datum =  String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())
}

document.write(kerdesek[parseInt(localStorage.napiszam)])

function ujNapi() {
    localStorage.napiszam  = Math.floor(Math.random() * kerdesek.length)
    window.location.reload()
}

function showAnswer() {
    document.getElementById("valasz").innerHTML = valaszok[parseInt(localStorage.napiszam)]
}

document.write(localStorage.napiszam)
