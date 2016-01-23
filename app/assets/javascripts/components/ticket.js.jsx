var Ticket = React.createClass({
  render: function() {
    return (
      <div className='ticket'>
        <div className='ticket-title'>{ this.props.title }</div>
        <div className='ticket-description'>{ this.props.text }</div>
      </div>
    );
  }
});
