
import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./Card";



const Main = ()=>{


    console.log(data);

    return(
        <div className="card-container">

            {data.map((item)=> <Card name = "eko" {...item} key={item.id} /> )}
        </div>
    )
}

export default Main;