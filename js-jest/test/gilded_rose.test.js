const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  
  it("should have the correct items and quantities", function() {
    
    const expected = [
      {
        name: "+5 Dexterity Vest",
        quality: 18,
        sellIn: 8,
      },
      {
        name: "Aged Brie",
        quality: 2,
        sellIn: 0,
      },
      {
        name: "Elixir of the Mongoose",
        quality: 5,
        sellIn: 3,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        quality: 80,
        sellIn: 0,
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        quality: 80,
        sellIn: -1,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        quality: 22,
        sellIn: 13,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        quality: 50,
        sellIn: 8,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        quality: 50,
        sellIn: 3,
      },
    ];

    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    ];

    const days = 2;
    const gildedRose = new Shop(items);

    for (let day = 0; day < days; day++) {
      gildedRose.updateQuality();
    }

    expect(gildedRose.items).toEqual(expected)
  });
  it("covers backstage passes", function() {
    
    const expected = [
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        quality: 13,
        sellIn: 8,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        quality: 15,
        sellIn: 2,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        quality: 0,
        sellIn: -3,
      },
    ];

    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 9),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 9),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 9),
    ];

    const days = 2;
    const gildedRose = new Shop(items);

    for (let day = 0; day < days; day++) {
      gildedRose.updateQuality();
    }

    expect(gildedRose.items).toEqual(expected)
  });

  it("all other random items", function() {
    const expected = [
      {
        name: "made up object",
        quality: 8,
        sellIn: -2,
      },
    ];

    const items = [
      new Item("made up object", -1, 10),
    ];

    const days = 1;
    const gildedRose = new Shop(items);

    for (let day = 0; day < days; day++) {
      gildedRose.updateQuality();
    }

    expect(gildedRose.items).toEqual(expected)
  });
  it("tests aged brie", function() {
    const expected = [
      {
        name: "Aged Brie",
        quality: 12,
        sellIn: -2,
      },
    ];

    const items = [
      new Item("Aged Brie", -1, 10),
    ];

    const days = 1;
    const gildedRose = new Shop(items);

    for (let day = 0; day < days; day++) {
      gildedRose.updateQuality();
    }

    expect(gildedRose.items).toEqual(expected)
  });
});