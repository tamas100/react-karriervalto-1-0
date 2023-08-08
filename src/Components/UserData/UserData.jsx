import React from 'react'

export default function UserData({name, email}) {
  return (
    <div>
      {name} &lt;{email}&gt;
    </div>
  )
}
