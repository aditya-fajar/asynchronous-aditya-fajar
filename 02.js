const axios = require('axios');

const reqUser = axios.get('https://jsonplaceholder.typicode.com/users');
const reqPost = axios.get('https://jsonplaceholder.typicode.com/posts');

axios.all([reqUser, reqPost]).then(axios.spread((...responses) => {
  const responUser = responses[0];
  const responPost = responses[1];

  const users  = responUser.data;
  // console.log(users);

  const posts  = responPost.data;
  // console.log(posts);

  for(i in posts){
  	let userid = posts[i].userId;
  	let found_user = users.find(user => user.id == userid);
  	if (typeof found_user != 'undefined'){
  		posts[i].user = found_user;
  	}
  }

  console.log(posts);

})).catch(errors => {
  throw new Error(errors.message);
})