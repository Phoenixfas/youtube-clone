import "./SidebarRow.css"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

function SidebarRow({title, Icon, selected}) {
  const { value } = useSelector((state) => state.sidebarToggler)
  const [isHidden, setIsHidden] = useState("")

  useEffect(() => {
    if(value) {
      setTimeout(() => {
        setIsHidden("")
      }, 300)
    }else{
      setIsHidden("hidden")
    }
  }, [value])

  return (
  <div className={`sidebarRow ${selected && "selected"} ${isHidden}`}>
        <Icon className="sidebarRow__icon" />
        <h2 className="sidebarRow__title" >{title}</h2>
    </div>
  )
}

export default SidebarRow