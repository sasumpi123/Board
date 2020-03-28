import React from "react";
import '../styles/WriteArticle.css';

class WriteArticle extends React.Component {
    state = {
        title: '',
        content: '',
    };
    changeTitle(e) {
        const title = e.target.value;
        this.setState({ title });
    }

    changeContent(e) {
        const content = e.target.value;
        this.setState({ content });
    }
    render() {
        const { title, content } = this.state;
        const { createArticle } = this.props;
        return <div className="WriteArticle">
            <textarea className="title" onChange={this.changeTitle.bind(this)} value={title} placeholder="insert title"></textarea>
            <textarea className="content"  onChange={this.changeContent.bind(this)} value={content} placeholder="insert content"></textarea>
            <button className="create"  onClick={async () => {
                createArticle({ title, content });
                this.setState({ title: '', content: '' });
            }}>create</button>
        </div>;
    }
}

export default WriteArticle;
