import { render, screen } from '@testing-library/react';
//import Hello from './components/Hello';
import DeleteDealer from './Components/controller/DealerController/DeleteDealer';
import GetAllDealer from './Components/controller/DealerController/GetAllDealer';
import AddDealer from './Components/controller/DealerController/AddDealer';
import GetDealerById from './Components/controller/DealerController/GetDealerById';
//import SpringBootData from './components/SpringBootData';
import { Provider } from 'react-redux';
import store from './redux/store';
import UpdateDealer from './Components/controller/DealerController/UpdateDealer';
//import GetCompanyById from './Components/controller/GetCompanyById';


// import { render, screen } from '@testing-library/react';
// import App from './App';
// // import { Provider } from 'react-redux';
// // import AddCompany from './Components/controller/AddCompany';

// test('renders learn react link', () => {
//   render(<App/>);
   
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforreEach');
});

test('render Data  Delete dealer by id', () => {
  render(
    <Provider store={store} >
      <DeleteDealer />
    </Provider>)
  const linkElement = screen.getByText('Delete dealer by id');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Add New Dealer', () => {
  
  render(
    <Provider store={store} >
      {/* <Dealer /> */}
      <AddCompany/>
    </Provider>)
  const linkElement = screen.getByText('Add New Company');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from List of all Company', () => {
   
  render(
    <Provider store={store} >
      {/* <EmpData /> */}
       <GetAllDealer/>
    </Provider>)
  const linkElement = screen.getByText('List of all Dealer');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from   Get Dealer By Id', () => {
   
  render(
    <Provider store={store} >
       <GetDealerById/>
    </Provider>)
  const linkElement = screen.getByText('Get Company By Id');
  expect(linkElement).toBeInTheDocument();
});
 
test('render Data from Update New Dealer', () => {
   
  render(
    <Provider store={store} >
       <UpdateDealer/>
    </Provider>)
  const linkElement = screen.getByText('Update New Dealer');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Add New Dealer', () => {
   
  render(
    <Provider store={store} >
       <AddDealer/>
    </Provider>)
  const linkElement = screen.getByText('Update New Dealer');
  expect(linkElement).toBeInTheDocument();
});