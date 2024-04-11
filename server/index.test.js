const request = require("supertest");
const express = require("express");
const app = require("./index");

describe("/getPlaces API", () => {
  const result = [
    {
      _id: {
        $oid: "66142de2418afdea93cb8f40",
      },
      name: "Umi Falafel",
      location: "13 Dame St, South City, Dublin, D02 HX67",
      category: "Restaurant",
      timings: "12-9 pm and 12-10 on Friday and Saturday",
      phone: "01 670 6866",
      "email/website": "https://www.umifalafel.ie/contact/",
      discounts:
        "Offer student meals at 13.50 euros which includes a wrap or pocket, chips and a drink",
      images: {
        link1: "https://i.imgur.com/BYuTv2p.jpeg",
        link2: "https://i.imgur.com/n3hSX1H.jpeg",
        link3: "https://i.imgur.com/3bfu3eg.png ",
      },
      description:
        "Fresh and authentic middle eastern food. The Falafels burst with flavour and pair perfectly with pickled veggies. From pitas to wraps with garlic sauce or tzatziki, this is definitely a must-visit in Dublin.",
      mealOptions: "Vegan and vegetarian available",
      diningOptions: "Dine-in or Take away available",
    },
    {
      _id: {
        $oid: "66142dfc418afdea93cb8f41",
      },
      name: "MoLI- Museum of Literature Ireland",
      location:
        " UCD Naughton Joyce Centre, 86 St Stephen's Green, Saint Kevin's, Dublin, D02 XY43",
      category: "Attraction",
      timings: "10:30 am to 5:30 pm and close on Monday",
      phone: "01 716 5900",
      email: "hello@moli.ie",
      discounts: "Student tickets priced at 12 euros.",
      images: {
        link1: "https://i.imgur.com/dKS94Rk.jpeg",
        link2: "https://i.imgur.com/GngIPwG.jpeg",
        link3: "https://i.imgur.com/XDYX9tG.jpeg",
      },
      description:
        "A museum of literature for the world's greatest storytellers.Experience immersive exhibitions, view treasures from the National Library of Ireland, or relax amid the birdsong in the tranquil gardens and café.",
      mealOptions: "",
      diningOptions: "",
    },
    {
      _id: {
        $oid: "66142e13418afdea93cb8f42",
      },
      name: "Dublin Zoo",
      location: " Saint James, Dublin 8",
      category: "Attraction",
      timings: "9:30 am to 5 pm",
      phone: "01 474 8900",
      email: "info@dublinzoo.ie",
      discounts:
        "Student tickets with a vlid id priced at 18 euros at the gate and 15.20 euros when booked 2 days in advance.",
      images: {
        link1: "https://i.imgur.com/tuNHvz6.jpeg",
        link2: "https://i.imgur.com/CnNVC5X.jpeg",
        link3: "https://i.imgur.com/nm9jnTo.jpeg",
      },
      description:
        "In Phoenix Park, is a zoo which is one of Dublin's most popular attractions.It focuses on conservation projects, breeding programmes, and growing awareness for animals.",
      mealOptions:
        "Meerkat Restaurant, The Cove - Chicken Hut, Picnic Bench for light refreshments and hot food.",
      diningOptions: "Dine in or Take away available.",
    },
    {
      _id: {
        $oid: "66142e26418afdea93cb8f43",
      },
      name: "Caffe Nero",
      location: "9 O'Connell Street Lower, North City, Dublin, Dublin1",
      category: "Restaurant/Cafe",
      timings: "6:30 am to 9 pm",
      phone: "01 878 3110",
      email: "enquiries@caffenero.com",
      discounts:
        "Students who verify their college ID on the app receive 15% off in-store.",
      images: {
        link1: "https://i.imgur.com/XBDuqfc.jpeg",
        link2: "https://i.imgur.com/icTbEeY.jpeg",
        link3: "https://i.imgur.com/x8OJram.jpeg",
      },
      description:
        "A cozy coffee shop serving freshly ground coffee and hot chocolates with delicious pastries and cake.",
      mealOptions:
        "Alternative milk available like soya or oat milk. Coffees, Hot chocolates, Sandwhiches, Cakes available. Vegetarian food available.",
      diningOptions: "Dine-in or Take away available",
    },
    {
      _id: {
        $oid: "66142e37418afdea93cb8f44",
      },
      name: "Yum Thai",
      location: " 13 Duke St, Dublin 2",
      category: "Restaurant",
      timings:
        "11:30 am to 7:30 am on weekdays and 11:30 am to 6:30 pm on weekends",
      phone: "01 516 9969",
      "email/website": "",
      discounts: "Offer student meals from 5.50 euros.",
      images: {
        link1: "https://i.imgur.com/qirVHsm.jpeg",
        link2: "https://i.imgur.com/v3BJK2j.jpeg",
        link3: "https://i.imgur.com/fAbnljn.jpeg",
      },
      description:
        "A quick and easy lunch. They offer amazing pad thai, spring rolls and stirfried rice dishes.",
      mealOptions: "Vegan and vegetarian available",
      diningOptions: "Dine-in or Take away available",
    },
    {
      _id: {
        $oid: "66142e84418afdea93cb8f45",
      },
      name: "The Book of Kells at Trinity College",
      location: "College Green, Dublin 2",
      category: "Attraction",
      timings: "10:15 am to 12:15 pm, 13:30 pm 15:30 pm and closed on Sunday.",
      phone: "01 896 1000",
      email: "international@tcd.ie",
      discounts: "The Book of Kells experience at 21.50 euros for 90 minutes",
      images: {
        link1: "https://i.imgur.com/MVfHoCR.jpeg",
        link2: "https://i.imgur.com/modfoyF.jpeg",
      },
      description:
        "The Book of Kells is a 9th-century copy of the Gospels. It is spectacularly ornate, completely unique and impeccably preserved.",
      mealOptions: "",
      diningOptions: "",
    },
    {
      _id: {
        $oid: "66142e96418afdea93cb8f46",
      },
      name: "The Camden",
      location: " 84, Camden Street Lower, Saint Kevin's, Dublin 2, D02 DH36",
      category: "Attraction/Restaurant",
      timings:
        "12 pm to 2:30 am on Thursday, Friday, Saturday and Sunday. 4:30 pm to 12 am on Monday, Tuesday and Wednesday.",
      phone: "01 202 0397",
      "email/website": "https://www.thecamden.ie/",
      discounts: "",
      images: {
        link1: "https://i.imgur.com/HCB31vM.jpeg ",
        link2: "https://i.imgur.com/sFMLC1h.jpeg",
        link3: "https://i.imgur.com/ziZjnCN.jpeg",
      },
      description:
        "Camden Club is a vibrant nightlife venue offering live music, DJ sets, and a diverse selection of drinks in a trendy atmosphere. A must visit to experience night life like the locals.",
      mealOptions: "Vegetarian food available.",
      diningOptions: "Dine in available.",
    },
    {
      _id: {
        $oid: "66142eb5418afdea93cb8f47",
      },
      name: "Krispy Kreme",
      location: "Unit 4, One Central Plaza, Dublin 2, D02 R2V6",
      category: "Restaurant/Cafe",
      timings: "8 am to 10 pm.",
      phone: "Dame Street- (01) 506 0661",
      email: "customerservice@krispykreme.ie",
      discounts: "10 % student discount offered at stores.",
      images: {
        link1: "https://i.imgur.com/ztXnd4B.jpeg",
        link2: "https://i.imgur.com/HHrrouh.jpeg",
        link3: "https://i.imgur.com/J9r98HH.png",
      },
      description:
        "A renowned global doughnut and coffee chain known for its freshly baked, melt-in-your-mouth doughnuts and premium coffee offerings.",
      mealOptions: "Vegetarian and vegan food available.",
      diningOptions: "Dine-in or Take away available.",
    },
    {
      _id: {
        $oid: "66142ec0418afdea93cb8f48",
      },
      name: "Elephant and Castle",
      location: "18-19 Temple Bar, Dublin 2",
      category: "Restaurant",
      timings: "12 pm to 9 pm.",
      phone: "01 572 0630",
      email: "TempleBarMOD@elephantandcastle.ie",
      discounts:
        "20 % student discount offered from Monday-Thursday, Dine-in only.",
      images: {
        link1: "https://i.imgur.com/rcGDPBy.jpeg",
        link2: "https://i.imgur.com/sKh7R2z.jpeg",
        link3: "https://i.imgur.com/idrhaIX.jpeg",
      },
      description:
        "Popular restaurant known for its casual dining experience and famous for its delicious chicken wings. It's a favorite spot among locals and visitors alike for enjoying hearty meals, including burgers, salads, and, of course, their signature wings.",
      mealOptions: "Vegetarian and vegan food available.",
      diningOptions: "Dine in or Take away available.",
    },
    {
      _id: {
        $oid: "66142ecd418afdea93cb8f49",
      },
      name: "Avondale TreeTop Park",
      location: "Co-Wicklow",
      category: "Attraction",
      timings: "10 am to 4:30 pm.",
      phone: "04 044 6111",
      email: "enquiry@beyondthetreesavondale.com",
      discounts:
        " A combination ticket for 28.80 euros for the Treetop Walk & Viewing Tower and Avondale House. ",
      images: {
        link1: "https://i.imgur.com/f5iT1XZ.jpeg",
        link2: "https://i.imgur.com/tQFPERT.jpeg",
        link3: "https://i.imgur.com/UYJ4gLP.jpeg",
      },
      description:
        "A walk amongst nature is wahat everyone needs to relax and rejuvenate.Awaken all your senses, as you find yourself surrounded by Yew, Larch, Fir, Oak, Spruce. ",
      mealOptions: "",
      diningOptions: "",
    },
    {
      _id: {
        $oid: "66142f1f418afdea93cb8f4a",
      },
      name: "Seven Wonders",
      location: "Grand Canal Dock Dart Station, Barrow St, Dublin 4 ",
      Category: "Restaurant/Cafe",
      timings: "Mon -Fri: 7am-6pm Sat & Sun: 11.30am-4pm",
      phone: "01 672 0212",
      email: "info@sevenwonders.ie",
      discounts: "15% Student discount ",
      images: {
        link1: "https://i.imgur.com/aXlzxuL.jpeg",
        link2: "https://i.imgur.com/Y84lZBd.jpeg",
        link3: "https://i.imgur.com/ASMh760.jpeg",
      },
      description:
        "The breakfast burritos and bagels are amazing ! The finest breakfast sandwich one can find in Dublin, and at a reasonable price-- around €6.50 for a sandwich and a coffee!",
      mealOptions: "Vegan and Vegetarian avaiable",
      diningOptions: "Dine-in or Take away available",
    },
    {
      _id: {
        $oid: "66142f29418afdea93cb8f4b",
      },
      name: "National Gallery of Ireland",
      location: "Dublin Merrion Square W, Dublin 2, D02 K303",
      Category: " Attraction",
      timings: " 09 am to 11pm and 12pm -11 pm & Friday and Saturday",
      phone: "01 661 5133",
      email: "friends@ngi.ie",
      discounts: "10% Student discount ",
      images: {
        link1: "https://i.imgur.com/mlkQEsY.png",
        link2: "https://i.imgur.com/l2j0h2E.jpeg",
        link3: "https://i.imgur.com/ekL5oRL.jpeg ",
      },
      description:
        "it was a very nice advantage for us to know that the gift shops in the museum can take advantage of student discounts. The images on display are beautiful. A good place to spend a relaxing evening.",
    },
    {
      _id: {
        $oid: "66142f43418afdea93cb8f4c",
      },
      name: "WOW Burger",
      location: "2-5 Wellington Quay, Temple Bar,Dublin 2",
      type: "Bar - Restaurant",
      timings: " 09 am to 11 pm and 12pm to 11 pm ",
      phone: "08 605 63144",
      email: "TEMPLEBAR@WOWBURGER.IE",
      discounts: "10% Student discount ",
      images: {
        link1: "https://i.imgur.com/RevU6d1.jpeg",
        link2: "https://i.imgur.com/Pt6C0ET.jpeg",
        link3: "https://i.imgur.com/oUHJPOf.jpeg",
      },
      description:
        " There are Student discount special menu options, the veggie burger, cheese burger and garlic fries are a delight to eat !",
      mealOptions: "Vegan and Vegetarian avaiable",
      diningOptions: "Dine-in or Take away available",
    },
    {
      _id: {
        $oid: "66142f4c418afdea93cb8f4d",
      },
      name: "Wing's World Cuisine",
      location: "32 Wolfe Tone St, North City, Dublin 2",
      Category: "Restaurant",
      timings: " 11:45 am to  10:30pm ",
      phone: "01 537 7788",
      email: "wings.gamil.com",
      discounts: "16% Student discount ",
      images: {
        link1: "https://i.imgur.com/PfGgWJt.jpeg",
        link2: "https://i.imgur.com/i2mYWT8.jpeg",
      },
      description:
        "The price is very affordable and there are many types. They're all very tasty. Fron indian to chinese, all asian cuisines are really nice.",
      mealOptions: "Vegan and Vegetarian avaiable",
      diningOptions: "Dine-in or Take away available",
    },
    {
      _id: {
        $oid: "66142f6a418afdea93cb8f4e",
      },
      name: " Milano Restaurant",
      location: "38 Dawson St, Dublin 2, ",
      Category: " Restaurant",
      timings: " 11:45 am  to 10:30 pm ",
      phone: "01 670 7744",
      email: "info@milnorestont.ie",
      discounts: "10% Student discount ",
      images: {
        link1: "https://i.imgur.com/03c2Wcj.jpeg",
        link2: "https://i.imgur.com/hZw6Fxc.jpeg",
        link3: "https://i.imgur.com/wKqVBJm.jpeg",
      },
      description:
        "It's a beautiful resturant with friendly service and an good pizza, the doughballs are delicious as well.",
      mealOptions: "Vegan and Vegetarian avaiable",
      diningOptions: "Dine-in or Take away available",
    },
    {
      _id: {
        $oid: "66142f79418afdea93cb8f4f",
      },
      name: "Guinness Storehouse",
      location: "St. James's Gate, Dublin",
      Category: "Attraction",
      timings: " 10 am to  5 pm ",
      phone: "01 408 4800",
      email: "nfo@guinnessstorehouse.com",
      discounts: "15% Student discount ",
      images: {
        link1: "https://i.imgur.com/izD2JG9.jpeg",
        link2: "https://i.imgur.com/6qNpWap.jpeg",
        link3: "https://i.imgur.com/NzfvXD3.jpeg",
      },
      description:
        "An attraction for tourists and locals, this storehouse is a favourite for everyone, the beer tatsing is a beautiful experience.",
    },
    {
      _id: {
        $oid: "66142f83418afdea93cb8f50",
      },
      name: "Captain Americas",
      location: "44, Grafton Street, Dublin 2",
      Category: "Restaurant",
      timings: " 09 am to 11 pm and 12pm to 11 pm on Friday and Saturday",
      phone: " 01 671 5266",
      email: "TEMPLEBAR@WCAPTAIN.IE",
      discounts: "10% Student discount ",
      images: {
        link1: "https://i.imgur.com/pByNFeF.jpeg",
        link2: "https://i.imgur.com/vqcfixN.jpeg",
        link3: "https://i.imgur.com/s1lCnCv.jpeg",
      },
      description:
        "This restaurant offers delicious hamburgers and chips, a must try in the restaurant",
      mealOptions: "Vegan and Vegetarian avaiable",
      diningOptions: "Dine-in or Take away available",
    },
    {
      _id: {
        $oid: "66142f90418afdea93cb8f51",
      },
      name: "The Little Museum of Dublin ",
      location: "15, St Stephen's Green Dublin 2",
      Category: "Attraction",
      timings: " 09 am to - 05 pm",
      phone: "01 661 1000",
      email: "TLITTLE@MUSEUM.IE",
      discounts: "11% Student discount ",
      images: {
        link1: "https://i.imgur.com/5BtP82N.jpeg",
        link2: "https://i.imgur.com/0WjVXaz.jpeg",
        link3: "https://i.imgur.com/auRQzxM.jpeg",
      },
      description:
        "Very informative and beautiful museum. Good information about history about Ireland.",
    },
    {
      _id: {
        $oid: "66142fa0418afdea93cb8f52",
      },
      name: "Tula Mexican Gril",
      location: "30 Essex St E, Temple Bar, Dublin 2",
      Category: "Restaurant",
      timings: " 09 am to 11 pm and 12pm tp 11pm on Friday and Saturday",
      phone: "01 444 6585",
      email: "TULA@GRIL.IE",
      discounts: "20% Student discount ",
      images: {
        link1: "https://i.imgur.com/5Wjz9lE.jpeg",
        link2: "https://i.imgur.com/m2cPB1H.jpeg",
        link3: "https://i.imgur.com/qxWHOeZ.jpeg",
      },
      description:
        " A nice Mexican place , it is a very light yet filling in comparison to some options in the city. The tofu is a pleasant surprise,",
      mealOptions: "Vegan and Vegetarian avaiable",
      diningOptions: "Dine-in or Take away available",
    },
    {
      _id: {
        $oid: "66142faa418afdea93cb8f53",
      },
      name: "Sano Pizza",
      location: "Exchange Street Upper, Temple Bar, Dublin 2",
      Category: "Restaurant",
      timings: " 09 am to 11 pm and 12 pm to 11pm on Friday and Saturday",
      phone: "01 438 9485",
      email: "Sano@Pizza.IE",
      discounts:
        "An early bird offer for 20 euros which includes any pizza, wine/beer and ice cream/tiramisu. ",
      images: {
        link1: "https://i.imgur.com/sO41pjo.jpeg",
        link2: "https://i.imgur.com/krsKdpI.jpeg",
      },
      description:
        "Delicious pizzas in the heart of dublin ! From margarithas to Napoli pizzas thier dishes are beautiful !",
      mealOptions: "Vegan and Vegetarian avaiable",
      diningOptions: "Dine-in or Take away available",
    },
  ];
  it("responds with JSON containing all places", async () => {
    const response = await request(app).get("/getPlaces");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(result.length);
    expect(response.body.map((place) => place.name)).toEqual(
      result.map((place) => place.name)
    );
  });
});

describe("POST /createPlace", () => {
  it("creates a new place", async () => {
    const newPlace = {
      name: "Test Place",
      location: "Test Location",
      type: "Test Type",
      timings: "Test Timings",
      phone: {
        location1: "Test Phone 1",
        location2: "Test Phone 2",
        location3: "Test Phone 3",
      },
      email: "test@example.com",
      discounts: "Test Discounts",
      images: {
        link1: "https://example.com/image1.jpg",
        link2: "https://example.com/image2.jpg",
        link3: "https://example.com/image3.jpg",
      },
      description: "Test Description",
      mealOptions: "Test Meal Options",
      diningOptions: "Test Dining Options",
    };
    const response = await request(app).post("/createPlace").send(newPlace);

    expect(response.status).toBe(200);

    expect(response.body).toEqual(newPlace);
  });
});
