var expect = require('chai').expect;

function Horse (name) {
this.name = name || "Anon Horse";
}

Horse.prototype = {
	greets: function(target) {
	  if (!target)
	    throw new Error("missing target");
	  return this.name + " greets " + target;
	}
};


describe('Test constructor name property', function () {
	it('should output "Anon Horse" when no argument is passed', function () {
		var	horse = new Horse();
		expect(horse.name).to.be.equal("Anon Horse");
		//assert.equal(horse.name, "Anon Horse"); 
	});

	it('should output a name when passed an argument', function () {
		var horse = new Horse("Stallion");
		expect(horse.name).to.equal("Stallion");
	});

describe("#greets", function() {
	it("should throw error if no target is passed in", function() {
		expect(function() {
			(new Horse()).greets();
		}).to.throw(Error);
	});

});
	it("should greet passed target", function() {
		var greetings = (new Horse("Kate")).greets("Baby");
		expect(greetings).to.equal("Kate greets Baby");
	});
});