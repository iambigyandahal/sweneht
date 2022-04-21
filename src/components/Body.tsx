import useFetch from "../hooks/useFetch";
import { TOP_STORIES } from "../utilties/api";
import News from "./News";

const Spinner = () => {
  return (
    <section className="container">
      <div style={{borderTopColor: "transparent"}}
          className="mx-auto mt-[10px] w-10 h-10 border-[7px] border-zinc-400 border-solid rounded-full animate-spin"
      ></div>
    </section>
    )
}

const Body = () => {
  const { isLoading, data } = useFetch(TOP_STORIES);
  
  if(isLoading) return <Spinner />

  return (
    <main className="px-2">
      <section>
        {data.splice(0, 10).map((id: number) => {
          return (
            <News key={id} data={id} />
          )
        })}
      </section>
    </main>
  )
}

export default Body