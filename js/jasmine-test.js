proceedWithUserTests = ()=> {
  describe("User",()=> {
    it("- Empty user profile ",()=> expect(user.hasUser).toBe(false));
    it("- Greet method is defined",()=> expect(user.greet).toBeDefined());
    it("- Greet user : `Hi [user]`",()=> expect(user.greet("User")).toEqual("Hi User"));
  });
}

describe("Application", ()=> {
  
  it("[Loaded state] should be defined", ()=> expect(app.loaded).toBeDefined());
  it("[Loaded state] should be [false]", ()=> expect(app.loaded).toBe(false));

  /* Run User tests FIRST, otherwise all tests will not pass! */
  proceedWithUserTests();

  it("[Loaded state] should now be [true]", ()=> expect(app.loaded).toBe(true));
  it("[Loaded state] OK - Show Application", ()=> expect(app.show()).toBe(true));

});