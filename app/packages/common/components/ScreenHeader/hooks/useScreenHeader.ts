import { useEffect, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { useSelector } from 'react-redux';
import { bottomTabSelector } from 'common/redux/selector';

const useScreenHeader = (props) => {
  const [renderSearchBar, setRenderSearchBar] = useState(false)
  const [searchInputValue,setSearchInput] = useState('');
 const bottomTab = useSelector(bottomTabSelector)
  const setSearchState = () => {
    LayoutAnimation.easeInEaseOut()
    setRenderSearchBar((prevState)=> !prevState)
  }
  
  const handleSearchTextChange = (value:string) =>{
    setSearchInput(value)
    props.getSearchText(value)
  }
 const toggleHandler= () =>{
    if(renderSearchBar && searchInputValue !== ''){
      setSearchInput('')
      props.getSearchText('')
    }
    else{
      setSearchState()
      props.getSearchText('')
    }
  }
  
  const handleClearText = () =>{
    setSearchInput('')
  }
  
  useEffect(() => {
    setRenderSearchBar(false)
  }, [bottomTab]);
  

  return {
    searchInputValue,
    renderSearchBar,
    setSearchState,
    handleSearchTextChange,
    handleClearText,
    toggleHandler
  };
};

export default useScreenHeader;
