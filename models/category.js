class Category {
    constructor (id, title, superCategory, active, coverImageUrl) {
        this.id = id,
        this.title = title,
        this.superCategory = superCategory;
        this.active = active;
        this.coverImageUrl = coverImageUrl;
    }
}

export default Category;