import './index.css'

const TabItem = props => {
  const {tabDetails, clickActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickActiveTab(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem