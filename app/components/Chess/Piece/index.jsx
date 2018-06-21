import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { WHITE } from './controller';

export default function Piece(props) {
  return (
    <FontAwesomeIcon
      icon={faChessKnight}
      size="2x"
      color={props.color === WHITE && 'white'}
    />
  );
}

Piece.propTypes = {
  color: PropTypes.string.isRequired,
};
