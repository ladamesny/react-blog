import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // Blogpost has been created. Navigate the user to the index.
        // We navigate by calling this.context.router.push with new path to navigate to
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>

        <div className={`form-group ${addValidationClass(title)}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            { title.touched ? title.error : '' }
          </div>
        </div>

        <div className={`form-group ${addValidationClass(categories)}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            { categories.touched ? categories.error : '' }
          </div>
        </div>

        <div className={`form-group ${addValidationClass(content)}`}>
          <label>Content</label>
          <textarea className="form-control" rows="6" {...content} />
          <div className="text-help">
            { content.touched ? content.error : '' }
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Create</button>
        <Link to='/' className="btn btn-danger" >
          Cancel
        </Link>
      </form>
    );
  }
}


function addValidationClass(field) {
  if (field.touched && field.invalid) {
    return 'has-danger';
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Please enter a title.";
  }

  if (!values.categories) {
    errors.categories = "Please enter categories.";
  }

  if (!values.content) {
    errors.content = "Please enter some content";
  }

  return errors;
}

// connect: 1st argument is mapStateToProps and 2nd argument is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps and 3rd argument is mapDispatchToProps
export default reduxForm({
  form: "PostsNewForm",
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
