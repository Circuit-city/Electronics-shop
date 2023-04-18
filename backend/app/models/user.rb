
class User < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    has_secure_password
    validates :roles, inclusion: { in: %w(admin customer) }
end
  