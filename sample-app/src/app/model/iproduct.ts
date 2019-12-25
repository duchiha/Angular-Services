export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    productBadge?: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}
