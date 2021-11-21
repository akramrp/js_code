import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {
    return (
        <>
            <div className="my-5 " >
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx auto">
                        <div className="row  gy-5">
                            { 
                                Sdata.map((val, indx) => {
                                    //console.log(val.imgsrc);
                                    return <Card key={indx} imgsrc={val.imgsrc} title={val.title} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;