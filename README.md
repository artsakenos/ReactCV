# ReactCV

ReactCV was initially developed on CodeSandbox exploiting the [UltraServices::SuperReact](https://github.com/artsakenos/UltraServices/tree/master/SuperReact) libraries.
It allows the creation of a fully customizable CV by defining its structure and content through JSON descriptors.

## **Features**

- **Advanced Routing**: Inherits SuperReact’s routing strategy, enabling dynamic path and component definitions, including dropdown submenus and hard link filters.
- **Localization Support**: A built-in language provider allows automatic translation of CV sections using an extendable dictionary.
- **Internal Referencing**: Content can be cross-referenced between sections using ID-based shortcodes.
- **Dynamic Output**: The CV format can be adjusted dynamically, for example, by highlighting the author in publications, see e.g., [publications](https://artsakenos.github.io/ReactCV/publications).
- **Enhanced Sharing**: Supports bookmarklet generation for sharing specific sections with filtered content, see e.g., [BL01](https://artsakenos.github.io/ReactCV/publications?type=Blog&id=BL01).

# Deploy
You can deploy on github pages. No need to commit or anything,
just execute the command `npm run deploy`.


# ReactCV (🇮🇹)

ReactCV è stato inizialmente sviluppato su CodeSandbox utilizzando le librerie [UltraServices::SuperReact](https://github.com/artsakenos/UltraServices/tree/master/SuperReact). Permette di creare un CV personalizzabile, definendo la struttura e i contenuti attraverso descrittori JSON.

## **Funzionalità**

- **Routing avanzato**: eredita la strategia di routing di SuperReact, consentendo la definizione dinamica di percorsi e componenti, inclusa l’iniezione di sotto-menu a tendina.
- **Localizzazione**: grazie a un provider di lingua integrato, le sezioni del CV possono essere tradotte automaticamente utilizzando un dizionario estendibile.
- **Referenziazione interna**: è possibile collegare contenuti tra diverse sezioni utilizzando shortcodes basati su ID.
- **Output dinamico**: il formato del CV può essere personalizzato dinamicamente, ad esempio evidenziando l’autore nelle pubblicazioni.
- **Condivisione avanzata**: supporta la generazione di bookmarklet per condividere specifiche sezioni con contenuti filtrati.


# Deploy
Si puó fare il deploy sulle github pages, non é necessario committare su main o altro,
basta eseguire il comando `npm run deploy`.

# Structures

These are the JSON structures.
Empty or null fields can be omitted.

Note that translatable fields can be a string

    "name": "Profile Section Name",

ora a dictionary

    "name": {
      "en": "Name in English",
      "it": "Nome in Italiano",

## Generic Profile Section

L'idea è quella di creare un tipo sufficientemente generico
da prestarsi per più casi possibili, e in vista di una futura tipizzazione.

```json
[
    {
        "name": "Profile Section Name"
        "description": "Profile Section Description",
        "items": [
            {
                "id": "ID0101",
                "title": "Item Title",
                "date_begin": "2010-03-05",
                "date_end": null,
                "description": "Item Description",
                "details": [
                    "Item in a list of details"
                ],
                "links": [
                    {
                        "name": "URL Name",
                        "url": "http://example.com"
                    }
                ]
            }
        ],
    }
]
```


## Work Activity

WorkActivity è ad esempio già molto simile a un Generic Profile Section.

```json work
{
    "id": "WA0709",
    "name": {
      "en": "EN NAME",
      "it": "IT NAME",
      "zh": "ZH NAME",
       },
    "date_begin": "2007-09-25",
    "date_end": "2008-03-24",
    "description": "DESC",
    "activities": [
      "Sviluppo Algoritmi",
      "Categorizzazione Automatica"
    ],

```


## Publication

```json publication

```

