let partifarver = {
    "alternativet": "#00FF00",
    "konservative": "#00571F",
    "df":"#E7D01E",
    "la":"#12213f",
    "enhedslisten":"#C21B3E",
    "s":"#F04D46",
    "radikale":"#E82583",
    "sf":"#BF0418",
    "v":"#005392",
    "cd":"#9B0059",
    "kristendemokraterne":"#597992",
    "nye-borgerlige":"#004450",
    "riskjær":"#004224",
    "stramkurs":"#0198E1",
    "andre":"#a9a9a9",
    "ugyldige":"#a9a9a9"
}

let visDK = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    "description": "Barchart with election results",
    "config": {
      "background": "black",
      "axis": {
        "labelFont": "Georgia",
        "labelFontSize": 16,
        "labelPadding":10,
        "titleFont": "Georgia",
        "titleFontSize": 24,
        "titlePadding": 10,
        "labelColor": "white",
        "titleColor": "white"
      }
    },
    "width": 500,
    "height": 300,
    "data": {
      "values": [
        {"a": "A","b": 914882, "s":914882, "color":"#F04D46", "name":"Socialdemokratiet"},
        {"a": "B","b": 304714, "s":304714, "color":"#E82583", "name":"Radikale Venstre"},
        {"a": "C","b": 233865,"s":233865, "color":"#00571F", "name":"Konservative Folkeparti"},
        {"a": "D","b": 83201, "s":83201,"color":"#004450", "name":"Nye Borgerlige"},
        {"a": "E","b": 29600, "s":29600,"color":"#004224", "name":"Klaus Riskær"},
        {"a": "F","b": 272304,"s":272304, "color":"#BF0418", "name":"Socialistisk Folkeparti"},
        {"a": "I","b": 82270, "s":82270,"color":"#12213f", "name":"Liberal Alliance"},
        {"a": "K","b": 60944, "s":60944,"color":"#597992", "name":"Kristendemokraterne"},
        {"a": "O","b": 308513,"s":308513,"color":"#E7D01E", "name":"Dansk Folkeparti"},
        {"a": "P","b": 63114, "s":63114,"color":"#0198E1", "name":"Stram Kurs"},
        {"a": "V","b": 826161,"s":826161, "color":"#00539", "name":"Venstre"},
        {"a": "Ø","b": 245100, "s":245100,"color":"#C21B3E", "name":"Enhedslisten"},
        {"a": "Å","b": 104278, "s":104278,"color":"#00FF00", "name":"Alternativet"},
        //{"a": "-","b": 2774, "color":"#a9a9a9", "name":"Uden for parti"},
        {"a": "?","b": 37801,"s":17801, "color":"#a9a9a9", "name":"Ugyldige stemmer"}
      ]
    },
    "mark": "bar",
    "encoding": {
      "x": {"field": "a", "type": "ordinal", "title":"Partier", "sort": {"order": "descending", "op": "sum", "field": "s"}, "axis": {"labelAngle":0, "labelFontSize": 16,"labelPadding":10, "titleFontSize":24, "titlePadding":10 }},
      "y": {"field": "b", "type": "quantitative", "title":"Stemmer"},
      "tooltip": {"field": "name", "type": "ordinal"},
      "color": {
        "field": "color",
        "type": "nominal",
        "scale": null
      }
    },
    
}