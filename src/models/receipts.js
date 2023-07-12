const receipt1 =
  {
    console: 'xbox',
    games: {
      g1: 'Halo',
      g2: 'Gears of War',
      g3: 'Madden',
      g4: 'Fable',
      accessories: [
        'controller', 'headset'
      ],
      cost: 500
    },
    paid: false
  }



const receipt2 = {
  console: 'Playstation',
  games: {
    g1: 'SpiderMan',
    g2: 'Final Fantasy',
    g3: 'God of War',
    g4: 'Metal Gear',
    accessories: [
      'controller', 'headset' ,
    ],

    cost: 500
  },
  paid: false
}




const receipt3 = {
  console: 'Nintendo',
  games: {
    g1: 'Mario Kart',
    g2: 'Legend of Zelda',
    g3: 'Smash Bros',
    g4: "Mega Man Zero",
    accessories: [
      'controller', 'headset', 
    ],
    cost: 300
  },
  paid: true
}
module.exports = [receipt1,receipt2,receipt3]