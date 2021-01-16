import React from 'react';

const Form = ({ value, change }) => {
    return (
        <form>
            <input
                type="text"
                value={value}
                onChange={change}
                placeholder="Wpisz miasto" />
            <button>Wyszukaj miasto</button>
        </form>
    );
}

export default Form;