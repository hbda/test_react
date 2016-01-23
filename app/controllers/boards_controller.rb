class BoardsController < ApplicationController
  def show
    @data = board_data
  end

private

  def board_data
    {
      name: 'Test board',
      columns: columns_data
    }
  end

  def columns_data
    (1..columns_count).map { |i| column_data i }
  end

  def column_data column_number
    {
      id: column_number,
      name: "column #{column_number}",
      tickets: (1..tickets_count).map { |i| ticket_data column_number, i }
    }
  end

  def ticket_data column_number, ticket_number
    id = "#{column_number}.#{ticket_number}"
    { id: id, title: "ticket #{id}", text: "Description of ticket #{id}" }
  end

  def columns_count
    @columns_count ||= params[:columns]&.to_i || 10
  end

  def tickets_count
    @tickets_count ||= params[:tickets]&.to_i || 30
  end
end
