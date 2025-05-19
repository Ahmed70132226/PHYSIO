import React from 'react'

const ErrorPage = () => {
    return(
        <div className= 'text-center m-5 text-danger'>
            <h1>Oops! Page Not Found </h1>
            <p className="lead text-muted mb-4">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>        </div>
    )
}

export default ErrorPage