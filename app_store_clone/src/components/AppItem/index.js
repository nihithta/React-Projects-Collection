import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <>
      <li className="project-item-container">
        <img className="project-item-image" src={imageUrl} alt={appName} />
        <p className="project-item-description">{appName}</p>
      </li>
    </>
  )
}

export default AppItem