/*se insertan los datos del enlace especificado en el repositorio*/
db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);
 /* insertamos mas documentos en la base de datos */
 db.inventory.insertMany([
    { item: "pencil", qty: 250, size: { h: 1, w: 4, uom: "cm" }, status: "B" },
    { item: "carpet", qty: 5, size: { h: 10, w: 12, uom: "in" }, status: "A" },
    { item: "rubber", qty: 500, size: { h: 3, w: 2, uom: "cm" }, status: "C" },
    { item: "tipex", qty: 12, size: { h: 1, w: 4, uom: "cm" }, status: "A" },
    { item: "mouse", qty: 7, size: { h:2 , w: 12, uom: "cm" }, status: "B" }
 ]);
/*Encuentra todos los documentos de una cantidad menor a 110 o cuyo status sea A o C*/
 db.inventory.find({$or:[{qty:{$lt:110}},{status:{$in: ["A","C"]}}]}).pretty()
 /*Encuentra todos los documentos de una cantidad mayor a 45 y cuyo status B*/
 db.inventory.find({$and:[{qty:{$gte:45}},{status:"B"}]}).pretty()
 /*Encuentra los documentos que no tengan una cantidad igual a 250 o 100 y su "h" sea inferior a 5*/
 db.inventory.find({$and:[{qty:{$nin:[250,100]}},{'size.h':{$lt:5}}]}).pretty()
 /*Encuentra todos los documentos cuyo status sea "B" y tengan por cantidad 250*/
 db.inventory.find({status:"B",qty:250}).pretty()
 /*Encuentra todos los items que no empiecen por la letra "p"*/
 db.inventory.find({item:{$not:/^p.*/}}).pretty()