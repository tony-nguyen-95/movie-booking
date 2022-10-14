import React from 'react';
import Avatar from 'react-avatar';
import { Container, Row, Col } from 'react-bootstrap';
import './leader-board.style.scss';
import { ILeaderBoardProps } from './leader-board.type';

const prefixClassName = 'leader-board';

export const LeaderBoard: React.FC<ILeaderBoardProps> = (props) => {
  return (
    <Container className={prefixClassName}>
      <div className={`${prefixClassName}__header`}>
        <h3>Leaderboard</h3>
        <div className={`${prefixClassName}__header-annotation`}>
          <p>All Time Edits</p>
          <p>Edits This Week</p>
        </div>
      </div>
      <div className={`${prefixClassName}__main`}>
        <Row>
          <Col xs={6} className={`${prefixClassName}__user-info-wrapper`}>
            <Avatar name="Tony Nguyen" size="56" round />
            <div className={`${prefixClassName}__user-point-group`}>
              <h4>TonyNguyen</h4>
              <Row className={`${prefixClassName}__user-process-all-time`}>
                <Col xs={12}>
                  <span style={{ width: '80%' }} />
                  <p>10,000</p>
                </Col>
              </Row>
              <Row className={`${prefixClassName}__user-process-this-week`}>
                <Col xs={12}>
                  <span style={{ width: '50%' }} />
                  <p>10,000</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={6} className={`${prefixClassName}__user-info-wrapper`}>
            <Avatar name="Tony Nguyen" size="56" round />
            <div className={`${prefixClassName}__user-point-group`}>
              <h4>TonyNguyen</h4>
              <Row className={`${prefixClassName}__user-process-all-time`}>
                <Col xs={12}>
                  <span style={{ width: '80%' }} />
                  <p>10,000</p>
                </Col>
              </Row>
              <Row className={`${prefixClassName}__user-process-this-week`}>
                <Col xs={12}>
                  <span style={{ width: '50%' }} />
                  <p>10,000</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={6} className={`${prefixClassName}__user-info-wrapper`}>
            <Avatar name="Tony Duong" size="56" round />
            <div className={`${prefixClassName}__user-point-group`}>
              <h4>TonyNguyen</h4>
              <Row className={`${prefixClassName}__user-process-all-time`}>
                <Col xs={12}>
                  <span style={{ width: '80%' }} />
                  <p>10,000</p>
                </Col>
              </Row>
              <Row className={`${prefixClassName}__user-process-this-week`}>
                <Col xs={12}>
                  <span style={{ width: '50%' }} />
                  <p>10,000</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={6} className={`${prefixClassName}__user-info-wrapper`}>
            <Avatar name="Tony Nguyen" size="56" round />
            <div className={`${prefixClassName}__user-point-group`}>
              <h4>TonyNguyen</h4>
              <Row className={`${prefixClassName}__user-process-all-time`}>
                <Col xs={12}>
                  <span style={{ width: '80%' }} />
                  <p>10,000</p>
                </Col>
              </Row>
              <Row className={`${prefixClassName}__user-process-this-week`}>
                <Col xs={12}>
                  <span style={{ width: '50%' }} />
                  <p>10,000</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
