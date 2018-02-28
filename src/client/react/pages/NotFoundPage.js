import React from 'react'

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return (
    <div>
      Sorry, Page Not Found
    </div>
  )
}

export default {
  component: NotFoundPage
}
