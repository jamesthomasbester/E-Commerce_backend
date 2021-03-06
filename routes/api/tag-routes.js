const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagDataGet = await Tag.findAll({include: [{model: Product}]}) 
    res.status(200).json(tagDataGet);
  }catch(err){
    res.status(500).json(err);
  }
});
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagDataGetId = await Tag.findByPk(req.params.id, { include: [{ model: Product}],})
    res.status(200).json(tagDataGetId);
  }catch(error)
  {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const tagDataPost = await Tag.create(req.body);
    res.status(200).json(tagDataPost)
  }catch(error){
    res.status(500).json(error);
  }
  
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const tagDataPut = await Tag.update(req.body, {where: { id: req.params.id}})
    res.status(200).json(tagDataPut);
  }catch(error){
    res.status(500).json(error);
  }
  
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const tagDataDelete = await Tag.destroy({where: {id: req.params.id}});
    res.status(200).json(tagDataDelete);
  }catch(error){
    res.status(500).json(error);
  } 
});

module.exports = router;
