const validateProductCategory = (category) => {
    const validCategories = ['VEGETABLES', 'FRUIT', 'CLOTHES'];
    return validCategories.includes(category);
};

module.exports = {
    validateProductCategory,
};