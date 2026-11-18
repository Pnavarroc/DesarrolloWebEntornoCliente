export interface ApiResponseYugiOh {
  data: YugiOhCard[];
}

export interface YugiOhCard {
  id: number;
  name: string;
  type: string;
  humanReadableCardType: string;
  frameType: string;
  desc: string;
  race: string;
  ygoprodeck_url: string;
  card_images: CardImage[];
  card_prices: CardPrice[];
  archetype?: string;
  card_sets?: CardSet[];
  banlist_info?: BanlistInfo;
  typeline?: string[];
  atk?: number;
  def?: number;
  level?: number;
  attribute?: string;
  linkval?: number;
  linkmarkers?: string[];
  pend_desc?: string;
  monster_desc?: string;
  scale?: number;
}

export interface CardImage {
  id: number;
  image_url: string;
  image_url_small: string;
  image_url_cropped: string;
}

export interface CardPrice {
  cardmarket_price: string;
  tcgplayer_price: string;
  ebay_price: string;
  amazon_price: string;
  coolstuffinc_price: string;
}

export interface CardSet {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
}

export interface BanlistInfo {
  ban_tcg?: string;
  ban_ocg?: string;
  ban_goat?: string;
}
