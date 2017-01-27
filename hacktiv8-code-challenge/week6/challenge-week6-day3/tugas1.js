var transformArrToLowerCase = arr => {
    return arr.map((data) => {
        return data.toLowerCase();
    });
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']
