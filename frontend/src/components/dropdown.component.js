import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterRobots } from "../redux/shop/shop.actions";

const DropDown = (props) => {

    const [material, setMaterial] = useState('')
    const [roboList, setRobolist] = useState([]);
    const dispatch = useDispatch();
    
    
    const collection = useSelector(state => state.shop.items)
    useEffect(() => {
        if (material != '') {

            let collections2 = collection.filter(function (el) {
                return el.material === material
            })
            setRobolist(collections2)
            dispatch(filterRobots(collections2));
        }
        
    }, [material])
    
    
    let result = [...new Set(collection.map(collection => collection.material))];
    
    let MaterialList = result.map((item) => {
        return (
            <option value={item.id}>{item}</option>
        )
    });
    return (
        <select onChange={value=>setMaterial(value.target.value)}>
          {MaterialList}
        </select>
    );
}
export default DropDown