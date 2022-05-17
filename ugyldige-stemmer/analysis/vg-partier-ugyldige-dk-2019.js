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

let partierVisualisering = {
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
        {"a": "A","stemmer": 914882, "s":914882, "color":"#F04D46", "parti":"Socialdemokratiet"},
        {"a": "B","stemmer": 304714, "s":304714, "color":"#E82583", "parti":"Radikale Venstre"},
        {"a": "C","stemmer": 233865,"s":233865, "color":"#00571F", "parti":"Konservative Folkeparti"},
        {"a": "D","stemmer": 83201, "s":83201,"color":"#004450", "parti":"Nye Borgerlige"},
        {"a": "E","stemmer": 29600, "s":29600,"color":"#004224", "parti":"Klaus Riskær"},
        {"a": "F","stemmer": 272304,"s":272304, "color":"#BF0418", "parti":"Socialistisk Folkeparti"},
        {"a": "I","stemmer": 82270, "s":82270,"color":"#12213f", "parti":"Liberal Alliance"},
        {"a": "K","stemmer": 60944, "s":60944,"color":"#597992", "parti":"Kristendemokraterne"},
        {"a": "O","stemmer": 308513,"s":308513,"color":"#E7D01E", "parti":"Dansk Folkeparti"},
        {"a": "P","stemmer": 63114, "s":63114,"color":"#0198E1", "parti":"Stram Kurs"},
        {"a": "V","stemmer": 826161,"s":826161, "color":"#00539", "parti":"Venstre"},
        {"a": "Ø","stemmer": 245100, "s":245100,"color":"#C21B3E", "parti":"Enhedslisten"},
        {"a": "Å","stemmer": 104278, "s":104278,"color":"#00FF00", "parti":"Alternativet"},
        //{"a": "-","stemmer": 2774, "color":"#a9a9a9", "parti":"Uden for parti"},
        {"a": "?","stemmer": 37801,"s":17801, "color":"#a9a9a9", "parti":"Ugyldige stemmer"}
      ]
    },
    "mark": "bar",
    "encoding": {
      "x": {"field": "a", "type": "ordinal", "title":"Partier", "sort": {"order": "descending", "op": "sum", "field": "s"}, "axis": {"labelAngle":0}},
      "y": {"field": "stemmer", "type": "quantitative", "title":"Stemmer"},
      "tooltip": [{"field": "parti", "type": "ordinal"},{"field": "stemmer", "type": "ordinal"}],
      "color": {
        "field": "color",
        "type": "nominal",
        "scale": null
      }
    },
}

let femVisualisering = {
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
  "width": 400,
  "height": 300,
  "data": {
    "values": [
      {"a": "E","stemmer": 29600, "s":29600,"color":"#004224", "parti":"Klaus Riskær"},
      {"a": "K","stemmer": 60944, "s":60944,"color":"#597992", "parti":"Kristendemokraterne"},
      {"a": "P","stemmer": 63114, "s":63114,"color":"#0198E1", "parti":"Stram Kurs"},
      {"a": "-","stemmer": 2774, "color":"#a9a9a9", "parti":"Uden for parti"},
      {"a": "?","stemmer": 37801,"s":17801, "color":"#a9a9a9", "parti":"Ugyldige stemmer"}
    ]
  },
  "mark": "bar",
  "encoding": {
    "y": {"field": "parti", "type": "ordinal", "title":"", "sort": {"order": "descending", "op": "sum", "field": "stemmer"}, "axis":{"labelFontWeight": "bold", "labelLimit": 0}},
    "x": {"field": "stemmer", "type": "quantitative", "title":"Stemmer"},
    "tooltip": [{"field": "parti", "type": "ordinal"},{"field": "stemmer", "type": "ordinal"}],
    "color": {
      "field": "color",
      "type": "nominal",
      "scale": null
    }
  },
}