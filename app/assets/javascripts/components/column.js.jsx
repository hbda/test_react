var Column = React.createClass({
  render: function() {
    var ticket_nodes = this.props.tickets.map(function(ticket) {
      return (
        <Ticket key={ ticket.id } title={ ticket.title } text={ ticket.text } />
      );
    });
    return (
      <div className='column'>
        <div className='column-title'>{ this.props.name }</div>
        <div className='column-tickets'>
          { ticket_nodes }
        </div>
      </div>
    );
  }
});
