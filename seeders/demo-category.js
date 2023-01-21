'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pro_categoria', [
      {
        nam_category: 'Permiso de ejemplo',
        des_category: 'permission.example',
        inv_category: 23,
        photo_categorytegory:'{ "name": "Google Chrome", "OS": "Windows", "resolution": {"x": 1920, "y": 1080} }' ,
      },
      {
        nam_category: 'Permiso de ejemplo',
        des_category: 'permission.example',
        inv_category: 23,
        photo_categorytegory: '{ "name": "Google Chrome", "OS": "Windows", "resolution": {"x": 1920, "y": 1080} }' ,
      },
      {
        nam_category: 'Permiso de ejemplo',
        des_category: 'permission.example',
        inv_category: 23,
        photo_categorytegory: '{ "name": "Google Chrome", "OS": "Windows", "resolution": {"x": 1920, "y": 1080} }' ,
      },
      {
        nam_category: 'Permiso de ejemplo',
        des_category: 'permission.example',
        inv_category: 23,
        photo_categorytegory: '{ "name": "Google Chrome", "OS": "Windows", "resolution": {"x": 1920, "y": 1080} }' ,
      },
      {
        nam_category: 'Permiso de ejemplo',
        des_category: 'permission.example',
        inv_category: 23,
        photo_categorytegory: '{ "name": "Google Chrome", "OS": "Windows", "resolution": {"x": 1920, "y": 1080} }' ,
      },
      {
        nam_category: 'Permiso de ejemplo',
        des_category: 'permission.example',
        inv_category: 23,
        photo_categorytegory: '{ "name": "Google Chrome", "OS": "Windows", "resolution": {"x": 1920, "y": 1080} }' ,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pro_categoria', null, {});
  }
};
