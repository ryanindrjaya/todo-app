import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
    };

    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onSearchChangeHandler(e) {
    e.persist();
    this.setState({ searchQuery: e.target.value}, () => {
      this.props.searchNote(this.state);
    });
  }

  render() {
    return (
      <header className="header__container">
        <h1 className="header__logo">Notes</h1>
        <form>
          <input
            type="text"
            className="header__searchBar"
            onChange={this.onSearchChangeHandler}
            defaultValue=''
            placeholder='Cari catatan ...'
          />
        </form>
      </header>
    );
  }
}

export default Header;
