const ProgressBar = props => {
  const { bgcolor, completed } = props

  const containerStyles = {
    height: '5px',
    width: '100%',
    backgroundColor: '#c7f5b0',
    borderRadius: 50,
    margin: '2px 0 0 2px',
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar
