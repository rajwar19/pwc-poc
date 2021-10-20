const express = require('express')
const apirouter = express.Router()
const axios = require('axios')

apirouter.get('/health-check', function(_, res) {
   res.json({ status: 'OK', message:'Running....'  })
})

apirouter.get('/users', async function(_, res, _) {   
   try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    res.json(data)
  } catch (error) {
    console.log(error)
    res.json([])
  }
 })

 module.exports = apirouter
