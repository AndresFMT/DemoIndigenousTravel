import { ReactNode, createContext } from 'react';

type Props = {
  value: {
   title: string ,
   description: string,
   facebookLink: string,
   twitterLink: string,
   instagramLink: string,
   linkedinLink: string,
  };
  children: ReactNode;
};

const initialState:Props["value"] = {
  title: '',
  description: '',
  facebookLink: '#facebook',
  twitterLink: '#twitter',
  linkedinLink: '#linkedin',
  instagramLink: '#instagram',
};

const SiteSettingsContext = createContext( initialState );
const SiteSettingsProvider = ( { value, children }: Props ) => {

  return (
    <SiteSettingsContext.Provider
      value={{...initialState, ...value}}
    >
      {children}
    </SiteSettingsContext.Provider>
  );
}

export { SiteSettingsProvider, SiteSettingsContext };

