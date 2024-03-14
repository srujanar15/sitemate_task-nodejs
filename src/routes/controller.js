const model = require('./model');



function getAllItems(req, res) {
    let jsonData = [
        {
          "id": 1,
          "title": "First Object",
          "description": "This is the description of the first object."
        },
        {
          "id": 2,
          "title": "Second Object",
          "description": "This is the description of the second object."
        },
        {
          "id": 3,
          "title": "Third Object",
          "description": "This is the description of the third object."
        }
      ]
    res.json(jsonData);

  }

function createItem(req, res) {
    const items = [];
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
}

function updateItem(req, res) {
    const items = [];
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
}

function deleteItem(req, res) {
    console.log(req.body);
    let someArray = req.body.data.filter(x => x.id !== req.body.id)
    // let someArray = req.body.data.slice(req.body.id,1); // first element removed
    console.log(someArray)
    // const items = [];
    // // const newItem = req.body;
    // // items.push(newItem);
    res.status(201).json(someArray);
}

  module.exports = {
    getAllItems,
    createItem,
    updateItem,
    deleteItem
  };