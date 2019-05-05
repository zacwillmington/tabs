class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :details
      t.integer :user_id
      t.date :DOB
      t.string :string
      t.timestamps
    end
  end
end
