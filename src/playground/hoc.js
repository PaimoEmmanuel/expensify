console.log('hoccccccccc');
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Infoo</h1>
    <p>This is info {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) =>{
    return(props) => (
        <div>
            { props.isAdmin && <p>This info is private</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        { props.isAuthenticated && <p>This info is private</p>}
        { props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please log in to view the info</p> }
        </div>
    )
}
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated = {true} info='Yahhhh'/>, document.getElementById('app'))