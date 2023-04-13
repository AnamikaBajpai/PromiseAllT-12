function updateLastActivityTime(user) {
  return new Promise(( resolve , reject) => {
    setTimeout (() => {
      user.lastActivity = new Date();
      resolve();
    } , 1000);
  });

} 

const user = {
  lastActivity :null,
  posts: [],
};


function createPost(post) {
  return new Promise (( resolve , reject) => {
    setTimeout(() => {
      user.posts.push(post);
      resolve();
    } , 1000);

  });
}

function deleteLastPost() {
  return new promise(( resolve , reject) => {
    setTimeout(() => {
      user.posts.pop();
      resolve();
    } , 1000);

  });
}

Promise.all([
  createPost({title: 'Post Five' , body: 'This is Post Five'}),
  updateLastActivityTime(user)
])
.then(() => {
  console.log('All posts :' , user.posts);
  console.log('Last activity time :' , user.lastActivity);

  return deleteLastPost();
})
.then(() => {
  console.log('Post after deletion :' , user.posts);

})
.catch((error) => {
  console.log(error);
});









// This is a function that takes in a user object and returns a Promise. 
// It sets the lastActivity property of the user object to the current date after a delay of 1 second using setTimeout. 
// It then resolves the Promise using resolve().


// This creates a user object with lastActivity and posts properties, and initializes them to null and an empty array.


// This function takes in a post object and returns a Promise. It pushes the post object into the user.posts array after a delay of 1 second using setTimeout. 
// It then resolves the Promise using resolve().


// This function returns a Promise that removes the last post from the user.posts array after a delay of 1 second using setTimeout. 
// It then resolves the Promise using resolve()


// This uses Promise.all() to run both the createPost and updateLastUserActivityTime functions in parallel. 
// It creates an array of Promises, with the createPost Promise adding a post to the user.posts array 
// and the updateLastUserActivityTime Promise updating the user.lastActivity property.


// This .then() block logs the user.posts array and user.lastActivity property after both Promises have resolved,
//  using the values updated by the createPost and updateLastUserActivityTime functions. 
//  It then returns the deleteLastPost Promise to the next .then() block.


// This .then() block logs the user.posts array again after the deleteLastPost Promise has resolved, 
// which removes the last post added by the createPost Promise.


//This .catch() block catches any errors that occur in the Promise chain and logs them to the console.















 
  