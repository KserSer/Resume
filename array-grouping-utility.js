const groupBy = (array, key) => {
    return array.reduce((result, item) => {
        const groupKey = typeof key === 'function' ? key(item) : item[key];
        
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        
        result[groupKey].push(item);
        return result;
    }, {});
};

const users = [
    { name: 'Анна', role: 'admin', age: 25 },
    { name: 'Иван', role: 'user', age: 30 },
    { name: 'Мария', role: 'admin', age: 28 },
    { name: 'Петр', role: 'user', age: 22 }
];

const byRole = groupBy(users, 'role');
const byAgeGroup = groupBy(users, (user) => 
    user.age < 25 ? 'молодые' : 'взрослые'
);

console.log(byRole);
console.log(byAgeGroup);