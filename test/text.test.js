import {expect} from 'chai';
import {Entities, cutText} from '../src/modules/text';

describe("TEXT Modules", () => {
    describe('Entities()', () => {
        it("normal use", () => {
            const res = Entities('<html>')
            expect(res).to.deep.equal('&lt;html&gt;')
        })
    })
    describe('cutText()', () => {
        it("normal use", () => {
            const res = cutText('string',1,2)
            expect(res).to.deep.equal('t')
        })
    })
})