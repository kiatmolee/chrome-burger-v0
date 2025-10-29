--SELECT * from menuitems where category like 'Bu_g%'

/*SELECT * From menuitems 
ORDER BY price DESC;
*/

/*SELECT * from menuitems
ORDER BY price ASC LIMIT 3;
*/


/*SELECT * FROM ingredients
JOIN suppliers ON ingredients.supplier_id = suppliers.supplier_id
where suppliers.name like '%atty%'
*/

/*SELECT * from orders
where staff_id = 1;
*/

/*SELECT s.first_name, s.last_name, COUNT(o.order_id) as total From orders o
join staff s on o.staff_id = s.staff_id
GROUP BY s.staff_id;

SELECT Date(order_date) as DATE, COUNT(total_price) AS revenue from orders
GROUP BY date
ORDER BY date ;
*/

/*SELECT ingredients.name, recipeitems.quantity_needed FROM recipeitems
JOIN menuitems on menuitems.item_id = recipeitems.item_id
JOIN ingredients on ingredients.ingredient_id = recipeitems.ingredient_id
WHERE menuitems.name = 'Bacon Cheeseburger'*/

SELECT menu.name, COUNT(orderitems.quantity) From orderitems
join menuitems menu on menu.item_id = orderitems.item_id
GROUP BY menu.name


