import React from 'react';
import {Field, reduxForm, InjectedFormProps, getFormMeta} from 'redux-form';

interface Props {}

class StreamCreate extends React.Component<Props & InjectedFormProps<{}, Props>> {

    renderError({error, touched}:{error:string, touched:boolean}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}:{input:any, label:any, meta:any}) => {
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues:any) => {
        console.log(formValues);
    }
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues:any) => {
    const errors = {} as any;

    if(!formValues.title) {
        errors.title = 'You must enter a title.';
    }

    if(!formValues.description) {
        errors.description = 'You must enter a description.';
    }

    return errors;
}


export default reduxForm<{}, Props>({
    form: 'streamCreate',
    validate
})(StreamCreate);