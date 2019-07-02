import { search } from '../js/meats.js';

describe('The search function', () => {

    const meats = search('pig');

    it('returns the correct results', () => {
        expect(meats.length).toEqual( 5 );
    });

    it('returns the results in the correct order', () => {
        expect(meats[0]).toEqual({ 'name': 'Guinea Pig','kosher': false });
        expect(meats[1]).toEqual({ 'name': 'Pig',       'kosher': false });
        expect(meats[2]).toEqual({ 'name': 'Pig Fish',  'kosher': true });
        expect(meats[3]).toEqual({ 'name': 'Pig Lard',  'kosher': false });
        expect(meats[4]).toEqual({ 'name': 'Pigeon',    'kosher': true });
    });

    it('is space and case insensitive', () => {
        expect(search('  PiG  ')).toEqual(meats);
    });

    it('returns an empty array if nothing is given', () => {
        expect(search('')) .toEqual( [] );
        expect(search(' ')).toEqual( [] );
    });

    it('returns an empty array if there are no hits', () => {
        expect(search('Blurrg')).toEqual( [] );
    });

});