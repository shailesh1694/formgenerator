import './App.css';
import AddEditField from './components/AddEditField';
import { useState } from 'react';
import { typeArray } from './constant';
import GenerateForm from './components/GenerateForm';
import ShowForms from './components/ShowForms';

function App() {
  const [formData, setformData] = useState([])
  const [isEdited, setIsEdited] = useState({ status: false, data: {} })
  const [showFroms, setShowFroms] = useState(JSON.parse(localStorage.getItem("forms")) || [])

  const addFormField = (data) => {
    let tagname = typeArray.find((val) => val.value === data.Type)
    let random = Math.floor(Math.random() * 1000)
    setformData([...formData, { ...data, tag: tagname.tag, id: random }])
  }

  const handleDelet = (item) => {
    setformData((pre) => pre.filter((val) => val.id !== item.id));
    setIsEdited((pre) => { return { ...pre, status: false, data: {} } })
  }

  const updateField = (data) => {
    setformData((pre) => pre.map((item) => {
      if (item.id === data.id) {
        return { ...data, tag: typeArray.find((val) => val.value === data.Type)?.tag }
      }
      return item;
    }))
    setIsEdited((pre) => { return { ...pre, status: false, data: {} } })
  }

  const generateFormJson = () => {

    if (showFroms.length > 0) {
      setShowFroms([formData,...showFroms])
      localStorage.setItem("forms", JSON.stringify([formData, ...showFroms]))
    } else {
      setShowFroms([formData])
      localStorage.setItem("forms", JSON.stringify([formData]))
    }
    setformData([])
    setIsEdited((pre) => { return { ...pre, status: false, data: {} } })
  }

  return (
    <div className='grid-container'>
      <div className='grid-item'>
        {formData.map((item) =>
          <GenerateForm
            key={item.id}
            item={item}
            isEdited={isEdited}
            setIsEdited={setIsEdited}
            handleDelet={handleDelet}
          />
        )}
        {formData.length ? <button className='add_button' onClick={generateFormJson}>GenerateForm</button> : null}
      </div>

      <div className='grid-item mid_grid'>
        {
          isEdited.status
            ? <AddEditField key={isEdited?.data?.id} isEdited={isEdited} handleFormField={updateField} />
            : <AddEditField key={isEdited?.data?.id} isEdited={isEdited} handleFormField={addFormField} />
        }
      </div>

      <div className='grid-item'>
        <ShowForms showFroms={showFroms} />
      </div>
    </div>
  );
}

export default App;
