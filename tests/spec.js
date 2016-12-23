describe('find function', function() {

    var foods = find('pig')

    it('must find 4 foods', function() {
        expect(foods.length).toEqual(4)
    })

    it('must find the clean foods in correct order', function() {
        expect(foods[1]).toEqual({ 'name': 'Pig Fish', 'type': 'clean' })
        expect(foods[3]).toEqual({ 'name': 'Pigeon', 'type': 'clean' })
    })

    it('must find the unclean foods in correct order', function() {
        expect(foods[0]).toEqual({ 'name': 'Pig', 'type': 'unclean' })
        expect(foods[2]).toEqual({ 'name': 'Pig Lard', 'type': 'unclean' })
    })

    it('must be case insensitive', function() {
        expect(foods).toEqual(find('PiG'))
    })

    it('must return an empty array if less than 2 characters are given', function() {
        expect(find('p')).toEqual( [] )
    })

})