const data = [
  {
    id: 1,
    name: 'pizza',
    imageUrl:
      'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    quote:
      'WHEN LIFE GIVE YOU PIZZA, EAT IT QUICKLY BEFORE ANYONE REALIZES THAT YOU HAVE IT',
    gif:
      'https://media1.tenor.com/images/ef35a0cd507f15a5f39805079bff1d49/tenor.gif?itemid=16204644',
  },
  {
    id: 2,
    name: 'Ice Cream',
    imageUrl:
      'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    quote: 'I never say no for ice cream',
    gif:
      'https://media1.tenor.com/images/7bff9319fb7f5b8697a7fe56a1d253f6/tenor.gif?itemid=16107230',
  },
  {
    id: 3,
    name: 'Burger',
    imageUrl:
      'https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    quote:
      'YOU KNOW WHAT? PART OF ME JUST WANTS TO EAT A BURGER AND GO TO SLEEP',
    gif:
      'https://media1.tenor.com/images/0e37a78c59fc19f73e3ed4ee436781dc/tenor.gif?itemid=14734589',
  },
  {
    id: 4,
    name: 'Crepe',
    imageUrl:
      'https://images.unsplash.com/photo-1517306085770-871ff74b2274?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    quote: 'Everyday is a crepe day',
    gif:
      'https://media1.tenor.com/images/1674bd8e9300be629d3658d547886687/tenor.gif?itemid=4782475',
  },
  {
    id: 5,
    name: 'Sushi',
    imageUrl:
      'https://images.unsplash.com/photo-1556906905-4f33f9367b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    quote: 'UNLESS YOU ARE A  SUSHI, THE ANSWER IS YES, I CAN LIVE WITHOUT YOU',
    gif:
      'https://media1.tenor.com/images/ed1460c6485245eb7334603d792edde8/tenor.gif?itemid=16352456',
  },
  {
    id: 6,
    name: 'Waffles',
    imageUrl:
      'https://images.unsplash.com/photo-1565159390550-84e50f1fe4f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    quote: 'The weekends are for waffles and best friends',
    gif:
      'https://media1.tenor.com/images/a404515c9e858a5ee90dd88d4b654b31/tenor.gif?itemid=15306319',
  },
  {
    id: 7,
    name: 'Pasta',
    imageUrl:
      'https://images.unsplash.com/photo-1568460714638-37181f102efd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    quote: 'THERE IS NO MOMENT IN LIFE THAT CAN’T BE IMPROVED WITH PASTA',
    gif:
      'https://media1.tenor.com/images/bfaeb01471961fd37a3a09cfab96e221/tenor.gif?itemid=5040490',
  },
  {
    id: 8,
    name: 'Cake',
    imageUrl:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    quote: `You can't buy happiness, but you can buy cakes and that is pretty much the same thing`,
    gif:
      'https://media1.tenor.com/images/7f2797863e2d4a82549fdf9c9c30daed/tenor.gif?itemid=5441332',
  },
  {
    id: 9,
    name: 'Salad',
    imageUrl:
      'https://images.unsplash.com/photo-1538301258798-f3fdb8bbc3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    quote: `YOU DON'T WIN FRIENDS WITH SALAD`,
    gif:
      'https://media1.tenor.com/images/5aa9400f920560a195ba342a4d612b50/tenor.gif?itemid=9158914',
  },
  {
    id: 10,
    name: 'Cupcake',
    imageUrl:
      'https://images.unsplash.com/photo-1566864399117-22c449669089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    quote: 'There were some problems only coffee and cupcake could fix',
    gif:
      'https://media1.tenor.com/images/d5b689d4e86c4962f11d778991a810a5/tenor.gif?itemid=5033216',
  },

  {
    id: 11,
    name: 'Steak',
    imageUrl:
      'https://images.unsplash.com/photo-1579366948929-444eb79881eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    quote: 'STEAK MAKES ANYTHING POSSIBLE',
    gif:
      'https://media1.tenor.com/images/5741f9eb83c365a4b94ec119ccab59a5/tenor.gif?itemid=5445952',
  },

  {
    id: 12,
    name: 'Croissants',
    imageUrl:
      'https://images.unsplash.com/photo-1584981227319-86dc9813ed48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
    quote:
      'Start each day with a grateful heart, good friends, and grabbing croissants at breakfast',
    gif:
      'https://media1.tenor.com/images/140d1e40811ea00101876ae3b078c9dc/tenor.gif?itemid=16714462',
  },
];

export default data;
