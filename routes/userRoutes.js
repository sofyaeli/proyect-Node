// Importamos express y creamos un router.

const express = require("express");
const { body } = require("express-validator");
const expressrediscache = require("express-redis-cache");
const router = express.Router()

// Importamos el controlador de usuarios.

const userController= require("../controllers/userController")

// Importamos el controlador de cache

const cacheController = require("../controllers/cacheController")

const jobController = require("../controllers/testJobController")


const cache = expressrediscache({
    host: 'redis-12699.c277.us-east-1-3.ec2.redns.redis-cloud.com',
    port: 12699,
    auth_pass:'D8iddwTi7Hzg3ebKDjP0TDssYXEThWYQ',
    expire:60
})
// Definir las rutas para el CRUD de usuarios
router.get("/",userController.getAllUsers) // Ruta para obtener todos los usuarios
router.get("/testcache",cache.route(), cacheController.testCache)

router.get("/testjob", jobController.test_Job)

router.get("/:id",userController.getOneUser ) // Ruta para obtener un usuario
router.post("/",userController.createUser),[
    body("_id").not().isEmpty().withMessage("El id es obligatorio"),
    body("nombre").not().isEmpty().withMessage("El nombre es obligatorio"),
    body("edad").not().isEmpty().withMessage("El edad es obligatorio"),
    body("email").not().isEmpty().withMessage("La email es obligatoria") 
    ] // Ruta para crear un usuario
router.put("/:id",[
    body("_id").not().isEmpty().withMessage("El id es obligatorio"),
    body("nombre").not().isEmpty().withMessage("El nombre es obligatorio"),
    body("edad").not().isEmpty().withMessage("El edad es obligatorio"),
    body("email").not().isEmpty().withMessage("La email es obligatoria") 
    ]
,userController.updatedUser),// Ruta para actualizar un usuario
router.delete("/:id", userController.deleteUser) // Ruta para eliminar un usuario





//test jobs


// router.get("/fibo", cacheController.fibo)






module.exports= router