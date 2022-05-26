const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryDataGet = await Category.findAll({include: [{model: Product}]}) 
    res.status(200).json(categoryDataGet);
  }catch(error){
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryDataGetId = await Category.findByPk(req.params.id, {include: [{ model: Product}]})
    res.status(200).json(categoryDataGetId);
  }catch(error)
  {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
      const categoryDataPost = await Category.create(req.body)
      res.status(200).json(categoryDataPost);  
  }catch(error){
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const categoryDataPut = await Category.update(req.body, {where: { id: req.params.id}})
    res.status(200).json(categoryDataPut);  
  }catch(error){
    res.status(500).json(error);
  }
  
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const categoryDataDelete = await Category.destroy({where: { id: req.params.id}})
    res.status(200).json(categoryDataDelete)
  }catch(error){
    res.status(500).json(error);
  }
});

module.exports = router;
