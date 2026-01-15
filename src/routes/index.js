const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'API is running' })
})

// Future modules
// router.use('/projects', projectsRoutes)
// router.use('/profile', profileRoutes)

module.exports = router
