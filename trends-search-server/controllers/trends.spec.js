const chai = require('chai');
const chaiAsPromise = require('chai-as-promised');
const trends = require('./trends');


const assert = chai.assert;
const expect = chai.expect;
chai.should();
chai.use(chaiAsPromise);



describe('Trends API search', () => {

    it('Should return the api', () => {
        promise = trends.getTrends();
        return assert.isFulfilled(promise);
    });

    it('Should return a json', () => {
        promise = trends.getTrends();

        /*promise.then((result) => {
            console.log(result);
            done()
        });*/

        return expect(promise).to.eventually.have.property('default')
            .that.has.property('rankedList')
            .that.has.property('rankedKeyword')
        // promise.should.be.a('Object');
        // expect(promise).to.have.deep.property('thing.foo', 'bar');
    });

});
