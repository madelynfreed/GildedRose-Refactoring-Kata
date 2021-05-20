class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class BetterItem {
  constructor(item){
    this.item = item;
  }
  updateItemSellIn() {
    if (this.item.name != 'Sulfuras, Hand of Ragnaros') {
      this.decrementSellInOfNonLegendaryItems();
    }
  }
  decrementSellInOfNonLegendaryItems() {
    this.item.sellIn = this.item.sellIn - 1;
  }
  updateItemQuality() {
    if (this.item.name != 'Aged Brie' && this.item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      this.decrementQualityForOrdinaryItems()
    } else {
      this.incrementQualityOfExtraordinaryItems();
    }
    if (this.item.sellIn < 0) {
      this.updateQualityOfExpiredItems()
    }
  }
  decrementQualityForOrdinaryItems() {
    if (this.item.quality > 0) {
      if (this.item.name != 'Sulfuras, Hand of Ragnaros') {
        this.item.quality = this.item.quality - 1;
      }
    }
  }
  incrementQualityOfExtraordinaryItems() {
    if (this.item.quality < 50) {
      this.item.quality = this.item.quality + 1;
      if (this.item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.item.sellIn < 11) {
          if (this.item.quality < 50) {
            this.item.quality = this.item.quality + 1;
          }
        }
        if (this.item.sellIn < 6) {
          if (this.item.quality < 50) {
            this.item.quality = this.item.quality + 1;
          }
        }
      }
    }
  }

  updateQualityOfExpiredItems() {
    if (this.item.name != 'Aged Brie') {
      if (this.item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.item.quality > 0) {
          if (this.item.name != 'Sulfuras, Hand of Ragnaros') {
            this.item.quality = this.item.quality - 1;
          }
        }
      } else {
        this.item.quality = 0;
      }
    } else {
      if (this.item.quality < 50) {
        this.item.quality = this.item.quality + 1;
      }
    }
  }

}


class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const betterItem = new BetterItem(this.items[i])

      betterItem.updateItemQuality();
      betterItem.updateItemSellIn();
    }

    return this.items;
  }
  decrementQualityForOrdinaryItems(i) {
    if (this.items[i].quality > 0) {
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].quality = this.items[i].quality - 1;
      }
    }
  }
  incrementQualityOfExtraordinaryItems(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].sellIn < 11) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
        if (this.items[i].sellIn < 6) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
  }

  updateQualityOfExpiredItems(i) {
    if (this.items[i].name != 'Aged Brie') {
      if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        this.items[i].quality = 0;
      }
    } else {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1;
      }
    }
  }

  updateItemQuality(i) {
    if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      this.decrementQualityForOrdinaryItems(i)
    } else {
      this.incrementQualityOfExtraordinaryItems(i);
    }
    if (this.items[i].sellIn < 0) {
      this.updateQualityOfExpiredItems(i)
    }
  }
}

module.exports = {
  Item,
  Shop
}
