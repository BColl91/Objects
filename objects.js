// let person = {
//     myName: "Bex",
//     age: 32
// };

// console.log(person.myName);
// console.log(person.age);
// console.log(person["myName"])

// let offer = "none";
// let time = 1700;
// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino", "Latte", "Filter coffee", "Tea", "Hot Chocolate"
//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "No offer lol"
// };
// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     // console.log(cafe.breakfastOffer);
// } else if (time < 1500){
//     offer = cafe.lunchOffer;
//     // console.log(cafe.lunchOffer);
// } else {offer = cafe.noOffer};
// console.log(offer)
// console.log(cafe)

// let day = "Thursday";
// let message = "";
 
// let alarm = {
//     weekendAlarm: "You are safe",
//     weekdayAlarm: "GET UP"
// }
 
// if (day == "Saturday" & "Sunday"){
//     message = alarm.weekendAlarm; 
// } else {message = alarm.weekdayAlarm};
// console.log(message)


//Activity 1
// const sayHi = () => {
//     let person = {
//         myName: "Bex",
//         age: 32
//     };
//     console.log(`Hello, my name is ${person.myName}`);
// };

// sayHi();


//Activity 2//
// const eat = () => {
//     return `${pet.name} is eating.`;
// };

// const drink = () => {
//     return `${pet.name} is drinking.`;
// };

// let pet = {
//     name: "Benji",
//     typeOfPet: "Cat",
//     age: 4,
//     colour: "Black",
//     eat: eat,
//     drink: drink
// };

// console.log(pet.eat());
// console.log(pet.drink()); 


//Activity 3

const cafe = {
    branch: "Bold Street",
    drinks: {
        coffee: 2.5,
        tea: 2.0,
        vanilla_latte: 3.5,
        espresso: 3.0
    },
    food: {
        butty: 5.0,
        muffin: 2.5,
        cookie: 1.5,
        salad: 4.0
    },
    drinksOrdered: (...items) => {
        let totalCost = 0;
        let orderDetails = items.map(item => {
            if (cafe.drinks[item]) {
                totalCost += cafe.drinks[item];
                return `${item} ($${cafe.drinks[item].toFixed(2)})`;
            } else {
                return `${item} (not available)`;
            }
        });
        return `Your drinks order is: ${orderDetails.join(", ")}. Total cost: $${totalCost.toFixed(2)}.`;
    },
    foodOrdered: (...items) => {
        let totalCost = 0;
        let orderDetails = items.map(item => {
            if (cafe.food[item]) {
                totalCost += cafe.food[item];
                return `${item} ($${cafe.food[item].toFixed(2)})`;
            } else {
                return `${item} (not available)`;
            }
        });
        return `Your food order is: ${orderDetails.join(", ")}. Total cost: $${totalCost.toFixed(2)}.`;
    }
};

console.log(cafe.drinksOrdered("coffee", "vanilla_latte", "tea"));
console.log(cafe.foodOrdered("Butty", "muffin", "cookie"));


































//Activity 3
const coffeeShop = {
    branch: "Downtown",
    drinks: {
        coffee: 2.5,
        tea: 2.0,
        latte: 3.0
    },
    food: {
        sandwich: 5.0,
        salad: 4.5,
        cake: 3.5
    },
    drinksOrdered(drinks) {
        let total = 0;
        let orderDetails = drinks.map(drink => {
            total += this.drinks[drink];
            return `${drink}: £${this.drinks[drink].toFixed(2)}`;
        }).join(', ');
        return `Your order is: ${orderDetails}. Total cost: £${total.toFixed(2)}`;
    },
    foodOrdered(food) {
        let total = 0;
        let orderDetails = food.map(item => {
            total += this.food[item];
            return `${item}: £${this.food[item].toFixed(2)}`;
        }).join(', ');
        return `Your order is: ${orderDetails}. Total cost: £${total.toFixed(2)}`;
    }
};


console.log(coffeeShop.drinksOrdered(['coffee', 'latte']));
console.log(coffeeShop.foodOrdered(['sandwich', 'cake'])); 
