const calculateTotalCost = (orders) => {
    return orders.products.reduce((acc, productOrder) => {
        return acc + productOrder.amount * orders.productOrder.price;
    }, orders.deliveryCost);
};

module.exports = {
    calculateTotalCost,
};