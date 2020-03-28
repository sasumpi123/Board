import React from 'react';
import '../styles/Article.css';

class Article extends React.Component {
    render() {
        const { title, content, _id, onDelete } = this.props;
        return (
            <div className="Article">
                <div className="title">{title}</div>
                <div className="content">{content}</div>
                <button className="delete-button"onClick={() => onDelete(_id)}>X</button>
            </div>
        );
    }
}

export default Article;