# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Spree::Core::Engine.load_seed if defined?(Spree::Core)
Spree::Auth::Engine.load_seed if defined?(Spree::Auth)

20.times do |i|
	News.create(title: 'title ' + i.to_s, body: 'Quisque sodales mollis hendrerit. Vestibulum porttitor a massa at scelerisque. Integer augue nulla, ornare non nibh non, feugiat facilisis turpis. Nulla eleifend auctor placerat. Nam maximus eleifend sollicitudin. Aenean vulputate, nisl quis convallis feugiat, elit tortor euismod massa, sit amet volutpat dui ante et massa. Fusce fringilla urna sit amet ipsum tempor, at egestas justo commodo. Aliquam vestibulum orci non ligula tempor tristique. Sed quis felis ut quam maximus imperdiet. Donec condimentum convallis ante. Integer rhoncus efficitur varius. Nunc blandit nisl ut ligula sagittis, eu feugiat quam aliquam');
end
