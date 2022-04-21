import useFetch from "../hooks/useFetch";
import humango from "humango";
import { ITEM, USER } from "../utilties/api";

const Loading = () => {
  return (
    <article className="mt-[10px] py-[10px] px-[20px] bg-white rounded-lg">
      <h3 className="h-3 bg-zinc-400 rounded w-[70%]"></h3>
      <p className="flex gap-x-[5px] items-center py-[10px]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <small className="h-2 bg-zinc-400 rounded w-[50px]"></small>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <small className="h-2 bg-zinc-400 rounded w-[50px]"></small>
      </p>
    </article>
  )
}

const News = (props: { data: number }) => {
  const { isLoading, data } = useFetch(ITEM(props.data));

  if(isLoading) return <Loading />

  return (
    <article className="mt-[10px] py-[10px] px-[20px] bg-white rounded-lg">
      <h3 className="text-lg"><a className="hover:text-[#209cee] hover:underline" href={data.url}>{data.title}</a></h3>
      <p className="flex gap-x-[5px] items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <small>{data.by}</small>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <small>{humango(data.time*1000)}</small>
      </p>
    </article>
  )
}

export default News