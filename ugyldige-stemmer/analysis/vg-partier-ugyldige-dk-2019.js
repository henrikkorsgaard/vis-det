let visDK = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    "description": "Barchart with election results",
    "data": {
      "values": [
        {"a": "A","b": 914882}, {"a": "B","b": 304714}, {"a": "C","b": 233865},
        {"a": "D","b": 83201}, {"a": "E","b": 29600}, {"a": "F","b": 272304},
        {"a": "I","b": 82270}, {"a": "K","b": 60944}, {"a": "O","b": 308513},
        {"a": "P","b": 63114}, {"a": "V","b": 826161}, {"a": "Ø","b": 245100},
        {"a": "Å","b": 104278}, {"a": "X","b": 2774}, {"a": "?","b": 37801}
      ]
    },
    "mark": "bar",
    "encoding": {
      "x": {"field": "a", "type": "ordinal"},
      "y": {"field": "b", "type": "quantitative"}
    }
}