import React from 'react';
import formatNumber from 'format-num';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { STATES } from '../../consts';

/**
 * Centers Card
 *
 * @returns {object} JSX DOM
 */
const PaginatedCentersCard = ({
  centers, count, click, handlePagingNav
}) => {
  console.log('=========================', centers);
  if (!Array.isArray(centers) || !centers.length) return 'Can not find center';
  return (
    <div>
      <div className="row">
        {centers.map(center => (
          <div
            onClick={() => click(center.id)}
            tabIndex="-99999"
            onKeyUp={() => click(center.id)}
            role="button"
          >
            <div className="col s12 m4 l4">
              <div className="event-center card">
                <img src={center.image} alt="Featured Center" />
                <div>
                  <h4 className="truncate">{center.name}</h4>
                  <p>
                    <i className="material-icons">location_on</i>
                    {center.area} {STATES[center.state]}
                  </p>
                  <p> &#8358;{formatNumber(center.amount)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination total={count} handlePagingNav={handlePagingNav} />
    </div>
  );
};

export default PaginatedCentersCard;