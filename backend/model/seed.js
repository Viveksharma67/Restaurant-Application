const mongoose = require('mongoose');
const Item = require('./item'); // Ensure path is correct

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/restorent', { useNewUrlParser: true, useUnifiedTopology: true });

// Sample data for menu items
const items = [
  // Veg Noodles
  { name: 'Veg Hakka Noodles', price: 10, category: 'Noodles', imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg' },
  { name: 'Chow Mein', price: 11, category: 'Noodles', imageUrl: 'https://i.ytimg.com/vi/6-1-sEW_6ko/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5eaEzC3klK_KNz2hF5cQr2QRHww' },
  { name: 'Singapore Noodles', price: 12, category: 'Noodles', imageUrl: 'https://www.connoisseurusveg.com/wp-content/uploads/2021/12/singapore-noodles-sq-1-of-1.jpg' },
  { name: 'Veg Thai Noodles', price: 12, category: 'Noodles', imageUrl: 'https://fullofplants.com/wp-content/uploads/2022/03/easy-vegan-pad-thai-noodle-dish-with-bean-sprouts-thumb.jpg' },
  { name: 'Spicy Veg Noodles', price: 11, category: 'Noodles', imageUrl: 'https://wickedkitchen.com/wp-content/uploads/2020/11/untitled-1-7.jpg' },
  { name: 'Veg Lo Mein', price: 10, category: 'Noodles', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUx88Eg1dVBV-FIXI5DLoO4oEyp1CS3A9HQ&s' },
  { name: 'Szechuan Noodles', price: 13, category: 'Noodles', imageUrl: 'https://www.foodhubrestaurant.com/images/thumbs/0000907_veg-schezwan-noodles_600.jpeg' },
  { name: 'Veg Garlic Noodles', price: 11, category: 'Noodles', imageUrl: 'https://www.whiskaffair.com/wp-content/uploads/2020/02/Chilli-Garlic-Noodles-2-3.jpg' },
  { name: 'Veg Pancit Canton', price: 12, category: 'Noodles', imageUrl: 'https://www.sidechef.com/recipe/644a7a82-8cef-4e31-8aae-a964ee01ee9a.jpeg' },
  { name: 'Veg Udon Noodles', price: 14, category: 'Noodles', imageUrl: 'https://www.justonecookbook.com/wp-content/uploads/2024/03/Kake-Udon-7549-I-1.jpg' },

  // Veg Pizza
  { name: 'Margherita Pizza', price: 10, category: 'Pizza', imageUrl: 'https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=0&k=20&c=kL0Vhg2XKBjEl__iG8sFv31WTiahdpLc3rTDtNZuD2g=' },
  { name: 'Veggie Supreme Pizza', price: 12, category: 'Pizza', imageUrl: 'https://static.vecteezy.com/system/resources/previews/024/342/930/large_2x/delicious-veggie-supreme-pizza-toppings-loaded-with-extra-fresh-ingredients-on-wooden-cutting-board-foodgraphy-generative-ai-photo.jpg' },
  { name: 'Mushroom Pizza', price: 11, category: 'Pizza', imageUrl: 'https://sinfullyspicy.com/wp-content/uploads/2022/02/Tandoori-Mushroom-Pizza-Featured-Image.jpg' },
  { name: 'Spinach & Feta Pizza', price: 13, category: 'Pizza', imageUrl: 'https://t4.ftcdn.net/jpg/09/18/90/45/360_F_918904570_Enh8OZTxXYxDXbVVmPPaCaRCGpL2Li9T.jpg' },
  { name: 'Capricciosa Pizza', price: 12, category: 'Pizza', imageUrl: 'https://t4.ftcdn.net/jpg/07/20/15/27/360_F_720152787_LJ3pqRPHnL1dcPOPxPhrohy2pjsiBsna.jpg' },
  { name: 'Pesto Veggie Pizza', price: 14, category: 'Pizza', imageUrl: 'https://itsallgoodvegan.com/wp-content/uploads/2020/06/IMG_5449.jpg' },
  { name: 'Roasted Veggie Pizza', price: 13, category: 'Pizza', imageUrl: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A5A4E824-142D-4824-B174-A6D607382F31/Derivates/eea3c774-a008-46fc-aa2b-35f7deb5491b.jpg' },
  { name: 'BBQ Veggie Pizza', price: 12, category: 'Pizza', imageUrl: 'https://www.goldnplump.com/sites/default/files/GNP_BBQ%20Chicken%20and%20Veggie%20Pizza.jpg' },
  { name: 'Margherita with Basil Pizza', price: 11, category: 'Pizza', imageUrl: 'https://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg' },
  { name: 'Four Cheese Pizza', price: 15, category: 'Pizza', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKe64dGQqXuzACczrUWWQDk1YIgCsFvjiMDg&s' },

  // Veg Burgers
  { name: 'Classic Veg Burger', price: 8, category: 'Burger', imageUrl: 'https://storage.googleapis.com/shy-pub/296683/1706723372044_SKU-0151_0.jpg' },
  { name: 'Cheese Veg Burger', price: 9, category: 'Burger', imageUrl: 'https://img.freepik.com/premium-photo/amazing-delicious-cheeseburger-with-jumping_728322-403.jpg' },
  { name: 'Spicy Veg Burger', price: 10, category: 'Burger', imageUrl: 'https://static.vecteezy.com/system/resources/previews/030/655/157/non_2x/veggie-burger-on-wholegrain-bun-with-lettuce-tomato-free-photo.jpg' },
  { name: 'Paneer Veg Burger', price: 12, category: 'Burger', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHf-WmuNiahT0zx0_sg4a15rCEu3YvAACahA&s' },
  { name: 'BBQ Veg Burger', price: 11, category: 'Burger', imageUrl: 'https://www.archanaskitchen.com//images/archanaskitchen/World_Sandwiches_Burgers_Wraps/Roasted_Vegetable_Burger_Recipe_with_Hummus-1.jpg' },
  { name: 'Avocado Veg Burger', price: 12, category: 'Burger', imageUrl: 'https://www.shutterstock.com/shutterstock/videos/1076598437/thumb/1.jpg?ip=x480' },
  { name: 'Southwestern Veg Burger', price: 13, category: 'Burger', imageUrl: 'https://images.squarespace-cdn.com/content/v1/56cb2b157da24faa1f771305/1502740640947-0I6KRYPO6T0HNUSGZX69/VEGGIE+BURGER-6700-2.jpg?format=1500w' },
  { name: 'Greek Veg Burger', price: 12, category: 'Burger', imageUrl: 'https://tastyasfit.com/cdn/shop/articles/333CC303-034D-4B92-977A-DA66CC82F39E_1200x.jpg?v=1626378890' },
  { name: 'Falafel Veg Burger', price: 11, category: 'Burger', imageUrl: 'https://assets.biggreenegg.eu/app/uploads/2021/03/05090934/topimage-vega-falafelburger-2021m03-800x533-1.jpg' },

  // Veg Pasta
  { name: 'Veg Spaghetti', price: 10, category: 'Pasta', imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/34418_sfs-spaghetti-with-spring-vegetables-reshoot-4.jpg' },
  { name: 'Veg Penne Arrabbiata', price: 11, category: 'Pasta', imageUrl: 'https://vaya.in/recipes/wp-content/uploads/2018/02/Vegetarian-Penne-Arrabiata-Pasta.jpg' },
  { name: 'Alfredo Pasta', price: 12, category: 'Pasta', imageUrl: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Penne_Pasta_Recipe_In_Alfredo_Sauce_With_Roasted_Mushrooms-1.jpg' },
  { name: 'Lasagna', price: 13, category: 'Pasta', imageUrl: 'https://myfoodstory.com/wp-content/uploads/2019/11/Easy-Vegetarian-Lasagna-5.jpg' },
  { name: 'Veg Pesto Pasta', price: 11, category: 'Pasta', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAUqeACFa5wttpP6omMIe4RFnUbZAllvsFw&s' },
  { name: 'Veg Carbonara', price: 12, category: 'Pasta', imageUrl: 'https://vikalinka.com/wp-content/uploads/2023/10/Vegetarian-Mushroom-Carbonara-8-Edit-683x1024.jpg' },
  { name: 'Veg Baked Ziti', price: 13, category: 'Pasta', imageUrl: 'https://www.purelykaylie.com/wp-content/uploads/2021/02/Vegan-Baked-Ziti-24.jpg' },
  { name: 'Veg Mac and Cheese', price: 10, category: 'Pasta', imageUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/wpconnatixthumbnailsprod/VeggieMacaroniAndCheeseDIYD37151050321H_thumbnail.jpeg' },
  { name: 'Veg Ravioli', price: 14, category: 'Pasta', imageUrl: 'https://images.eatsmarter.com/sites/default/files/styles/max_size/public/vegetarian-ravioli-476083.jpg' },
  { name: 'Veg Farfalle', price: 11, category: 'Pasta', imageUrl: 'https://foodoclock.onlineparked.com/wp-content/uploads/2022/09/veg-pasta.webp' },

  // Veg Manchurian
  { name: 'Veg Manchurian', price: 10, category: 'Manchurian', imageUrl: 'https://media.istockphoto.com/id/1208083887/photo/freshly-prepared-veg-manchurian-with-a-bowl-of-fried-rice.jpg?s=612x612&w=0&k=20&c=nTtgKk-SSQAh1E0Pz8SnpGjqMRSIIXM6XiDHIsd5LDQ=' },
  { name: 'Veg Manchurian Balls', price: 11, category: 'Manchurian', imageUrl: 'https://vegecravings.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10.jpg' },
  { name: 'Spicy Veg Manchurian', price: 12, category: 'Manchurian', imageUrl: 'https://t4.ftcdn.net/jpg/08/24/72/15/360_F_824721538_Cxhdoj1bTpOwN1BOgqVJxucWmwWZgPCm.jpg' },
  { name: 'Veg Manchurian Gravy', price: 11, category: 'Manchurian', imageUrl: 'https://kannanskitchen.com/wp-content/uploads/2021/05/IMG_20200927_142549_Bokeh-1024x712.jpg' },
  { name: 'Crispy Veg Manchurian', price: 12, category: 'Manchurian', imageUrl: 'https://www.shutterstock.com/image-photo/veg-manchurian-popular-indochinese-food-260nw-2016382481.jpg' },
  { name: 'Garlic Veg Manchurian', price: 11, category: 'Manchurian', imageUrl: 'https://www.shutterstock.com/image-photo/veg-manchurian-vegetable-balls-dipped-260nw-2490980725.jpg' },
  { name: 'Veg Manchurian with Noodles', price: 13, category: 'Manchurian', imageUrl: 'https://i.ytimg.com/vi/9y2B9n7vbYw/maxresdefault.jpg' },
  { name: 'Veg Manchurian with Rice', price: 12, category: 'Manchurian', imageUrl: 'https://i.ytimg.com/vi/KSmI5jkBQFw/sddefault.jpg' },
  { name: 'Manchurian with Fried Rice', price: 14, category: 'Manchurian', imageUrl: 'https://i.ytimg.com/vi/mUEMlVqK66s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzZaGfqn1mUNAW7mVW2h8zvlV_Sw' },
  { name: 'Sweet and Sour Veg Manchurian', price: 13, category: 'Manchurian', imageUrl: 'https://www.shutterstock.com/image-photo/veg-manchurian-gravy-popular-food-600w-1133210174.jpg' },

  // Veg Momos
  { name: 'Steamed Veg Momos', price: 8, category: 'Momos', imageUrl: 'https://storeassets.im-cdn.com/temp/cuploads/ap-south-1%3Aabd0d01f-2fd7-4231-8a23-b7b68eaf18de/bakasurmomos/products/1637829873261Veg-Steam-Momos.jpeg' },
  { name: 'Fried Veg Momos', price: 9, category: 'Momos', imageUrl: 'https://img.freepik.com/premium-photo/veg-fried-momo-with-sauce-served-rustic-wooden-background-selective-focus_726363-1106.jpg' },
  { name: 'Spicy Veg Momos', price: 10, category: 'Momos', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-K63EURKaBe99f7N4uhE8GXJEWgPSVTMRw&s' },
  { name: 'Cheese Veg Momos', price: 11, category: 'Momos', imageUrl: 'https://indianheartbeat.in/wp-content/uploads/2023/01/6b106be2fe5ad0b986a3450a20b94f51-scaled-1.webp' },
  { name: 'Garlic Veg Momos', price: 10, category: 'Momos', imageUrl: 'https://www.yumcurry.com/wp-content/uploads/2021/05/chilli-garlic-momos-feature-image.jpg' },
  { name: 'Sichuan Veg Momos', price: 12, category: 'Momos', imageUrl: 'https://img.freepik.com/premium-photo/veg-schezwan-momo-with-sauce-served-rustic-wooden-background-selective-focus_726363-941.jpg' },
  { name: 'Veg Momos with Chutney', price: 9, category: 'Momos', imageUrl: 'https://i0.wp.com/beextravegant.com/wp-content/uploads/2022/10/IMG_0481-e1666185010404-716x1024.jpg?resize=716%2C1024&ssl=1' },
  { name: 'Crispy Veg Momos', price: 11, category: 'Momos', imageUrl: 'https://img.freepik.com/premium-photo/veg-crispy-kurkure-momos-with-chutney-top-view-generative-ai_802140-412.jpg' },
  { name: 'Veg Momos Platter', price: 12, category: 'Momos', imageUrl: 'https://i.pinimg.com/736x/8b/c5/93/8bc59360cb5c2689b91a3163640a2bf7.jpg' },
  { name: 'Steamed Veg Momos with Sauce', price: 10, category: 'Momos', imageUrl: 'https://cdn.pixabay.com/photo/2024/05/21/23/54/ai-generated-8779349_1280.jpg' },

  // Veg Indian Cuisine
  { name: 'Paneer Butter Masala', price: 12, category: 'Indian Cuisine', imageUrl: 'https://img.freepik.com/premium-photo/delicious-paneer-butter-masala-photography_928503-851.jpg' },
  { name: 'Chole Bhature', price: 11, category: 'Indian Cuisine', imageUrl: 'https://t3.ftcdn.net/jpg/09/58/13/36/360_F_958133626_nYE8i4uRqntKVMxAaeRiI1iaMZuKVccN.jpg' },
  { name: 'Aloo Gobi', price: 10, category: 'Indian Cuisine', imageUrl: 'https://media.istockphoto.com/id/1091565958/photo/spicy-potato-curry-indian-recipe.jpg?s=612x612&w=0&k=20&c=km419oVyfT731IrxaqSqUYGS5vgN1K1f1Xb32sw1Jms=' },
  { name: 'Palak Paneer', price: 12, category: 'Indian Cuisine', imageUrl: 'https://t4.ftcdn.net/jpg/06/13/65/75/360_F_613657567_NiNPLoP5GB9cZfoom8lWUgZnN01UtXA0.jpg' },
  { name: 'Dal Tadka', price: 11, category: 'Indian Cuisine', imageUrl: 'https://spicecravings.com/wp-content/uploads/2021/05/Dal-Tadka-Featured.jpg' },
  { name: 'Vegetable Biryani', price: 13, category: 'Indian Cuisine', imageUrl: 'https://t3.ftcdn.net/jpg/06/79/32/20/360_F_679322055_V9VMUiqizXOoMfnPpu8PbZAczItHd1NA.jpg' },
  { name: 'Aloo Paratha', price: 10, category: 'Indian Cuisine', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjA1SNhQTU86HV5F3orEcrmf_BPrpmtrV8UQ&s' },
  { name: 'Kadai Paneer', price: 12, category: 'Indian Cuisine', imageUrl: 'https://www.whiskaffair.com/wp-content/uploads/2020/08/Kadai-Paneer-2-3-500x500.jpg' },
  { name: 'Daal Chawal', price: 11, category: 'Indian Cuisine', imageUrl: 'https://veganbell.com/wp-content/uploads/2021/09/Dal-Chawal-7.jpg' },
  { name: 'Vegetable Pakora', price: 9, category: 'Indian Cuisine', imageUrl: 'https://sukhis.com/app/uploads/2013/03/image7-1024x684.jpg' },

  // Veg Sandwich
  { name: 'Grilled Veg Sandwich', price: 8, category: 'Sandwich', imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe.jpg' },
  { name: 'Paneer Sandwich', price: 9, category: 'Sandwich', imageUrl: 'https://media.istockphoto.com/id/1085141418/photo/paneer-tikka-sandwich-is-a-popular-indian-version-of-sandwich-using-cottage-cheese-curry-with.jpg?s=612x612&w=0&k=20&c=DmNP5IGd4E9CQi9TfkQqHQ8riYw-PtNr6lqf-C5KuW4=' },
  { name: 'Veg Club Sandwich', price: 10, category: 'Sandwich', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/3/XB/HO/JJ/12004163/veg-club-sandwich-500x500.jpeg' },
  { name: 'Veg Cheese Sandwich', price: 9, category: 'Sandwich', imageUrl: 'https://blog.swiggy.com/wp-content/uploads/2024/06/Image-1_Veg-Cheese-Grilled-Sandwich-1024x538.png' },
  { name: 'Spicy Veg Sandwich', price: 10, category: 'Sandwich', imageUrl: 'https://static.vecteezy.com/system/resources/previews/044/179/737/non_2x/two-sandwiches-with-a-side-of-salad-and-a-bowl-of-sauce-photo.jpeg' },
  { name: 'Veg Caesar Sandwich', price: 11, category: 'Sandwich', imageUrl: 'https://media.istockphoto.com/id/516817796/photo/homemade-chicken-caesar-sandwich.jpg?s=612x612&w=0&k=20&c=prCi3BfQpgv2bqcqUk0DymTbGRTqQ7w9uT7ebeNKnnk=' },
  { name: 'Avocado Veg Sandwich', price: 12, category: 'Sandwich', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCwwtzExcqimJFDz8sKX5UDOtx-Cx5U5u2A&s' },
  { name: 'Hummus Veg Sandwich', price: 10, category: 'Sandwich', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzFUybGIwOMMdfdk9J-AdE3Yfv-LI_RCWKw&s' },
  { name: 'Veg Panini', price: 11, category: 'Sandwich', imageUrl: 'https://thumbs.dreamstime.com/b/veg-cheese-grilled-sandwich-served-ketchup-isolated-over-rustic-wooden-background-selective-focus-224440448.jpg' },
  { name: 'Italian Veg Sandwich', price: 12, category: 'Sandwich', imageUrl: 'https://thumbs.dreamstime.com/b/gourmet-italian-sandwich-salami-arugula-mustard-artisan-bread-319595654.jpg' }
];

// Seed the data
const seedDB = async () => {
  await Item.deleteMany({}); // Clear existing items
  await Item.insertMany(items); // Insert new items
  console.log('Database seeded with menu items!');
  mongoose.connection.close(); // Close connection
};

seedDB();
