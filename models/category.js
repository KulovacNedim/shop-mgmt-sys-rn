class Category {
    constructor (id, title, superCategory, active, coverImageUrl, icon) {
        this.id = id,
        this.title = title,
        this.superCategory = superCategory;
        this.active = active;
        this.coverImageUrl = coverImageUrl;
        this.icon = icon
    }
}

export default Category;