export const emptyFunction = () => {};

export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const FavoriteButtonProperty = {
  PlaceCard: {
    CLASS_NAME: `place-card`,
    WIDTH: 18,
    HEIGHT: 19,
  },
  Property: {
    CLASS_NAME: `property`,
    WIDTH: 31,
    HEIGHT: 33,
  }
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const authInfo = {
  AuthorizedUser: {
    email: `mail@domain.com`
  },
  UnauthorizedUser: {
    email: null
  }
};

export const SortList = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const MapPlace = {
  CITIES: `cities`,
  OFFER: `property`
};

export const matchOfferID = {
  params: {
    id: `1`
  }
};

export const OfferPlace = {
  CITIES: `cities__place-`,
  NEIGHBORHOOD: `near-places__`,
  FAVORITES: `favorites__`
};

export const OfferCardImage = {
  Favorite: {
    WIDTH: 150,
    HEIGHT: 110
  },
  List: {
    WIDTH: 260,
    HEIGHT: 200
  }
};

export const featuresList = [
  `Laptop friendly workspace`,
  `Washer`,
  `Towels`,
  `Fridge`,
  `Air conditioning`,
  `Baby seat`,
  `Breakfast`
];

export const Offers = [
  {
    "city": {
      "name": `Cologne`,
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`
    ],
    "name": `The house among olive `,
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.8,
    "type": `house`,
    "bedroomsCount": 3,
    "adultsCount": 4,
    "price": 493,
    "features": [
      `Laptop friendly workspace`,
      `Washer`,
      `Towels`,
      `Fridge`,
      `Air conditioning`,
      `Baby seat`,
      `Breakfast`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatar": `img/avatar-angelina.jpg`
    },
    "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    "location": {
      "latitude": 50.957361,
      "longitude": 6.9509739999999995,
      "zoom": 16
    },
    "id": 1
  },
  {
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`
    ],
    "name": `Amazing and Extremely Central Flat`,
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.3,
    "type": `apartment`,
    "bedroomsCount": 3,
    "adultsCount": 8,
    "price": 323,
    "features": [
      `Towels`,
      `Baby seat`,
      `Laptop friendly workspace`,
      `Dishwasher`,
      `Washing machine`,
      `Air conditioning`,
      `Washer`,
      `Coffee machine`,
      `Breakfast`,
      `Fridge`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatar": `img/avatar-angelina.jpg`
    },
    "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    "location": {
      "latitude": 50.839557,
      "longitude": 4.346697,
      "zoom": 16
    },
    "id": 2
  },
  {
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`
    ],
    "name": `The house among olive `,
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.6,
    "type": `apartment`,
    "bedroomsCount": 4,
    "adultsCount": 7,
    "price": 218,
    "features": [
      `Washer`,
      `Laptop friendly workspace`,
      `Breakfast`,
      `Air conditioning`,
      `Baby seat`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatar": `img/avatar-angelina.jpg`
    },
    "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    "location": {
      "latitude": 50.865556999999995,
      "longitude": 4.371696999999999,
      "zoom": 16
    },
    "id": 3
  },
  {
    "city": {
      "name": `Amsterdam`,
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`
    ],
    "name": `Perfectly located Castro`,
    "isFavorite": false,
    "isPremium": false,
    "rating": 4.6,
    "type": `house`,
    "bedroomsCount": 3,
    "adultsCount": 7,
    "price": 440,
    "features": [
      `Dishwasher`,
      `Air conditioning`,
      `Laptop friendly workspace`,
      `Washer`,
      `Baby seat`,
      `Towels`,
      `Breakfast`,
      `Coffee machine`,
      `Fridge`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatar": `img/avatar-angelina.jpg`
    },
    "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    "location": {
      "latitude": 52.385540000000006,
      "longitude": 4.902976,
      "zoom": 16
    },
    "id": 4
  }
];

export const offer = Offers[0];

export const imageList = Offers[0][`images`];

export const reviews = [
  {
    "id": 1,
    "user": {
      "id": 14,
      "isPro": true,
      "name": `Corey`,
      "avatar": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`
    },
    "rating": 5,
    "text": `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
    "date": `2020-11-01T13:38:44.752Z`
  },
  {
    "id": 2,
    "user": {
      "id": 12,
      "isPro": true,
      "name": `Isaac`,
      "avatar": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`
    },
    "rating": 3,
    "text": `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
    "date": `2020-11-01T13:38:44.752Z`
  },
  {
    "id": 3,
    "user": {
      "id": 15,
      "isPro": false,
      "name": `Kendall`,
      "avatar": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`
    },
    "rating": 3,
    "text": `I stayed here for one night and it was an unpleasant experience.`,
    "date": `2020-11-01T13:38:44.752Z`
  }
];

export const review = reviews[0];
