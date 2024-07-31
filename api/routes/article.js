const express = require('express');
const router = express.Router();


// has to be '/' because all /article requests are already coming here
router.get('/', (req, res, next) => {
     res.status(200).json({
          message: "Get Request to /article"
     })
})

router.post('/', (req, res, next) => {

     const article = {
          "title": req.body.title,
          "content": req.body.content,
          "image": req.body.image,
          "author": req.body.author,
          "datePublished": req.body.datePublished
     }

     res.status(200).json({
          message: "worked",
          createdArticle: {
               article: article
          }
     })
})

router.get('/:articleTitle', (req, res, next) => {
     const title = req.params.articleTitle
     if (title == "mole") {
          res.status(200).json({
               message: 'mole title',
               title: title
          })
     } else {
          res.status(200).json({
               message: "passed a title"
          })
     }
})

router.patch('/:articleTitle', (req, res, next) => {
     const title = req.params.articleTitle
     if (title == "mole") {
          res.status(200).json({
               message: 'mole title',
               title: title
          })
     } else {
          res.status(200).json({
               message: "passed a title"
          })
     }
})



module.exports = router