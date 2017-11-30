'use strict';

module.exports = {
  validEvent: {
    name: 'Birthday Party',
    startDate: '2017-11-28',
    endDate: '2017-11-30',
    time: '13:00',
    state: 7,
    summary: '',
    center: '1'
  },
  invalidEventName: {
    name: '',
    startDate: '2017-11-28',
    endDate: '2017-11-28',
    time: '13:00',
    state: 7,
    summary: '',
    center: '1'
  },
  invalidEventDate: {
    name: 'Birthday Party',
    startDate: '2017-11-28',
    endDate: '',
    time: '13:00',
    state: 7,
    summary: '',
    center: '1'
  },
  invalidDateFormat: {
    name: 'Birthday Party',
    startDate: '20112017',
    endDate: '2017-11-35',
    time: '13:00',
    state: 7,
    summary: '',
    center: '1'
  },
  invalidStartDate: {
    name: 'Birthday Party',
    startDate: '2017-11-20',
    endDate: '2017-11-30',
    time: '13:00',
    state: 7,
    summary: '',
    center: '1'
  },
  invalidState: {
    name: 'Birthday Party',
    startDate: '2017-11-28',
    endDate: '2017-11-28',
    time: '13:00',
    state: 38,
    summary: '',
    center: '1'
  },
  invalidTimeFormat: {
    name: 'Birthday Party',
    startDate: '2017-11-28',
    endDate: '2017-11-28',
    time: '53:00',
    state: 7,
    summary: '',
    center: '1'
  },
  invalidCenter: {
    name: 'Birthday Party',
    startDate: '2017-11-28',
    endDate: '2017-11-28',
    time: '13:00',
    state: 7,
    summary: '',
    center: '41'
  }
};