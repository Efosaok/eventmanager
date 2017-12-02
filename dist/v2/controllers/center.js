'use strict';

var _center = require('./_support/center');

var _center2 = _interopRequireDefault(_center);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  createCenter: function createCenter(req, res) {
    var center = new _center2.default(req.body);

    if (!center.safe()) {
      return res.status(400).json(center.getErrors());
    }

    req.body.ownerid = req.user.id;
    return _models2.default.users.findById(req.body.ownerid).then(function (user) {
      if (!user) {
        return res.status(400).send({ error: true, message: 'Center must have a valid owner' });
      }
      return _models2.default.centers.create(req.body).then(function (center) {
        return res.status(200).json(center);
      }).catch(function (error) {
        return res.status(501).send(error);
      });
    }).catch(function (error) {
      return res.status(501).send(error);
    });
  },
  getCenters: function getCenters(req, res) {
    return _models2.default.centers.all().then(function (centers) {
      return res.status(200).json(centers);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  getCenter: function getCenter(req, res) {
    return _models2.default.centers.findById(req.params.id).then(function (center) {
      if (!center) {
        return res.status(404).json({ message: 'Center not found' });
      }
      return res.status(200).json(center);
    }).catch(function (error) {
      return res.status(500).send(error);
    });
  },
  editCenter: function editCenter(req, res) {
    return _models2.default.centers.findById(req.params.id).then(function (center) {
      if (!center) {
        return res.status(401).json({ error: true, message: 'Center does not exist' });
      }

      var mCenter = new _center2.default(center);
      mCenter.load(req.body);

      if (!mCenter.safe()) {
        return res.status(400).json({ error: true, message: mCenter.getErrors() });
      }
      return _models2.default.centers.update(mCenter.toJSON(), {
        where: { id: req.params.id }
      }).then(function (center) {
        console.log(center);
        console.log(req.params.id);
        return res.status(200).json(center);
      });
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  getEvents: function getEvents(req, res) {
    return _models2.default.centers({
      include: [{
        model: _models2.default.events,
        as: 'events'
      }],
      where: {
        id: req.params.id
      }
    }).then(function (center) {
      return res.status(200).json(center);
    }).catch(function (error) {
      return res.status(500).json(error);
    });
  },
  getCenterByDate: function getCenterByDate(req, res) {
    return _models2.default.events.findAll({
      attributes: ['centerid'],
      where: {
        centerid: center.id,
        $or: [{
          $and: [{ startdate: _defineProperty({}, sequelize.Op.lte, new Date(date)) }, { enddate: _defineProperty({}, sequelize.Op.gte, new Date(date)) }]
        }, {
          $and: [{ startdate: _defineProperty({}, sequelize.Op.lte, new Date(date)) }, { enddate: _defineProperty({}, sequelize.Op.gte, new Date(date)) }]
        }]
      }
    }).then(function (centersid) {
      console.log(centersid);
      return res.json(centersii);
    }).catch(function (error) {
      return res.status(500).json(error);
    });
  }
};