import React from 'react';

export default ({ input, label, id,  meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px'}} />
            <div className="blue-text" style={{ marginBottom: '20px' }}>
             {touched && error}
            </div>
        </div>
    );
};