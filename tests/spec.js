describe('find function', function() {

    var meats = get('pig')

    it('must return 5 meats', function() {
        expect(meats.length).toEqual( 5 )
    })

    it('must return the meats in the correct order', function() {
        expect(meats[0]).toEqual({ 'name': 'Guinea Pig','type': 'unclean' })
        expect(meats[1]).toEqual({ 'name': 'Pig',       'type': 'unclean' })
        expect(meats[2]).toEqual({ 'name': 'Pig Fish',  'type': 'clean' })
        expect(meats[3]).toEqual({ 'name': 'Pig Lard',  'type': 'unclean' })
        expect(meats[4]).toEqual({ 'name': 'Pigeon',    'type': 'clean' })
    })

    it('must be space and case insensitive', function() {
        expect(meats).toEqual( get('  PiG  ') )
    })

    it('must return an empty array if nothing is given', function() {
        expect(get(' ')).toEqual( [] )
    })

})