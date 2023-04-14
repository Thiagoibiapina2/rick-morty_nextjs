import Image from "next/image"

export default function Loading () {
    return (
        <div>
        <Image 
        src={"/images/loader.gif"}
        width="850" 
        height="900" 
        alt="Loader.."
        className="load" />
      </div>
    )
}