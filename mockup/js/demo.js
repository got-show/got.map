/*____     _____   __  __
 / ___| __|_   _| |  \/  | __ _ _ __
| |  _ / _ \| |   | |\/| |/ _` | '_ \
| |_| | (_) | |   | |  | | (_| | |_) |
 \____|\___/|_|   |_|  |_|\__,_| .__/
 Maximilian Bandle @mbandle    |_|
 Alexander Beischl @AlexBeischl
 Tobias Piffrader  @tpiffrader

Run It

*/
jQuery(function() {
	mymap = gotmap('#map', {
		'characterBox':'#characters',
		'timeline':'#timeline',
		'filter':'#filter input',
		'realmDataSource':'file:///Users/max/Documents/TUM/JavaScript/data/cities.js',
		'characterDataSource':'file:///Users/max/Documents/TUM/JavaScript/data/characters.js',
		'episodeDataSource':'file:///Users/max/Documents/TUM/JavaScript/data/episodes.js',
		'cityDataSource':'https://raw.githubusercontent.com/Rostlab/JS16_ProjectC_Group10/develop/data/cities.js',
		'realmDataSource':'https://raw.githubusercontent.com/Rostlab/JS16_ProjectC_Group10/develop/data/realms.js'
	});
});