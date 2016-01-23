var Board = React.createClass({
  render: function() {
    var column_nodes = this.props.columns.map(function(column) {
      return (
        <Column key={ column.id} name={ column.name } tickets={ column.tickets } />
      );
    });
    return (
      <div className='board-container'>
        <h1>Board "{ this.props.name }"</h1>
        <div className='colums-container'>
          <div className='colums'>
            { column_nodes }
          </div>
        </div>
      </div>
    );
  }
});

$(document).on('page:change', function() {
  if (document.body.id != 'boards_show') { return }

  ReactDOM.render(
    <Board name={ data.name } columns={ data.columns } />,
    document.getElementById('board')
  );
});
