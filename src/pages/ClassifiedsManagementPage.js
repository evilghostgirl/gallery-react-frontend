import React from 'react';
import get from '../services/apiService.js';
import url from '../config/endpoints.js';
import CustomNavbar from '../components/common/CustomNavbar.js';
import CustomFooter from '../components/common/CustomFooter.js';
import ClassifiedsManagementPanel from '../components/classifieds/ClassifiedsManagementPanel.js';

const ClassifiedsManagementPage = () => {
  const [classifieds,
    setClassifieds] = React.useState([])

    
    React.useEffect(() => {
      async function getClassifieds() {
        let classifieds
        let classifiedsUrl = url.userClassifieds;
        try {
          classifieds = await get(classifiedsUrl)
          setClassifieds(classifieds)
        } catch (e) {
          console.log(e)
        }
      }
      getClassifieds()
    },[])
  return <div>
    <CustomNavbar/>
    
    <div className="uk-container uk-margin-medium-top">
     {classifieds ? <ClassifiedsManagementPanel classifieds={classifieds}/> :"These account didn't exists"}
    </div>

      <CustomFooter/>
    </div>

}

export default ClassifiedsManagementPage;

