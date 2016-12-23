document.querySelector('input').onkeyup = function() {

	var foods = find(this.value)

	document.querySelector('ul').innerHTML = `
		${foods.map(food => `
      		<a class="item"> ${food.name}
      			<span class="item-note ${food.type}">
      				${food.type}
      			</span>
      		</a>`
      	).join('\n')}`
}


function find( key ) {

	var results = []

	var get = function( type ) {

		FOODS[ type ].forEach(function( food ) {
			
			if( food.toLowerCase().indexOf(key.toLowerCase()) > -1 ) {
				
				results.push({
					'name': food, 
					'type': type
				})

			}
		})
	}

	if( key.length >= 2 ) {

		get( 'clean' )

		get( 'unclean' )
	}

	return results.sort(function(a, b) { 
		return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) 
	})
}