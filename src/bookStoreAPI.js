class BookStoreAPI {
    static BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TIKGnJBAsBAAdWBWb2IU/books/';

    static getBooks = async () => fetch(this.BASE_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        const books = [];
        Object.entries(data).forEach(([id, book]) => books.push({
          id,
          category: book[0].category,
          title: book[0].title,
          author: book[0].author,
        }));
        return books;
      }
      return null;
    });

    static addBook = async ({
      id, title, author, category,
    }) => fetch(this.BASE_URL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        title,
        author,
        category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(async (response) => response.ok);

    static removeBook = async ({ id }) => fetch(`${this.BASE_URL}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(async (response) => response.ok);
}

export default BookStoreAPI;
