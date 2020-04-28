import Category from '../models/category';
import Product from '../models/product';

export const CATEGORIES = [
  // id, title, superCategory, active

  // categories
  new Category(1, 'Lightning', null, true,
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiziQogimtJLxP0eODB5W3VRqyrBvsEHpReejOnJkFq42ycZ9H&usqp=CAU', ''),
  new Category(2, 'Electrical Material', null, true,
  'https://miro.medium.com/max/2000/1*6QsLjpU-nDJTjNoxY-qLeg.png', ''),
  new Category(3, 'Electronics Components', null, true,
  'https://www.solidsoft.hr/wp-content/uploads/2015/07/electric.png', ''), //-
  new Category(4, 'Accessories', null, true,
  'https://thumbs.dreamstime.com/z/electricity-logo-electric-icon-vector-design-template-plug-creative-concept-lightning-power-energy-element-electrical-159049010.jpg', ''), //-
  // subcategories
  new Category(5, 'Inside Lights', 1, true,
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiziQogimtJLxP0eODB5W3VRqyrBvsEHpReejOnJkFq42ycZ9H&usqp=CAU', ''), //-
  new Category(6, 'Outside Lights', 1, true,
  'https://miro.medium.com/max/2000/1*6QsLjpU-nDJTjNoxY-qLeg.png', ''), //-
  new Category(7, 'LED', 1, true,
  'https://www.solidsoft.hr/wp-content/uploads/2015/07/electric.png', ''), //-
  new Category(8, 'Sockets', 2, true,
  'https://thumbs.dreamstime.com/z/electricity-logo-electric-icon-vector-design-template-plug-creative-concept-lightning-power-energy-element-electrical-159049010.jpg', ''),
  new Category(9, 'Cables', 2, true,
  'https://miro.medium.com/max/2000/1*6QsLjpU-nDJTjNoxY-qLeg.png', ''),
  // subsubcategories
  new Category(15, 'Socket Regular', 8, true,
  'https://www.solidsoft.hr/wp-content/uploads/2015/07/electric.png', ''), //-
  new Category(16, 'Socket Special', 8, true,
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiziQogimtJLxP0eODB5W3VRqyrBvsEHpReejOnJkFq42ycZ9H&usqp=CAU', ''), //-
  new Category(17, 'Coaxial Cables', 9, true,
  'https://thumbs.dreamstime.com/z/electricity-logo-electric-icon-vector-design-template-plug-creative-concept-lightning-power-energy-element-electrical-159049010.jpg', ''), //-
  new Category(18, 'Multi-conductor Cables', 9, true,
  'https://miro.medium.com/max/2000/1*6QsLjpU-nDJTjNoxY-qLeg.png', ''), //-
];

export const PRODUCTS = [
  // id, code, title, imageUrl, price, quantity, description, categoryId
  new Product(
    1,
    'A-1',
    'Electronic Component 1',
    'https://static2.efcomponentes.com.ar/4960-large_default/dip-switch-5-llaves-piano.jpg',
    9.99,
    15,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    3,
    false
  ),
  new Product(
    2,
    'A-2',
    'Electronic Component 2',
    'https://m.media-amazon.com/images/I/51xj6KR5aLL._AC_UL436_.jpg',
    15.99,
    25,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    3,
    false
  ),
  new Product(
    3,
    'A-3',
    'Electronic Component 3',
    'https://img.favpng.com/13/11/1/electronic-component-passivity-electronics-png-favpng-FUQXxv9AjgK6pgNhvF8Yq3Wkq.jpg',
    15.99,
    25,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    3,
    false
  ),
  new Product(
    4,
    'B-1',
    'Electronic Accessory Part 1',
    'https://images-na.ssl-images-amazon.com/images/I/81Wsg3whCfL._AC_SX466_.jpg',
    50,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    4,
    false
  ),
  new Product(
    5,
    'B-2',
    'Electronic Accessory Part 2',
    'https://images-eu.ssl-images-amazon.com/images/I/71LW32PfEOL._AC_SS350_.jpg',
    9.99,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    4,
    false
  ),
  new Product(
    6,
    'C-1',
    'Inside lightning system',
    'https://www.energy.gov/sites/prod/files/styles/open_graph_image/public/lights_leds_hires.jpg?itok=8BhUtlsv',
    99.99,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    5,
    false
  ),
  new Product(
    7,
    'D-1',
    'Outside lightning system',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR48OXNk_fYc3_b8dWIjpAmwV-zIqWxnB7sGNusX8OzjGu74oIu&usqp=CAU',
    199.99,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    6,
    false
  ),
  new Product(
    8,
    'E-1',
    'Socket Regular 1',
    'http://www.elektroprizma.ba/elektromaterijal/uticnice-prekidaci-mikro/ek3.jpg',
    5.99,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    15,
    false
  ),
  new Product(
    9,
    'E-2',
    'Socket Regular 2',
    'http://www.elektroprizma.ba/elektromaterijal/uticnice-prekidaci-mikro/ek1.jpg',
    7.99,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    15,
    false
  ),
  new Product(
    10,
    'D-1',
    'Socket Special 1',
    'http://www.elektroprizma.ba/elektromaterijal/uticnice-prekidaci-mikro/ek5.jpg',
    17.99,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    16,
    false
  ),
  new Product(
    11,
    'D-2',
    'Socket Special 2',
    'http://www.elektroprizma.ba/elektromaterijal/uticnice-prekidaci-mikro/ek2.jpg',
    21.99,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    16,
    false
  ),
  new Product(
    12,
    'T-1',
    'Coaxial Cables 100',
    'https://ae01.alicdn.com/kf/HTB1G8yBclGE3KVjSZFhq6AkaFXaM/Male-SMA-Plug-To-Female-TS9-Jack-Adapter-RF-Antenna-Coax-Cable-15cm.jpg_q50.jpg',
    121.99,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    17,
    false
  ),
  new Product(
    13,
    'T-2',
    'Coaxial Cables 500',
    'https://www.eurodk.ee/images/catalogue/1827/lmr400_2.jpg',
    199.99,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    17,
    false
  ),
  new Product(
    14,
    'F-1',
    'Multi-conductor Cable 100',
    'https://image.made-in-china.com/202f0j00ugCUSFpBLckJ/Rvv-5-Core-Multi-Conductor-Cable-Electrical-Wire-for-Sale.jpg',
    300,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    18,
    false
  ),
  new Product(
    15,
    'F-2',
    'Multi-conductor Cable 500',
    'https://p.globalsources.com/IMAGES/PDT/BIG/646/B1078216646.jpg',
    400,
    5,
    'Super cool electronic component for some super cool lightening. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    18,
    false
  )
];

