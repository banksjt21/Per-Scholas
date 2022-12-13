// import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";

export default function Home(props) {
  return (
    <section>
      <header>
        <h1>Employee Directory</h1>
      </header>
      <SearchBar />
      <EmployeeList />
    </section>
  );
}