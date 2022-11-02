import { observer } from 'mobx-react';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { CoreMovieStore } from '../../stores';
import './trailer-modal.style.scss';
import { ITrailerModalProps } from './trailer-modal.type';

const prefixClassName = 'trailer-modal';

export const TrailerModal: React.FC<ITrailerModalProps> = observer((props) => {
  const trailerMovie = CoreMovieStore.trailerModalMovieSelector();

  const handleClose = () => CoreMovieStore.updateTrailerMovieAction(undefined);

  return (
    <div className={prefixClassName}>
      <Modal show={!!trailerMovie} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Trailer: {trailerMovie?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe className="responsive-iframe" src={trailerMovie?.trailerUrl} title={trailerMovie?.title} />
        </Modal.Body>
      </Modal>
    </div>
  );
});
