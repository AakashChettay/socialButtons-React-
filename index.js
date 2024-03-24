const Button = props => {
  const {children, bgColor, color} = props
  const buttonStyle = {
    backgroundColor: bgColor,
    color: color
  }
  return (
    <button className='buttonStyle' style={buttonStyle}>
      {children}
    </button>
  )
}

const element = (
  <div className='bgContainerStyle'>
    <h1 className='headingStyle'>Social Buttons</h1>
    <div className='buttonsContainerStyle'>
      <Button children='Like' bgColor='#eab308' />
      <Button children='Comment' bgColor='#ffffff' color="black"/>
      <Button children='Share' bgColor='#1d4ed8' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
