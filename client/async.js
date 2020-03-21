const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await usersResponse.json();
    const secondUser = users[1];
    console.log('secondUser', secondUser);

    const postResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
    );
    const posts = await postResponse.json();
    console.log('posts', posts);
  } catch (err) {
    console.log('there was an error', err);
  }
};

myAsyncFunction();
