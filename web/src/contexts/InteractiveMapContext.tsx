import { ReactNode, createContext, useContext, useCallback, useEffect } from 'react';
import { useQueryState } from 'next-usequerystate';
import { Operator } from 'src/@types/sanity';

interface InteractiveMapContextType {
  isMapVisible: string | null;
  operators: Array<Operator>;
  selectedOperator: string | null;
  setSelectedOperator: (operator: string | null) => void;
  openMap: () => void;
  closeMap: () => void;
  getRandomOperator: () => string | null;
}

// Define el valor por defecto
const defaultContextValue: InteractiveMapContextType = {
  isMapVisible: null,
  operators: [],
  selectedOperator: null,
  setSelectedOperator: () => {},
  openMap: () => {},
  closeMap: () => {},
  getRandomOperator: () => null,
};

// Crea el contexto
const InteractiveMapContext = createContext<InteractiveMapContextType>(defaultContextValue);

// Hook para usar el contexto
const useInteractiveMapContext = () => {
  const context = useContext(InteractiveMapContext);
  if (!context) {
    throw new Error(
      'useInteractiveMapContext debe ser utilizado dentro de InteractiveMapProvider'
    );
  }
  return context;
}

interface InteractiveMapProviderProps {
  children: ReactNode; // Asegúrate de que esto es ReactNode
  operators: Array<Operator>;
}

const InteractiveMapProvider: React.FC<InteractiveMapProviderProps> = ({ children, operators }) => {
  const [isMapVisible, setIsMapVisible] = useQueryState('imv', { history: 'replace', scroll: false });
  const [selectedOperator, setSelectedOperator] = useQueryState('so', { history: 'replace', scroll: false });

  const openMap = useCallback(() => {
    setIsMapVisible('true');
  }, [setIsMapVisible]);

  const closeMap = useCallback(() => {
    setIsMapVisible(null);
    setSelectedOperator(null);
  }, [setIsMapVisible]);

  const getRandomOperator = useCallback(() => {
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    return randomOperator?.name ?? null;
  }, [operators]);

  useEffect(() => {
    if (selectedOperator) {
      openMap();
    }
  }, [selectedOperator, openMap]);

  useEffect(() => {
    if (operators.length > 0) {
      operators.forEach((operator: Operator) => {
        const firstBlockText = operator.description[0]?.children[0]?.text;
        if (!operator.shortDescription && typeof firstBlockText === 'string') {
          operator.shortDescription = firstBlockText.split('.')[0] + '.';
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
      }}
    >
      {children} {/* Asegúrate de que children se pase correctamente */}
    </InteractiveMapContext.Provider>
  );
}

export { useInteractiveMapContext, InteractiveMapProvider };
