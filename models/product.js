const fs = require('fs')
const path = require('path')
const pathToFile = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

const getProductsFromFile = (callback) => {
    fs.readFile(pathToFile, (err, fileContent) => {
        if (err) {
            callback([])
        };
        callback(JSON.parse(fileContent))
    });
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        // const pathToFile = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(pathToFile, JSON.stringify(products), (err) => {
                console.log(err)
            });
        })

    }
    // This fetchall method will not return anything because the code in asynchronous and the return statements 
    // are part of the callback itself and not the original function. 
    // static fetchAll() {
    //     fs.readFile(pathToFile, (err, fileContent) => {
    //         if (err) {
    //             return [];
    //         };
    //         return JSON.parse(fileContent)
    //     });
    // }
    // As a remedy to the above problem we will introduce a callback funtion to the fetchall
    // instead of a return statement. This ensures that the callback returns something to the original function.
    static fetchAll(callback) {
        getProductsFromFile(callback)
    }
}