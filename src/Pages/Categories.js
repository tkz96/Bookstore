import { useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import Header from '../Components/Header';
import Button from '../Components/Button';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  return (
    <>
      <Header />
      <h1>Categories</h1>
      <Button type="button" title="Check Status" checkStatus={checkStatus} />
      <p>{status}</p>
    </>
  );
};

export default Categories;
