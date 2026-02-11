import React, {
  createContext,
  useContext,
  ReactNode,
  useState
}
  from 'react';

interface ClearCallback {
  name: string;
  callback: () => void;
  checkHasData: () => boolean;
}

interface FilterContextType { //Criação do contexto para o filtro limpa o formulário e os filtros 
  onClearFilters: () => void;
  registerClearCallback: (name: string, callback: () => void, checkHasData: () => boolean) => void;
} //

const FilterContext = createContext<FilterContextType | undefined>(undefined); 

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => { 
  const [clearCallbacks, setClearCallbacks] = useState<ClearCallback[]>([]); 

  const registerClearCallback = (name: string, callback: () => void, checkHasData: () => boolean) => {
    setClearCallbacks(prev => {
      // Remove se já existe com o mesmo nome
      const filtered = prev.filter(cb => cb.name !== name);
      return [...filtered, { name, callback, checkHasData }];
    });
  };

  const onClearFilters = () => {
    // Executa apenas os callbacks dos formulários que têm dados preenchidos
    clearCallbacks.forEach(cb => {
      if (cb.checkHasData()) {
        cb.callback();
      }
    });
  };

  return ( //Fornece os valores para o componente filho, permitindo que acessem a função ao invés de passar pela props
    <FilterContext.Provider value={{ onClearFilters, registerClearCallback }}> 
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};
