// eslint-disable-next-line react/prop-types
const Button = ({ name }) => {
  return (
    <div>
        <button className="m-3 bg-gray-300 rounded-lg px-5 py-2">{name}</button>
    </div>
  )
}

export default Button