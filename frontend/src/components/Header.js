import Button from "./Button"

const Header = ({ title, onAdd }) => {
  return (
    <header>
        <h1>{title}</h1>
        <Button text='Add' onAdd={onAdd} />
    </header>
  )
}

export default Header