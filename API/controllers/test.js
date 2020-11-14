class Collection {

    constructor() {
        this.collection = [];
        this.index = 0;
    }

    log() {
        return console.log(this.collection);
    }

    push(value) {
        return this.collection.push(value);
    }

    pushAll(...values) {
        return this.collection.push(...values);
    }

    pop() {
        return this.collection.pop();
    }

    shift() {
        return this.collection.shift();
    }

    unshift(value) {
        return this.collection.unshift(value);
    }

    unshiftAll(...values) {
        return this.collection.unshift(...values);
    }

    remove(index) {
        return this.collection.splice(index, 1);
    }

    add(index, value) {
        return this.collection.splice(index, 0, value);
    }

    replace(index, value) {
        return this.collection.splice(index, 1, value);
    }

    clear() {
        this.collection.length = 0;
    }

    isEmpty() {
        return this.collection.length === 0;
    }

    viewFirst() {
        return this.collection[0];
    }

    viewLast() {
        return this.collection[this.collection.length - 1];
    }

    current(){
        if((this.index <= this.collection.length - 1) && (this.index >= 0)){
            return this.collection[this.index];
        }
        else{
            return `Object index exceeds collection range.`;
        }
    }

    next() {
        this.index++;
        this.index > this.collection.length - 1 ? this.index = 0 : this.index;
        return this.collection[this.index];
    }

    previous(){
        this.index--;
        this.index < 0 ? (this.index = this.collection.length-1) : this.index;
        return this.collection[this.index];
    }
}

const sfCollection = new Collection();

const cardsToShow = [
    {
        "cardId": "63e735b1-7643-48db-9731-aea0212d0e2b",
        "name": "Abzan Ascendancy",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/6/3/63e735b1-7643-48db-9731-aea0212d0e2b.jpg?1591321110",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/3/63e735b1-7643-48db-9731-aea0212d0e2b.jpg?1591321110",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/6/3/63e735b1-7643-48db-9731-aea0212d0e2b.jpg?1591321110",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/6/3/63e735b1-7643-48db-9731-aea0212d0e2b.png?1591321110",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/3/63e735b1-7643-48db-9731-aea0212d0e2b.jpg?1591321110",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/3/63e735b1-7643-48db-9731-aea0212d0e2b.jpg?1591321110"
        },
        "prices": {
            "usd": "0.20",
            "usd_foil": null,
            "eur": "0.14",
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "8a3bd3e8-a408-4d64-9cb5-d5053fae1e64",
        "name": "Abzan Charm",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/8/a/8a3bd3e8-a408-4d64-9cb5-d5053fae1e64.jpg?1591321121",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/a/8a3bd3e8-a408-4d64-9cb5-d5053fae1e64.jpg?1591321121",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/8/a/8a3bd3e8-a408-4d64-9cb5-d5053fae1e64.jpg?1591321121",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/8/a/8a3bd3e8-a408-4d64-9cb5-d5053fae1e64.png?1591321121",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/a/8a3bd3e8-a408-4d64-9cb5-d5053fae1e64.jpg?1591321121",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/a/8a3bd3e8-a408-4d64-9cb5-d5053fae1e64.jpg?1591321121"
        },
        "prices": {
            "usd": "0.12",
            "usd_foil": null,
            "eur": "0.13",
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "1b7f7158-4a31-4a1c-bf3b-574c0b09276a",
        "name": "Abzan Guide",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/1/b/1b7f7158-4a31-4a1c-bf3b-574c0b09276a.jpg?1562783275",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/b/1b7f7158-4a31-4a1c-bf3b-574c0b09276a.jpg?1562783275",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/1/b/1b7f7158-4a31-4a1c-bf3b-574c0b09276a.jpg?1562783275",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/1/b/1b7f7158-4a31-4a1c-bf3b-574c0b09276a.png?1562783275",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/b/1b7f7158-4a31-4a1c-bf3b-574c0b09276a.jpg?1562783275",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/b/1b7f7158-4a31-4a1c-bf3b-574c0b09276a.jpg?1562783275"
        },
        "prices": {
            "usd": "0.06",
            "usd_foil": null,
            "eur": "0.02",
            "eur_foil": null,
            "tix": "0.03"
        }
    },
    {
        "cardId": "c8b432a7-53da-4480-b571-e6feb1364a3a",
        "name": "Anafenza, the Foremost",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/c/8/c8b432a7-53da-4480-b571-e6feb1364a3a.jpg?1562793427",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/8/c8b432a7-53da-4480-b571-e6feb1364a3a.jpg?1562793427",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/c/8/c8b432a7-53da-4480-b571-e6feb1364a3a.jpg?1562793427",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/c/8/c8b432a7-53da-4480-b571-e6feb1364a3a.png?1562793427",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/8/c8b432a7-53da-4480-b571-e6feb1364a3a.jpg?1562793427",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/8/c8b432a7-53da-4480-b571-e6feb1364a3a.jpg?1562793427"
        },
        "prices": {
            "usd": "1.88",
            "usd_foil": "7.74",
            "eur": "1.25",
            "eur_foil": "4.12",
            "tix": "0.10"
        }
    },
    {
        "cardId": "a5c69876-809d-4af3-9fd6-3bac41541dad",
        "name": "Armament Corps",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/a/5/a5c69876-809d-4af3-9fd6-3bac41541dad.jpg?1562791520",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/5/a5c69876-809d-4af3-9fd6-3bac41541dad.jpg?1562791520",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/a/5/a5c69876-809d-4af3-9fd6-3bac41541dad.jpg?1562791520",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/a/5/a5c69876-809d-4af3-9fd6-3bac41541dad.png?1562791520",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/5/a5c69876-809d-4af3-9fd6-3bac41541dad.jpg?1562791520",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/5/a5c69876-809d-4af3-9fd6-3bac41541dad.jpg?1562791520"
        },
        "prices": {
            "usd": "0.09",
            "usd_foil": "0.26",
            "eur": "0.04",
            "eur_foil": "0.50",
            "tix": "0.04"
        }
    },
    {
        "cardId": "afa3b31a-b52a-43c0-9084-e0535e1bd871",
        "name": "Colfenor, the Last Yew",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/a/f/afa3b31a-b52a-43c0-9084-e0535e1bd871.jpg?1604002391",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/f/afa3b31a-b52a-43c0-9084-e0535e1bd871.jpg?1604002391",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/a/f/afa3b31a-b52a-43c0-9084-e0535e1bd871.jpg?1604002391",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/a/f/afa3b31a-b52a-43c0-9084-e0535e1bd871.png?1604002391",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/f/afa3b31a-b52a-43c0-9084-e0535e1bd871.jpg?1604002391",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/f/afa3b31a-b52a-43c0-9084-e0535e1bd871.jpg?1604002391"
        },
        "prices": {
            "usd": "0.85",
            "usd_foil": "4.99",
            "eur": "0.43",
            "eur_foil": "0.84",
            "tix": null
        }
    },
    {
        "cardId": "2edeab08-86eb-4fa8-ba24-23dacb32e0fd",
        "name": "Crime // Punishment",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/2/e/2edeab08-86eb-4fa8-ba24-23dacb32e0fd.jpg?1593273920",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/e/2edeab08-86eb-4fa8-ba24-23dacb32e0fd.jpg?1593273920",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/2/e/2edeab08-86eb-4fa8-ba24-23dacb32e0fd.jpg?1593273920",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/2/e/2edeab08-86eb-4fa8-ba24-23dacb32e0fd.png?1593273920",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/e/2edeab08-86eb-4fa8-ba24-23dacb32e0fd.jpg?1593273920",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/e/2edeab08-86eb-4fa8-ba24-23dacb32e0fd.jpg?1593273920"
        },
        "prices": {
            "usd": "0.73",
            "usd_foil": "5.12",
            "eur": "0.35",
            "eur_foil": "1.00",
            "tix": "0.01"
        }
    },
    {
        "cardId": "112e2cca-bae7-4296-9514-e6058f4b38a5",
        "name": "Death's Oasis",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/1/1/112e2cca-bae7-4296-9514-e6058f4b38a5.jpg?1591234683",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/1/112e2cca-bae7-4296-9514-e6058f4b38a5.jpg?1591234683",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/1/1/112e2cca-bae7-4296-9514-e6058f4b38a5.jpg?1591234683",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/1/1/112e2cca-bae7-4296-9514-e6058f4b38a5.png?1591234683",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/1/112e2cca-bae7-4296-9514-e6058f4b38a5.jpg?1591234683",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/1/112e2cca-bae7-4296-9514-e6058f4b38a5.jpg?1591234683"
        },
        "prices": {
            "usd": "0.19",
            "usd_foil": "0.16",
            "eur": "0.20",
            "eur_foil": "0.32",
            "tix": "0.01"
        }
    },
    {
        "cardId": "de550e4b-fa50-4e37-a2e2-2dac85b1eb94",
        "name": "Doran, the Siege Tower",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/d/e/de550e4b-fa50-4e37-a2e2-2dac85b1eb94.jpg?1599766331",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/e/de550e4b-fa50-4e37-a2e2-2dac85b1eb94.jpg?1599766331",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/d/e/de550e4b-fa50-4e37-a2e2-2dac85b1eb94.jpg?1599766331",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/d/e/de550e4b-fa50-4e37-a2e2-2dac85b1eb94.png?1599766331",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/e/de550e4b-fa50-4e37-a2e2-2dac85b1eb94.jpg?1599766331",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/e/de550e4b-fa50-4e37-a2e2-2dac85b1eb94.jpg?1599766331"
        },
        "prices": {
            "usd": "8.48",
            "usd_foil": null,
            "eur": null,
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "9623959c-c20d-409b-b172-fe00e68e8c55",
        "name": "Duneblast",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/9/6/9623959c-c20d-409b-b172-fe00e68e8c55.jpg?1591321248",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/6/9623959c-c20d-409b-b172-fe00e68e8c55.jpg?1591321248",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/9/6/9623959c-c20d-409b-b172-fe00e68e8c55.jpg?1591321248",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/9/6/9623959c-c20d-409b-b172-fe00e68e8c55.png?1591321248",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/6/9623959c-c20d-409b-b172-fe00e68e8c55.jpg?1591321248",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/6/9623959c-c20d-409b-b172-fe00e68e8c55.jpg?1591321248"
        },
        "prices": {
            "usd": "0.19",
            "usd_foil": null,
            "eur": "0.10",
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "3a9fb2db-228f-4d48-acdf-6330baf356c7",
        "name": "Eerie Ultimatum",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/3/a/3a9fb2db-228f-4d48-acdf-6330baf356c7.jpg?1591227996",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/a/3a9fb2db-228f-4d48-acdf-6330baf356c7.jpg?1591227996",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/3/a/3a9fb2db-228f-4d48-acdf-6330baf356c7.jpg?1591227996",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/3/a/3a9fb2db-228f-4d48-acdf-6330baf356c7.png?1591227996",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/a/3a9fb2db-228f-4d48-acdf-6330baf356c7.jpg?1591227996",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/a/3a9fb2db-228f-4d48-acdf-6330baf356c7.jpg?1591227996"
        },
        "prices": {
            "usd": "1.87",
            "usd_foil": "2.56",
            "eur": "1.03",
            "eur_foil": "2.48",
            "tix": "0.06"
        }
    },
    {
        "cardId": "11590bf6-184e-4134-b1f6-7b8de5a23564",
        "name": "Ghave, Guru of Spores",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/1/1/11590bf6-184e-4134-b1f6-7b8de5a23564.jpg?1562272418",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/1/11590bf6-184e-4134-b1f6-7b8de5a23564.jpg?1562272418",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/1/1/11590bf6-184e-4134-b1f6-7b8de5a23564.jpg?1562272418",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/1/1/11590bf6-184e-4134-b1f6-7b8de5a23564.png?1562272418",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/1/11590bf6-184e-4134-b1f6-7b8de5a23564.jpg?1562272418",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/1/11590bf6-184e-4134-b1f6-7b8de5a23564.jpg?1562272418"
        },
        "prices": {
            "usd": "4.22",
            "usd_foil": null,
            "eur": "0.99",
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "75a8df73-0141-4c07-87d8-b1f34a4b374b",
        "name": "Ivorytusk Fortress",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/7/5/75a8df73-0141-4c07-87d8-b1f34a4b374b.jpg?1562788730",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/5/75a8df73-0141-4c07-87d8-b1f34a4b374b.jpg?1562788730",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/7/5/75a8df73-0141-4c07-87d8-b1f34a4b374b.jpg?1562788730",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/7/5/75a8df73-0141-4c07-87d8-b1f34a4b374b.png?1562788730",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/5/75a8df73-0141-4c07-87d8-b1f34a4b374b.jpg?1562788730",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/5/75a8df73-0141-4c07-87d8-b1f34a4b374b.jpg?1562788730"
        },
        "prices": {
            "usd": "0.19",
            "usd_foil": "0.50",
            "eur": "0.06",
            "eur_foil": "0.25",
            "tix": "0.01"
        }
    },
    {
        "cardId": "c7eb0144-34f8-43e1-95fe-f2ca62d88e5d",
        "name": "Karador, Ghost Chieftain",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/c/7/c7eb0144-34f8-43e1-95fe-f2ca62d88e5d.jpg?1592714128",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/7/c7eb0144-34f8-43e1-95fe-f2ca62d88e5d.jpg?1592714128",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/c/7/c7eb0144-34f8-43e1-95fe-f2ca62d88e5d.jpg?1592714128",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/c/7/c7eb0144-34f8-43e1-95fe-f2ca62d88e5d.png?1592714128",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/7/c7eb0144-34f8-43e1-95fe-f2ca62d88e5d.jpg?1592714128",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/7/c7eb0144-34f8-43e1-95fe-f2ca62d88e5d.jpg?1592714128"
        },
        "prices": {
            "usd": "17.98",
            "usd_foil": null,
            "eur": "10.95",
            "eur_foil": null,
            "tix": "0.14"
        }
    },
    {
        "cardId": "ebc57f73-a517-463e-8d55-56aa996d091e",
        "name": "Kathril, Aspect Warper",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/e/b/ebc57f73-a517-463e-8d55-56aa996d091e.jpg?1591946565",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/b/ebc57f73-a517-463e-8d55-56aa996d091e.jpg?1591946565",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/e/b/ebc57f73-a517-463e-8d55-56aa996d091e.jpg?1591946565",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/e/b/ebc57f73-a517-463e-8d55-56aa996d091e.png?1591946565",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/b/ebc57f73-a517-463e-8d55-56aa996d091e.jpg?1591946565",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/b/ebc57f73-a517-463e-8d55-56aa996d091e.jpg?1591946565"
        },
        "prices": {
            "usd": "0.70",
            "usd_foil": "0.58",
            "eur": "0.87",
            "eur_foil": "0.53",
            "tix": "2.82"
        }
    },
    {
        "cardId": "fe28de73-76f3-4a9e-a020-dbe5921b9be5",
        "name": "Kethis, the Hidden Hand",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/f/e/fe28de73-76f3-4a9e-a020-dbe5921b9be5.jpg?1596451378",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/e/fe28de73-76f3-4a9e-a020-dbe5921b9be5.jpg?1596451378",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/f/e/fe28de73-76f3-4a9e-a020-dbe5921b9be5.jpg?1596451378",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/f/e/fe28de73-76f3-4a9e-a020-dbe5921b9be5.png?1596451378",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/e/fe28de73-76f3-4a9e-a020-dbe5921b9be5.jpg?1596451378",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/e/fe28de73-76f3-4a9e-a020-dbe5921b9be5.jpg?1596451378"
        },
        "prices": {
            "usd": "1.40",
            "usd_foil": "5.42",
            "eur": "1.10",
            "eur_foil": "4.49",
            "tix": "0.68"
        }
    },
    {
        "cardId": "8ca6eb5a-8bc9-4091-bcfb-b207f0afd188",
        "name": "Nethroi, Apex of Death",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/8/c/8ca6eb5a-8bc9-4091-bcfb-b207f0afd188.jpg?1591228139",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/c/8ca6eb5a-8bc9-4091-bcfb-b207f0afd188.jpg?1591228139",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/8/c/8ca6eb5a-8bc9-4091-bcfb-b207f0afd188.jpg?1591228139",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/8/c/8ca6eb5a-8bc9-4091-bcfb-b207f0afd188.png?1591228139",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/c/8ca6eb5a-8bc9-4091-bcfb-b207f0afd188.jpg?1591228139",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/c/8ca6eb5a-8bc9-4091-bcfb-b207f0afd188.jpg?1591228139"
        },
        "prices": {
            "usd": "2.71",
            "usd_foil": "3.49",
            "eur": "3.14",
            "eur_foil": "2.89",
            "tix": "0.59"
        }
    },
    {
        "cardId": "c1c48c58-3532-4022-9eec-1a870385cbf3",
        "name": "Overgrown Estate",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.jpg?1562940749",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.jpg?1562940749",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.jpg?1562940749",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.png?1562940749",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.jpg?1562940749",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.jpg?1562940749"
        },
        "prices": {
            "usd": "0.27",
            "usd_foil": "1.63",
            "eur": "0.15",
            "eur_foil": "2.49",
            "tix": "0.02"
        }
    },
    {
        "cardId": "22081f95-dc8e-41ed-b609-b6a22ee5428b",
        "name": "Ready // Willing",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/2/2/22081f95-dc8e-41ed-b609-b6a22ee5428b.jpg?1562901288",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/2/22081f95-dc8e-41ed-b609-b6a22ee5428b.jpg?1562901288",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/2/2/22081f95-dc8e-41ed-b609-b6a22ee5428b.jpg?1562901288",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/2/2/22081f95-dc8e-41ed-b609-b6a22ee5428b.png?1562901288",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/2/22081f95-dc8e-41ed-b609-b6a22ee5428b.jpg?1562901288",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/2/22081f95-dc8e-41ed-b609-b6a22ee5428b.jpg?1562901288"
        },
        "prices": {
            "usd": "0.30",
            "usd_foil": "0.75",
            "eur": "0.20",
            "eur_foil": "1.99",
            "tix": "0.01"
        }
    },
    {
        "cardId": "9011126a-20bd-4c86-a63b-1691f79ac247",
        "name": "Siege Rhino",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/9/0/9011126a-20bd-4c86-a63b-1691f79ac247.jpg?1562790317",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/0/9011126a-20bd-4c86-a63b-1691f79ac247.jpg?1562790317",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/9/0/9011126a-20bd-4c86-a63b-1691f79ac247.jpg?1562790317",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/9/0/9011126a-20bd-4c86-a63b-1691f79ac247.png?1562790317",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/0/9011126a-20bd-4c86-a63b-1691f79ac247.jpg?1562790317",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/0/9011126a-20bd-4c86-a63b-1691f79ac247.jpg?1562790317"
        },
        "prices": {
            "usd": "0.58",
            "usd_foil": "2.03",
            "eur": "0.25",
            "eur_foil": "2.06",
            "tix": "0.02"
        }
    },
    {
        "cardId": "05b837a2-5773-4340-87f9-b4d6a43deb27",
        "name": "Tayam, Luminous Enigma",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/0/5/05b837a2-5773-4340-87f9-b4d6a43deb27.jpg?1591234301",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/5/05b837a2-5773-4340-87f9-b4d6a43deb27.jpg?1591234301",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/0/5/05b837a2-5773-4340-87f9-b4d6a43deb27.jpg?1591234301",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/0/5/05b837a2-5773-4340-87f9-b4d6a43deb27.png?1591234301",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/5/05b837a2-5773-4340-87f9-b4d6a43deb27.jpg?1591234301",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/5/05b837a2-5773-4340-87f9-b4d6a43deb27.jpg?1591234301"
        },
        "prices": {
            "usd": "0.88",
            "usd_foil": "0.48",
            "eur": "0.61",
            "eur_foil": "0.35",
            "tix": "1.84"
        }
    },
    {
        "cardId": "b4b4cb9d-eb4b-47c6-969c-5868490207fb",
        "name": "Teneb, the Harvester",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/b/4/b4b4cb9d-eb4b-47c6-969c-5868490207fb.jpg?1562621109",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/4/b4b4cb9d-eb4b-47c6-969c-5868490207fb.jpg?1562621109",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/b/4/b4b4cb9d-eb4b-47c6-969c-5868490207fb.jpg?1562621109",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/b/4/b4b4cb9d-eb4b-47c6-969c-5868490207fb.png?1562621109",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/4/b4b4cb9d-eb4b-47c6-969c-5868490207fb.jpg?1562621109",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/4/b4b4cb9d-eb4b-47c6-969c-5868490207fb.jpg?1562621109"
        },
        "prices": {
            "usd": "1.32",
            "usd_foil": null,
            "eur": "0.49",
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "eabffca8-7810-4e8e-b3fe-7f8a14dcbf14",
        "name": "Dune-Brood Nephilim",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/e/a/eabffca8-7810-4e8e-b3fe-7f8a14dcbf14.jpg?1599766361",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/a/eabffca8-7810-4e8e-b3fe-7f8a14dcbf14.jpg?1599766361",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/e/a/eabffca8-7810-4e8e-b3fe-7f8a14dcbf14.jpg?1599766361",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/e/a/eabffca8-7810-4e8e-b3fe-7f8a14dcbf14.png?1599766361",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/a/eabffca8-7810-4e8e-b3fe-7f8a14dcbf14.jpg?1599766361",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/a/eabffca8-7810-4e8e-b3fe-7f8a14dcbf14.jpg?1599766361"
        },
        "prices": {
            "usd": "1.32",
            "usd_foil": null,
            "eur": null,
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "5b483db6-b614-4af1-820a-42a4ee0c8707",
        "name": "Saskia the Unyielding",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/5/b/5b483db6-b614-4af1-820a-42a4ee0c8707.jpg?1562401580",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/b/5b483db6-b614-4af1-820a-42a4ee0c8707.jpg?1562401580",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/5/b/5b483db6-b614-4af1-820a-42a4ee0c8707.jpg?1562401580",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/5/b/5b483db6-b614-4af1-820a-42a4ee0c8707.png?1562401580",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/b/5b483db6-b614-4af1-820a-42a4ee0c8707.jpg?1562401580",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/b/5b483db6-b614-4af1-820a-42a4ee0c8707.jpg?1562401580"
        },
        "prices": {
            "usd": null,
            "usd_foil": "4.92",
            "eur": null,
            "eur_foil": "1.65",
            "tix": null
        }
    },
    {
        "cardId": "d0d33d52-3d28-4635-b985-51e126289259",
        "name": "Atraxa, Praetors' Voice",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.jpg?1599707796",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.jpg?1599707796",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.jpg?1599707796",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.png?1599707796",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.jpg?1599707796",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.jpg?1599707796"
        },
        "prices": {
            "usd": "12.44",
            "usd_foil": "17.76",
            "eur": "9.45",
            "eur_foil": "13.46",
            "tix": "0.77"
        }
    },
    {
        "cardId": "185d56ab-b7f2-4eb2-9540-db8f2dc9b436",
        "name": "Witch-Maw Nephilim",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/1/8/185d56ab-b7f2-4eb2-9540-db8f2dc9b436.jpg?1593272845",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/8/185d56ab-b7f2-4eb2-9540-db8f2dc9b436.jpg?1593272845",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/1/8/185d56ab-b7f2-4eb2-9540-db8f2dc9b436.jpg?1593272845",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/1/8/185d56ab-b7f2-4eb2-9540-db8f2dc9b436.png?1593272845",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/8/185d56ab-b7f2-4eb2-9540-db8f2dc9b436.jpg?1593272845",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/8/185d56ab-b7f2-4eb2-9540-db8f2dc9b436.jpg?1593272845"
        },
        "prices": {
            "usd": "0.84",
            "usd_foil": "7.19",
            "eur": "0.09",
            "eur_foil": "3.94",
            "tix": "0.02"
        }
    },
    {
        "cardId": "4a3e6eb5-6d0f-4f82-86f9-bbce8d27afbb",
        "name": "Atogatog",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/4/a/4a3e6eb5-6d0f-4f82-86f9-bbce8d27afbb.jpg?1562908561",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/a/4a3e6eb5-6d0f-4f82-86f9-bbce8d27afbb.jpg?1562908561",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4a3e6eb5-6d0f-4f82-86f9-bbce8d27afbb.jpg?1562908561",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/4/a/4a3e6eb5-6d0f-4f82-86f9-bbce8d27afbb.png?1562908561",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/a/4a3e6eb5-6d0f-4f82-86f9-bbce8d27afbb.jpg?1562908561",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/a/4a3e6eb5-6d0f-4f82-86f9-bbce8d27afbb.jpg?1562908561"
        },
        "prices": {
            "usd": "0.96",
            "usd_foil": "14.01",
            "eur": "0.50",
            "eur_foil": "14.46",
            "tix": "0.02"
        }
    },
    {
        "cardId": "863f701f-fba2-48db-95ef-0926986cdac9",
        "name": "Child of Alara",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/8/6/863f701f-fba2-48db-95ef-0926986cdac9.jpg?1562802245",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/6/863f701f-fba2-48db-95ef-0926986cdac9.jpg?1562802245",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/8/6/863f701f-fba2-48db-95ef-0926986cdac9.jpg?1562802245",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/8/6/863f701f-fba2-48db-95ef-0926986cdac9.png?1562802245",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/6/863f701f-fba2-48db-95ef-0926986cdac9.jpg?1562802245",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/6/863f701f-fba2-48db-95ef-0926986cdac9.jpg?1562802245"
        },
        "prices": {
            "usd": "7.54",
            "usd_foil": "18.91",
            "eur": "3.75",
            "eur_foil": "29.99",
            "tix": "0.01"
        }
    },
    {
        "cardId": "4376c2bc-ab3b-45be-8b09-01af6a8e986d",
        "name": "Chromanticore",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/4/3/4376c2bc-ab3b-45be-8b09-01af6a8e986d.jpg?1599766258",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/3/4376c2bc-ab3b-45be-8b09-01af6a8e986d.jpg?1599766258",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/4/3/4376c2bc-ab3b-45be-8b09-01af6a8e986d.jpg?1599766258",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/4/3/4376c2bc-ab3b-45be-8b09-01af6a8e986d.png?1599766258",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/3/4376c2bc-ab3b-45be-8b09-01af6a8e986d.jpg?1599766258",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/3/4376c2bc-ab3b-45be-8b09-01af6a8e986d.jpg?1599766258"
        },
        "prices": {
            "usd": "3.75",
            "usd_foil": null,
            "eur": null,
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "446824f7-dc42-42da-8bd5-6c37f3358d65",
        "name": "Coalition Victory",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/4/4/446824f7-dc42-42da-8bd5-6c37f3358d65.jpg?1562775464",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/4/446824f7-dc42-42da-8bd5-6c37f3358d65.jpg?1562775464",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/4/4/446824f7-dc42-42da-8bd5-6c37f3358d65.jpg?1562775464",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/4/4/446824f7-dc42-42da-8bd5-6c37f3358d65.png?1562775464",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/4/446824f7-dc42-42da-8bd5-6c37f3358d65.jpg?1562775464",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/4/446824f7-dc42-42da-8bd5-6c37f3358d65.jpg?1562775464"
        },
        "prices": {
            "usd": "0.65",
            "usd_foil": "4.77",
            "eur": "0.14",
            "eur_foil": "3.99",
            "tix": "0.02"
        }
    },
    {
        "cardId": "83777ac9-93d9-4097-96ca-a8a6a79b84e2",
        "name": "Conflux",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/8/3/83777ac9-93d9-4097-96ca-a8a6a79b84e2.jpg?1562437568",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/3/83777ac9-93d9-4097-96ca-a8a6a79b84e2.jpg?1562437568",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/8/3/83777ac9-93d9-4097-96ca-a8a6a79b84e2.jpg?1562437568",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/8/3/83777ac9-93d9-4097-96ca-a8a6a79b84e2.png?1562437568",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/3/83777ac9-93d9-4097-96ca-a8a6a79b84e2.jpg?1562437568",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/3/83777ac9-93d9-4097-96ca-a8a6a79b84e2.jpg?1562437568"
        },
        "prices": {
            "usd": "3.73",
            "usd_foil": "2.34",
            "eur": "0.10",
            "eur_foil": "0.95",
            "tix": "0.02"
        }
    },
    {
        "cardId": "7d9e0a23-d2a8-40a6-9076-ed6fb539141b",
        "name": "Cromat",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/7/d/7d9e0a23-d2a8-40a6-9076-ed6fb539141b.jpg?1562924606",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/d/7d9e0a23-d2a8-40a6-9076-ed6fb539141b.jpg?1562924606",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/7/d/7d9e0a23-d2a8-40a6-9076-ed6fb539141b.jpg?1562924606",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/7/d/7d9e0a23-d2a8-40a6-9076-ed6fb539141b.png?1562924606",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/d/7d9e0a23-d2a8-40a6-9076-ed6fb539141b.jpg?1562924606",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/d/7d9e0a23-d2a8-40a6-9076-ed6fb539141b.jpg?1562924606"
        },
        "prices": {
            "usd": "2.15",
            "usd_foil": "28.49",
            "eur": "0.63",
            "eur_foil": "14.99",
            "tix": "0.13"
        }
    },
    {
        "cardId": "5538bc51-e320-437e-867d-0d01621e31fb",
        "name": "Fusion Elemental",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/5/5/5538bc51-e320-437e-867d-0d01621e31fb.jpg?1601080428",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/5/5538bc51-e320-437e-867d-0d01621e31fb.jpg?1601080428",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/5/5/5538bc51-e320-437e-867d-0d01621e31fb.jpg?1601080428",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/5/5/5538bc51-e320-437e-867d-0d01621e31fb.png?1601080428",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/5/5538bc51-e320-437e-867d-0d01621e31fb.jpg?1601080428",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/5/5538bc51-e320-437e-867d-0d01621e31fb.jpg?1601080428"
        },
        "prices": {
            "usd": "0.26",
            "usd_foil": null,
            "eur": "0.23",
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "e9eb7b9b-5189-4d20-8dec-e9d3df63e26e",
        "name": "Genju of the Realm",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/e/9/e9eb7b9b-5189-4d20-8dec-e9d3df63e26e.jpg?1562880496",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/9/e9eb7b9b-5189-4d20-8dec-e9d3df63e26e.jpg?1562880496",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/e/9/e9eb7b9b-5189-4d20-8dec-e9d3df63e26e.jpg?1562880496",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/e/9/e9eb7b9b-5189-4d20-8dec-e9d3df63e26e.png?1562880496",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/9/e9eb7b9b-5189-4d20-8dec-e9d3df63e26e.jpg?1562880496",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/9/e9eb7b9b-5189-4d20-8dec-e9d3df63e26e.jpg?1562880496"
        },
        "prices": {
            "usd": "4.17",
            "usd_foil": "13.83",
            "eur": "0.25",
            "eur_foil": "59.99",
            "tix": "0.01"
        }
    },
    {
        "cardId": "a5137c28-632f-40f4-bf9d-877f5f070987",
        "name": "Horde of Notions",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/a/5/a5137c28-632f-40f4-bf9d-877f5f070987.jpg?1562265721",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/5/a5137c28-632f-40f4-bf9d-877f5f070987.jpg?1562265721",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/a/5/a5137c28-632f-40f4-bf9d-877f5f070987.jpg?1562265721",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/a/5/a5137c28-632f-40f4-bf9d-877f5f070987.png?1562265721",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/5/a5137c28-632f-40f4-bf9d-877f5f070987.jpg?1562265721",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/5/a5137c28-632f-40f4-bf9d-877f5f070987.jpg?1562265721"
        },
        "prices": {
            "usd": "0.55",
            "usd_foil": "6.42",
            "eur": "0.19",
            "eur_foil": "5.90",
            "tix": "0.02"
        }
    },
    {
        "cardId": "de53d083-251e-42a4-9e2e-c2978c80615b",
        "name": "Karona, False God",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/d/e/de53d083-251e-42a4-9e2e-c2978c80615b.jpg?1562535715",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/e/de53d083-251e-42a4-9e2e-c2978c80615b.jpg?1562535715",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/d/e/de53d083-251e-42a4-9e2e-c2978c80615b.jpg?1562535715",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/d/e/de53d083-251e-42a4-9e2e-c2978c80615b.png?1562535715",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/e/de53d083-251e-42a4-9e2e-c2978c80615b.jpg?1562535715",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/e/de53d083-251e-42a4-9e2e-c2978c80615b.jpg?1562535715"
        },
        "prices": {
            "usd": "2.87",
            "usd_foil": "65.53",
            "eur": "0.65",
            "eur_foil": "20.00",
            "tix": "0.03"
        }
    },
    {
        "cardId": "d7f3c92b-5a31-450e-8cff-9289d266050a",
        "name": "Last Stand",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/d/7/d7f3c92b-5a31-450e-8cff-9289d266050a.jpg?1562935399",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/7/d7f3c92b-5a31-450e-8cff-9289d266050a.jpg?1562935399",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/d/7/d7f3c92b-5a31-450e-8cff-9289d266050a.jpg?1562935399",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/d/7/d7f3c92b-5a31-450e-8cff-9289d266050a.png?1562935399",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/7/d7f3c92b-5a31-450e-8cff-9289d266050a.jpg?1562935399",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/7/d7f3c92b-5a31-450e-8cff-9289d266050a.jpg?1562935399"
        },
        "prices": {
            "usd": "0.21",
            "usd_foil": null,
            "eur": "0.15",
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "ed111116-c2cc-4c97-a84c-f9576ea2ada7",
        "name": "Maelstrom Archangel",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/e/d/ed111116-c2cc-4c97-a84c-f9576ea2ada7.jpg?1601083081",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/d/ed111116-c2cc-4c97-a84c-f9576ea2ada7.jpg?1601083081",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/e/d/ed111116-c2cc-4c97-a84c-f9576ea2ada7.jpg?1601083081",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/e/d/ed111116-c2cc-4c97-a84c-f9576ea2ada7.png?1601083081",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/d/ed111116-c2cc-4c97-a84c-f9576ea2ada7.jpg?1601083081",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/d/ed111116-c2cc-4c97-a84c-f9576ea2ada7.jpg?1601083081"
        },
        "prices": {
            "usd": "1.75",
            "usd_foil": null,
            "eur": "0.87",
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "eed832fa-9902-4c5c-bf9c-e972c5c31fb8",
        "name": "Maelstrom Nexus",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/e/e/eed832fa-9902-4c5c-bf9c-e972c5c31fb8.jpg?1599766512",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/e/eed832fa-9902-4c5c-bf9c-e972c5c31fb8.jpg?1599766512",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/e/e/eed832fa-9902-4c5c-bf9c-e972c5c31fb8.jpg?1599766512",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/e/e/eed832fa-9902-4c5c-bf9c-e972c5c31fb8.png?1599766512",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/e/eed832fa-9902-4c5c-bf9c-e972c5c31fb8.jpg?1599766512",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/e/eed832fa-9902-4c5c-bf9c-e972c5c31fb8.jpg?1599766512"
        },
        "prices": {
            "usd": null,
            "usd_foil": null,
            "eur": null,
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "56a2609d-b535-400b-81d9-72989a33c70f",
        "name": "Niv-Mizzet Reborn",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/5/6/56a2609d-b535-400b-81d9-72989a33c70f.jpg?1582037402",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/6/56a2609d-b535-400b-81d9-72989a33c70f.jpg?1582037402",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/5/6/56a2609d-b535-400b-81d9-72989a33c70f.jpg?1582037402",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/5/6/56a2609d-b535-400b-81d9-72989a33c70f.png?1582037402",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/6/56a2609d-b535-400b-81d9-72989a33c70f.jpg?1582037402",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/6/56a2609d-b535-400b-81d9-72989a33c70f.jpg?1582037402"
        },
        "prices": {
            "usd": "2.55",
            "usd_foil": "16.75",
            "eur": "2.44",
            "eur_foil": "17.00",
            "tix": "2.97"
        }
    },
    {
        "cardId": "8d8a5329-2512-407b-aa35-e83dd56dc26a",
        "name": "O-Kagachi, Vengeful Kami",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/8/d/8d8a5329-2512-407b-aa35-e83dd56dc26a.jpg?1562616123",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/d/8d8a5329-2512-407b-aa35-e83dd56dc26a.jpg?1562616123",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/8/d/8d8a5329-2512-407b-aa35-e83dd56dc26a.jpg?1562616123",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/8/d/8d8a5329-2512-407b-aa35-e83dd56dc26a.png?1562616123",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/d/8d8a5329-2512-407b-aa35-e83dd56dc26a.jpg?1562616123",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/d/8d8a5329-2512-407b-aa35-e83dd56dc26a.jpg?1562616123"
        },
        "prices": {
            "usd": null,
            "usd_foil": "4.50",
            "eur": null,
            "eur_foil": "2.81",
            "tix": null
        }
    },
    {
        "cardId": "9bb69a2c-aefa-4cde-9560-913059002e85",
        "name": "Progenitus",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/9/b/9bb69a2c-aefa-4cde-9560-913059002e85.jpg?1599766662",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/b/9bb69a2c-aefa-4cde-9560-913059002e85.jpg?1599766662",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/9/b/9bb69a2c-aefa-4cde-9560-913059002e85.jpg?1599766662",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/9/b/9bb69a2c-aefa-4cde-9560-913059002e85.png?1599766662",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/b/9bb69a2c-aefa-4cde-9560-913059002e85.jpg?1599766662",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/b/9bb69a2c-aefa-4cde-9560-913059002e85.jpg?1599766662"
        },
        "prices": {
            "usd": "11.70",
            "usd_foil": null,
            "eur": null,
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "502740bf-0bff-4358-8996-1a27e5f0343f",
        "name": "Reaper King",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/5/0/502740bf-0bff-4358-8996-1a27e5f0343f.jpg?1562830062",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/0/502740bf-0bff-4358-8996-1a27e5f0343f.jpg?1562830062",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/5/0/502740bf-0bff-4358-8996-1a27e5f0343f.jpg?1562830062",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/5/0/502740bf-0bff-4358-8996-1a27e5f0343f.png?1562830062",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/0/502740bf-0bff-4358-8996-1a27e5f0343f.jpg?1562830062",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/0/502740bf-0bff-4358-8996-1a27e5f0343f.jpg?1562830062"
        },
        "prices": {
            "usd": "4.77",
            "usd_foil": "55.80",
            "eur": "4.90",
            "eur_foil": "14.29",
            "tix": "0.02"
        }
    },
    {
        "cardId": "ba91338c-1f6c-4b83-851f-98c3e9dea17b",
        "name": "Sanctum of All",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/b/a/ba91338c-1f6c-4b83-851f-98c3e9dea17b.jpg?1594737442",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/a/ba91338c-1f6c-4b83-851f-98c3e9dea17b.jpg?1594737442",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/b/a/ba91338c-1f6c-4b83-851f-98c3e9dea17b.jpg?1594737442",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/b/a/ba91338c-1f6c-4b83-851f-98c3e9dea17b.png?1594737442",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/a/ba91338c-1f6c-4b83-851f-98c3e9dea17b.jpg?1594737442",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/a/ba91338c-1f6c-4b83-851f-98c3e9dea17b.jpg?1594737442"
        },
        "prices": {
            "usd": "0.31",
            "usd_foil": "0.39",
            "eur": "0.17",
            "eur_foil": "0.20",
            "tix": "0.02"
        }
    },
    {
        "cardId": "565b2a40-57b1-451f-8c2a-e02222502288",
        "name": "Scion of the Ur-Dragon",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/5/6/565b2a40-57b1-451f-8c2a-e02222502288.jpg?1562608891",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/6/565b2a40-57b1-451f-8c2a-e02222502288.jpg?1562608891",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/5/6/565b2a40-57b1-451f-8c2a-e02222502288.jpg?1562608891",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/5/6/565b2a40-57b1-451f-8c2a-e02222502288.png?1562608891",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/6/565b2a40-57b1-451f-8c2a-e02222502288.jpg?1562608891",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/6/565b2a40-57b1-451f-8c2a-e02222502288.jpg?1562608891"
        },
        "prices": {
            "usd": "1.91",
            "usd_foil": null,
            "eur": "0.44",
            "eur_foil": null,
            "tix": null
        }
    },
    {
        "cardId": "ba4106de-20c7-48cf-8a36-8c6913b46c89",
        "name": "Sliver Hivelord",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/b/a/ba4106de-20c7-48cf-8a36-8c6913b46c89.jpg?1562793305",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/a/ba4106de-20c7-48cf-8a36-8c6913b46c89.jpg?1562793305",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/b/a/ba4106de-20c7-48cf-8a36-8c6913b46c89.jpg?1562793305",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/b/a/ba4106de-20c7-48cf-8a36-8c6913b46c89.png?1562793305",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/a/ba4106de-20c7-48cf-8a36-8c6913b46c89.jpg?1562793305",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/a/ba4106de-20c7-48cf-8a36-8c6913b46c89.jpg?1562793305"
        },
        "prices": {
            "usd": "7.62",
            "usd_foil": "64.39",
            "eur": "15.03",
            "eur_foil": "69.30",
            "tix": "0.92"
        }
    },
    {
        "cardId": "8bd37a04-87b1-42ad-b3e2-f17cd8998f9d",
        "name": "Sliver Legion",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/8/b/8bd37a04-87b1-42ad-b3e2-f17cd8998f9d.jpg?1562923246",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/b/8bd37a04-87b1-42ad-b3e2-f17cd8998f9d.jpg?1562923246",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/8/b/8bd37a04-87b1-42ad-b3e2-f17cd8998f9d.jpg?1562923246",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/8/b/8bd37a04-87b1-42ad-b3e2-f17cd8998f9d.png?1562923246",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/b/8bd37a04-87b1-42ad-b3e2-f17cd8998f9d.jpg?1562923246",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/b/8bd37a04-87b1-42ad-b3e2-f17cd8998f9d.jpg?1562923246"
        },
        "prices": {
            "usd": "98.84",
            "usd_foil": "232.06",
            "eur": "34.99",
            "eur_foil": "46.50",
            "tix": "0.10"
        }
    },
    {
        "cardId": "3c16915b-c50d-4fb5-830f-9ca4597a9c0f",
        "name": "Sliver Overlord",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/3/c/3c16915b-c50d-4fb5-830f-9ca4597a9c0f.jpg?1562527622",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/c/3c16915b-c50d-4fb5-830f-9ca4597a9c0f.jpg?1562527622",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/3/c/3c16915b-c50d-4fb5-830f-9ca4597a9c0f.jpg?1562527622",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/3/c/3c16915b-c50d-4fb5-830f-9ca4597a9c0f.png?1562527622",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/c/3c16915b-c50d-4fb5-830f-9ca4597a9c0f.jpg?1562527622",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/c/3c16915b-c50d-4fb5-830f-9ca4597a9c0f.jpg?1562527622"
        },
        "prices": {
            "usd": "17.30",
            "usd_foil": "71.35",
            "eur": "10.00",
            "eur_foil": "59.99",
            "tix": "0.42"
        }
    },
    {
        "cardId": "096cff82-28eb-4096-be1d-a02b9a56e682",
        "name": "Sliver Queen",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/0/9/096cff82-28eb-4096-be1d-a02b9a56e682.jpg?1562428176",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/9/096cff82-28eb-4096-be1d-a02b9a56e682.jpg?1562428176",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/0/9/096cff82-28eb-4096-be1d-a02b9a56e682.jpg?1562428176",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/0/9/096cff82-28eb-4096-be1d-a02b9a56e682.png?1562428176",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/9/096cff82-28eb-4096-be1d-a02b9a56e682.jpg?1562428176",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/9/096cff82-28eb-4096-be1d-a02b9a56e682.jpg?1562428176"
        },
        "prices": {
            "usd": null,
            "usd_foil": null,
            "eur": null,
            "eur_foil": null,
            "tix": "1.85"
        }
    },
    {
        "cardId": "f31cab5f-c05e-4688-b300-33ab0dd98598",
        "name": "Sphinx of the Guildpact",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/f/3/f31cab5f-c05e-4688-b300-33ab0dd98598.jpg?1599709924",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/3/f31cab5f-c05e-4688-b300-33ab0dd98598.jpg?1599709924",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/f/3/f31cab5f-c05e-4688-b300-33ab0dd98598.jpg?1599709924",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/f/3/f31cab5f-c05e-4688-b300-33ab0dd98598.png?1599709924",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/3/f31cab5f-c05e-4688-b300-33ab0dd98598.jpg?1599709924",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/3/f31cab5f-c05e-4688-b300-33ab0dd98598.jpg?1599709924"
        },
        "prices": {
            "usd": "0.06",
            "usd_foil": "0.07",
            "eur": "0.02",
            "eur_foil": "0.14",
            "tix": "0.02"
        }
    },
    {
        "cardId": "06d4fbe1-8a2f-4958-bb85-1a1e5f1e8d87",
        "name": "The First Sliver",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/0/6/06d4fbe1-8a2f-4958-bb85-1a1e5f1e8d87.jpg?1562202321",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/6/06d4fbe1-8a2f-4958-bb85-1a1e5f1e8d87.jpg?1562202321",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/0/6/06d4fbe1-8a2f-4958-bb85-1a1e5f1e8d87.jpg?1562202321",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/0/6/06d4fbe1-8a2f-4958-bb85-1a1e5f1e8d87.png?1562202321",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/6/06d4fbe1-8a2f-4958-bb85-1a1e5f1e8d87.jpg?1562202321",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/6/06d4fbe1-8a2f-4958-bb85-1a1e5f1e8d87.jpg?1562202321"
        },
        "prices": {
            "usd": "8.88",
            "usd_foil": "59.54",
            "eur": "7.05",
            "eur_foil": "28.00",
            "tix": "0.73"
        }
    },
    {
        "cardId": "7e78b70b-0c67-4f14-8ad7-c9f8e3f59743",
        "name": "The Ur-Dragon",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/7/e/7e78b70b-0c67-4f14-8ad7-c9f8e3f59743.jpg?1562614382",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/e/7e78b70b-0c67-4f14-8ad7-c9f8e3f59743.jpg?1562614382",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/7/e/7e78b70b-0c67-4f14-8ad7-c9f8e3f59743.jpg?1562614382",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/7/e/7e78b70b-0c67-4f14-8ad7-c9f8e3f59743.png?1562614382",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/e/7e78b70b-0c67-4f14-8ad7-c9f8e3f59743.jpg?1562614382",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/e/7e78b70b-0c67-4f14-8ad7-c9f8e3f59743.jpg?1562614382"
        },
        "prices": {
            "usd": null,
            "usd_foil": "11.24",
            "eur": null,
            "eur_foil": "18.00",
            "tix": null
        }
    },
    {
        "cardId": "449a9db4-f219-4a6a-b9a3-3dd3edec2a16",
        "name": "Transguild Courier",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/4/4/449a9db4-f219-4a6a-b9a3-3dd3edec2a16.jpg?1593274052",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/4/449a9db4-f219-4a6a-b9a3-3dd3edec2a16.jpg?1593274052",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/4/4/449a9db4-f219-4a6a-b9a3-3dd3edec2a16.jpg?1593274052",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/4/4/449a9db4-f219-4a6a-b9a3-3dd3edec2a16.png?1593274052",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/4/449a9db4-f219-4a6a-b9a3-3dd3edec2a16.jpg?1593274052",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/4/449a9db4-f219-4a6a-b9a3-3dd3edec2a16.jpg?1593274052"
        },
        "prices": {
            "usd": "0.29",
            "usd_foil": "1.05",
            "eur": "0.05",
            "eur_foil": "1.99",
            "tix": "0.03"
        }
    },
    {
        "cardId": "e4581455-5fa1-4c96-96b3-e9e9654f5a28",
        "name": "Urza, Academy Headmaster",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.jpg?1572374174",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.jpg?1572374174",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.jpg?1572374174",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.png?1572374174",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.jpg?1572374174",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.jpg?1572374174"
        },
        "prices": {
            "usd": "4.42",
            "usd_foil": "31.57",
            "eur": "1.59",
            "eur_foil": "25.00",
            "tix": null
        }
    },
    {
        "cardId": "fea4a077-718b-44af-87be-90df61aab643",
        "name": "Who // What // When // Where // Why",
        "lang": "en",
        "image_uris": {
            "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/f/e/fea4a077-718b-44af-87be-90df61aab643.jpg?1583542846",
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/e/fea4a077-718b-44af-87be-90df61aab643.jpg?1583542846",
            "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/f/e/fea4a077-718b-44af-87be-90df61aab643.jpg?1583542846",
            "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/f/e/fea4a077-718b-44af-87be-90df61aab643.png?1583542846",
            "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/e/fea4a077-718b-44af-87be-90df61aab643.jpg?1583542846",
            "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/e/fea4a077-718b-44af-87be-90df61aab643.jpg?1583542846"
        },
        "prices": {
            "usd": "0.26",
            "usd_foil": null,
            "eur": "0.14",
            "eur_foil": null,
            "tix": null
        }
    }
];


let books = new Collection();
let firstPage = [['firstPage'], ['firstPage'], ['firstPage'], ['firstPage'], ['firstPage'],];
let secondPage = [['dumberData'], ['dumberData'], ['dumberData'], ['dumberData'], ['dumberData'],];
books.pushAll(firstPage, secondPage); // loads each array individually
books.log()
console.log(books.index);

console.log('========');
books.current() // display firstPage
books.log()
console.log('========');
console.log(books.index);

books.next() // display secondPage
books.log()
console.log('========');

books.log()
console.log(books.index);
// sfCollection.add(8, cardsToShow);
// sfCollection.next();
// sfCollection.log();
// console.log(sfCollection);