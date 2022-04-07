import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: 1,
    imgurl:
      "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647610767/Restaurant-imgs/sevenkitchenregels_rw27g1.avif",
    hotelName: "Seven Kitchen Regels",
    hotelTypes: "North-Indian, Mughlai, Tandoori",
    hotelRating: 4.5,
    hotelPricing: 500,
    hotelPrice: "500 For Two",
    discount: "Pro-Get 10% off",
    types: ["Chicken", "Amritsari", "Mughlai"],
    category: ["veg", "non-veg"],
    restaurantItems: [
      { id:1,
        name: "Butter Chicken",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647624662/particular-hotel-dishes/seven-kitchen-regel/butter-chicken_whrmqa.webp",
        price: 209,
        desc: "craving for butter chicken?",
        type: "Amritsari",
        category: "non-veg",
      },
      {
        id:2,
        name: "Chicken 65",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647624662/particular-hotel-dishes/seven-kitchen-regel/cheicken65_eyyqrk.webp",
        price: 169,
        desc: "chicken 65 with charcoal aroma.",
        type: "Chicken",
        category: "non-veg",
      },

      {
        id:3,
        name: "Aloo Pyaaz Kulcha",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647624662/particular-hotel-dishes/seven-kitchen-regel/aloo-pyaz-kulcha_xksdzo.webp",
        price: 359,
        desc: "The Classic Aloo Payaz Kulcha Has A Magical Touch Of It Own.",
        type: "Amritsari",
        category: "veg",
      },

      {
        id:4,
        name: "Paneer Tikka Multani",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647624663/particular-hotel-dishes/seven-kitchen-regel/panner-tikka-multani_d6vbcu.webp",
        price: 259,
        desc: "Stuffed Paneer Chunks With twist of Indian Spices",
        type: "Amritsari",
        category: "veg",
      },

      {
        id:5,
        name: "Tandoori Murgh",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647624662/particular-hotel-dishes/seven-kitchen-regel/tandoori-murgh_y0adeq.webp",
        price: 509,
        desc: "Traditional Red Chili Marinade Chicken With Country Style Vegetables",
        type: "Mughlai",
        category: "non-veg",
      },
    ],
  },
  {
    _id: 2,
    imgurl:
      "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647609249/Restaurant-imgs/kfc_ptqmwp.avif",
    hotelName: "KFC",
    hotelTypes: "Fast-Food, Biryani, Burgers",
    hotelRating: 4.2,
    hotelPricing: 450,
    hotelPrice: "450 For one",
    discount: "Pro-Get 9% off",
    types: ["Biryani", "Burgers", "Family-pack", "Buckets"],
    category: ["veg", "non-veg"],
    restaurantItems: [
      {
        id:6,
        name: "Classic Biryani Combo",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618560/particular-hotel-dishes/kfc/classic-biryani-combo_d4trp6.webp",
        price: 667.71,
        desc: "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Hot & Crispy Chicken, 2 Spicy Gravies, 4pc Chicken Strips & a Pepsi PET [serves 2-3]",
        type: "Biryani",
        category: "non-veg",
      },

      {
        id:7,
        name: "Family Feast",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618557/particular-hotel-dishes/kfc/family-feast_wwbzdc.webp",
        price: 788.71,
        desc: "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]",
        type: "Family-pack",
        category: "non-veg",
      },

      {
        id:8,
        name: "6 pc Hot & Crispy Chicken",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618557/particular-hotel-dishes/kfc/hot-crispy-cjicken_a93lo8.webp",
        price: 522.71,
        desc: "Save Rs. 147 & get 6pc signature Hot & crispy chicken [serves 2-3]",
        type: "Buckets",
        category: "non-veg",
      },

      {
        id:9,
        name: "Mixed Zinger Doubles",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618557/particular-hotel-dishes/kfc/mixed-zinger-doubles_jll06w.webp",
        price: 294.11,
        desc: "Best-seller combo of classic chicken zinger & tandoori zinger",
        type: "Burgers",
        category: "non-veg",
      },

      {
        id:10,
        name: "2 Classic Veg Krispers",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618557/particular-hotel-dishes/kfc/veg-krispers_slt83l.webp",
        price: 138,
        desc: "2 delicious veg value burgers - at a deal price",
        type: "Burgers",
        category: "veg",
      },
      {
        id:11,
        name: "Coffee Mousse Cake",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618557/particular-hotel-dishes/kfc/coffee-mouse-cake_kpqqjo.webp",
        price: 119,
        desc: "Coffee, chocolate, cake?what's not to love? Enjoy our delicious, new dessert for those coffee-licious temptations!",
        type: "Family-pack",
        category: "veg",
      },
    ],
  },
  {
    _id: 3,
    imgurl:
      "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647609245/Restaurant-imgs/naturalicecream_vbhqwh.avif",
    hotelName: "Natural Ice Cream",
    hotelTypes: "Ice-cream",
    hotelRating: 4.9,
    hotelPricing: 350,
    hotelPrice: "350 For one",
    discount: "Pro-Get 5% off",
    types: ["combo-pack"],
    category: ["veg"],
    restaurantItems: [
      {
        id:12,
        name: "Pan Ice Cream",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618584/particular-hotel-dishes/natural-ice-cream/paan-flavour_agkfza.webp",
        price: 120,
        desc: "Dessert? Or Mouthfreshner? A delightfully tasty combination giving you the best of both.",
        type: "combo-pack",
        category: "veg",
      },
      {
        id:13,
        name: "Roasted Almond",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618585/particular-hotel-dishes/natural-ice-cream/sugarless-roasted-almond_rtou5c.webp",
        price: 99,
        desc: "Roasted almonds is a must-have. Its crunchy texture with its singular flavour is unparalleled. Also available in sugarless.",
        type: "combo-pack",
        category: "veg",
      },

      {
        id:14,
        name: "Mix Berries",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618584/particular-hotel-dishes/natural-ice-cream/mixed-berries_qydcxx.webp",
        price: 159,
        desc: "Crafted with imported Californian Cranberries, Blueberries and Strawberries.",
        type: null,
        category: "veg",
      },

      {
        id:15,
        name: "Alphonso Mango Ice Cream",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618584/particular-hotel-dishes/natural-ice-cream/alphanso_bm72is.webp",
        price: 259,
        desc: "The king of fruits adds a delightful flavour to your scoop. The perfect taste of Rich and Pure Ratnagiri Alphonso Mango in every bite.",
        type: null,
        category: "veg",
      },

      {
        id:16,
        name: "Dry Fruit Over Load Ice Cream",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618584/particular-hotel-dishes/natural-ice-cream/dry-fruit-over-load_gth3ty.webp",
        price: 299,
        desc: "A scoop of Ice Cream Loaded with Cashews, Almonds, Pistas and Kishmishs. Needs no further description.",
        type: "combo-pack",
        category: "veg",
      },

      {
        id:17,
        name: "Chocochips Ice Cream",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618584/particular-hotel-dishes/natural-ice-cream/chocochip_t6b0wu.webp",
        price: 180,
        desc: "Melt in mouth chocolate chips in every spoon. Truly, a decadent ice cream experience.",
        type: null,
        category: "veg",
      },

      {
        id:18,
        name: "French Vanilla Ice Cream",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647618584/particular-hotel-dishes/natural-ice-cream/french-vanilla_lfa5mr.webp",
        price: 120,
        desc: "Experience the bliss of pure vanilla beans extract in every bite of this Ice Cream.",
        type: "combo-pack",
        category: "veg",
      },
    ],
  },

  {
    _id: 4,
    imgurl:
      "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647610761/Restaurant-imgs/bombayadda_n0n4ic.avif",
    hotelName: "Bombay Adda",
    hotelTypes: "European, Spanish",
    hotelRating: 4.9,
    hotelPricing: 550,
    hotelPrice: "550 For one",
    discount: "Pro-Get 5% off",
    types: ["European", "Continental"],
    category: ["veg", "non-veg"],
    restaurantItems: [
      {
        id:19,
        name: "Baked Lasagna",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647624653/particular-hotel-dishes/bombay-adda/baked-lasagna_owyhrq.webp",
        price: 420,
        desc: "Lasagna with creamed leeks, mushrooms, sweet potatoes and cheddar",
        type: "European",
        category: "veg",
      },
      {
        id:20,
        name: "Nutty Ricotta Ravioli",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647624652/particular-hotel-dishes/bombay-adda/nutty-ricotta-ravioli_pwacda.webp",
        price: 339,
        desc: "Ravioli stuffed with homemade beer ricotta, walnuts and pine nuts served in a garlic truffle cream ",
        type: "Continental",
        category: "veg",
      },

      {
        id:21,
        name: "Chicken Scallopini",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647624652/particular-hotel-dishes/bombay-adda/chicken-scallapini_fuiuph.webp",
        price: 439,
        desc: "Lightly breaded chicken breast in a porcini cream sauce served with fresh mushroom herb rice",
        type: "European",
        category: "non-veg",
      },

      {
        id:22,
        name: "Bbq Chicken Flatbread",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647624651/particular-hotel-dishes/bombay-adda/bbq-chicken-flatbrad_jq219b.webp",
        price: 459,
        desc: "Grilled chicken in our house smoked bbq sauce, mozzarella & fresh basil",
        type: "Continental",
        category: "non-veg",
      },

      {
        id:23,
        name: "Cajun Prawns (8pcs)",
        imgurl:
          "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1647624651/particular-hotel-dishes/bombay-adda/cajun-prawsn_kl8zej.webp",
        price: 599,
        desc: "Cajun spiced buttered prawns with garlic served with a crusty french baguette",
        type: "European",
        category: "non-veg",
      },
    ],
  },
];
