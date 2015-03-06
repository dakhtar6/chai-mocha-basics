var expect = require('chai').expect;

var timeCount = function(num){
	var hours = num/60;
	var mins = num%60;
	return hours + ":" + mins;
};
timeCount(554);

describe('Test for game title property', function(){
	it("Test for num parameter", function(){

		expect(timeCount(444)).to.be.equal(timeCount(444));
	});

	it("Test for hour variable", function(){

		expect(timeCount.hours).to.be.equal(timeCount.hours);
	});

	it("Test for min variable", function(){

		expect(timeCount.mins).to.be.equal(timeCount.mins);
	});
	it("Test for adding variables", function(){
		var wef = timeCount;

		expect(wef.mins).to.be.equal(wef.mins);
	});
});