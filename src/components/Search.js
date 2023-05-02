import React, { Component } from 'react';

class Search extends Component {
    state={
        text:''
    };
    onChange= e =>{
    this.setState({ text : e.target.value});
    }

    onSubmit = e =>{
        e.preventDefault();
        // console.log(this.state.text):
        this.props.searchRecettes(this.state.text);
    }
    render() {
        return (
            <div>
                <form action="" className="formSearch" onSubmit={this.onSubmit}>
                    <input type="text" name="text" id=""  placeholder='cherche le recette' 
                    value={this.state.text}
                    onChange={this.onChange}/>
                    <input type="submit" value="search" className='btn btn-dark btn-block'/>
                </form>
                
            </div>
        );
    }
}

export default Search;