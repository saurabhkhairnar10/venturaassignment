import IpoLists from './component/IpoLists';
import IpoDetail from './component/IpoDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  const ipoData = [
    {
      id: 1,
      logo: 'https://logodix.com/logo/1938529.jpg',
      name: 'GO AIR',
      date: '4th - 7th Oct 2022',
      issueSize: '₹3600 Crores',
      minInvest: '₹50,000',
      minQty: '100 Shares/5 Lots',
      companyType: 'GO AIR Private Limited',
      priceRange: '₹100 - 200',
      lotSize: '150 shares/lots',
      issueDates: '12 Dec - 15 Dec 22',
      listedOn: '15 Dec 22',
      listedPrice: '₹150',
      listingGains: '₹10 (10.0%)',
      'About the company':'Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio enim sit corporis galisum est quisquam magni ea sequi maxime. Aut incidunt adipisci in fuga necessitatibus aut inventore enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non repellendus harum.'
    },
    {
      id: 2,
      logo: 'https://img.etimg.com/thumb/msid-68748425,width-1070,height-580,imgsize-253223,overlay-etmarkets/photo.jpg',
      name: 'BAJAJ ENERGY',
      date: '4th - 7th Oct 2022',
      issueSize: '₹3600 Crores',
      minInvest: '₹50,000',
      minQty: '100 Shares/5 Lots',
      companyType: 'GO AIR Private Limited',
      priceRange: '₹100 - 200',
      lotSize: '150 shares/lots',
      issueDates: '12 Dec - 15 Dec 22',
      listedOn: '15 Dec 22',
      listedPrice: '₹150',
      listingGains: '₹10 (10.0%)',
      'About the company':'Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio enim sit corporis galisum est quisquam magni ea sequi maxime. Aut incidunt adipisci in fuga necessitatibus aut inventore enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non repellendus harum.'
    },
    {
      id: 3,
      logo: 'https://logodix.com/logo/738766.png',
      name: 'OYO',
      date: 'To be announced',
      issueSize: '₹3600 Crores',
      minInvest: '₹50,000',
      minQty: '100 Shares/5 Lots',
      companyType: 'GO AIR Private Limited',
      priceRange: '₹100 - 200',
      lotSize: '150 shares/lots',
      issueDates: '12 Dec - 15 Dec 22',
      listedOn: '15 Dec 22',
      listedPrice: '₹150',
      listingGains: '₹10 (10.0%)',
      'About the company':'Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio enim sit corporis galisum est quisquam magni ea sequi maxime. Aut incidunt adipisci in fuga necessitatibus aut inventore enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non repellendus harum.'
    },
  ];

  return (
    <Router>
    <Routes>
      <Route path="/" element={<IpoLists ipoData={ipoData}/>} />
      <Route path="/ipo/:id" element={<IpoDetail ipoData={ipoData}/>} />
    </Routes>
  </Router>
  );
}

export default App;
