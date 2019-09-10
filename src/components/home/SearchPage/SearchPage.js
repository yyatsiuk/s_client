import React from "react";
import "./SearchPage.scss";


class SearchPage extends React.Component {
    render() {
        return (
                <section className="flexbox">
                    <div className="stretch">
                        <input type="text" placeholder="Search..." />
                        <button type='submit'><i className='fas fa-search'></i></button>
                    </div>
                </section>
        )
    }
}

export default SearchPage;