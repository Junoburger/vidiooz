import React from 'react';



class SearchBar extends React.Component {

    state = { inputValue: ''}

onFormSubmit = event => {
event.preventDefault();

this.props.onFormSubmit(this.state.inputValue);

};

    render() {
        return (
            <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
                <label>Video Search</label>
                <input 
                type="text" 
                value={this.state.inputValue}
                onChange={event => this.setState({ inputValue: event.target.value })}    
                />
            </div>
        </form>
            </div>
        );
    }
}


export default SearchBar;
