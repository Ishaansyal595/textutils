import React from 'react'

function alert(props) {

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
        {props.alert.mssg}: <strong>{capitalize(props.alert.typ)}</strong>
    </div>
  )
}

export default alert
