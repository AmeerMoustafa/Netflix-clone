import "../../styles/utilities.css";
import "../../styles/moviepage.css";

const Castlist= ({cast},i,j)=>{
const c1=cast.slice(0,4);
const c2=cast.slice(4,8); 
const c3= cast.slice(8,12); 

return(
    <>
    <ul>
    {c1.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>

    <ul>
    {c2.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
  
    <ul>
    {c3.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
  </>
)
}
export default Castlist