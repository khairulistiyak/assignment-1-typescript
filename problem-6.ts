{
  interface Book {
    title: "Sample Book";
    author: "John Doe";
    publishedYear: number;
  }

  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022,
  };

  const isRecentBook = (book: Book) => {
    const currentYear = new Date().getFullYear();
    const differenceYear = currentYear - book.publishedYear;
    if (currentYear < book.publishedYear) {
      return "Your year is wrong";
    } else {
      const result = differenceYear <= 5;
      return result;
    }
  };

  const solution6 = isRecentBook(book1);
}
