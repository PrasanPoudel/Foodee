const FoodData = [
  {
    id: 1,
    img: "/Food/Onion Pizza.png",
    name: "Onion Pizza",
    price: 250,
    desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
    category: "Lunch",
    rating: 4.5,
    recipe: "To prepare Onion Pizza, start by preheating your oven to 475°F (245°C). Roll out your pizza dough on a floured surface to your desired thickness. Spread a generous amount of tomato sauce evenly over the dough. Sprinkle shredded mozzarella cheese on top, followed by a layer of fresh onion slices. Bake the pizza in the preheated oven for 12-15 minutes or until the crust is golden brown and the cheese is bubbly. Remove from oven, slice, and enjoy!"
  },
  {
    id: 2,
    img: "/Food/Margherita Pizza.png",
    name: "Margherita Pizza",
    price: 270,
    desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
    category: "Lunch",
    rating: 4.2,
    recipe: "To prepare Margherita Pizza, preheat your oven to 500°F (260°C). Roll out the pizza dough and transfer it to a pizza stone or baking sheet. Spread a thin layer of tomato sauce over the dough. Arrange fresh tomato slices and basil leaves evenly. Sprinkle shredded mozzarella cheese on top and drizzle with olive oil. Bake for 10-12 minutes or until the crust is crispy and the cheese is melted and bubbly. Remove from oven, let cool slightly, slice, and serve."
  },
  {
    id: 3,
    img: "/Food/Pepperoni Pizza.png",
    name: "Pepperoni Pizza",
    price: 200,
    desc: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
    category: "Lunch",
    rating: 4.6,
    recipe: "To prepare Pepperoni Pizza, preheat your oven to 475°F (245°C). Roll out the pizza dough and transfer it to a pizza stone or baking sheet. Spread tomato sauce evenly over the dough. Arrange slices of pepperoni on top and sprinkle generously with shredded mozzarella cheese. Bake for 12-15 minutes or until the crust is golden brown and the cheese is bubbly. Remove from oven, slice, and enjoy!"
  },
  {
    id: 4,
    img: "/Food/Mushroom and Spinach Pizza.png",
    name: "Mushroom and Spinach Pizza",
    price: 240,
    desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
    category: "Lunch",
    rating: 4.2,
    recipe: "To prepare Mushroom and Spinach Pizza, preheat your oven to 475°F (245°C). Roll out the pizza dough and transfer it to a pizza stone or baking sheet. Spread a layer of tomato sauce over the dough. Top with sautéed mushrooms and fresh spinach leaves. Sprinkle shredded mozzarella cheese on top and add a touch of grated Parmesan cheese if desired. Bake for 12-15 minutes or until the crust is golden and the cheese is melted. Remove from oven, slice, and serve hot."
  },
  {
    id: 5,
    img: "/Food/BBQ Chicken Pizza.png",
    name: "BBQ Chicken Pizza",
    price: 350,
    desc: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
    category: "Lunch",
    rating: 4.8,
    recipe: "To prepare BBQ Chicken Pizza, preheat your oven to 475°F (245°C). Roll out the pizza dough and transfer it to a pizza stone or baking sheet. Spread a layer of barbecue sauce over the dough. Top with cooked and shredded chicken, sliced red onions, and a mix of shredded mozzarella and cheddar cheeses. Bake for 12-15 minutes or until the crust is golden and the cheese is bubbly. Remove from oven, let cool slightly, slice, and serve."
  },
  {
    id: 6,
    img: "/Food/Classic Pancakes.png",
    name: "Classic Pancakes",
    price: 100,
    desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
    category: "Breakfast",
    rating: 4.5,
    recipe: "To prepare Classic Pancakes, start by heating a non-stick skillet or griddle over medium heat. In a bowl, whisk together 1 cup of all-purpose flour, 2 tablespoons of sugar, 2 teaspoons of baking powder, and a pinch of salt. In another bowl, whisk together 1 cup of milk, 1 large egg, and 2 tablespoons of melted butter. Pour the wet ingredients into the dry ingredients and stir until just combined (batter may be slightly lumpy). Lightly grease the skillet or griddle with butter or cooking spray. Pour about 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface and the edges look set, about 2 minutes. Flip and cook until golden brown, about 1-2 minutes more. Serve hot with maple syrup and butter."
  },
  {
    id: 7,
    img: "/Food/Egg and Bacon Croissant.png",
    name: "Egg and Bacon Croissant",
    price: 150,
    desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
    category: "Breakfast",
    rating: 4.2,
    recipe: "To prepare Egg and Bacon Croissant, start by preheating your oven to 350°F (175°C). Slice open a croissant horizontally without completely separating the halves. Place the croissant on a baking sheet, cut side up. Beat 2 eggs with a pinch of salt and pepper. Heat a non-stick skillet over medium heat and add a knob of butter. Pour in the beaten eggs and scramble until just set. Remove from heat. Layer the scrambled eggs, crispy bacon slices, and a slice of melted cheese inside the croissant. Close the croissant and wrap it loosely in aluminum foil. Bake for 5-7 minutes or until heated through and the cheese is melted. Remove from oven, unwrap, and serve warm."
  },
  {
    id: 8,
    img: "/Food/Greek Yogurt Parfait.png",
    name: "Greek Yogurt Parfait",
    price: 110,
    desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
    category: "Breakfast",
    rating: 4.1,
    recipe: "To prepare a delightful Greek Yogurt Parfait, start by mixing 1 cup of plain Greek yogurt with 1 tablespoon of honey (adjust to taste) and optionally, 1 teaspoon of vanilla extract for enhanced flavor. In a serving glass or jar, begin layering with a spoonful of the yogurt mixture, followed by a generous sprinkle of granola for texture. Add a layer of freshly diced kiwi and halved green grapes. Repeat these layers until the glass is nearly full, finishing with a final layer of yogurt on top. For an added nutritional boost, sprinkle chia seeds over the last yogurt layer and garnish with fresh mint leaves if desired. Chill the parfaits in the refrigerator for at least 30 minutes before serving to allow the flavors to blend. This Greek Yogurt Parfait not only looks appealing with its colorful layers but also offers a delicious and wholesome option for breakfast or a healthy snack anytime."
  },
  {
    id: 9,
    img: "/Food/Avocado Toast.png",
    name: "Avocado Toast",
    price: 150,
    desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
    category: "Breakfast",
    rating: 4.6,
    recipe: "To prepare Avocado Toast, start by toasting whole grain bread slices until golden and crispy. Mash ripe avocados with a fork and spread a generous amount on each toasted slice. Sprinkle with sea salt and red pepper flakes to taste. Optionally, drizzle with a squeeze of fresh lemon juice or top with a poached egg for added flavor and protein. Serve immediately for a delicious and satisfying breakfast or snack."
  },
  {
    id: 10,
    img: "/Food/Fruit and Nut Oatmeal.png",
    name: "Fruit and Nut Oatmeal",
    price: 120,
    desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
    category: "Breakfast",
    rating: 4.5,
    recipe: "To prepare Fruit and Nut Oatmeal, bring 1 cup of water (or milk) to a boil in a small saucepan. Stir in 1/2 cup of rolled oats and reduce heat to medium-low. Cook, stirring occasionally, for about 5 minutes or until oats are tender and the mixture thickens. Remove from heat and stir in a handful of mixed fruits (such as berries, sliced bananas, or diced apples) and nuts (such as almonds, walnuts, or pecans). Drizzle with honey or maple syrup to taste. Serve warm, optionally garnished with additional fruits, nuts, or a sprinkle of cinnamon."
  },
  {
    id: 11,
    img: "/Food/Grilled Salmon.png",
    name: "Grilled Salmon",
    price: 230,
    desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
    category: "Dinner",
    rating: 4.5,
    recipe: "To prepare Grilled Salmon, preheat your grill to medium-high heat. Season salmon fillets with salt, pepper, and your favorite herbs (such as dill, parsley, or thyme). Lightly oil the grill grates to prevent sticking. Grill salmon for 4-5 minutes per side, or until fish flakes easily with a fork and is cooked to your desired doneness. Serve hot with a side of roasted vegetables (such as asparagus, zucchini, or sweet potatoes) for a nutritious and delicious dinner."
  },
  {
    id: 12,
    img: "/Food/Chicken Alfredo Pasta.png",
    name: "Chicken Alfredo Pasta",
    price: 260,
    desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
    category: "Dinner",
    rating: 4.8,
    recipe: "To prepare Chicken Alfredo Pasta, cook 8 ounces of fettuccine pasta according to package instructions until al dente. Meanwhile, heat a large skillet over medium heat and add 2 tablespoons of butter. Add 1 pound of diced chicken breast and season with salt and pepper. Cook until chicken is browned and cooked through, about 5-7 minutes. Remove chicken from skillet and set aside. In the same skillet, add 2 minced garlic cloves and cook until fragrant, about 1 minute. Stir in 1 cup of heavy cream and bring to a simmer. Reduce heat to low and stir in 1 cup of grated Parmesan cheese until melted and smooth. Season with salt and pepper to taste. Drain the cooked pasta and add it to the skillet with the Alfredo sauce. Toss to coat the pasta evenly. Add the cooked chicken back to the skillet and toss again. Serve hot, optionally garnished with chopped parsley and extra Parmesan cheese."
  },
  {
    id: 13,
    img: "/Food/Vegetable Stir-Fry.png",
    name: "Vegetable Stir-Fry",
    price: 160,
    desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
    category: "Dinner",
    rating: 4.2,
    recipe: "To prepare Vegetable Stir-Fry, heat 2 tablespoons of vegetable oil in a large skillet or wok over medium-high heat. Add 1 diced onion and 2 minced garlic cloves. Stir-fry until onions are translucent, about 2-3 minutes. Add your choice of vegetables (such as bell peppers, broccoli florets, snap peas, carrots, and mushrooms) and stir-fry for another 3-5 minutes or until vegetables are tender-crisp. In a small bowl, whisk together 1/4 cup of soy sauce, 2 tablespoons of hoisin sauce, 1 tablespoon of rice vinegar, 1 tablespoon of honey, and 1 teaspoon of sesame oil. Pour the sauce over the vegetables and toss to coat evenly. Cook for 1-2 minutes more, or until the sauce thickens slightly. Serve hot over steamed rice for a delicious and nutritious dinner."
  },
  {
    id: 14,
    img: "/Food/Grilled Chicken Burrito Bowl.png",
    name: "Grilled Chicken Burrito Bowl",
    price: 230,
    desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
    category: "Dinner",
    rating: 4.6,
    recipe: "To prepare Grilled Chicken Burrito Bowl, start by marinating 1 pound of chicken breast in a mixture of 2 tablespoons of olive oil, 1 tablespoon of chili powder, 1 teaspoon of cumin, 1 teaspoon of paprika, salt, and pepper. Grill the chicken over medium-high heat for 6-7 minutes per side, or until fully cooked. Let the chicken rest for a few minutes before slicing into strips. Meanwhile, cook 1 cup of rice according to package instructions. In a large skillet, heat 1 tablespoon of olive oil over medium heat. Add 1 diced bell pepper and 1 diced red onion. Sauté until vegetables are tender, about 5 minutes. Assemble your burrito bowl by dividing cooked rice among serving bowls. Top with sliced grilled chicken, black beans, sautéed peppers and onions, shredded cheese, and a drizzle of cilantro-lime dressing. Serve hot and enjoy!"
  },
  {
    id: 15,
    img: "/Food/Mushroom Risotto.png",
    name: "Mushroom Risotto",
    price: 180,
    desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
    category: "Dinner",
    rating: 4.5,
    recipe: "To prepare Mushroom Risotto, start by heating 4 cups of chicken or vegetable broth in a saucepan over low heat. In a separate large skillet or Dutch oven, heat 2 tablespoons of olive oil over medium heat. Add 1 diced onion and cook until softened, about 5 minutes. Add 2 minced garlic cloves and cook until fragrant, about 1 minute. Stir in 1 1/2 cups of Arborio rice and cook for 2-3 minutes, stirring frequently, until rice is lightly toasted. Add 1/2 cup of dry white wine and cook, stirring constantly, until absorbed. Begin adding the warm broth, one ladleful at a time, stirring frequently and allowing each addition to be absorbed before adding the next. Continue until rice is creamy and tender, about 20-25 minutes. Stir in 1 cup of sliced sautéed mushrooms, 1/2 cup of grated Parmesan cheese, and 2 tablespoons of chopped fresh parsley. Season with salt and pepper to taste. Serve hot, optionally garnished with additional Parmesan cheese and parsley."
  },
  {
    id: 16,
    img: "/Food/Cheese and Crackers Platter.png",
    name: "Cheese and Crackers Platter",
    price: 140,
    desc: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts. A delightful snack option for sharing or indulging in on your own.",
    category: "Snacks",
    rating: 4.3,
    recipe: "To prepare Cheese and Crackers Platter, arrange a selection of your favorite cheeses (such as cheddar, Gouda, Brie, and blue cheese) on a serving platter or wooden board. Arrange an assortment of crispy crackers (such as water crackers, whole grain crackers, and artisanal breadsticks) alongside the cheeses. Add fresh fruits (such as grapes, sliced apples, and berries) and nuts (such as almonds, walnuts, and cashews) to complement the flavors and textures. Serve at room temperature for an elegant and delicious snack."
  },
  {
    id: 17,
    img: "/Food/Crispy Chicken Wings.png",
    name: "Crispy Chicken Wings",
    price: 180,
    desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
    category: "Snacks",
    rating: 4.4,
    recipe: "To prepare Crispy Chicken Wings, preheat your oven to 425°F (220°C). Line a baking sheet with aluminum foil and place a wire rack on top. In a bowl, toss 2 pounds of chicken wings with 1 tablespoon of baking powder, 1 teaspoon of salt, and 1/2 teaspoon of pepper until evenly coated. Arrange the wings in a single layer on the prepared rack. Bake for 45-50 minutes, turning halfway through, until wings are crispy and golden brown. Remove from oven and let cool for a few minutes before serving. Serve hot with your favorite dipping sauces."
  },
  {
    id: 18,
    img: "/Food/Paneer Tikka Skewers.png",
    name: "Paneer Tikka Skewers",
    price: 150,
    desc: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney, these paneer tikka skewers offer a flavorful and aromatic Indian snack experience.",
    category: "Snacks",
    rating: 4.9,
    recipe: "To prepare Paneer Tikka Skewers, start by preparing the marinade. In a bowl, combine 1 cup of plain yogurt with 1 tablespoon of ginger-garlic paste, 1 tablespoon of lemon juice, 1 teaspoon of ground cumin, 1 teaspoon of ground coriander, 1/2 teaspoon of turmeric powder, 1/2 teaspoon of red chili powder (adjust to taste), and salt to taste. Cut 1 pound of paneer into cubes and add them to the marinade, coating each piece evenly. Cover and refrigerate for at least 1 hour, or overnight for best results. Preheat your grill to medium-high heat and lightly oil the grate. Thread the marinated paneer cubes onto skewers, alternating with pieces of bell peppers, onions, and cherry tomatoes if desired. Grill skewers for 10-12 minutes, turning occasionally, until paneer is lightly charred and vegetables are tender. Serve hot with mint chutney and lemon wedges."
  },
  {
    id: 19,
    img: "/Food/Hummus and Veggie Platter.png",
    name: "Hummus and Veggie Platter",
    price: 100,
    desc: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread. A nutritious and satisfying option for a light and refreshing snack.",
    category: "Snacks",
    rating: 4.4,
    recipe: "To prepare Hummus and Veggie Platter, start by making the hummus. In a food processor, combine 1 can (15 ounces) of chickpeas (drained and rinsed), 1/4 cup of tahini paste, 2 tablespoons of lemon juice, 1-2 garlic cloves (minced), 1/2 teaspoon of ground cumin, 1/4 cup of olive oil, and salt to taste. Blend until smooth, adding 2-4 tablespoons of water as needed to achieve desired consistency. Transfer the hummus to a serving bowl. Arrange a variety of fresh vegetable sticks (such as carrots, cucumbers, bell peppers, and celery) and pita bread wedges around the hummus. Drizzle the hummus with olive oil and sprinkle with paprika or chopped parsley if desired. Serve at room temperature for a delicious and healthy snack."
  },
  {
    id: 20,
    img: "/Food/Fruit Skewers.png",
    name: "Fruit Skewers",
    price: 75,
    desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
    category: "Snacks",
    rating: 4.8,
    recipe: "To prepare Fruit Skewers, start by selecting a variety of fresh fruits such as melons, berries, pineapple, kiwi, and grapes. Wash and cut the fruits into bite-sized chunks or slices. Thread the fruit pieces onto skewers in a colorful pattern. Serve immediately for a refreshing snack, or chill in the refrigerator until ready to serve. Fruit skewers can be enjoyed on their own or served with a yogurt dip or honey for added flavor and sweetness."
  },
];
export default FoodData;
