import { ReactNode, createContext, useState } from 'react';

import { useLocalStorage } from 'src/hooks';

import { LatLngExpression } from 'leaflet';

const InteractiveMapContext = createContext<any>(null);

const InteractiveMapProvider = ({ children }: { children: ReactNode }) => {
  const [isMapVisible, setIsMapVisible] = useLocalStorage('isMapVisible', false);
  const [selectedOperator, setSelectedOperator] = useState<LatLngExpression | null>(null);
  const operators =
    [
      [
        54.4246545703467,
        -95.86323273656448
      ],
      [
        59.52151782096793,
        -93.93312040326924
      ],
      [
        55.727303513058544,
        -101.03988141194525
      ],
      [
        58.87787595048721,
        -95.55367832189602
      ],
      [
        49.26965792788115,
        -100.3772156719209
      ],
      [
        54.99730039194837,
        -95.95483618947014
      ],
      [
        51.59578445011989,
        -100.49643651753695
      ],
      [
        58.86109858475008,
        -93.45830450593365
      ],
      [
        52.38953695798411,
        -93.89028380041077
      ],
      [
        56.01666003149069,
        -96.66461546563849
      ],
      [
        50.02142590486073,
        -99.02934962870641
      ],
      [
        56.05846023186556,
        -99.94917570151765
      ],
      [
        57.54701040066623,
        -96.9092344269201
      ],
      [
        49.35776174772311,
        -100.23198473384733
      ],
      [
        55.705303923663934,
        -99.50829658756646
      ]
    ]

  return (
    <InteractiveMapContext.Provider
      value={{
        isMapVisible,
        setIsMapVisible,
        operators,
        selectedOperator,
        setSelectedOperator
      }}>
      {children}
    </InteractiveMapContext.Provider>
  );
}

export { InteractiveMapContext, InteractiveMapProvider };

