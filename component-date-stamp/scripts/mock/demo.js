x = ['green','standard','blue','white']
var data = [

    {date:{day:'FRI',month:'DEC 1'}, dateType:'date-stamp-standard date-container'},
    {date:{day:'FRI',month:'DEC 20'}, dateType:'date-stamp-standard date-container'},
    {date:{day:'FRI+',month:'DEC 1 - JAN 1'}, dateType:'date-stamp-standard date-container'},
    {date:{day:'FRI+',month:'DEC 1 - JAN 1 2016'}, dateType:'date-stamp-standard date-container'},
    {date:{day:'FRI+',month:'DEC 20 - JAN 20'}, dateType:'date-stamp-standard date-container'},
    {date:{day:'FRI+',month:'DEC 20 - JAN 20 2016'}, dateType:'date-stamp-standard date-container'},
    {date:{day:'TBD',month:''}, dateType:'date-stamp-standard date-container'},
    {date:{day:'TBD',month:'2016'}, dateType:'date-stamp-standard date-container'},
    {date:{day:'TBD',month:'DEC 2016'}, dateType:'date-stamp-standard date-container'},

    {date:{day:'FRI',month:'DEC 1'}, dateType:'date-stamp-white date-container'},
    {date:{day:'FRI',month:'DEC 20'}, dateType:'date-stamp-white date-container'},
    {date:{day:'FRI+',month:'DEC 1 - JAN 1'}, dateType:'date-stamp-white date-container'},
    {date:{day:'FRI+',month:'DEC 1 - JAN 1 2016'}, dateType:'date-stamp-white date-container'},
    {date:{day:'FRI+',month:'DEC 20 - JAN 20'}, dateType:'date-stamp-white date-container'},
    {date:{day:'FRI+',month:'DEC 20 - JAN 20 2016'}, dateType:'date-stamp-white date-container'},
    {date:{day:'TBD',month:''}, dateType:'date-stamp-white date-container'},
    {date:{day:'TBD',month:'2016'}, dateType:'date-stamp-white date-container'},
    {date:{day:'TBD',month:'DEC 2016'}, dateType:'date-stamp-white date-container'},
]

var g = [],
    i=0;
for(value in data){
    SH.dateStamp.view.init( data[value]); SH.dateStamp.view.render(); i++;}