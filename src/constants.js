const START_MAP_POSITION = [52.38333, 4.9];
const START_MAP_ZOOM = 12;
const MAP_LAYER = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
const MAP_ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`;

const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

const Filter = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

const MapPlace = {
  CITIES: `cities`,
  OFFER: `property`
};

const OfferPlace = {
  CITIES: `cities__place-`,
  NEIGHBORHOOD: `near-places__`
};

const Icon = {
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
};

export {
  START_MAP_POSITION,
  START_MAP_ZOOM,
  MAP_LAYER,
  MAP_ATTRIBUTION,
  City,
  Filter,
  MapPlace,
  OfferPlace,
  Icon
};
