import React, {useEffect, useState} from 'react';
import {useSDK} from "../../extremum/sdk/hooks/useSDK";
import {EntityModel} from "extremum-sdk/lib/interfaces";

interface IBucketsProps {
}

const Models = () => {

    const [models,setModels] = useState<EntityModel[]>()

    const client = useSDK()


    useEffect(()=>{
        client.management.storage.models.list().then(
            res => {
                setModels(res)
            }
        ).catch(er =>console.log(er))
    },[])

    return (
        <div>
            <h2>Hello world!</h2>

            <h4>Example of models from SDK:</h4>
            {
                models?.map( model => (<div>
                    {
                        model.name
                    }
                </div>)
                )
            }
        </div>
    );
};

export default Models;
