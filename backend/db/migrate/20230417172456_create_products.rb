# class CreateProducts < ActiveRecord::Migration[7.0]
#   def change
#     create_table :products do |t|
#       t.string :name
#       t.text :description
#       t.decimal :price
#       t.references :category, null: false, foreign_key: true

#       t.timestamps
#     end
#   end
# end



class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.integer :category_id

      t.timestamps
    end

    add_foreign_key :products, :categories, column: :category_id
  end
end
