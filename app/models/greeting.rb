class Greeting < ApplicationRecord
  validates :message, presence: true

  def self.message
    messages = Greeting.all.sample(1)
    return messages.first.slice(:message) unless messages.empty?

    { message: 'There are no greeting messages' }
  end
end
