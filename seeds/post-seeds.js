const { Post } = require('../models');

const postData = [
    {
        title: "Law passes in USA removing mandate for animal testing on all new drugs",
        content:"The new FDA Modernization Act 2.0, which was signed into law in December 2022 allows drug companies to use other methods of testing, such as miniature tissue models and microfluidic chips, which mimic organ functions by using human cells.",
        user_id: 1
    },
    {
        title: "New Penguin Colony is Found- From Space!",
        content:"A new penguin colony has been discovered, completely accidentally, from satellite photos taken of Antarctica from space. The penguin colony was identified from space through their droppings, which had stained the ice.",
        user_id: 2
    },
    {
        title: "Cargo Ships May Become More Fuel Efficient- With The Help of Kites",
        content:"The kite in question has been named Seawing, and may help ships reduce their fuel emissions by between 10 and 40 percent. The 2,700 ft parafoil works like most kites do, by harnessing the power of the wind. It flies at an altitude of 200 metres, which allows it to harness stronger and steadier winds.",
        user_id: 3
    },
    {
        title: "A380 completes test flight using 100% cooking oil",
        content:"The largest passenger plane in the world, the Airbus A380 , has just completed a test flight running completely on cooking oil. The double-decker A380 took off from Toulouse in southern France on March 25th 2022, and the flight lasted for 3 hours before touching down in the same place. Later that day a second test flight using the same fuel took off from Toulouse and landed in Nice, France. The fuel is referred to as Sustainable Aviation Fuel (SAF) and is made up of used cooking oil and other waste fats. Using SAFs in jet fuel isn’t new with airlines such as KLM currently using a blend of traditional jet fuel and up to 50% SAF on some international flights.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;