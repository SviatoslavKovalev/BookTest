export interface IBookInfo {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

export interface IBook {
  books: {
    book: IBookInfo[];
  };
}
