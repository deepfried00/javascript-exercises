const findTheOldest = function(obj) {
    let data = obj.reduce((accumulator , currPerson) => {
        let deathYear = currPerson.yearOfDeath || new Date().getFullYear();
        const age = deathYear - currPerson.yearOfBirth;
        accumulator[currPerson.name] = age;
        return accumulator;
    }, {}
    );

    const maxAge = Math.max(...Object.values(data));
    const oldName = Object.keys(data).find(name => data[name] === maxAge);
    return obj.find(person => person.name === oldName );
};


//     const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]

// console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
