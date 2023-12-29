import Pagination from "./components/Pagination";

interface Props {
  searchParams: {
    page: String;
  }
}

export default function Home({ searchParams }: Props) {
  return (
    <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)}/>
  )
}
