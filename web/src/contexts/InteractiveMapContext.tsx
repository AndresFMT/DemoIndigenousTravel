import { ReactNode, createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { useLocalStorage } from 'src/hooks';

import { LatLngExpression } from 'leaflet';
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
  const [isMapVisible, setIsMapVisible] = useLocalStorage('isMapVisible', false);
  const searchParams = useSearchParams();
  const operator = searchParams?.has('operator') ? searchParams.get('operator') : null;

  const [selectedOperator, setSelectedOperator] = useState<string | null>(operator);

  const openMap = useCallback(() => {
    console.log('open map');
    setIsMapVisible(true);
  }, [setIsMapVisible]);

  const closeMap = useCallback(() => {
    console.log('close map');
    setIsMapVisible(false);
  }, [setIsMapVisible]);

  useEffect(() => {
    if (selectedOperator) {
      openMap();
    }
  }, [selectedOperator, openMap]);

  useEffect(() => {
    if (operators.length > 0) {
      operators.forEach((operator: Operator ) => {
        const firstBlockText = operator.description[0]?.children[0]?.text;
        if ( typeof firstBlockText === 'string' ) {
          operator.shortDescription =  firstBlockText.split('.')[0] +'.';
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
        closeMap
      }}>
      {children}
    </InteractiveMapContext.Provider>
  );
}

export { useInteractiveMapContext, InteractiveMapProvider };

