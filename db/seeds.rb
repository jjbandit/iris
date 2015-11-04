# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Spree::Product.create(name: 'Control Loading Yoke', description: 'This is the description', price: '2000.00', shipping_category_id: 1)

# Spree::Core::Engine.load_seed if defined?(Spree::Core)
# Spree::Auth::Engine.load_seed if defined?(Spree::Auth)

20.times do |i|
	title_length = 2 + rand(9)
	News.create(
		title: LoremIpsum.w(title_length, format: :title_case),
		body: LoremIpsum.random(paragraphs: 4, html: true),
		image: File.open('public/images/CustomsandBorderPatrolPredator.jpg')
	);
end

# Added by Refinery CMS Pages extension
Refinery::Pages::Engine.load_seed

# Added by Refinery CMS News engine
Refinery::News::Engine.load_seed
