'use strict';

const pageInfo = require('../../models').pageinfo;
const error = require('../../utils/error');

function show(req, res, next) {
  pageInfo.findById(req.params.pageId)
    .then((err, resp) => {
      if (err) throw error.Error400(err);
      if (!resp) throw error.Error404('Page info not found.');

      res.status(200).json(resp);
    })
    .catch(err => res.status(404).json({message: 'Page details not found'}));
}

function create(req, res, next) {
  pageInfo.create({
    published: req.body.published,
    description: req.body.description
  })
  .then(resp => res.status(201).json({message: 'Created new page info.'}));
}

module.exports = {
  create: create,
  show: show
};
