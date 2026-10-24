function Profile({ staticData }) {
  return (
    <div>{staticData.title ?? 'Profile'}</div>
  )
}

export default Profile