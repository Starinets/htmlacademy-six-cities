import React from 'react';
import * as Type from '../../types';
import {NavLink} from 'react-router-dom';

import FavoriteButton from '../favorite-button/favorite-button';

import {transformRatingToWidth} from '../../utils';
import {
  AppRoute,
  FavoriteButtonProperty
} from '../../constants';

const OfferCard = (props) => {

  const {
    id,
    image,
    price,
    isFavorite,
    rating,
    name,
    type
  } = props.offer;

  const width = transformRatingToWidth(rating);

  return (
    <article
      className={ `${ props.offerPlace }card place-card` }
      onMouseOver={ () => props.onMouseOver(props.offer) }
      onMouseOut={ () => props.onMouseOver(null) }
      onClick={ () => props.onMouseOver(null) }
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <NavLink
          to={ `${ AppRoute.OFFER }/${ id }` }
        >
          <img className="place-card__image" src={ image } width="260" height="200" alt="Place image" />
        </NavLink>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            id={ id }
            className={ FavoriteButtonProperty.PlaceCard.CLASS_NAME }
            buttonWidth={ FavoriteButtonProperty.PlaceCard.WIDTH }
            buttonHeight={ FavoriteButtonProperty.PlaceCard.HEIGHT }
            isFavorite={ isFavorite }
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ {width} }></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <NavLink
            to={ `${ AppRoute.OFFER }/${ id }` }
          >
            { name }
          </NavLink>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: Type.OFFER.isRequired,
  offerPlace: Type.OFFER_PLACE.isRequired,
  onMouseOver: Type.FUNCTION.isRequired
};

export default OfferCard;
