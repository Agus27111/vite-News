import PropTypes from "prop-types";
import classnames from "classnames";
import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";

function Todos(props) {
  return (
    <div className="todos">
      {props.todos.map((todo, index, arr) => {
        return (
          <div
            className={classnames("todo", {
              todoDivider: !(arr.length === index + 1),
            })}
            key={index}
          >
            {todo.title}
            <div className="todoIconWrapper">
              <div className="todoCount">{todo.count}</div>

              <button
                onClick={() => props.handleAdditionalCount(index)}
                className="todoActionButton"
              >
                <img src={plusIcon} alt="plus icon" />
              </button>
              <button
                className="todoActionButton"
                onClick={() => props.handleSubtractCount(index)}
              >
                <img src={minusIcon} alt="minus icon" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
  handleAdditionalCount: PropTypes.func.isRequired,
  handleSubtractCount: PropTypes.func.isRequired,
};

export default Todos;
