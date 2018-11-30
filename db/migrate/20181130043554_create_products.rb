class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :asin
      t.string :category
      t.string :rank
      t.string :dimensions

      t.timestamps
    end
  end
end
