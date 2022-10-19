import { ElectricDecoration } from "./model";

export let value = [
    new ElectricDecoration(
        "Cheap christmass lights",
        "Perfect to decorate your house, room, garden, tree,.6.6Ft x 3.3Ft star curtain string lights with 138 LEDs, power line length is 5.3Ft. For christmas, diwali, wedding ceremony, valentine's day, birthday party and other festivals or celebrations at home, restaurant, hotel, commercial building.",
        120,
        "blue,green,red,",
        150,
        25,
        120.5,
        [
            "/dec-img1.jpg",
            "/dec-img11.jpg",
            "/dec-img12.jpg",
        ],
        1
    ),
    new ElectricDecoration(
        "Interested house ilumination",
        "Perfect to decorate your house, room, garden, tree,.6.6Ft x 3.3Ft star curtain string lights with 138 LEDs, power line length is 5.3Ft. For christmas, diwali, wedding ceremony, valentine's day, birthday party and other festivals or celebrations at home, restaurant, hotel, commercial building.",

        40,
        "yellow, green, red, blue, white,",
        2500,
        150,
        1200.0,
        [
            "/dec-img2.jpg",
            "/dec-img21.jpg",
            "/dec-img22.jpg",
        ],
        2
    ),
    new ElectricDecoration(
        "On window net",
        "Blossom Flower String lights are composed of Ultra Bright Colour Micro LEDs that don't overheat giving a light fairy effect. After hours of use, they are completely safe to touch without risk of burns. The LED Starry Lights are safe for children and pets. Perfect for spicing-up your decor or creating a romantic setting.",

        99,
        "yellow,",
        120,
        20,
        120.0,
        [
            "/dec-img3.jpg",
            "/dec-img31.jpg",
            "/dec-img32.jpg",
        ],
        3
    ),
    new ElectricDecoration(
        "Patriotical ilumiation",
        "Easy to use with an electric plug, enjoy the hassle-free application of the string Moroccan light. These can be lightened up during Diwali, Christmas, Birthdays, and other festivities & events.",

        200,
        "yellow,blue,",
        300,
        120,
        80.0,
        [
            "/dec-img4.jpg",
            "/dec-img41.jpg",
            "/dec-img42.jpg",
        ],
        4
    ),
    new ElectricDecoration(
        "Fancy ilumiation",
        "With 29V low voltage adapter, safe to touch and will keep at a low temperature state after lighting up for hours. Easy to use, directly plug in and unplug it for power on and off, you can hang it down across curtains, balcony, glass slide door, or decorate for bedroom wedding and others.High-brightness 12 Stars 138 LEDs, but not dazzling, create romantic atmosphere. 12 string lights in total, widespread lighting source with 138 brightness LEDs and 12 Stars (6 big, 0.6Ft；6 small, .03Ft) , like stars falling from the sky, create a romantic and warm atmosphere, Female plug at the end is connectable for more than one string, which makes you can connect max 5 sets together, meet your decorative length needs.The fairy lights with 8 different lighting modes, including combination, in waves, sequential, slo-glo, chasing/flash, slow fade, twinkle/flash, and steady on. You can press the bottom button of the adaptor to choose the modes you like. IP44 Waterproof designed starry lights perfect for both indoor and outdoor decorations.",
        43,
        "yellow,red,green",
        200,
        332,
        20.0,
        [
            "/dec-img5.jpg",
            "/dec-img51.jpg",
            "/dec-img52.jpg",
            "/dec-img53.jpg",
        ],
        5
    ),
    new ElectricDecoration(
        "Super ilumiation",
        " Perfect fancy flower string lights for home decor, this high-brightness warm white LED lights with romantic and cute cherry blossom flower design can bring you unexpected beauty.",

        54,
        "red,grey,green",
        600,
        240,
        160.0,
        [
            "/dec-img6.jpg",
            "/dec-img61.jpg",
            "/dec-img62.jpg",
            "/dec-img63.jpg",
        ],
        6
    ),
];


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function loadMore(value){
    let copy = Object.assign([], value);
    shuffle(copy);
    let lastId = value[value.length -1].id;
    copy.forEach(element => {
        lastId +=1;
        element.id = lastId;
    });

    value = value.concat(copy);
}