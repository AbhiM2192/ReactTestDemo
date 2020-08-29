const MockFetch = window.fetch = jest.fn(() =>{
    const users = [
        {
            "userId": 1,
            "id": 1,
            "title": "a",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "b",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          }
    ];
    return Promise.resolve({
        json: () => Promise.resolve(users)
    })
});

export default MockFetch;