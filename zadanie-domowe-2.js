function createUser(name, age) {
    return {
        name: name,
        age: age,
        isAdult: age >= 18,
        isEven: age % 2 === 0
    };
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let names = ["Ania", "Basia", "Celina", "Daria", "Ewa"];

for (let name of names) {
    let user = createUser(name, getRandomInt(10, 50));
    if (user.isEven) {
        console.log(user);
    }
}