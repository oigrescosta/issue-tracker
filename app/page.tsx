import Pagination from "./components/Pagination";

interface Props {
  searchParams: {
    page: number;
  }
}

export default function Home({ searchParams }: Props) {
  return (
    <Pagination itemCount={100} pageSize={10} currentPage={searchParams.page}/>
  )
}
