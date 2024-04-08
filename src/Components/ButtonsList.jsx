import Button from "./Button"

const ButtonsList = () => {
    const list=["All","Live","Sports","Cricket","Football","Music","Live","Sports","Hockey","All","Live","Sports","Cricket","Football","Music","Live","Sports","Hockey"]
  return (
    <div className="flex overflow-scroll w-screen">
        {list.map((i,index)=><Button key={index} name={i}/>)}
    </div>
  )
}
export default ButtonsList