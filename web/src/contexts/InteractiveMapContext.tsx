import { ReactNode, createContext, useContext,  useCallback, useEffect } from 'react';
import { useQueryState } from 'next-usequerystate';

import { Operator } from 'src/@types/sanity';

const InteractiveMapContext = createContext<any>(null);

const useInteractiveMapContext = () => {

  const context = useContext(InteractiveMapContext);
  if (!context) {
    throw new Error(
      'useInteractiveMapContext must be used within a InteractiveMapProvider'
    );
  }
  return context;
}

interface InteractiveMapProviderProps {
  children: ReactNode;
  operators: Array<Operator>;
}

const InteractiveMapProvider = ({ children, operators }: InteractiveMapProviderProps) => {

  const [isMapVisible, setIsMapVisible] = useQueryState('imv', {history: 'replace', scroll:false}); // is map visible
  const [selectedOperator, setSelectedOperator] = useQueryState('so', {history: 'replace', scroll:false}); // selected operator


  const openMap = useCallback(() => {
    setIsMapVisible('true');
  }, [setIsMapVisible]);

  const closeMap = useCallback(() => {
    setIsMapVisible(null);
    setSelectedOperator(null);
  }, [setIsMapVisible]);

  const getRandomOperator = useCallback(() => {
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    return randomOperator?.name ? randomOperator?.name: null;
  }, [operators]);

  useEffect(() => {
    if (selectedOperator) {
      openMap();
    }
  }, [selectedOperator, openMap]);

  useEffect(() => {
    if (operators.length > 0) {
      operators.forEach((operator: Operator ) => {
        const firstBlockText = operator.description[0]?.children[0]?.text;
        if ( !operator.shortDescription && typeof firstBlockText === 'string' ) {
          operator.shortDescription =  firstBlockText.split('.')[0] +'.';
        }
        if (typeof operator.zoomLevel === 'undefined' || !operator.zoomLevel) {
          operator.zoomLevel = 15;
        }
      });
    }
  }, [operators]);

  return (
    <InteractiveMapContext.Provider
      value={{
        isMapVisible,
        operators,
        selectedOperator,
        setSelectedOperator,
        openMap,
        closeMap,
        getRandomOperator,
      }}>
      {children}
    </InteractiveMapContext.Provider>
  );
}

export { useInteractiveMapContext, InteractiveMapProvider };

