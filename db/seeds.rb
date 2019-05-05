# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([{ email: 'example@gmail.com', password: 'big' }, { email: 'example2@gmail.com', password: 'big' }])

contacts = Contact.create([{ email: 'contact@gmail.com', details: 'contact details', name: 'John Doe'}, { email: 'contact1@gmail.com', details: 'contact details', name: 'Jane Doe'}])

users[0].contacts << contacts
users[1].contacts << contacts
