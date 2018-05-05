import React from 'react';
import formatNumber from 'format-num';

/**
 * Displays related centers
 *
 * @param {object} centers - Suggested Centers
 * @returns {object} - JSX DOM
 */
const SuggestedCenters = ({ centers }) => {
  if (!Array.isArray(centers) || !centers.length) return null;

  centers = centers.slice(0, 3);
  return (
    <div className="related-centers">
      <h5>You May Also Like These Venues</h5>
      <div className="row">
        {centers.map(center => (
          <div className="col s12 m4 l4" key={center.id}>
            <img src={center.image} alt="center" />
            <h5 className="truncate">{center.name}</h5>
            <p>&#8358;{formatNumber(center.amount)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedCenters;