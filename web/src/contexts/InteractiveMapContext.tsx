import { ReactNode, createContext, useContext, useState, useCallback } from 'react';

import { useLocalStorage } from 'src/hooks';

import { LatLngExpression } from 'leaflet';

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

const InteractiveMapProvider = ({ children }: { children: ReactNode }) => {
  const [isMapVisible, setIsMapVisible] = useLocalStorage('isMapVisible', false);
  const [selectedOperator, setSelectedOperator] = useState<LatLngExpression | null>(null);

  const openMap = useCallback(() => {
    console.log('open map');
    setIsMapVisible(true);
  }, [setIsMapVisible]);

  const closeMap = useCallback(() => {
    console.log('close map');
    setIsMapVisible(false);
  }, [setIsMapVisible]);

  const operators =
    [
      {
      position:
      [
        54.4246545703467,
        -95.86323273656448
      ],
      },
      {
      position:
      [
        59.52151782096793,
        -93.93312040326924
      ],
      },
      {
      position:
      [
        55.727303513058544,
        -101.03988141194525
      ],
      },
      {
      position:
      [
        58.87787595048721,
        -95.55367832189602
      ],
      },
      {
      position:
      [
        49.26965792788115,
        -100.3772156719209
      ],
      },
      {
      position:
      [
        54.99730039194837,
        -95.95483618947014
      ],
      },
      {
      position:
      [
        51.59578445011989,
        -100.49643651753695
      ],
      },
      {
      position:
      [
        58.86109858475008,
        -93.45830450593365
      ],
      },
      {
      position:
      [
        52.38953695798411,
        -93.89028380041077
      ],
      },
      {
      position:
      [
        56.01666003149069,
        -96.66461546563849
      ],
      },
      {
      position:
      [
        50.02142590486073,
        -99.02934962870641
      ],
      },
      {
      position:
      [
        56.05846023186556,
        -99.94917570151765
      ],
      },
      {
      position:
      [
        57.54701040066623,
        -96.9092344269201
      ],
      },
      {
      position:
      [
        49.35776174772311,
        -100.23198473384733
      ],
      },
      {
      position:
      [
        55.705303923663934,
        -99.50829658756646
      ]
      }
    ]

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

