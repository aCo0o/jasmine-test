const app = {
  loaded : false,
  show : ()=>{ 
  	app.loaded === true ? shouldShow = true : shouldShow = false;
  	return shouldShow;
  }
};
const user = {
  hasUser : false,
  greet: (username)=> {
    if(username){
      user.hasUser, app.loaded = true;
    } return `Hi ${username}`;
  }
};