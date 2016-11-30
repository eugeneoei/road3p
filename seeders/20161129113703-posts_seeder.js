'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('posts', [
        // GYMS
        {
            title: 'The Forge',
            address: '114 Lavender Street, #05-79, CT Hub 2',
            latitude: 1.3115464,
            longitude: 103.8626995,
            category: 'Gyms',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/11824976_1478501619129254_7487817115764816894_n.jpg?oh=8fd52bb3731076cf7c6e40da3a4a817c&oe=58BAC2AD',
            description: 'The Forge is more than a fitness centre. It is a community of like-minded individuals who train with specific goals and technical perfection in mind.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1
        },
        {
            title: 'Cut Gym Singapore',
            address: '23 Teo Hong Road Singapore',
            latitude: 1.2800205,
            longitude: 103.8407568,
            category: 'Gyms',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/14962580_323590954683709_6109375243374458342_n.jpg?oh=3f8e1fc9e4268f395221748969e6c8da&oe=58B89B32',
            description: 'A luxury boutique gym that exclusively provides personal training services that caters to every individual.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 2
        },
        {
            title: 'Gymmboxx',
            address: '51 Bishan St 13 Singapore',
            latitude: 1.3499048,
            longitude: 103.850758,
            category: 'Gyms',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/13419138_1041219389280327_7231147874812643372_n.png?oh=dd143efd394837185af7bd3eece3a886&oe=58BA5F5D',
            description: 'Singapore’s first successful answer for a friendly, affordable gym but with a premium level of equipment, facility, personal training, and service.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 3
        },
        {
            title: 'Innervate CrossFit',
            address: '994 Bendemeer road, #01-04, B Central Singapore',
            latitude: 1.319788,
            longitude: 103.865101,
            category: 'Gyms',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/13133158_1697992253803712_7760747060933547486_n.jpg?oh=8d57ea1b3a8e57384ce80c9103ff2886&oe=58CAB1C6',
            description: 'Innervate CrossFit is for anyone and everyone. It is the premier facility to get fit and maximize your potential in an enjoyable and conducive environment. Come join our community and enhance your quality of life. It is the highlight of your day! Innervate empowers you to surpass your own limitations and break through your barriers! It is a community that supports, grows and learns together. No one is left behind. At Innervate, we strive for the perfection of human movement. With our commitment to excellence and world class coaching, we provide a safe, efficient and effective training programme that promotes longevity and all-rounded fitness.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1
        },
        {
            title: 'CrossFit Mobilus',
            address: 'The Riverwalk 20 Upper Circular Road #B1-10/16 Singapore',
            latitude: 1.2888899,
            longitude: 103.8483573,
            category: 'Gyms',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/1375641_842487969195801_5829805184356894989_n.jpg?oh=822fd1a03e70cbba0f612bafa51ca1f2&oe=58C179A4',
            description: 'Fitness here is just the start. What do you do with your fitness? We are a community of social athletes pursuing a brand of fitness with a real world impact. Be it competing in sports to inspire a culture of fitness, raising funds for a water purification tank in Sri Lanka or training along side down and out youths in Singapore, we are on a mission to use fitness as a social force for good.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 2
        },
        {
            title: 'CrossFit Unit',
            address: '605A MacPherson Road Citimac Industrial Complex #01-06 Singapore',
            latitude: 1.333717,
            longitude: 103.8878189,
            category: 'Gyms',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/1471801_539381322816373_644616054_n.jpg?oh=81c6b6277d4f084796f05c59d218c28b&oe=58B4E181',
            description: 'CrossFit Unit, We believe in a holistic fitness lifestyle. A fitness that is, by design, broad, general, and inclusive. CrossFit is functional, scalable and varied: "Moving a load over a distance over a time modulation" - work capacity ',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 3
        },
        {
            title: 'CrossFit Fire City',
            address: '111C King George\'s AvenueSingapore',
            latitude: 1.3104571,
            longitude: 103.861815,
            category: 'Gyms',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/12923155_974370149306551_9183869036487018966_n.png?oh=b5c910228a748071c3c569edc703bf0f&oe=58BF69A0',
            description: 'Combining CrossFit workouts and our interest in your understanding to effective training, join us to share our knows and experience!',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1
        },
        // CAFES
        {
            title: 'Ronin Cafe',
            address: '17 Hongkong Street',
            latitude: 1.287637,
            longitude: 103.8473025,
            category: 'Cafes',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/p480x480/1459075_10151854166647449_510267208_n.jpg?oh=8335159b5b8c4411b23d9b1f7441a888&oe=58B3A80E',
            description: 'Heading out for lunch? Try Ronin Cafe along Hong Kong Street! A pleasant cafe to explore if you want something less mainstream. Their signature scrambled eggs on toast - creamy, smooth eggs showered with sea salt flakes. We ordered a side of avocado and squeezed the lemon on the toast, and the results are nothing short of fantastic. Sour, salty and sweet – distinctive tastes combine to yield a satisfying brunch.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 2
        },
        {
            title: 'The Book Cafe',
            address: '20 Martin Road 01-02 Seng Kee Building Singapore',
            latitude: 1.2913177,
            longitude: 103.8389077,
            category: 'Cafes',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/1511602_704578789572446_980352893_n.jpg?oh=a459cd07ce80a73d2a98f5294ca600e8&oe=58FC4FF8',
            description: 'Breakfast, brunch and coffee. Chill out with us while we serve you all day breakfast and the perfect cuppa.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 3
        },
        {
            title: 'Nylon Coffee Roasters',
            address: '4 Everton Park #01-40 Singapore',
            latitude: 1.2769315,
            longitude: 103.8400856,
            category: 'Cafes',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/544885_413125242032478_1083621393_n.jpg?oh=007aa049e097629394496308b1a39d7f&oe=58FAC8B1',
            description: 'To source, roast & brew amazing coffees from around the world to the best we think they should taste and share them with you.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1
        },
        {
            title: 'Lola\'s Cafe',
            address: '5 and 7 Simon Road Singapore',
            latitude: 1.3616839,
            longitude: 103.885915,
            category: 'Cafes',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/11054462_331789693686116_3400629083640450147_n.jpg?oh=1d862819ad62c41e4edde8bde06eacb2&oe=58C298FB',
            description: 'It\'s cozy inside, it smells of great food and freshly ground coffee. You must have with you anyone and everyone who matters to you for maximum enjoyment. When Lola’s Café was first conceptualized, there was one binding thought that was not to be compromised; Lola’s was going to be a playful and casual environment where you could get honest, unpretentious comfort fare in the company of great friends. We insist to serve only the food & drinks made with great love because food served from the heart is the most delicious. ',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 2
        },
        {
            title: 'Creamier Handcrafted Ice Cream and Coffee',
            address: 'Blk 128 Toa Payoh Lorong 1 #01-835, Singapore 310128 Singapore',
            latitude: 1.3382034,
            longitude: 103.8443371,
            category: 'Cafes',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/304747_197105800358414_35344623_n.jpg?oh=7f5c3cf8d84bd495ec0df42cdfba912a&oe=58FC190D',
            description: 'In life, it is the simple pleasures that matter. Creamier sets out to offer inexpensive luxuries everyone can afford - honestly good handmade ice cream and coffee. Our ice creams are churned fresh from our kitchen. Coffee beans are purveyed from the best local roasteries every week to assure freshness. We use the best quality ingredients, carefully sourced from different parts of the world.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 3
        },
        {
            title: 'Merely Ice Cream',
            address: '91 Bencoolen Street Bencoolen Street #01-13 Singapore',
            latitude: 1.3004493,
            longitude: 103.8509274,
            category: 'Cafes',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/386140_257427804322276_419408394_n.jpg?oh=1c10f46c1cc3f554a5c28be3a3b29d79&oe=58FBB919',
            description: 'Don’t be mistaken, we make delicious ice-cream! We just figured that by adding a touch of irony to our branding, our customers would have a lasting impression, especially after tasting our products. ',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1
        },
        {
            title: 'PasarBella Singapore',
            address: '200 Turf Club Road #02-14 Bukit Timah, Singapore',
            latitude: 1.337685,
            longitude: 103.793667,
            category: 'Cafes',
            image_url: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/996621_629482857085716_1271781152_n.png?oh=7e671e78ec280c132e2c2951be2e5808&oe=58BD81B9',
            description: 'From the freshest seafood, meat, dairy and produce, to wines and craft beers, global cuisines and personal services, PasarBella@theGrandstand is indeed a place of enchantment for visitors of all ages. A timeless, classic atmosphere awaits those who venture into the quaintness of a unique market experience, nestled within a family, lifestyle and dining enclave.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 2
        },
        // TREKS
        {
            title: 'Sungei Buluh Wetland Reserve',
            address: '301 Neo Tiew Cres, Singapore 718925',
            latitude: 1.4467195,
            longitude: 103.7301489,
            category: 'Treks',
            image_url: 'https://mynatureexperiences.files.wordpress.com/2013/06/dsc097241.jpg',
            description: 'Singapore’s first wetland reserve is home to a myriad of riverine species including water monitors, mudskippers and, if you’re really lucky (or unlucky), the ferocious estuarine crocodile. If you happen to be trekking through the park’s many trails during migratory season, you’ll definitely be able to see flocks of shorebirds like sandpipers and plovers.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 3
        },
        {
            title: 'Bukit Timah Nature Reserve',
            address: 'Hindhede Dr, Singapore 589318',
            latitude: 1.3483925,
            longitude: 103.7774628,
            category: 'Treks',
            image_url: 'http://www.bukitpanjang.com/uploads/2/3/7/3/23733606/1261221_orig.jpg',
            description: 'It’s no Everest, that’s for sure, but you’ll certainly give your calves a workout as you make your way to the summit of Singapore’s highest peak. Keep your eyes peeled and you might spot some of Singapore’s more elusive wildlife like the Sunda Pangolin and the Blue Bronzeback snake. The hill also retains historical significance, being the spot of the British military’s final stand against the invading Imperial Japanese Army.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1
        },
        {
            title: 'Macritchie Reservoir Park',
            address: '36 Lornie Rd Singapur 298735',
            latitude: 1.3400941,
            longitude: 103.8216498,
            category: 'Treks',
            image_url: 'https://farm9.staticflickr.com/8684/16852619785_b842ada8d3_h.jpg',
            description: 'Macritchie Reservoir Park is probably one of Singapore’s most popular hiking trails, and for good reason! For starters, the park offers hikers beautiful tropical scenery, an impressive variety of wildlife and peaceful, secluded hiking paths. Spanning Bukit Peirce and Bukit Kalang, you’ll find the HSBC Treetop Walk, an aerial walkway that will give you a bird’s eye view (definitely Insta-worthy) of the forest’s canopy. Here, you’ll get to see flying lemurs and long-tailed macaques up close in their natural habitat.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 2
        },
        {
            title: 'Pulau Ubin',
            address: 'Pulau Ubin Island Singapur 508310',
            latitude: 1.4123955,
            longitude: 103.9581025,
            category: 'Treks',
            image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/01/36/fa/69/pulau-ubin.jpg',
            description: 'Paved paths and built-up treetop walks not rough enough for you? Hop on a bumboat and take a trip back in time at Pulau Ubin. Here, you’ll catch a glimpse of what Singaporean life was like back in the ’60s. Put on a good pair of boots and take to the Chek Jawa wetlands where you’ll trek through six distinct ecosystems. Don’t forget to fill up on some rustic kampung fare before you leave the island too!',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 3
        },
        {
            title: 'Labrador Nature Reserve',
            address: 'Labrador Villa Road Singapur 119187',
            latitude: 1.26986,
            longitude: 103.801778,
            category: 'Treks',
            image_url: 'http://www.streetdirectory.com/stock_images/travel/simg_show/12396925300407/1/labrador_nature_reserve_labrador_park/',
            description: 'Shutterbugs will want to pack their cameras for this park! One of Singapore’s most scenic seaside trails, the Labrador Nature Reserve boardwalk will bring you past cliff sides, secondary forests and marshes. The trail also gives hikers a stellar view of Singapore’s picturesque coastline. The park is also well known for its abundance of wildlife, so you’ll quickly get used to seeing squirrels scurrying across the boardwalk. Cuties!',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1
        },
        {
            title: 'Coney Island',
            address: '',
            latitude: 1.4090691,
            longitude: 103.92180204,
            category: 'Treks',
            image_url: 'http://www.littledayout.com/wp-content/uploads/articles/2015/10-Oct/13102015-ConeyIsland/e03-West-Entrance-Coney-Island.png',
            description: 'If you think Pulau Ubin is rustic and untouched, Coney Island is even less developed. Only recently opened to the public, this ecologically sustainable park makes use of timber from fallen Casuarina trees to build signage, benches and the mangrove boardwalk. Budding botanists with keen eyes should look out for several rare plant species that are presumed to be extinct in mainland Singapore. And the island also serves as a refuge for migratory birds, so wildlife enthusiasts might want to pack a camera and a zoom lens.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 2
        },
        {
            title: 'Dairy Farm Nature Park',
            address: '100 Dairy Farm Rd, Singapore 679057',
            latitude: 1.36211199,
            longitude: 103.77424836,
            category: 'Treks',
            image_url: 'http://1step1footprint.com/wp-content/uploads/2016/02/Dairy-Farm-Nature-Park.jpg',
            description: 'The Dairy Farm Nature Park’s Wallace Trail is not as done-up as other trails in Singapore, so expect mud and some harrowing terrain. While mostly used by mountain bikers, the trail is easily traversable by foot. At the end of the hike, you’ll find the Singapore Quarry that has been converted into a wetland habitat with a viewing area that lets hikers admire some of Singapore’s freshwater flora and fauna.',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 3
        },
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('posts', null, {});
  }
};
