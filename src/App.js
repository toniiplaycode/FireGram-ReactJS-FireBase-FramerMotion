import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Title from './components/Title';
import FormUpload from './components/FormUpload';
import ImageGrid from './components/ImageGrid';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="container d-flex flex-column text-center">
      <Title />
      <FormUpload/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {
        selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
      }
    </div>
  );
}

export default App;
