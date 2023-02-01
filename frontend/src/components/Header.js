import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
        <h1>{title}</h1>
        <Button text={showAdd ? 'Close' : 'Add'} showAdd={showAdd} onAdd={onAdd} />
    </header>
  )
}

export default Header