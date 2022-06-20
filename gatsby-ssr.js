import React from "react";
import { SearchContext } from "./src/context/SearchContext";

export const onRenderBody = ({setBodyAttributes,pathname,}) => {
    setBodyAttributes({
      style: {
        backgroundColor: 'black',
        color:'#fff'
      },
    });
  }
export const wrapRootElement = ({element}) =>{
    return(
        <SearchContext>
            {element}
        </SearchContext>
    )
}