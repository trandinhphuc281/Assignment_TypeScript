class Products {
  id: number;
  name: string;
  originalPrice: number;
  image: string;
  saleOffPrice?: number;
  category?: string;
  feature?: string;
  description?: string;
  shortDescription?: string;
  constructor(
    id: number,
    name: string,
    originalPrice: number,
    image: string,
    saleOffPrice?: number,
    category?: string,
    feature?: string,
    description?: string,
    shortDescription?: string
  ) {
    this.id = id;
    this.name = name;
    this.originalPrice = originalPrice;
    this.image = image;
    this.saleOffPrice = saleOffPrice;
    this.category = category;
    this.feature = feature;
    this.description = description;
    this.shortDescription = shortDescription;
  }
}

export default Products;
