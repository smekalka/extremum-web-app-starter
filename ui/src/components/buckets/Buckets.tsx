import React, {useState} from 'react';
import SDK from "../../extremum/modules/sdk/SDK";
import {useSDK} from "../../extremum/hooks/useSDK";

interface IBucketsProps {
}

const Buckets = () => {

    const [buckets,setBuckets] = useState()

    const client = useSDK()

    client.management.storage.buckets.list().then(
        res => {
            console.log(res, "RESULT")
        }
    ).catch(er =>console.log(er))
    return (
        <div>
            {

            }
            {/*<SDK>*/}
            {/*    {*/}
            {/*        client => client.management.storage.buckets.list().then(res=><div></div>)*/}
            {/*    }*/}
            {/*</SDK>*/}

        </div>
    );
};

export default Buckets;
