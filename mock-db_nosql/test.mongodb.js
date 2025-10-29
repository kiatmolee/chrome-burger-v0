//use("test");
//db.employee.find({"address":{$in:["กรุงเทพมหานคร","ระยอง"]}})
//db.employee.find({$and:[{"salary":{$gt:15000}},{"salary":{$lt:45000}}]})
//db.employee.find({$or:[{"department":"วิศวกร"},{"general.gender":"ชาย"}]})
//db.employee.find({$nor:[{"address":"กรุงเทพมหานคร"},{"department":"ฝ่ายขาย"}]})
//db.employee.find({"general.weight":{$not:{$gte:52}}})
//db.employee.updateOne({"name":"สมชาย"},{$set:{"salary":50000}})
//db.employee.updateOne({"name":"สุดารัตน์"},{$set:{"salary":30000,"address":"น่าน"}})
//db.employee.updateMany({"address":"กรุงเทพมหานคร"},{$set:{"salary":7000}})
//db.employee.deleteOne({"name":"สมชาย"})
//db.employee.deleteMany({"address":"กรุงเทพมหานคร"})
//use ("sample_mflix")
// db.movies.aggregate([
//     { $match: { year: { $gte: 2000, $lte: 2010 } } },
//     { $group: { _id: "$year", totalMovies: { $sum: 1 } } },
//     { $sort: { _id: 1 } },
//     //  { $project: {
//     //    _id:0, year:"$_id",  total:"$totalMovies"
//     //  }},
//      { $project: {
//         _id:0, year:"$_id",  totalMovies:1
//       }}
//   ])

use ("chrome-burger-db")
//db.staff.find({},{_id:0,first_name:1,last_name:1})
//db.menu_items.find({category:"Burger"},{name:1,price:1})
//db.menu_items.find({},{name:1, price:1}).sort({price:-1}).limit(3)
// db.suppliers.aggregate([{
  
//     // $lookup:{from:"ingredients", localField:"_id", 
//     //     foreignField:"supplier_id", as :"sup_id" }},
    
//     // { $match:{ name: "Patty's Premium Meats" }},
//     // {$project: {_id:0,name:"$sup_id.name"}}
// ])
// var jane = db.staff.findOne({first_name: "Jane", last_name: "Doe"});
// db.orders.find({ "staff.staff_id": jane._id });
db.orders.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$order_date" } },
        daily_revenue: { $sum: "$total_price" }
      }
    }
  ]);

  
  
