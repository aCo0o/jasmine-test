(()=>{
	let jEnv = jasmine.getEnv();
		jEnv.addReporter(new jasmine.HtmlReporter());
		jEnv.execute();
})();