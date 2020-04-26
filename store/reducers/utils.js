import Category from '../../models/category';
import { CATEGORIES } from '../../data/dummy-data';

export const getCategories = superCategory => {
    const initCategories = [];

    CATEGORIES.filter(category => {
        let initCategory = {};
        let foundCategory;
        if (category.superCategory === superCategory) {
            foundCategory = new Category(category.id, category.title, category.superCategory, category.active, category.coverImageUrl);
            const subcatrgories = getSubcategories(foundCategory.id);
            
            initCategory.category = foundCategory;
            initCategory.subcategories = subcatrgories;
            initCategories.push(initCategory);
        }
    });
    return initCategories;
}

const getSubcategories = categoryId => {
    const subcategories = [];
    CATEGORIES.map(category => {
        if (category.superCategory === categoryId) {
            subcategories.push(category)
        }
    });
    return subcategories;
};