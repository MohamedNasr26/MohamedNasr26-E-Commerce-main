
var Quotes=[
    {
        "Qoutes":"Actions speak louder than words",
        "Auoither":"محمد ابراهيم ",
    },
    {
        "Qoutes":".A journey of thousand miles begins with a single step",
        "Auoither":"Slem Mohamed  ",
    },
    {
        "Qoutes":".A fool and his money are soon parted",
        "Auoither":" Nada Tarek ",
    },
    {
        "Qoutes":".Always put your best foot forward",
        "Auoither":" KayaN Nasr ",
    },
    {
        "Qoutes":"owards die many times before their deaths",
        "Auoither":" Hayat Mahmoud ",
    },
    {
        "Qoutes":".Don’t bite the hand that feeds you",
        "Auoither":"Yassen mahmoud ",
    },
   

]


function getQuotes(){

    var num= Math.floor(Math.random()*Quotes.length);

    document.getElementById("Quotes").innerHTML=Quotes[num].Qoutes;
    document.getElementById("Aouther").innerHTML=Quotes[num].Auoither;

}