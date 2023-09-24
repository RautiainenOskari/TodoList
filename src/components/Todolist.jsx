import PropTypes from "prop-types"; 

export default function Todolist(props) {
    const Remove = (index) => {
        props.removelist(index);
    }
    
    return (
        <div>
            <table>
            <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                            <td>
                                <button onClick={() => Remove(index)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}


Todolist.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            desc: PropTypes.string.isRequired, 
            date: PropTypes.string.isRequired, 
        })
    ).isRequired,
    removelist: PropTypes.func.isRequired 
};
