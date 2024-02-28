import React, { useState } from "react";

const Hierarchical = () => {
   const  section = [{
            name: "Section",
            label : [{
                name: "label",
                que: [{
                    name: "Question",
                    or:[{
                        name:"OR",
                    }]
                }]
            }]
   }];
  return (
    <>
    <div>
        {
            section?.map((propt)=>{
                return(
                    <>
                        <ul>
                            <li>
                                <label>
                                <input type="radio"  name="options" value="option2"/>
                                {propt.name}
                                </label>
                            </li>
                        </ul>
                    </>
                )
            })
        }
    </div>
   </>
)};

export default Hierarchical;
