import { apisCall } from "../lib/apisCall";

export async function getServerSideProps() {
   const data = apisCall()
   console.log(data);
    return {
      props: {
        apiData
      }
    }
  }


export default function ApiCallDemo({apiData}) {
  return <h1>Here will be your api call data</h1>;
}
